// Números (Number): Representan valores numéricos.

// Ejemplo de un número entero
let entero = 42;

// Ejemplo de un número decimal
let decimal = 3.14;

// Ejemplo de una operación matemática
let suma = entero + decimal;
console.log(suma); // Muestra 45.14 en la consola


// Cadenas de texto (String): Representan secuencias de caracteres.

let mensaje = "Hola, mundo!";
console.log(mensaje); // Muestra "Hola, mundo!" en la consola

// Booleanos (Boolean): Representan valores verdaderos o falsos

let esVerdadero = true;
let esFalso = false;

if (esVerdadero) {
  console.log("Esto se ejecuta porque esVerdadero es verdadero.");
} else {
  console.log("Esto no se ejecuta.");
}

// Arreglos (Array): Representan listas ordenadas de valores.

let frutas = ["manzana", "plátano", "uva"];
console.log(frutas[0]); // Muestra "manzana" en la consola

// Objetos (Object): Representan conjuntos de pares clave-valor.

let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Nueva York"
  };
  
  console.log(persona.nombre); // Muestra "Juan" en la consola
  
  // Undefined: Representa la ausencia de un valor.

let variableNoDefinida;
console.log(variableNoDefinida); // Muestra "undefined" en la consola

// Null: Representa la ausencia intencional de un valor.

let valorNulo = null;
console.log(valorNulo); // Muestra "null" en la consola

// Funciones (Function): Son bloques de código que se pueden invocar.

function saludar(nombre) {
    return "Hola, " + nombre + "!";
  }
  
  let saludo = saludar("Ana");
  console.log(saludo); // Muestra "Hola, Ana!" en la consola
  
