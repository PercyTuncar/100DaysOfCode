## Basic HTML and HTML5 

### Comentarios en HTML

**Recuerde que:** para comenzar un comentario, debe usar
 <!-y para finalizar un comentario, debe usar **->**
Aquí deberá finalizar el comentario antes de que comience su elemento h2.

### Introduction to HTML5 Elements
HTML5 introduce etiquetas HTML más descriptivas.
Estos incluyen **main**, **header**, **footer**, **nav**, **video**, **article**, **section** y otros.
Estas etiquetas dan una estructura descriptiva a su HTML, hacen que su HTML 
sea más fácil de leer y ayudan con la optimización de motores de búsqueda (SEO) y 
la accesibilidad. La etiqueta HTML5 principal ayuda a los motores de búsqueda y a 
otros desarrolladores a encontrar el contenido principal de su página.
Ejemplo de uso, un elemento principal con dos elementos secundarios anidados en su interior.  
**Link del trabajo:** [Responsive Web Design](https://github.com/PercyTuncar/100DaysOfCode)

### Agregar imágenes a su sitio web
Puede agregar imágenes a su sitio web usando el elemento img y apuntar a la URL de una imagen específica usando el atributo src.
Un ejemplo de esto sería:
```html
<img src="https://www.your-image-source.com/your-image.jpg">
```
Tenga en cuenta que los elementos **img** se cierran automáticamente.
Todos los elementos de **img** deben tener un atributo **alt**. El texto dentro de un atributo **alt** se utiliza para que los lectores de pantalla mejoren la accesibilidad y se muestra si la imagen no se carga.

**Nota:** si la imagen es puramente decorativa, se recomienda utilizar un atributo **alt** vacío. Idealmente, el atributo **alt** no debería contener caracteres especiales a menos que sea necesario.

Agreguemos un atributo **alt** a nuestro ejemplo de img anterior:
```html
<img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up.">
```
### Enlace a páginas externas con elementos de anclaje
Puede utilizar elementos ``a`` (ancla) para vincular a contenido fuera de su página web.

Los elementos ``a`` necesitan una dirección web de destino llamada atributo ``href``. También necesitan texto de anclaje. He aquí un ejemplo:
```html
<a href="https:/tuncar.us">this links to tuncar.us</a>
```
Luego, su navegador mostrará el texto "estos enlaces a tuncar.us" como un enlace en el que puede hacer clic. Y ese enlace lo llevará a la dirección web https://www.tuncar.us

### Enlace a secciones internas de una página con elementos de ancla
Los elementos ``a`` (ancla) también se pueden usar para crear enlaces internos para saltar a diferentes secciones dentro de una página web.

Para crear un enlace interno, asigna el atributo ``href`` de un enlace a un símbolo de almohadilla ``#`` más el valor del atributo `id` para el elemento al que desea vincular internamente, generalmente más abajo en la página. Luego, debe agregar el mismo atributo de `id` al elemento al que se está vinculando. Un `id` es un atributo que describe de forma única un elemento.

A continuación se muestra un ejemplo de un enlace de ancla interno y su elemento de destino:
```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```
Cuando los usuarios hagan clic en el enlace Contactos, serán llevados a la sección de la página web con el elemento de encabezado Contactos.

### Anidar un elemento de anclaje dentro de un párrafo
Puede anidar enlaces dentro de otros elementos de texto.
```html
<p>
  Here's a <a target="_blank" href="http://tuncar.us"> link to tuncar.us</a> for you to follow.
</p>
```

Analicemos el ejemplo: el texto normal está envuelto en el elemento ``p``: 
``<p> Here's a ... for you to follow. </p``
El siguiente es el elemento de anclaje `<a>` (que requiere una etiqueta de cierre ``</a>``):   
 ```<a> ... </a> targe``` es un atributo de etiqueta de ancla que especifica dónde abrir el enlace y el valor `"_blank"` especifica que se abra el enlace en una nueva pestaña. `href` es un atributo de etiqueta de anclaje que contiene la dirección URL del enlace:

 `<a href="http://tuncar.us"> ... </a>`


El texto, **"enlace a tuncar.us"**, dentro del elemento llamado texto de anclaje, mostrará un enlace para hacer clic:
`<a href=" ... ">` enlace a tuncar.us `</a> `El resultado final del ejemplo se verá así:  
**Aquí hay un enlace a tuncar.us para que lo sigas**

### Crear enlaces muertos usando el símbolo hash
A veces, desea agregar elementos `a` en su sitio web antes de saber dónde se vincularán.  
Esto también es útil cuando está cambiando el comportamiento de un enlace usando JavaScript.   
El valor actual del atributo `href` es un enlace que apunta a "https://tuncar.us". Reemplace el valor del atributo `href` con un `#`, también conocido como símbolo de almohadilla, para crear un enlace muerto.

### Convertir una imagen en un enlace
Puede convertir elementos en enlaces anidando dentro de un elemento `a`.
Anida su imagen dentro de un elemento `a`. Aquí hay un ejemplo: en un elemento `a`.
```html
<a href="#"><img src="https://bit.ly/fcc-running-cats" alt="Three kittens running towards the camera."></a>
```
Recuerde usar `#` como la propiedad `href` de un elemento para convertirlo en un enlace muerto.


### Crear una lista desordenada con viñetas
`HTML` tiene un elemento especial para crear listas desordenadas o listas de estilo con viñetas.

Las listas desordenadas comienzan con un elemento `<ul>` de apertura, seguido de cualquier número de elementos `<li>`. Finalmente, las listas desordenadas se cierran con un `</ul>`
For example:
```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```
Debería crear una lista de estilo de viñetas de "leche" y "queso".


### Crear una lista ordenada
`HTML` tiene otro elemento especial para crear listas ordenadas o listas numeradas.

Las listas ordenadas comienzan con un elemento `<ol>` de apertura, seguido de cualquier número de elementos `<li>`. Finalmente, las listas ordenadas se cierran con la etiqueta `</ol>`.

Por ejemplo:
```html
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```

### Crear un campo de texto
Ahora creemos un formulario web.
Los elementos `input` son una forma conveniente de obtener información de su usuario.
Puede crear una entrada de texto como esta:
```html
<input type="text">
```
Tenga en cuenta que los elementos de entrada se cierran automáticamente  (self-closing)


### Agregar un placeholder a un campo de texto
El `placeholder` es lo que se muestra en el `input` antes de que el usuario haya ingresado algo.
```html
<input type="text" placeholder="this is placeholder text">
```
**Nota:** Recuerde que los elementos de entrada se cierran automáticamente.


### Crear un elemento de formulario
Puede crear formularios web que envíen datos a un servidor utilizando únicamente HTML puro. Puede hacer esto especificando una acción en su elemento `form`.  
For example:
```html
<form action="/url-where-you-want-to-submit-form-data"></form>
```
### Agregar un botón Enviar a un formulario
Agreguemos un botón de envío a su formulario. Al hacer clic en este botón, se enviarán los datos de su formulario a la URL que especificó con el atributo de acción de su formulario.  
Aquí hay un ejemplo de botón de envío:
```html
<button type="submit">this button submits the form</button>
```

### Use HTML5 para requerir un campo
Puede solicitar campos de formulario específicos para que su usuario no pueda enviar su formulario hasta que los haya completado.

Por ejemplo, si desea que un campo de entrada de texto sea obligatorio, simplemente puede agregar el atributo `require` dentro de tu elemento `input`,  así:
```html
<input type="text" required>
```

###  Crear un conjunto de botones de opción
Puede usar  radio buttons  para las preguntas en las que desea que el usuario solo le dé una respuesta entre múltiples opciones.

Los botones de radio son un tipo de `input`

Cada uno de sus radio buttons se puede anidar dentro de un elemento `label`. Al envolver un elemento de entrada dentro de un elemento `label`, automáticamente asociará  el radio buttons con el elemento de etiqueta que lo rodea.   

Todos los botones de opción relacionados deben tener el mismo atributo `name` para crear un grupo de botones de opción. Al crear un grupo de radio button, al seleccionar cualquier botón del radio buttonse anulará automáticamente la selección de los otros botones dentro del mismo grupo, lo que garantiza que el usuario solo proporcione una respuesta.

A continuación, se muestra un ejemplo de un botón de opción:
```html
<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
```
Se considera una buena práctica establecer un atributo `for` en el elemento `label`, con un valor que coincida con el valor del atributo `id` del elemento `label`. Esto permite que las tecnologías de asistencia creen una relación vinculada entre la etiqueta y el elemento de entrada hijo. Por ejemplo:
```html
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

### Crear un conjunto de casillas de verificación (Checkboxes)
Los formularios suelen utilizar casillas de verificación para las preguntas que pueden tener más de una respuesta.   
Los `heckboxes` son de tipo `input`.

Cada una de sus casillas de verificación se puede anidar dentro de su propio `label` 

Al envolver un `input` dentro de un elemento `label`, automáticamente asociará la entrada de la casilla de verificación con el elemento `label` que lo rodea.

Todas las `Checkbox` relacionadas deben tener el mismo atributo `name`.

Se considera una buena práctica definir explícitamente la relación entre un `Checkbox` y su `label` correspondiente, estableciendo el atributo `for` en el elemento `label` para que coincida con el atributo `id` del input asociado.
Por ejemplo:
```html
<label for="loving">
  <input id="loving" type="checkbox" name="personality"> Loving
</label>
```

### Utilice el atributo de valor con botones de opción y casillas de verificación
Cuando se envía un formulario, los datos se envían al servidor e incluyen entradas para las opciones seleccionadas. Los inputs de tipo `radio` y `checkbox` informan sus valores a partir del atributo de `value`.

Por ejemplo:
```html
<label for="indoor"> 
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
<label for="outdoor"> 
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor 
</label>
```
Aquí tienes dos entradas de `radio`. Cuando el usuario envía el formulario con la opción `indoor` seleccionada, los datos del formulario incluirán la línea: indoor-outdoor = indoor. Esto es de los atributos de `name` y `value` del input "indoor".

Si omite el atributo de `value`, los datos del formulario enviado utilizan el valor predeterminado, que está `on`. En este escenario, si el usuario hace clic en la opción "interior" y envía el formulario, los datos del formulario resultante serían `indoor-outdoor=on`, lo cual no es útil. Por lo tanto, el atributo de `value` debe establecerse en algo para identificar la opción.

### Marque los botones de opción y las casillas de verificación de forma predeterminada
Puede establecer un checkbox o un radio button para que se marque de forma predeterminada utilizando el atributo checked.

Para hacer esto, simplemente agregue la palabra `"checked"` al interior de un input. Por ejemplo:
```html
<input type="radio" name="test-name" checked>
``` 

### Anidar muchos elementos dentro de un solo elemento div
El elemento `div`, también conocido como elemento de división, es un contenedor de uso general para otros elementos.
El elemento `div` es probablemente el elemento HTML más utilizado de todos.
Al igual que cualquier otro elemento que no se cierre automáticamente, puede abrir un elemento div con `<div>` y cerrarlo en otra línea con `</div>`.

### Declarar un Doctype en un documento HTML
Los desafíos hasta ahora han cubierto elementos HTML específicos y sus usos. Sin embargo, hay algunos elementos que dan una estructura general a su página y deben incluirse en cada documento HTML.
En la parte superior de su documento, debe indicarle al navegador qué versión de HTML está usando su página. HTML es un lenguaje en evolución y se actualiza periódicamente. La mayoría de los principales navegadores admiten la última especificación, que es HTML5. Sin embargo, las páginas web más antiguas pueden utilizar versiones anteriores del lenguaje.

Dile al navegador esta información agregando la etiqueta `<! DOCTYPE ...>` en la primera línea, donde la parte `...` es la versión de HTML. Para HTML5, usa `<! DOCTYPE html>`.
Los `!` y `DOCTYPE` en mayúsculas es importante, especialmente para navegadores más antiguos. El `html` no distingue entre mayúsculas y minúsculas.    
A continuación, se muestra un ejemplo de la estructura de la página:   
```html
<!DOCTYPE html>
<html>
  <!-- Your HTML code goes here -->
</html>
``` 
### Definir el encabezado y el cuerpo de un documento HTML
Puede agregar otro nivel de organización en su documento HTML dentro de las etiquetas html con los elementos head y body. Cualquier marca con información sobre su página iría en la etiqueta head. Luego, cualquier marcado con el contenido de la página (lo que se muestra para un usuario) iría a la etiqueta del cuerpo.

Los elementos de metadatos, como el link, meta, title y el style, suelen ir dentro del elemento head.

A continuación, se muestra un ejemplo del diseño de una página:
```html
<!DOCTYPE html>
<html>
  <head>
    <!-- metadata elements -->
  </head>
  <body>
    <!-- page contents -->
  </body>
</html>
```
