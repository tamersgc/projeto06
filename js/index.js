import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"

import {
    btnPlay,
    btnPause,
    btnStop,
    btnSet,
    minutesDisplay,
    secondsDisplay
} from "./config.js"


const controls = Controls({
    btnSet,
    btnStop,
    btnPlay,
    btnPause
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sound()

Events({controls,timer,sound})