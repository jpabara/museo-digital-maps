var scenes = [
    {
        sceneName: 'Aldeas Palestinas destruidas en 1948 por Israel',
        sceneDescription: 'En 1948 Los fundadores de Israel realizaron una limpieza étnica en Palestina, para quedarse con la tierra, pero sin su gente. Destruyeron más de 500 aldeas, expulsando a su población nativa palestina. Robando y anexando también las principales ciudades como Haifa, Jaffa, Acre, Nazareth y parte de Jerusalén.',
        data: [{
            fileName: 'nakba-cities.geojson',
            name: 'Localidades palestinas destruidas en 1948',
            type: 'geojson',
            layerType: 'symbol',
            layerProperties: {
                'layout': {
                    'icon-image': 'mapbox-home'
                }
            },
            activePropertiesOnHover: [{
                'Village (En)': 'Nombre',
                'District (En)': 'Distrito',
                'pop 1948': 'Población en 1948',
                'jewish settlements on built area post-1948': 'Asentamientos judíos construídos después de 1948',
            }],
        }],
        center: [35.112757175425116, 31.903940273167674],
        pitch: 30,
        bearing: 0,
        zoom: 8,
    },
    {
        sceneName: 'Aldeas Palestinas destruidas en 1948 por Israel',
        sceneDescription: 'El 71% de la tierra propiedad de palestinos, fue robada por Israel en pocos meses. Sus legítimos dueños, aun conservan títulos de dominio y las llaves de sus antiguas casas, con la esperanza de algún día poder volver',
        data: [{
            fileName: 'nakba-cities.geojson',
            name: 'Localidades palestinas destruidas en 1948',
            type: 'geojson',
            layerType: 'symbol',
            layerProperties: {
                'layout': {
                    'icon-image': 'mapbox-home'
                }
            },
            activePropertiesOnHover: [{
                'Village (En)': 'Nombre',
                'District (En)': 'Distrito',
                'pop 1948': 'Población en 1948',
                'jewish settlements on built area post-1948': 'Asentamientos judíos construídos después de 1948',
            }],
        }],
        center: [35.112757175425116, 31.903940273167674],
        pitch: 10,
        bearing: 0,
        zoom: 7,
    },
    {
        sceneName: 'Asentamientos ilegales',
        sceneDescription: 'En 1948, Israel se creó en el 78% de la Palestina histórica. En apenas el 22% restante de Palestina, es donde la comunidad internacional, la liga árabe e incluso el gobierno de Palestina, exigen dejar para un estado palestino, y que Israel no lo robe también. Sin embargo, todos los años Israel se sigue expandiendo, mediante asentamientos, a costa de familias palestinas que lo pierden todo.',
        data: [{
            fileName: 'settlements_point.geojson',
            name: 'Asentamientos ilegales',
            type: 'geojson',
            layerType: 'symbol',
            layerProperties: {
                'layout': {
                    'icon-image': 'mapbox-triangle'
                }
            },
            activePropertiesOnHover: [{
                'name_es': 'Nombre',
                'date_estab': 'Fecha de establecimiento',
                'settlement': 'Tipo'
            }],
        }],
        center: [34.60079940233604, 31.174435128776484],
        pitch: 70,
        bearing: 30,
        zoom: 10,
        end: {
            center: [34.987071229161835, 31.804467072754665],
            pitch: 70,
            bearing: 30,
            zoom: 10,
            duration: 4000,
        }
    },
    {
        sceneName: 'Zonas A, B y C',
        sceneDescription: 'Las zonas A, B y C son áreas de Cisjordania que fueron establecidas en el Acuerdo Interino de Oslo 1 y 2. La zona A está bajo control civil y de seguridad palestino, la zona B está bajo control civil palestino y seguridad israelí y la zona C está bajo control civil y de seguridad israelí. Israel ha aprovechado las zonas B y C para construir asentamientos ilegales de manera indiscriminada.',
        data: [
            {
                fileName: 'area_a.geojson',
                name: 'Zona A',
                type: 'geojson',
                layerType: 'fill',
                layerProperties: {
                    "paint": {
                        "fill-color": "rgba(0, 255, 0, 0.5)"
                    }
                },
                activePropertiesOnHover: [{
                    'name_es': 'Nombre',
                }],
            },
            {
                fileName: 'area_b.geojson',
                name: 'Zona B',
                type: 'geojson',
                layerType: 'fill',
                layerProperties: {
                    "paint": {
                        "fill-color": "rgba(0, 0, 255, 0.5)"
                    }
                },
                activePropertiesOnHover: [{
                    'name_es': 'Nombre',
                }],
            },
            {
                fileName: 'area_c.geojson',
                name: 'Zona C',
                type: 'geojson',
                layerType: 'fill',
                layerProperties: {
                    "paint": {
                        "fill-color": "rgba(255, 0, 0, 0.5)"
                    }
                },
                activePropertiesOnHover: [{
                    'name_es': 'Nombre',
                }],
            }
        ],
        center: [35.09216936125758, 31.899221509220492],
        pitch: 20,
        bearing: 0,
        zoom: 8,
    },
    {
        sceneName: 'Muro de Apartheid',
        sceneDescription: 'El Muro de Apartheid quita territorio de los palestinos.',
        data: [
            {
                fileName: 'separation_barrier_buffer.geojson',
                name: 'Muro de Separación Cisjordania Construido (2020)',
                type: 'geojson',
                layerType: 'fill-extrusion',
                layerProperties: {
                    "paint": {
                        "fill-extrusion-color": "rgb(255, 30, 30)",
                        "fill-extrusion-height": 800,
                        "fill-extrusion-base": 0,
                        "fill-extrusion-opacity": 0.8,
                        "fill-extrusion-flood-light-ground-attenuation": 0.2,
                        "fill-extrusion-flood-light-color": "rgb(255, 255, 255)",
                        "fill-extrusion-emissive-strength": 1,
                    }
                },
                activePropertiesOnHover: [{
                    'status_es': 'Estatus',
                }],
            },
            {
                fileName: 'separation_barrier.geojson',
                name: 'Separación Cisjordania Construido y por Construir (2020)',
                type: 'geojson',
                layerType: 'line',
                layerProperties: {
                    'layout': {
                        'line-join': 'round',
                        'line-cap': 'round',
                    },
                    'paint': {
                        'line-color': 'rgba(255, 0, 0, 1)',
                        'line-width': 2
                    }
                },
                activePropertiesOnHover: [{
                    'status_es': 'Estatus',
                }],
            },
            {
                fileName: 'no_go_zone.geojson',
                name: 'Muro de Gaza',
                type: 'geojson',
                layerType: 'fill-extrusion',
                layerProperties: {
                    "paint": {
                        "fill-extrusion-color": "rgb(255, 30, 30)",
                        "fill-extrusion-height": 800,
                        "fill-extrusion-base": 0,
                        "fill-extrusion-opacity": 0.8,
                        "fill-extrusion-flood-light-ground-attenuation": 0.2,
                        "fill-extrusion-flood-light-color": "rgb(255, 255, 255)",
                        "fill-extrusion-emissive-strength": 1,
                    }
                },
                activePropertiesOnHover: [{
                    'type_en': 'Tipo',
                }],
            },
            {
                fileName: 'gaza_buffer_zone.geojson',
                name: 'Zona de peligro (territorio perdido)',
                type: 'geojson',
                layerType: 'fill',
                layerProperties: {
                    "paint": {
                        "fill-color": "rgba(255, 0, 0, 0.5)"
                    }
                },
                activePropertiesOnHover: [{
                    'Type': 'Tipo',
                    'BUFF_DIST': 'Distancia del muro',
                }],
            }
        ],
        center: [35.47083368333204, 32.5554078949808],
        pitch: 20,
        bearing: -130,
        zoom: 9,
        end: {
            center: [34.503828594654614, 31.438633748909684],
            pitch: 30,
            bearing: -290,
            zoom: 9,
            duration: 12000,
        }
    },
    {
        sceneName: 'Recursos hídricos',
        sceneDescription: 'Israel roba los recursos hídricos, y limita y controla el acceso de agua a los Palestinos. Tapan los pozos de agua y destruyen las infraestructuras de agua pertenecientes a palestinos. Las tuberías de agua que van a territorio palestino son 10 veces más delgadas que las de territorio Israelí.',
        data: [
            {
                fileName: 'coastal_acuifer.geojson',
                name: 'Acuífero de la Costa',
                type: 'geojson',
                layerType: 'fill',
                layerProperties: {
                    "paint": {
                        "fill-color": "rgba(10, 100, 255, 0.5)"
                    }
                },
                activePropertiesOnHover: [{
                    'name': 'Nombre',
                }],
            },
            {
                fileName: 'mountain_acuifer.geojson',
                name: 'Acuífero de la Montaña',
                type: 'geojson',
                layerType: 'fill',
                layerProperties: {
                    "paint": {
                        "fill-color": "rgba(30, 30, 255, 0.3)"
                    }
                },
                activePropertiesOnHover: [{
                    'name': 'Nombre',
                }],
            },
        ],
        center: [34.95032838984824, 31.51361609948765],
        pitch: 20,
        bearing: 0,
        zoom: 7,
    }
]

