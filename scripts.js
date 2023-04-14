
function imprimir(frase){
    document.write(frase);
    saltarlinea();
}

function saltarlinea(){
    document.write("<br>");
}

let secreto = 5;
let input = document.querySelector("input");

function adivinar(){
if(parseInt(input.value) == secreto){
    alert("Felicidades, adivinaste el numero secreto");

   }else{
    alert("Lo siento, no adivinaste el numero secreto");

   }
}