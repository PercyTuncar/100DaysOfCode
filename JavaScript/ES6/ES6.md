# Introduction to the ES6 Challenges
ECMAScript es una versión estandarizada de JavaScript con el objetivo de unificar las especificaciones y características del lenguaje. Como todos los principales navegadores y tiempos de ejecución de JavaScript siguen esta especificación, el término ECMAScript es intercambiable con el término JavaScript.

JavaScript es un lenguaje de programación en evolución. A medida que se agregan funciones y se realizan revisiones, se lanzan nuevas versiones del lenguaje para que las utilicen los desarrolladores.

La versión estandarizada más reciente se llama ECMAScript 6 (ES6), lanzada en 2015. Esta nueva versión del lenguaje agrega algunas características poderosas que serán cubiertas en esta sección de desafíos, que incluyen:

- Arrow functions
- Classes
- Modules
- Promises
- Generators
- let and const

**Nota: no todos los navegadores son compatibles con las funciones de ES6. Si usa ES6 en sus propios proyectos, es posible que deba usar un programa (transpilador) para convertir su código ES6 en ES5 hasta que los navegadores admitan ES6.**

## Explore Differences Between the var and let KeywordsPassed

Uno de los mayores problemas al declarar variables con la palabra clave var es que puede sobrescribir las declaraciones de variables sin error.
```js
var camper = 'James';
var camper = 'David';
console.log(camper);
// logs 'David'
```
Como puede ver en el código anterior, la variable **camper** se declara originalmente como *James* y luego se reemplaza como *David*. En una aplicación pequeña, es posible que no se encuentre con este tipo de problema, pero cuando su código aumenta de tamaño, puede sobrescribir accidentalmente una variable que no tenía la intención de sobrescribir. Debido a que este comportamiento no arroja un error, la búsqueda y corrección de errores se vuelve más difícil.

En ES6 se introdujo una nueva palabra clave llamada **let** para resolver este problema potencial con la palabra clave **var**. Si reemplazara **var** con **let** en las declaraciones de variables del código anterior, el resultado sería un error.
```js
let camper = 'James';
let camper = 'David'; // throws an error
```
Este error se puede ver en la consola de su navegador. Entonces, a diferencia de **var**, cuando se usa **let**, una variable con el mismo nombre solo se puede declarar una vez. Tenga en cuenta el "use strict". Esto habilita el modo estricto, que detecta errores de codificación comunes y acciones "inseguras". Por ejemplo:
```js
"use strict";
x = 3.14; // throws an error because x is not declared
```
Actualice el código para que solo use la palabra clave let.
```js
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
```


## Compare Scopes of the var and let Keywords
Cuando declaras una variable con la palabra clave **var**, se declara globalmente o localmente si se declara dentro de una función.

La palabra clave **let** se comporta de manera similar, pero con algunas características adicionales. Cuando declaras una variable con la palabra clave **let** dentro de un bloque, su alcance se limita a ese bloque.   
For example:
```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3
```
Con la palabra clave var, i se declara globalmente. Entonces, cuando se ejecuta i ++, actualiza la variable global. Este código es similar al siguiente:
```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3
```
Este comportamiento causará problemas si crea una función y la almacena para su uso posterior dentro de un bucle for que usa la variable i. Esto se debe a que la función almacenada siempre se referirá al valor de la variable i global actualizada.
```js


var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3
```
Como puede ver, printNumTwo() imprime 3 y no 2. Esto se debe a que el valor asignado a i se actualizó y printNumTwo() devuelve la i global y no el valor que tenía cuando se creó la función en el ciclo for. La palabra clave let no sigue este comportamiento:
```js
'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"
```
**i** no está definido porque no se declaró en el ámbito global. Solo se declara dentro de la instrucción de bucle for. printNumTwo() devolvió el valor correcto porque tres variables i diferentes con valores únicos (0, 1 y 2) fueron creadas por la palabra clave let dentro de la declaración de bucle.
