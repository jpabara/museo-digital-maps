var scenes = [
    {
        sceneName: 'Localidades palestinas destruidas en 1948',
        sceneDescription: 'Muestra todas las localidades palestinas destruidas en 1948, incluyendo el número de habitantes en 1948 y los asentamientos judíos construidos en su lugar.',
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
        sceneName: 'Asentamientos ilegales',
        sceneDescription: 'Muestra los asentamientos ilegales en Cisjordania y Jerusalén Este, así como los asentamientos ilegales en Gaza. Los asentamientos ilegales están en violación del derecho internacional.',
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
        sceneDescription: 'Las zonas A, B y C son áreas de Cisjordania que fueron establecidas en el Acuerdo Interino de Oslo I y II. La zona A está bajo control civil y de seguridad palestino, la zona B está bajo control civil palestino y seguridad israelí y la zona C está bajo control civil y de seguridad israelí. Israel ha aprovechado las zonas B y C para construir asentamientos ilegales de manera indiscriminada.',
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
    
]

