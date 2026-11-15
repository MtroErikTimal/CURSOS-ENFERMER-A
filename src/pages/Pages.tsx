import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Activity, ArrowRight, ArrowUpRight, Baby, BadgeCheck, BookOpen, Check, ChevronDown, CircleHelp, ClipboardCheck, ClipboardList, Dna, Download, ExternalLink, FileText, Gamepad2, GraduationCap, HeartPulse, Layers3, LockKeyhole, Microscope, Pill, Presentation, RotateCcw, Scissors, ShieldCheck, Stethoscope, Users } from "lucide-react";
import { learningAreas } from "../content/areas";
import { gameQuestions } from "../content/gameQuestions";
import { topicQuizzes } from "../content/topicQuizzes";
import { site } from "../content/site";
import SocialLinks from "../components/SocialLinks";
import RPBIGame from "../components/RPBIGame";

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

function AreaIdentityIcon({ slug, size = 23 }: { slug: string; size?: number }) {
  const common = { size, strokeWidth: 2.1, "aria-hidden": true as const };
  switch (slug) {
    case "fundamentos-de-enfermeria": return <BookOpen {...common}/>;
    case "enfermeria-medico-quirurgica": return <Scissors {...common}/>;
    case "cuidados-intensivos": return <Activity {...common}/>;
    case "materno-infantil": return <Baby {...common}/>;
    case "enfermeria-comunitaria": return <Users {...common}/>;
    case "anatomia-fisiologia": return <Dna {...common}/>;
    case "farmacologia": return <Pill {...common}/>;
    case "proceso-atencion-enfermeria": return <ClipboardList {...common}/>;
    case "nanda-nic-noc": return <HeartPulse {...common}/>;
    case "investigacion-enfermeria": return <Microscope {...common}/>;
    case "calidad-seguridad-paciente": return <ShieldCheck {...common}/>;
    case "educacion-evaluacion-enfermeria": return <GraduationCap {...common}/>;
    case "examenes-egreso": return <ClipboardCheck {...common}/>;
    default: return <BookOpen {...common}/>;
  }
}

export function LearningAreasPage() {
  return <PageIntro eyebrow="CATÁLOGO ACADÉMICO" title="Áreas de aprendizaje" description="Selecciona un área para abrir su ficha, unidades, lecciones, recursos y actividades." icon={<Layers3 size={24} aria-hidden="true" />}><div className="page-area-grid">{learningAreas.map((area) => <Link className="page-area-card" key={area.slug} to={`/areas/${area.slug}`}><span className={`area-card-mark art-${area.color}`}><AreaIdentityIcon slug={area.slug} size={24}/></span><div><small>ÁREA DE APRENDIZAJE</small><h2>{area.title}</h2><p>{area.description}</p></div><ArrowUpRight size={17} aria-hidden="true" /></Link>)}</div></PageIntro>;
}

export function AreaPage() {
  const { slug } = useParams();
  const area = learningAreas.find((item) => item.slug === slug);
  const [activeTopicKey, setActiveTopicKey] = useState("");
  useEffect(() => { setActiveTopicKey(""); }, [slug]);
  if (!area) return <NotFoundPage />;
  const topics = area.units.flatMap((unit, unitIndex) => unit.topics.map((topic, topicIndex) => ({ ...topic, unitTitle: unit.title, key: unitIndex + "-" + topicIndex, unitIndex, topicIndex })));
  const activeTopic = topics.find((topic) => topic.key === activeTopicKey) ?? topics[0];
  const activeTopicIndex = activeTopic ? topics.findIndex((topic) => topic.key === activeTopic.key) : -1;
  const previousTopic = activeTopicIndex > 0 ? topics[activeTopicIndex - 1] : undefined;
  const nextTopic = activeTopicIndex >= 0 && activeTopicIndex < topics.length - 1 ? topics[activeTopicIndex + 1] : undefined;
  return <div className="learning-area-shell" data-area={area.slug}>
    <header className="surgical-course-banner"><div className="surgical-brand-mark"><AreaIdentityIcon slug={area.slug} size={34}/></div><div className="surgical-brand-copy"><strong>{area.title}</strong><span>Aprende <i>·</i> Aplica <i>·</i> Cuida</span></div><div className="surgical-unit-label"><strong>{activeTopic?.unitTitle || "Aula de aprendizaje"}</strong><span>LICENCIATURA EN ENFERMERÍA</span></div></header>
    <PageIntro eyebrow="AULA DE APRENDIZAJE · FORMACIÓN EN ENFERMERÍA" title={area.title} description={area.description} icon={<AreaIdentityIcon slug={area.slug} size={24} />}>
      <section className="area-welcome-strip"><div><span className="area-kicker">RUTA DE APRENDIZAJE</span><h2>Estudia. Practica. Integra.</h2><p>{area.level || "Formación en enfermería"}{area.estimatedDuration ? " · " + area.estimatedDuration : ""}</p></div><div className="area-welcome-stats"><span><strong>{topics.length}</strong><small>temas</small></span><span><strong>{topics.reduce((sum, topic) => sum + topic.lessons.length, 0)}</strong><small>lecciones</small></span><span><strong>{area.units.length}</strong><small>unidades</small></span></div></section>
      {area.objectives.length > 0 && <details className="area-objectives-drawer"><summary><BookOpen size={17} /> Propósito y objetivos de la asignatura <ChevronDown size={16} /></summary><div><ul>{area.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul></div></details>}
      {topics.length > 0 ? <div className="area-study-layout">
        <aside className="area-topic-sidebar" aria-label="Temario de la asignatura"><div className="area-sidebar-heading"><span className="area-kicker">CONTENIDO</span><strong>Temario</strong><small>Selecciona un tema para estudiar</small></div>
          {area.units.map((unit, unitIndex) => <section className="area-sidebar-unit" key={unit.title}><h3><span>{String(unitIndex + 1).padStart(2,"0")}</span>{unit.title}</h3>{unit.topics.length ? <nav>{unit.topics.map((topic, topicIndex) => { const key=unitIndex+"-"+topicIndex; const selected=(activeTopic?.key ?? "0-0")===key; return <button type="button" className={"area-topic-link"+(selected?" is-active":"")} key={key} onClick={()=>setActiveTopicKey(key)} aria-current={selected?"page":undefined}><span>{String(topicIndex+1).padStart(2,"0")}</span><strong>{topic.title}</strong><ArrowRight size={15}/></button>; })}</nav> : <p className="area-no-topics">Temas por desarrollar.</p>}</section>)}
        </aside>
        <main className="area-topic-main" key={activeTopic?.key}>
          {activeTopic ? <>
            <div className="area-topic-heading"><div><span className="area-kicker">{activeTopic.unitTitle}</span><h2>{activeTopic.title}</h2><p>{activeTopic.lessons.length} lecciones · Recursos y práctica aplicada</p></div><span className="area-topic-mark"><Stethoscope size={24}/></span></div>
            {activeTopic.title === "Clasificación y reconocimiento del material" && <section className="area-visual-gallery" aria-label="Galería visual del instrumental quirúrgico"><div className="area-section-heading"><span className="area-section-icon"><Presentation size={17}/></span><div><h3>Atlas visual del instrumental</h3><p>Reconoce las familias instrumentales y compara sus características antes de revisar los apuntes.</p></div></div><div className="area-visual-gallery-grid"><figure><img src={`${import.meta.env.BASE_URL}images/galeria-instrumental-quirurgico.svg`} alt="Lámina de instrumental de corte, hemostasia, prensión, separación y sutura" loading="lazy"/><figcaption>Familias de instrumental quirúrgico</figcaption></figure><figure><img src={`${import.meta.env.BASE_URL}images/partes-instrumento-articulado.svg`} alt="Esquema de las partes de una pinza quirúrgica articulada" loading="lazy"/><figcaption>Partes de un instrumento articulado</figcaption></figure><figure><img src={`${import.meta.env.BASE_URL}images/atlas-corte-hemostasia-prension.svg`} alt="Atlas de hojas de bisturí, tijeras Mayo y Metzenbaum, pinzas hemostáticas y de prensión" loading="lazy"/><figcaption>Corte, hemostasia y prensión</figcaption></figure></div></section>}
            {activeTopic.title === "Separadores, portaagujas y material de sutura" && <section className="area-visual-gallery" aria-label="Atlas visual de separadores y suturas"><div className="area-section-heading"><span className="area-section-icon"><Presentation size={17}/></span><div><h3>Atlas visual: exposición y cierre</h3><p>Compara los diseños de separadores, portaagujas y agujas quirúrgicas.</p></div></div><div className="area-visual-gallery-grid"><figure><img src={`${import.meta.env.BASE_URL}images/atlas-separadores-portaagujas-suturas.svg`} alt="Atlas visual de separadores, portaagujas, agujas y suturas" loading="lazy"/><figcaption>Separadores, portaagujas y suturas</figcaption></figure></div></section>}
            {activeTopic.title === "Mobiliario, equipo y material de consumo" && <section className="area-visual-gallery" aria-label="Atlas visual de mobiliario, equipo y consumibles quirúrgicos"><div className="area-section-heading"><span className="area-section-icon"><Presentation size={17}/></span><div><h3>Atlas visual de preparación de sala</h3><p>Identifica los recursos, su función y los puntos básicos de verificación antes del procedimiento.</p></div></div><div className="area-visual-gallery-grid"><figure><img src={`${import.meta.env.BASE_URL}images/atlas-mobiliario-equipo-consumo-quirurgico.svg`} alt="Atlas de mobiliario, equipos y material de consumo de la sala quirúrgica" loading="lazy"/><figcaption>Mobiliario, equipo y material de consumo</figcaption></figure></div></section>}
            {activeTopic.title === "Concepto, objetivos y estructura del área quirúrgica" && <section className="area-visual-gallery" aria-label="Galería visual del entorno quirúrgico"><div className="area-section-heading"><span className="area-section-icon"><Presentation size={17}/></span><div><h3>Galería visual del quirófano</h3><p>Explora las ilustraciones principales antes de revisar los apuntes.</p></div></div><div className="area-visual-gallery-grid"><figure><img src={`${import.meta.env.BASE_URL}images/quirófano-vista-general.svg`} alt="Vista general ilustrada de una sala de operaciones y sus equipos principales" loading="lazy"/><figcaption>Vista general de la sala de operaciones</figcaption></figure><figure><img src={`${import.meta.env.BASE_URL}images/zonificacion-area-quirurgica.svg`} alt="Zonas negra, gris y blanca del área quirúrgica" loading="lazy"/><figcaption>Zonificación del área quirúrgica</figcaption></figure><figure><img src={`${import.meta.env.BASE_URL}images/elementos-sala-operaciones.svg`} alt="Elementos y equipos de una sala de operaciones" loading="lazy"/><figcaption>Elementos de la sala de operaciones</figcaption></figure><figure><img src={`${import.meta.env.BASE_URL}images/flujo-unidad-quirurgica.svg`} alt="Flujo del paciente, personal y materiales en la unidad quirúrgica" loading="lazy"/><figcaption>Flujo de la unidad quirúrgica</figcaption></figure></div></section>}
            <section className="area-learning-section"><div className="area-section-heading"><span className="area-section-icon"><BookOpen size={17}/></span><div><h3>Apuntes y lecciones</h3><p>Abre cada lección para consultar su contenido.</p></div></div>
              {activeTopic.lessons.map((lesson, lessonIndex)=><details className="area-lesson-card" key={lesson.title} open={lessonIndex === 0}><summary><span className="area-lesson-number">{String(lessonIndex+1).padStart(2,"0")}</span><span className="area-lesson-title"><strong>{lesson.title}</strong><small>{lesson.summary}</small></span><ChevronDown size={18}/></summary>
                {lesson.content && <div className="area-lesson-content">{lesson.content.map((section)=><section key={section.heading}><h4>{section.heading}</h4>{section.paragraphs?.map((paragraph,index)=><p key={index}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet)=><li key={bullet}>{bullet}</li>)}</ul>}{section.image && <figure className="area-lesson-visual"><img src={`${import.meta.env.BASE_URL}${section.image}`} alt={section.imageAlt || section.heading} loading="lazy"/><figcaption>{section.heading}</figcaption></figure>}</section>)}</div>}
              </details>)}
            </section>
            <section className="area-learning-section area-topic-resources"><div className="area-section-heading"><span className="area-section-icon"><Presentation size={17}/></span><div><h3>Materiales y recursos de este tema</h3><p>Todo el material de consulta y apoyo permanece reunido aquí, sin enlaces a bibliotecas dispersas.</p></div></div><div className="area-resources-panel"><ContentList items={activeTopic.resources ?? []} empty="Este tema aún no tiene materiales vinculados. Los recursos se incorporarán aquí, junto a sus apuntes y actividades."/></div></section>
            {activeTopic.title === "RPBI y manejo de muestras biológicas" ? <RPBIGame /> : topicActivityConfigs[activeTopic.title] ? <TopicInteractiveActivity topicTitle={activeTopic.title}/> : topicQuizzes[activeTopic.title] ? <TopicQuiz title={activeTopic.title} questions={topicQuizzes[activeTopic.title]} /> : null}
            <nav className="surgical-topic-navigation" aria-label="Navegación entre temas"><button type="button" disabled={!previousTopic} onClick={()=>previousTopic && setActiveTopicKey(previousTopic.key)}><span>‹</span> Anterior</button><Link to="/areas"><BookOpen size={17}/> Todas las asignaturas</Link><button type="button" disabled={!nextTopic} onClick={()=>nextTopic && setActiveTopicKey(nextTopic.key)}>Siguiente <span>›</span></button></nav>
          </> : <div className="area-empty-topic"><BookOpen size={28}/><h2>Selecciona un tema</h2><p>Elige un tema del temario para abrir sus apuntes, recursos y actividad.</p></div>}
        </main>
      </div> : <section className="area-curriculum-empty"><span className="area-section-icon"><Layers3 size={20}/></span><h2>Programa académico en construcción</h2><p>Esta asignatura ya tiene una identidad visual. Incorporemos su temario validado, apuntes, recursos y experiencias de aprendizaje.</p><div className="area-empty-checklist"><span>01 · Temas y unidades</span><span>02 · Material de estudio</span><span>03 · Actividades interactivas</span><span>04 · Evaluación y bibliografía</span></div></section>}
      <Link className="area-back-link" to="/areas">← Volver a todas las asignaturas</Link>
    </PageIntro>
  </div>;
}

type TopicQuizProps = {
  title: string;
  questions: typeof topicQuizzes[string];
};

function TopicQuiz({ title, questions }: TopicQuizProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const question = questions[questionIndex];

  function retryQuestion() {
    setChoice(null);
  }

  function nextQuestion() {
    if (questionIndex + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setQuestionIndex((current) => current + 1);
    setChoice(null);
  }

  function restartQuiz() {
    setQuestionIndex(0);
    setChoice(null);
    setScore(0);
    setFinished(false);
  }

  return <section className="topic-quiz" aria-live="polite">
    <div className="topic-quiz-heading"><span><Gamepad2 size={18} aria-hidden="true" /></span><div><p className="eyebrow">EXPERIENCIA INTERACTIVA</p><h3>Comprueba lo aprendido</h3><small>{title}</small></div></div>
    {!finished ? <>
      <div className="topic-quiz-progress"><span>Pregunta {questionIndex + 1} de {questions.length}</span><span>{score} aciertos</span></div>
      <div className="topic-quiz-track"><span style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }} /></div>
      <h4 className="topic-quiz-question">{question.prompt}</h4>
      <div className="topic-quiz-options">{question.options.map((option, index) => <button type="button" className={`topic-quiz-option${choice === index ? " is-selected" : ""}${choice !== null && index === question.answer ? " is-correct" : ""}${choice === index && choice !== question.answer ? " is-incorrect" : ""}`} key={option} disabled={choice !== null} onClick={() => { setChoice(index); if (index === question.answer) setScore((current) => current + 1); }}><span>{String.fromCharCode(65 + index)}</span>{option}{choice !== null && index === question.answer && <Check size={17} aria-hidden="true" />}</button>)}</div>
      {choice !== null && <div className={`topic-quiz-feedback ${choice === question.answer ? "is-success" : "is-guidance"}`} role="status">
        <strong>{choice === question.answer ? question.success : "Vamos a reforzar este concepto"}</strong>
        <p>{choice === question.answer ? question.explanation : question.suggestion}</p>
        {choice === question.answer ? <button type="button" className="button button-green" onClick={nextQuestion}>{questionIndex + 1 === questions.length ? "Ver resultado" : "Siguiente pregunta"} <ArrowRight size={15} aria-hidden="true" /></button> : <button type="button" className="button button-dark" onClick={retryQuestion}>Intentar de nuevo <RotateCcw size={15} aria-hidden="true" /></button>}
      </div>}
    </> : <div className="topic-quiz-result"><BadgeCheck size={28} aria-hidden="true" /><p className="eyebrow">RETO COMPLETADO</p><h4>{score} de {questions.length} respuestas correctas</h4><p>{score === questions.length ? "¡Excelente trabajo! Dominaste las preguntas de este tema." : "Buen esfuerzo. Repasa las sugerencias y vuelve a intentarlo para fortalecer tu aprendizaje."}</p><button type="button" className="button button-dark" onClick={restartQuiz}><RotateCcw size={15} aria-hidden="true" /> Volver a jugar</button></div>}
  </section>;
}


type TopicActivityMode = "case" | "sequence" | "classify" | "checklist" | "calculation" | "match";
type TopicActivityConfig = { mode: TopicActivityMode; title: string; instruction: string; items: string[]; answer: string[]; options?: string[]; explanation: string; };
const topicActivityConfigs: Record<string, TopicActivityConfig> = {
 "Separadores, portaagujas y material de sutura": {mode:"match",title:"Estación de exposición y cierre",instruction:"Relaciona cada instrumento o material con su característica principal. Usa las diferencias morfológicas para reconocerlos.",items:["Farabeuf","Weitlaner","Balfour","Mayo-Hegar","Olsen-Hegar","Aguja de punta redonda","Sutura monofilamento"],options:["Separador manual pequeño de valvas acodadas","Separador autoestático con dientes o puntas","Separador autoestático abdominal con valvas laterales","Portaagujas de uso general con anillas y cremallera","Portaagujas que integra tijeras para cortar sutura","Punta cónica que separa fibras tisulares","Hilo de una sola hebra"],answer:["Separador manual pequeño de valvas acodadas","Separador autoestático con dientes o puntas","Separador autoestático abdominal con valvas laterales","Portaagujas de uso general con anillas y cremallera","Portaagujas que integra tijeras para cortar sutura","Punta cónica que separa fibras tisulares","Hilo de una sola hebra"],explanation:"La forma orienta la función: los separadores mantienen exposición, los portaagujas controlan la aguja y la geometría de la punta y estructura del hilo describen propiedades de sutura. Confirma el modelo y la indicación."},
 "Mobiliario, equipo y material de consumo": {mode:"match",title:"Estación de preparación segura de la sala",instruction:"Relaciona cada recurso con su función o verificación prioritaria. Considera las responsabilidades del personal autorizado y los protocolos locales.",items:["Mesa quirúrgica","Lámpara quirúrgica","Estación de anestesia","Unidad de electrocirugía","Sistema de aspiración","Mesa de Mayo","Compresas quirúrgicas","Electrodo de retorno"],options:["Sostener y posicionar al paciente con accesorios compatibles","Proporcionar iluminación del campo operatorio","Administrar anestesia y apoyar ventilación bajo responsabilidad de anestesiología","Aplicar energía de alta frecuencia para corte o coagulación","Evacuar líquidos mediante recipiente, tubuladura y cánula","Mantener instrumental de uso inmediato","Material textil que requiere control y conteo según protocolo","Verificar compatibilidad, contacto adecuado con piel y conexión conforme a fabricante"],answer:["Sostener y posicionar al paciente con accesorios compatibles","Proporcionar iluminación del campo operatorio","Administrar anestesia y apoyar ventilación bajo responsabilidad de anestesiología","Aplicar energía de alta frecuencia para corte o coagulación","Evacuar líquidos mediante recipiente, tubuladura y cánula","Mantener instrumental de uso inmediato","Material textil que requiere control y conteo según protocolo","Verificar compatibilidad, contacto adecuado con piel y conexión conforme a fabricante"],explanation:"La preparación segura combina reconocimiento funcional, verificación de integridad y respeto de competencias. Los equipos especializados se configuran y operan por personal autorizado; los consumibles deben estar íntegros, vigentes y ser compatibles."},
 "Clasificación y reconocimiento del material": {mode:"match",title:"Estación de identificación instrumental",instruction:"Relaciona cada instrumento con su función principal. Considera que existen variantes de diseño y que la selección final depende del procedimiento y protocolo.",items:["Bisturí","Pinza hemostática","Pinza de disección atraumática","Separador manual","Portaagujas","Cánula de aspiración"],options:["Corte e incisión","Oclusión temporal y hemostasia","Sujeción cuidadosa de tejidos","Exposición y separación de tejidos","Sostener la aguja de sutura","Evacuación de líquidos"],answer:["Corte e incisión","Oclusión temporal y hemostasia","Sujeción cuidadosa de tejidos","Exposición y separación de tejidos","Sostener la aguja de sutura","Evacuación de líquidos"],explanation:"La clasificación funcional facilita reconocer el instrumental. En la práctica, confirma siempre el modelo, su integridad, compatibilidad y uso indicado; el reconocimiento no sustituye la supervisión clínica."},
 "Asepsia y antisepsia": {mode:"case",title:"Decisión clínica: protege el campo",instruction:"Durante una curación, el borde del campo estéril entra en contacto con la sábana. ¿Qué haces?",items:["Detener el procedimiento, considerar contaminado el campo afectado y sustituir el material necesario.","Continuar porque el contacto fue breve.","Cubrir la zona con una gasa estéril y continuar."],answer:["Detener el procedimiento, considerar contaminado el campo afectado y sustituir el material necesario."],explanation:"La esterilidad comprometida no se recupera cubriendo el área. Detén el procedimiento, reemplaza el material afectado y restablece la técnica según el protocolo."},
 "RPBI y manejo de muestras biológicas": {mode:"classify",title:"Estación de segregación RPBI",instruction:"Clasifica cada residuo en la categoría indicada. Aplica los criterios normativos, no solamente el lugar donde se generó.",items:["Aguja hipodérmica usada","Sangre líquida","Tejido humano patológico","Cultivo de microorganismos","Gasa empapada y goteando sangre"],options:["Punzocortante","Sangre líquida","Patológico","Cultivo y cepa","No anatómico"],answer:["Punzocortante","Sangre líquida","Patológico","Cultivo y cepa","No anatómico"],explanation:"La segregación se realiza en el punto de generación conforme a las categorías y criterios de la NOM-087-SEMARNAT-SSA1-2002."},
 "Higiene, limpieza y desinfección": {mode:"sequence",title:"Secuencia de reprocesamiento",instruction:"Selecciona los pasos en el orden correcto, conforme al protocolo y al fabricante.",items:["Almacenar y conservar el equipo procesado de forma segura.","Aplicar el método de desinfección o esterilización que corresponda.","Enjuagar y secar cuando lo indique el procedimiento.","Retirar suciedad mediante limpieza.","Preparar el área y el equipo de protección según el riesgo."],answer:["Preparar el área y el equipo de protección según el riesgo.","Retirar suciedad mediante limpieza.","Enjuagar y secar cuando lo indique el procedimiento.","Aplicar el método de desinfección o esterilización que corresponda.","Almacenar y conservar el equipo procesado de forma segura."],explanation:"La limpieza precede a la desinfección o esterilización. Método, concentración, tiempo y compatibilidad dependen de las instrucciones del fabricante y del protocolo."},
 "Carro de curaciones y pinza portaobjetos": {mode:"checklist",title:"Prepara el carro de curaciones",instruction:"Marca los elementos y verificaciones indispensables antes de iniciar. Después comprueba tu selección.",items:["Higiene de manos y limpieza/desinfección de la superficie.","Verificar integridad, limpieza y disponibilidad del material.","Separar material limpio del contaminado.","Comprobar caducidad e integridad de empaques estériles.","Preparar contenedor para residuos y punzocortantes según el procedimiento.","Reutilizar material desechable si parece limpio."],answer:["Higiene de manos y limpieza/desinfección de la superficie.","Verificar integridad, limpieza y disponibilidad del material.","Separar material limpio del contaminado.","Comprobar caducidad e integridad de empaques estériles.","Preparar contenedor para residuos y punzocortantes según el procedimiento."],explanation:"La preparación requiere organización, verificación de integridad y separación de áreas. Los dispositivos de un solo uso no se reutilizan."},
 "Mecánica corporal": {mode:"case",title:"Simulador de postura segura",instruction:"Vas a movilizar una carga cercana al cuerpo. ¿Qué combinación reduce el esfuerzo y protege tu espalda?",items:["Acercar la carga, ampliar la base de sustentación, flexionar caderas y rodillas y evitar torsión del tronco.","Separar la carga del cuerpo y flexionar solamente la espalda.","Girar el tronco mientras sostienes la carga."],answer:["Acercar la carga, ampliar la base de sustentación, flexionar caderas y rodillas y evitar torsión del tronco."],explanation:"Una base estable, carga próxima y movimiento coordinado de caderas y rodillas disminuyen el brazo de palanca. Solicita ayuda o equipo cuando sea necesario."},
 "Movilización y traslado del paciente": {mode:"case",title:"Escenario de movilización segura",instruction:"La persona presenta debilidad y refiere mareo al sentarse. ¿Cuál es la prioridad?",items:["Detener la transferencia, asegurar la posición, valorar síntomas y solicitar apoyo según el protocolo.","Continuar rápidamente para terminar el traslado.","Pedirle que se levante sin asistencia."],answer:["Detener la transferencia, asegurar la posición, valorar síntomas y solicitar apoyo según el protocolo."],explanation:"La seguridad y la valoración prevalecen sobre completar la maniobra. Reevalúa tolerancia, riesgo de caída y necesidad de apoyo."},
 "Posiciones terapéuticas": {mode:"match",title:"Relaciona posición y propósito",instruction:"Asocia cada situación con la posición más apropiada dentro del escenario simulado.",items:["Facilitar expansión torácica en una persona con disnea, si la tolera.","Exploración o procedimiento indicado que requiere acceso posterior.","Procedimiento ginecológico que requiere acceso perineal."],options:["Fowler o semifowler","Decúbito lateral","Litotomía"],answer:["Fowler o semifowler","Decúbito lateral","Litotomía"],explanation:"La selección depende de indicación, tolerancia, contraindicaciones, privacidad y seguridad; nunca se debe forzar una postura."},
 "Signos vitales": {mode:"calculation",title:"Interpreta el índice de masa corporal",instruction:"Caso simulado: peso 72 kg y talla 1.68 m. Calcula el IMC (peso / talla²) e introduce el resultado con un decimal.",items:["25.5"],answer:["25.5"],explanation:"72 / (1.68 × 1.68) = 25.5 kg/m². El IMC es una medida de cribado, no sustituye la valoración integral."},
 "Somatometría y exploración física": {mode:"calculation",title:"Reto de somatometría",instruction:"Caso simulado: peso 64 kg y talla 1.60 m. Calcula el IMC con un decimal.",items:["25.0"],answer:["25.0"],explanation:"64 / (1.60 × 1.60) = 25.0 kg/m². Registra valor, unidad, fecha, hora, técnica y condiciones relevantes."},
 "Admisión, estancia y egreso hospitalario": {mode:"sequence",title:"Ruta de admisión segura",instruction:"Ordena las acciones prioritarias para recibir a una persona estable. Ante urgencia, no retrases la atención clínica por trámites.",items:["Registrar valoración, información recibida y acciones realizadas.","Orientar sobre el entorno, medidas de seguridad y timbre de llamado.","Valorar estado general, riesgos y necesidades inmediatas.","Recibir con trato digno y verificar identidad con identificadores institucionales."],answer:["Recibir con trato digno y verificar identidad con identificadores institucionales.","Valorar estado general, riesgos y necesidades inmediatas.","Orientar sobre el entorno, medidas de seguridad y timbre de llamado.","Registrar valoración, información recibida y acciones realizadas."],explanation:"La secuencia integra identificación, valoración, orientación y registro. Ante deterioro o urgencia, se prioriza la respuesta clínica."},
 "Expediente clínico y registros de enfermería": {mode:"case",title:"Auditoría de una nota de enfermería",instruction:"¿Cuál registro ofrece mayor calidad documental?",items:["08:15 h. Persona alerta y orientada. Refiere dolor 4/10. Se registran signos vitales con unidades, intervención realizada, respuesta y comunicación al responsable.","Paciente bien, se encuentra estable. Se dieron cuidados.","Se deja nota al final del turno de procedimientos no verificados."],answer:["08:15 h. Persona alerta y orientada. Refiere dolor 4/10. Se registran signos vitales con unidades, intervención realizada, respuesta y comunicación al responsable."],explanation:"Un registro útil es oportuno, objetivo, claro, completo, cronológico y atribuible. Documenta solo hechos realmente observados, medidos o realizados."}
};
function TopicInteractiveActivity({topicTitle}:{topicTitle:string}) {
 const config=topicActivityConfigs[topicTitle];
 const [selected,setSelected]=useState<string[]>([]);
 const [assignments,setAssignments]=useState<Record<string,string>>({});
 const [checked,setChecked]=useState(false);
 const [answer,setAnswer]=useState("");
 if(!config) return <section className="area-activity-card"><div className="area-section-heading"><span className="area-section-icon"><Gamepad2 size={17}/></span><div><h3>Actividad de aplicación</h3><p>Analiza el contenido y realiza la práctica propuesta por tu docente.</p></div></div><p>La actividad interactiva específica de este tema está pendiente de diseño.</p></section>;
 const reset=()=>{setSelected([]);setAssignments({});setChecked(false);setAnswer("");};
 const isCorrect=()=>config.mode==="case"?config.answer.includes(answer):config.mode==="sequence"?selected.every((item,index)=>item===config.answer[index]):config.mode==="classify"||config.mode==="match"?config.items.every((item,index)=>assignments[item]===config.answer[index]):config.mode==="checklist"?config.answer.every((item)=>selected.includes(item))&&selected.every((item)=>config.answer.includes(item)):Number(answer).toFixed(1)===config.answer[0];
 const ready=config.mode==="case"?!answer:config.mode==="sequence"?selected.length!==config.items.length:config.mode==="classify"||config.mode==="match"?Object.keys(assignments).length!==config.items.length:config.mode==="checklist"?selected.length===0:!answer.trim();
 return <section className={"area-activity-card activity-"+config.mode}><div className="area-activity-top"><span className="area-activity-badge"><Gamepad2 size={16}/> EXPERIENCIA INTERACTIVA</span><span className="area-activity-type">{({case:"CASO CLÍNICO",sequence:"ORDENA EL PROCESO",classify:"CLASIFICACIÓN",checklist:"LISTA DE VERIFICACIÓN",calculation:"CÁLCULO APLICADO",match:"RELACIONA CONCEPTOS"} as Record<TopicActivityMode,string>)[config.mode]}</span></div><h3>{config.title}</h3><p className="area-activity-instruction">{config.instruction}</p>
 {config.mode==="case" && <div className="activity-choice-list">{config.items.map((item)=><button type="button" key={item} className={"activity-choice"+(answer===item?" selected":"")} onClick={()=>{setAnswer(item);setChecked(false);}}>{item}</button>)}</div>}
 {config.mode==="sequence" && <div className="activity-sequence"><div className="activity-sequence-pool"><strong>Pasos disponibles</strong>{config.items.filter((item)=>!selected.includes(item)).map((item)=><button type="button" key={item} onClick={()=>{setSelected((current)=>[...current,item]);setChecked(false);}}>{item}<ArrowRight size={14}/></button>)}</div><div className="activity-sequence-answer"><strong>Tu secuencia</strong>{selected.length?selected.map((item,index)=><button type="button" key={item} onClick={()=>{setSelected((current)=>current.filter((value)=>value!==item));setChecked(false);}}><span>{index+1}</span>{item}<small>Quitar</small></button>):<p>Selecciona los pasos en el orden que consideres correcto.</p>}</div></div>}
 {(config.mode==="classify"||config.mode==="match") && <div className="activity-classify-list">{config.items.map((item)=><label key={item}><span>{item}</span><select value={assignments[item]??""} onChange={(event)=>{setAssignments((current)=>({...current,[item]:event.target.value}));setChecked(false);}}><option value="">Seleccionar opción</option>{config.options?.map((option)=><option key={option} value={option}>{option}</option>)}</select></label>)}</div>}
 {config.mode==="checklist" && <div className="activity-checklist">{config.items.map((item)=><label key={item}><input type="checkbox" checked={selected.includes(item)} onChange={(event)=>{setSelected((current)=>event.target.checked?[...current,item]:current.filter((value)=>value!==item));setChecked(false);}}/><span>{item}</span></label>)}</div>}
 {config.mode==="calculation" && <label className="activity-number-entry">Tu resultado (kg/m²)<input inputMode="decimal" value={answer} onChange={(event)=>{setAnswer(event.target.value.replace(/[^0-9.]/g,""));setChecked(false);}} placeholder="Ej. 24.8"/></label>}
 <div className="area-activity-actions"><button type="button" className="area-activity-submit" onClick={()=>setChecked(true)} disabled={ready}>Comprobar actividad</button><button type="button" className="area-activity-reset" onClick={reset}>Reiniciar</button></div>
 {checked && <div className={"area-activity-feedback "+(isCorrect()?"is-correct":"is-review")}><strong>{isCorrect()?"¡Muy bien!":"Vamos a revisar tu respuesta"}</strong><p>{config.explanation}</p><small>{isCorrect()?"Has completado la experiencia.":"Revisa la explicación y vuelve a intentarlo."}</small></div>}
 </section>;
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
  const sharedKahootUrl = "https://create.kahoot.it/share/fundamentos-de-somatometria-clinica/1cf8596e-5dcc-426b-b16c-a670dd4e4bd8";
  const sharedKahootEmbed = "https://embed.kahoot.it/1cf8596e-5dcc-426b-b16c-a670dd4e4bd8";
  const [source, setSource] = useState(sharedKahootUrl);
  const [embed, setEmbed] = useState(sharedKahootEmbed);
  const [error, setError] = useState("");
  const [pin, setPin] = useState("");
  function loadKahoot(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setError(""); const id = extractKahootId(source); if (!id) { setEmbed(""); setError("Pega un enlace HTTPS de Kahoot con un identificador de juego válido."); return; } setEmbed(`https://embed.kahoot.it/${id}`); }
  const validPin = /^\d{4,10}$/.test(pin);
  return <PageIntro eyebrow="JUEGO EN GRUPO" title="Kahoot dentro del aula" description="Inserta un Kahoot compartido para reproducirlo aquí, o abre Kahoot.it para unirte a una sesión en vivo con PIN." icon={<Layers3 size={24} aria-hidden="true" />}><div className="kahoot-layout">
    <section className="content-panel kahoot-setup"><p className="eyebrow">ACTIVIDADES ASIGNADAS</p><h2>Fundamentos de somatometría clínica</h2><p>Juego compartido por el docente. Puedes iniciarlo desde el reproductor o abrirlo directamente en Kahoot.</p><a className="presentation-download" href={sharedKahootUrl} target="_blank" rel="noreferrer">Abrir ficha del Kahoot <ExternalLink size={14} aria-hidden="true" /></a><div className="kahoot-additional"><h3>Agregar otro Kahoot</h3><p>También puedes cargar aquí otro juego público o no listado mediante su enlace compartido.</p></div><form className="kahoot-form" onSubmit={loadKahoot}><label htmlFor="kahoot-url">Enlace compartido de Kahoot</label><div><input id="kahoot-url" type="url" value={source} onChange={(event) => setSource(event.target.value)} placeholder="https://create.kahoot.it/share/..." required aria-describedby={error ? "kahoot-error" : "kahoot-help"} /><button className="button button-green" type="submit">Cargar <ArrowRight size={16} aria-hidden="true" /></button></div>{error ? <p className="form-error" id="kahoot-error" role="alert">{error}</p> : <p className="form-help" id="kahoot-help">Solo se aceptan enlaces HTTPS de Kahoot.</p>}</form>
      <div className="kahoot-live"><div><p className="eyebrow">SESIÓN EN VIVO</p><h3>¿Tienes un PIN de juego?</h3><p>El juego en vivo se abre en Kahoot.it para ingresar el PIN oficial.</p></div><form onSubmit={(event) => { event.preventDefault(); if (validPin) window.open("https://kahoot.it/", "_blank", "noopener,noreferrer"); }}><label className="sr-only" htmlFor="kahoot-pin">PIN de Kahoot</label><input id="kahoot-pin" inputMode="numeric" pattern="[0-9]{4,10}" maxLength={10} value={pin} onChange={(event) => setPin(event.target.value.replace(/\D/g, ""))} placeholder="PIN" /><button className="button button-dark" type="submit" disabled={!validPin}>Unirme <ExternalLink size={15} aria-hidden="true" /></button></form></div>
    </section><section className={`kahoot-stage${embed ? " has-embed" : ""}`} aria-label="Reproductor de Kahoot">{embed ? <><iframe src={embed} title="Juego Kahoot insertado" allow="fullscreen; autoplay" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /><a href={embed} target="_blank" rel="noreferrer">¿No carga? Abrir el Kahoot en otra pestaña <ExternalLink size={14} aria-hidden="true" /></a></> : <div className="kahoot-empty"><Layers3 size={33} aria-hidden="true" /><h2>El juego aparecerá aquí</h2><p>El Kahoot asignado se carga automáticamente al entrar.</p></div>}</section>
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
  return items.length ? <ul className="resource-list">{items.map((item) => {
    const [label, href] = item.split("::");
    const external = Boolean(href && (href.startsWith("https://") || href.startsWith("http://")));
    const cleanPath = href ? (href.startsWith("/") ? href.slice(1) : href) : "";
    const url = href ? (external ? href : `${import.meta.env.BASE_URL}${cleanPath}`) : null;
    const isPowerPoint = Boolean(url && href && href.toLowerCase().endsWith(".pptx"));
    const isSlideDeck = Boolean(url && href && /\/presentacion-[^/]+\.html$/i.test(href));
    const isInteractiveAssessment = Boolean(url && href && /\/(?:auto.?evaluacion|evaluacion)-[^/]+\.html$/i.test(href));
    const absoluteUrl = isPowerPoint && url ? new URL(url, window.location.origin).href : "";
    const viewerUrl = isPowerPoint ? `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absoluteUrl)}` : "";
    return <li className={isPowerPoint || isSlideDeck || isInteractiveAssessment ? "resource-presentation" : undefined} key={item}>
      {isPowerPoint || isSlideDeck ? <Presentation size={18} aria-hidden="true" /> : isInteractiveAssessment ? <ClipboardCheck size={18} aria-hidden="true" /> : <FileText size={17} aria-hidden="true" />}
      {url ? <div className="resource-content">
        {isPowerPoint || isSlideDeck || isInteractiveAssessment ? <strong>{label}</strong> : <a href={url} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{label}</a>}
        {isInteractiveAssessment && <details style={{ marginTop: "12px", border: "1px solid #dce8de", borderRadius: "10px", background: "#fbfcfa", overflow: "hidden" }}>
          <summary style={{ padding: "12px 14px", cursor: "pointer", color: "#285540", fontSize: "11px", fontWeight: 700 }}>Resolver autoevaluación aquí</summary>
          <div style={{ padding: "0 12px 12px" }}>
            <p style={{ margin: "4px 0 10px", color: "#64746a", fontSize: "10px" }}>Contesta las preguntas y revisa la retroalimentación sin salir del tema.</p>
            <div style={{ position: "relative", width: "100%", height: "560px", overflow: "hidden", borderRadius: "8px", background: "#f3f5f2" }}>
              <iframe src={url} title={label} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }} />
            </div>
            <a className="presentation-download" href={url} target="_blank" rel="noreferrer">Abrir evaluación en pantalla completa</a>
          </div>
        </details>}
        {isPowerPoint && <div className="presentation-viewer">
          <p className="presentation-inline-label">Presentación integrada</p>
          <div style={{ position: "relative", width: "100%", paddingTop: "62.5%", marginTop: "12px", overflow: "hidden", borderRadius: "10px", background: "#f3f5f2" }}>
            <iframe src={viewerUrl} title={label} loading="lazy" allowFullScreen style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }} />
          </div>
          <a className="presentation-download" href={url} download><Download size={14} aria-hidden="true" /> Descargar archivo original PPTX</a>
        </div>}
        {isSlideDeck && <div className="presentation-viewer">
          <p className="presentation-inline-label">Presentación navegable integrada</p>
          <div style={{ position: "relative", width: "100%", paddingTop: "62.5%", marginTop: "12px", overflow: "hidden", borderRadius: "10px", background: "#f3f5f2" }}>
            <iframe src={url} title={label} loading="lazy" allow="fullscreen" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }} />
          </div>
          <a className="presentation-download" href={url} target="_blank" rel="noreferrer">Abrir presentación en pantalla completa</a>
        </div>}
      </div> : item}
    </li>;
  })}</ul> : <p className="editable-note">{empty}</p>;
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

export function ResourcePage() {
  const [searchParams] = useSearchParams();
  const src = searchParams.get("src") ?? "";
  const label = searchParams.get("label") ?? "Material de estudio";
  const safeLocalResource = src.startsWith(import.meta.env.BASE_URL) && !src.startsWith("//");
  return <PageIntro eyebrow="RECURSO DE ESTUDIO" title={label} description="Consulta este material sin salir del entorno de aprendizaje." icon={<FileText size={24} aria-hidden="true" />}>
    {safeLocalResource ? <div style={{ position: "relative", width: "100%", minHeight: "72vh", overflow: "hidden", border: "1px solid #dfe7e2", borderRadius: "14px", background: "#fff" }}>
      <iframe src={src} title={label} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", minHeight: "72vh", border: 0 }} />
    </div> : <section className="content-panel"><p>Este recurso no tiene una dirección local válida. Regresa al tema y vuelve a abrirlo desde sus materiales.</p></section>}
    <Link className="back-link" to="/areas">← Volver al aula</Link>
  </PageIntro>;
}
