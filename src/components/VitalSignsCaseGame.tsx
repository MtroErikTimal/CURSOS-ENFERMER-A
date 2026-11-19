import { useState } from "react";

const questions = [
  {
    prompt: "Al recibir a la persona, ¿cuál es la primera prioridad de enfermería?",
    options: ["Completar primero todos los datos administrativos", "Realizar una valoración inicial ABC, observar estado general y dificultad respiratoria", "Administrar un antipirético sin revisar indicaciones"],
    answer: 1,
    explanation: "La valoración inicial prioriza vía aérea, respiración y circulación, estado de conciencia y signos de deterioro. La seguridad y la atención de amenazas inmediatas anteceden a tareas administrativas."
  },
  {
    prompt: "¿Qué interpretación integra mejor los datos disponibles?",
    options: ["Todos los valores son normales porque la presión arterial no es baja", "Hay fiebre, taquicardia, taquipnea y SpO₂ baja; se requiere valoración pronta y correlación clínica", "La temperatura explica por sí sola todos los hallazgos y no hace falta valorar más"],
    answer: 1,
    explanation: "La combinación de fiebre, frecuencia cardiaca y respiratoria elevadas y SpO₂ de 91% al aire ambiente es preocupante. No establece por sí sola un diagnóstico; exige valorar esfuerzo respiratorio, perfusión, estado mental, antecedentes y tendencia, y comunicar según protocolo."
  },
  {
    prompt: "Antes de registrar la SpO₂ de 91%, ¿qué acción ayuda a comprobar la medición sin retrasar la atención?",
    options: ["Ignorarla si la persona puede hablar", "Verificar sensor, sitio, señal estable, perfusión y concordancia del pulso; valorar simultáneamente al paciente", "Cambiar el valor a 95% porque es el esperado"],
    answer: 1,
    explanation: "Comprueba colocación y calidad de señal, movimiento, perfusión y concordancia con el pulso palpado. Nunca alteres el dato ni permitas que la verificación del dispositivo retrase la respuesta ante dificultad respiratoria."
  },
  {
    prompt: "¿Cuál es la conducta más segura ante estos hallazgos?",
    options: ["Dejar a la persona sola y repetir signos vitales en una hora", "Notificar de inmediato al profesional responsable, activar el protocolo institucional según gravedad y continuar vigilancia", "Indicar oxígeno o modificar el flujo por iniciativa propia sin protocolo ni indicación"],
    answer: 1,
    explanation: "Comunica los hallazgos oportunamente, solicita valoración y activa la respuesta institucional según el estado clínico. Mantén vigilancia y prepara el equipo indicado. Oxígeno y otras intervenciones se realizan conforme a competencias, prescripción o protocolo autorizado."
  },
  {
    prompt: "¿Qué registro es más completo y objetivo?",
    options: ["“Paciente mal, signos alterados”", "“09:10 h: T 38.6 °C oral; FC 112 lpm; FR 24 rpm; PA 106/68 mmHg; SpO₂ 91% al aire ambiente. Refiere escalofríos y tos. Se observa respiración rápida; se notifica a responsable y se continúa valoración”", "“Tiene neumonía y se encuentra grave”"],
    answer: 1,
    explanation: "Registra fecha/hora, valores y unidades, sitio de temperatura, condición de oxígeno, síntomas referidos, hallazgos observados, acciones, comunicación y respuesta. No documentes diagnósticos no confirmados ni conclusiones que excedan los datos."
  }
];

export default function VitalSignsCaseGame() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const current = questions[index];
  const select = (n: number) => {
    if (choice !== null) return;
    setChoice(n);
    if (n === current.answer) setScore(s => s + 1);
  };
  const next = () => {
    if (index === questions.length - 1) setFinished(true);
    else { setIndex(i => i + 1); setChoice(null); }
  };
  const reset = () => { setIndex(0); setChoice(null); setScore(0); setFinished(false); };

  return <section className="vitals-case">
    <header className="vitals-case-header"><span className="vitals-case-icon" aria-hidden="true">🩺</span><div><small>RETO DE INTEGRACIÓN · CASO CLÍNICO SIMULADO</small><h3>Misión: integra los signos vitales</h3><p>Analiza el escenario, prioriza la seguridad y toma decisiones fundamentadas.</p></div></header>
    <div className="vitals-case-patient"><div className="vitals-case-patient-top"><strong>Paciente simulado</strong><span>52 años · Adulto</span></div><p>Acude por tos y escalofríos desde el día anterior. Refiere cansancio. Está despierto y responde preguntas, pero respira más rápido de lo habitual.</p><div className="vitals-case-vitals">
      <div><span>Temperatura</span><strong>38.6 °C</strong><small>Oral</small></div>
      <div><span>Frecuencia cardiaca</span><strong>112</strong><small>lpm</small></div>
      <div><span>Frecuencia respiratoria</span><strong>24</strong><small>rpm</small></div>
      <div><span>Presión arterial</span><strong>106/68</strong><small>mmHg</small></div>
      <div><span>SpO₂</span><strong>91%</strong><small>Al aire ambiente</small></div>
      <div><span>Dolor</span><strong>3/10</strong><small>Refiere malestar</small></div>
    </div><p className="vitals-case-alert"><strong>Dato de seguridad:</strong> la persona está despierta, pero presenta respiración rápida y saturación baja. No te limites a las cifras: observa esfuerzo respiratorio, coloración, perfusión, estado mental y evolución.</p></div>
    {!finished ? <div className="vitals-case-question"><div className="vitals-case-progress"><span>Decisión {index + 1} de {questions.length}</span><strong>{score} aciertos</strong></div><div className="vitals-case-progressbar"><span style={{width: ((index + (choice !== null ? 1 : 0)) / questions.length * 100) + "%"}}/></div><h4>{current.prompt}</h4><div className="vitals-case-options">{current.options.map((option,n)=><button type="button" key={option} disabled={choice !== null} onClick={()=>select(n)} className={"vitals-case-option" + (choice !== null && n === current.answer ? " correct" : "") + (choice === n && n !== current.answer ? " incorrect" : "")}><b>{String.fromCharCode(65+n)}</b><span>{option}</span></button>)}</div>{choice !== null && <div className={"vitals-case-feedback " + (choice === current.answer ? "correct" : "incorrect")}><strong>{choice === current.answer ? "Decisión correcta" : "Revisa el razonamiento"}</strong><p>{current.explanation}</p><button type="button" onClick={next} className="button button-green">{index === questions.length - 1 ? "Ver resultado" : "Siguiente decisión"} →</button></div>}</div> : <div className="vitals-case-result"><span aria-hidden="true">{score === questions.length ? "🏆" : "📋"}</span><small>CASO COMPLETADO</small><h4>{score === questions.length ? "¡Excelente juicio clínico!" : "Caso resuelto"}</h4><strong>{score} de {questions.length} respuestas correctas</strong><p>La integración de signos vitales requiere observar a la persona, validar la técnica, reconocer tendencias y comunicar oportunamente. Una cifra aislada no sustituye la valoración clínica.</p><button type="button" onClick={reset} className="button button-green">Volver a resolver ↻</button></div>}
    <footer className="vitals-case-footer"><strong>Objetivo de aprendizaje</strong><p>Integrar temperatura, pulso, frecuencia respiratoria, presión arterial, SpO₂ y dolor para priorizar cuidados, identificar signos de alarma y elaborar un registro objetivo.</p><small>Escenario ficticio para fines educativos. No representa una guía diagnóstica ni sustituye la valoración, las indicaciones profesionales o los protocolos institucionales. La respuesta debe ajustarse al estado clínico y a los recursos disponibles.</small></footer>
  </section>;
}
