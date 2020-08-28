# Visual Design
El diseño visual en el desarrollo web es un tema amplio. Combina tipografía, teoría del color, gráficos, animación y diseño de página para ayudar a transmitir el mensaje de un sitio. La definición de buen diseño es un tema bien discutido, con muchos libros sobre el tema.

En un nivel básico, la mayor parte del contenido web proporciona información al usuario. El diseño visual de la página puede influir en su presentación y en la experiencia del usuario. En el desarrollo web, HTML proporciona estructura y semántica al contenido de una página, y CSS controla el diseño y la apariencia de la misma.   
Esta sección cubre algunas de las herramientas básicas que utilizan los desarrolladores para crear sus propios diseños visuales.  

### Crear equilibrio visual con la propiedad  text-align   
Esta sección del plan de estudios se centra en el diseño visual aplicado. El primer grupo de desafíos se basa en el diseño de tarjeta dado para mostrar una serie de principios básicos.   
El texto suele ser una gran parte del contenido web. CSS tiene varias opciones sobre cómo alinearlo con la propiedad text-align.   

**`text-align: justify;`** Hace que todas las líneas de texto, excepto la última, coincidan con los bordes izquierdo y derecho del cuadro de línea.    
**`text-align: center;`** Centra el texto.   
**`text-align: right;`** Alinea el texto a la derecha.   
**`text-align: left;`** (el predeterminado) alinea el texto a la izquierda.   

### Ajustar el ancho de un elemento usando la propiedad width 
Puede especificar el ancho de un elemento usando la propiedad de ancho en CSS. Los valores se pueden dar en unidades de longitud relativa (como em), unidades de longitud absoluta (como px) o como un porcentaje del elemento principal que los contiene. Aquí hay un ejemplo que cambia el ancho de una imagen a 220px:
```css
img {
  width: 220px;
}
```
### Ajustar la altura de un elemento mediante la propiedad height
Puede especificar la altura de un elemento utilizando la propiedad `height`  en CSS, similar a la propiedad de ancho. Aquí hay un ejemplo que cambia la altura de una imagen a 20 px:
```css
img {
  height: 20px;
}
```
### Utilice la etiqueta strong para poner el texto en negrita
Para poner el texto en negrita, puede usar la etiqueta ``stron``. Esto se usa a menudo para llamar la atención sobre el texto y simbolizar que es importante. Con la etiqueta ``strong``, el navegador aplica el CSS de **``font-weight: bold;``** al elemento.    

### Utilice la etiqueta u para subrayar el texto
Para subrayar el texto, puede utilizar la etiqueta ``u``. Esto se usa a menudo para significar que una sección del texto es importante o algo para recordar. Con la etiqueta ``u``, el navegador aplica el CSS de **``text-decoration: underline;``** al elemento.

Nota: **Trate de evitar usar la etiqueta ``u``** cuando pueda confundirse con un enlace. Las etiquetas de ancla también tienen un formato subrayado predeterminado.

### Utilice la etiqueta ``em`` para poner texto en cursiva
Para enfatizar el texto, puede usar la etiqueta ``em``. Esto muestra el texto en cursiva, ya que el navegador aplica el CSS de **``font-style: italic;``** al elemento.

### Utilice la etiqueta ``s`` para tachar el texto
Para tachar el texto, que es cuando una línea horizontal atraviesa los caracteres, puede usar la etiqueta ``s``. Muestra que una sección de texto ya no es válida. Con la etiqueta ``s``, el navegador aplica el CSS de **``text-decoration: line-through``**; al elemento.

### Crea una línea horizontal usando el elemento ``hr``
Puede usar la etiqueta hr para agregar una línea horizontal a lo ancho de su elemento contenedor. Esto se puede utilizar para definir un cambio de tema o para separar visualmente grupos de contenido.   
Nota: En HTML, hr es una etiqueta  ``self-closing`` y, por lo tanto, no necesita una etiqueta de cierre independiente.
### Ajustar la propiedad background-color del texto
En lugar de ajustar el fondo general o el color del texto para que el primer plano sea fácilmente legible, puede agregar un color de fondo al elemento que contiene el texto que desea enfatizar. Este desafío usa rgba() en lugar de códigos hexadecimales o rgb() normal.

Los valores RGB pueden oscilar entre 0 y 255. El valor alfa puede oscilar entre 1, que es completamente opaco o de color sólido, y 0, que es completamente transparente o claro. rgba () es excelente para usar en este caso, ya que le permite ajustar la opacidad. Esto significa que no tiene que bloquear completamente el fondo.   
Usarás  ``background-color: rgba(45, 45, 45, 0.1)``para este desafío. Produce un color gris oscuro que es casi transparente dado el bajo valor de opacidad de 0,1.   

### Ajustar el tamaño de un Header frente a una etiqueta de párrafo.
El tamaño de fuente de las etiquetas de encabezado (h1 a h6) generalmente debe ser mayor que el tamaño de fuente de las etiquetas de párrafo. Esto hace que sea más fácil para el usuario comprender visualmente el diseño y el nivel de importancia de todo en la página. Utiliza la propiedad font-size para ajustar el tamaño del texto en un elemento.    

### Agregar un **`box-shadow`** a un elemento similar a una tarjeta
La propiedad box-shadow aplica una o más sombras a un elemento.   
La propiedad box-shadow toma valores para:       
- **``offset-x``** (cuánto empujar la sombra horizontalmente desde el elemento),
- **``offset-y``** (cuánto empujar la sombra verticalmente desde el elemento),
- **``blur-radius``** (radio de desenfoque),
- **``spread-radius``** (extencion del redio) y
- **``color``**, en ese orden.   

Los valores de ``blur-radius``  y 
``spread-radius`` son opcionales.   

Se pueden crear varias sombras de caja usando comas para separar las propiedades de cada elemento de sombra de caja.   
Aquí hay un ejemplo de CSS para crear múltiples sombras con algo de desenfoque, en colores negros mayormente transparentes:
```css
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
```

### Disminuir la opacidad de un elemento
La propiedad ``opacity`` en CSS se utiliza para ajustar la opacidad o, a la inversa, la transparencia de un elemento.   
**`Un valor de 1 es opaco, que no es transparente en absoluto.
Un valor de 0,5 es medio transparente.
Un valor de 0 es completamente transparente.`**

El valor dado se aplicará a todo el elemento, ya sea una imagen con algo de transparencia o los colores de primer plano y fondo de un bloque de texto.

### Utilice la propiedad text-transform para convertir el texto en mayúsculas. 
La propiedad ``text-transform ``en CSS se usa para cambiar la apariencia del texto. Es una forma conveniente de asegurarse de que el texto de una página web aparezca de forma coherente, sin tener que cambiar el contenido del texto de los elementos HTML reales.  

La siguiente tabla muestra cómo los diferentes valores de ``text-transform`` cambian el texto de ejemplo "Transform me".   

|**Value**	|    **Result** | 
|-----------|---------------|
|`lowercase`|	    "transform me"    
|`uppercase`|	    "TRANSFORM ME"     
|`capitalize`|	"Transform Me"    |
|`initial`	|    Usar el valor predeterminado     
|`inherit`	|    Utilice el valor de text-transform del elemento principal      
|`none`	    |    Default: Use the original text  
-----------------------------------------------
### Establecer el font-size para varios elementos de encabezado 
La propiedad font-size se usa para especificar qué tan grande es el texto en un elemento dado. Esta regla se puede utilizar para varios elementos para crear coherencia visual del texto en una página. En este desafío, establecerá los valores para todas las etiquetas h1 a h6 para equilibrar los tamaños de los encabezados.

    Set the font-size of the h1 tag to 68px.
    Set the font-size of the h2 tag to 52px.
    Set the font-size of the h3 tag to 40px.
    Set the font-size of the h4 tag to 32px.
    Set the font-size of the h5 tag to 21px.
    Set the font-size of the h6 tag to 14px.

### Establecer font-weight para varios elementos de encabezado
Estableció el font-size de cada etiqueta de encabezado en el último desafío, aquí ajustará el font-weight 

La propiedad **font-weight** *establece el grosor o el grosor de los caracteres en una sección de texto.*  

    Set the font-weight of the h1 tag to 800.
    Set the font-weight of the h2 tag to 600.
    Set the font-weight of the h3 tag to 500.
    Set the font-weight of the h4 tag to 400.
    Set the font-weight of the h5 tag to 300.
    Set the font-weight of the h6 tag to 200.

### Establecer el tamaño de fuente del texto del párrafo
La propiedad font-size en CSS no se limita a los títulos, se puede aplicar a cualquier elemento que contenga texto.

Cambie el valor de la propiedad font-size del párrafo a 16px para hacerlo más visible.
```css
 p {
    font-size: 16px;
  }
  ```
  ### Establecer la altura de línea de los párrafos
  CSS ofrece la propiedad **`line-height`** para cambiar la altura de cada línea en un bloque de texto. Como sugiere el nombre, cambia la cantidad de espacio vertical que recibe cada línea de texto.   
  ```css
 p {
    line-height: 18px;
  }
  ```
  ### Ajustar el Hover de una etiqueta de ancla
Este desafío tocará el uso de **pseudoclases**. Una *pseudoclase* es una palabra clave que se puede agregar a los selectores para seleccionar un estado específico del elemento.    
Por ejemplo, el estilo de una etiqueta de anclaje se puede cambiar para su estado de desplazamiento mediante el selector de pseudoclase `:hover`. Aquí está el CSS para cambiar el color de la etiqueta de anclaje a rojo durante su estado de desplazamiento:
```css
a:hover {
  color: red;
}
```
### Cambiar la posición relative de un elemento
CSS trata cada elemento HTML como su propia caja, que generalmente se denomina modelo de caja CSS. `Los elementos a nivel de bloque `comienzan automáticamente en una nueva línea (piense en encabezados, párrafos y divs) mientras que `los elementos en línea `se ubican dentro del contenido circundante (como imágenes o spans). El diseño predeterminado del layout se denomina `normal flow` de un documento, pero CSS ofrece la propiedad de posición para anularlo.

Cuando la posición de un elemento se establece en `relative`, le permite especificar cómo CSS debe moverlo en relación con su posición actual en el flujo normal de la página. Se empareja con las propiedades de desplazamiento de CSS de `left` o `right`, y `top` o `bottom`. Estos indican cuántos píxeles, porcentajes o ems deben alejar el elemento de donde se encuentra normalmente. El siguiente ejemplo aleja el párrafo 10 píxeles de la parte inferior:
```css
p {
  position: relative;
  bottom: 10px;
}
```
Cambiar la posición de un elemento a relativa no lo elimina del flujo normal; otros elementos a su alrededor aún se comportan como si ese elemento estuviera en su posición predeterminada. Nota: El posicionamiento le brinda mucha flexibilidad y poder sobre el diseño visual de una página. Es bueno recordar que no importa la posición de los elementos, el marcado HTML subyacente debe estar organizado y tener sentido cuando se lee de arriba a abajo. Así es como los usuarios con discapacidad visual (que dependen de dispositivos de asistencia como lectores de pantalla) acceden a su contenido.    

Cambie la posición del h2 a relativa y use un desplazamiento CSS para moverlo 15 píxeles lejos de la parte superior de donde se encuentra en el flujo normal. Observe que no hay impacto en las posiciones de los elementos h1 y p circundantes.

### Mover un elemento en una posición relativa con CSS Offsets
Los desplazamientos (Offsets) de CSS de la parte superior o inferior, y de la izquierda o la derecha, le indican al navegador hasta qué punto debe desplazar un elemento en relación con su ubicación en el flujo normal del documento.   
Estás desplazando un elemento lejos de un punto dado, lo que aleja el elemento del lado referenciado (efectivamente, la dirección opuesta). Como viste en el último desafío, el uso del desplazamiento superior movió el h2 hacia abajo. Del mismo modo, el uso de un desplazamiento a la izquierda mueve un elemento a la derecha. 
![](https://cdn-media-1.freecodecamp.org/imgr/eWWi3gZ.gif)  
Use CSS offsets para mover el h2 15 píxeles a la derecha y 10 píxeles hacia arriba.

### Bloquear un elemento a su padre con posicionamiento Absolute
La siguiente opción para la propiedad de posición CSS es absolute que bloquea el elemento en su lugar en relación con su contenedor principal.    
A diferencia de la posición relativa, esto elimina el elemento del flujo normal del documento, por lo que los elementos circundantes lo ignoran. Las propiedades de desplazamiento de CSS (top or bottom and left or right) se utilizan para ajustar la posición.    
Una matiz del posicionamiento absoluto es que estará bloqueado en relación con su antepasado posicionado más cercano. Si olvida agregar una regla de posición al elemento principal (esto generalmente se hace usando posición: relativa;), el navegador seguirá buscando en la cadena y, en última instancia, usará la etiqueta del cuerpo de forma predeterminada.

### Bloquear un elemento en la ventana del navegador con posicionamiento fijo
El siguiente esquema de diseño que ofrece CSS es la posición fija, que es un tipo de posicionamiento absoluto que bloquea un elemento en relación con la ventana del navegador. Similar al posicionamiento absoluto, se usa con las propiedades de desplazamiento de CSS y también elimina el elemento del flujo normal del documento. Otros elementos ya no "se dan cuenta" de su ubicación, lo que puede requerir algunos ajustes de diseño en otro lugar.    
Una diferencia clave entre las posiciones fija y absoluta es que un elemento con una posición fija no se moverá cuando el usuario se desplace.

### Empuje los elementos hacia la izquierda o hacia la derecha con la propiedad float
La siguiente herramienta de posicionamiento no usa la posición, pero establece la propiedad flotante de un elemento. Los elementos flotantes se eliminan del flujo normal de un documento y se empujan hacia la izquierda o hacia la derecha del elemento principal que los contiene. Se usa comúnmente con la propiedad width para especificar cuánto espacio horizontal requiere el elemento flotante.

### Cambiar la posición de los elementos superpuestos con la propiedad z-index 
Cuando los elementos se colocan para superponerse (es decir, usando la posición: absoluta | relativa | fija | pegajosa), el elemento que viene más adelante en el marcado HTML aparecerá, por defecto, en la parte superior de los otros elementos. Sin embargo, la propiedad z-index puede especificar el orden en que los elementos se apilan uno encima del otro. Debe ser un número entero (es decir, un número entero y no un decimal), y los valores más altos para la propiedad del índice z de un elemento lo mueven más arriba en la pila que aquellos con valores más bajos.    
```css
.first {
    background-color: red;
    position: absolute;
    z-index:2;
  }
  ```
  ### Centrar un elemento horizontalmente usando la propiedad margin 
  Otra técnica de posicionamiento es centrar un elemento de bloque horizontalmente. Una forma de hacer esto es establecer su margen en un valor de auto.
  Centre el div en la página agregando una propiedad de margiin con un valor de auto.
  ```css
   div {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin:auto;
  }
  ```
  ### Aprender sobre los colores complementarios
  La teoría del color y su impacto en el diseño es un tema profundo y solo los conceptos básicos se cubren en los siguientes desafíos. En un sitio web, el color puede llamar la atención sobre el contenido, evocar emociones o crear armonía visual. El uso de diferentes combinaciones de colores puede realmente cambiar el aspecto de un sitio web, y se puede pensar mucho en elegir una paleta de colores que funcione con su contenido.    
  La rueda de colores es una herramienta útil para visualizar cómo los colores se relacionan entre sí: es un círculo donde los tonos similares son vecinos y los diferentes tonos están más separados. Cuando dos colores están uno frente al otro en la rueda, se denominan colores complementarios. Tienen la característica de que si se combinan, se "cancelan" entre sí y crean un color gris. Sin embargo, cuando se colocan uno al lado del otro, estos colores parecen más vibrantes y producen un fuerte contraste visual.   
  Algunos ejemplos de colores complementarios con sus códigos hexadecimales son:   

  |red (#FF0000) and cyan (#00FFFF)|
  ------------------------------------
  |green (#00FF00) and magenta (#FF00FF)|
  --------------------------------------
  |blue (#0000FF) and yellow (#FFFF00)|
  --------------------------------------

  Esto es diferente al anticuado modelo de color RYB que a muchos de nosotros nos enseñaron en la escuela, que tiene diferentes colores primarios y complementarios. La teoría moderna del color utiliza el modelo RGB aditivo (como en la pantalla de una computadora) y el modelo CMY (K) sustractivo (como en la impresión). [Lea aquí](https://en.wikipedia.org/wiki/Color_model) para obtener más información sobre este tema complejo.
    
  Hay muchas herramientas de selección de color disponibles en línea que tienen la opción de encontrar el complemento de un color.    
  Nota: Para todos los desafíos de color: el uso del color puede ser una forma poderosa de agregar interés visual a una página. Sin embargo, el color por sí solo no debe utilizarse como la única forma de transmitir información importante porque es posible que los usuarios con discapacidad visual no comprendan ese contenido. Este tema se tratará con más detalle en los desafíos de accesibilidad aplicada.

###  Aprender sobre  sobre los colores terciarios
Los monitores de computadora y las pantallas de los dispositivos crean diferentes colores al combinar cantidades de luz roja, verde y azul. Esto se conoce como el modelo de color aditivo RGB en la teoría moderna del color. El rojo (R), el verde (G) y el azul (B) se denominan colores primarios. La mezcla de dos colores primarios crea los colores secundarios cian (G + B), magenta (R + B) y amarillo (R + G). Viste estos colores en el desafío Colores complementarios. Estos colores secundarios resultan ser el complemento del color primario que no se usó en su creación, y son opuestos a ese color primario en la rueda de colores. Por ejemplo, el magenta está hecho con rojo y azul, y es el complemento del verde.

Los colores terciarios son el resultado de combinar un color primario con uno de sus colores secundarios vecinos. Por ejemplo, dentro del modelo de color RGB, el rojo (primario) y el amarillo (secundario) forman el naranja (terciario). Esto agrega seis colores más a una rueda de colores simple para un total de doce.

Hay varios métodos para seleccionar diferentes colores que dan como resultado una combinación armoniosa en el diseño. Un ejemplo que puede usar colores terciarios se llama esquema de color complementario dividido. Este esquema comienza con un color base, luego lo empareja con los dos colores adyacentes a su complemento. Los tres colores proporcionan un fuerte contraste visual en un diseño, pero son más sutiles que usar dos colores complementarios.

Aquí hay tres colores creados usando el esquema de complemento dividido:

|Color	Hex | Code    |    
|-----------|---------    
| orange	  | #FF7F00 |   
| cyan	    | #00FFFF |   
| raspberry	| #FF007F |  
 
 ### Ajustar el color de varios elementos a colores complementarios
 El desafío de Colores complementarios mostró que los colores opuestos en la rueda de colores pueden hacer que los demás parezcan más vibrantes cuando se colocan uno al lado del otro. Sin embargo, el fuerte contraste visual puede resultar discordante si se usa en exceso en un sitio web y, a veces, puede dificultar la lectura del texto si se coloca sobre un fondo de color complementario. En la práctica, uno de los colores suele ser el dominante y el complemento se utiliza para llamar la atención visual sobre cierto contenido de la página.

 ### Ajustar el tono de un color
 Los colores tienen varias características que incluyen tono, saturación y luminosidad (`hue, saturation, lightness`). CSS3 introdujo la propiedad **`hsl()`** como una forma alternativa de elegir un color indicando directamente estas características.    
El **`hue`** (tono) es lo que la gente generalmente considera "color". Si imagina un espectro de colores que comienza con el rojo a la izquierda, pasando por el verde en el medio y el azul a la derecha, el tono es donde encaja un color a lo largo de esta línea. En hsl (), hue usa un concepto de rueda de color en lugar del espectro, donde el ángulo del color en el círculo se da como un valor entre 0 y 360.   

**``La saturación``** es la cantidad de gris en un color. Un color completamente saturado no tiene gris, y un color mínimamente saturado es casi completamente gris. Esto se da como un porcentaje con 100% completamente saturado.

**`La claridad`** (Lightness) es la cantidad de blanco o negro en un color. Se da un porcentaje que va del 0% (negro) al 100% (blanco), donde el 50% es el color normal.   
Aquí hay algunos ejemplos del uso de **``hsl()``** con colores de luminosidad normal completamente saturados:
```css
Color	    HSL
red	        hsl(0, 100%, 50%)
yellow  	hsl(60, 100%, 50%)
green   	hsl(120, 100%, 50%)
cyan	    hsl(180, 100%, 50%)
blue	    hsl(240, 100%, 50%)
magenta	    hsl(300, 100%, 50%)
```

### Ajustar el tono de un color
La opción hsl () en CSS también facilita el ajuste del tono de un color. Mezclar el blanco con un tono puro crea un tinte de ese color, y agregar negro creará un tono. Alternativamente, se produce un tono agregando gris o coloreando y sombreando. Recuerde que la 's' y la 'l' de hsl () representan saturación y luminosidad, respectivamente. El porcentaje de saturación cambia la cantidad de gris y el porcentaje de luminosidad determina cuánto blanco o negro hay en el color. Esto es útil cuando tienes un tono base que te gusta, pero necesitas diferentes variaciones.   
Todos los elementos tienen un color de fondo predeterminado de transparente. Nuestro elemento de navegación actualmente parece tener un fondo cian, porque el elemento detrás de él tiene un color de fondo establecido en cian. Agregue un color de fondo al elemento de navegación para que use el mismo tono cian, pero tenga valores de 80% de saturación y 25% de luminosidad para cambiar su tono y sombra.
```css
  nav {
      background-color:hsl(180, 80%, 25%);
  }
```

### Crear un degradado lineal CSS Gradient.
La aplicación de un color en elementos HTML no se limita a un tono plano. CSS proporciona la capacidad de utilizar transiciones de color, también conocidas como degradados, en elementos. Se accede a esto a través de la función ``linear-gradient()`` de la propiedad de fondo. Aquí está la sintaxis general:
```css
background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);
```
El primer argumento especifica la dirección desde la que comienza la transición de color; se puede indicar como un grado, donde *90 grados hace un degradado vertical y 45 grados tiene un ángulo como una barra invertida.* Los siguientes argumentos especifican el orden de los colores utilizados en el degradado.   
Example:
```css
background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));
```
### Utilice un degradado lineal CSS para crear un elemento rayado
La función de repeating-linear-gradient() es muy similar a inear-gradient() con la principal diferencia de que repite el patrón de gradiente especificado. repeating-linear-gradient() acepta una variedad de valores, pero para simplificar, trabajará con un valor de ángulo y valores de parada de color en este desafío.
El valor del ángulo es la dirección del gradiente. Las paradas de color son como valores de ancho que marcan dónde tiene lugar una transición y se dan con un porcentaje o un número de píxeles.    
En el ejemplo que se muestra en el editor de código, el degradado comienza con el color amarillo en 0 píxeles que se funde con el segundo color azul a 40 píxeles del inicio. Dado que la siguiente parada de color también se encuentra en 40 píxeles, el degradado cambia inmediatamente al tercer color verde, que a su vez se fusiona con el cuarto valor de color rojo, ya que está a 80 píxeles del comienzo del degradado.

Para este ejemplo, ayuda pensar en las paradas de color como pares donde cada dos colores se mezclan.    
```css
0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px
```
Si todos los valores de parada de dos colores son del mismo color, la combinación no se nota porque está entre el mismo color, seguida de una transición difícil al siguiente color, por lo que terminas con rayas.   

Haga rayas cambiando el gradiente lineal repetido () para usar un ángulo de gradiente de 45 grados, luego establezca las dos primeras paradas de color en amarillo y, finalmente, las segundas dos paradas de color en negro.
```css
div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }
  ```
  ### Cree textura agregando un patrón sutil como imagen de fondo
  Una forma de agregar textura e interés a un fondo y hacer que se destaque más es agregar un patrón sutil. La clave es el equilibrio, ya que no desea que el fondo se destaque demasiado y se aleje del primer plano. La propiedad background admite la función url () para enlazar a una imagen de la textura o patrón elegido. La dirección del enlace está entre comillas y entre paréntesis.
  ```css
    body {
    background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png")
  }
  ```
  ### Utilice la propiedad de escala de transformación CSS para cambiar el tamaño de un elemento
  Para cambiar la escala de un elemento, CSS tiene la propiedad ``transform``, junto con su función ``scale()``. El siguiente ejemplo de código duplica el tamaño de todos los elementos de párrafo en la página:  
  ```css 
  p {
  transform: scale(2);
}
```
### Utilice la propiedad de escala de transformación CSS para escalar un elemento al pasar el mouse
La propiedad `transform` tiene una variedad de funciones que le permiten scale, move, rotate, skew, etc., sus elementos. Cuando se usa con pseudoclases como `:hover` que especifican un cierto estado de un elemento, la propiedad transform puede agregar interactividad fácilmente a sus elementos.

A continuación, se muestra un ejemplo para escalar los elementos del párrafo a 2,1 veces su tamaño original cuando un usuario pasa el cursor sobre ellos:
```css
p:hover {
  transform: scale(2.1);
}
```
**Nota:** la aplicación de una transformación a un elemento div también afectará a los elementos secundarios contenidos en div.    

### Utilice la propiedad de transformación CSS skewX para sesgar un elemento a lo largo del eje X (Inclinar)
La siguiente función de la propiedad de transformación es skewX (), que inclina el elemento seleccionado a lo largo de su eje X (horizontal) en un grado dado.
El siguiente código inclina el elemento de párrafo en -32 grados a lo largo del eje X.   
```css
p {
  transform: skewX(-32deg);
}
```

### Utilice la propiedad de transformación CSS skewY para inclinar un elemento a lo largo del eje Y
Dado que la función skewX () sesga el elemento seleccionado a lo largo del eje X en un grado dado, no es de extrañar que la propiedad skewY () sesgue un elemento a lo largo del eje Y (vertical).
```css
  #top {
    background-color: red;
    transform:skewY(-10deg);
  }
  ```
  ### Crear un gráfico usando CSS
  Al manipular diferentes selectores y propiedades, puede crear formas interesantes. Uno de los más fáciles de probar es la forma de una luna creciente. Para este desafío, debe trabajar con la propiedad box-shadow que establece la sombra de un elemento, junto con la propiedad border-radius que controla la redondez de las esquinas del elemento.   
  Creará un objeto redondo y transparente con una sombra nítida que está ligeramente desplazada hacia un lado; la sombra en realidad será la forma de la luna que ve.
  Para crear un objeto redondo, la propiedad border-radius debe establecerse en un valor del 50%.   

  Puede recordar de un desafío anterior que la propiedad box-shadow toma valores para offset-x, offset-y, blur-radius, spread-radius y un valor de color en ese orden. Los valores de radio de desenfoque y radio de extensión son opcionales.

  Manipule el elemento cuadrado en el editor para crear la forma de la luna. Primero, cambie el color de fondo a transparente, luego configure la propiedad border-radius al 50% para hacer la forma circular. Finalmente, cambie la propiedad box-shadow para establecer el offset-x en 25px, el offset-y en 10px, el radio de desenfoque en 0, el radio de extensión en 0 y el color en azul.    

  ### Cree una forma más compleja usando CSS y HTML
  Una de las formas más populares del mundo es la forma de corazón, y en este desafío crearás una usando CSS puro. Pero primero, debe comprender los pseudoelementos `::before` y `::after`. Estos pseudo-elementos se utilizan para agregar algo antes o después de un elemento seleccionado. En el siguiente ejemplo, un pseudo-elemento :: before se usa para agregar un rectángulo a un elemento con la clase `heart`:
  ```css
  .heart::before {
  content: "";
  background-color: yellow;
  border-radius: 25%;
  position: absolute;
  height: 50px;
  width: 70px;
  top: -50px;
  left: 5px;
}
```
Para que los pseudoelementos :: before y :: after funcionen correctamente, deben tener una propiedad de contenido definida. Esta propiedad se usa generalmente para agregar cosas como una foto o texto al elemento seleccionado. Cuando los pseudoelementos :: before y :: after se utilizan para hacer formas, la propiedad de contenido sigue siendo necesaria, pero se establece en una cadena vacía. En el ejemplo anterior, el elemento con la clase de corazón tiene un pseudoelemento :: before que produce un rectángulo amarillo con alto y ancho de 50px y 70px, respectivamente. Este rectángulo tiene esquinas redondeadas debido a su radio de borde del 25% y está posicionado absolutamente a 5 px de la izquierda y 50 px por encima de la parte superior del elemento.
```css
 .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
   transform:rotate(-45deg);
  }
  
  .heart::after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;

  }
  .heart::before {
    content: "";
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
  ```

### Aprenda cómo funcionan las propiedades de animación y @keyframes de CSS

Para animar un elemento, necesita conocer las propiedades de la animación y la regla @keyframes. Las propiedades de la animación controlan cómo debe comportarse la animación y la regla @keyframes controla lo que sucede durante esa animación. Hay ocho propiedades de animación en total. Este desafío lo mantendrá simple y cubrirá los dos más importantes primero:   
``animation-name``: establece el nombre de la animación, que luego usa @keyframes para decirle a CSS qué reglas van con qué animaciones.    
``animation-duration``: establece la duración de la animación.   
@keyframes es cómo especificar exactamente qué sucede dentro de la animación durante la duración. Esto se hace dando propiedades CSS para "fotogramas" específicos durante la animación, con porcentajes que van del 0% al 100%. Si compara esto con una película, las propiedades CSS para 0% es cómo se muestra el elemento en la escena de apertura. Las propiedades de CSS para el 100% es cómo aparece el elemento al final, justo antes de que aparezcan los créditos. Luego, CSS aplica la magia para hacer la transición del elemento durante la duración dada para representar la escena. Aquí hay un ejemplo para ilustrar el uso de @keyframes y las propiedades de animación:   
```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```

Para el elemento con el ID de anim, el fragmento de código anterior establece el nombre de la animación en colorful y establece la duración de la animación en 3 segundos. Luego, la regla @keyframes se vincula a las propiedades de animación con el nombre colorful. Establece el color en azul al comienzo de la animación (0%) que pasará a amarillo al final de la animación (100%). No está limitado solo a las transiciones de principio a fin, puede establecer propiedades para el elemento para cualquier porcentaje entre 0% y 100%.

### Usar animación CSS para cambiar el hover de un botón
Puede usar CSS @keyframes para cambiar el color de un botón en su estado de desplazamiento.

Aquí hay un ejemplo de cómo cambiar el ancho de una imagen al pasar el mouse:
```css
  img:hover {
    animation-name: width;
    animation-duration: 500ms;
  }

  @keyframes width {
    100% {
      width: 40px;
    }
  }
  ```
  ```html
  <img src="https://bit.ly/smallgooglelogo" alt="Google's Logo" />
  ```
  Tenga en cuenta que ms significa milisegundos, donde 1000 ms es igual a 1 s.

  Use CSS @keyframes para cambiar el color de fondo del elemento del botón para que se convierta en #4791d0 cuando un usuario pase el mouse sobre él. La regla @keyframes solo debe tener una entrada para 100%.

  ### Modificar el modo de relleno de una animación (Fill Mode)
  Eso es genial, pero aún no funciona bien. Observe cómo la animación se restablece después de que han pasado 500 ms, lo que hace que el botón vuelva al color original. Quieres que el botón permanezca resaltado.

Esto se puede hacer estableciendo la propiedad **``animation-fill-mode``** en **`forwards`**. El modo de relleno de animación especifica el estilo que se aplica a un elemento cuando la animación ha terminado. Puede configurarlo así: 
```css
animation-fill-mode: forwards;
```
### Crear movimiento usando animación CSS
Cuando los elementos tienen una *position* específica, como *fixed* o *relative*, las propiedades de desplazamiento CSS derecha, izquierda, superior e inferior se pueden utilizar en las reglas de animación para crear movimiento.

Como se muestra en el siguiente ejemplo, puede empujar el elemento hacia abajo y luego hacia arriba estableciendo la propiedad superior del fotograma clave del 50% en 50 px, pero configurándola en 0 px para el primer (0%) y el último (100%) fotograma clave.
```css
@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
  }
  100% {
    background-color: yellow;
    top: 0px;
  }
}
```

### Cree una dirección visual desvaneciendo un elemento de izquierda a derecha
Para este desafío, cambiará la opacidad de un elemento animado para que se desvanezca gradualmente a medida que llega al lado derecho de la pantalla.

En la animación mostrada, el elemento redondo con el fondo degradado se mueve hacia la derecha en la marca del 50% de la animación según la regla @keyframes.   
Apunte al elemento con la id `ball` y agregue la propiedad de opacidad establecida en 0.1 al 50%, de modo que el elemento se desvanezca a medida que se mueve hacia la derecha.   

### Animar elementos continuamente con un número de animaciones infinito  
Los desafíos anteriores cubrieron cómo usar algunas de las propiedades de animación y la regla @keyframes. Otra propiedad de la animación es **`animation-iteration-count`**, que le permite controlar cuántas veces le gustaría recorrer la animación. He aquí un ejemplo:

``animation-iteration-count: 3;``

En este caso, la animación se detendrá después de ejecutarse 3 veces, pero es posible hacer que la animación se ejecute de forma continua estableciendo ese valor en **`infinite`**. 

### Hacer un latido CSS usando un conteo de animación infinito
Aquí hay un ejemplo de animación continua más con la propiedad ``animation-iteration-count`` que usa el corazón que diseñó en un desafío anterior.    
La animación de latido de un segundo de duración consta de dos piezas animadas. Los elementos de `heart` (incluidas las piezas `:before` y `:after`) se animan para cambiar de tamaño usando la propiedad `transform`, y el `div` de fondo se anima para cambiar su color usando la propiedad `background`.    

Mantenga el corazón latiendo agregando la propiedad ``animation-iteration-count ``tanto para la clase `back` como para la clase `heart` y estableciendo el valor en infinito. Los selectores `heart:before` y `corazón:después` no necesitan propiedades de animación.
```css
.back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;
    animation-iteration-count:infinite;
  }
  ```
  ### Animar elementos en Variable Rates
  Hay una variedad de formas de alterar las velocidades de animación de elementos animados de manera similar. Hasta ahora, esto se ha logrado aplicando una propiedad animation-iteration-count y estableciendo reglas de @keyframes.    
  A modo de ilustración, la animación de la derecha consta de dos "estrellas", cada una de las cuales disminuye en tamaño y opacidad en la marca del 20% en la regla @keyframes, que crea la animación centelleante. Puede cambiar la regla @keyframes para uno de los elementos para que las estrellas brillen a diferentes velocidades.

  ### Animar varios elementos a velocidades variables
  En el desafío anterior, cambió las tasas de animación para dos elementos animados de manera similar al modificar sus reglas @keyframes. Puede lograr el mismo objetivo manipulando la duración de la animación de varios elementos.   
  En la animación que se ejecuta en el editor de código, hay tres "estrellas" en el cielo que titilan a la misma velocidad en un bucle continuo. Para que brillen a diferentes velocidades, puede establecer la propiedad de duración de la animación en diferentes valores para cada elemento.   
  ```css

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 0.9s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1.1s;
    animation-name: twinkle;
  }
  ```
  ### Cambiar el tiempo de la animación con palabras clave  
  En las animaciones CSS, la propiedad `animation-timing-function` controla la rapidez con la que cambia un elemento animado durante la duración de la animación. Si la animación es un automóvil que se mueve del punto A al punto B en un tiempo determinado (la duración de la animación), la `animation-timing-function ` indica cómo acelera y desacelera el automóvil durante el transcurso del viaje.

Hay una serie de palabras clave predefinidas disponibles para opciones populares. Por ejemplo, el valor predeterminado es `ease`, que comienza lento, se acelera en el medio y luego vuelve a disminuir al final. Otras opciones incluyen la `ease-out`, que es rápida al principio y luego se ralentiza, la `eease-in`, que es lenta al principio y luego se acelera al final, o `linear`, que aplica una velocidad de animación constante en todo momento.

Para los elementos con id de ball1 y ball2, agregue una propiedad de `animation-timing-function` a cada uno y establezca #ball1 en `linear` y #ball2 en `ease-out`. Observe la diferencia entre cómo se mueven los elementos durante la animación pero terminan juntos, ya que comparten la misma duración de animación de 2 segundos.
```css

  .balls {
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left:27%;
animation-timing-function: linear;
  }
  #ball2 {
    left:56%;
animation-timing-function: ease-out;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
```

### Descubra cómo funcionan las curvas de Bézier
El último desafío introdujo la propiedad animation-timing-function y algunas palabras clave que cambian la velocidad de una animación durante su duración. CSS ofrece una opción distinta a las palabras clave que proporciona un control aún más preciso sobre cómo se desarrolla la animación, mediante el uso de curvas de Bezier.    

En las animaciones CSS, las curvas de Bezier se utilizan con la función **cubic-bezier**. La forma de la curva representa cómo se desarrolla la animación. La curva vive en un sistema de coordenadas de 1 por 1. El eje X de este sistema de coordenadas es la duración de la animación (piénselo como una escala de tiempo) y el eje Y es el cambio en la animación.

La función **cubic-bezier** consta de cuatro puntos principales que se encuentran en esta cuadrícula de 1 por 1: p0, p1, p2 y p3. p0 y p3 están configurados para usted: son los puntos inicial y final que siempre se encuentran respectivamente en el origen *(0, 0)* y *(1, 1)*. Establece los valores x e y para los otros dos puntos, y el lugar donde los coloca en la cuadrícula dicta la forma de la curva para que siga la animación. Esto se hace en CSS declarando los valores x e y de los puntos "ancla" p1 y p2 en la forma: (x1, y1, x2, y2). Reuniéndolo todo, aquí hay un ejemplo de una curva Bezier en código CSS:

```css
animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
```
En el ejemplo anterior, los valores de x e y son equivalentes para cada punto **(x1 = 0.25 = y1 y x2 = 0.75 = y2)**, que si recuerda de la clase de **geometría**, da como resultado una línea que se extiende desde el origen al punto (1 , 1). Esta animación es un cambio lineal de un elemento durante la duración de una animación y es lo mismo que usar la palabra clave lineal. En otras palabras, cambia a velocidad constante.     
Para el elemento con el id de ball1, cambie el valor de la propiedad animation-timing-function de lineal a su valor equivalente de función cubic-bezier. Utilice los valores de puntos dados en el ejemplo anterior.
```css
#ball1 {
    left: 27%;
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  }
  ```

  ### Usar una curva de Bézier para mover un gráfico
Un desafío anterior discutió la palabra clave de *ease-out* que describe un cambio de animación que se acelera primero y luego se ralentiza al final de la animación. A la derecha, se demuestra la diferencia entre la palabra clave de *ease-out* (para el elemento azul) y la palabra clave *linear* (para el elemento rojo). Se pueden lograr progresiones de animación similares a la palabra clave de *ease-out* mediante el uso de una función de curva de Bézier cúbica personalizada.

En general, cambiar los puntos de ancla p1 y p2 impulsa la creación de diferentes curvas de Bézier, que controlan cómo avanza la animación a través del tiempo. A continuación, se muestra un ejemplo de una curva de Bézier que utiliza valores para imitar el estilo de *ease-ou*:   
```css
animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
```
Recuerde que todas las funciones de bezier cúbico comienzan con p0 en (0, 0) y terminan con p3 en (1, 1). En este ejemplo, la curva se mueve más rápido a través del eje Y (comienza en 0, va al valor p1 y de 0, luego va al valor p2 y de 1) que se mueve a través del eje X (0 para comenzar, luego 0 para p1, hasta 0,58 para p2). Como resultado, el cambio en el elemento animado progresa más rápido que el tiempo de la animación para ese segmento. Hacia el final de la curva, la relación entre el cambio en los valores de x e y se invierte: el valor de y se mueve de 1 a 1 (sin cambios) y los valores de x se mueven de 0.58 a 1, lo que hace que los cambios de animación progresen más lentamente en comparación con la duración de la animación.   

Para ver el efecto de esta curva de Bezier en acción, cambie la función de tiempo de animación del elemento con id de rojo a una función de bezier cúbico con valores x1, y1, x2, y2 establecidos respectivamente en 0, 0, 0.58, 1 Esto hará que ambos elementos avancen a través de la animación de manera similar.
```css
#red {
    background: red;
    left: 27%;
    animation-timing-function:  0, 0, 0.58, 1;
  }
  ```
  ### Haz que el movimiento sea más natural usando una curva Bezier 
Este desafío anima un elemento para replicar el movimiento de una pelota que se hace malabares. Los desafíos anteriores cubrían las curvas de Bézier lineales y cúbicas de salida, sin embargo, ninguno describe el movimiento de malabarismo con precisión. Necesita personalizar una curva Bezier para esto.     
La función de tiempo de animación se repite automáticamente en cada fotograma clave cuando el recuento de iteraciones de animación se establece en infinito. Dado que hay una regla de fotogramas clave establecida en el medio de la duración de la animación (al 50%), da como resultado dos progresiones de animación idénticas en el movimiento hacia arriba y hacia abajo de la bola.   
La siguiente curva de Bézier cúbica simula un movimiento de malabarismo:   
```css
cubic-bezier(0.3, 0.4, 0.5, 1.6); 
```
Observe que el valor de y2 es mayor que 1. Aunque la curva de Bezier cúbica está mapeada en un sistema de coordenadas 1 por 1, y solo puede aceptar valores de x de 0 a 1, el valor de y se puede establecer en números mayores que uno. Esto da como resultado un movimiento de rebote que es ideal para simular la pelota de malabarismo.+

Cambie el valor de la función de tiempo de animación del elemento con el id de verde a una función de bezier cúbico con los valores x1, y1, x2, y2 establecidos respectivamente en 0.311, 0.441, 0.444, 1.649.  
```css
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.311, 0.441, 0.444, 1.649);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
  ```
  ```html
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```