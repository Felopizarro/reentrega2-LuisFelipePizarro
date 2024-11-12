// function imc () {
//     let alturam = parseInt (prompt("Ingresa tu estatura en metros (x.xx)"))
//     let peso = parseInt (prompt("Ingresa tu peso en kilogramos"))
//     let imctotal = peso / (alturam^2)
//     alert("Tu indice de masa corporal es de "+imctotal)
// }

// let titulo = document.createElement("div");
// titulo.innerHTML = "
// document.body.append(titulo);

let total = document.getElementById ("total")
let peso = document.getElementById ("peso")
let altura = document.getElementById ("altura")


total.onclick = () => {
    let imcTotal = [peso.value/(altura.value*altura.value)]

    let resultado = document.createElement("h3")
    resultado.innerHTML = "Tu indice de masa corporal es "+imcTotal*10000
    document.body.appendChild(resultado)
}

