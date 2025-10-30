let nombre = prompt("por favor ingresa tu nombre: ");
let nota1 = parseFloat(prompt("digite la nota de la materia 1: "));
let nota2 = parseFloat(prompt("digite la nota de la materia 2: "));
let nota3= parseFloat(prompt("digite la nota de la materia 3: "));

let promedio = (nota1 + nota2 + nota3) / 3 ;

if (promedio < 3.5 ) {
    console.log(`lo siento ${nombre} reprobaste , tu promedio fue de ${promedio}`);
    
}else{
    console.log(`Felicidades ${nombre} aprobaste , tu promedio fue de ${promedio}`);
    
}


