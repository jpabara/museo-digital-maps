
const startScene = () => {
    sceneNr = 0
    document.getElementById('start-button').style.display = 'none'
    document.getElementById('next-button').style.display = 'inline'
    document.getElementById('previous-button').style.display = 'inline'
    renderScene(sceneNr)
}

const nextScene = () => {
    previousSceneNr = sceneNr
    sceneNr += 1
    if (sceneNr == scenes.length) {
        sceneNr = 0
    } else if (sceneNr == -1) {
        sceneNr = scenes.length - 1
    }
    renderScene(sceneNr)
}

const previousScene = () => {
    previousSceneNr = sceneNr
    sceneNr -= 1
    if (sceneNr == scenes.length) {
        sceneNr = 0
    } else if (sceneNr == -1) {
        sceneNr = scenes.length - 1
    }
    renderScene(sceneNr)
}

const removeLayerAndSource = (layerName, sourceName) => {
    if (map.getLayer(layerName)) {
        map.removeLayer(layerName)
    }
    if (map.getSource(sourceName)) {
        map.removeSource(sourceName)
    }
}

const cleanScene = (sceneNr) => {
    const sourceBaseName = `source-scene-${sceneNr}`
    const layerBaseName = `layer-scene-${sceneNr}`
    if (!scenes[sceneNr]) return
    for (const [i, sceneData] of scenes[sceneNr].data.entries()) {
        let sceneSourceName = `${sourceBaseName}_${i}`
        let sceneLayerName = `${layerBaseName}_${i}`
        removeLayerAndSource(sceneLayerName, sceneSourceName)
    }
    const legend = document.getElementById('legend')
    legend.innerHTML = ''
}

const addToLegend = (layerProperties, layerName) => {
    const legend = document.getElementById('legend')
    const legendItem = document.createElement('div')
    let colorHTML = ''
    if (layerProperties.paint) {
        color = layerProperties.paint['fill-color'] || layerProperties.paint['line-color'] || layerProperties.paint['fill-extrusion-color']
        colorHTML = `<span class="legend-color" style="background-color: ${color}"></span>`
    }
    legendItem.innerHTML = `<div class="legend-item">
        <div class="legend-text">${colorHTML} ${layerName}</div>
        
    </div>`
    legend.appendChild(legendItem)
}

const loadSceneDescription = (sceneConfig) => {
    const sceneDescription = document.getElementById('scene-description')
    let descriptionHTML = ''
    if (sceneConfig.sceneDescription) {
        descriptionHTML = `<p id="scene-text">${sceneConfig.sceneDescription}</p>`
    }
    sceneDescription.innerHTML = `
        <h2 id="scene-title">${sceneConfig.sceneName}</h2>
        ${descriptionHTML}
    `
}

const addHoverListeners = (layerName, sceneNr) => {
    map.on('mouseenter', layerName, (e) => {
        map.getCanvas().style.cursor = 'pointer';

        const coordinates = e.features[0].geometry.coordinates.slice();
        let description = ''
        const sceneConfig = scenes[sceneNr]
        for (const sceneData of sceneConfig.data) {
            for (const activeProperty of sceneData.activePropertiesOnHover) {
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
        }
    });

    map.on('mouseleave', layerName, () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
}

const renderScene = (sceneNr) => {
    setProgress(sceneNr)
    cleanScene(previousSceneNr)
    const sceneConfig = scenes[sceneNr]
    const sourceBaseName = `source-scene-${sceneNr}`
    const layerBaseName = `layer-scene-${sceneNr}`
    for (const [i, sceneData] of sceneConfig.data.entries()) {
        let sceneSourceName = `${sourceBaseName}_${i}`
        let sceneLayerName = `${layerBaseName}_${i}`
        map.addSource(sceneSourceName, {
            type: 'geojson',
            data: `data/${sceneData.fileName}`
        });
        map.addLayer({
            ...sceneData.layerProperties,
            'id': sceneLayerName,
            'type': sceneData.layerType,
            'source': sceneSourceName,
        });
        addToLegend(
            sceneData.layerProperties,
            sceneData.name,
        )
        addHoverListeners(sceneLayerName, sceneNr)
    }
    loadSceneDescription(sceneConfig)

    map.flyTo({
        center: sceneConfig.center || initialCenter,
        pitch: sceneConfig.pitch || 0,
        bearing: sceneConfig.bearing || 0,
        zoom: sceneConfig.zoom || initialZoom,
        duration: 2000,
        essential: true
    });

    if (sceneConfig.end) {
        setTimeout(() => {
            map.easeTo({
                center: sceneConfig.end.center || initialCenter,
                pitch: sceneConfig.end.pitch || 0,
                bearing: sceneConfig.end.bearing || 0,
                zoom: sceneConfig.end.zoom || initialZoom,
                duration: sceneConfig.end.duration || 1,
                essential: true,
            });
        }, 2000);
    }
    speak(sceneConfig.sceneDescription)
}