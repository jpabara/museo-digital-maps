var audioOn = true
var lastTextSpoken = ''
var selectedVoice

const initAudio = () => {
    const audioAvailable = EasySpeech.detect()
    console.log("AUDIO: ", audioAvailable)
    EasySpeech.init({ maxTimeout: 5000, interval: 250 })
        .then(() => {
            console.debug('load complete')
            const voices = EasySpeech.voices()
            selectedVoice = selectVoice(voices, 'es-ES')
            console.log(voices)
        })
        .catch(e => console.error(e)
    )
}

const selectVoice = (voices, langCode='es-US') => {
    for (const voice of voices) {
        if (voice.lang === langCode) {
            return voice
        }
    }
    return voice[0]
}

const toggleAudio = () => {
    audioOn = !audioOn
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
    await EasySpeech.speak({
        text: text,
        voice: selectedVoice,
        pitch: 1,
        rate: 1,
        volume: 1,
    })
    // const synth = window.speechSynthesis;
    // const splittedTexts = text.split('.')
    // utterAll(synth, splittedTexts)
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
