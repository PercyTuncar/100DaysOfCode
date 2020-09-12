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

## Declarar una variable de solo lectura con la palabra clave const
La palabra clave let no es la única forma nueva de declarar variables. En ES6, también puede declarar variables usando la palabra clave const.

const tiene todas las características increíbles que permite, con la ventaja adicional de que las variables declaradas usando const son de solo lectura. Son un valor constante, lo que significa que una vez que una variable se asigna con const, no se puede reasignar.

```js
"use strict";
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error
```
Como puede ver, intentar reasignar una variable declarada con const arrojará un error. Siempre debe nombrar las variables que no desea reasignar usando la palabra clave const. Esto ayuda cuando accidentalmente intenta reasignar una variable que debe permanecer constante. ***Una práctica común al nombrar constantes es usar todas las letras mayúsculas***, con palabras separadas por un guión bajo.

**Nota**: Es común que los desarrolladores usen identificadores de variable en mayúsculas para valores inmutables y minúsculas o camelCase para valores mutables (objetos y matrices). En un desafío posterior, verá un ejemplo de un identificador de variable en minúsculas que se usa para una matriz.

## Mutar una matriz declarada con const
La declaración const tiene muchos casos de uso en JavaScript moderno.

Algunos desarrolladores prefieren asignar todas sus variables usando const por defecto, a menos que sepan que necesitarán reasignar el valor. Solo en ese caso, usan let.

Sin embargo, es importante comprender que los objetos (incluidos los arreglos y las funciones) asignados a una variable mediante const siguen siendo mutables. El uso de la declaración const solo evita la reasignación del identificador de variable.
```js
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
```
Como puede ver, puede mutar el objeto [5, 6, 7] en sí mismo y la variable s seguirá apuntando a la matriz alterada [5, 6, 45]. Como todas las matrices, los elementos de la matriz en s son mutables, pero debido a que se usó const, no puede usar el identificador de variable s para apuntar a una matriz diferente usando el operador de asignación.

## Prevenir la mutación de objetos
Como se vio en el desafío anterior, la declaración const por sí sola no protege realmente sus datos de la mutación. Para asegurarse de que sus datos no cambien, JavaScript proporciona una función **Object.freeze** para evitar la mutación de datos.

Una vez que el objeto está congelado, ya no puede agregar, actualizar o eliminar propiedades de él. Cualquier intento de cambiar el objeto será rechazado sin error.    
```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}
```

## Utilice funciones de flecha para escribir funciones anónimas concisas
En JavaScript, a menudo no necesitamos nombrar nuestras funciones, especialmente cuando pasamos una función como argumento a otra función. En cambio, creamos funciones en línea. No necesitamos nombrar estas funciones porque no las reutilizamos en ningún otro lugar.
```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```
ES6 nos proporciona el azúcar sintáctico para no tener que escribir funciones anónimas de esta manera. En su lugar, puede utilizar la sintaxis de la función de flecha:
```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```
Cuando no hay un cuerpo de función y solo un valor de retorno, la sintaxis de la función de flecha le permite omitir la palabra clave **return**, así como los corchetes que rodean el código. Esto ayuda a simplificar funciones más pequeñas en declaraciones de una línea:
```js
const myFunc = () => "value";
```

## Escribir funciones de flecha con parámetros
Al igual que una función normal, puede pasar argumentos a una función de flecha.
```js
// doubles input value and returns it
const doubler = (item) => item * 2;
```
Si una función de flecha tiene un solo argumento, **se pueden omitir los paréntesis** que encierran el argumento.
```js
// the same function, without the argument parentheses
const doubler = item => item * 2;
```
Es posible pasar más de un argumento a una función de flecha.
```js
// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
```
## Establecer parámetros predeterminados para sus funciones
Para ayudarnos a crear funciones más flexibles, ES6 introduce parámetros predeterminados para funciones.

Mira este código:
```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```
El parámetro predeterminado se activa cuando no se especifica el argumento (no está definido). Como puede ver en el ejemplo anterior, el nombre del parámetro recibirá su valor predeterminado "Anónimo" cuando no proporcione un valor para el parámetro. Puede agregar valores predeterminados para tantos parámetros como desee.

## Usar el parámetro Rest en una función con parámeros
Para ayudarnos a crear funciones más flexibles, ES6 introduce el parámetro rest para los parámetros de función. Con el parámetro rest, puede crear funciones que tomen un número variable de argumentos. Estos argumentos se almacenan en una matriz a la que se puede acceder más tarde desde dentro de la función.

Mira este código:
```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
```
El parámetro **rest** elimina la necesidad de verificar la matriz de argumentos y nos permite aplicar **map()**, **filter()** y **reduce()** en la matriz de parámetros.

## Use the Spread Operator to Evaluate Arrays In-PlacePassed
ES6 introduce el Spread Operator, que nos permite expandir matrices y otras expresiones en lugares donde se esperan múltiples parámetros o elementos.

El siguiente código ES5 usa apply () para calcular el valor máximo en una matriz:
```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
```
Tuvimos que usar **Math.max.apply(null, arr)** porque **Math.max(arr)** devuelve *NaN*. **Math.max()** espera argumentos separados por comas, pero no una matriz. El Spread Operator hace que esta sintaxis sea mucho mejor de leer y mantener.
```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
```
**...arr** devuelve una matriz desempaquetada. En otras palabras, extiende la matriz. Sin embargo, el  Spread Operator solo funciona en el lugar, como en un argumento para una función o en un literal de matriz. El siguiente código no funcionará:
```js
const spreaded = ...arr; // will throw a syntax error
```

## Utilice la asignación de desestructuración para extraer valores de objetos
La asignación de desestructuración es una sintaxis especial introducida en ES6, para asignar claramente valores tomados directamente de un objeto.

Considere el siguiente código ES5:

```js
const user = { 
    name: 'John Doe', 
    age: 34 
    };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
```
Aquí hay una declaración de asignación equivalente usando la sintaxis de desestructuración de ES6:
```js
const { name, age } = user;
// name = 'John Doe', age = 34
```
Aquí, se crearán las variables de nombre y edad y se les asignarán los valores de sus respectivos valores desde el objeto de usuario. Puedes ver cuánto más limpio es esto.

Puede extraer tantos o pocos valores del objeto como desee.


## Utilice la asignación de desestructuración para asignar variables desde objetos.
La desestructuración le permite asignar un nuevo nombre de variable al extraer valores. Puede hacer esto colocando el nuevo nombre después de dos puntos al asignar el valor.

Usando el mismo objeto del último ejemplo:
```js
const user = { name: 'John Doe', age: 34 };
```
A continuación, le mostramos cómo puede asignar nuevos nombres a las variables en la asignación:
```js
const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34
```
Puede leerlo como "obtener el valor de user.name y asignarlo a una nueva variable llamada userName" y así sucesivamente.   

## Utilice la asignación de desestructuración para asignar variables desde objetos anidados
Puede utilizar los mismos principios de las dos lecciones anteriores para desestructurar valores de objetos anidados.

Usando un objeto similar a los ejemplos anteriores:
```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```
A continuación, se explica cómo extraer los valores de las propiedades del objeto y asignarlos a variables con el mismo nombre:
```js
const { johnDoe: { age, email }} = user;
``` 
Y así es como puede asignar los valores de las propiedades de un objeto a variables con diferentes nombres:
```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
``` 

## Utilice la asignación de desestructuración para asignar variables desde arrays
ES6 hace que desestructurar matrices sea tan fácil como desestructurar objetos.

Una diferencia clave entre el spread operator y la desestructuración de la matriz es que el  spread operator descomprime todo el contenido de una matriz en una lista separada por comas. En consecuencia, no puede seleccionar ni elegir qué elementos desea asignar a las variables.

Desestructurar una matriz nos permite hacer exactamente eso:
```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
``` 
A la variable **a** se le asigna el primer valor de la matriz, y a **b** se le asigna el segundo valor de la matriz. También podemos acceder al valor en cualquier índice en una matriz con desestructuración usando comas para alcanzar el índice deseado:
```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```


## Utilice la asignación de desestructuración con el parámetro Rest para reasignar elementos de un array
En algunas situaciones que implican la desestructuración de matrices, es posible que deseemos recopilar el resto de los elementos en una matriz separada.

El resultado es similar a **Array.prototype.slic()**, como se muestra a continuación:
```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
``` 
Las variables a y b toman el primer y segundo valor de la matriz. Después de eso, debido a la presencia del parámetro rest, arr obtiene el resto de los valores en forma de matriz. El resto del elemento solo funciona correctamente como última variable de la lista. Al igual que en, no puede usar el parámetro rest para capturar un subarreglo que omite el último elemento del arreglo original.

## ES6: usar la asignación de desestructuración para pasar un objeto como parámetros de una función
En algunos casos, puede desestructurar el objeto en un argumento de función.

Considere el siguiente código:
```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
```
Esto efectivamente destruye el objeto enviado a la función. Esto también se puede hacer en el lugar:
```js
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}
``` 
Cuando profileData se pasa a la función anterior, los valores se desestructuran del parámetro de función para su uso dentro de la función.