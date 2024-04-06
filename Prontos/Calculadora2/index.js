'use strict';

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const funções = document.querySelectorAll('[id*=FUNC]')
const ações = document.querySelectorAll('[id*=ACT]')

let num1 = ''
let num2 = ''
let num3 = ''
let click1 = 0
let click2 = 0
let click3 = 0
let resultado = 0
let operadorx = 0
let opção = ''
let c = 1
let num1x = ''


const  inserirNumero = (evento) => {
    display.textContent += evento.target.textContent;
}


const soma = (a, b) => {
    resultado = 0
    resultado = a + b;
}
const subtração = (a, b) => {
    resultado = 0
    resultado = a - b;
}
const multiplicação = (a, b) => {
    resultado = 0
    resultado = a * b;
}

const divisão = (a, b) => {
    resultado = 0
    resultado = a / b;
}

const operador = (evento) => {
    const actionOP = [evento.target.id];
    if (actionOP == 'FUNCmais'){
        opção = 'maisx'
    } else if (actionOP == 'FUNCdiminuir'){
        opção = 'menosx'
    } else if (actionOP == 'FUNCdividir'){
        opção = 'dividirx'
    } else if (actionOP == 'FUNCmultiplicar'){
        opção = 'multiplicarx'
    }
}

const escolhedordefunção = (event, a, b) => {
    const actionf = [event.target.id];
    if (actionf == 'ACTigual'){
        if (opção == 'maisx'){
            resultado = a + b
        } else if (opção == 'menosx'){
            resultado = a - b
        } else if (opção == 'dividirx'){
            resultado = a / b
        } else if (opção == 'multiplicarx'){
            resultado = a * b
        }
}
}

const escolhedordefunçãomais = (event, a, b) => {
    const actionf = [event.target.id];
    if (actionf == 'ACTigual'){
        if (opção == 'maisx'){
            fim = a + b
        } else if (opção == 'menosx'){
            fim = a - b
        } else if (opção == 'dividirx'){
            fim = a / b
        } else if (opção == 'multiplicarx'){
            fim = a * b
        }
}
}


const actionigual = (event) => {
    const actionIG = [event.target.id];
    if(actionIG == 'ACTigual'){
        if (c == 1){
            escolhedordefunção(event, click1, click2)
            display.textContent = `${resultado}`
            limpar()
            c++
        } else if (c > 1){
            escolhedordefunção(event, resultado, click2)
            display.textContent = `${resultado}`
            operadorx = 0
            click2 = 0
            num2 = ''
        }
    }
}


const limpar = () => {
    num1 = ''
    num2 = ''
    num3 = ''
    click1 = 0
    click2 = 0
    click3 = 0
    operadorx = 0
    opção = ''
    c = 1
    let num1x = ''
}
const limparresultado = () => {
    resultado = 0
}

const actionclearDisplay = (evento) => {
    const actionC = [evento.target.id];
    if(actionC == 'ACTclearDisplay'){
        display.textContent = ''
        limpar()
        limparresultado()
    }   
}
const actionclear = (evento) => {
    const actionCE = [evento.target.id];
    if(actionCE == 'ACTclearCalculo'){
        display.textContent = ''
        limpar()
        limparresultado()
    }   
}

const criarvariavel = (event) =>{
    if (operadorx == 0){
        num1 += String([event.target.textContent])
        click1 = Number(num1)
    } else if(operadorx == 1){
        num2 += String([event.target.textContent])
        click2 = Number(num2)
    }
}


const proximo = (evento) => {
    operadorx++
}

numeros.forEach(numero => numero.addEventListener('click', inserirNumero));
numeros.forEach(numero => numero.addEventListener('click', criarvariavel));

funções.forEach(função => função.addEventListener('click', inserirNumero));
funções.forEach(função => função.addEventListener('click', operador));
funções.forEach(função => função.addEventListener('click', proximo));

ações.forEach(ação => ação.addEventListener('click', actionclearDisplay));
ações.forEach(ação => ação.addEventListener('click', actionigual));
ações.forEach(ação => ação.addEventListener('click', actionclear));



