var scenes = [
    {
        fileName: 'nakba-cities.geojson',
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
        center: [35.112757175425116, 31.903940273167674],
        pitch: 30,
        bearing: 0,
        zoom: 8,
    },
    {
        fileName: 'nakba-cities.geojson',
        type: 'geojson',
        layerType: 'symbol',
        layerProperties: {
            'layout': {
                'icon-image': 'mapbox-grocery'
            }
        },
        activePropertiesOnHover: [{
            'Village (En)': 'Nombre',
            'District (En)': 'Distrito',
            'pop 1948': 'Población en 1948',
            'jewish settlements on built area post-1948': 'Asentamientos judíos construídos después de 1948',
        }],
        center: [35.112757175425116, 31.903940273167674],
        pitch: 60,
        bearing: 30,
        zoom: 6,
    }
]

