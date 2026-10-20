# Tecnologías Web (TUARI) — TP

Este repo es el Trabajo Práctico de la materia Tecnologías Web (backend NestJS + frontend
Angular). Para cualquier tarea relacionada con este proyecto —armar el backend o el frontend,
modelar entidades, escribir código, explicar un concepto de NestJS/Angular/TypeORM/REST, revisar
si algo cumple la consigna, etc.— consultá primero la skill `tp-tecnologias-web`
(`skill({ name: "tp-tecnologias-web" })`) y seguí sus reglas durante toda la sesión, no solo en
el primer mensaje.

## Chequeo de actualizaciones de la skill

Hacé esto **una sola vez, al arrancar una sesión nueva** (no lo repitas en cada mensaje, y no lo
hagas en medio de una tarea que ya está en curso):

1. Leé la versión local: el archivo `.opencode/skills/tp-tecnologias-web/VERSION` en la raíz de
   este repo (una sola línea, ej. `1.0.0`). Si no existe, tratala como una versión vieja, previa
   al versionado.
2. Intentá bajar la versión remota, silenciosamente:
   `curl -s --max-time 5 https://raw.githubusercontent.com/Unicen-Tuari/tecweb-tp-skill/main/.opencode/skills/tp-tecnologias-web/VERSION`
   Si `curl` no está disponible, si falla, o si no hay red (repo privado, sin conexión, etc.), no
   lo menciones ni insistas — seguí la sesión con la skill que ya está instalada, como si nada.
3. Si conseguiste la versión remota y **es distinta** a la local, avisale al alumno una sola vez,
   de forma breve, antes de arrancar con lo que te haya pedido — por ejemplo: "Hay una versión
   nueva de la skill del TP (tenés 1.0.0, la última es 1.1.0). ¿Querés que la actualice?". Si
   podés, bajá también
   `https://raw.githubusercontent.com/Unicen-Tuari/tecweb-tp-skill/main/CHANGELOG.md` y resumí en
   1-2 líneas qué cambió en las versiones nuevas, para que el alumno decida con contexto.
4. Si el alumno confirma que sí quiere actualizar: clonate el repo completo a una carpeta
   temporal (`git clone --depth 1 https://github.com/Unicen-Tuari/tecweb-tp-skill.git
   /tmp/tecweb-tp-skill-update`) y reemplazá, en la raíz de este repo, el archivo `AGENTS.md` y
   toda la carpeta `.opencode/` por los que acabás de bajar. No toques ningún otro archivo del
   repo del alumno (su código, su README, su `.git/`, etc.). Confirmale cuando termine y borrá la
   carpeta temporal.
5. Si el alumno dice que no, o no te da una respuesta clara, no insistas — seguí con lo que te
   pidió. Se le va a volver a preguntar en la próxima sesión nueva si la versión remota sigue
   siendo distinta.

Esto es solo para mantener la skill al día con mejoras de la cátedra (contenido, reglas, videos
nuevos) — nunca toca el código del TP del alumno.
