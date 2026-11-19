import { useState } from "react";

type Step = { title: string; question: string; options: string[]; answer: number; feedback: string };
const steps: Step[] = [
  {
    title: "1. Preparación del sitio",
    question: "La persona tiene las manos frías y presenta esmalte oscuro. ¿Qué haces antes de aceptar la lectura?",
    options: [
      "Colocar el sensor sin revisar la mano y registrar el primer número",
      "Valorar perfusión y temperatura, reducir movimiento y elegir un sitio/sensor adecuado; retirar esmalte si interfiere y es posible",
      "Apretar el sensor con cinta para que no entre luz"
    ],
    answer: 1,
    feedback: "La vasoconstricción, el frío, la baja perfusión, el movimiento, el esmalte o uñas artificiales y la luz intensa pueden afectar la señal. Selecciona un sitio con perfusión adecuada y sigue las indicaciones del fabricante."
  },
  {
    title: "2. Colocación y señal",
    question: "Ya colocaste el sensor en el dedo. ¿Cuándo debes registrar la SpO₂?",
    options: [
      "De inmediato, aunque los números cambien continuamente",
      "Cuando la señal/onda pletismográfica sea estable y la lectura sea coherente con la valoración y el pulso",
      "Cuando el monitor muestre cualquier cifra durante un segundo"
    ],
    answer: 1,
    feedback: "Espera una señal estable. Reduce el movimiento, comprueba ajuste y alineación del sensor y compara el pulso mostrado con el pulso palpado. Si no concuerdan, revisa el sitio, la perfusión y el equipo."
  },
  {
    title: "3. Interpretación contextual",
    question: "Una persona adulta sin dificultad respiratoria, sin oxígeno suplementario y a nivel del mar presenta SpO₂ estable de 97%. ¿Qué interpretación es más adecuada?",
    options: [
      "Es un valor compatible con el rango habitual de muchos adultos sanos; debe integrarse con el contexto clínico",
      "Confirma que no existe ninguna enfermedad respiratoria",
      "Demuestra que la PaCO₂ y la hemoglobina son normales"
    ],
    answer: 0,
    feedback: "En muchos adultos sanos a nivel del mar se observan valores de 95–100%, pero una SpO₂ aislada no descarta hipercapnia, anemia, alteraciones de perfusión ni otros problemas. Interpreta tendencias y estado clínico."
  },
  {
    title: "4. Objetivo individualizado",
    question: "Una persona con EPOC tiene indicado por su equipo tratante un objetivo de saturación de 88–92%. La lectura estable es 90% y se encuentra en su situación basal. ¿Qué haces?",
    options: [
      "Aumentar oxígeno automáticamente hasta 100%",
      "Comparar con el objetivo prescrito, valorar a la persona y continuar vigilancia y cuidados según el plan/protocolo",
      "Ignorar la lectura porque es menor de 95%"
    ],
    answer: 1,
    feedback: "Algunas personas con riesgo de insuficiencia respiratoria hipercápnica tienen objetivos individualizados, con frecuencia 88–92% cuando así se indica. No modifiques el oxígeno por cuenta propia: valora, verifica la prescripción y sigue el protocolo."
  },
  {
    title: "5. Limitaciones del oxímetro",
    question: "¿Qué afirmación sobre la SpO₂ es correcta?",
    options: [
      "Es equivalente a la PaO₂ y mide directamente el dióxido de carbono",
      "Estima la saturación periférica de hemoglobina; no mide ventilación, PaCO₂ ni contenido total de oxígeno",
      "Una lectura normal garantiza que todos los tejidos reciben suficiente oxígeno"
    ],
    answer: 1,
    feedback: "La oximetría estima la saturación de hemoglobina arterial pulsátil. No sustituye gasometría cuando está indicada ni evalúa directamente ventilación, PaCO₂ o contenido total de oxígeno. Dishemoglobinas y otros factores pueden alterar la precisión."
  },
  {
    title: "6. Registro y respuesta clínica",
    question: "¿Qué registro permite interpretar mejor una lectura de SpO₂?",
    options: [
      "Anotar únicamente el porcentaje",
      "Registrar fecha/hora, valor, sitio, pulso, calidad de señal y oxígeno suplementario (dispositivo y flujo), además del contexto y respuesta",
      "Registrar solo si el valor es menor de 90%"
    ],
    answer: 1,
    feedback: "Documenta valor, sitio, pulso, calidad de señal y soporte de oxígeno con dispositivo y flujo cuando corresponda. Ante disnea intensa, cianosis, alteración de conciencia, agotamiento o deterioro rápido, prioriza valoración y escalamiento de ayuda según protocolo; no esperes a que el número caiga."
  }
];

export default function PulseOximetryGame() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const current = steps[step];
  const choose = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === current.answer) setScore((value) => value + 1);
  };
  const next = () => {
    if (step === steps.length - 1) setDone(true);
    else { setStep((value) => value + 1); setSelected(null); }
  };
  const restart = () => { setStep(0); setSelected(null); setScore(0); setDone(false); };

  return <section className="spo2-game">
    <header className="spo2-game-hero">
      <div className="spo2-game-icon" aria-hidden="true">🫁</div>
      <div><small>SIMULACIÓN CLÍNICA · SIGNOS VITALES</small><h3>Misión: interpreta la oximetría</h3><p>Prepara el sitio, obtiene una señal confiable y toma decisiones seguras.</p></div>
    </header>
    <div className="spo2-game-facts">
      <div><strong>SpO₂</strong><span>Saturación periférica estimada</span></div>
      <div><strong>Señal</strong><span>Onda estable y pulso concordante</span></div>
      <div><strong>Contexto</strong><span>Paciente, altitud y objetivo</span></div>
    </div>
    <div className="spo2-game-case"><strong>Escenario de práctica</strong><p>Estás valorando a una persona adulta en una unidad clínica. Debes obtener una lectura confiable con el oxímetro, reconocer factores que alteran la medición e integrar el resultado con la valoración respiratoria.</p></div>
    {!done ? <div className="spo2-game-quiz">
      <div className="spo2-game-progress"><span>{current.title}</span><strong>{score} aciertos</strong></div>
      <div className="spo2-game-track"><span style={{ width: String(((step + (selected !== null ? 1 : 0)) / steps.length) * 100) + "%" }} /></div>
      <h4>{current.question}</h4>
      <div className="spo2-game-options">{current.options.map((option, index) => <button type="button" key={option} disabled={selected !== null} onClick={() => choose(index)} className={"spo2-game-option" + (selected !== null && index === current.answer ? " is-correct" : "") + (selected === index && index !== current.answer ? " is-wrong" : "")}><span>{String.fromCharCode(65 + index)}</span>{option}</button>)}</div>
      {selected !== null && <div className={"spo2-game-feedback " + (selected === current.answer ? "is-success" : "is-error")}><strong>{selected === current.answer ? "¡Correcto!" : "Revisa la valoración"}</strong><p>{current.feedback}</p><button type="button" onClick={next} className="button button-green">{step === steps.length - 1 ? "Ver resultado" : "Continuar"} →</button></div>}
    </div> : <div className="spo2-game-result"><span aria-hidden="true">{score === steps.length ? "🏆" : "🫁"}</span><small>SIMULACIÓN COMPLETADA</small><h4>{score === steps.length ? "¡Excelente valoración!" : "¡Buen trabajo!"}</h4><strong>{score} de {steps.length} decisiones correctas</strong><p>Recuerda: el oxímetro es una herramienta complementaria. La condición clínica, la señal, la tendencia y el objetivo individualizado orientan la interpretación. Si hay signos de deterioro, actúa y comunica oportunamente aunque la cifra parezca tranquilizadora.</p><button type="button" className="button button-green" onClick={restart}>Repetir simulación ↻</button></div>}
    <div className="spo2-game-reminders"><strong>Antes de registrar, verifica:</strong><ul><li>Sensor compatible, bien colocado y con señal estable.</li><li>Movimiento, temperatura, perfusión, esmalte y luz ambiental.</li><li>Concordancia entre pulso del oxímetro y pulso palpado.</li><li>Altitud, antecedentes, objetivo prescrito y oxígeno suplementario.</li></ul></div>
    <p className="spo2-game-note">Actividad educativa, no diagnóstica. Los rangos y objetivos de oxigenación varían según condición clínica y prescripción. No ajustes el oxígeno ni retrases la atención basándote únicamente en una cifra; sigue el protocolo institucional y escala ante signos de alarma.</p>
  </section>;
}
