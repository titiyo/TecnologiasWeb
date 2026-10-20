# REST y MVC — según la cátedra (Tecnologías Web, TUARI)

> Contenido condensado a partir de las diapositivas teóricas oficiales de la materia.
> Usar esta terminología y estos ejemplos al explicarle a un alumno, en vez de definiciones genéricas de internet.

## Rest

### Punto de partida: API
La cátedra define una API como "una interfaz que nos da una aplicación para comunicarnos con ella", en el esquema Cliente ↔ API ↔ Programa Servidor.

### Definición de REST
- **REST = REpresentational State Transfer**: "un tipo de arquitectura de desarrollo web que se apoya totalmente en el estándar HTTP".
- Se presenta como "el tipo de arquitectura más natural y estándar para crear APIs para servicios orientados a Internet".
- "La mayoría de las APIs REST usan JSON para comunicarse."

### Principios que remarca la cátedra
- "Se asocian URLs a recursos", a los que se accede o modifica mediante los métodos del protocolo HTTP.
- "Se basa en acciones (llamadas verbos) que manipulan los datos."
- "Se utilizan los errores del protocolo HTTP" (los códigos de estado) para indicar el resultado.

### Verbos HTTP (terminología exacta de la cátedra)
- **POST**: Crear un recurso
- **GET**: Obtener uno o muchos recursos
- **PUT**: Actualizar uno o muchos recursos, "sustituyendo la totalidad de la información anterior por la nueva"
- **DELETE**: Borrar un recurso

### Ejemplo canónico usado en clase (entidad "facturas")
La cátedra usa exactamente este ejemplo para mapear verbo + URL + acción:

| Verbo | URL (ejemplo) | URL genérica | Acción |
|---|---|---|---|
| GET | `/facturas` | `/facturas` | Acceder al listado de facturas |
| POST | `/facturas` | `/facturas` | Crear una factura nueva |
| GET | `/facturas/123` | `/facturas/:id_fact` | Acceder al detalle de una factura |
| PUT | `/facturas/123` | `/facturas/:id_fact` | Editar la factura, sustituyendo toda la información anterior por la nueva |
| DELETE | `/facturas/123` | `/facturas/:id_fact` | Eliminar la factura |

Notar la convención de nombrar el recurso en plural (`/facturas`) y usar `:id_fact` como parámetro de ruta para el identificador — es el patrón exacto que espera la cátedra al pedir endpoints REST.

### Manejo de errores en REST — códigos que lista la cátedra
La diapositiva "Manejo de errores en REST" enumera explícitamente estos códigos de estado HTTP:
- **200 OK** — "Standard response for successful HTTP requests"
- **201 Created**
- **202 Accepted**
- **301 Moved Permanently**
- **400 Bad Request**
- **401 Unauthorised**
- **402 Payment Required**
- **403 Forbidden**
- **404 Not Found**
- **405 Method Not Allowed**
- **500 Internal Server Error**
- **501 Not Implemented**

Al explicar a un alumno qué código devolver en un endpoint, usar preferentemente este listado (son los que el profesor mostró), no la lista completa de HTTP.

### JSON (bloque teórico asociado, dentro de la misma clase)
- **JSON = JavaScript Object Notation**: "una forma de organizar las variables y funciones" que "encapsulan datos y comportamiento"; en JS/TS se describen con formato JSON.
- Un objeto es una combinación de:
  - **Campos o atributos**: almacenan datos (tipo primitivo u otro objeto).
  - **Rutinas o métodos**: llevan a cabo una acción o tarea con los atributos.
- Ejemplo de objeto JSON dado en clase:
  ```js
  { "nombre": "nacho", "materia": "tec-web" }
  ```
  Aclaración explícita del profesor: "No confundir un Objeto JSON con una función: tiene llaves, pero no tiene parámetros, ni código, ni la palabra `function` antes."
- **Tipos de variables** (tríada que usa la cátedra):
  - *Variables simples*: guardan un único valor de tipo primitivo.
  - *Arreglos*: guardan muchos valores del mismo tipo, ordenados, con posición para acceder a cada uno.
  - *Objetos*: guardan un dato complejo compuesto por diferentes datos de diferentes tipos.
- **Valores válidos dentro de un JSON**, con ejemplo textual de la clase:
  ```js
  {
    "cadena": "texto",
    "numero": 5,
    "otroObjeto": {..},
    "arreglo": [5,6,1],
    "verdadero": true,
    "nada": null
  }
  ```
  Remarca: las comillas en el valor son solo para cadenas de texto.
- **Acceso a miembros de un objeto**: se puede usar notación de punto (`dado.valor`) o notación de corchete tipo arreglo (`dado["valor"]`), útil "si 'valor' viene de otra variable". Los miembros se pueden agregar dinámicamente (`dado.valor = 5`).
- **Arreglos de objetos**: forma general `[{ }, { }, ...]`, con acceso por índice, ej. `dados[0].valor`.

---

## MVC

### Definición
- **MVC = Model View Controller**: "Patrón de arquitectura de software utilizado ampliamente en la industria."
- Un patrón "define una estructura esencial para un sistema de software" y "ofrece soluciones estándares a problemas comunes dentro de la ingeniería del software."

### Problema que resuelve (frase exacta)
"Desacopla el código de programas donde toda la lógica, el acceso a datos y la interfaz gráfica se encuentran bajo mismos archivos sin ninguna separación clara." La cátedra lo resume como "SEPARO EN PARTES".

### Los tres componentes y sus responsabilidades exactas
MVC "divide la lógica del programa en tres elementos inter-relacionados", cada uno con responsabilidad propia, trabajando de forma coordinada:

- **MODELO — Acceso a datos**
  - Maneja la comunicación con la base de datos.
  - "Proteger y persistir los datos del usuario."
  - "Asegurar la integridad y consistencia de datos."
  - Provee métodos para: Consultar datos / Insertar-Modificar datos / Borrar datos.

- **VISTA (View) — Interfaz de usuario (Front End)**
  - Genera la interfaz de usuario.
  - "Presentar la información al usuario (front-end)."
  - "Permitir al usuario interactuar con la aplicación."

- **CONTROLADOR (Controller) — Coordinador entre vista y modelo**
  - "Es el intermediario (coordinador) entre la vista y el modelo."
  - "Controla y coordina el flujo de la aplicación."
  - "Obtiene y procesa los pedidos del usuario."
  - "Valida la entrada de datos del usuario."

### Ejemplo de flujo dado en clase (usar tal cual al explicar)
"Cuando una nueva entrada de un usuario llega, el Controller la valida y llama al Model para modificar los datos, luego actualiza la View."

### Ventajas que remarca la cátedra
- Crea un sistema desacoplado.
- Reduce la complejidad de cada parte del sistema.
- Está "alineado al mundo real": separa naturalmente el trabajo de desarrolladores FrontEnd y BackEnd.
- Facilita escalabilidad y mantenimiento.

### Desventajas que remarca la cátedra
- Agrega complejidad a la solución.
- "La estructura predefinida puede no ser lo que estábamos buscando."
- Pregunta que deja planteada la cátedra: "¿Cómo saber cuándo no usarlo?" → "Donde hay elementos que no aplican a la tripla MVC."

### Nota para el asistente de IA
La diapositiva de esta clase presenta MVC en términos genéricos de patrón de arquitectura (Modelo / Vista / Controlador) y NO menciona explícitamente NestJS ni Angular ni hace el mapeo concreto a esos frameworks. Al ayudar con el TP (NestJS + Angular), conviene explicar MVC con esta terminología exacta de la cátedra (Modelo = acceso a datos, Vista = front-end/interfaz, Controlador = coordinador que valida y recibe pedidos del usuario) y luego, aclarando que es una extensión propia y no algo dado literalmente en la diapositiva, mapear: Controller de NestJS ≈ Controlador (recibe/valida pedidos vía rutas REST), Service/Repository de NestJS ≈ Modelo (acceso a datos), componentes de Angular ≈ Vista (interfaz de usuario).

### Referencias que cita la cátedra al cierre
- MVC (Wikipedia)
- Understanding MVC
- MVC — Martin Fowler
- *Patterns of Enterprise Application Architecture* — Martin Fowler, Capítulo 14
