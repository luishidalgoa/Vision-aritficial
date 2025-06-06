import express from 'express';
import multer from 'multer';
import fs from 'fs';
import tf from '@tensorflow/tfjs-node';

const app = express();
const upload = multer({ dest: 'uploads/' }); // carpeta temporal para subir imágenes

// Carga modelo y etiquetas guardadas
let model;
let labels;

async function loadModelAndLabels() {
  model = await tf.loadLayersModel('file://./model/model.json');
  labels = JSON.parse(fs.readFileSync('./model/labels.json', 'utf-8'));
}

function preprocessImage(path) {
  const imageBuffer = fs.readFileSync(path);
  return tf.node.decodeImage(imageBuffer, 3)
    .resizeBilinear([224, 224])
    .toFloat()
    .div(255.0)
    .expandDims(); // agrega dimensión batch
}

app.post('/predict', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No image uploaded.');
  }

  const CONFIDENCE_THRESHOLD = 0.6; // mínimo aceptable
  const UNCERTAINTY_MARGIN = 0.1;   // diferencia mínima con siguiente predicción

  try {
    const input = preprocessImage(req.file.path);
    const prediction = model.predict(input);
    const scores = prediction.arraySync()[0];

    // Limpia archivo temporal
    fs.unlinkSync(req.file.path);

    const sorted = scores
      .map((score, i) => ({ label: labels[i], score }))
      .sort((a, b) => b.score - a.score);

    const [best, secondBest] = sorted;

    if (best.score < CONFIDENCE_THRESHOLD) {
      return res.json({ label: 'desconocido', confidence: best.score });
    }

    if ((best.score - secondBest.score) < UNCERTAINTY_MARGIN) {
      return res.json({ label: 'difuso', confidence: best.score });
    }

    return res.json({
      label: best.label,
      confidence: best.score
    });

  } catch (error) {
    res.status(500).send('Error during prediction: ' + error.message);
  }
});


const PORT = process.env.PORT || 3000;

loadModelAndLabels().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor arrancado en puerto ${PORT}`);
  });
}).catch(err => {
  console.error('Error cargando modelo:', err);
});
