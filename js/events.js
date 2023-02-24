import {
    btnPause,
    btnPlay,
    btnSet,
    btnSoundOff,
    btnSoundOn,
    btnStop
} from "./config.js"

export default function ({
    controls,
    timer,
    sound

}) {



    btnPlay.addEventListener('click', () => {
        controls.play()
        timer.countdown()
        sound.pressButton()
    })

    btnPause.addEventListener('click', () => {
        controls.pause()
        timer.hold()
        sound.pressButton()


    })


    btnStop.addEventListener('click', () => {
        controls.reset()
        timer.reset()
        sound.pressButton()

    })


    btnSoundOn.addEventListener('click', () => {
        btnSoundOn.classList.add('hide')
        btnSoundOff.classList.remove('hide')
        sound.bgAudio.pause()
    })
    
    btnSoundOff.addEventListener('click', () => {
        btnSoundOn.classList.remove('hide')
        btnSoundOff.classList.add('hide')
        sound.bgAudio.play()


    })


    btnSet.addEventListener('click', () => {
        let newMinutes = controls.getMinutes()
        if (!newMinutes) {
            timer.reset()
            return
        }

        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)

    })




}