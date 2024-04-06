let nome = document.getElementById('nometxt')
let pesotxt = document.getElementById('pesotxt')
let alturatxt = document.getElementById('alturatxt')
let res = document.getElementById('rest')

function calcular(){
let peso = Number(pesotxt.value)
let altura = Number(alturatxt.value)
let imc = peso / (altura * altura)
let ideal = ''
if (imc < 18.5){
    ideal = 'Abaixo do Peso'
} else if (imc > 18.5 && imc < 24.9){
    ideal = 'Peso Ideal'
} else if (imc > 24.9 && imc < 29.9){
    ideal = 'Levemente acima do Peso'
} else if (imc > 29.9 && imc < 34.9){
    ideal = 'Obesidade Grau 1'
} else if (imc > 34.9 && imc < 39.9){
    ideal = 'Obesidade Grau 2 (Severa)'
} else if (imc > 40){
    ideal = 'Obesidade Grau 3 (Morbida)'
}
res.innerHTML = (`${String(nome.value)} seu IMC é de ${imc.toFixed(2)} e você está ${ideal}.`)
}