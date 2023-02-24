
import Sounds from "./sounds.js"

const sound = Sounds()
export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls
}) {

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)



    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')

    }

    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)

    }

    function countdown() {
        timerTimeOut = setTimeout(() => {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            updateDisplay(minutes, 0)

            if (minutes <= 0 && seconds <= 0) {
                resetControls()
                updateDisplay()
                sound.timerEnd()
                return
            }

            if (seconds <= 0) {
                seconds = 60
                // minutesDisplay.textContent = String( minutes - 1).padStart(2,'0')
                // updateTimerDisplay(String( minutes - 1),seconds)           
                --minutes
            }

            // secondsDisplay.textContent = String( seconds-1 ).padStart(2,'0')
            updateDisplay(minutes, String(seconds - 1))



            countdown()

        }, 1000)

    }

    function updateMinutes(newMinutes){
        minutes = newMinutes
    }

    function hold(){
        clearTimeout(timerTimeOut)

    }

    return {
        countdown, 
        reset,
        updateDisplay,
        updateMinutes,
        hold
    }
}