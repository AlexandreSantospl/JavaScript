const img = document.getElementById( 'semaforo' )
const button = document.getElementById( 'but' )
let colorIndex = 0 
let intervalID = null

const nextIndex = () => {
    if(colorIndex < 2){
        colorIndex++
    }else{
        colorIndex = 0
    }
}
const chosecolors = () =>{
    let colors = ['red', 'yellow','green']
    let color = colors[colorIndex]
    turnON[color]()
    nextIndex()

}
const traficLight = ( event ) =>{
    stop()
    turnON[event.target.id]()
}
const turnON = {
    'red':    () => img.src = 'red.png',
    'yellow': () => img.src = 'yellow.png',
    'green':  () => img.src = 'green.png',
    'all':    () => intervalID = setInterval(chosecolors, 2000) 
}
const stop = () => {
    clearInterval(intervalID)
}
button.addEventListener('click', traficLight)