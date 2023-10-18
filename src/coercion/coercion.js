//La coerción en JavaScript se refiere a la conversión automática o implícita de un tipo de dato a otro durante una operación. Esto puede ocurrir en diversas situaciones, como operaciones aritméticas, comparaciones y concatenación de cadenas. La coerción puede llevar a resultados inesperados, por lo que es importante entender cómo funciona.

//Existen dos tipos principales de coerción en JavaScript:

//Coerción Implícita (Automática): En este caso, JavaScript realiza la conversión automáticamente sin que el programador lo solicite explícitamente.

//Coerción Explícita (Manual): En este caso, el programador realiza la conversión de manera deliberada utilizando funciones o operadores de conversión.

//A continuación, se presentan ejemplos de ambos tipos de coerción con comentarios explicativos:

//Coerción Implícita:

// Ejemplo de coerción implícita en operaciones aritméticas
let numero = 5;
let texto = "10";
let resultado = numero + texto; // JavaScript convierte 'numero' a cadena y luego concatena
console.log(resultado); // Muestra "510" (concatenación de cadenas)

// Ejemplo de coerción implícita en comparaciones
let valor = 5;
if (valor == "5") {
  console.log("Son iguales"); // Se realiza una conversión implícita y muestra "Son iguales"
}

// Ejemplo de coerción implícita en comparaciones estrictas
if (valor === "5") {
  console.log("Son iguales"); // No se realiza conversión implícita, no muestra nada
}

//En los ejemplos anteriores, la coerción implícita ocurre cuando JavaScript convierte el número en cadena o viceversa durante la operación o la comparación.

//Coerción Explícita:

// Coerción explícita de cadena a número
//let numeroComoTexto = "42";
//let numero = Number(numeroComoTexto); // Utilizamos la función Number para convertir
console.log(numero); // Muestra 42 (número)

// Coerción explícita de número a cadena
//let numero = 42;
//let numeroComoTexto = numero.toString(); // Utilizamos el método toString
console.log(numeroComoTexto); // Muestra "42" (cadena)

// Coerción explícita de cadena a número usando parseInt
let numeroComoTexto = "55";
//let numero = parseInt(numeroComoTexto); // Utilizamos parseInt para convertir
console.log(numero); // Muestra 55 (número)

//En estos ejemplos, se realiza una coerción explícita utilizando las funciones Number, toString, y parseInt para convertir entre tipos de datos de manera controlada.

//Es importante comprender la coerción en JavaScript para evitar resultados inesperados en tu código. La coerción implícita puede ser útil en ciertas situaciones, pero también puede ser propensa a errores si no se comprende completamente. La coerción explícita te permite tener un mayor control sobre la conversión de tipos de datos.

