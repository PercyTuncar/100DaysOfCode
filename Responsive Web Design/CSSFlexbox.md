# CSS Flexbox
La interfaz de usuario de un sitio web ("**UI**") tiene dos componentes. Primero, están los elementos visuales, como colores, fuentes e imágenes. En segundo lugar, está la colocación o el posicionamiento de esos elementos. En Responsive Web Design, un diseño de interfaz de usuario debe adaptarse a muchos navegadores y dispositivos diferentes que acceden al contenido.

CSS3 introdujo las cajas flexibles, o flexbox, para crear diseños de página para una interfaz de usuario dinámica. Es un modo de diseño que organiza los elementos de una manera predecible para diferentes tamaños de pantalla y navegadores. Si bien es algo nuevo, todos los navegadores modernos populares admiten flexbox. Esta sección cubre cómo usar flexbox y las diferentes opciones de diseño que ofrece.    

### Use display: flexionar para colocar dos cajas
Esta sección usa estilos de desafío alternos para mostrar cómo usar CSS para colocar elementos de una manera flexible. Primero, un desafío explicará la teoría, luego un desafío práctico utilizando un componente de tweet simple aplicará el concepto de flexbox.      

Colocando la propiedad CSS: **display: flex;**  en un elemento le permite usar otras propiedades flexibles para construir una página receptiva.
```css
  #box-container {
    display:flex;
  }
  ```
### Agregue Flex Superpowers al Tweet Embed
A la derecha está el tweet incrustado que se utilizará como ejemplo práctico. Algunos de los elementos se verían mejor con un diseño diferente. El último desafío demostrado en  display: flex. Aquí lo agregará a varios componentes en el tweet incrustado para comenzar a ajustar su posición.   

### Utilice la propiedad flex-direction para hacer una fila
Agregar **display:flex** a un elemento lo convierte en un contenedor flexible.   
Esto hace posible alinear cualquier hijo de ese elemento en filas o columnas.    
Esto se hace agregando la propiedad **flex-direction** al elemento principal y configurándolo en fila o columna. La creación de una fila alineará a los children horizontalmente y la creación de una columna alineará a los children verticalmente.   

Otras opciones para **flex-direction** son row-reverse y column-reverse.  

***Nota:*** el valor predeterminado de la propiedad flex-direction es row.   
### Aplicar la propiedad flex-direction para crear filas en el Tweet Insertar  
El header y footer de página en el ejemplo de inserción de tweets tienen elementos secundarios que podrían organizarse como filas utilizando la propiedad flex-direction. Esto le dice a CSS que alinee a los childrens horizontalmente.

### Use la propiedad lex-direction para hacer una columna   
Los dos últimos desafíos utilizaron la propiedad flex-direction establecida en row. Esta propiedad también puede crear una columna apilando verticalmente los elementos secundarios de un contenedor flexible.     

### Alinear elementos usando la propiedad justify-content   
A veces, los elementos flexibles dentro de un contenedor flexible no llenan todo el espacio del contenedor. Es común querer decirle a CSS cómo alinear y espaciar los elementos flexibles de cierta manera. Afortunadamente, la propiedad `justify-content` tiene varias opciones para hacer esto. Pero primero, hay una terminología importante que debe comprender antes de revisar esas opciones. 
Aquí hay una imagen útil que muestra una fila para ilustrar los conceptos siguientes.   
![](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)   

Recuerde que establecer un contenedor flexible como una fila coloca los elementos flexibles uno al lado del otro de izquierda a derecha. Un contenedor flexible configurado como columna coloca los elementos flexibles en una pila vertical de arriba hacia abajo. Para cada uno, la dirección en la que se colocan los elementos flexibles se denomina eje principal. Para una fila, esta es una línea horizontal que atraviesa cada elemento. Y para una columna, el eje principal es una línea vertical que atraviesa los elementos.

Hay varias opciones sobre cómo espaciar los elementos flexibles a lo largo de la línea que es el eje principal. Uno de los más utilizados es justify-content: center ;, que alinea todos los elementos flexibles con el centro dentro del contenedor flexible. Otras opciones incluyen:  
- `flex-start:` alinea los elementos al inicio del contenedor flexible. Para una fila, esto empuja los artículos a la izquierda del contenedor. Para una columna, esto empuja los artículos a la parte superior del contenedor. Esta es la alineación predeterminada si no se especifica ningún contenido de justificación.  
- `flex-end:` Alinea los elementos al final del contenedor flexible. Para una fila, esto empuja los elementos a la derecha del contenedor. Para una columna, esto empuja los artículos al fondo del contenedor.   
- `space-between:`  alinea los elementos con el centro del eje principal, con espacio adicional entre los elementos. Los primeros y últimos elementos se empujan hasta el borde del contenedor flexible. Por ejemplo, en una fila, el primer artículo está contra el lado izquierdo del contenedor, el último artículo está contra el lado derecho del contenedor, luego el espacio restante se distribuye uniformemente entre los otros artículos.     
- `space-around` similar al space-between, pero el primer y último artículo no están bloqueados en los bordes del contenedor, el espacio se distribuye alrededor de todos los artículos con medio espacio en cada extremo del contenedor flexible.  
- `space-evenly` Distribuye el espacio de manera uniforme entre los elementos flexibles con un espacio completo en cada extremo del contenedor flexible     


### Alinear elementos usando la propiedad align-items   
La propiedad align-items es similar a justify-content. Recuerde que la propiedad justify-content alineó los elementos flexibles a lo largo del eje principal. Para las filas, el eje principal es una línea horizontal y para las columnas es una línea vertical.

Los contenedores flexibles también tienen un eje transversal que es el opuesto al eje principal. Para las filas, el eje transversal es vertical y para las columnas, el eje transversal es horizontal.   

CSS ofrece la propiedad align-items para alinear elementos flexibles a lo largo del eje transversal. Para una fila, le dice a CSS cómo empujar los elementos en toda la fila hacia arriba o hacia abajo dentro del contenedor. Y para una columna, cómo empujar todos los elementos hacia la izquierda o hacia la derecha dentro del contenedor.

Los diferentes valores disponibles para los elementos de alineación incluyen:
- `flex-start`: alinea los elementos al inicio del contenedor flexible. Para las filas, esto alinea los elementos con la parte superior del contenedor. Para las columnas, esto alinea los elementos a la izquierda del contenedor.
- `flex-end`: alinea los elementos al final del contenedor flexible. Para las filas, esto alinea los artículos con la parte inferior del contenedor. Para las columnas, esto alinea los elementos a la derecha del contenedor.
- `center`: alinee los elementos al centro. Para las filas, esto alinea los elementos verticalmente (el mismo espacio por encima y por debajo de los elementos). Para las columnas, esto las alinea horizontalmente (el mismo espacio a la izquierda y a la derecha de los elementos).
- `stretch`: Estire los artículos para llenar el contenedor flexible. Por ejemplo, los elementos de las filas se estiran para llenar el contenedor flexible de arriba a abajo. Este es el valor predeterminado si no se especifica ningún valor de elementos de alineación.   
- `baseline` alinear los elementos con sus líneas de base. La línea de base es un concepto de texto, considérelo como la línea en la que se asientan las letras.   


### Utilice la propiedad flex-wrap para envolver una fila o columna   
CSS flexbox tiene una función para dividir un elemento flexible en varias filas (o columnas). De forma predeterminada, un contenedor flexible encajará todos los elementos flexibles juntos. Por ejemplo, una fila estará en una sola línea.    
Sin embargo, el uso de la propiedad flex-wrap le dice a CSS que ajuste los elementos. Esto significa que los elementos adicionales se mueven a una nueva fila o columna. El punto de ruptura del lugar donde se envuelve depende del tamaño de los artículos y del tamaño del contenedor.    
CSS también tiene opciones para la dirección del ajuste:  
- `nowrap` esta es la configuración predeterminada y no envuelve elementos.
- `wrap` envuelve los elementos de izquierda a derecha si están en una fila, o de arriba hacia abajo si están en una columna.
- `wrap-reverse` envuelve los elementos de derecha a izquierda si están en una fila, o de abajo hacia arriba si están en una columna.  
### Utilice la propiedad flex-shrink para encoger elementos 
Hasta ahora, todas las propiedades de los desafíos se aplican al contenedor flexible (el padre de los elementos flexibles). Sin embargo, hay varias propiedades útiles para los elementos flexibles.

La primera es la propiedad flex-shrink. Cuando se usa, permite que un artículo se encoja si el contenedor flexible es demasiado pequeño. Los elementos se encogen cuando el ancho del contenedor principal es menor que los anchos combinados de todos los elementos flexibles que contiene.  
La propiedad flex-shrink toma números como valores. Cuanto mayor sea el número, más se encogerá en comparación con los demás elementos del contenedor. Por ejemplo, si un elemento tiene un valor de contracción flexible de 1 y el otro tiene un valor de contracción flexible de 3, el que tenga el valor de 3 se contraerá tres veces más que el otro.   

### Utilice la propiedad flex-grow para expandir elementos
Lo opuesto a flex-shrink es la propiedad flex-grow. Recuerde que flex-shrink controla el tamaño de los artículos cuando el contenedor se encoge. La propiedad flex-grow controla el tamaño de los elementos cuando se expande el contenedor principal.

Usando un ejemplo similar del último desafío, si un elemento tiene un valor de crecimiento flexible de 1 y el otro tiene un valor de crecimiento flexible de 3, el que tenga el valor de 3 crecerá tres veces más que el otro.

Agregue la propiedad CSS flex-grow a #box-1 y #box-2. Asigne a #box-1 un valor de 1 y a #box-2 un valor de 2.  
```css
  #box-1 {
    background-color: dodgerblue;
    height: 200px;
flex-grow:1;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
flex-grow:2;
  }
  ```
### Utilice la propiedad  flex-basis  para establecer el tamaño inicial de un artículo

La propiedad `flex-basis` especifica el tamaño inicial del elemento antes de que CSS realice ajustes con `flex-shrink` o `flex-grow`.     

Las unidades utilizadas por la propiedad de base flexible son las mismas que las de otras propiedades de tamaño (px, em,%, etc.). El valor cambia automáticamente el tamaño de los elementos según el contenido.        

Establezca el tamaño inicial de las cajas usando una base flexible. Agregue la propiedad CSS de base flexible a #box-1 y #box-2. Asigne a #box-1 un valor de 10em y a #box-2 un valor de 20em.
```css
  #box-1 {
    background-color: dodgerblue;
    height: 200px;
flex-basis:10em;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
flex-basis:20em;
  }
  ```

  ### Usar la propiedad flex Shorthand
Hay un atajo disponible para establecer varias propiedades flexibles a la vez. Las propiedades `flex-grow`, `flex-shrink` y `flex-basis `se pueden configurar juntas mediante la propiedad flex.    

Por ejemplo,`flex: 1 0 10px;` establecerá el elemento en flex-grow: 1;, flex-shrink: 0;, y flex-basis: 10px ;.

### Usar la propiedad de la orden para reorganizar elementos
La propiedad order se usa para decirle a CSS el orden en que aparecen los elementos flexibles en el contenedor flexible. De forma predeterminada, los elementos aparecerán en el mismo orden en que vienen en el HTML de origen. La propiedad toma números como valores y se pueden usar números negativos.  

### Usar la propiedad align-self
La propiedad final de los elementos flexibles es align-self. Esta propiedad le permite ajustar la alineación de cada elemento individualmente, en lugar de configurarlos todos a la vez. Esto es útil ya que otras técnicas de ajuste comunes que utilizan las propiedades CSS flotante, claro y alineación vertical no funcionan en elementos flexibles.   

align-self acepta los mismos valores que align-items y anulará cualquier valor establecido por la propiedad align-items.  

Agregue la propiedad de CSS align-self tanto en #box-1 como en #box-2. Dale a #box-1 un valor de center y dale a #box-2 un valor de flex-end.

