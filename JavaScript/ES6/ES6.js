


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
  


  /* Reemplace las dos asignaciones 
  con una asignación de desestructuración 
  equivalente. Todavía debería asignar a 
  las variables highToday y highTomorrow 
  los valores de hoy y mañana del objeto
   HIGH_TEMPERATURES.*/

   const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const {today:highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES;
  
  // Only change code above this line
  



  /**
   * Reemplace las dos asignaciones con
   *  una asignación de desestructuración 
   * equivalente. Aún debe asignar a las
   *  variables lowToday y highToday los
   *  valores de today.low y today.high 
   * del objeto LOCAL_FORECAST.
   */

  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
  const {today:{low:lowToday, high:highToday}} = LOCAL_FORECAST;
  
  // Only change code above this line
  

  /**
   * Utilice la asignación de desestructuración 
   * para intercambiar los valores de 
   * a y b de modo que a reciba el valor 
   * almacenado en b y b reciba el 
   * valor almacenado en a.
   */
  let a = 8, b = 6;
  // Only change code below this line
  [a, b] = [b, a];
  console.log(b)

  /**
   * Use la asignación de desestructuración
   *  con el parámetro rest para realizar 
   * un Array.prototype.slice() efectivo
   *  de modo que arr sea un subarreglo 
   * del origen del arreglo original con 
   * los dos primeros elementos omitidos.
   */

  const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const [a,b, ...arr] = list; // Change this line
  // Only change code above this line
  console.log(arr);
  return arr;
}
const arr = removeFirstTwo(source);


/**
 * Use la asignación de
 *  desestructuración 
 * dentro del argumento 
 * de la función half 
 * para enviar solo max 
 * y min dentro de la
 *  función.
 */

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line


//Utilice taquigrafía de propiedad de objeto con literales de objeto para crear y devolver un objeto con propiedades de nombre, edad y género.
const createPerson = (name, age, gender) => {
  "use strict";
  // Only change code below this line
  return {
    name,
    age,
    gender
  };
  // Only change code above this line
};
/**FUNCIONES DENTRO DE UN OBJETO:
 * Refactorice la función setGear dentro del
 *  objeto bicicleta para usar la sintaxis 
 * abreviada descrita anteriormente.
 */
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);


/**
 * Use la palabra clave class y escriba un constructor para crear la clase Vegetable.

La clase Vegetable le permite crear un objeto vegetal con un nombre de
 propiedad que se pasa al constructor.
 */

 // Only change code below this line
class Vegetable {
  constructor(name){
    this.name=name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
