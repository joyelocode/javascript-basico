//Los condicionales son estructuras de control en programación que te permiten tomar decisiones basadas en una condición dada. En JavaScript, los condicionales se implementan principalmente con las estructuras if, else if (opcional) y else. A continuación, te explicaré cómo funcionan y proporcionaré ejemplos con comentarios para ilustrar su uso.

//Estructura if: La declaración if se utiliza para ejecutar un bloque de código si una condición es verdadera.

//Ejemplo:

let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}

//En este ejemplo, si la variable edad es igual o mayor a 18, se muestra el mensaje "Eres mayor de edad".

//Estructura else if (opcional): Puedes usar la declaración else if después de un if para comprobar múltiples condiciones en orden. Si la primera condición no es verdadera, se verifica la siguiente.

//Ejemplo:

let puntaje = 75;

if (puntaje >= 90) {
  console.log("Tienes una A");
} else if (puntaje >= 80) {
  console.log("Tienes una B");
} else if (puntaje >= 70) {
  console.log("Tienes una C");
} else {
  console.log("Tienes una D");
}

//En este ejemplo, se verifica el puntaje y se muestra el grado correspondiente en función de la puntuación.

//Estructura else (opcional): Puedes usar else después de un if o una serie de else if para proporcionar un bloque de código que se ejecuta si ninguna de las condiciones anteriores es verdadera.

//Ejemplo:

let hora = 15;

if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

//En este ejemplo, se muestra un saludo basado en la hora del día.

//Los condicionales son fundamentales para controlar el flujo de tu programa y tomar decisiones dinámicas en función de las condiciones. Puedes anidar condicionales, utilizar operadores lógicos (&&, ||) y combinarlos de varias maneras para crear lógica más compleja en tus aplicaciones.