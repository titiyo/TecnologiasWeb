# Guía de defensa — TP "Componentes" (Tecnologías Web)

Documento para preparar la defensa oral. Recorre exactamente lo que hay que demostrar:
**crear / editar / borrar / consultar** las dos entidades, **linkear** al consultar y **buscar el
uso (categoría)** al crear, más el código del alta y cómo se levanta/configura la base.

---

## 1. Checklist: lo que tenés que poder mostrar

- [ ] Crear un **Uso** (POST /usos) y un **Componente** (POST /componentes).
- [ ] **Editar** ambos (PATCH).
- [ ] **Borrar** ambos (DELETE), incluyendo el error 409 al borrar un uso con componentes.
- [ ] **Consultar** listado y por id, en ambas entidades.
- [ ] Al consultar un componente, ver el **uso linkeado** (`relations`).
- [ ] Al crear un componente, **buscar el uso** con `GET /usos?nombre=`.
- [ ] Explicar **cómo se levanta y configura la base**.

---

## 2. Guion de demo en Postman (en orden)

1. Levantar base y API:
   ```
   docker compose up -d
   npm run start:dev
   ```
2. **GET /usos** → devuelve los 4 sembrados (Gaming, Oficina, Doméstico, Estudio).
3. **GET /usos?nombre=gam** → busca la categoría (para elegir el `usoId` al crear).
4. **POST /usos** con `{ "nombre": "Streaming" }` → 201.
5. **POST /componentes** con `{ "nombre": "Ryzen 5 5600", "tipo": "Procesador", "marca": "AMD", "precio": 220.5, "usoId": 1 }` → 201.
6. **GET /componentes** → cada componente trae su `uso` embebido (**link**).
7. **GET /componentes?nombre=ryzen** → búsqueda por nombre.
8. **GET /componentes?usoId=1** → filtro por uso.
9. **PATCH /componentes/1** con `{ "precio": 199.99 }` → 200.
10. **DELETE /componentes/1** → 200 `{ message, status: "success" }`.
11. **GET /componentes/999** → 404.
12. **DELETE /usos/1** (tiene componentes) → 409.
13. **DELETE /usos/5** (sin componentes) → 200.

Códigos esperados: **201** crear, **200** leer/editar/borrar, **404** no existe, **409** conflicto.

---

## 3. El código del alta (flujo completo)

`POST /componentes` recorre **Controller → Service → Repository (TypeORM) → PostgreSQL**.

### 3.1 Controller (`src/componentes/componentes.controller.ts`)
```ts
@Post()
create(@Body() createComponenteDto: CreateComponenteDto) {
  return this.componentesService.create(createComponenteDto);
}
```
Recibe el body (como DTO) y delega. No tiene lógica de negocio.

### 3.2 DTO (`src/componentes/dto/create-componente.dto.ts`)
```ts
export class CreateComponenteDto {
  nombre!: string;
  tipo!: string;
  marca!: string;
  precio!: number;
  usoId!: number;
}
```
Define la forma de los datos que entran. `UpdateComponenteDto extends PartialType(...)` hace todos
los campos opcionales para el PATCH.

### 3.3 Service (`src/componentes/componentes.service.ts`)
```ts
async create(createComponenteDto: CreateComponenteDto) {
  const { usoId, ...rest } = createComponenteDto;
  await this.usosService.findOne(usoId);                 // valida la FK (404 si no existe)
  const nuevoComponente = this.componentesRepository.create({
    ...rest,
    uso: { id: usoId },                                   // arma la relación con el id
  });
  return this.componentesRepository.save(nuevoComponente); // INSERT
}
```
`@InjectRepository(Componente)` (en el constructor) trae el `Repository`, que es quien ejecuta el
SQL. `save()` hace el `INSERT` y devuelve la fila creada.

### 3.4 Entidad / tabla (`src/componentes/entities/componente.entity.ts`)
```ts
@Entity()
export class Componente {
  @PrimaryGeneratedColumn() id!: number;
  @Column() nombre!: string;
  @Column() tipo!: string;
  @Column() marca!: string;
  @Column('decimal', { precision: 10, scale: 2, transformer: {...} }) precio!: number;

  @ManyToOne(() => Uso, (uso) => uso.componentes)
  @JoinColumn({ name: 'uso_id' })
  uso!: Uso;
}
```
`@JoinColumn({ name: 'uso_id' })` deja la **FK `uso_id`** en la tabla `componente`.

### 3.5 Alta de Uso (difiere)
`UsosController.create` valida **duplicado** (409) antes de llamar al service; `UsosService.create`
hace `save` directo (no tiene FK).

---

## 4. Consultar y "linkear" las entidades

En `ComponentesService.findAll` / `findOne` se usa:
```ts
this.componentesRepository.find({ relations: { uso: true }, where });
```
`relations: { uso: true }` hace un JOIN y **embebe** el uso en la respuesta:
```json
{ "id": 1, "nombre": "Ryzen 5 5600", "tipo": "Procesador", "marca": "AMD", "precio": 220.5,
  "uso": { "id": 1, "nombre": "Gaming" } }
```
En `Uso` está el otro lado: `@OneToMany(() => Componente, (c) => c.uso) componentes`.

### Filtro y búsqueda (queries)
```ts
// Componentes: filtro por uso + búsqueda por nombre (combinables)
const where = {};
if (usoId) where.uso = { id: usoId };
if (nombre) where.nombre = ILike(`%${nombre}%`);
```
- `?usoId=1` → filtra por la **relación**.
- `?nombre=ryzen` → búsqueda **parcial** e **insensible a mayúsculas** (`ILike` = `ILIKE`).
- Juntos, TypeORM los combina con **AND**.

---

## 5. Cómo se levanta y configura la base

### 5.1 Contenedor (`docker-compose.yml`)
```yaml
services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: secret123!
      POSTGRES_DB: pc_prearmadas
    volumes:
      - ./data:/var/lib/postgresql/data   # persistencia
    ports:
      - '5432:5432'
  adminer:                                # UI web en :8080
    ...
```
`docker compose up -d` crea la base `pc_prearmadas` y publica `5432`.

### 5.2 Conexión (`src/app.module.ts`)
```ts
TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
  username: process.env.DB_USERNAME ?? 'postgres',
  password: process.env.DB_PASSWORD ?? 'secret123!',
  database: process.env.DB_NAME ?? 'pc_prearmadas',
  autoLoadEntities: true,
  synchronize: true,
});
```
- **Variables de entorno** con defaults (cumple la consigna de "conexión por variables de entorno").
- **`autoLoadEntities: true`** → carga las entidades registradas con `forFeature`.
- **`synchronize: true`** → crea/actualiza las tablas desde las entidades.
- Cada módulo hace `TypeOrmModule.forFeature([Entidad])` para tener su `Repository`.

---

## 6. Preguntas probables del docente (y respuesta corta)

- **¿Por qué la FK va en `Componente` y no en `Uso`?** Porque es el lado **N** (muchos componentes
  por uso). En el lado 1 habría que guardar una lista de ids.
- **¿Qué diferencia hay entre `@ManyToOne` y `@OneToMany`?** `@ManyToOne` es el lado que tiene la
  columna FK (`componente.uso_id`); `@OneToMany` es la vista del otro lado (no crea columna).
- **¿Qué hace `@JoinColumn`?** Define el nombre de la columna FK (`uso_id`).
- **¿Qué es un DTO y para qué sirve?** Clase que define la forma de los datos de entrada/salida; da
  tipado y permite validar (acá validaciones manuales).
- **¿Cómo se valida que el uso exista al crear un componente?** Inyectando `UsosService` y llamando
  `findOne(usoId)`; si no existe lanza `NotFoundException` (404).
- **¿Qué código usaron para duplicados/nombre vacío?** **409 Conflict** (decisión del grupo).
- **¿Diferencia query param vs route param?** Route (`/usos/:id`) identifica un recurso; query
  (`?usoId=`) filtra/modifica la colección.
- **¿Qué hace `synchronize: true`?** Sincroniza el esquema de la DB con las entidades (crea tablas).
- **¿Qué pasa si se borra un uso con componentes?** Se chequea la relación y responde **409**.

---

## 7. Comandos útiles
```
docker compose up -d         # levanta Postgres + Adminer
npm run start:dev            # API en http://localhost:3000
npm run test                 # tests
docker compose down          # baja contenedores (los datos quedan en ./data)
```
Adminer: `http://localhost:8080` (System PostgreSQL, Server `postgres`, user `postgres`,
pass `secret123!`, DB `pc_prearmadas`).
