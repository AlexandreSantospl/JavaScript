
const img = document.getElementById('imagem')
const acender = document.getElementById('acender')
const apagar = document.getElementById('apagar')

function integridade(){
    return img.src.indexOf('quebrada') > -1
}

function ligar(){
    if (!integridade()){
    img.src = 'acesa.png'
    }
}
function desligar(){
    if (!integridade()){
    img.src = 'apagada.png'
    }
}
function quebrar(){
    if (!integridade()){
    img.src = 'quebrada.png'
    }

}

acender.addEventListener('click', ligar)
apagar.addEventListener('click', desligar)
img.addEventListener('mousemove', ligar)
img.addEventListener('mouseout', desligar)
img.addEventListener('dblclick', quebrar)
