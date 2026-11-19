import { useState } from "react";

type Step = { title: string; question: string; options: string[]; answer: number; feedback: string };
const steps: Step[] = [
  {
    title: "1. Preparación de la medición",
    question: "Una persona acaba de beber una bebida muy caliente. Necesitas medir su temperatura oral. ¿Qué haces?",
    options: [
      "Medir de inmediato porque la bebida no modifica la temperatura",
      "Esperar el tiempo recomendado por el protocolo/dispositivo y valorar si la vía oral es adecuada",
      "Colocar el termómetro debajo de la lengua mientras bebe"
    ],
    answer: 1,
    feedback: "Las bebidas calientes o frías, alimentos, tabaco y ejercicio reciente pueden alterar una lectura oral. Espera el intervalo indicado por el fabricante o protocolo (con frecuencia 15–30 minutos) y elige otro sitio si no es posible esperar."
  },
  {
    title: "2. Selección del sitio",
    question: "¿Qué debes considerar al elegir dónde medir la temperatura?",
    options: [
      "Todos los sitios ofrecen valores idénticos e intercambiables",
      "Edad, condición, cooperación, contraindicaciones, dispositivo y protocolo; registrar siempre el sitio",
      "Elegir siempre la vía rectal porque es la más cómoda"
    ],
    answer: 1,
    feedback: "Los sitios oral, axilar, timpánico, temporal y rectal tienen características, precisión y limitaciones diferentes. No conviertas ni compares cifras de distintos sitios como si fueran equivalentes; registra sitio y dispositivo."
  },
  {
    title: "3. Fiebre e hipertermia",
    question: "Una persona presenta temperatura elevada tras exposición intensa al calor, piel muy caliente y alteración del estado mental. ¿Cuál es la interpretación prioritaria?",
    options: [
      "Es necesariamente fiebre por infección",
      "Puede tratarse de una emergencia por hipertermia/golpe de calor; requiere atención inmediata según protocolo",
      "Es una variación normal que solo requiere repetir la medición al día siguiente"
    ],
    answer: 1,
    feedback: "La fiebre implica un aumento regulado del punto de ajuste hipotalámico. La hipertermia es acumulación excesiva de calor sin ese reajuste. Alteración neurológica tras exposición al calor es un signo de alarma: activa ayuda y el protocolo de emergencia sin retrasar medidas indicadas."
  },
  {
    title: "4. Respuesta fisiológica al frío",
    question: "Cuando el hipotálamo detecta una disminución de la temperatura corporal, ¿qué respuestas favorecen conservar y producir calor?",
    options: [
      "Vasodilatación cutánea y sudoración",
      "Vasoconstricción cutánea y temblor",
      "Aumento de evaporación y relajación muscular"
    ],
    answer: 1,
    feedback: "La vasoconstricción cutánea reduce la pérdida de calor y el temblor aumenta la producción mediante actividad muscular. Ante calor, predominan vasodilatación cutánea y sudoración."
  },
  {
    title: "5. Reconocimiento de hipotermia",
    question: "La temperatura central de una persona es de 34.5 °C. ¿Qué significa?",
    options: [
      "Hipotermia, definida por temperatura central menor de 35 °C",
      "Fiebre leve",
      "Temperatura normal en cualquier adulto"
    ],
    answer: 0,
    feedback: "La hipotermia se define como temperatura central menor de 35 °C. Valora estado de conciencia, respiración y circulación; manipula con cuidado y activa atención/protocolo. No uses una lectura periférica aislada para descartar hipotermia."
  },
  {
    title: "6. Registro y vigilancia",
    question: "¿Qué información debe acompañar el registro de temperatura?",
    options: [
      "Solo el número obtenido",
      "Fecha y hora, valor, sitio anatómico, dispositivo, condiciones relevantes y respuesta/intervención",
      "Solo si la cifra supera 38 °C"
    ],
    answer: 1,
    feedback: "Documenta el valor junto con sitio y dispositivo, además de contexto clínico, síntomas, intervenciones y respuesta. Interpreta tendencias y signos asociados; ante deterioro, prioriza valoración y comunicación."
  }
];

export default function TemperatureGame() {
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

  return <section className="temp-game">
    <header className="temp-game-hero">
      <div className="temp-game-icon" aria-hidden="true">🌡️</div>
      <div><small>SIMULACIÓN CLÍNICA · SIGNOS VITALES</small><h3>Misión: valora la temperatura corporal</h3><p>Selecciona el sitio, reconoce las respuestas termorreguladoras y detecta signos de alarma.</p></div>
    </header>
    <div className="temp-game-facts">
      <div><strong>37 °C</strong><span>Referencia aproximada, según sitio y contexto</span></div>
      <div><strong>35 °C</strong><span>Umbral de hipotermia central</span></div>
      <div><strong>4 vías</strong><span>Radiación, conducción, convección y evaporación</span></div>
    </div>
    <div className="temp-game-case"><strong>Escenario de práctica</strong><p>Estás en una unidad de atención y debes valorar la temperatura de una persona adulta. Elige una técnica segura, interpreta el resultado y registra los datos necesarios para el seguimiento.</p></div>
    {!done ? <div className="temp-game-quiz">
      <div className="temp-game-progress"><span>{current.title}</span><strong>{score} aciertos</strong></div>
      <div className="temp-game-track"><span style={{ width: String(((step + (selected !== null ? 1 : 0)) / steps.length) * 100) + "%" }} /></div>
      <h4>{current.question}</h4>
      <div className="temp-game-options">{current.options.map((option, index) => <button type="button" key={option} disabled={selected !== null} onClick={() => choose(index)} className={"temp-game-option" + (selected !== null && index === current.answer ? " is-correct" : "") + (selected === index && index !== current.answer ? " is-wrong" : "")}><span>{String.fromCharCode(65 + index)}</span>{option}</button>)}</div>
      {selected !== null && <div className={"temp-game-feedback " + (selected === current.answer ? "is-success" : "is-error")}><strong>{selected === current.answer ? "¡Correcto!" : "Revisa la técnica"}</strong><p>{current.feedback}</p><button type="button" onClick={next} className="button button-green">{step === steps.length - 1 ? "Ver resultado" : "Continuar"} →</button></div>}
    </div> : <div className="temp-game-result"><span aria-hidden="true">{score === steps.length ? "🏆" : "🌡️"}</span><small>SIMULACIÓN COMPLETADA</small><h4>{score === steps.length ? "¡Excelente valoración!" : "¡Buen trabajo!"}</h4><strong>{score} de {steps.length} decisiones correctas</strong><p>Recuerda seleccionar el sitio según la persona y el contexto, usar el dispositivo de forma correcta y documentar siempre dónde y cómo se midió. La temperatura debe interpretarse junto con síntomas, antecedentes y tendencia.</p><button type="button" className="button button-green" onClick={restart}>Repetir simulación ↻</button></div>}
    <div className="temp-game-reminders"><strong>Claves para la práctica:</strong><ul><li>Confirma que el termómetro sea adecuado y esté limpio/funcional.</li><li>Respeta las indicaciones del fabricante y el protocolo para cada sitio.</li><li>No compares directamente mediciones de sitios diferentes.</li><li>Registra valor, sitio, dispositivo, hora y respuesta clínica.</li></ul></div>
    <p className="temp-game-note">Actividad educativa, no diagnóstica. La fiebre, hipertermia e hipotermia requieren interpretación clínica. Ante alteración del estado mental, convulsiones, dificultad respiratoria, choque o sospecha de golpe de calor, activa la respuesta de emergencia institucional.</p>
  </section>;
}
