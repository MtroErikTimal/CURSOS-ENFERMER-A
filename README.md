# El Aula Virtual del Profe Erik Timal

Plataforma educativa de enfermería dirigida por el Mtro. Erik Rivera Timal.

## Diagnóstico inicial

El repositorio parte de un único `README.md`; no contiene una aplicación, backend, base de datos ni archivos de usuario que deban migrarse. Node.js 24 y npm 11 están disponibles en el entorno. Por ello se propone iniciar una aplicación nueva sin sustituir ni borrar tecnología existente.

## Arquitectura propuesta

- **Interfaz:** React, TypeScript y Vite; sitio adaptable y estático para facilitar el despliegue.
- **Autenticación y datos:** Supabase Auth y PostgreSQL. Las políticas RLS deben validar cada lectura y escritura privada por rol, asignación docente y acceso vigente; ocultar controles en la interfaz no es autorización.
- **Archivos:** Supabase Storage en buckets privados, con permisos comprobados y enlaces temporales emitidos solo tras autorizar la solicitud.
- **Operaciones privilegiadas:** funciones de servidor/Edge Functions para acciones administrativas, auditoría y futuras integraciones. Las claves de servicio nunca se envían al navegador.
- **Pagos futuros:** adaptador de proveedor desacoplado. Una suscripción solo se activa tras verificar en servidor la firma y el estado del evento del proveedor; la primera versión puede usar autorizaciones manuales.
- **Despliegue:** hosting estático para el frontend y Supabase para los servicios de backend. Planes gratuitos, límites, residencia de datos y costos cambian; se verificarán directamente con cada proveedor antes de producción y según el tráfico esperado.
- **Publicación actual:** GitHub Pages está preparado mediante GitHub Actions; al desplegar este repositorio público, la URL del proyecto será `https://mtroeriktimal.github.io/CURSOS-ENFERMER-A/`.

Entidades iniciales a validar en el diseño de base de datos: perfiles, roles, cursos, asignaciones de docentes, unidades, lecciones, recursos, accesos, progreso, evaluaciones, preguntas, intentos, configuración y auditoría. Los datos de pacientes identificables quedan fuera de alcance.

## Etapas

1. Inspección del repositorio: completada.
2. Arquitectura y modelo de permisos: propuesta inicial; se concreta antes de conectar servicios.
3. Página pública y navegación: identidad, áreas temáticas, perfil docente, constancias informativas y avisos de uso implementados.
4. Autenticación, base de datos y políticas de acceso.
5. Cursos y biblioteca privada.
6. Calculadoras y fichas de escalas con fórmulas y fuentes verificadas.
7. Evaluaciones, casos ficticios y progreso.
8. Accesos manuales y preparación de pagos.
9. Pruebas funcionales y de permisos.
10. Despliegue, configuración y guía de operación.

Las páginas de áreas, el juego individual y el espacio de Kahoot están implementados en frontend. El acceso privado, la inscripción, el registro de progreso, la emisión de constancias, las herramientas clínicas y los cobros todavía requieren backend o configuración académica antes de operar.

## Edición de contenido

- **Las 13 áreas, datos académicos, unidades, temas, lecciones, recursos, actividades, evaluaciones y bibliografía:** edita `src/content/areas.ts`. Cada área abre en `/areas/<slug>` y utiliza la misma plantilla.
- **Preguntas del juego individual:** edita `src/content/gameQuestions.ts`; cada pregunta lleva opciones, índice de respuesta correcta y retroalimentación.
- **Nombre, responsable, foto y formación:** edita `src/content/site.ts`. Coloca la foto en `public/images/erik-rivera-timal.jpg`; el perfil la detecta con esa ruta y muestra iniciales mientras no exista el archivo.
- **Rutas y menú desplegable:** `src/PortalApp.tsx` y `src/components/SiteLayout.tsx`.
- **Páginas y comportamientos:** `src/pages/Pages.tsx`; estilos compartidos y responsive: `src/styles.css`.
- **Hosting estático compatible con `_redirects`:** el archivo `public/_redirects` reenvía las rutas de la SPA a `index.html`; verifica la configuración equivalente si eliges otro proveedor.

El reproductor de Kahoot acepta enlaces HTTPS de dominios de Kahoot. Algunos juegos pueden deshabilitar la inserción; en ese caso, usa el enlace alternativo que aparece bajo el reproductor. Las actividades deben contar con permiso del propietario.

Antes de recopilar datos, habilitar inscripciones, publicar archivos privados o emitir constancias, se deben completar la autenticación, las políticas de acceso y la revisión legal de los avisos para la operación prevista.

## Desarrollo local

```sh
npm install
npm run dev
```

Compilación de producción: `npm run build`. GitHub Pages publica automáticamente al actualizar `main`; el estado y URL final aparecen en **Settings → Pages** y en la ejecución de la acción **Deploy to GitHub Pages**.