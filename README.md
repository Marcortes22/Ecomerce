
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
## Categories


https://api_key.mockapi.io/api/v1/:endpoint


#### Get all categories

```http

GET /categories
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |


#### Get category

```http
GET /categories/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `id`      | `string` | **Required**. Id of category to fetch |


#### Create category
```http
POST /categories/
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `id`      | `string` | **Required**. Id of item to save |
| `name`      | `string` | **Required**. name of item to save |
| `image`      | `string` | **Required**. image of item to save |


#### Update category
```http
PUT /categories/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `id`      | `string` | **Optional**. Id of item to update |
| `name`      | `string` | **Optional**. name of item to update |
| `image`      | `string` | **Optional**. image of item to update |



#### Delete category
```http
DELETE /categories/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `id`      | `string` | **Required**. Id of category to delete |



## Products


https://api_key.mockapi.io/api/v1/:endpoint


#### Get all Products

```http
  
GET /products
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |



#### Get all Products by category

```http
  
GET /categories/:id/products
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `id`      | `string` | **Required**. Id of category|



#### Get product by id

```http
GET /categories/:category_id/products/:product_id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `category_id`      | `string` | **Required**. Id of category related with product searched |
| `product_id`      | `string` | **Required**. Id of product searched |


#### Create product
```http
  
POST /categories/:category_id/products
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `category_id`      | `string` | **Required**. Category Id of the new product related |
| `title`      | `string` | **Required**. New product title|
| `price`      | int | **Required**. New product price|
| `Description`      | `string` | **Required**. New product description|
| `images`      | `array<string>` | **Required**. New product images|
| `categoryId`      | `string` | **Required**. New product category|



#### Update product
```http
PUT /categories/:category_id/products/:product_id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `category_id`      | `string` | **Required**. Product's category id to update |
| `product_id`      | `string` | **Required**. Product id  |
| `title`      | `string` | **Optional**. New title product|
| `price`      | int | **Optional**. New price product |
| `Description`      | `string` | **Optional**. New description product |
| `images`      | `array<string>` | **Optional**. New images product |
| `categoryId`      | `string` | **Optional**. New category product |



#### Delete category
```http
  
DELETE /categories/:category_id/products/:product_id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `category_id`      | `string` | **Required**. Product's category id to delete |
| `product_id`      | `string` | **Required**.  Id of Product to delete  |







