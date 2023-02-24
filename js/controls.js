export default function Controls({
    btnSet,
    btnStop,
    btnPlay,
    btnPause

}) {

    function play(){
        btnPlay.classList.add('hide')
        btnPause.classList.remove('hide')
    
        btnSet.classList.add('hide')
        btnStop.classList.remove('hide')
    }

    function pause(){
        btnPlay.classList.remove('hide')
        btnPause.classList.add('hide')
    }



    function reset() {
        btnSet.classList.remove('hide')
        btnStop.classList.add('hide')

        btnPlay.classList.remove('hide')
        btnPause.classList.add('hide')

    }

    function getMinutes(){
        let newMinutes = prompt("Quantos minutos?")
        if (!newMinutes) {
            
            return false
        }
        //    minutesDisplay.innerText = minutes
        //    minutesDisplay.textContent = String(minutes).padStart(2,'0')
        return newMinutes
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }

}