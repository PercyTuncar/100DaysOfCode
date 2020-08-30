# Responsive Web Design
Hoy en día, existen muchos tipos de dispositivos que pueden acceder a la web. Van desde grandes ordenadores de sobremesa hasta pequeños teléfonos móviles. Estos dispositivos tienen diferentes tamaños de pantalla, resoluciones y potencia de procesamiento. El diseño web receptivo es un enfoque para diseñar contenido web que responde a las limitaciones de diferentes dispositivos. La estructura de la página y las reglas CSS deben ser flexibles para adaptarse a estas diferencias. En general, diseñe el CSS de la página para su público objetivo. Si espera que la mayor parte de su tráfico provenga de usuarios de dispositivos móviles, adopte un enfoque de "dispositivos móviles primero". Luego agregue reglas condicionales para tamaños de pantalla más grandes. Si sus visitantes son usuarios de escritorio, diseñe para pantallas más grandes con reglas condicionales para tamaños más pequeños. CSS le brinda las herramientas para escribir diferentes reglas de estilo y luego aplicarlas según el dispositivo que muestre la página. Esta sección cubrirá las formas básicas de utilizar CSS para el diseño web responsive.

### Principios de diseño web: crear una Media Query 
Las Media Queries son una nueva técnica introducida en CSS3 que cambia la presentación del contenido en función de diferentes tamaños de  viewports. La viewport es el área visible de un usuario de una página web y es diferente según el dispositivo utilizado para acceder al sitio.

Las Media Queries consisten en un tipo de medio, y si ese tipo de medio coincide con el tipo de dispositivo en el que se muestra el documento, se aplican los estilos. Puede tener tantos selectores y estilos dentro de su media query como desee.

A continuación, se muestra un ejemplo de una media query que devuelve el contenido cuando el ancho del dispositivo es menor o igual a 100 px:
```css
@media (max-width: 100px) { /* CSS Rules */ }
```
y la siguiente media query devuelve el contenido cuando la altura del dispositivo es mayor o igual a 350px:
```css
@media (min-height: 350px) { /* CSS Rules */ }
```
**Recuerde, el CSS dentro de la media query se aplica solo si el tipo de medio coincide con el del dispositivo que se está utilizando.**   

### Hacer una imagen responsive
Hacer que las imágenes respondan con CSS es realmente muy simple. Solo necesita agregar estas propiedades a una imagen:
```css
img {
  max-width: 100%;
  height: auto;
}
```
El **max-width** del 100% asegurará que la imagen nunca sea más ancha que el contenedor en el que se encuentra, y la `height` en `auto` hará que la imagen mantenga su relación de aspecto original.    

### Utilice una imagen Retina para pantallas de mayor resolución    
Con el aumento de dispositivos conectados a Internet, sus tamaños y especificaciones varían, y las pantallas que utilizan pueden ser diferentes externa e internamente. La densidad de píxeles es un aspecto que podría ser diferente en un dispositivo de otros y esta densidad se conoce como píxeles por pulgada (PPI) o puntos por pulgada (DPI). La pantalla más famosa de este tipo es la conocida como "Pantalla Retina" en las últimas computadoras portátiles Apple MacBook Pro y, recientemente, en las computadoras iMac. Debido a la diferencia en la densidad de píxeles entre las pantallas "Retina" y "No Retina", algunas imágenes que no se han creado con una pantalla de alta resolución en mente pueden verse "pixeladas" cuando se procesan en una pantalla de alta resolución.

La forma más sencilla de hacer que sus imágenes aparezcan correctamente en pantallas de alta resolución, como la "pantalla retina" de MacBook Pro, es definir sus valores de ancho y alto como solo la mitad de lo que es el archivo original. A continuación, se muestra un ejemplo de una imagen que solo utiliza la mitad de la altura y el ancho originales:
```css
<style>
  img { height: 250px; width: 250px; }
</style>
```
```html
<img src="coolPic500x500" alt="A most excellent picture">
```
### Hacer que la tipografía sea receptiva
En lugar de usar em o px para ajustar el tamaño del texto, puede usar unidades de visualización para una tipografía receptiva. Las unidades de la ventana gráfica, como los porcentajes, son unidades relativas, pero se basan en diferentes elementos. Las unidades de la ventana gráfica son relativas a las dimensiones de la ventana gráfica (ancho o alto) de un dispositivo, y los porcentajes son relativos al tamaño del elemento contenedor principal.

Las cuatro unidades de ventana gráfica diferentes son:
- **vw** (viewport width): 10vw sería el 10% del ancho de la ventana gráfica.

- **vh** (viewport height): 3vh sería el 3% de la altura de la ventana gráfica.

- **vmin** (viewport minimum): 70vmin sería el 70% de la dimensión más pequeña de la ventana gráfica (alto o ancho).

- **vmax** (viewport maximum): 100vmax sería el 100% de la dimensión más grande de la ventana gráfica (alto o ancho).

Aquí hay un ejemplo que establece una etiqueta de cuerpo al 30% del ancho de la ventana gráfica.
```css
body { width: 30vw; }
```

