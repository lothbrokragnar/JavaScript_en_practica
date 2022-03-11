let valor_1 = document.getElementById("valor1");
let valor_2 = document.getElementById("valor2");
let resultado_suma;
let resultado_resta;

let suma = document.getElementById("btn-sumar");
suma.addEventListener('click', function () {
    let resultado = document.querySelector(".resultado");
    resultado_suma = parseInt(valor_1.value) + parseInt(valor_2.value) ;
    resultado.innerHTML = resultado_suma
})

let resta = document.getElementById("btn-restar");
resta.addEventListener('click', function () {
    let resultado = document.querySelector(".resultado");
    resultado_resta = parseInt(valor_1.value) - parseInt(valor_2.value) ;
    if(resultado_resta < 0){
        resultado.innerHTML = 0
    }else{
        resultado.innerHTML = resultado_resta
    }
})