// El "hoisting" es un comportamiento en JavaScript en el que las declaraciones de variables y funciones se mueven al comienzo de su alcance durante la fase de compilación. Sin embargo, solo la declaración se mueve, no la inicialización o asignación. Esto significa que puedes usar una variable o función antes de declararla en tu código, pero ten en cuenta que la inicialización o asignación de valores o funciones debe realizarse después de la declaración para evitar resultados inesperados. A continuación, te proporcionaré ejemplos con comentarios para entender mejor el hoisting.

//Ejemplo de hoisting con variables:

console.log(mensaje); // Muestra "undefined" (la declaración se mueve al principio)
var mensaje = "Hola, mundo!";
console.log(mensaje); // Muestra "Hola, mundo!"

//En este ejemplo, la declaración de mensaje se "eleva" al principio del alcance, lo que significa que la variable existe pero no tiene un valor definido hasta después de la declaración. Por eso, la primera impresión muestra "undefined".

//Ejemplo de hoisting con funciones:

saludar(); // Muestra "Hola, Ana!"

function saludar() {
  console.log("Hola, Ana!");
}

//En este caso, la declaración de la función saludar se "eleva" al principio, lo que permite llamar a la función antes de su declaración. Esto funciona debido al hoisting de funciones.

//Sin embargo, es importante tener en cuenta que el hoisting solo se aplica a declaraciones, no a inicializaciones. Por lo tanto, si asignas un valor a una variable antes de su declaración, obtendrás un resultado inesperado:

valor = 5;
console.log(valor); // Muestra 5

var valor;

//En este ejemplo, la variable valor se declara después de que se le haya asignado un valor. Aunque el hoisting mueve la declaración al principio, la inicialización mantiene el valor original.

//El hoisting es un comportamiento que debes comprender para escribir código JavaScript de manera efectiva. Se recomienda declarar y asignar variables al comienzo de sus alcances y evitar depender del hoisting para mantener el código más legible y menos propenso a errores.