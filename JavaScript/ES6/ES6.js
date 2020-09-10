


//Mutate an Array Declared with const
/* 
An array is declared as 
const s = [5, 7, 2]. 
Change the array 
to [2, 5, 7] using various element 
assignment. */
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Using s = [2, 5, 7] would be invalid
s[0]=2;
s[1]=5;
s[2]=7;
}
editInPlace();


//Prevent Object Mutation
/**
 * En este desafío, utilizará 
 * Object.freeze para evitar que 
 * cambien las constantes 
 * matemáticas. Debe congelar
 *  el objeto MATH_CONSTANTS 
 * para que nadie pueda alterar
 *  el valor de PI, agregar o
 *  eliminar propiedades.
 */
function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  Object.freeze(MATH_CONSTANTS)
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  
  const PI = freezeObj();
  

  /// Utilice funciones de flecha para escribir funciones anónimas concisas
  const magic = () => {
    "use strict";
    return new Date();
  };
  magic();


  // Escribir funciones de flecha con parámetros
  const myConcat = (arr1, arr2) =>{
    "use strict";
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));
  



  /*Modifique el incremento de la función agregando parámetros
   predeterminados para que agregue 1 al número si no se
    especifica el valor.*/
    // Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code ab thioves line
increment();


//Modifique la función sum usando el parámetro rest de tal manera que la función sum pueda tomar cualquier número de argumentos y devolver su suma.
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  sum(5,5)

  // Copie todo el contenido de arr1 en otra matriz arr2 usando el operador de propagación.
  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);


//Reemplace las dos asignaciones con una asignación de desestructuración equivalente. Todavía debería asignar a las variables hoy y mañana los valores de hoy y mañana del objeto HIGH_TEMPERATURES.
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {tomorrow, today} = HIGH_TEMPERATURES;
  
  // Only change code above this line
  