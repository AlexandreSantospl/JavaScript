const display = document.getElementById('display')
const numeros = document.querySelectorAll('[id*=tecla]')
const limpar = document.querySelectorAll('[id*=ACT]')
const igual = document.getElementById('igual')
const inversor = document.getElementById('inversor')
const apagador = document.getElementById('açãoapagar')


function insert(evento){
    if (evento.target.textContent == ','){
        display.textContent += '.'
    } else{
        display.textContent += evento.target.textContent
    }
}

function clear(){
    display.textContent = ''
}

function igualx(){
    if (display.textContent.indexOf('.') == true){
        display.textContent = eval(display.textContent).toFixed(2)
    } else{
        display.textContent = eval(display.textContent)
    }
    
}

function inverter(){
    number = Number(display.textContent)
    display.textContent = String(number*-1)
}

function apagar(){
    display.textContent = display.textContent.substring(0, display.textContent.length -1)
}

apagador.addEventListener('click', apagar)
igual.addEventListener('click', igualx);
inversor.addEventListener('click', inverter)
numeros.forEach(numero => numero.addEventListener('click', insert))
limpar.forEach(limpa => limpa.addEventListener('click', clear))




const getHours = () => {
    const clock = document.getElementsByClassName('clock')[0]
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    clock.innerHTML = `${hour}:${minute}`
  }

  setInterval(() => {
    getHours()
  }, 1000)