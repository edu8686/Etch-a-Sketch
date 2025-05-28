# Etch-a-Sketch

Grid Colorizer
Una aplicación web interactiva que genera una cuadrícula personalizable de cuadrados. Al pasar el mouse sobre cada uno, estos cambian de color con una opacidad que se reduce gradualmente, creando un efecto visual dinámico.

Características
Generación inicial de una cuadrícula de 16x16 cuadrados.

Botón para establecer la cantidad de cuadrados por lado (hasta un máximo de 100).

Cada cuadrado cambia a un color RGB aleatorio al pasar el mouse.

La opacidad de cada cuadrado disminuye progresivamente con cada interacción.



Cómo usar
Clona el repositorio o descarga los archivos del proyecto.

Asegúrate de que el archivo index.html, styles.css y script.js estén en la misma carpeta.

Abre index.html en tu navegador.

Haz clic en el botón “Choose number of squares” e ingresa un número menor o igual a 100.

Mueve el mouse sobre los cuadrados para ver el efecto.

Archivos principales
index.html: Estructura básica de la app.

styles.css: Define los estilos visuales, incluidos los estilos de los cuadrados.

script.js: Lógica principal que genera la cuadrícula, cambia colores y controla la opacidad.

Notas técnicas
Cada cuadrado se genera dinámicamente con un tamaño proporcional a un espacio total de 960px.

Se usa setProperty para aplicar el color como una variable CSS.

La opacidad se controla de forma decreciente desde 1 hasta 0, reduciéndose en 0.02 con cada evento mouseover.

La clase estilo debe definir el uso de --backgroundColor como fondo en el archivo CSS, por ejemplo: