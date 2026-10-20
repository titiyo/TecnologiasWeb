# Angular — Apunte de cátedra (Tecnologías Web, TUARI/UNICEN)

Condensado de las 7 presentaciones de Google Slides. Proyecto de ejemplo usado en **todas** las clases: **"The Brewery"**, una app para vender cervezas online (lista de cervezas, carrito de compras, about/contacto, layout con Logo/Menu/Lista de Cervezas/Carrito/Footer). Mantené esta terminología y este ejemplo al explicar conceptos: es lo que el alumno vio en clase.

---

## 01- Angular - Introducción

**Definición de la cátedra:** "Angular es un framework JavaScript de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página (SPA)".

**SPA:** se contrasta contra la web tradicional (cada URL = request/response completo al servidor). En una SPA hay una carga inicial completa y luego cada "página" solo pide los datos que necesita, sin recargar todo. Flujo interno: Angular maneja los requests del usuario → Angular Route parsea la URL y rutea → Directives and Component Databinding actualizan el DOM. Resumen dado: "Cambia la URL / Modifica el DOM" sin refrescar.

**Historia:** AngularJS (primera versión oct. 2010, estable 1.7.x) vs. Angular 2+ (reescritura completa en TypeScript; versión vista en el curso: **12.x**; "mucho más performante" que AngularJS).

**Setup de ambiente (herramientas listadas explícitamente):** Node.js (v10.13+), npm, Git, un IDE (VSCode/Atom/Sublime/Vim), un browser (Chrome/Firefox/Safari/IE).

**Enunciado del proyecto (cita textual):** "Nos contactó el dueño de una nueva cervecería en Tandil y quiere armar una aplicación para vender sus cervezas por internet." Historias de usuario: ver lista de cervezas (nombre, descripción, precio, stock, imagen); agregar cervezas al carrito; indicar cantidad; eliminar cervezas del carrito.

**Angular CLI:**
- Instalación: `npm install -g @angular/cli` (`-g` global, habilita el comando `ng`). Verificar con `ng --version`.
- `ng new [nombre]` crea la app. Ejemplo exacto de clase: `ng new brewery --routing=true --style=scss`.
- `ng serve` levanta el servidor local (`cd [nombre-app]` → `ng serve` → `http://localhost:4200`).

**Estructura del proyecto (según la cátedra):**
- Nivel superior: `angular.json` (config de angular-cli), `package.json` (dependencias), `src/` (código fuente), `node_modules/` (paquetes npm), `e2e/` (testing end-to-end).
- Dentro de `src/`: `index.html` (Angular CLI inyecta JS/CSS automáticamente), `app/` (lógica y datos), `assets/` (imágenes y assets), `environments/` (configs de build), `style.scss` (estilos globales), `main.ts` (entry point).

**Referencias citadas:** Angular.io - Getting Started (Doc Oficial); "Angular - The Force Awakens" de John Papa (YouTube).

---

## 02- Angular - Components

**Definición:** "Los componentes son la manera en que construimos apps en Angular, dividiendo la funcionalidad en pequeñas piezas que luego al unirlas construyen una vista de un usuario." Cada parte del app es un componente, y son **reutilizables**. Los componentes siguen un **diseño atómico** (mencionado explícitamente).

**Las 3 partes de un componente:** TS (Lógica), HTML/template (Template), CSS (Estilo).

**Estructura:** una clase con decorator `@Component({...})`: `selector` (cómo se incluye), `templateUrl` (HTML del componente), `styleUrls` (hojas de estilo).

**Registro:** hay que declarar el componente en `app.module.ts` (`declarations`); Angular CLI lo hace automático al generar uno. `AppComponent` es el **root component**.

**Interpolation:** `{{ }}` para mostrar propiedades del componente en el template.

**Generar componentes (comando exacto):** `ng generate component beer-list` o corto `ng g c beer-list` → crea carpeta `beer-list/` con selector `app-beer-list`.

**Buena práctica remarcada explícitamente:** usar **prefijos por app** en el selector para evitar colisiones con bibliotecas (cita `angular.io/guide/styleguide#component-custom-prefix`).

**Ejercicio guiado (Brewery):** distinguir "componentes" (Lista de cervezas, Carrito) de "contenido estático" (Logo, Menu) en el layout → armar home con Bootstrap → crear `beer-list` con `ng g c` → definir campos de la tabla: **Nombre, Tipo, Precio, Stock** → bindear una propiedad con interpolación.

**Property Binding:** corchetes `[ ]` (no `{{ }}`) para setear una propiedad del DOM desde una propiedad del componente — "si la propiedad del componente cambia, cambia el DOM". Ejemplo dado: `[src]` y `[alt]` de una imagen.

**Encapsulamiento de estilos:** experimento explícito de la clase — crear una clase CSS igual (ej. `resaltar`) en `app.component.css` y en `beer-list.component.css`, para demostrar que **los estilos de un componente se auto-limitan (scope) a ese componente** sin pisar otros. Ejercicio: crear el componente `cart` con su template y repetir la prueba de scoping.

---

## 03 - Angular - Directives & Interfaces

**Interfaces (TypeScript):** extienden el tipado (`let name: string`) a estructuras complejas. Interfaz `Beer` de la cátedra:
```ts
export interface Beer {
  name: string; style: string; price: number; stock: number;
}
let beer: Beer = { name: 'Bitter Call Saul', style: 'Ipa', price: 180, stock: 300 };
```
Cervezas de ejemplo recurrentes: *Bitter Call Saul*, *Red Red Wine*, *Yellow Submarine*.

**Refactor a lista** en `BeerListComponent` (`beers: Beer[] = [...]`, con `import { Beer } from './Beer'`, `implements OnInit`).

**Mock:** definición de la cátedra — "un objeto que simula el comportamiento del objeto real". Se remarca como **buena práctica front-end** usar "Fake Data" para empezar a desarrollar antes de tener la API real; se puede separar en un archivo propio.

**Directivas — definición:** "la forma de generar un template HTML dinámico." Dos tipos, terminología exacta:
- **Estructurales**: agregan/quitan/modifican elementos del DOM (`*ngIf`, `*ngFor`).
- **Atributos**: modifican apariencia/comportamiento de elementos existentes (`[ngStyle]`).

**`*ngFor`**: "repite el elemento por cada item en la colección" (usado para listar cervezas).

**`*ngIf`**: "elimina o muestra una parte del DOM de acuerdo a la expresión que evalúa." Ejemplo exacto (mostrar "Sin stock" si `stock==0`):
```html
<tr *ngFor="let beer of beers">
  <td><img [src]="beer.image" [alt]="beer.name"></td>
  <td>{{beer.name}}</td><td>{{beer.type}}</td><td>{{beer.price}}</td>
  <td *ngIf="beer.stock==0">Sin stock</td>
</tr>
```

**`ngClass`**: "manipula las clases CSS de un elemento HTML". Caso de uso: marcar en verde las cervezas en oferta (`beer.clearance`). Tres sintaxis mostradas: string (`[ngClass]="'a b'"`), array (`[ngClass]="['a','b']"`), objeto (`[ngClass]="{'a': true, 'b': false}"`).

**Pipes:** "funciones simples que transforman valores que usamos en un template". Angular trae muchos pipes y permite crear propios. Usos citados: Date Pipe (fechas), Currency Pipe (monedas), formato de números. Ejemplo: `1989-02-03` → "3 de Febrero de 1989"; precio con `$` y 2 decimales.

---

## 04 - Angular - Binding: Data, Event & 2 Ways Data Binding

**3 formas de flujo de datos (enumeración exacta de la cátedra):**
1. **JavaScript a HTML**: interpolación/property binding (ej. mostrar el título o las cervezas).
2. **HTML a JavaScript** (**Event Binding**): mouse click, hover, input, key press — "la forma de comunicar lo que pasa en HTML a Javascript".
3. **De las dos formas** (**Two-Way Data Binding**): ej. un input sincronizado con el dato del componente.

**Ejercicio guiado (cantidad a encargar):** botones "+"/"-" para elegir cantidad → función `upQuantity(beer: Beer)` bindeada al click de "+" → función `downQuantity(beer: Beer)` bindeada al click de "-" → bugfixing explícito: no superar el stock ni bajar de 0.

**Two-Way Data Binding:** sincroniza componente y template en ambas direcciones. Sintaxis `[()]`, apodada por la cátedra **"Banana in a Box"**. Típico en inputs.

**Requisito:** importar `FormsModule` en `app.module.ts` (`import { FormsModule } from '@angular/forms'`, agregarlo al array `imports`). Uso: `[(ngModel)]="beer.quantity"` en un `<input>` para two-way binding con la cantidad.

**Bugfixing planteado:** validar números muy grandes o negativos en el input.

**`$event`:** para más datos del evento (tecla presionada, posición del click) se pasa `$event` desde el template a la función del componente; también sirve para llamar `event.preventDefault()`.

**Referencias:** `angular.io/guide/two-way-binding`; nota de la propia slide: "Branch en el Repositorio (2017, Angular 2)" — material antiguo ya en su momento.

---

## 05 - Angular - Routing

**Definición:** el routing asocia cada URL a un componente, implementa el "**partial render**", y Angular actualiza URL + DOM sin refrescar la página (consistente con SPA). Regla: un componente padre (con posibles subcomponentes) por cada URL.

**Mapeo de rutas del proyecto Brewery:**
| URL | Contenido | Componente |
|---|---|---|
| `/beers` | Lista de cervezas y carrito | `beers` (subcomponentes lista + carrito) |
| `/about` | Info y contacto | `about` |

**Config paso 1** — `app-routing.module.ts` (creado por `ng new --routing=true`):
```ts
const routes: Routes = [
 { path: '', redirectTo: 'beers', pathMatch: 'full' },
 { path: 'beers', component: BreweryBeersComponent },
 { path: 'about', component: BreweryAboutComponent },
];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule { }
```

**Config paso 2** — importar `AppRoutingModule` en `app.module.ts` (`imports: [BrowserModule, AppRoutingModule, FormsModule]`).

**`<router-outlet>`:** tag que indica dónde Angular renderiza el componente de la ruta activa.

**`routerLink`:** directiva para navegar sin recargar. Ejemplo de la slide: `<a [routerLink]="['/abouts']">Contactenos</a>` (nota: la slide original escribe `'/abouts'` con "s" extra — posible typo de la cátedra respecto al path real `about`; señalarlo si el alumno pregunta por la discrepancia).

---

## 06 - Angular - Rest (HttpClient)

**Contexto:** hasta esta clase los datos venían de un mock; ahora se consumen desde una API REST real.

**Servicio REST de ejemplo (Brewery):** endpoint `http://localhost:3000/beers`, method `GET`.

**CORS:** se remarca explícitamente que hay que habilitarlo en el backend para que el servicio pueda usarse desde otra app en localhost (configurado en `main.ts` del backend — la cátedra usa **NestJS** como backend de referencia).

**Crear el servicio (comando exacto):** `ng g s beer-data`.

**`HttpClientModule`:** API simplificada de Angular para HTTP. Pasos: 1) incluir `HttpClientModule` en `AppModule`; 2) inyectar `HttpClient` como dependencia en cualquier clase.

**Servicio completo dado en clase:**
```ts
const URL = 'https://5f87805549ccbb00161775ca.mockapi.io/api/v1/beers';

@Injectable({ providedIn: 'root' })
export class BeerDataService {
  constructor(private http: HttpClient) { }

  /** Consume la API de cervezas y devuelve un observable a la respuesta. */
  public getAll(): Observable<Beer[]> {
    // fetch('url', {method: 'GET'})
    return this.http.get<Beer[]>(URL);
  }
}
```
(El comentario `// fetch(...)` queda como referencia comparativa con la Fetch API nativa.)

**Consumo en el componente:**
```ts
ngOnInit(): void {
  this.beersDataService.getAll().subscribe(beers => this.beers = beers);
}
```
Terminología de la slide: "Lo que observo" (`.subscribe`) → "Asignalo a la variable beers".

---

## 07 - Angular - Services & Dependency Injection

**Motivación:** cómo comunicar componentes entre sí — usando un servicio como "Store" (almacenamiento centralizado). En Brewery: sincronizar `beer-list` (agrega ítems) con `cart` (los muestra).

**Definición de Servicio (cita textual):** "Un servicio es típicamente una clase con un propósito limitado y bien definido. Debería hacer algo específico y hacerlo bien." Se usan para separar la lógica de acceso a datos; los componentes los consumen.

**Crear con CLI:** `ng generate service BeerCart` (o `ng g s BeerCart`) →
```ts
@Injectable({ providedIn: 'root' })
export class BeerCartService {
  constructor() { }
}
```

**Anti-patrón mostrado explícitamente (para corregirlo después):** instanciar el servicio con `new BeerCartService()` dentro de `ngOnInit`. Problemas remarcados: el componente debe saber cómo crear el servicio (acoplamiento); se crea una instancia nueva cada vez; **no se pueden compartir datos entre componentes** — este es el problema central que resuelve la DI.

**Dependency Injection — definición de la cátedra:** "un patrón a nivel de código [que] mejora la modularidad del código. Es la forma por la cual podemos crear una instancia de una clase, sin saber cómo crearla." "Inyectar" = crear una clase (si hace falta) y enviarla; "Dependencias" = las clases de las que depende el componente. (Se profundiza en la materia "Arquitecturas Web".)

**Cómo inyectar un servicio:** 1) el servicio debe tener `@Injectable({ providedIn: "root" })`; 2) el componente lo recibe por **constructor injection**:
```ts
constructor(private beerCartService: BeerCartService) { }
```

**Ventajas de DI remarcadas explícitamente:** **Escalable** (dependencia no atada fuertemente a la clase), **Testeable** (más fácil mockear para tests), **Flexible** (permite subclases distintas según configuración).

**`addToCart` — solución dada en clase:**
```ts
addToCart(beer: Beer) {
  let item: Beer = this.cartList.find((v1) => v1.name == beer.name);
  if (!item) {
    this.cartList.push({ ...beer });
  } else {
    item.quantity += beer.quantity;
  }
}
```
(`{ ...beer }` = "clonar el objeto, notación funcional"; `.find` = "buscador".)

**Observable (remite a "Prog 2"):** "Un objeto que es observable tiene la particularidad de que cuando cambia, puede emitir un evento que otros puedan escuchar." Ejemplo: si se agrega una cerveza a una lista observable, el carrito "escucha" el cambio y se actualiza.

**`BehaviorSubject` (RxJS):** clase de RxJS que es un observable, "hace de proxy (encapsula)" el valor observado; maneja múltiples suscripciones a un único flujo; emite al suscribirse y en cada cambio; se construye con un valor inicial (por defecto).

**Pasos de implementación dados en clase (en el servicio):** 1) importar `Observable` y `BehaviorSubject` de RxJS; 2) crear un `BehaviorSubject` privado; 3) exponer una variable pública `items: Observable<...>` derivada de él; 4) al final de `addToCart`, llamar a `.next(...)`; 5) en `cart`, suscribirse a `items` para recibir actualizaciones.

**Referencias:** Angular.io - Getting Started; Angular.io - Component Interaction; Branch en el Repositorio.

---

## Nota sobre versión de Angular

Este material corresponde aproximadamente a **Angular 12** (mencionado explícitamente en la clase 1); una slide de la clase 4 cita un "Branch en el Repositorio (2017, Angular 2)" como referencia histórica antigua. Es decir, todo el curso usa convenciones **basadas en NgModules**, previas a las APIs modernas. Antes de asumir que algo aplica tal cual al TP actual, tené en cuenta:

- **NgModules**: todo el material asume `app.module.ts`, `declarations`, `imports` de módulo (`BrowserModule`, `FormsModule`, `HttpClientModule`, `AppRoutingModule`). Angular moderno (v17+) favorece **standalone components** por defecto (sin NgModules), aunque los NgModules siguen siendo válidos.
- **Directivas estructurales con asterisco**: `*ngIf`, `*ngFor` se usan en todo el material. Angular v17+ introdujo la sintaxis de control flow **`@if`, `@for`, `@switch`**, que las reemplaza en proyectos nuevos (aunque `*ngIf`/`*ngFor` siguen funcionando con `CommonModule`).
- `ng generate component`/`ng generate service` siguen siendo válidos, pero el CLI moderno genera componentes **standalone** por defecto — algo que este material no contempla.
- `[ngClass]` sigue siendo válido; en templates modernos a veces se prefiere `[class.nombre]="condición"`.
- El uso de **RxJS `BehaviorSubject`** para comunicación entre componentes sigue vigente hoy tal cual se enseña acá — no está desactualizado conceptualmente.

**Recomendación para el asistente de IA:** priorizar siempre la terminología, nombres de archivos/carpetas y ejemplos EXACTOS de este documento (es lo que espera la cátedra), pero si el alumno pregunta puntualmente por Angular moderno o el enunciado del TP pide standalone components / `@if`/`@for`, aclarar la diferencia explícitamente en vez de asumir en silencio la sintaxis vieja.
