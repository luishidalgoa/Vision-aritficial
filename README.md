## Objetivo
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
    "name": "Lágrimas",
    "description": "Hermandad y Cofradía Nazarenos del tisimo Cristo de las grimas y María santisima de las Penas",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/1.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/1.png"
    }
  },
  {
    "index": 2,
    "name": "Nuestra señora de la asunción",
    "description": "Esta parroquia forma parte de la vicaría de la ciudad y del arciprestazgo del Noroeste. Oficialmente. la Parroquia se estableció como tal en el año 1975, según consta en los libros sacramentales EI Templo fue inaugurado en el año 1971",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/2.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/2.png"
    }
  },
  {
    "index": 3,
    "name": "Nazarenos",
    "description": "Tunica blanco roto. cubrerrostro y fajín vino tinto.",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/3.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/3.png"
    }
  },
  {
    "index": 4,
    "name": "Maria santisima de las penas",
    "description": "Juan Jiménez González 2014 Pablo Porras Castro. 2014",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/4.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/4.png"
    }
  },
  {
    "index": 5,
    "name": "Santisimo cristo de las Lágrimas",
    "description": "Miguel Arjona Navarro.",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/5.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/5.png"
    }
  },
  {
    "index": 6,
    "name": "Contraluz del señor",
    "description": "Contraluz del Cristo de las Lágrimas en su salida procesional por las calles d Córdoba",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/6.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/6.png"
    }
  },
  {
    "index": 7,
    "name": "Paso de virgen",
    "description": "Primera salida procesional sobre el paso del Corpus de la Sagrada Cena de Córdoba",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/7.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/7.png"
    }
  },
  {
    "index": 8,
    "name": "Paso de cristo",
    "description": "Costaleros: 54 Capataz Juan de Dios Música: Sagrada Cena de Córdoba",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/8.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/8.png"
    }
  },
  {
    "index": 9,
    "name": "Libro de Reglas",
    "description": "Trabajo realizado a mano, donado por el primer mayordomo de la Hermandad en recuerdo de la primera estación de penitencia como Hermandad nombrada de pleno derecho.",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/9.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/9.png"
    }
  },
  {
    "index": 10,
    "name": "Presentación",
    "description": "Dominica Hermandad del Santísimo Sacramento y Cofradía de Nazarenos de Nuestro Padre Jesús de los Afligidos en su Sagrada Presentación al Pueblo, Nuestra Señora Reina del Cielo y Misericordia, y San Vicente Ferrer.",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/10.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/10.png"
    }
  },
  {
    "index": 11,
    "name": "Parroquia de San Vicente Ferrer",
    "description": "Parroquia fundada en el barrio popular de Cañero en 1954. El actual templo se bendijo por el entonces Obispo Fray Albino González el 24 de marzo de 1956. En 2006 tuvieron lugar una serie de actos para conmemorar el 50 Aniversario de la Parroquia.",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/11.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/11.png"
    }
  },
  {
    "index": 12,
    "name": "Nazarenos",
    "description": "Túnica de sarga blanca, antifaz en el mismo color para capirote de 90 cm, en cuyo centro figurará la cruz “flordelisada” dominica de color blanco y negro sobre un campo del mismo color, cinturón de esparto negro y mangas de camisa con triple botonadura entelada blanca.",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/12.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/12.png"
    }
  },
  {
    "index": 13,
    "name": "Nuestra Señora de la Asunción",
    "description": "Cruz Dominica estrenada en 2019, fue realizada por Francisco Sánchez Rodríguez, actualmente es la mayor que procesiona en la Semana Santa Cordobesa.",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/13.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/13.png"
    }
  },
  {
    "index": 14,
    "name": "Manuel Martín Nieto",
    "description": "La talla de Ntro. Padre Jesús de los Afligidos está hecha en madera de cedro de 1,85 m. Destaca la policromía, la excelente finalización de la imagen que parece real, la unión sagrada que posee, y la majestuosidad que presenta.",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/14.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/14.png"
    }
  },
  {
    "index": 15,
    "name": "Estandarte Sacramental",
    "description": "Bordado en oro fino sobre terciopelo rojo de Lyon del siglo XIX (1846).",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/15.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/15.png"
    }
  },
  {
    "index": 16,
    "name": "Poncio Pilato",
    "description": "Javier López del Espino, 2022",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/16.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/16.png"
    }
  },
  {
    "index": 17,
    "name": "Paso del misterio",
    "description": "Descripción artística del paso: paso en carpintería\nNúmero de costaleros: 40 Musica: Redención de Córdoba\nFoto: Jose Gabriel Zurera",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/17.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/17.png"
    }
  },
  {
    "index": 18,
    "name": "Cruz Parroquial",
    "description": "Obra Anónima",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/18.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/18.png"
    }
  },
  {
    "index": 19,
    "name": "Entrada Triunfal",
    "description": "Hermandad y Cofradía de Nuestro Padre Jesús de los Reyes en su Entrada Triunfal en Jerusalén, María Santísima de la Victoria y Nuestra Señora de la Palma",
    "images": {
      "480": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/480/19.png",
      "standard": "https://s3.minio.luishidalgoa.ddns-ip.net/albums/Albumes/HolyCards/Córdoba/2025/standard/19.png"
    }
  }
]
````
-----------

