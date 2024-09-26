var audioOn = true
var lastTextSpoken = ''
var selectedVoice

const detectCurrentBrowser = () => {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        return 'Opera'
    } else if (navigator.userAgent.indexOf("Edg") != -1) {
        return 'Edge'
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        return 'Chrome'
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari'
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return 'Firefox'
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        return 'IE';
    } else {
        return 'unknown';
    }
}

const initAudio = () => {
    const browser = detectCurrentBrowser()
    console.log('Browser: ', browser)
    const isChrome = browser === 'Chrome'
    if (isChrome) {
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
    } else {
        console.log('Audio not available')
        document.getElementById('audio-toggle').style.display = 'none'
        audioOn = false
    }
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
}