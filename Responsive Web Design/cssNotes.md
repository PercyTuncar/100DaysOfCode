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