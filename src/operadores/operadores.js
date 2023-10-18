//Los operadores en JavaScript son símbolos o palabras clave que se utilizan para realizar operaciones en valores o variables. Estas operaciones pueden incluir matemáticas, comparaciones, asignaciones y más. A continuación, se explican algunos de los operadores más comunes en JavaScript, junto con ejemplos y comentarios sobre lo que hacen.

//Operadores Aritméticos:

//Estos operadores se utilizan para realizar operaciones matemáticas.

//Suma (+): Realiza una suma.
//Resta (-): Realiza una resta.
//Multiplicación (*): Realiza una multiplicación.
//División (/): Realiza una división.
//Módulo (%): Devuelve el residuo de una división.

//Ejemplo:

let a = 10;
let b = 3;
let suma = a + b;     // 10 + 3 = 13
let resta = a - b;    // 10 - 3 = 7
let multiplicacion = a * b;  // 10 * 3 = 30
let division = a / b;      // 10 / 3 ≈ 3.3333
let modulo = a % b;        // 10 % 3 = 1 (residuo)

//Operadores de Comparación:

//Estos operadores se utilizan para comparar valores y devuelven un valor booleano (true o false).

//Igual (==): Compara si dos valores son iguales.
//No igual (!=): Compara si dos valores son diferentes.
//Estrictamente igual (===): Compara si dos valores son iguales y del mismo tipo.
//Estrictamente no igual (!==): Compara si dos valores son diferentes o de tipos diferentes.
//Mayor que (>): Compara si un valor es mayor que otro.
//Menor que (<): Compara si un valor es menor que otro.
//Mayor o igual que (>=): Compara si un valor es mayor o igual que otro.
//Menor o igual que (<=): Compara si un valor es menor o igual que otro.

//Ejemplo:

let x = 5;
let y = 3;

let igual = x == y;       // false (x no es igual a y)
let noIgual = x != y;     // true (x no es igual a y)
let estrictamenteIgual = x === y;  // false (x y y son de tipos diferentes)
let mayorQue = x > y;     // true (5 es mayor que 3)
let menorQue = x < y;     // false (5 no es menor que 3)

//Operadores Lógicos:

//Estos operadores se utilizan para combinar o modificar expresiones lógicas y devuelven un valor booleano.

//Y lógico (&&): Devuelve true si ambas expresiones son verdaderas.
//O lógico (||): Devuelve true si al menos una de las expresiones es verdadera.
//No lógico (!): Niega una expresión booleana.

//Ejemplo:

//let a = true;
//let b = false;

let yLogico = a && b;   // false (a y b son falsos)
let oLogico = a || b;   // true (a es verdadero)
let noLogico = !a;      // false (negación de a)

//Operadores de Asignación:

//Estos operadores se utilizan para asignar valores a variables.

//Asignación (=): Asigna un valor a una variable.
//Operador de asignación adicional (+=, -=, *=, /=): Realiza la operación y luego asigna el resultado a la variable.

//Ejemplo:

//let x = 5;
x += 3;  // Equivalente a x = x + 3, x se convierte en 8

//Estos son algunos de los operadores más comunes en JavaScript. Los operadores te permiten realizar una amplia variedad de operaciones en tus programas, desde cálculos matemáticos hasta comparaciones y asignaciones. La comprensión de cómo funcionan es esencial para escribir código efectivo y expresivo.