for (let intentos = 0; intentos < 5; intentos++) {
  let numero = prompt("Por favor ingresa un número: ");

  if (numero % 2 == 0) {
    console.log(`el numero ${numero} es par`);
  } else {
    console.log(`el numero ${numero} es impar`);
  }
}
