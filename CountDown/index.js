'use strict';

const segundos = document.getElementById('segundos')
const minutos = document.getElementById('minutos')
const horas = document.getElementById('horas')
const dias = document.getElementById('dias')


const atualizar = (tempo) => {
    const qntsegundos = tempo % 60
    const qntminutos = Math.floor((tempo % (60*60)) / 60);
    const qnthoras = Math.floor(tempo / 3600);
    const qntdias = Math.floor( tempo / 86400);
    

    segundos.textContent = formatarDigito(qntsegundos);
    minutos.textContent = formatarDigito(qntminutos);
    horas.textContent = formatarDigito(qnthoras);
    dias.textContent = formatarDigito(qntdias);
}

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const contagemRegressiva = (tempo) => {
    const pararcontagem = () => clearInterval(id)

    const contar = () => {
        if (tempo == 0){
            pararcontagem()
        }
        atualizar(tempo);
        tempo--;
    }

    const id = setInterval(contar, 1000);
}


contagemRegressiva(22620);
