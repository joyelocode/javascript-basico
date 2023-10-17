// Declaración de Variables:
//En JavaScript, puedes declarar variables utilizando tres palabras clave: var, let y const. A partir de ECMAScript 6 (ES6), se recomienda usar let y const en lugar de var debido a un mejor alcance y manejo de variables. let se utiliza cuando el valor de la variable puede cambiar, mientras que const se utiliza cuando el valor no debe cambiar una vez asignado.

// Ejemplo:

// Declaración de variables
let nombre = "Juan"; // Variable que puede cambiar
const edad = 30;     // Variable constante

//Asignación de Valores:
//Puedes asignar valores a las variables en el momento de la declaración o en cualquier momento posterior.

// Ejemplo:

let x;
x = 10; // Asignación de valor después de la declaración

//Nombres de Variables:
//Los nombres de las variables deben seguir algunas reglas. Deben comenzar con una letra, un guion bajo o un signo de dólar, seguido de letras, dígitos o guiones bajos. Son sensibles a mayúsculas y minúsculas.

//Ejemplo:

let miVariable;   // Válido
let _variable;    // Válido
let $otraVariable; // Válido
//let 123variable;   // Inválido (comienza con un número)

//Alcance de Variables:
//El alcance de una variable se refiere a dónde está disponible para su uso. Las variables declaradas con var tienen un alcance de función, mientras que las declaradas con let y const tienen un alcance de bloque.

//Ejemplo:

function ejemploAlcance() {
    if (true) {
      let variableBloque = "Dentro del bloque";
    }
    console.log(variableBloque); // Generará un error, variableBloque no está definida aquí
  }

  //Reasignación de Variables:
  //Puedes cambiar el valor de una variable declarada con let, pero no puedes cambiar el valor de una variable declarada con const.
  
  //Ejemplo:

let numero = 5;
numero = 10; // Se permite

const constante = 42;
constante = 20; // Generará un error

//Variables no Definidas:
//Si intentas usar una variable que no ha sido declarada, obtendrás un valor especial llamado undefined.

//Ejemplo:

let variableNoDefinida;
console.log(variableNoDefinida); // Muestra "undefined" en la consola

//Variables Globales:
//Si declaras una variable fuera de cualquier función, se convierte en una variable global y está disponible en todo el ámbito del programa.

//Ejemplo:

let global = "Soy una variable global";

function mostrarGlobal() {
  console.log(global);
}

mostrarGlobal(); // Muestra "Soy una variable global" en la consola

//Convención de Nombres:
//Es una buena práctica seguir convenciones de nombres significativos para hacer que el código sea más legible. Puedes usar camelCase o guiones bajos, pero generalmente se recomienda camelCase para nombres de variables en JavaScript.

//Ejemplo:

let nombreDeUsuario = "Juan"; // CamelCase
let nombre_de_usuario = "Juan"; // Guiones bajos

//Las variables son fundamentales para almacenar y manipular datos en JavaScript. Puedes utilizarlas para almacenar valores, realizar cálculos y controlar el flujo de tu programa.