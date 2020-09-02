# CSS Grid
CSS Grid le ayuda a crear fácilmente diseños web complejos. Funciona convirtiendo un elemento HTML en un contenedor de cuadrícula con filas y columnas para que coloque los elementos secundarios donde desee dentro de la cuadrícula.

### Create Your First CSS Grid
Convierta cualquier elemento HTML en un contenedor de cuadrícula estableciendo su propiedad de visualización en cuadrícula. Esto le da la posibilidad de utilizar todas las demás propiedades asociadas con CSS Grid.    

Nota: En CSS Grid, el elemento principal se denomina contenedor y sus elementos secundarios se denominan elementos.   

### Add Columns with grid-template-columns
Simplemente crear un elemento de cuadrícula no lo lleva muy lejos. También debe definir la estructura de la cuadrícula. Para agregar algunas columnas a la cuadrícula, use la propiedad grid-template-columnas en un contenedor de cuadrícula como se muestra a continuación:
```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```
Esto le dará a su cuadrícula dos columnas de 50px de ancho cada una. El número de parámetros dados a la propiedad grid-template-columns indica el número de columnas en la cuadrícula, y el valor de cada parámetro indica el ancho de cada columna.

### Add Rows with grid-template-rows
La cuadrícula que creó en el último desafío establecerá el número de filas automáticamente. Para ajustar las filas manualmente, use la propiedad grid-template-rows de la misma manera que usó grid-template-columnas en el desafío anterior.

### Use CSS Grid units to Change the Size of Columns and Rows  
Puede usar unidades absolutas y relativas como px y em en CSS Grid para definir el tamaño de filas y columnas. También puede usar estos:

`fr: ` establece la columna o fila en una fracción del espacio disponible,  

`auto:` establece la columna o fila al ancho o alto de su contenido automáticamente,

`%:` ajusta la columna o fila al porcentaje de ancho de su contenedor.

```css
grid-template-columns: auto 50px 10% 2fr 1fr;
```
Este fragmento crea cinco columnas. La primera columna es tan ancha como su contenido, la segunda columna es 50px, la tercera columna es el 10% de su contenedor, y para las dos últimas columnas; el espacio restante se divide en tres secciones, dos para la cuarta columna y una para la quinta.

### Crear un espacio entre columnas usando grid-column-gap
Hasta ahora, en las cuadrículas que ha creado, las columnas se han apretado entre sí. A veces quieres un espacio entre las columnas. Para agregar un espacio entre las columnas, use la propiedad grid-column-gap como esta:
```css
grid-column-gap: 10px;
```
Esto crea 10 px de espacio vacío entre todas nuestras columnas.

### Crear un espacio entre filas usando grid-row-gap
Puede agregar un espacio entre las filas de una cuadrícula usando grid-row-gap de la misma manera que agregó un espacio entre las columnas en el desafío anterior.
```css
grid-row-gap:5px;
```

### Agregue espacios más rápido con grid-gap
grid-gap es una propiedad abreviada para grid-row-gap y grid-column-gap de los dos desafíos anteriores que es más conveniente de usar. Si el espacio de la cuadrícula tiene un valor, creará un espacio entre todas las filas y columnas. Sin embargo, si hay dos valores, usará el primero para establecer el espacio entre las filas y el segundo valor para las columnas.

### Utilice grid-column para controlar el espaciado
Hasta este punto, todas las propiedades que se han discutido son para contenedores de cuadrícula. La propiedad grid-column es la primera que se utiliza en los elementos de la cuadrícula.

Las líneas horizontales y verticales hipotéticas que crean la cuadrícula se denominan líneas. Estas líneas están numeradas comenzando con 1 en la esquina superior izquierda de la cuadrícula y se mueven hacia la derecha para las columnas y hacia abajo para las filas, contando hacia arriba.

Así es como se ven las líneas para una cuadrícula de 3x3:

![](https://i.ibb.co/Pcz93xr/CSS-grid.jpg)    
Para controlar la cantidad de columnas que consumirá un artículo, puede usar la propiedad grid-column junto con los números de línea en los que desea que el artículo comience y termine.    
Here's an example:
```css
grid-column: 1 / 3;
```
Esto hará que el elemento comience en la primera línea vertical de la cuadrícula de la izquierda y se extienda hasta la tercera línea de la cuadrícula, consumiendo dos columnas. 

### Utilice grid-row para controlar el espaciado
Por supuesto, puede hacer que los elementos consuman varias filas al igual que con las columnas. Usted define las líneas horizontales en las que desea que un elemento comience y se detenga usando la propiedad de fila de cuadrícula en un elemento de cuadrícula.

### Alinear un elemento horizontalmente usando justify-self
En CSS Grid, el contenido de cada elemento se encuentra en un cuadro que se conoce como celda. Puede alinear la posición del contenido dentro de su celda horizontalmente usando la propiedad justify-self en un elemento de la cuadrícula. Por defecto, esta propiedad tiene un valor de estiramiento, que hará que el contenido llene todo el ancho de la celda. Esta propiedad de CSS Grid también acepta otros valores:    
`start`: alinea el contenido a la izquierda de la celda,    
`center`: alinea el contenido en el centro de la celda,    
`end` : alinea el contenido a la derecha de la celda.     

### Alinear un elemento verticalmente usando align-self
Así como puede alinear un elemento horizontalmente, también existe una manera de alinear un elemento verticalmente. Para hacer esto, usa la propiedad align-self en un elemento. Esta propiedad acepta todos los mismos valores que justify-self del último desafío.

### Alinear todos los elementos horizontalmente usando justify-items
A veces, desea que todos los elementos de su cuadrícula CSS compartan la misma alineación. Puede usar las propiedades aprendidas previamente y alinearlas individualmente, o puede alinearlas todas a la vez horizontalmente usando `justify-items` en su contenedor de cuadrícula. Esta propiedad puede aceptar los mismos valores que aprendió en los dos desafíos anteriores, con la diferencia de que moverá todos los elementos de nuestra cuadrícula a la alineación deseada.
```css
justify-items:center;
```
### Alinear todos los elementos verticalmente usando align-items
El uso de la propiedad align-items en un contenedor de cuadrícula establecerá la alineación vertical para todos los elementos de nuestra cuadrícula.

### Divida la cuadrícula en una plantilla de área (Area Template)
Puede agrupar las celdas de su cuadrícula en un área y darle un nombre personalizado al área. Haga esto usando grid-template-areas en el contenedor de esta manera:
```css
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

El código anterior fusiona las tres celdas superiores en un área denominada `header`, las tres celdas inferiores en un área footer y crea dos áreas en la fila del medio; `advert` y `content`. Nota: Cada palabra del código representa una celda y cada par de comillas representa una fila. Además de las etiquetas personalizadas, puede utilizar un punto (.) Para designar una celda vacía en la cuadrícula.


### Colocar elementos en áreas de cuadrícula usando la propiedad grid-area 
Después de crear una plantilla de área para su contenedor de cuadrícula, como se muestra en el desafío anterior, puede colocar un elemento en su área personalizada haciendo referencia al nombre que le dio. Para hacer esto, usa la propiedad grid-area en un elemento como este:
```css
.item1 {
  grid-area: header;
}
```
Esto le permite a la cuadrícula saber que desea que la clase `item1` vaya al área denominada `header`. En este caso, el elemento utilizará toda la fila superior porque toda esa fila se denomina `header`.  

### Usar grid-area sin crear una plantilla de áreas
La propiedad del área de cuadrícula que aprendió en el último desafío se puede usar de otra manera. Si su cuadrícula no tiene una plantilla de áreas para hacer referencia, puede crear un área sobre la marcha para colocar un elemento de la siguiente manera:  
```css
item1 { grid-area: 1/1/2/4; }
```
Esto usa los números de línea que aprendió anteriormente para definir dónde estará el área para este artículo. Los números del ejemplo anterior representan estos valores:
```css
grid-area: línea horizontal para comenzar en / línea vertical para comenzar en / línea horizontal para terminar en / línea vertical para terminar en;
```
Por tanto, el elemento del ejemplo consumirá las filas entre las líneas 1 y 2, y las columnas entre las líneas 1 y 4.

### Reducir la repetición con la función de repetición
Cuando utilizó `grid-template-columns` y `grid-template-rows `para definir la estructura de una cuadrícula, ingresó un valor para cada fila o columna que creó.       

Digamos que quiere una cuadrícula con 100 filas de la misma altura. No es muy práctico insertar 100 valores individualmente. Afortunadamente, hay una mejor manera: usar la función de `repeat` para especificar la cantidad de veces que desea que se repita su columna o fila, seguida de una coma y el valor que desea repetir.

Aquí hay un ejemplo que crearía la cuadrícula de 100 filas, cada fila a 50 px de alto.
```css
grid-template-rows: repeat(100, 50px);
```
También puede repetir varios valores con la función de `repeat` e insertar la función entre otros valores al definir una estructura de cuadrícula. Así es como se ve eso:
```css
grid-template-columns: repeat(2, 1fr 50px) 20px;
```
Esto se traduce en:
```css
grid-template-columns: 1fr 50px 1fr 50px 20px;
```
Nota: El 1fr 50px se repite dos veces seguido de 20px.

### Limitar el tamaño del artículo mediante la función minmax
Hay otra función incorporada para usar con `grid-template-columns` y `grid-template-rows ` llamada `minmax`    

Se usa para limitar el tamaño de los elementos cuando el contenedor de cuadrícula cambia de tamaño. Para hacer esto, necesita especificar el rango de tamaño aceptable para su artículo. Aquí hay un ejemplo: 
```css
grid-template-columns: 100px minmax(50px, 200px);
```
En el código anterior, las `grid-template-columns` están configuradas para crear dos columnas; el primero tiene 100 píxeles de ancho y el segundo tiene un ancho mínimo de 50 píxeles y un ancho máximo de 200 píxeles.

#### Cree diseños flexibles con auto-fill 
La función de repetición viene con una opción llamada  auto-fill. Esto le permite insertar automáticamente tantas filas o columnas del tamaño deseado como sea posible, dependiendo del tamaño del contenedor. Puede crear diseños flexibles al combinar el  auto-fill con minmax, así:
```css
repeat(auto-fill, minmax(60px, 1fr));
```
Cuando el contenedor cambia de tamaño, esta configuración sigue insertando columnas de 60 px y estirándolas hasta que pueda insertar otra. Nota: Si su contenedor no puede caber todos sus artículos en una fila, los moverá a una nueva.

### Cree diseños flexibles utilizando auto-fit
el autoauto-fit ajuste funciona casi de manera idéntica al auto-fill. La única diferencia es que cuando el tamaño del contenedor excede el tamaño de todos los elementos combinados, el auto-fill sigue insertando filas o columnas vacías y empuja sus elementos hacia un lado, mientras que el  auto-fit colapsa esas filas o columnas vacías y estira sus elementos hasta se ajusta al tamaño del recipiente.

Nota: Si su contenedor no puede caber todos sus artículos en una fila, los moverá a una nueva.

### Use Media Queries to Create Responsive Layouts
CSS Grid puede ser una forma fácil de hacer que su sitio sea más receptivo mediante consultas de medios para reorganizar las áreas de la cuadrícula, cambiar las dimensiones de una cuadrícula y reorganizar la ubicación de los elementos.

En la vista previa, cuando el ancho de la ventana gráfica es de 300 px o más, el número de columnas cambia de 1 a 2. El área de publicidad ocupa la columna de la izquierda por completo.

### rear Grids debtro de Grids
Convertir un elemento en una grid solo afecta el comportamiento de sus descendientes directos. Entonces, al convertir un descendiente directo en una grid, tiene una grid dentro de un grid.