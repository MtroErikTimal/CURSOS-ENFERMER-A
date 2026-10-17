import { useState, type FormEvent, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BadgeCheck, BookOpen, Check, ChevronDown, CircleHelp, ClipboardCheck, Download, ExternalLink, FileText, Gamepad2, HeartPulse, Layers3, LockKeyhole, RotateCcw, ShieldCheck, Stethoscope } from "lucide-react";
import { learningAreas } from "../content/areas";
import { gameQuestions } from "../content/gameQuestions";
import { site } from "../content/site";
import SocialLinks from "../components/SocialLinks";

export function HomePage() {
  return <>
    <section className="hero"><div className="hero-copy"><p className="eyebrow"><span /> APRENDER PARA CUIDAR MEJOR</p><h1>Aprende enfermería. <em>Transforma el cuidado.</em></h1><p className="hero-description">Bienvenido a {site.name}: un espacio académico para fortalecer conocimientos, desarrollar pensamiento clínico y crecer en enfermería.</p><div className="hero-actions"><Link className="button button-green" to="/cursos">Explorar el aula <ArrowRight size={17} aria-hidden="true" /></Link><Link className="quiet-link" to="/docente">Conocer al docente <ArrowUpRight size={15} aria-hidden="true" /></Link></div><div className="hero-note"><Check size={15} aria-hidden="true" /> Formación para estudiantes y profesionales de enfermería</div></div>
      <div className="hero-visual"><img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85" alt="Profesional de la salud en un entorno clínico" /><div className="image-caption"><span className="caption-mark"><HeartPulse size={18} aria-hidden="true" /></span><span><strong>El cuidado se aprende</strong><small>Conocimiento al servicio de las personas</small></span></div><span className="image-index">ENFERMERÍA · EDUCACIÓN</span></div><div className="hero-side-note">FORMACIÓN · REFLEXIÓN · CUIDADO</div>
    </section>
    <section className="areas-entry-section"><div><p className="eyebrow">EXPLORA EL AULA</p><h2>Áreas de aprendizaje</h2><p>Consulta las áreas de formación y entra a la que quieres estudiar.</p></div><Link className="areas-entry-card" to="/areas"><span className="areas-entry-icon"><BookOpen size={25} aria-hidden="true" /></span><span><strong>Ver áreas de aprendizaje</strong><small>Explora el catálogo por temas</small></span><ArrowRight size={18} aria-hidden="true" /></Link></section>
    <section className="home-feature-band"><div><p className="eyebrow">APRENDIZAJE ACTIVO</p><h2>Estudia, practica y repasa.</h2><p>Accede a actividades interactivas o juega con tu grupo en una sesión de Kahoot.</p></div><div className="home-feature-links"><Link to="/juegos"><Gamepad2 size={20} aria-hidden="true" /><span><strong>Juegos de aprendizaje</strong><small>Reto interactivo individual</small></span><ArrowRight size={16} aria-hidden="true" /></Link><Link to="/kahoot"><Layers3 size={20} aria-hidden="true" /><span><strong>Kahoot en el aula</strong><small>Reproduce actividades compartidas</small></span><ArrowRight size={16} aria-hidden="true" /></Link></div></section>
    <section className="home-teacher-band"><TeacherPhoto presentation="circle" /><div><p className="eyebrow">RESPONSABLE ACADÉMICO</p><h2>{site.instructor}</h2><p>Enfermería, terapia respiratoria y educación superior.</p></div><Link className="button button-dark" to="/docente">Conocer su formación <ArrowRight size={16} aria-hidden="true" /></Link></section>
  </>;
}

export function CoursesPage() {
  return <PageIntro eyebrow="CATÁLOGO ACADÉMICO" title="Todos los cursos" description="Los cursos publicados se mostrarán aquí. También puedes explorar el plan de contenidos por áreas de aprendizaje." icon={<BookOpen size={24} aria-hidden="true" />}><section className="catalog-empty content-panel"><BookOpen size={26} aria-hidden="true" /><h2>Explora las áreas del aula</h2><p>Consulta los temas, unidades y estructura académica organizada por área.</p><Link className="button button-green" to="/areas">Ver áreas de aprendizaje <ArrowRight size={16} aria-hidden="true" /></Link></section></PageIntro>;
}

export function LearningAreasPage() {
  return <PageIntro eyebrow="CATÁLOGO ACADÉMICO" title="Áreas de aprendizaje" description="Selecciona un área para abrir su ficha, unidades, lecciones, recursos y actividades." icon={<Layers3 size={24} aria-hidden="true" />}><div className="page-area-grid">{learningAreas.map((area, index) => <Link className="page-area-card" key={area.slug} to={`/areas/${area.slug}`}><span className={`area-card-mark art-${area.color}`}><span>{String(index + 1).padStart(2, "0")}</span></span><div><small>ÁREA DE APRENDIZAJE</small><h2>{area.title}</h2><p>{area.description}</p></div><ArrowUpRight size={17} aria-hidden="true" /></Link>)}</div></PageIntro>;
}

export function AreaPage() {
  const { slug } = useParams();
  const area = learningAreas.find((item) => item.slug === slug);
  if (!area) return <NotFoundPage />;
  return <PageIntro eyebrow="ÁREA DE APRENDIZAJE" title={area.title} description={area.description} icon={<HeartPulse size={24} aria-hidden="true" />}><div className="area-detail-layout">
    <section className="content-panel area-objective">
      <p className="eyebrow">DISEÑO ACADÉMICO</p><h2>Ficha del área</h2>
      <div className="area-facts"><div><small>NIVEL</small><p>{area.level || "Por definir"}</p></div><div><small>DURACIÓN ESTIMADA</small><p>{area.estimatedDuration || "Por definir"}</p></div></div>
      <div className="area-outline-grid"><EditableList title="Objetivos de aprendizaje" items={area.objectives} /><EditableList title="Competencias" items={area.competencies} /><EditableList title="Requisitos previos" items={area.prerequisites} /></div>
    </section>
    <section className="content-panel">
      <div className="panel-title-row"><div><p className="eyebrow">CONTENIDO DEL CURSO</p><h2>Unidades y temas</h2></div><Layers3 size={21} aria-hidden="true" /></div>
      <div className="unit-list">{area.units.map((unit, index) => <details className="unit-item" key={unit.title}>
        <summary><span className="unit-index">0{index + 1}</span><strong>{unit.title}</strong><ChevronDown size={17} aria-hidden="true" /></summary>
        <div>{unit.topics.length ? <ul>{unit.topics.map((topic) => <li className="topic-item" key={topic.title}><strong>{topic.title}</strong>{topic.lessons.length > 0 && <ul>{topic.lessons.map((lesson) => <li key={lesson.title}><strong>{lesson.title}</strong><span>{lesson.summary}</span></li>)}</ul>}</li>)}</ul> : <p>Agrega temas y lecciones a esta unidad en <code>src/content/areas.ts</code>.</p>}</div>
      </details>)}</div>
    </section>
    <section className="content-panel"><div className="panel-title-row"><div><p className="eyebrow">BIBLIOTECA</p><h2>Recursos de estudio</h2></div><FileText size={21} aria-hidden="true" /></div><ContentList items={area.resources} empty="Agrega aquí presentaciones, lecturas autorizadas, videos y documentos descargables." /></section>
    <section className="content-panel"><div className="panel-title-row"><div><p className="eyebrow">PRÁCTICA Y REPASO</p><h2>Actividades y evaluación</h2></div><ClipboardCheck size={21} aria-hidden="true" /></div><h3 className="subsection-title">Actividades</h3><ContentList items={area.activities} empty="Agrega aquí actividades y casos ficticios." /><h3 className="subsection-title">Evaluación</h3><ContentList items={area.evaluation} empty="Agrega aquí evaluaciones y criterios de aprobación." /></section>
    <section className="content-panel"><div className="panel-title-row"><div><p className="eyebrow">FUENTES</p><h2>Bibliografía</h2></div><BookOpen size={21} aria-hidden="true" /></div><ContentList items={area.bibliography} empty="Añade referencias verificables y versiones autorizadas. No agregues citas sin confirmar." /></section>
  </div><Link className="back-link" to="/cursos">← Volver al catálogo</Link></PageIntro>;
}

export function GamePage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const question = gameQuestions[questionIndex];
  function nextQuestion() { if (questionIndex + 1 === gameQuestions.length) { setFinished(true); return; } setQuestionIndex((current) => current + 1); setChoice(null); }
  function restartGame() { setQuestionIndex(0); setChoice(null); setScore(0); setFinished(false); }
  return <PageIntro eyebrow="JUEGO INTERACTIVO" title="Reto de aprendizaje" description="Pon a prueba conceptos de aprendizaje responsable y práctica educativa en enfermería." icon={<Gamepad2 size={24} aria-hidden="true" />}><div className="game-layout">
    <section className="game-card" aria-live="polite">{!finished ? <><div className="game-topline"><span>RETO INDIVIDUAL</span><span>{questionIndex + 1} / {gameQuestions.length}</span></div><div className="game-progress"><span style={{ width: `${((questionIndex + 1) / gameQuestions.length) * 100}%` }} /></div><h2>{question.prompt}</h2><div className="answer-list">{question.options.map((option, index) => <button className={`answer-option${choice === index ? " is-selected" : ""}${choice !== null && index === question.answer ? " is-correct" : ""}${choice === index && choice !== question.answer ? " is-incorrect" : ""}`} key={option} disabled={choice !== null} onClick={() => { setChoice(index); if (index === question.answer) setScore((current) => current + 1); }}><span>{String.fromCharCode(65 + index)}</span>{option}{choice !== null && index === question.answer && <Check size={17} aria-hidden="true" />}</button>)}</div>{choice !== null && <div className="answer-feedback"><strong>{choice === question.answer ? "¡Correcto!" : "Revisa este concepto"}</strong><p>{question.explanation}</p><button className="button button-green" onClick={nextQuestion}>{questionIndex + 1 === gameQuestions.length ? "Ver resultado" : "Siguiente pregunta"} <ArrowRight size={16} aria-hidden="true" /></button></div>}</> : <div className="game-result"><span className="result-icon"><BadgeCheck size={28} aria-hidden="true" /></span><p className="eyebrow">RETO COMPLETADO</p><h2>{score} de {gameQuestions.length} respuestas correctas</h2><p>Repasa las explicaciones y vuelve a intentarlo cuando quieras.</p><button className="button button-dark" onClick={restartGame}><RotateCcw size={16} aria-hidden="true" /> Volver a jugar</button></div>}</section>
    <aside className="game-aside"><ShieldCheck size={20} aria-hidden="true" /><h2>Práctica educativa</h2><p>Este juego trabaja conceptos generales de aprendizaje. No evalúa competencias clínicas ni sustituye protocolos o supervisión profesional.</p><small>Las preguntas editables están en <code>src/content/gameQuestions.ts</code>.</small></aside>
  </div></PageIntro>;
}

export function KahootPage() {
  const [source, setSource] = useState("");
  const [embed, setEmbed] = useState("");
  const [error, setError] = useState("");
  const [pin, setPin] = useState("");
  function loadKahoot(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setError(""); const id = extractKahootId(source); if (!id) { setEmbed(""); setError("Pega un enlace HTTPS de Kahoot con un identificador de juego válido."); return; } setEmbed(`https://embed.kahoot.it/${id}`); }
  const validPin = /^\d{4,10}$/.test(pin);
  return <PageIntro eyebrow="JUEGO EN GRUPO" title="Kahoot dentro del aula" description="Inserta un Kahoot compartido para reproducirlo aquí, o abre Kahoot.it para unirte a una sesión en vivo con PIN." icon={<Layers3 size={24} aria-hidden="true" />}><div className="kahoot-layout">
    <section className="content-panel kahoot-setup"><p className="eyebrow">ACTIVIDAD COMPARTIDA</p><h2>Reproducir un Kahoot</h2><p>Usa el enlace compartido de un juego público o de práctica cuyo propietario permita la inserción.</p><form className="kahoot-form" onSubmit={loadKahoot}><label htmlFor="kahoot-url">Enlace compartido de Kahoot</label><div><input id="kahoot-url" type="url" value={source} onChange={(event) => setSource(event.target.value)} placeholder="https://create.kahoot.it/share/..." required aria-describedby={error ? "kahoot-error" : "kahoot-help"} /><button className="button button-green" type="submit">Cargar <ArrowRight size={16} aria-hidden="true" /></button></div>{error ? <p className="form-error" id="kahoot-error" role="alert">{error}</p> : <p className="form-help" id="kahoot-help">Solo se aceptan enlaces HTTPS de Kahoot.</p>}</form>
      <div className="kahoot-live"><div><p className="eyebrow">SESIÓN EN VIVO</p><h3>¿Tienes un PIN de juego?</h3><p>El juego en vivo se abre en Kahoot.it para ingresar el PIN oficial.</p></div><form onSubmit={(event) => { event.preventDefault(); if (validPin) window.open("https://kahoot.it/", "_blank", "noopener,noreferrer"); }}><label className="sr-only" htmlFor="kahoot-pin">PIN de Kahoot</label><input id="kahoot-pin" inputMode="numeric" pattern="[0-9]{4,10}" maxLength={10} value={pin} onChange={(event) => setPin(event.target.value.replace(/\D/g, ""))} placeholder="PIN" /><button className="button button-dark" type="submit" disabled={!validPin}>Unirme <ExternalLink size={15} aria-hidden="true" /></button></form></div>
    </section><section className={`kahoot-stage${embed ? " has-embed" : ""}`} aria-label="Reproductor de Kahoot">{embed ? <><iframe src={embed} title="Juego Kahoot insertado" allow="fullscreen; autoplay" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /><a href={embed} target="_blank" rel="noreferrer">¿No carga? Abrir el Kahoot en otra pestaña <ExternalLink size={14} aria-hidden="true" /></a></> : <div className="kahoot-empty"><Layers3 size={33} aria-hidden="true" /><h2>El juego aparecerá aquí</h2><p>Pega el enlace compartido para cargar un Kahoot compatible con inserción.</p></div>}</section>
  </div></PageIntro>;
}

export function TeacherPage() {
  return <PageIntro eyebrow="RESPONSABLE ACADÉMICO" title={site.instructor} description="Formación en enfermería, terapia respiratoria y educación superior." icon={<Stethoscope size={24} aria-hidden="true" />}><div className="teacher-page-grid"><div className="teacher-portrait"><TeacherPhoto presentation="portrait" /></div><section className="content-panel teacher-credentials"><p className="eyebrow">FORMACIÓN ACADÉMICA</p><h2>Enseñanza con perspectiva profesional.</h2><ul>{site.qualifications.map((qualification) => <li key={qualification}><Check size={16} aria-hidden="true" />{qualification}</li>)}</ul><div className="teacher-bio-note"><CircleHelp size={18} aria-hidden="true" /><p>La semblanza puede ampliarse con una biografía y enlaces profesionales autorizados.</p></div><div className="teacher-social"><p className="eyebrow">SÍGUEME EN REDES</p><SocialLinks withLabels /></div></section></div></PageIntro>;
}

function TeacherPhoto({ presentation }: { presentation: "circle" | "portrait" }) {
  const [imageFailed, setImageFailed] = useState(false);
  if (site.photo && !imageFailed) {
    return <img className={presentation === "circle" ? "teacher-photo-circle" : "teacher-photo-image"} src={site.photo} alt={site.instructor} onError={() => setImageFailed(true)} />;
  }

  if (presentation === "circle") {
    return <div className="teacher-initials" role="img" aria-label="Retrato de reemplazo del docente">ERT</div>;
  }

  return <div className="teacher-photo-placeholder" role="img" aria-label="Espacio reservado para la fotografía del docente"><span>ERT</span><small>Guarda la foto como public/images/erik-rivera-timal.jpg</small></div>;
}

export function CertificatePage() {
  return <PageIntro eyebrow="RECONOCIMIENTO ACADÉMICO" title="Constancias de finalización" description="Consulta cómo estará disponible la descarga al completar el seguimiento académico." icon={<BadgeCheck size={24} aria-hidden="true" />}><div className="certificate-section certificate-page"><div className="certificate-copy"><p className="eyebrow">TU AVANCE, RECONOCIDO</p><h2>Descarga al completar el curso.</h2><p>El sistema habilitará el archivo cuando se cumplan las actividades requeridas y el responsable académico autorice su emisión.</p></div><div className="certificate-panel"><div className="certificate-panel-heading"><span className="certificate-icon"><LockKeyhole size={21} aria-hidden="true" /></span><span><small>ESTADO</small><strong>Descarga no disponible</strong></span></div><div className="certificate-status"><span /> Requiere cuenta y validación de avance</div><button className="button certificate-download" disabled><Download size={16} aria-hidden="true" /> Descargar constancia</button><p>Se activará con autenticación, seguimiento de actividades y autorización docente.</p></div><p className="certificate-disclaimer">Es una constancia interna de finalización; no equivale a un título profesional, cédula ni certificación oficial.</p></div></PageIntro>;
}

const faqItems = [
  ["¿Qué áreas de enfermería aborda el aula?", "La propuesta comprende fundamentos, cuidado clínico, farmacología, proceso enfermero, investigación y seguridad del paciente."],
  ["¿Cómo se habilita el acceso a los cursos?", "El contenido privado requiere una cuenta y autorización. Esa función se habilitará cuando estén conectadas la autenticación y las reglas de acceso."],
  ["¿Puedo usar Kahoot desde el aula?", "Puedes insertar un enlace compartido compatible o abrir Kahoot.it para unirte a una sesión en vivo con PIN."],
  ["¿Las herramientas educativas sustituyen protocolos clínicos?", "No. Las decisiones asistenciales deben verificarse con la prescripción, el protocolo institucional y un profesional responsable."],
  ["¿Cuándo podré descargar una constancia?", "Al completar las actividades requeridas y cuando el docente autorice la emisión. La constancia será interna, no una certificación oficial."],
];

export function FaqPage() {
  return <PageIntro eyebrow="AYUDA" title="Preguntas frecuentes" description="Información sobre el contenido, las actividades y el uso del aula."><div className="faq-page-list">{faqItems.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></PageIntro>;
}

export function AccessPage() {
  return <PageIntro eyebrow="ACCESO DE ESTUDIANTES" title="Ingresa al aula" description="Las áreas públicas pueden consultarse sin cuenta. Los cursos privados requerirán autenticación y autorización." icon={<LockKeyhole size={24} aria-hidden="true" />}><section className="access-page-panel"><ShieldCheck size={28} aria-hidden="true" /><h2>Acceso de estudiantes</h2><p>La autenticación y los permisos de curso deben configurarse antes de solicitar credenciales. Esta página no recibe ni almacena contraseñas.</p><Link className="button button-green" to="/cursos">Explorar áreas públicas <ArrowRight size={16} aria-hidden="true" /></Link></section></PageIntro>;
}

export function LegalPage({ page }: { page: "privacy" | "terms" }) {
  const privacy = page === "privacy";
  return <PageIntro eyebrow={privacy ? "DATOS PERSONALES" : "CONDICIONES DE USO"} title={privacy ? "Aviso de privacidad" : "Términos de uso"} description={privacy ? "Información sobre los datos tratados en las páginas públicas." : "Condiciones para consultar el contenido educativo."} icon={privacy ? <ShieldCheck size={24} aria-hidden="true" /> : <FileText size={24} aria-hidden="true" />}><article className="legal-page content-panel">{privacy ? <><h2>Versión pública</h2><p>Esta versión no solicita registro, contraseñas, datos de pacientes ni información clínica identificable. La búsqueda de áreas se procesa en el navegador. Las imágenes, tipografías y recursos de terceros pueden recibir datos técnicos de conexión conforme a sus políticas.</p><h2>Servicios futuros</h2><p>Antes de habilitar cuentas, pagos o analítica se publicará un aviso actualizado que identifique al responsable, las finalidades, conservación y medios para ejercer los derechos aplicables. Este texto informativo requiere revisión legal antes de iniciar esas operaciones.</p></> : <><h2>Uso educativo</h2><p>La información tiene fines educativos. No sustituye la valoración profesional, prescripciones, protocolos institucionales ni capacitación práctica supervisada. No introduzcas información identificable de pacientes.</p><h2>Constancias</h2><p>Las constancias acreditarán la finalización interna de actividades; no constituyen título profesional ni certificación oficial.</p></>}</article></PageIntro>;
}

export function NotFoundPage() {
  return <PageIntro eyebrow="PÁGINA NO ENCONTRADA" title="No encontramos esa sección" description="Revisa el enlace o regresa al inicio del aula."><Link className="button button-green" to="/">Ir al inicio <ArrowRight size={16} aria-hidden="true" /></Link></PageIntro>;
}

function PageIntro({ eyebrow, title, description, icon, children }: { eyebrow: string; title: string; description: string; icon?: ReactNode; children: ReactNode }) {
  return <div className="inner-page"><header className="inner-page-heading">{icon && <span className="inner-page-icon">{icon}</span>}<div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div></header><div className="inner-page-content">{children}</div></div>;
}

function ContentList({ items, empty }: { items: string[]; empty: string }) {
  return items.length ? <ul className="resource-list">{items.map((item) => <li key={item}><FileText size={17} aria-hidden="true" />{item}</li>)}</ul> : <p className="editable-note">{empty}</p>;
}

function EditableList({ title, items }: { title: string; items: string[] }) {
  return <div className="editable-list"><h3>{title}</h3>{items.length ? <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul> : <p>Agrega contenido en <code>src/content/areas.ts</code>.</p>}</div>;
}

function extractKahootId(source: string) {
  const pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  const value = source.trim();
  if (pattern.test(value)) return value;
  try {
    const url = new URL(value);
    const allowedHosts = ["create.kahoot.it", "embed.kahoot.it", "kahoot.it", "www.kahoot.it"];
    if (url.protocol !== "https:" || !allowedHosts.includes(url.hostname)) return null;
    const pathId = url.pathname.split("/").find((part) => pattern.test(part));
    const queryId = url.searchParams.get("quiz-id");
    const id = pathId ?? queryId;
    return id && pattern.test(id) ? id : null;
  } catch {
    return null;
  }
}