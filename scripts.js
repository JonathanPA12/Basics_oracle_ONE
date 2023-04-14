
function imprimir(frase){
    document.write(frase);
    saltarlinea();
}

function saltarlinea(){
    document.write("<br>");
}

let secreto = Math.round(Math.random() * 10);
let input = document.querySelector("input");
input.focus();

function adivinar(){
if(parseInt(input.value) == secreto){
    alert("Felicidades, adivinaste el numero secreto");

   }else{
    alert("Lo siento, no adivinaste el numero secreto "+ secreto + " intenta de nuevo");

   }
   input.value = "";
   input.focus();

  
   
}

let arraySecreto =[9,7,6,5];
function consultarBase(){
    let input = document.querySelector("input");
    let numero = parseInt(input.value);
    if(arraySecreto.indexOf(numero) != -1){
         alert("El numero " + numero + " si esta en la base de datos");
    }else{
         alert("El numero " + numero + " no esta en la base de datos");
    }
    input.value = "";
    input.focus();
}
/*
<meta charset="UTF-8">

<h1>Recetas de Armando</h1>

<script>

    var ingredientes = [];
    var cantidad = parseInt(prompt("¿Cuántos ingredientes vas a añadir?"));
    var contador = 1;

    while( contador <= cantidad) {
        var ingrediente = prompt("Informe el ingrediente " + contador);
        ingredientes.push(ingrediente);
        contador++;
    }

    console.log(ingredientes);

</script> */