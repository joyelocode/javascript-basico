//El "scope" (alcance) en JavaScript se refiere a las reglas que determinan dónde en tu código una variable es accesible o no. Comprender el alcance es esencial para escribir código JavaScript efectivo y evitar errores. Hay dos tipos principales de alcance en JavaScript: el alcance global y el alcance local.

//Alcance Global:
//Las variables declaradas fuera de cualquier función tienen un alcance global. Esto significa que son accesibles desde cualquier parte del código, ya que están disponibles en todo el programa.

//Ejemplo:

// Variable global
let nombre = "Juan";

function saludar() {
  console.log(`Hola, ${nombre}!`); // Puede acceder a la variable global 'nombre'

  //En este caso, la variable nombre es global y se puede acceder tanto dentro como fuera de la función.
}

saludar(); // Muestra "Hola, Juan!"


//Alcance Local (Funcional o de Bloque):
//Las variables declaradas dentro de una función o un bloque de código tienen un alcance local. Esto significa que solo son accesibles dentro de esa función o bloque.

//Ejemplo de alcance local en una función:

function saludar() {
    let mensaje = "Hola, mundo!";
    console.log(mensaje); // Puede acceder a la variable local 'mensaje'
  }
  
  saludar(); // Muestra "Hola, mundo!"
  console.log(mensaje); // Genera un error, 'mensaje' no está definido fuera de la función

//Ejemplo de alcance local en un bloque (desde ECMAScript 6):

  if (true) {
    let numero = 42;
    console.log(numero); // Puede acceder a la variable local 'numero' dentro del bloque
  }
  
  console.log(numero); // Genera un error, 'numero' no está definido fuera del bloque
  

//Alcance Anidado:
//En JavaScript, las funciones y bloques pueden estar anidadas dentro de otras funciones o bloques. Las variables internas tienen prioridad sobre las externas cuando hay nombres de variables iguales.
  
//Ejemplo de alcance anidado:

let mensaje = "Hola desde el alcance global";

function mostrarMensaje() {
  let mensaje = "Hola desde el alcance local";

  function mostrar() {
    console.log(mensaje); // Accede a la variable local más cercana
  }

  mostrar(); // Muestra "Hola desde el alcance local"
}

mostrarMensaje();

//En este caso, la función interna mostrar accede a la variable mensaje más cercana en su propio alcance local.

//El alcance es fundamental para evitar problemas de colisión de nombres de variables y mantener un código limpio y modular. En general, se recomienda utilizar let y const para declarar variables en lugar de var, ya que proporcionan un mejor control del alcance.