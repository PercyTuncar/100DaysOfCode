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
