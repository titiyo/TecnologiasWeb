# Resumen de la sesión con opencode

> Resumen del log completo `docs/logs/opencode-sesion.json` (export de opencode). Las respuestas de
> los checkpoints están transcriptas, con sus errores de tipeo, en [`HISTORIAL.md`](../HISTORIAL.md).

## Datos de la sesión

| Dato | Valor |
|---|---|
| Herramienta | opencode, con la skill `tp-tecnologias-web` |
| Modelo | `deepseek-flash-latest` vía OpenRouter (según el log) |
| Período | 21/09/2026 al 20/10/2026 |
| Tamaño | 239 mensajes (38 del estudiante, 201 del asistente) |
| Uso de herramientas | 74 comandos, 33 archivos creados, 64 ediciones, 31 lecturas, 9 preguntas con opciones |
| Proyecto | `C:\Users\benja\Downloads\tecweb-tp-skill-main\Tp-Tec-Web` |

## Qué se hizo, por etapa

**21/09 — Arranque (pasos 1 a 3).** Se pegó el contexto del TP y se creó el proyecto NestJS. Se armó
el CRUD de `Uso` en memoria con DTOs y se validó el nombre en el `PATCH` (409). El estudiante
respondió checkpoints sobre `findOne`/`NotFoundException` y sobre por qué `{}` en un PATCH devuelve
200.

**24/09 — Persistencia (pasos 4 a 9).**
- Se modeló la segunda entidad (en ese momento `PcPrearmada`) con sus DTOs y `PartialType`.
- Se levantó Postgres y Adminer con `docker-compose` y se migró `Uso` a TypeORM con datos semilla.
- Se implementó la relación 1 a N con `@ManyToOne` / `@OneToMany` y el filtro `?usoId=`.
- Se detectó en vivo que `precio` volvía como string (se corrigió con un `transformer`) y que
  borrar un uso con componentes daba error de FK (se resolvió con 409).
- Se agregó la conexión por variables de entorno.
- Checkpoints respondidos: `PartialType`, `async/await` y `forFeature`, lado de la FK, y route
  param vs query param.

**15/10 — Ajuste del dominio (paso 12).** El estudiante aclaró el dominio: la entidad del lado N se
llama **Componente** (Ryzen 5 para juegos, i3 para oficina). Se renombró `PcPrearmada` a `Componente`
y se agregó la búsqueda `?nombre=` con `ILike`, más el buscador de usos. Se armó la colección de
Postman y el README. Checkpoint: qué hace `ILike('%texto%')` y cómo se combinan filtro y búsqueda
(AND). También se sacaron del repo carpetas ajenas que rompían el build.

**19–20/10 — Preparación de la defensa.** Se repasó qué pide el profe (crear, editar, borrar y
consultar las dos entidades, linkear al consultar, buscar la categoría al crear, y mostrar el código
del alta y cómo se levanta la base).

## Decisiones que tomó el estudiante (preguntas con opciones)

| Decisión | Elegido |
|---|---|
| Modelado de `almacenamiento` y `placa_video` (etapa `PcPrearmada`) | string libre / opcional sin default |
| Cómo armar el historial entregable | `HISTORIAL.md`, commiteado en el repo |
| Datos iniciales | Sembrar 4 usos al iniciar |
| Cómo seguir | Probar todo en vivo antes de armar Postman |
| `precio` decimal | Normalizar a número con `transformer` |
| Borrar un uso con componentes | Responder 409 |
| Conexión por variables de entorno | `process.env` con valores por defecto (sin `@nestjs/config`) |
| Campos de `Componente` | `nombre`, `tipo`, `marca`, `precio`, `usoId`; `tipo` como string libre |

## Resultado al cierre de la sesión
- CRUD de `Uso` y `Componente` con relación 1 a N, filtro, búsqueda y colección de Postman.
- `HISTORIAL.md` con pasos, decisiones y checkpoints, y README del proyecto.
- Pendiente: la validación de datos inválidos (400) y la segunda entrega (Angular y deploy). La
  validación se resolvió después, en la sesión con Claude Code
  ([`resumen-claude.md`](resumen-claude.md)).
