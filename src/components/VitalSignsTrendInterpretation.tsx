import { useMemo, useState } from "react";
import { Activity, AlertTriangle, CheckCircle2, ClipboardList, RotateCcw } from "lucide-react";

const timeline = [
  { time: "07:00", temp: "37.2 °C", hr: 88, rr: 18, bp: "122/78", spo2: 97, pain: 2, note: "Consciente, cooperadora; sin dificultad respiratoria referida." },
  { time: "11:00", temp: "37.8 °C", hr: 96, rr: 20, bp: "124/80", spo2: 96, pain: 3, note: "Refiere malestar general y cansancio." },
  { time: "15:00", temp: "38.5 °C", hr: 112, rr: 26, bp: "104/68", spo2: 91, pain: 4, note: "Refiere disnea y mayor fatiga; SpO₂ registrada en aire ambiente." },
];

const questions = [
  {
    prompt: "¿Qué interpretación describe mejor la tendencia entre las 07:00 y las 15:00?",
    options: [
      "Los parámetros permanecen estables y no requieren una nueva valoración.",
      "Hay cambios simultáneos: aumentan FC, FR y temperatura; descienden SpO₂ y presión arterial.",
      "Solo cambió la temperatura; los demás datos carecen de relevancia clínica.",
    ],
    correct: 1,
    feedback: "La lectura conjunta y seriada es clave: no se interpreta un dato aislado. La tendencia, los síntomas y el contexto justifican una valoración inmediata.",
  },
  {
    prompt: "¿Cuál es la prioridad inmediata de enfermería?",
    options: [
      "Realizar una valoración focalizada ABC, estado de conciencia y perfusión; verificar la medición de SpO₂ sin retrasar la atención.",
      "Esperar la siguiente toma programada para confirmar si los valores cambian.",
      "Registrar los datos y continuar con las actividades habituales del turno.",
    ],
    correct: 0,
    feedback: "Prioriza vía aérea, respiración y circulación, estado neurológico y perfusión. Comprueba señal, sensor y condiciones de medición, pero no demores la respuesta ante disnea y deterioro.",
  },
  {
    prompt: "¿Qué conducta de comunicación es más adecuada?",
    options: [
      "Comentar el caso al finalizar el turno, cuando estén todos los registros completos.",
      "Notificar oportunamente a la enfermera responsable y al equipo clínico, comunicando síntomas y tendencias con datos objetivos.",
      "Modificar por cuenta propia el tratamiento y después informar lo realizado.",
    ],
    correct: 1,
    feedback: "La evolución y los síntomas requieren escalamiento oportuno conforme al protocolo institucional. Actúa dentro de tu ámbito de competencia y las indicaciones vigentes.",
  },
  {
    prompt: "¿Qué formato ayuda a organizar el reporte al equipo?",
    options: ["SOAPIE exclusivamente.", "SBAR: situación, antecedentes, valoración y recomendación/solicitud.", "Un mensaje sin cifras para evitar confusiones."],
    correct: 1,
    feedback: "SBAR permite transmitir una situación prioritaria de forma breve, estructurada y con cifras, contexto y solicitud concreta.",
  },
];

export default function VitalSignsTrendInterpretation() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [sbar, setSbar] = useState({ situation: "", background: "", assessment: "", recommendation: "" });
  const [showModel, setShowModel] = useState(false);
  const [finished, setFinished] = useState(false);
  const score = useMemo(() => answers.reduce((total, answer, index) => total + (answer === questions[index].correct ? 1 : 0), 0), [answers]);
  const current = questions[step];

  function choose(index: number) {
    if (answers[step] !== undefined) return;
    setAnswers((previous) => [...previous.slice(0, step), index, ...previous.slice(step + 1)]);
  }
  function next() {
    if (step < questions.length - 1) setStep((value) => value + 1);
    else setFinished(true);
  }
  function reset() {
    setStep(0); setAnswers([]); setSbar({ situation: "", background: "", assessment: "", recommendation: "" }); setShowModel(false); setFinished(false);
  }

  return (
    <section className="vitals-interpretation" aria-labelledby="vitals-interpretation-title">
      <header className="vitals-interpretation-header">
        <span className="vitals-interpretation-icon"><Activity size={23}/></span>
        <div><small>RETO DE PENSAMIENTO CLÍNICO</small><h3 id="vitals-interpretation-title">Una tendencia que no debes pasar por alto</h3><p>Analiza la evolución, prioriza la valoración y comunica tus hallazgos.</p></div>
      </header>
      <p className="vitals-interpretation-alert"><AlertTriangle size={16}/> Caso simulado con fines educativos. No representa una guía diagnóstica ni sustituye protocolos institucionales, supervisión o juicio clínico.</p>
      <div className="vitals-case-summary"><div><span>Persona</span><strong>Adulta · caso ficticio</strong></div><div><span>Contexto</span><strong>Durante un turno de hospitalización</strong></div><div><span>Oxígeno</span><strong>Aire ambiente en las tres mediciones</strong></div></div>
      <div className="vitals-case-table-wrap"><table className="vitals-case-table"><thead><tr><th>Hora</th><th>T°</th><th>FC</th><th>FR</th><th>PA</th><th>SpO₂</th><th>Dolor</th></tr></thead><tbody>{timeline.map((item) => <tr key={item.time}><td>{item.time}</td><td>{item.temp}</td><td>{item.hr}</td><td>{item.rr}</td><td>{item.bp}</td><td>{item.spo2}%</td><td>{item.pain}/10</td></tr>)}</tbody></table></div>
      <div className="vitals-case-notes">{timeline.map((item) => <p key={item.time}><strong>{item.time}:</strong> {item.note}</p>)}</div>
      {!finished ? <div className="vitals-quiz-card">
        <div className="vitals-quiz-progress"><span>Pregunta {step + 1} de {questions.length}</span><span>{answers.filter((answer, index) => answer === questions[index].correct).length} aciertos</span></div>
        <div className="vitals-quiz-track"><span style={{ width: ((step + 1) / questions.length) * 100 + "%" }}/></div>
        <h4>{current.prompt}</h4>
        <div className="vitals-quiz-options">{current.options.map((option, index) => <button type="button" key={option} className={"vitals-quiz-option" + (answers[step] === index ? (index === current.correct ? " is-correct" : " is-incorrect") : "")} onClick={() => choose(index)} disabled={answers[step] !== undefined}><span>{String.fromCharCode(65 + index)}</span>{option}</button>)}</div>
        {answers[step] !== undefined && <div className={"vitals-quiz-feedback" + (answers[step] === current.correct ? " is-correct" : " is-incorrect")} role="status"><strong>{answers[step] === current.correct ? "¡Correcto!" : "Revisa el razonamiento"}</strong><p>{current.feedback}</p></div>}
        <div className="vitals-quiz-actions"><button type="button" className="vitals-quiz-next" disabled={answers[step] === undefined} onClick={next}>{step === questions.length - 1 ? "Ver resultado y elaborar SBAR" : "Siguiente pregunta"} →</button></div>
      </div> : <div className="vitals-sbar-panel">
        <div className="vitals-sbar-result"><CheckCircle2 size={20}/><div><strong>Reto completado: {score} de {questions.length} aciertos</strong><span>{score === questions.length ? "Excelente lectura de la tendencia." : "Repasa la retroalimentación y fortalece tu razonamiento."}</span></div></div>
        <h4><ClipboardList size={18}/> Ahora comunica el caso con SBAR</h4>
        <p className="vitals-sbar-instruction">Redacta un reporte breve con la información del escenario. Evita emitir un diagnóstico; comunica hallazgos y solicita valoración.</p>
        <label> S · Situación <textarea value={sbar.situation} onChange={(event) => setSbar({ ...sbar, situation: event.target.value })} placeholder="¿Quién eres, a quién reportas y qué cambio urgente observas?" rows={2}/></label>
        <label> B · Antecedentes <textarea value={sbar.background} onChange={(event) => setSbar({ ...sbar, background: event.target.value })} placeholder="Contexto disponible, condición previa, soporte de oxígeno y hora de inicio..." rows={2}/></label>
        <label> A · Valoración <textarea value={sbar.assessment} onChange={(event) => setSbar({ ...sbar, assessment: event.target.value })} placeholder="Compara cifras de las 07:00, 11:00 y 15:00; incluye disnea y fatiga..." rows={3}/></label>
        <label> R · Recomendación / solicitud <textarea value={sbar.recommendation} onChange={(event) => setSbar({ ...sbar, recommendation: event.target.value })} placeholder="Solicita valoración inmediata e indica qué apoyo necesitas según el protocolo..." rows={2}/></label>
        <button type="button" className="vitals-quiz-secondary" onClick={() => setShowModel((value) => !value)}>{showModel ? "Ocultar ejemplo orientador" : "Consultar ejemplo orientador"}</button>
        {showModel && <div className="vitals-sbar-model"><strong>Ejemplo orientador</strong><p><b>S:</b> Reporto cambio clínico en una persona adulta hospitalizada, con disnea y SpO₂ de 91% en aire ambiente a las 15:00.</p><p><b>B:</b> A las 07:00 SpO₂ 97%, FC 88 y FR 18; a las 11:00 SpO₂ 96%, FC 96 y FR 20.</p><p><b>A:</b> A las 15:00 presenta FC 112, FR 26, PA 104/68 mmHg y temperatura 38.5 °C; refiere disnea y fatiga. La SpO₂ descendió a 91%.</p><p><b>R:</b> Solicito valoración clínica inmediata y apoyo para seguir el protocolo institucional. Mantendré vigilancia y comunicaré cambios.</p></div>}
        <button type="button" className="vitals-quiz-restart" onClick={reset}><RotateCcw size={15}/> Reiniciar actividad</button>
      </div>}
      <p className="vitals-interpretation-footnote">En un escenario real: permanece con la persona, solicita ayuda oportunamente, realiza valoración focalizada y monitorización conforme a tu función y protocolo. No retrases el escalamiento por completar este ejercicio ni indiques cambios terapéuticos fuera de tu competencia.</p>
    </section>
  );
}
