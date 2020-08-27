## Module CSS


Las hojas de estilo en cascada (CSS) le indican al navegador cómo mostrar el texto y otro contenido que escribe en HTML.    
Tenga en cuenta que CSS distingue entre mayúsculas y minúsculas, así que tenga cuidado con las mayúsculas.

CSS ha sido adoptado por todos los principales navegadores y le permite controlar:

- color
- fonts
- positioning
- spacing
- sizing
- decorations
- transitions

Hay tres formas principales de aplicar el estilo CSS. Puede aplicar estilos en línea directamente a elementos HTML con el atributo de `style`. Alternativamente, puede colocar reglas CSS dentro de etiquetas de estilo en un documento HTML. Finalmente, puede escribir reglas CSS en una hoja de estilo externa y luego hacer referencia a ese archivo en el documento HTML. Aunque las dos primeras opciones tienen sus casos de uso, la mayoría de los desarrolladores prefieren hojas de estilo externas porque mantienen los estilos separados de los elementos HTML. Esto mejora la legibilidad y reutilización de su código.

La idea detrás de CSS es que puede usar un selector para apuntar a un elemento HTML en el DOM (Modelo de objeto de documento) y luego aplicar una variedad de atributos a ese elemento para cambiar la forma en que se muestra en la página.
}

### Cambiar el color del texto
Así es como establecería el color del texto de su elemento h2 en azul:
```CSS
<h2 style="color: blue;">CatPhotoApp</h2>
``` 
Tenga en cuenta que es una buena práctica terminar las declaraciones de estilo en línea con una `;` .
### Utilice selectores CSS para diseñar elementos
Con CSS, hay cientos de propiedades de CSS que puede usar para cambiar la apariencia de un elemento en su página.
Cuando ingresó ``<h2 style = "color: red;"> CatPhotoApp </h2>``, estaba diseñando ese elemento h2 individual con CSS en línea, que significa Hojas de estilo en cascada.

Esa es una forma de especificar el estilo a un elemento, pero hay una mejor manera de aplicar CSS.

En la parte superior de su código, cree un bloque de estilo como este:
```CSS
<style>
</style>
```
Dentro de ese bloque de estilo, puede crear un selector de CSS para todos los elementos h2. Por ejemplo, si quisiera que todos los elementos h2 fueran rojos, agregaría una regla de estilo que se ve así:
```CSS
<style>
  h2 {
    color: red;
  }
</style>
```
Tenga en cuenta que es importante tener llaves de apertura y cierre ({}) alrededor de las reglas de estilo de cada elemento. También debe asegurarse de que la definición de `style` de su elemento esté entre las etiquetas de `style` de apertura y cierre. Finalmente, asegúrese de agregar un punto y coma al final de cada una de las reglas de estilo de su elemento.

### Usar una clase CSS para diseñar un elemento
Las clases son estilos reutilizables que se pueden agregar a elementos HTML.

Aquí hay un ejemplo de declaración de clase CSS:
```CSS
<style>
  .blue-text {
    color: blue;
  }
</style>
```
Puede ver que hemos creado una clase CSS llamada **blue-text** dentro de la etiqueta `<style>`. Puede aplicar una clase a un elemento HTML como este: `<h2 class = "blue-text"> CatPhotoApp </h2>` Tenga en cuenta que en su elemento de estilo CSS, *los nombres de las clases comienzan con un punto.* En el atributo de clase de sus elementos HTML, el nombre de la clase no incluye el punto.

### Cambiar el tamaño de fuente de un elemento
El tamaño de fuente está controlado por la propiedad font-size de CSS, como esta:
```CSS
h1 {
  font-size: 30px;
}
```
### Establecer la familia de fuentes de un elemento
Puede establecer qué fuente debe usar un elemento, utilizando la propiedad `font-family`.

Por ejemplo, si quisiera establecer la fuente de su elemento h2 en sans-serif, usaría el siguiente CSS:
```CSS
h2 {
  font-family: sans-serif;
}
```
### Importar una fuente de Google
Además de especificar las fuentes comunes que se encuentran en la mayoría de los sistemas operativos, también podemos especificar fuentes web personalizadas no estándar para su uso en nuestro sitio web. Hay muchas fuentes de fuentes web en Internet. Para este ejemplo, nos centraremos en la biblioteca de fuentes de Google.    
Google Fonts es una biblioteca gratuita de fuentes web que puede utilizar en su CSS haciendo referencia a la URL de la fuente.

```CSS
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
```

Entonces, sigamos adelante e importemos y apliquemos una fuente de Google (tenga en cuenta que si Google está bloqueado en su país, deberá omitir este desafío).
Ahora puedes usar la fuente Lobster en tu CSS usando Lobster como `FAMILY_NAME` como en el siguiente ejemplo:
familia de fuentes: `FAMILY_NAME, GENERIC_NAME;`.

`GENERIC_NAME` es opcional y es una fuente alternativa en caso de que la otra fuente especificada no esté disponible. Esto se trata en el próximo desafío.

Family distingue entre mayúsculas y minúsculas y deben estar entre comillas si hay un espacio en el nombre. Por ejemplo, necesita comillas para usar la fuente "Open Sans", pero no para usar la fuente Lobster.

### Especificar cómo deben degradarse las fuentes 
Hay varias fuentes predeterminadas que están disponibles en todos los navegadores. Estas familias de fuentes genéricas incluyen monoespacio, serif y sans-serif

Cuando una fuente no está disponible, puede decirle al navegador que "degrade" a otra fuente.

Por ejemplo, si desea que un elemento use la fuente Helvetica, pero se degrada a la fuente sans-serif cuando Helvetica no está disponible, lo especificará de la siguiente manera:

```CSS
p {
  font-family: Helvetica, sans-serif;
}
```
Los nombres de familias de fuentes genéricas no distinguen entre mayúsculas y minúsculas. Además, no necesitan comillas porque son palabras clave CSS.

### 3 Size Your Images
CSS tiene una propiedad llamda `width` que controla el ancho de un elemento. Al igual que con las fuentes, usaremos `px` (pixels) Por ejemplo, si quisiéramos crear una clase CSS llamada `larger-image` que le dio a los elementos HTML un ancho de `500 píxeles`, usaríamos: 
```css
<style>
  .larger-image {
    width: 500px;
  }
</style>
```

### Agregue bordes alrededor de sus elementos
Los bordes CSS tienen propiedades como
`width`, `style` y `color`.     
  Por ejemplo, si quisiéramos crear un borde rojo de 5 píxeles alrededor de un elemento HTML, podríamos usar esta clase:
  ```css
  <style>
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
  }
</style>
```
Recuerde que puede aplicar múltiples clases a un elemento usando su atributo de clase, separando cada nombre de clase con un espacio. Por ejemplo:
```css
<img class="class1 class2">
```

### Agregar esquinas redondeadas en CSS
Agregar esquinas redondeadas con` border-radius`
La foto de tu gato tiene actualmente esquinas afiladas. Podemos redondear esas esquinas con una propiedad CSS llamada `border-radius`. 

Puede especificar un border-radius con píxeles. Dale a tu foto de gato un border-radius de 10 px.


### Imágenes circulares con border-radius
Además de los píxeles, también puede especificar el radio del borde mediante un porcentaje.


### Usar un atributo id para diseñar un elemento
Una cosa interesante acerca de los atributos de identificación es que, al igual que las clases, puedes diseñarlos usando CSS.

Sin embargo, una identificación no es reutilizable y solo debe aplicarse a un elemento. Un id también tiene una mayor especificidad (importancia) que una clase, por lo que si ambos se aplican al mismo elemento y tienen estilos en conflicto, se aplicarán los estilos del id.

Aquí hay un ejemplo de cómo puede tomar su elemento con el atributo id de cat-photo-element y darle el color de fondo verde. En tu elemento de estilo:
```css
# cat-photo-element {
  color de fondo: verde;
}
```
Tenga en cuenta que dentro de su elemento de estilo, siempre hace referencia a las clases poniendo un. delante de sus nombres. Siempre hace referencia a los identificadores colocando un # delante de sus nombres.

### Ajustar el relleno de un elemento (Padding)
Es posible que ya lo haya notado, pero todos los elementos HTML son esencialmente pequeños rectángulos.
**Son tres propiedades importantes controlan el espacio que rodea a cada elemento HTML:**
`padding`, `margin`, y `border`.   
Un elemento `padding` controla la cantidad de espacio entre el contenido del elemento y su `border`

Aquí, podemos ver que el cuadro azul y el cuadro rojo están anidados dentro del cuadro amarillo. Tenga en cuenta que el cuadro rojo tiene más `padding` que el cuadro azul.

```css
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
  }
  ```
  ```html
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
Cuando aumentas el `padding` de la caja azul aumentará la distancia (padding) entre el texto y el borde que lo rodea.

### Ajustar el margen de un elemento (Margin)
El `margin` de un elemento controla la cantidad de espacio entre el borde de un elemento y los elementos circundantes.

Aquí, podemos ver que el cuadro azul y el cuadro rojo están anidados dentro del cuadro amarillo. Tenga en cuenta que el cuadro rojo tiene un margen más grande que el cuadro azul, lo que lo hace parecer más pequeño.
```CSS
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 10px;
  }
</style>
```
```HTML
<h5 class="injected-text">margin</h5>
<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
Cuando aumente el margen del cuadro azul, aumentará la distancia entre su borde y los elementos circundantes.

### Agregar un margen negativo a un elemento
El `margin` de un elemento controla la cantidad de espacio entre el borde de un elemento y los elementos circundantes.

Si establece el `margin` de un elemento en un valor negativo, el elemento crecerá más.


### Add Different Padding to Each Side of an Element
A veces querrá personalizar un elemento para que tenga diferentes cantidades de padding  en cada uno de sus lados.
CSS le permite controlar el `padding` de los cuatro lados individuales de un elemento con las propiedades `padding-top`, `padding-right`, `padding-bottom` y `padding-left`.


### Utilice  Clockwise Notation para especificar el relleno de un elemento
En lugar de especificar un elemento  
padding-top, padding-right, padding-bottom, y padding-left  de un elemento individualmente, puede especificarlas todas en una línea, así:
```css
padding: 10px 20px 10px 20px;
```
Estos cuatro valores funcionan como un reloj: arriba, derecha, abajo, izquierda y producirán exactamente el mismo resultado que usar las instrucciones de relleno específicas de los lados.

### Utilice la notación en sentido horario para especificar el margen de un elemento
Intentemos esto de nuevo, pero con margin esta vez. 
```css
margin: 10px 20px 10px 20px;
```
### Utilice selectores de atributos para diseñar elementos
Ha estado agregando atributos `id` o `class` a elementos que desea diseñar específicamente. Estos se conocen como selectores de ID y clase. Hay otros selectores de CSS que puede usar para seleccionar grupos personalizados de elementos para diseñar.   
Para este desafío, usará el selector de atributos `[attr = value]` para diseñar las casillas de verificación en CatPhotoApp. Este selector empareja y aplica estilo a elementos con un valor de atributo específico. Por ejemplo, el siguiente código cambia los márgenes de todos los elementos con el tipo de atributo y un valor correspondiente de radio:
```css
[type='radio'] {
  margin: 20px 0px 20px 0px;
}
```

### Comprender las unidades absolutas frente a las relativas
Los últimos desafíos establecen el margen o el relleno de un elemento con píxeles (px).
**Los píxeles son un tipo de unidad de longitud**, que es lo que le dice al navegador cómo dimensionar o espaciar un elemento. Además de px, CSS tiene varias opciones de unidades de longitud diferentes que puede utilizar.    
Los dos tipos principales de unidades de longitud son absolutas y relativas.  
*Las unidades absolutas*se relacionan con las unidades físicas de longitud. Por ejemplo, **in** y **mm** se refieren a pulgadas y milímetros, resppectivamente. Las unidades de longitud absoluta se aproximan a la medida real en una pantalla, pero existen algunas diferencias dependiendo de la resolución de la pantalla.    
*Las unidades relativas*, como *em* o *rem*, son relativas a otro valor de longitud. Por ejemplo, em se basa en el tamaño de la fuente de un elemento. Si lo usa para establecer la propiedad de tamaño de fuente en sí, es relativo al tamaño de fuente del padre.

Nota: Hay varias opciones de unidades relativas que están vinculadas al tamaño de la ventana gráfica. Se tratan en la sección Principios de diseño web responsive. 

### Heredar estilos del elemento body
Ahora hemos demostrado que cada página HTML tiene un elemento *body*, y que su elemento *body* también se puede diseñar con CSS.    
Recuerde, puede diseñar su elemento *body* como cualquier otro elemento HTML, y todos sus otros elementos heredarán los estilos de su elemento **body**.   
```css
<style>
  body {
    background-color: black;
    color:green;
    font-family: monospace;
  }
</style>
```
```html
<h1>Hello World</h1>
```
### Priorizar un estilo sobre otro
A veces, sus elementos HTML recibirán varios estilos que entran en conflicto entre sí.   
Por ejemplo, su elemento **h1** no puede ser verde y rosa al mismo tiempo.
Veamos qué sucede cuando creamos una clase que hace que el texto sea rosa y luego lo aplicamos a un elemento. ¿Nuestra clase anulará el color del elemento del cuerpo: verde; Propiedad CSS?

### Anular estilos en CSS subsiguientes
¡Nuestra clase "texto rosa" anuló la declaración CSS de nuestro elemento del cuerpo!

Acabamos de demostrar que nuestras clases anularán el CSS del elemento del cuerpo. Entonces, la siguiente pregunta lógica es, ¿qué podemos hacer para anular nuestra clase de texto rosa?   
Cree una clase CSS adicional llamada texto azul que le dé a un elemento el color azul. Asegúrese de que esté debajo de la declaración de clase de texto rosa.   
***Nota: No importa en qué orden se enumeran las clases en el elemento HTML.***   
**Sin embargo, el orden de las declaraciones de clase en la sección `<style>` es lo importante. La segunda declaración siempre tendrá prioridad sobre la primera. Debido a que `.blue-text` se declara en segundo lugar, anula los atributos de `.pink-text`**


### Anular declaraciones de clase por atributos de ID de estilo
Acabamos de demostrar que **los navegadores leen CSS de arriba a abajo** en el orden de su declaración. Eso significa que, en caso de conflicto, el navegador utilizará la última declaración de CSS. Tenga en cuenta que si incluso hubiéramos puesto `.blue-text` antes de `.pink-text` en las clases de nuestro elemento `h1`, ¡seguiría mirando el orden de declaración y no el orden de su uso!   
*Pero aún no hemos terminado. Hay otras formas en las que puede anular CSS. ¿Recuerdas los atributos de **id**?*   
Anulemos sus clases de `pink-text` y `blue-text`, y hagamos que su elemento `h1` sea naranja, dándole al elemento `h1` un `id` y luego estilizando ese `id`.   
```css
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }s
  #orange-text{
    color:orange;
  }
</style>
```
```html
<h1 class="pink-text blue-text" id="orange-text">Hello World!</h1>
```
Nota: No importa si declara este CSS por encima o por debajo de la clase de texto rosa, ya que el atributo id siempre tendrá prioridad.

### Anular declaraciones de clase con estilos en línea
Así que hemos demostrado que las declaraciones de identificación anulan las declaraciones de clase, independientemente de dónde se declaren en su elemento de estilo CSS.     
Hay otras formas en las que puede anular CSS. ¿Recuerdas los estilos en línea?
Utilice un estilo en línea para intentar que nuestro elemento h1 sea blanco. Recuerde, los estilos de línea se ven así:   
```css
<h1 style="color: green;">
```
### Anule todos los demás estilos utilizando Important
¡Hurra! Acabamos de demostrar que los estilos en línea anularán todas las declaraciones CSS en su elemento de estilo.

Pero espera. Hay una última forma de anular CSS. Este es el método más poderoso de todos. Pero antes de hacerlo, hablemos sobre por qué querría anular CSS.

En muchas situaciones, utilizará bibliotecas CSS. Estos pueden anular accidentalmente su propio CSS. Entonces, cuando sea absolutamente necesario estar seguro de que un elemento tiene CSS específico, puede usar! Important

Regresemos hasta nuestra declaración de clase de texto rosa. Recuerde que nuestra clase de texto rosa fue anulada por declaraciones de clases posteriores, declaraciones de identificación y estilos en línea.
Un ejemplo de cómo hacer esto es:
```css
color: red !important;
```
### Utilice código hexadecimal para colores específicos
¿Sabías que hay otras formas de representar colores en CSS? Una de estas formas se llama código hexadecimal, o código hex para abreviar.   
Usualmente usamos decimales, o números de base 10, que usan los símbolos del 0 al 9 para cada dígito. Los hexadecimales (o hex) son números de base 16. Esto significa que utiliza dieciséis símbolos distintos. Como decimales, los símbolos 0-9 representan los valores de cero a nueve. Entonces A, B, C, D, E, F representan los valores diez a quince. En total, 0 a F pueden representar un dígito en hexadecimal, lo que nos da un total de 16 valores posibles. Puede encontrar más información sobre [números hexadecimales aquí](https://en.wikipedia.org/wiki/Hexadecimal).  
En CSS, podemos usar 6 dígitos hexadecimales para representar colores, dos para cada componente rojo (R), verde (G) y azul (B). Por ejemplo, # 000000 es negro y también es el valor más bajo posible. Puede encontrar más información sobre el sistema de [color RGB aquí](https://en.wikipedia.org/wiki/RGB_color_model).
```css
body {
  color: #000000;
}
```
### Utilice código hexadecimal para mezclar colores
Para revisar, los códigos hexadecimales **usan 6 dígitos hexadecimales** para representar colores, dos para cada componente rojo (R), verde (G) y azul (B).
De estos tres colores puros (rojo, verde y azul), podemos variar las cantidades de cada uno para crear más de 16 millones de otros colores.   
Por ejemplo, el naranja es rojo puro, mezclado con algo de verde y no azul. En código hexadecimal, esto se traduce en **#FFA500**.
El dígito *0 es el número más bajo en código hexadecimal* y representa una ausencia total de color.
El dígito *F es el número más alto en código hexadecimal* y representa el brillo máximo posible.

### Usar código hexadecimal abreviado
Mucha gente se siente abrumada por las posibilidades de más de 16 millones de colores. Y es difícil recordar el código hexadecimal. Afortunadamente, puedes acortarlo.   
Por ejemplo, el código hexadecimal de rojo **#FF0000** se puede acortar a **#F00**. Esta forma abreviada da un dígito para el *rojo*, un dígito para el *verde* y un dígito para el *azul*.    
Esto reduce el número total de colores posibles a alrededor de 4000. Pero los navegadores interpretarán # FF0000 y # F00 exactamente del mismo color.  

### Utilice valores RGB para colorear elementos
Otra forma de representar colores en CSS es mediante el uso de valores RGB.    
El valor RGB para el negro se ve así:  
```css
rgb(0, 0, 0)
```
El valor RGB para el blanco se ve así:   
```css
rgb(255, 255, 255)
```
En lugar de usar seis dígitos hexadecimales como lo hace con el código hexadecimal, con RGB especifica el brillo de cada color con un número entre 0 y 255.
Si hace los cálculos, los dos dígitos de un color equivalen a 16 por 16, lo que nos da 256 valores totales. Entonces, RGB, que comienza a contar desde cero, tiene exactamente el mismo número de valores posibles que el código hexadecimal.

Aquí tienes un ejemplo de cómo cambiarías el fondo del cuerpo a naranja usando su código RGB.   
```css
body {
  background-color: rgb(255, 165, 0);
}
```

### Utilice RGB para mezclar colores
Al igual que con el código hexadecimal, puede mezclar colores en RGB utilizando combinaciones de diferentes valores.

Reemplace los códigos hexadecimales en nuestro elemento de estilo con sus valores RGB correctos.    
- Color	RGB
  - **Blue**	  `rgb(0, 0, 255)`
  - **Red**	    `rgb(255, 0, 0)`
  - **Orchid**	`rgb(218, 112, 214)`
  - **Sienna**	`rgb(160, 82, 45)`

### Use variables CSS para cambiar varios elementos a la vez
Las variables CSS son una forma poderosa de cambiar muchas propiedades de estilo CSS a la vez cambiando solo un valor.

Siga las instrucciones a continuación para ver cómo cambiar solo tres valores puede cambiar el estilo de muchos elementos.   

En la clase `penguin`, cambie el valor de `black` a `gris`, el valor de `gray` a `white` y el valor de `yellow` a `orange`. 

```css
<style>
  .penguin {

    /* Only change code below this line */
    --penguin-skin: black;
    --penguin-belly: gray;
    --penguin-beak: yellow;
    /* Only change code above this line */

    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background:#c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
```
```html
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```

### Crea una variable CSS personalizada
Para crear una variable CSS, solo necesita darle un nombre con dos guiones delante y asignarle un valor como este: 
```css
--penguin-skin: gray;
```
Esto creará una variable llamada `--penguin-skin` y le asignará el valor de gris. Ahora puede usar esa variable en otra parte de su CSS para cambiar el valor de otros elementos a gris.

### Utilice una variable CSS personalizada
Después de crear su variable, puede asignar su valor a otras propiedades CSS haciendo referencia al nombre que le dio.
```css
background: var(--penguin-skin);
```
Esto cambiará el fondo de cualquier elemento al que esté apuntando a gris porque ese es el valor de la variable --penguin-skin. Tenga en cuenta que los estilos no se aplicarán a menos que los nombres de las variables coincidan exactamente.

### Adjuntar un valor de respaldo a una variable CSS
Cuando usa su variable como un valor de propiedad CSS, puede adjuntar un valor de respaldo al que su navegador volverá si la variable dada no es válida.   
Nota: este respaldo no se utiliza para aumentar la compatibilidad del navegador y no funcionará en los navegadores IE. Más bien, se utiliza para que el navegador tenga un color para mostrar si no puede encontrar su variable.  
Así es como lo haces:
```css
background: var(--penguin-skin, black);
```
Esto establecerá el fondo en negro si su variable no está configurada. Tenga en cuenta que esto puede resultar útil para depurar.

### Mejorar la compatibilidad con las alternativas de navegador
Cuando trabaje con CSS, probablemente se encontrará con problemas de compatibilidad del navegador en algún momento. Por eso es importante proporcionar alternativas de navegador para evitar problemas potenciales.

Cuando su navegador analiza el CSS de una página web, ignora las propiedades que no reconoce o no admite. Por ejemplo, si usa una variable CSS para asignar un color de fondo en un sitio, Internet Explorer ignorará el color de fondo porque no admite variables CSS. En ese caso, el navegador utilizará cualquier valor que tenga para esa propiedad. Si no puede encontrar ningún otro valor establecido para esa propiedad, volverá al valor predeterminado, que normalmente no es el ideal. Esto significa que si desea proporcionar un respaldo del navegador, es tan fácil como proporcionar otro valor más ampliamente admitido inmediatamente antes de su declaración. De esa manera, un navegador más antiguo tendrá algo a lo que recurrir, mientras que un navegador más nuevo simplemente interpretará cualquier declaración que venga más adelante en la cascada.
```css
.red-box {
    background:red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
```

### Heredar variables CSS (Inherit)
Cuando crea una variable, está disponible para su uso dentro del selector en el que la crea. También está disponible en cualquiera de los descendientes de ese selector. Esto sucede porque las variables CSS se heredan, al igual que las propiedades ordinarias.

Para hacer uso de la herencia, las variables CSS a menudo se definen en el elemento raíz.

`:root `es un selector de pseudo-clase que coincide con el elemento raíz del documento, generalmente el elemento html. Al crear sus variables en `:root,` estarán disponibles globalmente y se puede acceder a ellas desde cualquier otro selector en la hoja de estilo.

### Cambiar una variable para un área específica
Cuando crea sus variables en: root, establecerán el valor de esa variable para toda la página.

Luego puede sobrescribir estas variables configurándolas nuevamente dentro de un elemento específico.

### Utilice una media query para cambiar una variable
Las variables CSS pueden simplificar la forma en que utiliza las media query.

Por ejemplo, cuando su pantalla es más pequeña o más grande que el punto de interrupción de la media query, puede cambiar el valor de una variable y aplicará su estilo donde sea que se use.

En el selector: root de la consulta de medios, cámbielo para que --penguin-size se redefina y se le dé un valor de 200px. Además, redefine --penguin-skin y dale un valor de negro. Luego cambie el tamaño de la vista previa para ver este cambio en acción.


```css
  @media (max-width: 350px) {
    :root {
      /* Only change code below this line */
--penguin-size:200px;
--penguin-skin: black;
      /* Only change code above this line */
    }
  }
```
