const setProgress = async (sceneNr) => {
    const progressBar = document.getElementById('progress-bar')
    for (let i = 0; i < 1000; i++) {
        await setTimeout(() => {
            progressBar.value = (sceneNr - 1) + easeInOutQuint(i/1000)
        }, 100);
    }
}

function easeInOutQuint(x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}