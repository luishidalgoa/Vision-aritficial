<img width="314" alt="image" src="https://github.com/user-attachments/assets/6ad825ec-ea2a-4776-8d2a-ba05bc208369" />## Objetivo
El objetivo principal de la investigación es con averiguar si con javascript (recomendablemente TypeScript), es posible implementar visión artificial.

Dado unas imagenes de ejemplo sobre una tematica en concreto (Cromos), el modelo pueda identificar el cromo al que pertenece una foto hecha con el movil

## Requisitos:
- NodeJS
- TensorFlow

## Tareas 
- [ ] Se ha encontrado las librerias necesarias para la vision artificial
- [ ] Las fotos que debe analizar el modelo estan insertadas a fuego en el programa
- [ ] Si no se reconoce ningún cromo en la foto, el modelo lo avisa
- [ ] La visión es capaz de recnocer la carta y devolver el `title` de la carta


-----------
## Recursos
### Imagenes de cartas para el entrenamiento
[**Enlace al repositorio de imagenes**]()

### Objeto de cartas
````json
"cards": [
  {
    "index": 1,
    "name": "Escudo",
    "description": "Hermandad y Cofradía Nazarenos del tisimo Cristo de las grimas y María santisima de las Penas",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/1.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/1.png"
    }
  },
  {
    "index": 2,
    "name": "Cruz de Guía",
    "description": "Foto: Javier Barcones",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/2.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/2.png"
    }
  },
  {
    "index": 3,
    "name": "Foto Histórica",
    "description": "Primera salida de las Penas (2016).",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/3.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/3.png"
    }
  },
  {
    "index": 4,
    "name": "Virgen",
    "description": "La Virgen de las Penas es tallada por José Jiménez Mesa en 195",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/4.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/4.png"
    }
  },
  {
    "index": 5,
    "name": "Cristo",
    "description": "La imagen de Jesús en la Cruz el Santísimo Cristo delas Lágrirnas, es la obra de Miguel Arjona (1984).",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/5.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/5.png"
    }
  },
  {
    "index": 6,
    "name": "Bandera",
    "description": "Foto: Javier Cárdernas",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/6.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/6.png"
    }
  },
  {
    "index": 7,
    "name": "Corona",
    "description": "Foto: Valentín Moyano",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/7.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/7.png"
    }
  },
  {
    "index": 8,
    "name": "Paso de cristo",
    "description": "Santísimo Cristo de las Lágrimas en su salida procesional por las calles de Córdoba.",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/8.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/8.png"
    }
  },
  {
    "index": 9,
    "name": "Vara",
    "description": "Foto: Valentín Moyano",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/9.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/9.png"
    }
  },
  {
    "index": 10,
    "name": "Escudo",
    "description": "Domínica Hermandad del Santísimo Sacramento y Cofradía de Nazarenos de Nuestro Padre Jesús de los Afligidos en su Sagrada Presentación al pueblo, Nuestra Señora Reina del Cielo y Misericordia y San Vicente Ferrer.",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/10.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/10.png"
    }
  },
  {
    "index": 11,
    "name": "Cruz de Guía",
    "description": "Cruz Dominica estrenada en 2019. fue realizada por Francisco Sánchez Rodríguez actualmente es la mayor que procesiona en la Semana Santa Cordobesa",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/11.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/11.png"
    }
  },
  {
    "index": 12,
    "name": "Foto Histórica",
    "description": "Primera salida procesiona de Ntro. R.J. de los Afligidos en su Sagrada Presentación al Pueblo (2016).",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/12.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/12.png"
    }
  },
  {
    "index": 13,
    "name": "Trono de Pilato",
    "description": "Jamuga talladaen madera decorada con la tecnica tradicwnal dorado al agua cón panes de oro fino de 233/4 Kilaies realizada y donada su hechura por el artista Cordobés Joaquin Said Ray Martínez Estrenada en 2024",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/13.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/13.png"
    }
  },
  {
    "index": 14,
    "name": "Cristo",
    "description": "La talla de Ntro. Padre Jesús de los Afligidos está hecha en madera de cedro de 1,85 m. Destaca la policromía, la excelente finalización de la imagen que parece real, la unión sagrada que posee, y la majestuosidad que presenta.",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/14.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/14.png"
    }
  },
  {
    "index": 15,
    "name": "Bandera",
    "description": "estrenada en 2019",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/15.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/15.png"
    }
  },
  {
    "index": 16,
    "name": "Guión",
    "description": "Confeccionado en 2022 por el artista cordobés. Enrique Ruiz Flores, con orfebrería del taller de José Carlos Angulo.",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/16.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/16.png"
    }
  },
  {
    "index": 17,
    "name": "Paso del Misterio",
    "description": "Descripción artística del paso: paso en carpintería Número de costaleros: 40 Musica: Redención de Córdoba",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/17.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/17.png"
    }
  },
  {
    "index": 18,
    "name": "Incensario",
    "description": "Estrenado en 2022, junto a la imagen de Poncio Pilatos, el soldado romano y el trono del gobernador rpmana",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/18.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/18.png"
    }
  },
  {
    "index": 19,
    "name": "Escudo",
    "description": "Hermandad y Cofradía de Nuestro Padre Jesús de los Reyes en su Entrada Triunfal en Jerusalén, María Santísima de la Victoria y Nuestra Señora de la Palma",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/19.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/19.png"
    }
  },
  {
    "index": 20,
    "name": "Cruz de Guía",
    "description": "Foto: Juan Luis Seco",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/20.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/20.png"
    }
  },
  {
    "index": 21,
    "name": "Foto Histórica",
    "description": "primera salida procesional. Domingo e Ramos (1978).",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/21.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/21.png"
    }
  },
  {
    "index": 22,
    "name": "Cristo",
    "description": "La imagen Titular Cristifera representa el misterio de la Entrada Triunfal en Jerusalén Pero su advocación es la de Nuestro Padre Jesus de los Reyes conmemorando la fiesta de Reglas.",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/22.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/22.png"
    }
  },
  {
    "index": 23,
    "name": "Virgen",
    "description": "Autor. Francisco Romero Zafra (1991).",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/23.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/23.png"
    }
  },
  {
    "index": 24,
    "name": "Estandarte",
    "description": "Estandarte de la Hermandad, de terciopelo rojo con bordados en aplicación de Ángel Pareja (1991).",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/24.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/24.png"
    }
  },
  {
    "index": 25,
    "name": "Paso del Misterio",
    "description": "Estrenado en fase de talla en 2024. Obra de Fernando Alcalá Morales.",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/25.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/25.png"
    }
  },
  {
    "index": 26,
    "name": "Paso de Virgen",
    "description": "Foto: Juan Luis Seco",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/26.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/26.png"
    }
  },
  {
    "index": 27,
    "name": "V. de la Victoria",
    "description": "Foto: Eva Maria Pavon",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/27.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/27.png"
    }
  }
]
````
-----------

## Modo desarrollo
El proyecto ha sido conterizado en Docker, listo para conectarte a través de un IDE via SSH y desarrollar en el.
A continuación se detallaran los pasos básicos para la puesta en marcha

### Pre requisitos
- Docker
- IDE (Intellij o Visual Studio)

### 1. Crear contenedor de la imagen
````sh
docker run -it --name dev-container-vision_artificial -p 22:22 luishidalgoa/dev-container-vision_artificial:latest
````
### 2. Conectarnos via SSH
#### Visual Studio Code
- En Visual Studio, buscar la opción `Conectarse a`
<img width="880" alt="image" src="https://github.com/user-attachments/assets/a70d74d6-717f-4175-90fd-5580de7a5949" />

- Escoger opción SSH
- Agregar un nuevo HOST
````
Host vision-artificial
  HostName 127.0.0.1
  Port 22
  User root
````
- introducir credencias `1234`
#### Intellij IDEA
- Seleccionar la opción `Remote development`
<img width="314" alt="image" src="https://github.com/user-attachments/assets/1c4f0dc8-8a94-4007-99df-8202c4341cd3" />

- Creamos una nueva conexión SSH
<img width="593" alt="image" src="https://github.com/user-attachments/assets/599814a1-5987-465e-8ded-7c2c23d35c9b" />
<img width="448" alt="image" src="https://github.com/user-attachments/assets/7d1528c3-6aa0-42a9-a325-160f622cf011" />

> Introducimos la contraseña `1234`
---

Despues de conectarnos, buscaremos el directorio donde esta el repositorio del proyecto:  `/Workspace`

