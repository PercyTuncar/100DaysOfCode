# Accesibilidad aplicada
"Accesibilidad" generalmente significa tener contenido web y una interfaz de usuario que pueda ser entendida, navegada e interactuada por una amplia audiencia. Esto incluye a personas con discapacidades visuales, auditivas, de movilidad o cognitivas.   

Los sitios web deben ser abiertos y accesibles para todos, independientemente de las capacidades o recursos del usuario. Algunos usuarios confían en la tecnología de asistencia, como un lector de pantalla o un software de reconocimiento de voz. Es posible que otros usuarios puedan navegar a través de un sitio solo usando un teclado. Tener en cuenta las necesidades de varios usuarios al desarrollar su proyecto puede contribuir en gran medida a crear una web abierta.

Aquí hay tres conceptos generales que esta sección explorará a lo largo de los siguientes desafíos:

 - tener un código bien organizado que utilice el marcado apropiado
 - Asegurar que existan alternativas de texto para contenido visual y no textual.
- crear una página de fácil navegación que sea compatible con el teclado 
 
Tener contenido web accesible es un desafío continuo. Un gran recurso para sus proyectos en el futuro son las Pautas de accesibilidad al contenido web (WCAG) del W3 Consortium. Establecen el estándar internacional de accesibilidad y proporcionan una serie de criterios que puede utilizar para verificar su trabajo.   

### Agregue una alternativa de texto a las imágenes para la accesibilidad para personas con discapacidad visual    
Es probable que hayas visto un atributo `alt` en una etiqueta img en otros desafíos. El texto alternativo describe el contenido de la imagen y proporciona una alternativa de texto. Esto ayuda en los casos en que la imagen no se carga o el usuario no puede verla. Los motores de búsqueda también lo utilizan para comprender qué contiene una imagen e incluirla en los resultados de búsqueda. He aquí un ejemplo: 
```css
<img src="importantLogo.jpeg" alt="Company logo">
```
Las personas con discapacidad visual confían en los lectores de pantalla para convertir el contenido web en una interfaz de audio. No obtendrán información si solo se presenta visualmente. Para las imágenes, los lectores de pantalla pueden acceder al atributo `alt` y leer su contenido para entregar información clave.

Un buen texto alternativo proporciona al lector una breve descripción de la imagen. Siempre debes incluir un atributo alt en tu imagen. Según la especificación HTML5, esto ahora **se considera obligatorio**.

### Sepa cuándo el texto alternativo debe dejarse en blanco   
En el último desafío, aprendiste que incluir un atributo alt al usar etiquetas img es obligatorio. Sin embargo, a veces las imágenes se agrupan con una leyenda que ya las describe, o se usan solo como decoración. En estos casos, el texto alternativo puede parecer redundante o innecesario.   
En situaciones en las que una imagen ya se explica con contenido de texto, o no agrega significado a una página, el img aún necesita un atributo alt, pero se puede establecer en una cadena vacía. He aquí un ejemplo:  
 ```css
 <img src="visualDecoration.jpeg" alt="">
 ```
 Las imágenes de fondo también suelen incluirse bajo la etiqueta "decorativa". Sin embargo, normalmente se aplican con reglas CSS y, por lo tanto, no forman parte del proceso de los lectores de pantalla de marcado.   
 **Nota**: Para las imágenes con un título, es posible que desee incluir texto alternativo, ya que ayuda a los motores de búsqueda a catalogar el contenido de la imagen.  

### Utilice encabezados para mostrar relaciones jerárquicas de contenido
Los encabezados (elementos h1 a h6) son etiquetas de caballo de batalla que ayudan a proporcionar estructura y etiquetado a su contenido. Los lectores de pantalla pueden configurarse para leer solo los encabezados de una página para que el usuario obtenga un resumen. Esto significa que es importante que las etiquetas de encabezado en su marcado tengan un significado semántico y se relacionen entre sí, no se elijan simplemente por sus valores de tamaño.   

El significado semántico significa que la etiqueta que usa alrededor del contenido indica el tipo de información que contiene.  

Si estuviera escribiendo un documento con una introducción, un cuerpo y una conclusión, no tendría mucho sentido poner la conclusión como una subsección del cuerpo en su esquema. Debería ser su propia sección. De manera similar, las etiquetas de encabezado en una página web deben ir en orden e indicar las relaciones jerárquicas de su contenido.   

Los encabezados con rango igual (o superior) comienzan nuevas secciones implícitas, los encabezados con rango más bajo comienzan subsecciones del anterior.   

Como ejemplo, una página con un elemento h2 seguido de varias subsecciones etiquetadas con etiquetas h4 confundiría al usuario de un lector de pantalla. Con seis opciones, es tentador usar una etiqueta porque se ve mejor en un navegador, pero puede usar CSS para editar el tamaño relativo.   

Un último punto, cada página debe tener siempre un (y solo uno) elemento h1, que es el tema principal de su contenido. Los motores de búsqueda utilizan este y otros títulos en parte para comprender el tema de la página.

### Ir directamente al contenido usando el elemento main
HTML5 introdujo una serie de elementos nuevos que brindan a los desarrolladores más opciones al tiempo que incorporan funciones de accesibilidad. Estas etiquetas incluyen main, header, footer, nav, article, y section, entre otras.   
De forma predeterminada, un navegador muestra estos elementos de manera similar al humilde `div`. Sin embargo, usarlos donde sea apropiado le da un significado adicional en su marcado. El nombre de la etiqueta por sí solo puede indicar el tipo de información que contiene, lo que agrega significado semántico a ese contenido. Las tecnologías de asistencia pueden acceder a esta información para proporcionar un mejor resumen de la página o opciones de navegación a sus usuarios.    

El elemento `main` se usa para envolver (lo adivinó) el contenido principal, y **solo debe haber uno por página.** Está destinado a rodear la información relacionada con el tema central de su página. No está destinado a incluir elementos que se repiten en las páginas, como enlaces de navegación o banners.    

La etiqueta `main` también tiene una característica de hito incorporada que la tecnología de asistencia puede usar para navegar rápidamente al contenido principal. Si alguna vez ha visto un enlace "Ir al contenido principal" en la parte superior de una página, el uso de una etiqueta `main` proporciona automáticamente esa funcionalidad a los dispositivos de asistencia.   


### Envolver contenido en el elemento del artículo (Wrap Content)
article es otro de los nuevos elementos HTML5 que agrega significado semántico a su marcado. artículo es un elemento de sección y se utiliza para envolver contenido contenido autónomo. La etiqueta funciona bien con entradas de blog, publicaciones en foros o artículos de noticias.

Determinar si el contenido puede ser independiente suele ser una cuestión de criterio, pero hay un par de pruebas sencillas que puede utilizar. Pregúntese si eliminara todo el contexto circundante, ¿ese contenido aún tendría sentido? De manera similar, para el texto, ¿se mantendría el contenido si estuviera en una fuente RSS?   
Recuerde que las personas que utilizan tecnologías de asistencia se basan en marcas organizadas y semánticamente significativas para comprender mejor su trabajo.    
Nota sobre la sección y div
El elemento de sección también es nuevo en HTML5 y tiene un significado semántico ligeramente diferente al de artículo. Un artículo es para contenido independiente y una sección es para agrupar contenido relacionado temáticamente. Se pueden usar entre sí, según sea necesario. Por ejemplo, si un libro es el artículo, entonces cada capítulo es una sección. Cuando no haya relación entre grupos de contenido, utilice un div.   
```html
<div> - groups content
<section> - groups related content
<article> - groups independent, self-contained content
```
### Facilite la navegación del lector de pantalla con el encabezado Landmark

El siguiente elemento HTML5 que agrega significado semántico y mejora la accesibilidad es la etiqueta header. Se utiliza para envolver información introductoria o enlaces de navegación para su etiqueta main y funciona bien con el contenido que se repite en la parte superior de varias páginas.

header comparte la característica de hito incorporada que vio con main, lo que permite que las tecnologías de asistencia naveguen rápidamente a ese contenido.    

**Nota**: El `header` está diseñado para usarse en la etiqueta del body de su documento HTML. Esto es diferente al elemento `head`, que contiene el título de la página, metainformación, etc.  

### Facilite la navegación del lector de pantalla con el navegador Landmar
El elemento **nav** es otro elemento HTML5 con la función de referencia incorporada para facilitar la navegación del lector de pantalla. Esta etiqueta está destinada a envolver los principales enlaces de navegación de su página.

Si hay enlaces de sitios repetidos en la parte inferior de la página, tampoco es necesario marcar aquellos con una etiqueta `nav`. Es suficiente usar `footer` (cubierto en el próximo desafío).  

### Facilite la navegación del lector de pantalla con el pie de página Landmark
Al igual que el `header` y la `nav`, el elemento `footer` tiene una función de punto de referencia incorporada que permite que los dispositivos de asistencia naveguen rápidamente hacia él. Se usa principalmente para contener información de derechos de autor o enlaces a documentos relacionados que generalmente se encuentran en la parte inferior de una página.

### Mejore la accesibilidad del contenido de audio con el elemento de audio
El elemento de audio de HTML5 da un significado semántico cuando envuelve el sonido o el contenido de la transmisión de audio en su marcado. El contenido de audio también necesita una alternativa de texto para que sea accesible a las personas sordas o con problemas de audición. Esto se puede hacer con un texto cercano en la página o un enlace a una transcripción.

La etiqueta de audio admite el atributo de controles. Esto muestra la reproducción, pausa y otros controles predeterminados del navegador, y admite la funcionalidad del teclado. Este es un atributo booleano, lo que significa que no necesita un valor, su presencia en la etiqueta activa la configuración.

He aquí un ejemplo: 
```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg" />
  <source src="audio/meow.ogg" type="audio/ogg" />
</audio>
```
Nota: El contenido multimedia suele tener componentes tanto visuales como auditivos. Necesita subtítulos sincronizados y una transcripción para que los usuarios con discapacidades visuales y / o auditivas puedan acceder a él. Generalmente, un desarrollador web no es responsable de crear los subtítulos o la transcripción, pero necesita saber para incluirlos.   


### Mejore la accesibilidad del gráfico con el elemento figure
HTML5 introdujo el elemento figure, junto con el figcaption relacionado. Usados juntos, estos elementos envuelven una representación visual (como una imagen, diagrama o gráfico) junto con su título. Esto da un doble impulso a la accesibilidad al agrupar semánticamente el contenido relacionado y al proporcionar una alternativa de texto que explica la figura.   

Para visualizaciones de datos como gráficos, la leyenda se puede utilizar para anotar brevemente las tendencias o conclusiones para los usuarios con discapacidad visual. Otro desafío cubre cómo mover una versión de tabla de los datos del gráfico fuera de la pantalla (usando CSS) para los usuarios de lectores de pantalla.

Aquí hay un ejemplo: tenga en cuenta que la opción figcaption va dentro de las etiquetas de la figure y se puede combinar con otros elementos:
```html
<figure>
  <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick">
  <br>
  <figcaption>
    Master Camper Cat demonstrates proper form of a roundhouse kick.
  </figcaption>
</figure>
```
### Mejore la accesibilidad del campo de formulario con el elemento de etiqueta
La mejora de la accesibilidad con el marcado HTML semántico se aplica al uso tanto de los nombres de etiqueta apropiados como de los atributos. Los siguientes desafíos cubren algunos escenarios importantes utilizando atributos en formularios.    

La etiqueta `label` envuelve el texto de un elemento de control de formulario específico, generalmente el nombre o la etiqueta de una opción. Esto vincula el significado al elemento y hace que la forma sea más legible. El atributo `for` en una etiqueta `label` asocia explícitamente esa etiqueta con el control de formulario y lo utilizan los lectores de pantalla.

Aprendió sobre los botones de opción y sus etiquetas en una lección de la sección HTML básico. En esa lección, envolvimos el elemento de entrada del botón de radio dentro de un elemento label junto con el texto de la etiqueta para que se pueda hacer clic en el texto. Otra forma de lograr esto es utilizando el atributo `for` como se explica en esta lección.

El valor del atributo `for` debe ser el mismo que el valor del atributo id del control de formulario. He aquí un ejemplo:
```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```
### Envuelva los botones de radio en un elemento de conjunto de campo para una mejor accesibilidad
El siguiente tema del formulario cubre la accesibilidad de los botones de opción. A cada opción se le asigna una etiqueta con un atributo for que se vincula con la identificación del artículo correspondiente, como se cubrió en el último desafío. Dado que los botones de opción a menudo vienen en un grupo donde el usuario debe elegir uno, hay una manera de mostrar semánticamente que las opciones son parte de un conjunto.

La etiqueta `fieldset` rodea toda la agrupación de botones de opción para lograr esto. A menudo, utiliza una etiqueta de leyenda para proporcionar una descripción de la agrupación, que los lectores de pantalla leen para cada opción en el elemento `fieldset`.

El envoltorio del conjunto de campos y la etiqueta de leyenda no son necesarios cuando las opciones se explican por sí mismas, como una selección de género. Es suficiente usar una etiqueta con el atributo `for` para cada botón de opción.

He aquí un ejemplo:
```html
<form>
  <fieldset>
    <legend>Choose one of these three items:</legend>
    <input id="one" type="radio" name="items" value="one">
    <label for="one">Choice One</label><br>

    <input id="two" type="radio" name="items" value="two">
    <label for="two">Choice Two</label><br>

    <input id="three" type="radio" name="items" value="three">
    <label for="three">Choice Three</label>
  </fieldset>
</form>
```

### Agregar un selector de fecha accesible
Los formularios suelen incluir el campo de entrada, que se puede utilizar para crear varios controles de formulario diferentes. El atributo de tipo de este elemento indica qué tipo de entrada se creará.

Es posible que haya notado el texto y los tipos de entrada de envío en desafíos anteriores, y HTML5 introdujo una opción para especificar un campo de fecha. Dependiendo de la compatibilidad del navegador, aparece un selector de fecha en el campo de entrada cuando está enfocado, lo que facilita el llenado de un formulario para todos los usuarios.

Para los navegadores más antiguos, el tipo será texto por defecto, por lo que ayuda a mostrar a los usuarios el formato de fecha esperado en la etiqueta o como texto de marcador de posición por si acaso.

He aquí un ejemplo:
```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

### Estandarice las horas con el atributo de fecha y hora de HTML5
Continuando con el tema de la fecha, HTML5 también introdujo el elemento de hora junto con un atributo de fecha y hora para estandarizar las horas. Este es un elemento en línea que puede ajustar una fecha u hora en una página. El atributo datetime tiene un formato válido de esa fecha. Este es el valor al que acceden los dispositivos de asistencia. Ayuda a evitar confusiones al indicar una versión estandarizada de un tiempo, incluso si está escrito de manera informal o coloquial en el texto.

He aquí un ejemplo:
```html
<p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>
```

### Haga que los elementos solo sean visibles para un lector de pantalla mediante CSS personalizado
¿Ha notado que todos los desafíos de accesibilidad aplicados hasta ahora no han utilizado CSS? Esto es para mostrar la importancia de un esquema de documento lógico y usar etiquetas semánticamente significativas alrededor de su contenido antes de introducir el aspecto de diseño visual.

Sin embargo, la magia de CSS también puede mejorar la accesibilidad en su página cuando desea ocultar visualmente contenido destinado solo a lectores de pantalla. Esto sucede cuando la información está en formato visual (como un gráfico), pero los usuarios de lectores de pantalla necesitan una presentación alternativa (como una tabla) para acceder a los datos. CSS se utiliza para colocar los elementos exclusivos del lector de pantalla fuera del área visual de la ventana del navegador.

Aquí hay un ejemplo de las reglas CSS que logran esto:
```css
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```
Nota: Los siguientes enfoques de CSS NO harán lo mismo:
- **display: none;** o **visibility: hidden;**  oculta contenido para todos, incluidos los usuarios de lectores de pantalla
- Valores cero para tamaños de píxeles, como **width: 0px; height: 0px;** elimina ese elemento del flujo de su documento, lo que significa que los lectores de pantalla lo ignorarán  


###  Mejore la legibilidad con High Contrast Text
El bajo contraste entre los colores de primer plano y de fondo puede dificultar la lectura del texto. El contraste suficiente mejora la legibilidad de su contenido, pero ¿qué significa exactamente "suficiente"?

Las Pautas de accesibilidad al contenido web (WCAG) recomiendan al menos una relación de contraste de 4.5 a 1 para texto normal. La relación se calcula comparando los valores de luminancia relativa de dos colores. Esto varía desde 1: 1 para el mismo color, o sin contraste, hasta 21: 1 para blanco contra negro, el contraste más fuerte. ****Hay muchas herramientas de verificación de contraste disponibles en línea que calculan esta relación por usted****.


### Evite los problemas de daltonismo utilizando suficiente contraste 
El color es una gran parte del diseño visual, pero su uso presenta dos problemas de accesibilidad. Primero, el color por sí solo no debe usarse como la única forma de transmitir información importante porque los usuarios de lectores de pantalla no la verán. En segundo lugar, los colores de primer plano y de fondo necesitan un contraste suficiente para que los usuarios daltónicos puedan distinguirlos.

Los desafíos anteriores cubrían tener alternativas de texto para abordar el primer problema. El último desafío introdujo herramientas de verificación de contraste para ayudar con el segundo. La relación de contraste recomendada por WCAG de 4.5: 1 se aplica tanto para el uso de colores como para las combinaciones de escala de grises.

Los usuarios daltónicos tienen problemas para distinguir algunos colores de otros, generalmente en el tono, pero a veces también en la claridad. Puede recordar que la relación de contraste se calcula utilizando los valores de luminancia (o luminosidad) relativa de los colores de primer plano y de fondo.

En la práctica, la relación de contraste de 4.5: 1 se puede alcanzar sombreando (agregando negro) el color más oscuro y teñiendo (agregando blanco) el color más claro. Los tonos más oscuros en la rueda de colores se consideran tonos de azules, violetas, magentas y rojos, mientras que los colores más claros son naranjas, amarillos, verdes y azules verdosos.

### Evite los problemas de daltonismo eligiendo con cuidado colores que transmitan información
Hay varias formas de daltonismo. Estos pueden variar desde una sensibilidad reducida a una cierta longitud de onda de luz hasta la incapacidad de ver el color en absoluto. La forma más común es una sensibilidad reducida para detectar greens.

Por ejemplo, si dos colores verdes similares son el color de primer plano y de fondo de su contenido, es posible que un usuario daltónico no pueda distinguirlos. Los colores cercanos se pueden considerar vecinos en la rueda de colores, y esas combinaciones deben evitarse cuando se transmite información importante.

**Nota: Algunas herramientas de selección de color en línea incluyen simulaciones visuales de cómo aparecen los colores para diferentes tipos de daltonismo. Estos son excelentes recursos además de las calculadoras de verificación de contraste en línea.**

### Dar significado a los enlaces mediante el uso de texto descriptivo del enlace
Los usuarios de lectores de pantalla tienen diferentes opciones para el tipo de contenido que lee su dispositivo. Esto incluye saltar a (o sobre) elementos de referencia, saltar al contenido principal u obtener un resumen de la página de los títulos. Otra opción es escuchar solo los enlaces disponibles en una página.

Los lectores de pantalla hacen esto leyendo el texto del enlace o lo que hay entre las etiquetas de anclaje (a). Tener una lista de enlaces "haga clic aquí" o "leer más" no es útil. En su lugar, debe utilizar un texto breve pero descriptivo dentro de las etiquetas a para proporcionar más significado a estos usuarios.

### Haga que los enlaces sean navegables con claves de acceso HTML
HTML ofrece el atributo `accesskey` para especificar una tecla de método abreviado para activar o enfocar un elemento. Esto puede hacer que la navegación sea más eficiente para los usuarios que solo utilizan el teclado.

HTML5 permite usar este atributo en cualquier elemento, pero es particularmente útil cuando se usa con interactivos. Esto incluye enlaces, botones y controles de formulario.

He aquí un ejemplo:
```html
<button accesskey="b">Important Button</button>
```
### Use tabindex para agregar el enfoque del teclado a un elemento
El atributo HTML tabindex tiene tres funciones distintas relacionadas con el enfoque del teclado de un elemento. Cuando está en una etiqueta, indica que se puede enfocar el elemento. El valor (un número entero positivo, negativo o cero) determina el comportamiento.

Ciertos elementos, como los vínculos y los controles de formulario, reciben automáticamente el foco del teclado cuando un usuario pasa por una página. Está en el mismo orden en que los elementos vienen en el código fuente HTML. Esta misma funcionalidad se puede dar a otros elementos, como div, span yp, colocando un atributo tabindex = "0" en ellos. He aquí un ejemplo:
```html
<div tabindex="0">I need keyboard focus!</div>
```
Nota: Un valor de índice de tabulación negativo (normalmente -1) indica que un elemento se puede enfocar, pero el teclado no puede acceder a él. Este método se usa generalmente para enfocar el contenido de manera programática (como cuando se activa un div usado para una ventana emergente) y está más allá del alcance de estos desafíos.

### Use tabindex para especificar el orden de enfoque del teclado para varios elementos
El atributo tabindex también especifica el orden de tabulación exacto de los elementos. Esto se logra cuando el valor del atributo se establece en un número positivo de 1 o más.

Establecer un tabindex = "1" traerá el foco del teclado a ese elemento primero. Luego recorre la secuencia de valores de tabindex especificados (2, 3, etc.), antes de pasar a los elementos predeterminados y tabindex = "0".

Es importante tener en cuenta que cuando el orden de tabulación se establece de esta manera, anula el orden predeterminado (que usa la fuente HTML). Esto puede confundir a los usuarios que esperan iniciar la navegación desde la parte superior de la página. Esta técnica puede ser necesaria en algunas circunstancias, pero en cuanto a accesibilidad hay que tener cuidado antes de aplicarla.

He aquí un ejemplo:
```html
<div tabindex="1">I get keyboard focus, and I get it first!</div>

<div tabindex="2">I get keyboard focus, and I get it second!</div>
```