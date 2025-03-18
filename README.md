# Amigo Secreto "Challenge Alura"



[![Licencia](https://img.shields.io/badge/licence-One-orange)](https://www.oracle.com/ar/education/oracle-next-education/)
[![Proyecto](https://img.shields.io/badge/deploy-online-green)](https://tebalv.github.io/Amigo-secreto/)
![](https://dcbadge.limes.pink/api/shield/174238492321120256?style=flat&theme=default&compact=true)

## CONTENIDOS
<img align="right" src="screenshots/gift-icon.png" alt="drawing" width="230"/>

1. [Introduccion](#introduccion)
1. [Funcionalidades](#funcionalidades)
1. [Contenido](#contenido)
1. [Instalacion](#instalacion)
1. [Tecnologia](#tecnologia)
1. [Funciones JS](#funcionesjs)
1. [Funciones CSS](#funcionescss)
1. [Installing](#installing)

## Introduccion

En este proyecto nos encargamos de resolver el Challenge del Amigo Secreto, el cual consistia en el sorteo de un numero de personas. En este caso opte por un diseño minimalista y sencillo. Con una paleta bastante simple en tonos azules.

## Funcionalidades

- **AGREGAR**: El usuario puede agregar nombres presionando la tecla Enter o haciendo clic en el botón 'Añadir'. Antes de agregar un nombre, se valida que el campo no esté vacío; en caso contrario, se mostrará un popup indicando que debe ingresar un valor.
- **ELIMINAR**: En el caso de ingresar un nombre o algun otro valor incorrecto, se puede presionar el boton de eliminar para borrar dicho dato.
- **COMPARAR**: Se realiza una comparación para que no se puedan agregar dos nombres iguales. La misma se indica con un popup.
- **SORTEAR**: El sorteo aleatorio se puede realizar una vez cargado minimo 5 nombres, ya que tiene una validación minima. En este caso se sortea para el primer y segundo puesto. Luego de eso ya se mostrará otro popup indicando el fin del sorteo.
- **REINICIAR**: Por ultimo el boton de reiniciar para realizar un nuevo sorteo.

## Contenido
- `index.html`: Archivo principal donde encontraremos la estructura de toda la pagina web.
- `app.js`: En este archivo encontraremos toda la logica de programación que hace funcionar el sorteo.
- `style.css`: Archivo de estilos, aquí encontraremos los estilos de todos los elementos que se utilizan en la pagina. 
- `screenshots`: Carpeta donde se encuentran las imagenes y gif utilizados en el README.
- `assets`: Carpeta donde se encuentran los iconos utilizados en la pagina web.

## Instalacion
Puedes descargar todo el repositorio como archivo `.zip` o clonarlo: 
```bash
git clone https://github.com/tebalv/Amigo-secreto.git
```

## Codigo
## Funciones JS
  - `mostrarPopup(mensaje, tipo = "info")`: Es responsable de crear y mostrar ventanas emergentes (popups) en la aplicación. Crea dinámicamente un overlay, un contenedor, el mensaje y un botón de cierre.
  - `agregarAmigo()`: Se encarga de añadir un nuevo participante a la lista del sorteo. Obtiene el nombre del input, valida que no esté vacío y que no exista ya en la lista, lo añade al array de amigos, actualiza la lista visual y limpia el campo de entrada.
  - `eliminarAmigo(index)`: Elimina un participante específico de la lista de amigos según su índice en el array. Luego actualiza la lista visual para reflejar el cambio.
  - `actualizarListaAmigos()`: Actualiza la representación visual de la lista de participantes en el HTML. Limpia la lista actual y la reconstruye basándose en el array de amigos, creando para cada uno un elemento de lista con su nombre y un botón para eliminarlo.
  - `sortearAmigo()`: Realiza el sorteo aleatorio de ganadores. Verifica que haya al menos 5 participantes y que no se hayan realizado ya los dos sorteos. Selecciona aleatoriamente un ganador (asegurándose que el segundo ganador sea diferente del primero) y muestra los resultados tanto en la interfaz como en un popup.
  - `reiniciarSorteo()`: Reinicia completamente el sorteo. Vacía el array de amigos, restablece los contadores y variables de ganadores, limpia las listas visuales y muestra un mensaje confirmando el reinicio.

## Funciones CSS
  - `root`:Define variables de color globales usando la metodología de variables CSS personalizadas. Esto permite mantener una paleta de colores consistente y facilita cambios globales de estilo.
  - `*`:Aplica un reset básico a todos los elementos HTML, eliminando márgenes y rellenos predeterminados, y usando box-sizing: border-box para un cálculo más predecible de dimensiones.
  - `body`: Configura el estilo base del documento, usando flexbox para centrar el contenido vertical y horizontalmente. Establece la altura mínima, color de fondo, tipografía y color de texto.
  - `.main-content`: Define el contenedor principal de la aplicación usando flexbox en dirección columna, con ancho máximo, márgenes, bordes redondeados y sombra.
  - `.header-banner`: Estiliza el encabezado con color de fondo, relleno, y flexbox para centrar y organizar su contenido en columna.
  - `.main-title | .section-title`: Implementa una jerarquía tipográfica clara con diferentes tamaños, pesos y familias de fuentes para títulos principales y secundarios.
  - `.input-wrapper | .input-name`: Crea un campo de entrada con botón adjunto usando flexbox, con estilos para estados normales y de foco, y bordes redondeados específicos para crear una unidad visual.
  - `.button-add | .icon-button | .button-draw | .button-reset`: Define varios estilos de botones, rectangulares para acciones principales y circulares con iconos para acciones secundarias. Incluye efectos hover y active para mejorar la interactividad.
  - `.tooltip`: Implementa tooltips personalizados que aparecen al pasar el cursor sobre elementos, usando posicionamiento absoluto, transiciones de opacidad y un pequeño triángulo decorativo con CSS. (Esta opcion se utiliza en los botones de reinicio y sorteo)
  - `.name-list | .result-list`: Estiliza las listas de nombres y resultados con espaciado consistente, eliminando los marcadores de lista predeterminados y añadiendo efectos hover para mejorar la interactividad.
  - ``
  - ``
  - ``
