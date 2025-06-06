import fetch from 'node-fetch';
import tf from '@tensorflow/tfjs-node';
import fs from 'fs';

const TRAIN_JSON = './data/train.json';
const IMAGE_SIZE = 224;
const EPOCHS = 20;
const BATCH_SIZE = 8;

async function loadImage(url) {
  const response = await fetch(url);
  const buffer = await response.buffer();
  return tf.node.decodeImage(buffer, 3)
    .resizeBilinear([IMAGE_SIZE, IMAGE_SIZE])
    .toFloat()
    .div(255.0);
}

function encodeLabel(label, labelToIndex, numClasses) {
  if (!(label in labelToIndex)) {
    console.warn(`Etiqueta desconocida: ${label}`);
    return null;
  }
  const index = labelToIndex[label];
  return tf.oneHot(index, numClasses);
}

async function loadDataset() {
  const rawData = JSON.parse(fs.readFileSync(TRAIN_JSON)).cards;
  const allLabels = Array.from(new Set(rawData.map(item => item.name)));
  const labelToIndex = Object.fromEntries(allLabels.map((l, i) => [l, i]));

  const imagePromises = rawData.map(async item => {
    try {
      const imgTensor = await loadImage(item.images.standard);
      const labelTensor = encodeLabel(item.name, labelToIndex, allLabels.length);
      if (!labelTensor) return null;
      return { imgTensor, labelTensor };
    } catch (err) {
      console.error(`Error loading image ${item.images.standard}:`, err);
      return null;
    }
  });

  const results = (await Promise.all(imagePromises)).filter(Boolean);
  const images = results.map(r => r.imgTensor);
  const labels = results.map(r => r.labelTensor);

  return {
    xs: tf.stack(images),
    ys: tf.stack(labels),
    labelToIndex,
    indexToLabel: allLabels
  };
}

async function createModel(numClasses) {
  const mobilenet = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');

  for (const layer of mobilenet.layers) {
    layer.trainable = false;
  }

  const x = mobilenet.getLayer('conv_pw_13_relu').output;
  const flatten = tf.layers.flatten().apply(x);
  const dense = tf.layers.dense({ units: numClasses, activation: 'softmax' }).apply(flatten);
  const model = tf.model({ inputs: mobilenet.inputs, outputs: dense });

  model.compile({
    optimizer: tf.train.adam(0.0001),
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
  });

  model.summary();

  return model;
}

(async () => {
  console.log('Cargando datos...');
  const { xs, ys, labelToIndex, indexToLabel } = await loadDataset();

  console.log('Creando modelo...');
  const model = await createModel(ys.shape[1]);

  // Asegura carpeta de logs
  if (!fs.existsSync('./logs')) fs.mkdirSync('./logs');

  console.log('Entrenando modelo...');
  await model.fit(xs, ys, {
    epochs: EPOCHS,
    batchSize: BATCH_SIZE,
    validationSplit: 0.1,
    callbacks: tf.node.tensorBoard('./logs')
  });

  // Asegura carpeta de modelo
  if (!fs.existsSync('./model')) fs.mkdirSync('./model');

  console.log('Guardando modelo...');
  await model.save('file://./model');
  fs.writeFileSync('./model/labels.json', JSON.stringify(indexToLabel));

  console.log('✅ Modelo entrenado y guardado con éxito.');
})();
