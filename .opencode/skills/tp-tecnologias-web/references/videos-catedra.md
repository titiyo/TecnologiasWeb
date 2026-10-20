# Videos de la Cátedra – Tecnologías Web (TUARI)

> **Fuente:** canal de YouTube [Tecnologías Web & DevOps - TUARI](https://www.youtube.com/@tecnologiaswebdevops-tuari6957/playlists).
> **Alcance:** este documento cubre únicamente el contenido de **Tecnologías Web** (no incluye la playlist "Operaciones de Desarrollo", que pertenece a la materia DevOps). Para NestJS se usó exclusivamente la playlist **"Nest JS 2025"** (versión vigente), no la playlist anterior "Nest Js".
> **Uso previsto:** este documento está pensado como base de referencias para la skill `tp-tecnologias-web`, de forma que al responder preguntas de alumnos se pueda citar el video de cátedra correspondiente (título + link + timestamp aproximado) además de la documentación oficial.

## Cómo se armó este documento (nota de transparencia)

Para cada uno de los 22 videos se relevó: título, duración, descripción oficial (cuando estaba
disponible) y el transcript/subtítulos del video. En una primera pasada el panel público de
transcripts de YouTube resultó poco confiable durante el procesamiento automático. En una
segunda pasada, una vez que la cátedra agregó subtítulos a todos los videos y habilitó el acceso
a YouTube Studio del canal, se pudo re-procesar **la totalidad de los 22 videos con su
transcript completo**: 21 se extrajeron desde el editor de subtítulos de YouTube Studio
(`studio.youtube.com`, panel "Traducciones"), y 1 ("Introducción a Tecnologías Web 2023", que no
tenía un idioma de pista configurado en Studio) se extrajo desde el panel público de transcript
de la página de YouTube — este último con timestamps reales por segmento; el resto tiene
timestamps aproximados, estimados proporcionalmente a partir del orden de aparición de los temas
en el transcript (marcados explícitamente como tales en cada entrada).

**Importante — acceso de solo lectura:** en ningún momento se guardaron ni publicaron cambios
sobre los subtítulos reales del canal; cada vez que se abrió el editor de subtítulos en YouTube
Studio se cerró eligiendo "Descartar cambios".

Cada entrada indica su nivel de confianza en el campo **Nota**. Ningún resumen reproduce el
transcript verbatim de YouTube; son resúmenes originales, redactados en base al contenido real
de cada clase, con fines de referencia y búsqueda por palabras clave.

---

## Índice de playlists

1. [Teóricas](#teóricas) — fundamentos conceptuales (Web, MVC, REST, HTML/CSS/JS)
2. [Nest JS 2025](#nest-js-2025) — backend con NestJS
3. [Angular](#angular) — frontend con Angular
4. [Contenido Extra](#contenido-extra) — herramientas (VS Code, Postman)
5. [Clases en Vivo](#clases-en-vivo) — grabaciones de clases en vivo (introductorias y control de versiones)

---

## Teóricas

### Introducción a la Web
- **Playlist:** Teóricas
- **URL:** https://www.youtube.com/watch?v=YoINyeYV4G0
- **Duración:** 59:26
- **Material:** slides en Google Slides (linkeadas en la descripción del video)
- **Resumen:** Clase teórica inaugural de la materia. Define Internet como una red descentralizada de redes heterogéneas que permite comunicar dispositivos, y aclara que la Web (World Wide Web) es sólo uno de los servicios que corren sobre Internet (junto con otros como FTP, SMTP/mail, SSH), impulsada por Tim Berners-Lee. Explica qué es un protocolo y ubica a HTTP como el protocolo característico de la Web. Recorre la historia y evolución de la Web: Web 1.0 (páginas estáticas, contenido fijo), Web 2.0 (contenido dinámico y editable por el usuario — blogs, wikis, redes sociales; nace Google en el '98, Blogger/WordPress/Wikipedia/LinkedIn) y menciona la Web 3.0 (más generadores de contenido y contenido personalizado). Repasa estadísticas de crecimiento de Internet y el corrimiento del consumo desde desktop hacia mobile, la "guerra de navegadores" y el rol de Internet Explorer con estándares propios no compatibles, la estandarización vía W3C, y tecnologías no estándar que compitieron y desaparecieron (Flash, Silverlight) hasta la consolidación de HTML5. Explica la diferencia entre contenido estático (siempre el mismo archivo para una URL) y dinámico (el servidor ejecuta código, consulta una base de datos y genera la respuesta al vuelo), y menciona estadísticas de tecnologías de servidor más usadas (PHP, .NET/C#, Node/JavaScript — esta última la que se usa en la materia). Cierra con una introducción al protocolo HTTP: estructura de un request/response (headers, body), códigos de estado (200 OK) y los métodos/verbos HTTP (GET, POST, PUT, DELETE, y mención de HEAD, CONNECT, OPTIONS, TRACE, PATCH).
- **Keywords:** Internet, World Wide Web, protocolos (HTTP, FTP, SMTP, SSH), Tim Berners-Lee, Web 1.0/2.0/3.0, contenido estático vs. dinámico, W3C, guerra de navegadores, Flash/Silverlight, HTML5, tecnologías de servidor (PHP, .NET, Node), métodos/verbos HTTP (GET/POST/PUT/DELETE), request/response, status code, headers.
- **Timestamps clave (aproximados, estimados a partir del orden del transcript):**
  - 0:00 Qué es Internet, qué es la Web, protocolos (HTTP y otros)
  - 8:00 Historia de la Web: Web 1.0 (páginas estáticas)
  - 12:00 Web 2.0: contenido editable, nace Google, blogs/wikis/redes sociales
  - 18:00 Web 3.0: más generadores de contenido, redes sociales, contenido personalizado
  - 24:00 Estadísticas de crecimiento (usuarios, sitios, redes sociales)
  - 30:00 Corrimiento del consumo hacia dispositivos móviles
  - 36:00 Guerra de navegadores, Internet Explorer y estándares no compatibles, rol de la W3C
  - 42:00 Tecnologías no estándar (Flash, Silverlight) y consolidación de HTML5
  - 48:00 Contenido estático vs. dinámico, tecnologías de servidor más usadas
  - 54:00 Introducción a HTTP: request/response, headers, status codes, métodos/verbos
  - 58:00 Cierre y despedida
- **Nota:** resumen basado en el transcript completo del video (extraído desde YouTube Studio); los timestamps son aproximados, estimados a partir del orden del transcript.

### Model View Controller
- **Playlist:** Teóricas
- **URL:** https://www.youtube.com/watch?v=lcNKJ4DDT-M
- **Duración:** 45:45
- **Material:** slides en Google Slides (linkeadas en la descripción del video)
- **Resumen:** Clase teórico-práctica sobre el patrón Model-View-Controller (MVC), presentado como el patrón de arquitectura de software más usado de la industria y en relación directa con lo visto en NestJS. Explica las tres capas: el Model (acceso a datos: base de datos o, en los ejemplos de la materia, un arreglo simple), la View (interfaz de usuario) y el Controller (intermediario: recibe la entrada del usuario, la valida, le pide datos al Model y actualiza/selecciona la View). Remarca la importancia de no mezclar responsabilidades entre capas (ej. filtrar datos en el Controller cuando esa lógica debería estar en el Model). Muestra el diagrama del flujo típico: el usuario pide una URL, el Controller identifica el método correspondiente, consulta al Model, y éste devuelve los datos que se pasan a la View. Hace una demo práctica en vivo: clona desde GitHub un repositorio con una aplicación Express (ya que NestJS normalmente se usa como API pura, sin vistas server-side), explora la carpeta de `views`/templates generada por `express-generator`, y modifica una vista para mostrar datos pasados desde el controller vía `res.render(vista, { datos })`, ilustrando en código la separación Modelo/Vista/Controlador con renderizado server-side. Cierra subiendo el código de la demo a un branch de Git llamado `mvc` (`git checkout -b mvc`, commit y push) para que los alumnos puedan explorarlo.
- **Keywords:** MVC, Model-View-Controller, patrón de diseño, arquitectura de software, separación de responsabilidades, Model, View, Controller, Express, express-generator, views/templates, res.render, renderizado server-side, Git branch.
- **Timestamps clave (aproximados, estimados a partir del orden del transcript):**
  - 0:00 Introducción: MVC como patrón de arquitectura y su relación con NestJS
  - 5:00 Las tres capas (Model, View, Controller) y sus responsabilidades
  - 9:00 Importancia de no mezclar responsabilidades entre capas (ejemplos)
  - 14:00 Diagrama del flujo típico de una request en MVC
  - 20:00 Demo: clonar el repositorio Express de ejemplo
  - 26:00 Exploración de la carpeta de views/templates (express-generator)
  - 32:00 Modificar una vista y pasarle datos desde el controller (`res.render`)
  - 38:00 Repaso de lo mostrado en la demo
  - 41:00 Subir el código a un nuevo branch de Git (`mvc`) y cierre
- **Nota:** resumen basado en el transcript completo del video (extraído desde YouTube Studio); los timestamps son aproximados, estimados a partir del orden del transcript.

### Rest
- **Playlist:** Teóricas
- **URL:** https://www.youtube.com/watch?v=IiSfU1oR_m0
- **Duración:** 26:52
- **Material:** slides en Google Slides (linkeadas en la descripción del video)
- **Resumen:** Clase teórica sobre REST, presentada con el ejemplo de que apps conocidas (Twitter, Facebook, Instagram) usan REST "por detrás". Explica qué es una API y luego una API REST en particular: los verbos/métodos HTTP como operaciones sobre recursos (POST crea, GET obtiene uno o varios recursos, PUT actualiza, DELETE borra), aclarando que estos verbos son de HTTP y no exclusivos de REST. Explica que REST se apoya también en los códigos de estado HTTP para comunicar el resultado (200 OK, 404 not found, 401, etc.) además del body de la respuesta. Dedica la segunda mitad a JSON como formato para representar datos complejos: por qué una variable simple o un array no alcanza para modelar un recurso con varios campos, la sintaxis de un objeto JSON (llaves, pares clave-valor), diferencia entre variables simples y objetos, y cómo se accede a un array de objetos (ej. `data[0].valor`). Cierra conectando teoría con práctica: muestra en código el arreglo de cervezas usado en las clases prácticas de NestJS/Angular como ejemplo concreto de un array de objetos JSON.
- **Keywords:** REST, API, verbos/métodos HTTP (GET/POST/PUT/DELETE), códigos de estado HTTP (200, 404, 401), JSON, objetos JavaScript, arrays de objetos, recurso, caso Brewery/Beer.
- **Timestamps clave (aproximados, estimados a partir del orden del transcript):**
  - 0:00 Introducción: REST en apps conocidas (Twitter, Facebook, Instagram), qué es una API
  - 5:00 Verbos HTTP aplicados a recursos (POST/GET/PUT/DELETE) y su relación con REST
  - 8:00 Códigos de estado HTTP (200, 404, 401, etc.)
  - 12:00 Por qué una variable simple/array no alcanza para modelar un recurso complejo
  - 15:00 JSON: sintaxis de objetos (llaves, pares clave-valor)
  - 20:00 Arrays de objetos JSON y acceso a sus valores (`data[0].campo`)
  - 24:00 Ejemplo concreto: el arreglo de cervezas usado en las clases prácticas
- **Nota:** resumen basado en el transcript completo del video (extraído desde YouTube Studio); los timestamps son aproximados, estimados a partir del orden del transcript. Es la teoría de referencia que citan directamente las clases prácticas de NestJS ("Controllers en Nest JS", "Rest + Filtrado") y de Angular ("Angular - Rest", "Angular - Rest Crear Recursos").

### Introducción a HTML, CSS y JS
- **Playlist:** Teóricas
- **URL:** https://www.youtube.com/watch?v=qB-IHzr1IGM
- **Duración:** 1:22:53
- **Material:** slides en Google Slides (linkeadas en la descripción del video)
- **Resumen:** Clase teórico-práctica introductoria a las tres tecnologías base del frontend (la más extensa de la playlist Teóricas), en tres bloques. Bloque HTML: presenta el front-end como la parte de la aplicación que interactúa con el usuario, la estructura básica de un documento (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`), y ejercicios en vivo agregando encabezados (`h1`-`h6`), párrafos, listas y tablas (`thead`/`tbody`, `tr`/`td`). Bloque CSS: cómo enlazar una hoja de estilos externa (`link rel="stylesheet"`) y selectores/propiedades básicas (color, tamaño de fuente) aplicadas a los encabezados y párrafos ya creados. Bloque JavaScript: breve historia y popularidad del lenguaje (Node.js, actividad en GitHub), formularios HTML e inputs, validación nativa HTML5 vs. JavaScript, `prompt()` para pedir datos al usuario, variables, concatenación de strings, y manipulación del DOM (`getElementById`, actualizar contenido) para mostrar un saludo dinámico en la página. Cierra con una introducción a los eventos del DOM (click, mousedown, copy) y a la programación orientada a eventos, contrastándola con la programación secuencial, con un ejercicio de "adivinar el orden de ejecución". Remarca la buena práctica de separación de responsabilidades: JS no embebido en el HTML, CSS no mezclado en el archivo JS.
- **Keywords:** HTML, CSS, JavaScript, frontend, DOCTYPE/html/head/body, encabezados y párrafos, listas, tablas (thead/tbody), hoja de estilos (link/CSS), selectores CSS, Node.js, formularios HTML5, prompt(), variables, concatenación de strings, DOM (getElementById), eventos del DOM, programación orientada a eventos, separación de responsabilidades.
- **Timestamps clave (aproximados, estimados a partir del orden del transcript):**
  - 0:00 Introducción: qué es el front-end, estructura básica de un documento HTML
  - 8:00 Encabezados y párrafos; estilos por defecto del navegador
  - 16:00 CSS: enlazar la hoja de estilos y aplicar propiedades básicas
  - 25:00 Listas
  - 33:00 Tablas (thead/tbody, filas y celdas)
  - 41:00 Introducción a JavaScript: historia, popularidad, Node.js
  - 45:00 Formularios HTML y validación (HTML5 vs. JavaScript)
  - 50:00 `prompt()`: pedir datos al usuario, variables
  - 58:00 Concatenación de strings
  - 62:00 Manipulación del DOM: `getElementById` y actualización de contenido
  - 70:00 Eventos del DOM (click, mousedown, copy, etc.)
  - 74:00 Programación orientada a eventos vs. secuencial; ejercicio de orden de ejecución
  - 80:00 Cierre: separación de responsabilidades (JS no embebido en HTML, CSS no en JS)
- **Nota:** resumen basado en el transcript completo del video (extraído desde YouTube Studio, el más largo del canal); los timestamps son aproximados, estimados a partir del orden del transcript.

---

## Nest JS 2025

### Introducción a Nest Js
- **Playlist:** Nest JS 2025
- **URL:** https://www.youtube.com/watch?v=m74AFuBEmhY
- **Duración:** 45:00
- **Resumen:** Clase introductoria a NestJS como framework backend de la materia. Explica qué es un framework, por qué se usa NestJS (mismo paradigma/TypeScript que Angular), y presenta el panorama general cliente-backend-DB. Repasa prerrequisitos (Node.js, npm), qué es un CLI y cómo instalar/usar el CLI de Nest (`nest new`, `nest generate`). Introduce el caso de uso guía de la materia: una app de cervecería (Brewery) con entidad Beer, y mapea los métodos HTTP (GET, POST, PATCH, DELETE) a acciones CRUD sobre esa entidad. Crea el proyecto con `nest new brewery`, recorre la estructura generada (package.json, tsconfig, eslint/prettier, node_modules, dist, src, test), corre la app (Hello World), modifica el AppController/AppService, explica `start` vs `start:dev` (watch mode), y cierra subiendo el proyecto a GitHub (git init/commit/push).
- **Keywords:** NestJS, framework, TypeScript, Node.js, npm, CLI (nest new / nest generate), arquitectura REST, AppModule, Controller, Service, Provider, métodos HTTP (GET/POST/PATCH/DELETE), package.json, node_modules, watch mode (start:dev), Git/GitHub, caso de uso "Brewery" (cervecería), entidad Beer.
- **Timestamps clave:**
  - 0:00 Introducción y objetivos de la materia
  - 2:00 ¿Qué es un framework?
  - 4:39 Arquitectura general (backend NestJS + frontend Angular)
  - 7:39 Prerrequisitos (Node.js, npm)
  - 9:38 ¿Qué es un CLI?
  - 11:47 Instalación del CLI de Nest
  - 12:44 Comandos básicos (nest new, nest generate)
  - 13:41 Caso de uso: app de cervecería (Brewery)
  - 15:00 Métodos HTTP (GET, POST, DELETE, PATCH) aplicados al recurso Beer
  - 17:59 Creación del proyecto (`nest new brewery`)
  - 20:09 Recorrido de archivos generados
  - 33:52 Demo: modificar Hello World (AppController/AppService)
  - 37:49 start vs start:dev (watch mode)
  - 40:43 Documentación oficial de NestJS
  - 40:51 Subir el proyecto a GitHub
- **Nota:** resumen basado en el transcript completo del video.

### Controllers en Nest JS
- **Playlist:** Nest JS 2025
- **URL:** https://www.youtube.com/watch?v=vWwrd2eCsBU
- **Duración:** 1:08:35
- **Resumen:** Clase práctica sobre Controllers en NestJS, sobre el proyecto Brewery/Beer. Explica el patrón MVC como marco conceptual: el controller es la "vía de acceso" que recibe el request, decide qué hacer y coordina con el modelo (datos) y la vista; remite a la clase teórica de MVC y a la de REST. Explica el decorator `@Controller('bears')` y cómo Nest define la ruta base del controlador, y el mecanismo de ruteo: cada método dentro del controller se distingue por su decorator HTTP (`@Get`, `@Post`, `@Delete`, `@Patch`), no por la URL. Explica cómo NestJS integra el ruteo dentro del propio controller (a diferencia de frameworks como Ruby on Rails que usan una tabla de rutas aparte). Repasa la anatomía de un request/response HTTP (método, protocolo, host, headers, body/payload, status code 200/403/404). Introduce `@Param()` para leer parámetros de la URL y `@Body()` para leer el payload de un POST/PATCH. Con ayuda de GitHub Copilot en VS Code, crea en vivo el `BeersController` completo: `GET /bears` (findAll), `GET /bears/:id` (findOne), `DELETE /bears/:id`, `POST /bears` (create, con ID autogenerado por `Math.random()`), y `PATCH /bears/:id` (update). Introduce los DTOs (Data Transfer Objects) como clases que definen la forma exacta de los datos que viajan en el body (`CreateBeerDto`, `UpdateBeerDto`, `BeerDto`), generados con `nest generate class`. Prueba todos los endpoints con Thunder Client (extensión de VS Code, alternativa a Postman). Cierra haciendo commit y push del controller, el módulo y los DTOs a GitHub.
- **Keywords:** NestJS, Controllers, @Controller, @Get, @Post, @Delete, @Patch, routing/ruteo, decorators, MVC, REST, @Param, @Body, payload, request/response HTTP, status code, DTO (CreateBeerDto/UpdateBeerDto/BeerDto), Thunder Client, Postman, GitHub Copilot, Math.random, Git commit/push, recurso Beer, cervecería (Brewery).
- **Timestamps clave:**
  - 0:00 Introducción a los Controllers y su rol como "vía de acceso" (relación con MVC)
  - 3:42 Cómo se define un controller (`@Controller('bears')`) y la ruta base
  - 4:54 Routing: cómo Nest decide qué método llamar según el verbo HTTP
  - 6:30 Introducción a REST y tabla de endpoints del BeersController
  - 11:49 Cómo recibir parámetros de la URL (`@Param`)
  - 14:05 Cómo viajan los datos en el body/payload de un request (`@Body`)
  - 15:32 Anatomía de un request y un response HTTP (método, headers, status code)
  - 20:25 Demo en código: creación del BeersController con el CLI de Nest
  - 23:00–34:00 Implementación en vivo de GET (findAll, findOne), DELETE y prueba con Thunder Client
  - 34:30 Implementación de POST (create) con ID autogenerado
  - 45:01 Introducción a los DTOs (Data Transfer Objects)
  - 49:01 Creación de CreateBeerDto, UpdateBeerDto y BeerDto con el CLI
  - 1:01:19 Armado de la colección de requests en Thunder Client
  - 1:05:08 Commit y push a GitHub del controller, módulo y DTOs
- **Nota:** resumen basado en el transcript completo del video.

### Nest JS Providers & Services
- **Playlist:** Nest JS 2025
- **URL:** https://www.youtube.com/watch?v=mIqcHllXd7Y
- **Duración:** 1:20:54
- **Repo de referencia:** github.com/Unicen-Tuari/brewery (en la descripción)
- **Resumen:** Clase teórico-práctica sobre Providers y Services en NestJS. Explica qué es un provider (una instrucción registrada en el módulo para que el sistema de inyección de dependencias sepa crear instancias de una clase) con la analogía de una inyección médica. La mayoría de los componentes inyectables son services y repositories. Explica la buena práctica de mantener los controllers "delgados" y mover la lógica de negocio a services. Muestra cómo se registra un provider en el array `providers` del módulo y cómo se inyecta en el constructor del controller, explicando en paralelo cómo se vería lo mismo escrito "a mano" con `new`. Compara interfaces vs. clases/DTOs (Nest recomienda clases porque las interfaces no soportan decorators de validación), y hace un refactor en vivo para usar una `BeerInterface` en lugar de instanciar el DTO con `new`. Crea el `BeersService` con el CLI (`nest g s`), con un array privado de cervezas en memoria como estado inicial, e implementa `findAll`, `findOne` (con `Array.find`), `remove` (con `Array.splice`), `create` (recibe un `CreateBeerDto`) y `update` (recibe un `UpdateBeerDto` parcial). Refactoriza el controller para que delegue todos los métodos al `BeersService` inyectado. Al probar con Thunder Client encuentra un bug real en vivo y usa la clase para enseñar a debuggear con `console.log`, mostrando que el array en memoria se reinicia cada vez que el watch mode recarga el server — motivo por el cual, más adelante en la materia, se pasa a persistencia real en base de datos.
- **Keywords:** NestJS, Provider, Service, @Injectable, inyección de dependencias, BeerService, BeerController, BeerInterface, DTO vs. interface, CreateBeerDto, UpdateBeerDto, Array.find, Array.splice, función anónima/callback, CLI de Nest (nest generate service), debugging con console.log, watch mode y persistencia en memoria.
- **Timestamps clave:**
  - 0:00 Qué es un provider y la inyección de dependencias (analogía médica)
  - 3:55 Buenas prácticas: controllers "delgados", lógica en providers
  - 5:54 Cómo se registra un provider en el módulo y se inyecta en el constructor
  - 12:25 Qué son los services y su responsabilidad
  - 16:07 Interfaces vs. DTOs/clases para dar forma a los datos
  - 27:28 Parte práctica: refactor del BeerDto a BeerInterface
  - 34:14 Creación del BeersService con el CLI de Nest
  - 39:11 Implementación de findOne con Array.find y función de predicado
  - 45:11 Implementación de remove con Array.splice
  - 49:06 Implementación de create y update usando CreateBeerDto/UpdateBeerDto
  - 1:00:01 Refactor del controller para delegar todo al BeersService
  - 1:02:04 Pruebas con Thunder Client y debugging en vivo de un bug
- **Nota:** resumen basado en el transcript completo del video, cubriendo hasta aproximadamente el minuto 66 de 80; el tramo final (últimos ~14 min) corresponde por patrón de la clase al cierre del debugging y commit del código.

### Rest + Filtrado en Nest JS
- **Playlist:** Nest JS 2025
- **URL:** https://www.youtube.com/watch?v=qezMe7BawK0
- **Duración:** 52:15
- **Resumen:** Clase que repasa REST y explica por qué el filtrado NO debe implementarse como parte de la URL/recurso (ej. `/bears/lager` estaría mal) sino mediante **query parameters** (`/bears?style=lager`), para no romper la convención REST. Explica también cómo usar query params para ordenar resultados (`sortBy`, `order`) y para paginar (`page`, `limit`). En la parte práctica, crea un `BearsQueryDto` con `@Query()` en el controller, e implementa en el `BeersService.findAll()`: filtrado por `style` (con `Array.filter`, comparación case-insensitive), ordenamiento por cualquier campo con `Array.sort()` (función comparadora, invirtiendo el signo para orden descendente) y paginación con `Array.slice()` (calculando offset a partir de `page` y `limit`, con `limit` default de 10). Depura en vivo un bug de paginación cuando no se pasa `limit`. Cierra con un repaso general de todos los endpoints REST del CRUD de Beers, mostrando cada request/response con Postman/Thunder Client, y hace commit y push del código.
- **Keywords:** REST, query parameters, filtrado, ordenamiento (sortBy/order), paginación (page/limit), Array.filter, Array.sort, Array.slice, case-insensitive, BearsQueryDto, @Query, NestJS, CRUD completo (GET/POST/PUT/PATCH/DELETE), Brewery/Beer.
- **Timestamps clave:**
  - 0:00 Qué es REST y por qué el filtrado no debe ir en la URL como recurso
  - 5:25 Diseño de un endpoint de filtrado por estilo usando query parameters
  - 10:37 Ordenar resultados por un criterio (sortBy/order) con query parameters
  - 12:44 Paginación de resultados con query parameters (page/limit)
  - 17:07 Parte práctica: creación del BearsQueryDto y uso de @Query() en el controller
  - 22:12 Implementación del filtrado por estilo (Array.filter, case-insensitive)
  - 32:54 Implementación del ordenamiento (Array.sort, función comparadora)
  - 38:31 Implementación de la paginación (Array.slice)
  - 44:15 Debugging en vivo de un bug de paginación sin límite
  - 47:44 Repaso general de todos los endpoints REST del CRUD de Beers
- **Nota:** resumen basado en el transcript completo del video.

---

## Angular

### Angular - Introducción
- **Playlist:** Angular
- **URL:** https://www.youtube.com/watch?v=uzqWh7dC6Yk
- **Duración:** 27:16
- **Resumen:** Primera clase del track de frontend de la materia. Presenta Angular como framework de JavaScript open source mantenido por Google para crear y mantener SPAs (Single Page Applications), lo compara brevemente con React, y explica por qué se elige Angular en la materia (mismo paradigma orientado a TypeScript que ya vieron en NestJS). Explica la diferencia entre una página web tradicional (cada click dispara un request y recarga toda la página) y una SPA (se descarga toda la aplicación en la carga inicial y luego solo se piden datos puntuales, actualizando partes del DOM sin refrescar), apoyándose en diagramas cliente-servidor. Menciona brevemente el Router de Angular, las directivas y los componentes. Repasa la historia de Angular: AngularJS (2010, JavaScript, hasta ~1.7) y la reescritura completa como Angular (versión 2 en adelante, TypeScript, versiones major anuales), mucho más performante. Presenta el proyecto guía del frontend: una tienda de cervezas (Brewery) con sus requerimientos (listado de cervezas, agregar al carrito, eliminar del carrito). En la práctica crea el primer proyecto con el Angular CLI (`ng new`, routing, SCSS), recorre la estructura generada (`angular.json`, `package.json`, `app.module`, `app-routing.module`, `app.component`/`app-root`, `index.html`, `environments`), corre el proyecto con `ng serve` en `localhost:4200`, y demuestra el hot reload modificando el `AppComponent`.
- **Keywords:** Angular, framework, JavaScript/TypeScript, SPA (Single Page Application), Google, frontend, AngularJS vs Angular, historia de Angular, Angular CLI (ng new, ng serve), app.module, app-routing.module, AppComponent, app-root, hot reload, proyecto Brewery (cervecería), carrito de compras.
- **Timestamps clave:**
  - 0:08 Introducción al nuevo track de frontend con Angular
  - 0:29 Qué es Angular y comparación con otros frameworks
  - 1:39 Qué es una SPA y diferencia de experiencia con apps tradicionales
  - 2:19 Diagrama de una página web tradicional
  - 3:20 Diagrama de una SPA
  - 5:16 Cómo maneja Angular las rutas y actualiza el DOM sin refrescar toda la página
  - 6:07 Mención del Angular Router, directivas y componentes
  - 6:36 Historia: AngularJS (2010) vs. la reescritura completa a Angular (TypeScript)
  - 9:20 Requisitos técnicos para arrancar
  - 10:48 Presentación del proyecto de la materia: tienda de cervezas (Brewery)
  - 11:26 Creación del primer proyecto con el Angular CLI (`ng new`, routing, SCSS)
  - 15:23 Recorrido de la estructura de archivos generada
  - 19:00 `package.json` y los scripts (`ng serve`, `ng build`, watch mode)
  - 20:16 Recorrido del código fuente (`src`, `app`, `assets`, `environments`)
  - 22:53 Cómo arranca la aplicación: `main.ts`, `AppModule`, `AppRoutingModule`
  - 23:43 `AppComponent`, su selector `app-root` y la relación con `index.html`
  - 24:48 Demo en vivo: modificar el componente inicial y ver el hot reload
  - 27:06 Cierre y actividad propuesta
- **Nota:** resumen basado en el transcript completo del video.

### Angular - Components
- **Playlist:** Angular (también en Teóricas, es el mismo video)
- **URL:** https://www.youtube.com/watch?v=a9aJj9n0fTg
- **Duración:** 1:02:54
- **Resumen:** Clase central sobre Components en Angular, sobre el proyecto Brewery. Repasa el diagrama de arquitectura general de Angular (Module que agrupa Components, Services, Templates, Directivas, Metadata e Injector de servicios) y lo compara con lo visto en NestJS. Define qué es un componente: piezas pequeñas y reutilizables que se componen entre sí, siguiendo un "diseño atómico" (átomos → moléculas → organismos → templates → páginas). Un componente tiene al menos tres partes: lógica (TypeScript), template (HTML) y estilos (CSS, opcionales), definidas mediante `@Component` con un `selector`. Explica que un componente nuevo debe declararse en el módulo (`declarations`), y que el componente raíz se registra en `bootstrap`. Introduce la interpolación (`{{ }}`). En la práctica: arma el layout general de la home page con la grilla de Bootstrap (logo, menú, footer, listado de cervezas, carrito), distingue componentes estáticos de dinámicos. Crea el `BeerListComponent` con el CLI (`ng generate component`), arma primero una tabla HTML estática hardcodeada y luego migra ese contenido a un objeto `beer` mostrado vía interpolación. Agrega una imagen, primero interpolando el `src`, y luego introduce el Property Binding (`[src]`, `[alt]`) como la forma correcta. Demuestra que los estilos CSS de un componente quedan encapsulados y no se filtran a otros componentes. Cierra proponiendo como ejercicio crear el `CartComponent`.
- **Keywords:** Angular, Arquitectura Angular, Module, Component, Service, Directive, Template, Metadata, Injector, diseño atómico, @Component, selector, ng generate component, declarations, bootstrap, interpolación ({{ }}), Property Binding ([src]/[alt]), Bootstrap (grilla, filas y columnas), encapsulamiento de estilos CSS por componente, BeerListComponent, CartComponent (ejercicio), Git/GitHub.
- **Timestamps clave:**
  - 0:08 Introducción y arquitectura general de Angular
  - 1:19 Qué es un componente: piezas reutilizables que componen la aplicación
  - 2:38 Las tres partes de un componente: lógica (TS), template (HTML), estilos (CSS)
  - 3:05 Diseño atómico (átomos, moléculas, organismos, templates, páginas)
  - 4:06 El decorator @Component, el selector y cómo se declara en el módulo
  - 6:53 Manos a la obra sobre el AppComponent existente
  - 7:33 Setup de Git/GitHub del proyecto
  - 11:15 Interpolación ({{ }}): mostrar una propiedad del componente en el HTML
  - 13:36 Diseño del layout general con la grilla de Bootstrap
  - 14:20 Identificar componentes estáticos vs. dinámicos
  - 14:59 Armado de la homepage con Bootstrap (header, menú, footer)
  - 37:07 Creación del BeerListComponent con el CLI de Angular
  - 39:30 Tabla HTML estática hardcodeada de cervezas
  - 44:23 Migración de los datos hardcodeados a un objeto `beer`, con interpolación
  - 48:03 Agregar una imagen a la cerveza (primero por interpolación)
  - 54:04 Property Binding ([src], [alt]) como forma correcta frente a la interpolación
  - 57:56 Demo en vivo: encapsulamiento de estilos CSS por componente
  - 1:00:04 Cierre: ejercicio propuesto (crear el CartComponent) y commit/push final a GitHub
- **Nota:** resumen basado en el transcript completo del video.

### Angular - Interfaces & Directivas
- **Playlist:** Angular
- **URL:** https://www.youtube.com/watch?v=XH5VMnLI2ps
- **Duración:** 43:24
- **Resumen:** Clase sobre dos herramientas de TypeScript/Angular, sobre el proyecto Brewery. Interfaces: repasa que TypeScript verifica tipos y que, para datos más complejos, se puede definir una `interface` (`export interface Beer { name, style, price, stock }`) que documenta y valida la forma de un objeto. En la práctica, crea la interfaz `Beer`, tipa el objeto cerveza existente con ella, y lo convierte en un array `Beer[]` con varias cervezas de prueba (datos mock, con imágenes locales en `assets`). Directivas: explica que son la forma de generar HTML dinámicamente, distinguiendo las estructurales (`*ngFor`, `*ngIf`) de las de atributo (`ngClass`, `ngStyle`). Usa `*ngFor` para iterar el array de cervezas y generar una fila por cada una. Usa `*ngIf` para mostrar "sin stock" cuando el stock es 0. Agrega una clase CSS condicional con `ngClass` para resaltar con un recuadro verde las cervezas "en oferta". Introduce los Pipes (menciona el pipe de fecha) y hace una demo del `currency` pipe para formatear el precio como pesos argentinos. Cierra subiendo el código a GitHub, y agrega un tramo extra de debugging en vivo resolviendo un bug real al combinar `*ngFor` y `*ngIf` en el mismo elemento, solucionado envolviendo el contenido en un `<ng-container>`.
- **Keywords:** TypeScript, interface, tipado, Beer interface, mock data (datos falsos), Angular, directivas, directivas estructurales vs. de atributo, *ngFor, *ngIf, ngClass, pipes, currency pipe, ng-container, debugging en vivo, DOM, template.
- **Timestamps clave:**
  - 0:08 Introducción: directivas e interfaces
  - 0:46 TypeScript y tipado: tipos primitivos vs. interfaces para datos complejos
  - 3:13 Refactor del componente para usar una interfaz Beer
  - 6:11 Corrección de tipos en el mock para que cumpla la interfaz
  - 7:26 Conversión de la cerveza única en un array de cervezas (mock data)
  - 12:12 Completa el mock con varias cervezas e imágenes en assets
  - 14:12 Qué es una directiva: estructurales vs. de atributo
  - 15:21 Uso de *ngFor para iterar el array de cervezas en la tabla
  - 19:43 Uso de *ngIf para mostrar "sin stock" cuando el stock es 0
  - 24:47 Marcar con recuadro verde las cervezas en oferta (clase CSS condicional)
  - 28:13 Uso de ngClass para aplicar clases dinámicamente según una propiedad
  - 30:21 Qué son los pipes: funciones para transformar valores en el template
  - 31:37 Ejemplo con el currency pipe para formatear el precio en pesos argentinos
  - 38:10 Cierre de directivas e interfaces; commit y push del código
  - 40:19 Troubleshooting en vivo: bug al combinar *ngFor y *ngIf, solución con <ng-container>
- **Nota:** resumen basado en el transcript completo del video.

### Angular - Events and Binding
- **Playlist:** Angular
- **URL:** https://www.youtube.com/watch?v=KHZG6afbzgk
- **Duración:** 35:15
- **Resumen:** Clase práctica sobre Data Binding en Angular, sobre el proyecto Brewery/Beer. Repasa el flujo de datos entre componente (TypeScript) y vista (HTML) en sus 3 formas: de JS a HTML (property binding, ya usado en clases previas), de HTML a JS (event binding, capturar eventos del usuario) y la combinación de ambas con Two-Way Data Binding. Encara un ejercicio guiado: agregar a cada fila del listado de cervezas botones de "+" y "−" para incrementar/decrementar una cantidad (pensando en el carrito de compras), implementando `upQuantity()`/`downQuantity()` enganchados a los botones con `(click)`. Agrega validaciones para que la cantidad no baje de 0 ni supere el stock disponible. Introduce el Two-Way Data Binding con `ngModel` (requiere `FormsModule`) y la sintaxis "banana en una caja" `[(ngModel)]="beer.quantity"`. Sobre ese input agrega una validación adicional al evento `(focusout)`, alertando si el valor no es válido. Menciona brevemente que el objeto evento (`$event`) puede pasarse como parámetro a la función manejadora, y que `event.preventDefault()` sirve para evitar acciones por defecto del navegador (típicamente en formularios). Cierra la clase subiendo los cambios a GitHub.
- **Keywords:** Angular, Data Binding, Property Binding, Event Binding, Two-Way Data Binding, ngModel, FormsModule, banana in a box, (click), (focusout), $event, preventDefault, validación de stock, carrito de compras (cantidad +/-), Git commit.
- **Timestamps clave (aproximados, estimados a partir del orden del transcript):**
  - 0:00 Introducción y repaso del flujo de datos: las 3 formas de binding
  - 4:00 Ejercicio: agregar botones +/− de cantidad al listado de cervezas
  - 7:00 Implementación de `upQuantity()` / `downQuantity()` enganchados con `(click)`
  - 10:00 Validación de límites: cantidad no menor a 0 ni mayor al stock
  - 14:00 Two-Way Data Binding con `ngModel` (`FormsModule`, sintaxis `[(ngModel)]`)
  - 19:00 Validación adicional sobre el evento `(focusout)` del input de cantidad
  - 24:00 El objeto evento (`$event`) como parámetro de la función manejadora
  - 27:00 `preventDefault()` para evitar acciones por defecto (ej. en formularios)
  - 30:00 Cierre: subir los cambios a GitHub y despedida
- **Nota:** resumen basado en el transcript completo del video (extraído desde YouTube Studio); los timestamps son aproximados, estimados a partir del orden del transcript.

### Angular - Routing
- **Playlist:** Angular
- **URL:** https://www.youtube.com/watch?v=GDpg7WRuuSM
- **Duración:** 32:23
- **Resumen:** Clase sobre el sistema de ruteo (Routing) de Angular, sobre el proyecto Brewery/Beer. Explica conceptualmente por qué una SPA necesita manejar el routing del lado del cliente: a diferencia de una app tradicional, en Angular el router asocia cada URL a un componente y sólo actualiza la parte correspondiente de la vista, sin recargar la página ni pegarle al backend. Define la estructura de rutas del proyecto: home (`/`, listado de cervezas + carrito) y about (`/about`, datos de contacto). En vivo: crea un componente padre `BeersComponent` que agrupa el HTML de la lista y el carrito, crea el componente `AboutComponent`, y prueba ambos alternando manualmente cuál se muestra antes de tener el router funcionando. Configura las rutas en `app-routing.module.ts` (array de `Routes`, `RouterModule`), agrega el `<router-outlet>` en el AppComponent, prueba navegando manualmente por la URL, y finalmente reemplaza los links `<a>` del menú por `routerLink` para que la navegación no recargue la página. Cierra subiendo el código a GitHub, con algunos contratiempos en vivo al organizar los commits.
- **Keywords:** Angular, Routing, SPA, RouterModule, Routes, app-routing.module, router-outlet, routerLink, navegación sin recarga, componente padre (BeersComponent), AboutComponent, Git commit.
- **Timestamps clave (aproximados, estimados a partir del orden del transcript):**
  - 0:00 Introducción: por qué una SPA necesita manejar el routing
  - 5:00 Definición de las rutas del proyecto: home (lista + carrito) y about (contacto)
  - 8:00 Creación del componente padre `BeersComponent`
  - 13:00 Creación del componente `AboutComponent`
  - 16:00 Configuración de rutas en `app-routing.module.ts` (`Routes`, `RouterModule`)
  - 20:00 `<router-outlet>`: dónde se renderiza la vista activa
  - 23:00 Navegación con `routerLink` en el menú
  - 27:00 Cierre del tema routing y comentarios finales
  - 28:00 Subir el código a GitHub (commit, con troubleshooting en vivo)
- **Nota:** resumen basado en el transcript completo del video (extraído desde YouTube Studio); los timestamps son aproximados, estimados a partir del orden del transcript.

### Angular - Rest
- **Playlist:** Angular
- **URL:** https://www.youtube.com/watch?v=kB59jNuwU9Y
- **Duración:** 37:59
- **Resumen:** Clase clave de conexión entre frontend y backend, sobre el proyecto Brewery/Beer. Explica por qué el mock ya no tiene sentido y hay que consumir un servicio REST real; usa el backend NestJS ya construido en clases anteriores (`npm run start:dev`, puerto 3000, prueba `GET localhost:3000/beers`). Resuelve el problema de CORS entre `localhost:4200` (Angular) y `localhost:3000` (Nest), habilitándolo en `main.ts` con `app.enableCors()`. En Angular: genera un servicio `BeerDataService` (`ng generate service`), importa `HttpClientModule` e inyecta `HttpClient` por constructor. Explica el concepto de Observable con una analogía y crea `getAll()` que retorna un `Observable<Beer[]>` haciendo `this.http.get(url)`, mencionando los otros verbos (`get`, `post`, `put`, `patch`, `delete`). Modifica `BeerListComponent` para eliminar el mock, inyectar el servicio y llamar a `getAll().subscribe(...)` en `ngOnInit`. Prueba end-to-end: crea una cerveza desde Postman y verifica que aparece al refrescar Angular. Identifica y empieza a resolver un mismatch entre los campos que devuelve el backend y los que espera la interfaz `Beer` del frontend.
- **Keywords:** Angular, HttpClient, HttpClientModule, REST, CORS (enableCors), BeerDataService, ng generate service, Observable, subscribe, getAll(), Postman, backend NestJS, mock vs. API real, mismatch de interfaz (Beer).
- **Timestamps clave (aproximados, estimados a partir del orden del transcript):**
  - 0:00 Introducción: por qué dejar el mock y consumir un servicio REST real
  - 5:00 Repaso del backend NestJS ya construido, prueba de `GET /beers`
  - 8:00 CORS: qué es y cómo habilitarlo en NestJS (`app.enableCors()`)
  - 12:00 Creación del `BeerDataService` en Angular
  - 15:00 Import de `HttpClientModule` e inyección de `HttpClient`
  - 19:00 Explicación de Observables (analogía) y creación de `getAll()`
  - 24:00 Consumo del servicio en `BeerListComponent` (reemplazo del mock, `subscribe`)
  - 28:00 Prueba end-to-end: crear una cerveza desde Postman y verla en la app
  - 32:00 Ajuste del mismatch entre los campos del backend y la interfaz `Beer`
- **Nota:** resumen basado en el transcript completo del video (extraído desde YouTube Studio); los timestamps son aproximados, estimados a partir del orden del transcript.

### Angular - Rest Crear Recursos
- **Playlist:** Angular
- **URL:** https://www.youtube.com/watch?v=icgP4QE6H1s
- **Duración:** 38:35
- **Código de referencia:** github.com/Unicen/tec-web-bre... (repo Brewery, mencionado en la descripción)
- **Resumen:** Clase que continúa la integración de Angular con el backend REST vista en "Angular - Rest", enfocada en la creación de recursos (delete/update quedan para más adelante). Crea un `CreateBeerComponent` y lo incluye dentro del `BeerListComponent`. Arma un formulario HTML (basado en un ejemplo de Bootstrap) con inputs para nombre, estilo, precio, stock y oferta. Agrega el método `create()` al `BeerDataService` (`HttpClient.post<Beer>()`) y lo prueba primero con un objeto hardcodeado. Debuggea en vivo un bug de ruta relativa de la imagen por default. Introduce los Reactive Forms de Angular (`ReactiveFormsModule`): crea un `FormGroup` con un `FormControl` por campo, conecta el template con `[formGroup]` y `formControlName`, y ata el submit (`(ngSubmit)`) a un método `createBeer()`. El resto de la clase se dedica a que la lista de cervezas se actualice sola tras crear una, sin recargar la página: mueve el estado de la lista al `BeerDataService` como un array interno expuesto vía un observable/subject al que los componentes se suscriben, de forma que al crear una cerveza el service actualiza el array y cualquier componente suscripto se re-renderiza automáticamente. Cierra creando cervezas de prueba para demostrar que la lista se actualiza sola.
- **Keywords:** Angular, HttpClient, REST, POST, creación de recursos, Reactive Forms, FormGroup, FormControl, ReactiveFormsModule, formGroup, formControlName, ngSubmit, Observable/Subject compartido, actualización reactiva de la UI, BeerDataService, debugging en vivo, backend NestJS, Brewery/Beer.
- **Timestamps clave (aproximados, estimados a partir del orden del transcript):**
  - 0:00 Introducción: en esta clase solo se implementa "crear" (create)
  - 0:46 Creación del CreateBeerComponent con el CLI de Angular
  - 1:21 Armado del formulario HTML (inputs de nombre, estilo, precio, stock, oferta)
  - 3:13 Se agrega el método create() al BeerDataService (HttpClient.post)
  - 4:19 Suscripción al observable del POST (next/error)
  - 5:30 Prueba del create() con un objeto hardcodeado antes de conectar el formulario
  - 7:42 Bug: ruta relativa de la imagen por default
  - 8:33 Introducción a los Reactive Forms como forma correcta de manejar formularios
  - 9:24 Creación del FormGroup con un FormControl por campo
  - 11:06 Conexión del (ngSubmit) al método createBeer()
  - 12:47 Planteo del problema: la lista no se actualiza sola tras crear una cerveza
  - 15:20 Implementación de un observable/subject interno en BeerDataService
  - 17:01 Refactor del BeerListComponent para suscribirse al observable del service
  - 18:43 Debugging en vivo de la suscripción reactiva
  - 28:02 Funciona: la lista se actualiza sola al crear una cerveza nueva
  - 29:43 Cierre e invitación a dejar preguntas en los comentarios
- **Nota:** resumen basado en el transcript completo del video (extraído desde YouTube Studio); los timestamps son aproximados porque el transcript de Studio no expone el tiempo exacto de cada línea de forma accesible en bloque.

### Angular - Carrito de Compras
- **Playlist:** Angular
- **URL:** https://www.youtube.com/watch?v=usitjozxrDU
- **Duración:** 24:33 (video más visto de la playlist, 8.6K vistas)
- **Resumen:** Clase práctica que arma la vista del carrito de compras sobre el proyecto Brewery en Angular. Genera el `CartComponent` (`ng generate component cart`). Construye el HTML del carrito con varios intentos de layout (float, container + row de Bootstrap) hasta lograr una tabla prolija con columnas cerveza/cantidad/precio unitario/total y un botón "Comprar". Reutiliza la estructura del listado de cervezas: importa el array de cervezas de ejemplo y itera con `*ngFor` mostrando `beer.name`, `beer.quantity` y `beer.price` (con el mismo pipe de moneda). Calcula el total por línea (cantidad × precio unitario) y, en el constructor, recorre todas las cervezas para acumular el total general del carrito. Menciona que la comunicación entre componentes (para que el carrito reaccione a cambios reales del listado) se va a ver en la próxima clase (Services & Dependency Injection). Cierra indicando que el carrito queda completo a nivel de vista.
- **Keywords:** Angular, Carrito de compras, CartComponent, ng generate component, *ngFor, pipe de moneda, cálculo de totales, Bootstrap (row/container), diseño de tabla HTML/CSS.
- **Timestamps clave (aproximados, estimados a partir del orden del transcript):**
  - 0:00 Introducción y creación del `CartComponent`
  - 3:00 Búsqueda de referencias de diseño y armado del HTML del carrito (tabla)
  - 8:00 Ajustes de layout (pruebas con float, container/row de Bootstrap)
  - 13:00 Reutilización del listado de cervezas: `*ngFor` sobre el array para las filas del carrito
  - 17:00 Cálculo del total por línea y del total general en el constructor
  - 21:00 Mención de comunicación entre componentes (tema de la próxima clase)
  - 22:00 Cierre y despedida
- **Nota:** resumen basado en el transcript completo del video (extraído desde YouTube Studio); los timestamps son aproximados, estimados a partir del orden del transcript.

### Angular - Services & Dependency Injection (Comunicando componentes)
- **Playlist:** Angular
- **URL:** https://www.youtube.com/watch?v=ZAEsr_qi6tU
- **Duración:** 47:40
- **Resumen:** Última clase teórico-práctica de Angular del cuatrimestre, enfocada en conectar el listado de cervezas con el carrito: que al hacer click en "+" la cerveza se agregue al carrito. Explica el concepto de Service como almacenamiento centralizado de datos compartido entre componentes, y de Dependency Injection como el patrón por el cual Angular crea y entrega una única instancia (singleton) de un servicio a quien lo pida por constructor. Crea el `BeerCartService` e inyecta el servicio de red ya existente (`BeersDataService`). Primera implementación ingenua: `push()` de la cerveza al arreglo del carrito cada vez que se hace click en "+" (funciona pero duplica entradas en vez de acumular cantidad). Introduce en profundidad el patrón Observable/reactivo con `BehaviorSubject` de RxJS: el servicio mantiene una lista privada envuelta en un `BehaviorSubject` y expone públicamente sólo el `Observable` derivado (`asObservable()`). El `CartComponent` se suscribe a ese observable para mantener su lista sincronizada automáticamente. Detecta en vivo el bug de la implementación ingenua (agregar la misma cerveza dos veces crea dos filas) y empieza a resolverlo con `findIndex` y `splice`. Aclara que ir más allá (persistir el carrito, sincronizarlo con el backend) queda fuera del alcance de la materia. Cierra anunciando que la próxima clase (la última) será sobre Pipes personalizados.
- **Keywords:** Angular, Services, Dependency Injection, @Injectable, comunicación entre componentes, BeerCartService, BehaviorSubject, Observable, asObservable, subscribe, patrón singleton, findIndex, splice, estado compartido, RxJS.
- **Timestamps clave (aproximados, estimados a partir del orden del transcript):**
  - 0:00 Introducción: conectar listado de cervezas y carrito mediante servicios
  - 5:00 Qué es un Service y qué es la Dependency Injection (patrón singleton)
  - 10:00 Creación del `BeerCartService` e inyección en los componentes
  - 15:00 Primera implementación (naive): `push()` al agregar una cerveza al carrito
  - 20:00 Introducción a Observable/reactivo: `BehaviorSubject`, variable privada + `Observable` público
  - 27:00 Suscripción del `CartComponent` al observable del servicio para sincronizar la lista
  - 33:00 Bug detectado en vivo: cervezas duplicadas en el carrito en vez de sumar cantidad
  - 37:00 Solución con `findIndex` y `splice` (queda planteada, no totalmente cerrada)
  - 43:00 Aclaración de alcance y cierre/despedida
- **Nota:** resumen basado en el transcript completo del video (extraído desde YouTube Studio); los timestamps son aproximados, estimados a partir del orden del transcript.

### AngularJS - Deployment
- **Playlist:** Angular
- **URL:** https://www.youtube.com/watch?v=LWF72UQn4hI
- **Duración:** 25:13
- **Resumen:** Clase de cierre de la parte de Angular, dedicada al deploy a producción del frontend (proyecto Brewery) y su conexión con el backend NestJS ya deployado en Heroku. Repasa cómo están organizados los archivos de entorno de Angular (`environment.ts` para desarrollo local, `environment.prod.ts` para producción), cada uno con una variable `apiUrl` que apunta al backend correspondiente, y cómo el build de producción (`ng build --configuration production`) genera el reemplazo de archivos (`fileReplacements` en `angular.json`) y compila todo en `dist`. Elige Netlify por su plan gratuito para publicar el resultado. En vivo: crea una cuenta en Netlify, conecta el repositorio de GitHub, y deja que Netlify detecte automáticamente el comando de build y el directorio de publicación (`dist`). El primer deploy revela un problema (subcarpeta extra con el nombre del proyecto), que corrige ajustando el "publish directory". El sitio queda publicado, pero al probarlo detecta que la app sigue apuntando a `localhost:3000` en lugar del backend de Heroku: usa esto como debugging en vivo para mostrar cómo Angular resuelve las variables de entorno en build time (hay que usar siempre `environment.apiUrl`, nunca hardcodear la URL), revisa la pestaña Network del navegador, corrige el código, hace commit/push y dispara un nuevo deploy, verificando que el sitio ya consume correctamente el backend en Heroku. Como extra, muestra cómo configurar un subdominio personalizado en Netlify.
- **Keywords:** Angular, Deployment, Netlify, Heroku, environment.ts/environment.prod.ts, apiUrl, fileReplacements, ng build --configuration production, dist, hosting de sitios estáticos, integración continua (GitHub → Netlify), dominio personalizado, debugging en vivo (Network tab), variables de entorno.
- **Timestamps clave (aproximados, estimados a partir del orden del transcript):**
  - 0:00 Introducción: vamos a hacer el deploy de la app Angular (Brewery)
  - 1:10 Revisión de los archivos de entorno (environment.ts / environment.prod.ts) y la variable apiUrl
  - 2:30 Cómo se genera el build de producción y qué contiene la carpeta dist
  - 2:58 Objetivo: hostear el sitio estático en una plataforma como Netlify
  - 4:00 Crear cuenta en Netlify (plan gratuito)
  - 5:00 Importar el proyecto desde GitHub y autorizar el acceso al repositorio
  - 5:38 Netlify detecta automáticamente la configuración de build
  - 6:50 Dominio por defecto de Netlify y opción de dominio personalizado
  - 7:51 Bug: la carpeta de build tiene una subcarpeta extra con el nombre del proyecto
  - 8:45 Corrección del publish directory y nuevo deploy
  - 10:22 Bug: la app deployada sigue apuntando a localhost:3000
  - 11:51 Debugging: cómo Angular reemplaza environment.ts por environment.prod.ts en el build
  - 13:20 Corrección de la URL base del servicio y verificación con la pestaña Network
  - 14:49 Commit y push del fix a GitHub
  - 16:18 Nuevo deploy exitoso: el frontend consume el backend de Heroku correctamente
  - 17:47 Configuración de un subdominio personalizado en Netlify
  - 19:16 Verificación final end-to-end
  - 24:30 Cierre: resumen de los pasos clave del deploy
- **Nota:** resumen basado en el transcript completo del video (extraído desde YouTube Studio); los timestamps son aproximados, estimados a partir del orden del transcript.

**Ojo:** el video usa Heroku para el backend, pero el TP actual pide desplegar el backend en
**Render** (Heroku dejó de tener plan gratuito). El concepto que enseña el video sigue
aplicando tal cual: nunca hardcodear la URL del backend, siempre leerla de
`environment.apiUrl`/variables de entorno, y revisar la pestaña Network si algo no conecta —
pero los pasos concretos de creación de cuenta y configuración de la plataforma van a diferir.
Para eso, remití al alumno a `references/docs-oficiales.md` o a la documentación de Render.

---

## Contenido Extra

### VS Code + Postman
- **Playlist:** Contenido Extra
- **URL:** https://www.youtube.com/watch?v=NS2niHufj5U
- **Duración:** 28:13
- **Material:** slides en Google Slides (linkeadas en la descripción del video)
- **Resumen:** Clase de contenido extra sobre herramientas de trabajo (no obligatoria). Primera mitad sobre VS Code: qué es (editor multiplataforma de Microsoft), instalación, y un recorrido por extensiones recomendadas: ESLint (resalta errores de estilo/sintaxis según reglas configuradas), Prettier (formatea el código automáticamente al guardar), GitLens (muestra inline quién hizo cada cambio y cuándo, integra diffs de Git), un tema de iconos de archivos para distinguir tipos de archivo de un vistazo, REST Client (extensión para mandar requests HTTP tipo Postman directamente desde VS Code), y un tema oscuro (One Dark Pro). Segunda mitad sobre Postman: instalación, creación de requests (GET, POST, PATCH, DELETE) contra el backend NestJS (`localhost:3000/beers`), armado del body en JSON, organización en Collections, exportar una collection a un archivo para compartirla/subirla al repositorio, variables de entorno, la posibilidad de autenticar requests (Basic Auth o tokens, fuera del alcance de la materia), y cómo inspeccionar headers de request/response y códigos de estado. Cierra recomendando Postman por su uso extendido en la industria.
- **Keywords:** VS Code, extensiones (ESLint, Prettier, GitLens, REST Client, iconos de archivo, One Dark Pro), formateo automático, Postman, Collections, exportar/importar collection, variables de entorno, Basic Auth, headers, códigos de estado HTTP, testing de APIs REST, backend NestJS.
- **Timestamps clave (aproximados, estimados a partir del orden del transcript):**
  - 0:00 Introducción: herramientas recomendadas para el resto de la materia
  - 2:00 VS Code: qué es, instalación, ventajas frente a un editor de texto simple
  - 6:00 Extensión ESLint (resaltado de errores de estilo)
  - 10:00 Extensión Prettier (formateo automático al guardar)
  - 13:00 Extensión GitLens (blame/historial inline)
  - 16:00 Tema de iconos de archivos y tema oscuro (One Dark Pro)
  - 18:00 Extensión REST Client como alternativa a Postman
  - 19:00 Postman: instalación y creación de requests (GET/POST/PATCH/DELETE)
  - 23:00 Body en JSON, Collections, exportar/compartir la collection
  - 26:00 Autenticación (Basic Auth, tokens) y headers/códigos de estado
- **Nota:** resumen basado en el transcript completo del video (extraído desde YouTube Studio); los timestamps son aproximados, estimados a partir del orden del transcript.

---

## Clases en Vivo

### Introducción a Tecnologías Web (clase en vivo)
- **Playlist:** Clases en Vivo
- **URL:** https://www.youtube.com/watch?v=27X_GzegoOk
- **Duración:** 38:47 (video "Unlisted")
- **Material:** slides en Google Slides (linkeadas en la descripción del video)
- **Resumen:** Grabación de la clase en vivo de bienvenida/presentación de la materia. El docente (Nacho Jonás, de Trenque Lauquen, egresado de Sistemas ~2003, +10 años de industria) se presenta y ubica la materia dentro del plan de estudios. Repasa los objetivos: dar una introducción amplia (no profunda) a un conjunto de tecnologías/roles del desarrollo web para que, en un trabajo futuro, puedan entender de qué habla un developer (deployment, servidores, API, logs) aunque no se dediquen a eso. Explica el formato de cursada: videos grabados semanales para ver antes/en paralelo a la clase en vivo, más consultas y trabajo colaborativo. Presenta el diagrama "iceberg" cliente-servidor (front-end visible vs. back-end/infraestructura oculta) como mapa mental de lo que van a construir. Menciona el trabajo práctico integrador: arrancan con un caso guiado (la cervecería/Brewery), pero más adelante los alumnos van a poder proponer su propio tema de proyecto. Insiste en la importancia del trabajo en equipo, pedir ayuda, y la comunicación como habilidad tan importante como la técnica. Cierra con comentarios informales sobre el tema recurrente de la cerveza en la materia.
- **Keywords:** presentación de la materia, clase en vivo, plan de estudios, modalidad de cursada, diagrama cliente-servidor (iceberg), trabajo práctico integrador, trabajo en equipo, comunicación, proyecto Brewery/cervecería.
- **Timestamps clave (aproximados, estimados a partir del orden del transcript):**
  - 0:00 Presentación del docente y su trayectoria
  - 5:00 Objetivos de la materia y ubicación en el plan de estudios
  - 12:00 Modalidad de cursada: videos semanales + clases en vivo
  - 17:00 Diagrama cliente-servidor ("iceberg") como mapa de lo que se va a construir
  - 23:00 Trabajo práctico integrador: caso guiado (cervecería) y proyecto propio más adelante
  - 29:00 Importancia del trabajo en equipo y la comunicación
  - 35:00 Cierre informal: chistes sobre la temática cervecera de la materia
- **Nota:** resumen basado en el transcript completo del video (extraído desde YouTube Studio); los timestamps son aproximados, estimados a partir del orden del transcript.

### Tecnologías Web - Sistemas de Control de Versiones (clase en vivo)
- **Playlist:** Clases en Vivo
- **URL:** https://www.youtube.com/watch?v=a_tIVYlUEu4
- **Duración:** 1:13:40
- **Material:** slides en Google Slides (linkeadas en la descripción del video)
- **Resumen:** Clase en vivo, muy interactiva, sobre Sistemas de Control de Versiones y Git/GitHub. Arranca preguntando qué es un sistema de control de versiones y por qué se usa, y contrasta control centralizado vs. distribuido. Repasa brevemente la historia de Git (2005) y su carácter open source, comparándolo con SVN. Instalación de Git en Windows/Linux/Mac (git-scm.com, apt-get, brew), usando tanto la consola como la interfaz gráfica de VS Code. Usa una metáfora central: el `add` es "poner todo arriba de la mesa", el `commit` es "cerrar la caja con una etiqueta" (mensaje de commit), y el `push`/`pull` es "mandar/recibir la caja por correo" hacia/desde el repositorio remoto (GitHub). Hace una demo en vivo completa: `git init`/clonar, `git status`, `git add`, `git commit -m`, `git push`, y `git log`. Explica la diferencia entre autenticarse con usuario/contraseña, HTTPS o clave SSH, y el control de acceso a un repositorio. Muestra la integración de Git dentro de VS Code (cambios, conflictos de merge, íconos de estado) y hace una demo de Live Share. Cierra organizando a los alumnos en grupos de trabajo para las prácticas grupales de la materia.
- **Keywords:** Sistemas de Control de Versiones, VCS, Git, GitHub, control centralizado vs. distribuido, open source, git init/add/commit/push/pull/status/log, metáfora de la caja y el correo, SSH vs. HTTPS, clave pública/privada, control de acceso, integración Git en VS Code, conflictos de merge, Live Share, grupos de trabajo.
- **Timestamps clave (aproximados, estimados a partir del orden del transcript):**
  - 0:00 Preguntas iniciales: experiencia previa con VCS, qué es y para qué sirve
  - 7:00 Control centralizado vs. distribuido
  - 15:00 Historia de Git (2005), open source, comparación con SVN
  - 22:00 Instalación de Git (Windows/Linux/Mac); consola vs. interfaz gráfica
  - 30:00 Conceptos básicos: directorio de trabajo, `git status`
  - 38:00 Metáfora "caja y correo" para add/commit/push/pull
  - 45:00 Demo en vivo: `git add`, `git commit -m`, `git push`, `git log`
  - 53:00 Autenticación: usuario/contraseña, HTTPS vs. clave SSH
  - 62:00 Control de acceso a un repositorio remoto
  - 67:00 Git integrado en VS Code: cambios, conflictos de merge, Live Share
  - 71:00 Cierre: organización de grupos de trabajo para las prácticas
- **Nota:** resumen basado en el transcript completo del video (extraído desde YouTube Studio); los timestamps son aproximados, estimados a partir del orden del transcript.

### Introducción a Tecnologías Web 2023 (clase en vivo)
- **Playlist:** Clases en Vivo
- **URL:** https://www.youtube.com/watch?v=qp4LDVQY2IY
- **Duración:** 54:33 (video "Unlisted")
- **Material:** slides en Google Slides (linkeadas en la descripción del video)
- **Resumen:** Grabación informal de la clase en vivo de bienvenida edición 2023, en formato de grupo muy reducido (charla conversacional entre el docente Alejandro y uno o dos alumnos, con Nacho Jonás ausente ese día). Repasa el objetivo de la materia: entender de punta a punta cómo funciona una página web, desde el browser hasta el servidor y la base de datos, con un diagrama simple de request/response sobre HTTP. Compara el front-end (Angular, mencionando React como equivalente) con el back-end (NestJS sobre Node.js), aclarando que ambos lados del stack se programan en JavaScript/TypeScript. Discute la logística de la cursada: dos "tracks" de video semanales (teórico y práctico), la clase en vivo de consulta de los jueves, y la posibilidad de hacerla presencial o virtual. Explica el trabajo práctico especial: armar un proyecto propio con front-end + back-end sobre una tabla de datos, y hacer el deploy a un servidor real (con una digresión sobre CI/CD, revisión de código y el rol de infra/DevOps vs. desarrollo). Menciona que el examen final es oral. Da indicaciones de instalación de Node.js/npm, y discute setups de hardware. Explica brevemente las licencias open source (MIT vs. copyleft). Toca el tema del inglés técnico en la industria. Cierra coordinando la comunicación por mail.
- **Keywords:** presentación de la materia (edición 2023), clase en vivo, cliente-servidor, HTTP request/response, Angular vs. React, NestJS/Node.js, modalidad de cursada (presencial/virtual), trabajo práctico especial, deploy/CI-CD, DevOps vs. desarrollo, instalación de Node/npm, licencias open source (MIT, copyleft), inglés técnico.
- **Timestamps clave (reales, extraídos del panel de transcript de YouTube):**
  - 1:18 Objetivo de la materia: entender de punta a punta cómo funciona una página web
  - 2:00 Cliente/browser vs. backend/base de datos
  - 4:16 Frontend (Angular/React) vs. backend (NestJS)
  - 5:19 Diagrama de request/response sobre HTTP
  - 10:13 Modalidad de cursada: videos semanales (teórico + práctico) y clase en vivo de los jueves
  - 12:32 Discusión sobre presencialidad vs. virtualidad
  - 17:38 Trabajo práctico especial: proyecto front + back sobre una tabla de datos
  - 19:31 Deploy/despliegue, CI/CD y buenas prácticas en empresas
  - 22:01 Rol de infra/DevOps vs. desarrollo
  - 24:12 Examen final oral
  - 36:27 Instalación de Node.js/npm (documentación oficial, ejemplo Debian)
  - 39:54 Licencias open source (MIT vs. más restrictivas)
  - 43:05 Inglés técnico en la materia y la industria
  - 45:36 Cierre y coordinación por mail
- **Nota:** resumen basado en el transcript completo obtenido del panel público de YouTube (no vía Studio, ya que este video no tenía un idioma de pista configurado allí); los timestamps citados son los reales del panel de transcript, no estimaciones.

---

## Índice rápido por palabra clave

- **NestJS / framework backend:** Introducción a Nest Js, Controllers en Nest JS, Nest JS Providers & Services, Rest + Filtrado en Nest JS
- **Controllers / rutas HTTP:** Controllers en Nest JS
- **Services / Providers / inyección de dependencias (backend):** Nest JS Providers & Services
- **DTOs:** Nest JS Providers & Services, Controllers en Nest JS
- **Angular / framework frontend:** Angular - Introducción, Angular - Components
- **Components / arquitectura Angular / diseño atómico:** Angular - Components
- **TypeScript / interfaces:** Angular - Interfaces & Directivas
- **Directivas (*ngIf, *ngFor, ngClass, ng-container):** Angular - Interfaces & Directivas
- **Pipes (currency):** Angular - Interfaces & Directivas
- **Data Binding / Event Binding / Two-Way Binding / ngModel:** Angular - Events and Binding
- **Routing (Angular):** Angular - Routing
- **HttpClient / Observables / consumo de API (Angular):** Angular - Rest, Angular - Rest Crear Recursos
- **Formularios reactivos (Reactive Forms):** Angular - Rest Crear Recursos
- **Services & Dependency Injection / BehaviorSubject (Angular):** Angular - Services & Dependency Injection
- **Carrito de compras:** Angular - Carrito de Compras, Angular - Events and Binding, Angular - Services & Dependency Injection
- **Deployment / Netlify / Heroku / variables de entorno:** AngularJS - Deployment
- **REST (teoría y práctica):** Rest (Teóricas), Rest + Filtrado en Nest JS, Angular - Rest, Angular - Rest Crear Recursos, Controllers en Nest JS
- **JSON:** Rest (Teóricas)
- **MVC:** Model View Controller, Controllers en Nest JS
- **HTML / CSS / JS (fundamentos):** Introducción a HTML, CSS y JS
- **DOM / eventos del DOM:** Introducción a HTML, CSS y JS, Angular - Events and Binding
- **Historia de la Web / cliente-servidor / HTTP:** Introducción a la Web
- **Git / GitHub / control de versiones:** Introducción a Nest Js (mención), Tecnologías Web - Sistemas de Control de Versiones
- **VS Code / extensiones (ESLint, Prettier, GitLens) / Postman / Thunder Client:** VS Code + Postman, Controllers en Nest JS
- **Presentación de la materia / modalidad de cursada:** Introducción a Tecnologías Web (clase en vivo), Introducción a Tecnologías Web 2023 (clase en vivo)
- **CI/CD / DevOps vs. desarrollo:** Introducción a Tecnologías Web 2023 (clase en vivo)
