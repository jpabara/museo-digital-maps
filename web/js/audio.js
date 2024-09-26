var audioOn = true
var lastTextSpoken = ''

const toggleAudio = () => {
    audioOn = !audioOn
    const synth = window.speechSynthesis;
    if (audioOn) {
        document.getElementById('audio-toggle').innerHTML = '🔊'
        speak(lastTextSpoken)
    } else {
        document.getElementById('audio-toggle').innerHTML = '🔇'
        const synth = window.speechSynthesis;
        synth.cancel()
    }
}

const speak = async (text) => {
    lastTextSpoken = text
    if (!audioOn) return
    const synth = window.speechSynthesis;
    const splittedTexts = text.split('.')
    utterAll(synth, splittedTexts)
}

const utterAll = (synth, texts, currentTextIndex=0) => {
    if (texts[currentTextIndex]) {
        const utterThis = new SpeechSynthesisUtterance(texts[currentTextIndex]);
        currentTextIndex += 1
        utterThis.onend = () => { utterAll(synth, texts, currentTextIndex) }
        synth.cancel();
        synth.speak(utterThis);
    }
}
