import { useState } from "react";

type Choice = { icon: string; title: string; detail: string; correct: boolean; feedback: string };
type Stage = { label: string; title: string; instruction: string; icon: string; multi?: boolean; choices: Choice[] };

const stages: Stage[] = [
  {
    label: "RECONOCE",
    title: "Identifica la posición terapéutica",
    instruction: "Una persona se encuentra acostada boca abajo, con la cabeza girada de forma controlada y el cuerpo alineado. ¿Qué posición observas?",
    icon: "🧍",
    choices: [
      { icon: "⬆️", title: "Decúbito supino", detail: "Acostado sobre la espalda.", correct: false, feedback: "Supino significa estar boca arriba." },
      { icon: "⬇️", title: "Decúbito prono", detail: "Acostado sobre el abdomen.", correct: true, feedback: "Correcto: prono es la posición boca abajo." },
      { icon: "↔️", title: "Decúbito lateral", detail: "Acostado sobre un costado.", correct: false, feedback: "Lateral significa apoyado sobre uno de los costados." },
      { icon: "🛏️", title: "Semi-Fowler", detail: "Supino con cabecera elevada.", correct: false, feedback: "Semi-Fowler mantiene el tronco elevado aproximadamente 30° a 45°." }
    ]
  },
  {
    label: "RELACIONA",
    title: "Asocia la posición con su indicación",
    instruction: "¿Qué posición facilita el acceso para una exploración ginecológica y diversos procedimientos pélvicos?",
    icon: "🩺",
    choices: [
      { icon: "🦵", title: "Ginecológica o litotomía", detail: "Caderas y rodillas flexionadas, piernas apoyadas.", correct: true, feedback: "La litotomía facilita la exploración ginecológica y determinados procedimientos pélvicos." },
      { icon: "🧎", title: "Genupectoral", detail: "Apoyo sobre rodillas y tórax.", correct: false, feedback: "La genupectoral se utiliza en procedimientos rectales o anorrectales seleccionados." },
      { icon: "🌙", title: "Sims", detail: "Posición lateral con pierna superior flexionada.", correct: false, feedback: "Sims puede facilitar enemas y procedimientos rectales seleccionados." },
      { icon: "↗️", title: "Anti-Trendelenburg", detail: "Cabeza más elevada que los pies.", correct: false, feedback: "Anti-Trendelenburg inclina el plano con la cabeza más alta que los pies." }
    ]
  },
  {
    label: "PROTEGE",
    title: "Selecciona los cuidados de seguridad",
    instruction: "Al colocar a una persona en litotomía, selecciona TODAS las medidas de enfermería adecuadas.",
    icon: "🛡️",
    multi: true,
    choices: [
      { icon: "↔️", title: "Elevar y bajar ambas piernas de forma coordinada", detail: "Evitar movimientos asimétricos bruscos.", correct: true, feedback: "La movilización simultánea reduce torsiones y tensión pélvica." },
      { icon: "🦴", title: "Proteger puntos de presión y nervios periféricos", detail: "Revisar apoyos, especialmente la región de la cabeza del peroné.", correct: true, feedback: "El acolchado y la correcta colocación ayudan a prevenir lesiones por presión y compresión nerviosa." },
      { icon: "📐", title: "Forzar la máxima abducción de las caderas", detail: "Abrir las piernas todo lo posible para mejorar el acceso.", correct: false, feedback: "Evita abducción y rotación extremas; adapta la amplitud a la movilidad y tolerancia." },
      { icon: "👀", title: "Comprobar alineación, comodidad y tolerancia", detail: "Reevaluar durante el procedimiento.", correct: true, feedback: "La vigilancia continua permite detectar dolor, parestesias o intolerancia." },
      { icon: "⏱️", title: "Mantener la posición sin reevaluar", detail: "La posición no requiere vigilancia una vez instalada.", correct: false, feedback: "Toda posición requiere vigilancia y reevaluación según duración y condición clínica." }
    ]
  },
  {
    label: "RESUELVE",
    title: "Decide ante un caso clínico",
    instruction: "Durante la preparación para una movilización, una persona refiere dolor cervical y existe sospecha de lesión de columna. ¿Qué conducta es la más segura respecto a la posición de Roser?",
    icon: "🧠",
    choices: [
      { icon: "↩️", title: "Realizar hiperextensión cervical para completar la posición", detail: "Colocar la cabeza hacia atrás sin demora.", correct: false, feedback: "La hiperextensión puede agravar una lesión cervical; no debe forzarse." },
      { icon: "🛑", title: "Evitar la maniobra y solicitar valoración", detail: "Mantener protección cervical y seguir el protocolo de trauma.", correct: true, feedback: "Correcto. Ante sospecha de lesión cervical, evita movilizaciones o hiperextensión y activa la valoración correspondiente." },
      { icon: "🛏️", title: "Colocar Roser porque es una posición de rutina", detail: "Aplicarla independientemente de los síntomas.", correct: false, feedback: "Roser requiere indicación específica y valoración de la región cervical." },
      { icon: "🔄", title: "Pedir a la persona que gire el cuello por sí misma", detail: "Comprobar si puede tolerar la extensión.", correct: false, feedback: "No se debe provocar movimiento cervical para probar tolerancia ante sospecha de lesión." }
    ]
  }
];

export default function PosicionesTerapeuticasGame() {
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
    if (stageIndex === stages.length - 1) { setCompleted(true); return; }
    setStageIndex((current) => current + 1);
    setSelected([]);
    setChecked(false);
  }

  function restart() {
    setStageIndex(0); setSelected([]); setChecked(false); setScore(0); setCompleted(false);
  }

  return <section className="cart-mission positions-mission" aria-label="Misión Posiciones terapéuticas">
    <header className="cart-mission-hero">
      <div className="cart-mission-art" aria-hidden="true"><span>🛏️</span><span>🧍</span><span>🩺</span></div>
      <div><span className="cart-mission-kicker">EXPERIENCIA INTERACTIVA · FUNDAMENTOS DE ENFERMERÍA</span><h3>🛏️ Misión: Posiciones terapéuticas</h3><p>Reconoce posturas, relaciona indicaciones y aplica cuidados seguros al paciente.</p></div>
    </header>
    {!completed ? <>
      <div className="cart-mission-status"><strong>Etapa {stageIndex + 1} de 4</strong><strong>⭐ {score} etapas superadas</strong></div>
      <div className="cart-mission-progress"><span style={{ width: `${(stageIndex + 1) * 25}%` }} /></div>
      <div className="cart-mission-order" aria-label="Orden de las etapas">
        {["Reconoce", "Relaciona", "Protege", "Resuelve"].map((label, index) => <div key={label} className={`cart-mission-step ${stageIndex === index ? "is-active" : stageIndex > index ? "is-complete" : ""}`}><span>{index + 1}</span><small>{label}</small></div>)}
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
          {!isCorrect && <p>Repasa la explicación y vuelve a intentarlo en la siguiente etapa.</p>}
        </div>}
      </div>
      <div className="cart-mission-controls">{!checked ? <button type="button" className="button button-green" onClick={verify} disabled={selected.length === 0}>Comprobar respuesta</button> : <button type="button" className="button button-dark" onClick={next}>{stageIndex === 3 ? "Finalizar misión" : "Siguiente etapa"} →</button>}</div>
      <p className="cart-mission-note">Actividad educativa. La selección de posiciones depende de la valoración, indicación clínica, tolerancia y protocolos institucionales. No fuerces movimientos ni sustituyas las ayudas de movilización.</p>
    </> : <div className="cart-mission-result"><span>{score === 4 ? "🏆" : "🎓"}</span><small>MISIÓN COMPLETADA</small><h4>{score === 4 ? "¡Experto en posicionamiento seguro!" : "¡Buen trabajo, sigue practicando!"}</h4><strong>{score} de 4 etapas superadas</strong><p>{score === 4 ? "Has demostrado reconocer indicaciones y aplicar medidas de seguridad para el posicionamiento terapéutico." : "Repasa las explicaciones y vuelve a practicar para fortalecer tu razonamiento clínico."}</p><button type="button" className="button button-green" onClick={restart}>↻ Volver a jugar</button></div>}
  </section>;
};
