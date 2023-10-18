//Las funciones son bloques de código en JavaScript que se pueden llamar y reutilizar para realizar tareas específicas. Las funciones permiten dividir un programa en partes más pequeñas y manejables, lo que facilita el mantenimiento y la legibilidad del código. A continuación, te explicaré los conceptos clave sobre las funciones en JavaScript y proporcionaré ejemplos con comentarios.

//Declaración de una función:

//Puedes declarar una función utilizando la palabra clave function, seguida del nombre de la función y un conjunto de paréntesis que pueden contener parámetros.

//Ejemplo:

// Declaración de una función llamada 'saludar'
function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
  }

//Llamada a una función:

//Para ejecutar o "llamar" una función, simplemente utiliza su nombre seguido de paréntesis, y pasa los argumentos si es necesario.
  
//Ejemplo:

saludar("Juan"); // Llama a la función 'saludar' con el argumento "Juan"

//Parámetros y Argumentos:

//Los parámetros son variables que se declaran en la definición de una función, y los argumentos son los valores reales que se pasan a la función cuando se llama.

//Ejemplo:

function sumar(a, b) {
    return a + b;
  }
  
  let resultado = sumar(3, 5); // 'a' y 'b' son parámetros, 3 y 5 son argumentos
  console.log(resultado); // Muestra 8

//Retorno de valores:

//Las funciones pueden devolver un valor utilizando la palabra clave return. Si no se especifica un valor de retorno, la función devuelve undefined.
  
//Ejemplo:

function sumar(a, b) {
    return a + b;
  }
  
//let resultado = sumar(3, 5);
console.log(resultado); // Muestra 8

//Funciones anónimas:

//Puedes definir funciones sin un nombre y asignarlas a variables. Estas se conocen como funciones anónimas.

//Ejemplo:

let duplicar = function(x) {
    return x * 2;
  };
  
  //let resultado = duplicar(4);
  console.log(resultado); // Muestra 8

// Funciones flecha (Arrow Functions):

//Las funciones flecha son una forma más concisa de escribir funciones anónimas. Se definen utilizando la sintaxis () => {}.
  
//Ejemplo:

let triplicar = (x) => x * 3;
//let resultado = triplicar(4);
console.log(resultado); // Muestra 12

//Ámbito de variables (scope):

//Las variables declaradas dentro de una función tienen un ámbito local y no son accesibles fuera de la función. Las variables declaradas fuera de las funciones tienen un ámbito global y son accesibles desde cualquier parte del código.

//Ejemplo:

let globalVariable = "Soy una variable global";

function funcionLocal() {
  let localVariable = "Soy una variable local";
  console.log(globalVariable); // Puede acceder a la variable global
  console.log(localVariable); // Puede acceder a la variable local
}

funcionLocal();
console.log(globalVariable); // Puede acceder a la variable global
console.log(localVariable); // Genera un error, 'localVariable' no está definida fuera de la función

//Estos son conceptos clave relacionados con las funciones en JavaScript. Las funciones son fundamentales para la programación en JavaScript y te permiten encapsular lógica, reutilizar código y crear programas más organizados y legibles.

  
  