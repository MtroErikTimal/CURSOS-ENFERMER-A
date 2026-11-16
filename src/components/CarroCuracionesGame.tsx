import { useState } from "react";

type Choice = { icon: string; title: string; detail: string; correct: boolean; feedback: string };
type Stage = { label: string; title: string; instruction: string; icon: string; choices: Choice[]; multi?: boolean };

const stages: Stage[] = [
  {
    label: "PREPARA",
    title: "Antes de iniciar, prepara el carro",
    instruction: "Selecciona todas las acciones que deben realizarse antes de colocar el material para una curación.",
    icon: "🧼",
    multi: true,
    choices: [
      { icon: "👐", title: "Realizar higiene de manos", detail: "Antes de manipular el carro y los insumos.", correct: true, feedback: "Correcto: la higiene de manos forma parte de la preparación segura." },
      { icon: "🧽", title: "Verificar limpieza y desinfección", detail: "Comprobar que el carro esté limpio y procesado con el producto institucional.", correct: true, feedback: "La superficie debe estar limpia y desinfectada según el protocolo y el tiempo de contacto del producto." },
      { icon: "📦", title: "Revisar empaques, integridad y caducidad", detail: "Comprobar que los paquetes estén secos, cerrados y vigentes.", correct: true, feedback: "Un empaque abierto, húmedo, roto o con condición dudosa no debe utilizarse como material estéril." },
      { icon: "🧴", title: "Rellenar recipientes con cualquier solución disponible", detail: "Mezclar productos para tenerlos listos.", correct: false, feedback: "No se deben improvisar diluciones ni mezclar sustancias. Utiliza productos autorizados y sigue las instrucciones del fabricante." },
      { icon: "📱", title: "Colocar objetos personales sobre la superficie", detail: "Dejar teléfono, llaves o bebidas junto al material.", correct: false, feedback: "La superficie de trabajo debe permanecer despejada y destinada al material del procedimiento." }
    ]
  },
  {
    label: "ORGANIZA",
    title: "Distribuye el material por zonas",
    instruction: "Elige las prácticas que mantienen una organización funcional y segura del carro.",
    icon: "🗂️",
    multi: true,
    choices: [
      { icon: "🧺", title: "Mantener la superficie superior limpia y despejada", detail: "Usarla como área de preparación del material limpio.", correct: true, feedback: "La superficie superior funciona como área limpia de trabajo; evita saturarla." },
      { icon: "🗄️", title: "Guardar insumos protegidos en cajones o compartimentos", detail: "Separarlos por categoría y mantenerlos identificados.", correct: true, feedback: "Los compartimentos permiten proteger y localizar los insumos sin mezclarlos." },
      { icon: "✨", title: "Conservar los paquetes estériles cerrados hasta utilizarlos", detail: "Evitar abrirlos anticipadamente.", correct: true, feedback: "El material debe permanecer en su empaque íntegro hasta el momento de uso." },
      { icon: "🩸", title: "Colocar material usado junto al material limpio", detail: "Dejarlo en una charola libre para después.", correct: false, feedback: "El material usado nunca debe mezclarse ni almacenarse con insumos limpios o estériles." },
      { icon: "🗑️", title: "Colocar residuos y punzocortantes sobre la superficie limpia", detail: "Dejarlos al alcance encima del carro.", correct: false, feedback: "Los recipientes de residuos deben ubicarse de forma segura y accesible conforme al protocolo, sin contaminar el área limpia." }
    ]
  },
  {
    label: "IDENTIFICA",
    title: "Detecta el material que no debe utilizarse",
    instruction: "Durante la revisión encuentras varios insumos. ¿Cuál debes retirar y sustituir antes de comenzar?",
    icon: "🔎",
    choices: [
      { icon: "🩹", title: "Apósitos limpios, íntegros y vigentes", detail: "Empaque cerrado y sin alteraciones.", correct: false, feedback: "Si el empaque está íntegro y vigente, puede considerarse para el procedimiento según las indicaciones del fabricante y el protocolo." },
      { icon: "📦", title: "Paquete estéril húmedo y con el empaque abierto", detail: "Aunque el indicador parezca correcto.", correct: true, feedback: "Correcto. La humedad y la apertura comprometen la barrera del empaque. Retira el paquete y sustitúyelo; no lo utilices." },
      { icon: "🧻", title: "Gasas en empaque íntegro y dentro de vigencia", detail: "Almacenadas en el compartimento correspondiente.", correct: false, feedback: "La integridad, la vigencia y el almacenamiento adecuado son criterios básicos para verificar los insumos." },
      { icon: "🧤", title: "Guantes de la talla requerida en empaque cerrado", detail: "Disponibles para el procedimiento.", correct: false, feedback: "Comprueba talla, integridad y vigencia; si cumplen, pueden estar disponibles para el procedimiento." }
    ]
  },
  {
    label: "FINALIZA",
    title: "Cierra el procedimiento con seguridad",
    instruction: "Después de la curación, selecciona todas las acciones necesarias para dejar el carro listo para el siguiente uso.",
    icon: "♻️",
    multi: true,
    choices: [
      { icon: "💉", title: "Desechar punzocortantes inmediatamente", detail: "En el contenedor rígido autorizado, sin reencapuchar.", correct: true, feedback: "Los punzocortantes se desechan de inmediato en el recipiente autorizado; no se reencapuchan ni se manipulan innecesariamente." },
      { icon: "🧺", title: "Retirar y transportar el material usado por la ruta establecida", detail: "Separarlo de los insumos limpios y enviarlo a reprocesamiento cuando corresponda.", correct: true, feedback: "El material usado debe seguir la ruta institucional de manejo y reprocesamiento." },
      { icon: "🧽", title: "Limpiar y desinfectar el carro", detail: "Usar el producto autorizado y respetar el tiempo de contacto.", correct: true, feedback: "La limpieza y desinfección se realizan conforme al producto, compatibilidad y protocolo institucional." },
      { icon: "📋", title: "Reponer insumos y comunicar faltantes o incidencias", detail: "Dejar el carro completo, seguro y listo para el siguiente procedimiento.", correct: true, feedback: "La reposición y el reporte de faltantes mantienen la continuidad y seguridad del cuidado." },
      { icon: "🔁", title: "Regresar al cajón el material desechable ya utilizado", detail: "Guardarlo para aprovecharlo en otra curación.", correct: false, feedback: "El material desechable utilizado no se reutiliza ni se reintegra al inventario." }
    ]
  }
];

export default function CarroCuracionesGame() {
  const [stageIndex, setStageIndex] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const stage = stages[stageIndex];
  const chosen = stage.choices.filter((choice) => selected.includes(choice.title));
  const isCorrect = stage.multi
    ? selected.length === stage.choices.filter((choice) => choice.correct).length && chosen.every((choice) => choice.correct)
    : selected.length === 1 && chosen[0]?.correct === true;

  function toggle(title: string) {
    if (checked) return;
    setSelected((current) => stage.multi
      ? current.includes(title) ? current.filter((item) => item !== title) : [...current, title]
      : [title]);
  }

  function verify() {
    if (checked || selected.length === 0) return;
    setChecked(true);
    if (isCorrect) setScore((current) => current + 1);
  }

  function next() {
    if (stageIndex === stages.length - 1) {
      setCompleted(true);
      return;
    }
    setStageIndex((current) => current + 1);
    setSelected([]);
    setChecked(false);
  }

  function restart() {
    setStageIndex(0);
    setSelected([]);
    setChecked(false);
    setScore(0);
    setCompleted(false);
  }

  return (
    <section className="cart-mission" aria-label="Misión Carro de Curaciones">
      <header className="cart-mission-hero">
        <div className="cart-mission-art" aria-hidden="true"><span>🩹</span><span>🧴</span><span>🧺</span></div>
        <div><span className="cart-mission-kicker">SIMULADOR CLÍNICO · FUNDAMENTOS DE ENFERMERÍA</span><h3>🩹 Misión: Carro de Curaciones</h3><p>Prepara, organiza y verifica el material para brindar cuidados seguros.</p></div>
      </header>
      {!completed ? <>
        <div className="cart-mission-status"><strong>Etapa {stageIndex + 1} de 4</strong><strong>⭐ {score} etapas superadas</strong></div>
        <div className="cart-mission-progress"><span style={{ width: `${(stageIndex + 1) * 25}%` }} /></div>
        <div className="cart-mission-order" aria-label="Orden de las etapas">
          {["Prepara", "Organiza", "Identifica", "Finaliza"].map((label, index) => <div key={label} className={`cart-mission-step ${stageIndex === index ? "is-active" : stageIndex > index ? "is-complete" : ""}`}><span>{index + 1}</span><small>{label}</small></div>)}
        </div>
        <div className="cart-mission-play-area">
          {checked && <div className={`rpbi-game-celebration ${isCorrect ? "is-correct" : "is-incorrect"}`} aria-hidden="true">
            {isCorrect && <span className="rpbi-game-celebration-label">¡MUY BIEN!</span>}
            <span className="rpbi-game-celebration-symbol">{isCorrect ? "✓" : "×"}</span>
            {isCorrect && <span className="rpbi-game-confetti">{Array.from({ length: 42 }, (_, piece) => <i key={piece} style={{ "--confetti-left": `${(piece * 37) % 100}%`, "--confetti-hue": (piece * 47) % 360, "--confetti-delay": `${(piece % 7) * -0.09}s`, "--confetti-rotate": `${piece * 47}deg` } as React.CSSProperties} />)}</span>}
          </div>}
          <div className="cart-mission-heading"><span>{stage.icon}</span><div><small>{stageIndex + 1}. {stage.label}</small><h4>{stage.title}</h4><p>{stage.instruction}</p></div></div>
          <div className={`cart-mission-options ${stage.multi ? "is-multi" : ""}`}>
            {stage.choices.map((choice) => {
              const active = selected.includes(choice.title);
              const state = checked ? choice.correct ? "is-right" : active ? "is-wrong" : "" : active ? "is-picked" : "";
              return <button type="button" key={choice.title} className={`cart-mission-option ${state}`} onClick={() => toggle(choice.title)} disabled={checked}>
                <span className="cart-mission-option-icon">{choice.icon}</span><span className="cart-mission-option-copy"><strong>{choice.title}</strong><small>{choice.detail}</small></span><span className="cart-mission-option-mark">{checked ? choice.correct ? "✓" : active ? "×" : "" : active ? "✓" : ""}</span>
              </button>;
            })}
          </div>
          {checked && <div className={`cart-mission-feedback ${isCorrect ? "is-success" : "is-error"}`} role="status" aria-live="polite">
            <strong>{isCorrect ? "¡Excelente trabajo!" : "Revisa tu decisión"}</strong>
            {chosen.map((choice) => <p key={choice.title}>{choice.feedback}</p>)}
            {stage.multi && stage.choices.filter((choice) => choice.correct && !selected.includes(choice.title)).map((choice) => <p key={choice.title}>Te faltó seleccionar: {choice.title}. {choice.feedback}</p>)}
            {!isCorrect && <p>Repasa las indicaciones y vuelve a intentarlo en la siguiente ronda.</p>}
          </div>}
        </div>
        <div className="cart-mission-controls">{!checked ? <button type="button" className="button button-green" onClick={verify} disabled={selected.length === 0}>Comprobar respuesta</button> : <button type="button" className="button button-dark" onClick={next}>{stageIndex === 3 ? "Finalizar misión" : "Siguiente etapa"} →</button>}</div>
        <p className="cart-mission-note">Actividad educativa. Ajusta el contenido del carro, los insumos y el manejo de residuos al procedimiento y protocolo vigente de cada institución.</p>
      </> : <div className="cart-mission-result"><span>{score === 4 ? "🏆" : "🎓"}</span><small>MISIÓN COMPLETADA</small><h4>{score === 4 ? "¡Experto en preparación segura!" : "¡Buen trabajo, sigue practicando!"}</h4><strong>{score} de 4 etapas superadas</strong><p>{score === 4 ? "Has demostrado reconocer los principios para preparar, organizar y mantener seguro el carro de curaciones." : "Repasa las explicaciones y vuelve a practicar para fortalecer tu organización y seguridad clínica."}</p><button type="button" className="button button-green" onClick={restart}>↻ Volver a jugar</button></div>}
    </section>
  );
}
