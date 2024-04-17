
# Proyecto 1


Este proyecto se centra en el desarrollo de una aplicación web de gestión de registros utilizando React como framework principal. La aplicación se conectará a un API que permitirá realizar operaciones básicas CRUD (Crear, Leer, Actualizar, Eliminar), además de implementar funcionalidades como paginación y búsqueda.


## Authors

- [@marcortes20](https://github.com/marcortes20)
- [@JosePabloSG](https://github.com/JosePabloSG)
- [@Adriana](https://github.com/Adriana-06)
- [@Nazagomez](https://github.com/Nazagomez)
- [@Yeilinnn](https://github.com/Yeilinnn)


## Features

1. Buscar un API que permita realizar todas las operaciones básicas (CRUD) y que permita paginación y búsqueda. 
Es obligatorio ejecutar GET, GET/{id}, POST, PUT, DELETE, aparte ejecutar endpoints GET con parámetros que permita paginación y búsqueda.

2. Crear wireframes para las pantallas de mantenimiento necesarias.

3. Se debe mostrar un listado de los records del API.
   Se deben mostrar en una tabla y al menos mostrar el ID y 4 columnas mas.
   En la última columna deberán mostrar botones para VER, EDITAR y ELIMINAR.
    3.1  La opción VER mostrará más detalles del registro, otras propiedades que no se ven en
    el primer listado. Este detalle se mostrará en otra pantalla. Investigar el uso de React Router.
    3.2 La opción EDITAR redireccionará a otra pantalla donde se mostrará un Formulario que permita
    editar los valores del registro en cuestión y al mismo tiempo mostrará los valores actuales en dichos campos.
    El formulario también deberá presentar un botón de Cancelar o Aceptar.
    El botón Cancelar redireccionará a la vista principal donde esta la tabla y el
    Aceptar guardará los cambios y actualizará el registro.
    3.3 La opción ELIMINAR mostrará un modal de confirmación con el botón Cancelar y Confirmar.
    Cancelar cerrará el modal y no realizará ninguna acción.
    Confirmar borrará el registro, cerrará el modal y el mismo deberá refrescar la tabla mostrando que el registro
    ya no existe.

4. Debe haber un botón de "AGREGAR NUEVO" arriba de la tabla.
    4.1 Este botón mostrará una pantalla con un Formulario para poder agregar un nuevo registro.
    4.2 Debe tener un botón Cancelar el cual al ser presionado redireccionará a la vista principal.
    4.3 Debe tener un botón Aceptar el cual guardará el nuevo registro y al mismo tiempo redireccionará a la vista principal y reflejará que hay un registro nuevo en la tabla.
5. Deberán investigar el uso de React Router para moverse entre pantallas y React Hook Form.

6. Deben incluir paginación a la tabla de registros.

7. Deben incluir un campo de texto que permita realizar una búsqueda sobre los registros mostrados.
