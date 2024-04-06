const img = document.getElementById( 'semaforo' )
const button = document.getElementById( 'but' )
let colorIndex = 0
let intervalID = null

const traficlight = ( event ) => {
    stop()
    turnOn[event.target.id]();
}

const nextIndex = () =>{
    if (colorIndex < 2){
        colorIndex++
    }else{
        colorIndex = 0
    }
}
const stop = () =>{
    clearInterval(intervalID)
}

const changecolor = () =>{
    let colors = ['red', 'yellow', 'green']
    let color = colors[colorIndex]
    turnOn[color]()
    nextIndex()

}


const turnOn = {
    'red':    () => img.src = 'red.png',
    'yellow': () => img.src = 'yellow.png',
    'green' : () => img.src = 'green.png',
    'all':    () => intervalID = setInterval( changecolor, 1000)
}


button.addEventListener('click', traficlight)

