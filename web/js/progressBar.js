const setProgress = async (sceneNr) => {
    const progressBar = document.getElementById('progress-bar-fill')
    progressBar.style.width = `${(sceneNr/(scenes.length-1))*100}%`
}