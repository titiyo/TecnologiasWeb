# NestJS según la cátedra — Tecnologías Web (TUARI)

Condensado de las 8 presentaciones de clase sobre NestJS. El proyecto de ejemplo usado en TODAS las clases es **"Brewery"**: una cervecería que necesita administrar el stock de cervezas (crear, editar, borrar, actualizar stock). Entidad/módulo de ejemplo: **Beer / Beers** (`BeerController`, `BeersService`, `BeersModule`, `Beer`). Usá estos nombres al explicar, no "cats" ni otros genéricos, salvo que el alumno pida otra cosa.

---

## NestJS - 01 - Intro

**NestJS:** framework para apps Node.js server-side eficientes y escalables. TypeScript-first, combina OOP + FP + FRP.

**Framework (def. de cátedra):** conjunto de herramientas, bibliotecas y convenciones que dan estructura, evitan empezar de cero y dejan enfocarse en la lógica de la app.

**Flujo:** Cliente → request/build → Servidor → query/data → Base de Datos → response.

**Herramientas que ofrece Nest:** Authentication/Authorization, Database connectors, HTTP Servers, Web Sockets, API Specs, y más.

**Pre-requisitos:** Node.js instalado (Linux `sudo apt-get install nodejs`, Windows nodejs.org, Mac `brew install nodenv`); npm (viene con Node, `npm -v`); Nest CLI.

**CLI — por qué usarlo:** hace más productivo, evita errores por no recordar sintaxis de memoria.

**Instalar CLI:** `npm i -g @nestjs/cli`, verificar con `nest -v`.

**Uso básico:**
- `nest new <nombre-proyecto> [opciones]` — `--dry-run` simula sin crear archivos; `--language` elige TS o JS.
- `nest generate <schematic> <nombre> [opciones]` — crea/modifica archivos. Schematics vistos: `controller`, `pipe`, `service`.

**Brewery Application:** cervecería que pide sistema para crear, editar, borrar cervezas y actualizar stock.

**Arquitectura de alto nivel (repetida en varias clases):** `AppModule (root)` → `BeersModule` → `BeerController`, `BeerService`, `BeerEntity`, `BeerRepository`, ...

**Endpoints base (tabla reutilizada en todo el curso):**
| Endpoint | Método | Descripción |
|---|---|---|
| beers/ | GET | Muestra cervezas |
| beers/:id/ | GET | Muestra una cerveza |
| beers/ | POST | Crea una cerveza |
| beers/:id/ | DELETE | Borra una cerveza |
| beers/:id/stock | PATCH | Actualiza el stock de una cerveza |

**Crear proyecto:** `nest new brewery` — **nota explícita: elegir npm como package manager**.

**Carpetas:** `node_modules` (bibliotecas), `src` (código), `test` (tests).

**Archivos clave:** `package.json` (declara dependencias y scripts), `.eslintrc.js` (estilo de código uniforme), `.prettierrc` (auto-formateo con Prettier), `tsconfig.json` (config de compilación), `package-lock.json` (versiones exactas instaladas).

**Levantar la app:** `nest start`.

**Bibliografía:** https://docs.nestjs.com/

---

## NestJS - 02 - Modules

**Módulos:** toda app tiene al menos un Root Module, punto de entrada de la app. Organizan componentes — ejemplo: **un módulo por feature**. Buena práctica explícita: **una carpeta por módulo**, con todo lo relacionado adentro.

**Definición:** decorador **`@Module`** sobre una clase; le da a Nest la metadata para organizar la app.

**Propiedades de `@Module`:**
- `providers` — para inyectar el módulo donde se necesite.
- `controllers` — controllers del módulo que se instancian.
- `imports` — módulos requeridos por este módulo.
- `exports` — providers exportados a otros módulos.

**Generar módulo:** `nest g module beers`. Nota: el CLI también importa automáticamente el módulo nuevo en `AppModule`.

**Beneficios remarcados:** app lista para crecer; separación de lógica; fácil de entender/comunicar/testear; solo se importan los módulos necesarios.

---

## NestJS - 03 - Controllers

**Controllers:** vías de acceso a la app; reciben solicitudes específicas, dirigen el flujo y responden (relación con MVC).

**Definición:** decorador **`@Controller`** sobre una clase, con path opcional como prefijo, ej. `@Controller('beers')`.

**Routing:** el ruteo decide qué controller recibe qué solicitud, con clases y decoradores. Cada controller suele tener varias rutas, cada una con una acción distinta.

**Route Parameters:** para leer datos de la URL (ej. `GET /beers/1`) se usa **`@Get()`** con un token en la ruta, capturado en el método con **`@Param()`**.

**Request payload:** el usuario puede enviar datos (mensajes, archivos) en el body, o ajustar detalles del request (credenciales, formato esperado, etc.).

**`@Body()`:** decorador para recibir el cuerpo del request.

**DTOs (Data Transfer Object):**
- Definen la forma de los datos enviados/recibidos.
- Son clases o interfaces con campos y tipos.
- **Convención de cátedra: un DTO por cada operación** que recibe/envía datos. Ejemplo: `CreateBeerDto`.
- Generación: `nest generate class beers/dto/create-beer.dto` → archivo `create-beer.dto.ts` dentro de `beers/dto/`.
- Uso en controller: `create(@Body() createBeerDto: CreateBeerDto)`.

**Response data:** texto simple o JSON, ej.:
```json
{ "name": "IPA Mutante", "style": "India Pale Ale", "stock": 500,
  "ingredients": ["UK Malt", "Australian Hops", "Yeast"] }
```

---

## NestJS - 04 - Providers & Services

**Provider:** instrucción para el sistema de **Inyección de Dependencias** sobre cómo cargar una dependencia; casi siempre son servicios creados por el desarrollador.

**Inyección de Dependencias:** los objetos interactúan entre sí y el framework se encarga de mantener sus instancias.

**Inyectables típicos:** Services, Repositories, Factories, Helpers, etc.

**Consideración explícita:** los Controllers manejan HTTP y **delegan tareas complejas a providers**; un provider es simplemente una clase declarada como provider en un módulo.

**Registro de provider (ejemplo de la slide):**
```ts
@Module({
  controllers: [BeersController],
  providers: [BeersService],
})
export class AppModule {}
```

**Uso de un provider:** se resuelve por tipo, típicamente inyectado en el constructor: `constructor(private catsService: CatsService) {}` — Nest crea el servicio y lo deja disponible.

**Services:** llevan la mayor parte del trabajo. Métodos ejemplo dados en clase: `sayHello()`, `findOne()`, `findAll()`, `create()`.

**`BeersService` canónico** (`beers.service.ts`), responsable de guardar/recuperar datos de cervezas:
```ts
@Injectable()
export class BeersService {
  private readonly beers: Beer[] = [];
  create(beer: Beer) { this.beers.push(beer); }
  findAll(): Beer[] { return this.beers; }
}
```
Pasos para usar un service en un Controller: (1) **`@Injectable()`**, (2) registrarlo como provider en el módulo, (3) inyectarlo donde se necesite.

**Interfaz `Beer`** (`beer.interface.ts`): `id`, `name`, `style`, `stock`, `ingredients: string[]`.

**Interfaces vs. DTOs (punto remarcado):** no hay distinción funcional real, pero **NestJS recomienda clases** porque las interfaces no aceptan decoradores en sus propiedades — con clases se pueden agregar validaciones como `@IsString()` o `@Max(20)`.

**Idea pedagógica central:** a medida que el software crece hay que agrupar comportamiento común (patrones). El array `beers: Beer[]` en memoria es **volátil**: se pierde al reiniciar la app → motiva la necesidad de persistencia (clase 06).

**Otras responsabilidades sugeridas para un Service:** crear archivos en el servidor, enviar emails, consultar servicios externos (ej. mapas).

**Diagrama multi-módulo:** `AppModule` con `BeersModule` (Beer*), `LocationsModule` (habla con Maps API), `OrdersModule` (habla con Mail y Database).

---

## NestJS - 05 - REST APIs - Filtrar + Repaso

**REST (repaso):** arquitectura apoyada en HTTP; una URI representa un recurso accesible/modificable con los métodos HTTP (POST, GET, PUT, DELETE). Es el estándar más natural para APIs orientadas a Internet.

**Query Parameters:** formato `http://host/recurso?dato1=valor1&dato2=valor2` (Query String). Ejemplo: `GET /api/beers?style=lager`.

**Filtro en NestJS con `@Query()`:**
```ts
@Get()
findAll(@Query() query): Beer[] {
  return `This action returns all beers (style: ${query.style} items)`;
}
```

**Ordenamiento:** `GET /api/beers?sortBy=stock` (default ASC/DESC) o `GET /api/beers?sortBy=stock&orderBy=desc`.

**Query DTO (buena práctica cuando crecen los parámetros):**
```ts
export class BeersQueryDTO {
  style: string;
  sortBy: number;
  orderBy: string;
}
// uso: findAll(@Query() query: BeersQueryDTO)
```

**Paginación:** `GET /api/beers?page=1` o `GET /api/beers?limit=10&offset=50`.

**Punto conceptual remarcado:** filtrar/ordenar/paginar **modifican el conjunto resultado, no el tipo de dato recibido** (si se piden cervezas, se reciben cervezas). Ventaja de Query Params: el usuario puede **guardar y compartir el link** de la consulta; son intuitivos y comunes en APIs de terceros.

**Métodos HTTP (definiciones de cátedra):** GET = recuperar información; POST = enviar datos al servidor; PUT = guardar un objeto en la ubicación dada; DELETE = eliminar el objeto en la ubicación dada.

**POST — crear con `@Body()`:**
```ts
@Post()
create(@Body() createBeerDto: CreateBeerDto) {
  return this.beersService.create(createBeerDto);
}
```
`CreateBeerDto` con `name`, `style`, `stock`. El service instancia `new Beer(...)` y hace `push` al array, devolviendo la entidad creada.

**PUT — modificar (id por `@Param`, objeto por `@Body`):**
```ts
@Put(':id')
update(@Param('id') id: number, @Body() updateBeerDto: UpdateBeerDto): Beer {
  return this.beersService.update(id, updateBeerDto);
}
```

**DELETE — eliminar:**
```ts
@Delete(':id')
remove(@Param('id') id: number): void {
  return this.beersService.remove(id);
}
```

**Bibliografía:** https://docs.nestjs.com/controllers

---

## NestJS - 06 - Persistencia y ORM

**Motivación:** persistir la información de la app (repaso: `BeerController` → `BeersModule` → PostgreSQL). Setup previo: **docker + postgres** (visto en slides/video externos del curso, no detallado en texto).

**CRUD (repaso):** Alta/Consulta/Actualización/Borrado = Create/Read/Update/Delete.

**Generar CRUD con CLI (convención: nombre en plural):**
```
nest g resource <<name>>
```
Ejecución real vista en clase:
```
nest g resource beers --no-spec
? What transport layer do you use? REST API
? Would you like to generate CRUD entry points? Yes
```
Genera: `beers.controller.ts`, `beers.module.ts`, `beers.service.ts`, `dto/create-beer.dto.ts`, `dto/update-beer.dto.ts`, `entities/beer.entity.ts`, y actualiza `package.json` y `app.module.ts`. El controller y service generados ya traen `create/findAll/findOne/update/remove` con `+id` para castear string→number.

**DB Connector:** sabe interactuar con un motor específico, gestiona la conexión y permite ejecutar SQL (ej. `node-postgres`, que ejecuta SQL sobre un pool de conexiones que el programador crea).

**ORM (def.):** técnica para convertir datos entre el sistema de tipos OOP y una base de datos relacional. **En NestJS se usa TypeORM.**

**Instalación:** `npm install --save @nestjs/typeorm typeorm pg`

**Config en `AppModule`** (datos tomados del `docker-compose.yml`):
```ts
TypeOrmModule.forRoot({
  type: 'postgres', host: 'localhost', port: 5432,
  username: 'postgres', password: 'secret123!',
  database: 'brewery', entities: [], synchronize: true,
})
```

**Entity (`beer.entity.ts`)** con decoradores TypeORM:
```ts
@Entity()
export class Beer {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column() brand: string;
  @Column({ default: true }) isActive: boolean;
}
```

**Módulo con entidad:** `imports: [TypeOrmModule.forFeature([Beer])]`.

**Service con Repository inyectado (decorador `@InjectRepository`):**
```ts
constructor(
  @InjectRepository(Beer) private beersRepository: Repository<Beer>,
) {}
findAll(): Promise<Beer[]> { return this.beersRepository.find(); }
findOne(id: string): Promise<Beer> { return this.beersRepository.findOne(id); }
async remove(id: string): Promise<void> { await this.beersRepository.delete(id); }
```

**Repository Pattern:** logra **independencia del data source** — la lógica de negocio habla con un Repository (ej. `EmployeeRepository`, `ProductRepository`) que internamente puede usar Web Service, SQL DB o Filesystem sin que la lógica de negocio lo sepa.

**Diseño final:** `BeerController` → `BeersModule` (`BeerController`, `BeerService`, `BeerRepository`, `BeerEntity`) → PostgreSQL.

**Temas relacionados mencionados (no desarrollados en texto):** Migraciones, Seeding.

**Bibliografía:** https://docs.nestjs.com/techniques/database

---

## NestJS - 07 - Deploy

**Deploy:** pasar de local (`localhost:3000` Nest + `localhost:5432` Postgres en Docker) a Cloud: la app queda accesible en `https://IP` o `https://domain.com`, y la DB pasa a ser una **Managed DB** accesible internamente (`internal:5432`).

**Modelos de cloud (términos en inglés de la slide):**
- **Public Cloud:** de terceros, disponible vía Internet público, escala rápido.
- **Private Cloud:** para usuarios seleccionados, mayor control de seguridad, requiere staffing propio.
- **Hybrid Cloud:** combinación de ambas, responsabilidad de seguridad compartida.
- **Cloud Services:** distinción entre lo gestionado por el usuario y lo gestionado por el proveedor.

**PaaS usado en la cátedra: Heroku.**

**Prerrequisitos:** npm, Node.js instalados; app NestJS con `package.json` funcionando; cuenta en Heroku; cuenta en GitHub.

**Uso:** Heroku CLI (`heroku login`) o Web UI/dashboard.

**Pasos del deploy:**
1. **Start script** (ya en `package.json`): `"start:prod": "node dist/main"` (junto a `start:dev`, `start:debug`).
2. **Procfile:** `web: npm start`
3. **Versión de Node** (`node --version`) declarada en `package.json`: `"engines": { "node": "14.16.1" }`
4. **Addon PostgreSQL Free Tier:** `heroku addons:create heroku-postgresql:hobby-dev`
5. **Puerto correcto:** `await app.listen(process.env.PORT || 8080);`
6. **Conexión a la DB** vía `DATABASE_URL` con SSL:
   ```ts
   const pool = new Pool({
     connectionString: process.env.DATABASE_URL,
     ssl: { rejectUnauthorized: false }
   });
   ```
7. **Crear app en Heroku:** dashboard → elegir nombre/región → tab "Deploy" → "Conectar con GitHub" → elegir repo (deploy automático publica al cambiar `main`), o vía CLI: `heroku create`.

**Referencias:**
- https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true
- https://devcenter.heroku.com/articles/procfile
- https://medium.com/weekly-webtips/deploying-a-nestjs-app-with-heroku-5fa84cb5b6c6

---

## NestJS - Exceptions

**Nota de fidelidad:** esta presentación tiene muy poco texto extraíble (varias slides son solo títulos con diagramas/imágenes no transcribibles). Lo que sigue es TODO lo recuperable del material; para completar, aclarar siempre que se está complementando con conocimiento general y no con la slide.

**Temas/títulos de la clase, en orden:** "Qué son?", "Para qué sirven?", "Request responses", "Response status", "Throw Exception".

**Request responses:** las respuestas HTTP pueden llevar: estado de la solicitud (ejemplos dados: **200 OK, 300 Redirect, 400 Bad Request, 500 Internal Server Error**), mensaje de respuesta (texto, HTML, etc.), y otros ajustes/metadatos.

**Response status (punto remarcado explícitamente):** es muy recomendable **ser claros al responder**; HTTP define muchos códigos de estado para identificar los resultados posibles de cada solicitud, y la cátedra insta a **usarlos** ("¡Usémoslos!").

**Throw Exception:** título de cierre, sin contenido textual adicional capturado en la slide — se infiere que la clase continúa en vivo con `throw new HttpException(...)`, excepciones built-in de Nest (`NotFoundException`, `BadRequestException`, etc.) y filtros de excepción, pero esto no está confirmado por el texto de la slide y no debe citarse como palabra textual de la cátedra.
