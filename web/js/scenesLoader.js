const nextScene = () => {
    console.log("Moving to next scene.")
    previousSceneNr = sceneNr
    sceneNr += 1
    renderScene(sceneNr)
}

const previousScene = () => {
    console.log("Moving to previous scene.")
    previousSceneNr = sceneNr
    sceneNr -= 1
    renderScene(sceneNr)
}

const cleanScene = (sceneNr) => {
    const sourceName = `source-scene-${sceneNr}`
    const layerName = `layer-scene-${sceneNr}`
    if (map.getLayer(layerName)) {
        console.log("Removing layer: ", layerName)
        map.removeLayer(layerName)
    }
    if (map.getSource(sourceName)) {
        console.log("Removing source: ", sourceName)
        map.removeSource(sourceName)
    }
}

const renderScene = (sceneNr) => {
    cleanScene(previousSceneNr)
    const sceneConfig = scenes[sceneNr]
    const sourceName = `source-scene-${sceneNr}`
    const layerName = `layer-scene-${sceneNr}`

    map.addSource(sourceName, {
        type: 'geojson',
        data: `data/${sceneConfig.fileName}`
    });

    map.addLayer({
        ...sceneConfig.layerProperties,
        'id': layerName,
        'type': sceneConfig.layerType,
        'source': sourceName,
    });

    map.flyTo({
        center: sceneConfig.center || initialCenter,
        pitch: sceneConfig.pitch || 0,
        bearing: sceneConfig.bearing || 0,
        zoom: sceneConfig.zoom || initialZoom,
        essential: true
    });

    map.on('mouseenter', layerName, (e) => {
        map.getCanvas().style.cursor = 'pointer';

        const coordinates = e.features[0].geometry.coordinates.slice();
        let description = ''

        for (const activeProperty of scenes[sceneNr].activePropertiesOnHover) {
            for (const key in activeProperty) {
                if (e.features[0].properties[key]) {
                    description += `<strong>${activeProperty[key]}:</strong> ${e.features[0].properties[key]}<br>`
                }
            }
        }

        if (['mercator', 'equirectangular'].includes(map.getProjection().name)) {
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
        }

        popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });

    map.on('mouseleave', layerName, () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
}