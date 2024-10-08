var mapId = 'map'
var mapStyle = 'mapbox://styles/joempa/cm1a2q73i00i001nw839t333q'
var initialCenter = [35.00856210932468, 31.84378912291933]
var initialZoom = 7
var mapboxAccessToken = 'pk.eyJ1Ijoiam9lbXBhIiwiYSI6ImNtMWZyZm42YjF6ZGIycXBwdWN2MGY1bzUifQ.vgMUiOkC-kp4kpuJkBuvtg'
var sceneNr = 0
var previousSceneNr = -1
var map
var popup

const initMap = () => {
    mapboxgl.accessToken = mapboxAccessToken
    map = new mapboxgl.Map({
        container: mapId,
        style: mapStyle,
        center: initialCenter,
        zoom: initialZoom,
        attributionControl: false,
    });

    popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    initAudio()
}

window.onload = initMap