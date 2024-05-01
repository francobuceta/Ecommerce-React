# Ecommerce React - "Pick & Roll Tienda Deportiva"

Este proyecto es una aplicación web desarrollada como estudio para sumar conocimientos y nuevas herramientas. El mismo es un ecommerce donde se puede comprar ropa deportiva de equipos de básquet de la NBA.

Deploy: [Pick & Roll](https://pickandroll.netlify.app/)

![](https://media.giphy.com/media/gQdHWEKSJQ5RlF9roN/giphy.gif)

La finalidad de este sitio es la de ofrecer productos y que el usuario pueda tener una experiencia de compra real (sin pasarela de pagos). Consta de una tienda con 3 secciones donde se pueden ver los distintos productos, los cuales están alojados en una base de datos (Firebase).

El usuario ingresa al sitio y lo primero que observa en pantalla es el Home, donde desde ahí puede ir directamente a la tienda, navegar por las secciones, acceder al carrito de compras, y conocer sobre la empresa.

Una vez ingresado a la tienda puede ver los productos ofrecidos con su respectivo nombre, precio, y stock disponible. Al elegir un producto tendrá acceso a un detalle del mismo en donde podrá seleccionar la cantidad de items que desea (si el stock disponible lo permite), y así guardar ese producto en su carrito personal de compra, el cual se mantendrá guardado aunque el usuario salga del sitio, debido al uso de Local Storage.

Luego de haber agregado los productos deseados, el usuario puede visualizarlos en el componente Cart e interactuar eliminando el que no quiera, o procediendo a terminar la compra.

Finalmente podrá llenar un formulario con sus datos (los cuales en ningún momento serán expuestos, sólo se almacenan en la base de datos), y de esta manera se formaliza la compra, en donde a tráves de una alerta se le proporciona al cliente un número de ID de su compra, y se descuenta la cantidad de stock seleccionada de la base de datos.

## Construido con 🛠️

* HTML5
* CSS3
* JAVASCRIPT
* REACT
* CRA
* FIREBASE

Se utilizaron las siguientes librerías:
* Material UI (aplicado al componente CartWidget para poder crear icono de carrito de compras y badge para indicar la cantidad de productos existentes).
* Bootstrap (clases de estilo).
* FontAwesome (iconos).
* AOS (animaciones aplicadas al Home).
* Firebase (base de datos en la nube).
* React-router-dom (enlazar los componentes).
* React-hook-form (validar los datos del formulario y poder trabajar con ellos).
* React-image-magnify (libreria que realiza un zoom cuando se hace hover sobre la imagen en el componente ItemDetail).
* React-toastify (notificación al agregar producto al carrito).
* SweetAlert (alerta al finalizar la compra).
