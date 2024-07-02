# PRACTICA 5 - BACKEND
# Enunciado
**Práctica 5 - API GraphQL Gestor de Cómics**

Se utilizarán tres tipos principales: Usuario, Comic y Colección de Comics.

**Tipos de Datos:**

1. Usuario:  
- Atributos: `id`, `nombre`, `correoElectrónico`, 'colección de comics.  
- Objetivo: Gestionar información sobre usuarios que pueden tener cómics asociados.

2. Comic:  
- Atributos: `id`, `título`, `descripción`, `formato`.  
- Objetivo: Manejar información individual de cómics.

3. Colección de Comics:  
- Atributos: `id`, `nombre`, `comics` (una lista de cómics pertenecientes a la colección).  
- Objetivo: Administrar colecciones que contienen cómics específicos.

**Funcionalidades Esperadas:**

- Usuarios:  
	- Crear un nuevo usuario.  
	- Obtener información de un usuario por su ID.  
	- Obtener una lista de todos los usuarios.  
	- Actualizar información de un usuario existente.  
	- Eliminar un usuario.

- Cómics:  
	- Crear un nuevo cómic.  
	- Obtener información de un cómic por su ID.  
	- Obtener una lista de todos los cómics.  
	- Actualizar información de un cómic existente.  
	- Eliminar un cómic.

**Encadenado de Información:**

Se esperan consultas GraphQL que permitan obtener información encadenada. Por ejemplo, en una colección de un usuario guardaremos los comics como un array de IDs y después lo devolveremos como un objeto completo gracias a un encadenado.


## Consultas GraphQL

### `usuarioID`

-   Descripción: Recupera un usuario por su ID.
    -   `id`: ID del usuario a recuperar.
    
### `usuariosTodos`

-   Descripción: Recupera todos los usuarios de la base de datos.


### `Coleccion`

-   Descripción: Recupera una colección por su ID.
    -   `id`: ID de la colección a recuperar.

### `comicId`

-   Descripción: Recupera un cómic por su ID.
    -   `id`: ID del cómic a recuperar.

### `comicTodos`

-   Descripción: Recupera todos los cómics de la base de datos.

## Manejo de Errores

-   El servidor utiliza `GraphQLError` de GraphQL para manejar errores y mostrarlo por pantalla.

## Deno Deploy 
-   [prac4-back-doctor-who.deno.dev](https://prac4-back-doctor-who.deno.dev/)