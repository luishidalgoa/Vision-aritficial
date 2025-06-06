## Objetivo
El objetivo principal de la investigación es con averiguar si con javascript (recomendablemente TypeScript), es posible implementar visión artificial.

Dado unas imagenes de ejemplo sobre una tematica en concreto (Cromos), el modelo pueda identificar el cromo al que pertenece una foto hecha con el movil

## Tareas 
- [ ] Se ha encontrado las librerias necesarias para la vision artificial
- [ ] Las fotos que debe analizar el modelo estan insertadas a fuego en el programa
- [ ] Si no se reconoce ningún cromo en la foto, el modelo lo avisa
- [ ] La visión es capaz de recnocer la carta


-----------
## Recursos
### Imagenes de cartas para el entrenamiento
[**Enlace al repositorio de imagenes**]()

### Objeto de cartas
````json
"cards": [
            {
                "index": 1,
                "title": "Lágrimas",
                "description": "Hermandad y Cofradía Nazarenos del tisimo Cristo de las grimas y María santisima de las Penas",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F1.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F1.png&version_id=null"
                }
            },
            {
                "index": 2,
                "title": "Nuestra señora de la asunción",
                "description": "Esta parroquia forma parte de la vicaría de la ciudad y del arciprestazgo del Noroeste. Oficialmente. la Parroquia se estableció como tal en el año 1975, según consta en los libros sacramentales EI Templo fue inaugurado en el año 1971",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F2.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F2.png&version_id=null"
                }
            },
            {
                "index": 3,
                "title": "Nazarenos",
                "description": "Tunica blanco roto. cubrerrostro y fajín vino tinto.",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F3.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F3.png&version_id=null"
                }
            },
            {
                "index": 4,
                "title": "Maria santisima de las penas",
                "description": "Juan Jiménez González 2014 Pablo Porras Castro. 2014",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F4.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F4.png&version_id=null"
                }
            },
            {
                "index": 5,
                "title": "Santisimo cristo de las Lágrimas",
                "description": "Miguel Arjona Navarro.",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F5.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F5.png&version_id=null"
                }
            },
            {
                "index": 6,
                "title": "Contraluz del señor",
                "description": "Contraluz del Cristo de las Lágrimas en su salida procesional por las calles d Córdoba",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F6.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F6.png&version_id=null"
                }
            },
            {
                "index": 7,
                "title": "Paso de virgen",
                "description": "Primera salida procesional sobre el paso del Corpus de la Sagrada Cena de Córdoba",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F7.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F7.png&version_id=null"
                }
            },
            {
                "index": 8,
                "title": "Paso de cristo",
                "description": "Costaleros: 54 Capataz Juan de Dios Música: Sagrada Cena de Córdoba",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F8.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F8.png&version_id=null"
                }
            },
            {
                "index": 9,
                "title": "Libro de Reglas",
                "description": "Trabajo realizado a mano, donado por el primer mayordomo de la Hermandad en recuerdo de la primera estación de penitencia como Hermandad nombrada de pleno derecho.",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F9.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F9.png&version_id=null"
                }
            },
            {
                "index": 10,
                "title": "Presentación",
                "description": "Dominica Hermandad del Santísimo Sacramento y Cofradía de Nazarenos de Nuestro Padre Jesús de los Afligidos en su Sagrada Presentación al Pueblo, Nuestra Señora Reina del Cielo y Misericordia, y San Vicente Ferrer.",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F10.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F10.png&version_id=null"
                }
            },
            {
                "index": 11,
                "title": "Parroquia de San Vicente Ferrer",
                "description": "Parroquia fundada en el barrio popular de Cañero en 1954. El actual templo se bendijo por el entonces Obispo Fray Albino González el 24 de marzo de 1956. En 2006 tuvieron lugar una serie de actos para conmemorar el 50 Aniversario de la Parroquia.",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F11.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F11.png&version_id=null"
                }
            },
            {
                "index": 12,
                "title": "Nazarenos",
                "description": "Túnica de sarga blanca, antifaz en el mismo color para capirote de 90 cm, en cuyo centro figurará la cruz “flordelisada” dominica de color blanco y negro sobre un campo del mismo color, cinturón de esparto negro y mangas de camisa con triple botonadura entelada blanca.",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F12.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F12.png&version_id=null"
                }
            },
            {
                "index": 13,
                "title": "Nuestra Señora de la Asunción",
                "description": "Cruz Dominica estrenada en 2019, fue realizada por Francisco Sánchez Rodríguez, actualmente es la mayor que procesiona en la Semana Santa Cordobesa.",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F13.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F13.png&version_id=null"
                }
            },
            {
                "index": 14,
                "title": "Manuel Martín Nieto",
                "description": "La talla de Ntro. Padre Jesús de los Afligidos está hecha en madera de cedro de 1,85 m. Destaca la policromía, la excelente finalización de la imagen que parece real, la unión sagrada que posee, y la majestuosidad que presenta.",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F14.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F14.png&version_id=null"
                }
            },
            {
                "index": 15,
                "title": "Estandarte Sacramental",
                "description": "Bordado en oro fino sobre terciopelo rojo de Lyon del siglo XIX (1846).",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F15.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F15.png&version_id=null"
                }
            },
            {
                "index": 16,
                "title": "Poncio Pilato",
                "description": "Javier López del Espino, 2022",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F16.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F16.png&version_id=null"
                }
            },
            {
                "index": 17,
                "title": "Paso del misterio",
                "description": "Descripción artística del paso: paso en carpintería\nNúmero de costaleros: 40 Musica: Redención de Córdoba\nFoto: Jose Gabriel Zurera",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F17.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F17.png&version_id=null"
                }
            },
            {
                "index": 18,
                "title": "Cruz Parroquial",
                "description": "Obra Anónima",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F18.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F18.png&version_id=null"
                }
            },
            {
                "index": 19,
                "title": "Entrada Triunfal",
                "description": "Hermandad y Cofradía de Nuestro Padre Jesús de los Reyes en su Entrada Triunfal en Jerusalén, María Santísima de la Victoria y Nuestra Señora de la Palma",
                "images": {
                    "480": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2F480%2F19.png&version_id=null",
                    "standard": "https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/albums/objects/download?preview=true&prefix=Albumes%2FHolyCards%2FC%C3%B3rdoba%2F2025%2Fstandard%2F19.png&version_id=null"
                }
            }
        ]
````
-----------

