import { useState } from "react";

type Option = { id: string; name: string; color: string };
type Question = { id: number; image: string; item: string; context: string; correct: string; explanation: string };

const options: Option[] = [
  { id: "red-liquid", name: "Recipiente hermético rojo", color: "#c62828" },
  { id: "red-bag", name: "Bolsa roja", color: "#ef4444" },
  { id: "yellow-bag", name: "Bolsa amarilla", color: "#eab308" },
  { id: "yellow-liquid", name: "Recipiente hermético amarillo", color: "#ca8a04" },
  { id: "red-sharps", name: "Recipiente rígido rojo", color: "#b91c1c" },
  { id: "ordinary", name: "Residuo común", color: "#64748b" },
];

const questions: Question[] = [
  { id: 1, image: "🩸", item: "Sangre líquida", context: "Sangre en estado líquido generada durante la atención.", correct: "red-liquid", explanation: "La sangre y sus componentes únicamente en forma líquida se depositan en recipiente hermético rojo." },
  { id: 2, image: "🧫", item: "Cultivo microbiológico sólido", context: "Cultivo o cepa de agente biológico-infeccioso generado en el laboratorio.", correct: "red-bag", explanation: "Los cultivos y cepas se clasifican como RPBI. Cuando son residuos sólidos se utiliza bolsa roja; para los líquidos corresponde un recipiente hermético rojo." },
  { id: 3, image: "🧬", item: "Tejido humano patológico", context: "Tejido quirúrgico que cumple los supuestos de la norma y no está conservado en formol.", correct: "yellow-bag", explanation: "Los residuos patológicos sólidos que cumplen los criterios de la NOM-087 se depositan en bolsa amarilla. Verifica siempre el origen y las excepciones normativas." },
  { id: 4, image: "💉", item: "Aguja usada", context: "Aguja hipodérmica usada que cumple los criterios de punzocortante RPBI.", correct: "red-sharps", explanation: "Las agujas incluidas en la norma se depositan en un recipiente rígido rojo, resistente a punciones y con cierre seguro. No deben reencapucharse ni manipularse innecesariamente." },
  { id: 5, image: "🩹", item: "Material de curación saturado", context: "Gasa empapada o saturada de sangre durante una curación.", correct: "red-bag", explanation: "Los materiales de curación empapados, saturados o goteando sangre se clasifican como residuos no anatómicos sólidos y van en bolsa roja. Una mancha pequeña no basta por sí sola para clasificarlos como RPBI." },
  { id: 6, image: "🧪", item: "Residuo patológico líquido", context: "Residuo patológico en estado líquido que cumple la definición y los supuestos de la norma.", correct: "yellow-liquid", explanation: "Los residuos patológicos líquidos que cumplen los criterios de la NOM-087 se depositan en recipiente hermético amarillo." },
  { id: 7, image: "🩸", item: "Recipiente desechable con sangre líquida", context: "Recipiente desechable que contiene sangre líquida y se descarta como residuo sólido.", correct: "red-bag", explanation: "La norma incluye los recipientes desechables que contienen sangre líquida dentro de los residuos no anatómicos. El recipiente desechable se deposita en bolsa roja; la sangre líquida por separado va en recipiente hermético rojo." },
  { id: 8, image: "🔬", item: "Utensilio desechable de cultivo", context: "Utensilio desechable utilizado para contener, transferir o inocular un cultivo infeccioso.", correct: "red-bag", explanation: "Los utensilios desechables empleados en el manejo de cultivos y cepas se incluyen en esa categoría. Si son sólidos, se depositan en bolsa roja." },
  { id: 9, image: "🗡️", item: "Hoja de bisturí usada", context: "Hoja de bisturí usada que cumple los criterios de punzocortante RPBI.", correct: "red-sharps", explanation: "Las hojas de bisturí incluidas en la norma van en recipiente rígido rojo, resistente a perforaciones y con cierre seguro." },
  { id: 10, image: "🧻", item: "Papel de envoltura limpio", context: "Envoltura exterior limpia, sin contaminación biológica ni otra característica peligrosa.", correct: "ordinary", explanation: "No todo residuo generado en un hospital es RPBI. La envoltura limpia se separa como residuo común conforme al sistema institucional." },,

  { id: 11, image: "🧫", item: "Cultivo microbiológico líquido", context: "Medio líquido que contiene un cultivo de agente biológico-infeccioso.", correct: "red-liquid", explanation: "Los cultivos y cepas de agentes biológico-infecciosos en estado líquido se depositan en recipiente hermético rojo." },
  { id: 12, image: "🩸", item: "Torunda con una mancha pequeña de sangre", context: "Material con una mancha superficial, sin estar empapado, saturado ni presentar goteo.", correct: "ordinary", explanation: "Una mancha pequeña no basta por sí sola para clasificar el residuo como RPBI. La NOM-087 considera material de curación empapado, saturado o goteando sangre; aplica el protocolo institucional para el residuo no RPBI." },
  { id: 13, image: "🫀", item: "Placenta", context: "Residuo anatómico generado durante la atención obstétrica, sin conservación en formol.", correct: "yellow-bag", explanation: "La placenta se considera residuo patológico. Los residuos patológicos sólidos que cumplen los supuestos de la norma se depositan en bolsa amarilla." },
  { id: 14, image: "🧬", item: "Biopsia de tejido humano", context: "Tejido humano retirado durante un procedimiento y no conservado en formol.", correct: "yellow-bag", explanation: "Las muestras de tejido patológico que cumplen la definición normativa se depositan en bolsa amarilla cuando son sólidas. Las muestras conservadas en formol requieren manejo específico y no deben clasificarse automáticamente en esta bolsa." },
  { id: 15, image: "🩸", item: "Bolsa de sangre para transfusión caduca o no utilizada", context: "Bolsa con sangre o componentes sanguíneos en estado líquido que debe desecharse.", correct: "red-liquid", explanation: "La sangre y sus componentes únicamente en forma líquida se depositan en recipiente hermético rojo, conforme al manejo institucional." },
  { id: 16, image: "🪡", item: "Lanceta usada", context: "Lanceta desechable utilizada para punción y que cumple los criterios de punzocortante.", correct: "red-sharps", explanation: "Los punzocortantes incluidos en la NOM-087 se depositan en recipiente rígido rojo, resistente a punciones. No deben compactarse ni manipularse para separarlos." },
  { id: 17, image: "🧪", item: "Tubo capilar de vidrio usado", context: "Tubo capilar utilizado en una muestra y con capacidad de producir una lesión por punción o corte.", correct: "red-sharps", explanation: "Los objetos punzocortantes contaminados incluidos en la norma se depositan en recipiente rígido rojo. No se deben romper ni manipular." },
  { id: 18, image: "🧻", item: "Papel y envoltura sin contaminación", context: "Material limpio de empaque, sin sangre, secreciones ni cultivos.", correct: "ordinary", explanation: "Los residuos limpios que no cumplen criterios de RPBI se separan como residuos comunes conforme al sistema institucional." },
  { id: 19, image: "🧫", item: "Placa desechable con cultivo", context: "Placa utilizada para contener o manejar un cultivo de agente biológico-infeccioso.", correct: "red-bag", explanation: "Los cultivos y utensilios desechables utilizados en su manejo se clasifican como RPBI. Cuando son sólidos, se depositan en bolsa roja." },
  { id: 20, image: "🩹", item: "Compresa empapada de sangre", context: "Compresa que quedó saturada de sangre durante un procedimiento.", correct: "red-bag", explanation: "Las compresas y materiales de curación empapados, saturados o goteando sangre son residuos no anatómicos sólidos y se depositan en bolsa roja." },
  { id: 21, image: "🧴", item: "Bolsa recolectora con orina sin sangre visible", context: "Bolsa con orina, sin sangre ni material de cultivo y sin otro criterio especial de riesgo.", correct: "ordinary", explanation: "La orina por sí sola no se clasifica automáticamente como RPBI en la NOM-087. Debe seguirse la segregación institucional y valorar si existe alguna condición especial." },
  { id: 22, image: "🦠", item: "Animal de laboratorio inoculado con agente infeccioso", context: "Cadáver o parte de animal utilizado en investigación y expuesto a agentes biológico-infecciosos.", correct: "yellow-bag", explanation: "Los residuos patológicos de animales que cumplen los supuestos de la NOM-087 se manejan como patológicos; la presentación sólida corresponde a bolsa amarilla." },
];

function shuffle<T,>(items: T[]): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

export default function RPBIGame() {
  const [game, setGame] = useState(() => shuffle(questions));
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const current = game[index];
  const correctOption = options.find((option) => option.id === current?.correct);

  function answer(id: string) {
    if (selected !== null || finished) return;
    setSelected(id);
    if (id === current.correct) setScore((previous) => previous + 1);
  }

  function next() {
    if (index + 1 >= game.length) { setFinished(true); return; }
    setIndex((previous) => previous + 1);
    setSelected(null);
  }

  function restart() {
    setGame(shuffle(questions));
    setIndex(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  }

  return (
    <section className="rpbi-game" aria-label="Juego Misión RPBI">
      <header className="rpbi-game-header">
        <span className="rpbi-game-kicker">SIMULADOR EDUCATIVO DE ENFERMERÍA</span>
        <h3>♻️ Misión RPBI</h3>
        <p>Identifica cada residuo y deposítalo en el contenedor correcto.</p>
      </header>
      {!finished ? <>
        <div className="rpbi-game-status"><strong>Residuo {index + 1} de {game.length}</strong><strong>⭐ {score} aciertos</strong></div>
        <div className="rpbi-game-progress" role="progressbar" aria-label="Progreso del juego" aria-valuemin={0} aria-valuemax={game.length} aria-valuenow={index + 1}><span style={{ width: `${((index + 1) / game.length) * 100}%` }} /></div>
        <div className="rpbi-game-question">
          <span className="rpbi-game-emoji" aria-hidden="true">{current.image}</span>
          <h4>{current.item}</h4>
          <p>{current.context}</p>
          <strong>¿Dónde debes depositar este residuo?</strong>
        </div>
        <h4 className="rpbi-game-options-title">Selecciona el contenedor</h4>
        <div className="rpbi-game-options">
          {options.map((option) => {
            const isCorrect = option.id === current.correct;
            const isSelected = option.id === selected;
            const stateClass = selected !== null && isCorrect ? " is-correct" : isSelected ? " is-incorrect" : "";
            return <button type="button" key={option.id} className={`rpbi-game-option${stateClass}`} onClick={() => answer(option.id)} disabled={selected !== null}>
              <span className={`rpbi-game-container-image ${option.id.includes("bag") ? "is-bag" : option.id === "red-liquid" || option.id === "yellow-liquid" ? "is-hermetic" : option.id === "red-sharps" ? "is-sharps" : "is-common"}`} style={{ "--container-color": option.color } as React.CSSProperties} aria-hidden="true">
                <svg viewBox="0 0 64 72" role="presentation" focusable="false">
                  {option.id.includes("bag") ? <>
                    <path d="M21 13 L28 7 L36 7 L43 13 L51 17 L47 27 L44 63 Q32 68 20 63 L17 27 L13 17 Z" fill="var(--container-color)" stroke="#34443b" strokeWidth="1.8" strokeLinejoin="round"/>
                    <path d="M25 10 Q32 17 39 10 M25 10 L22 4 L42 4 L39 10" fill="none" stroke="#34443b" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M24 31 Q32 35 40 31" fill="none" stroke="#ffffff" strokeOpacity=".55" strokeWidth="2"/>
                  </> : option.id === "red-liquid" || option.id === "yellow-liquid" ? <>
                    <rect x="23" y="7" width="18" height="8" rx="2" fill="var(--container-color)" stroke="#34443b" strokeWidth="1.8"/>
                    <path d="M26 15 L38 15 L44 24 L44 61 Q32 66 20 61 L20 24 Z" fill="var(--container-color)" stroke="#34443b" strokeWidth="1.8" strokeLinejoin="round"/>
                    <path d="M23 38 Q32 34 41 38" fill="none" stroke="#ffffff" strokeOpacity=".65" strokeWidth="2"/>
                    <path d="M25 22 L39 22" stroke="#ffffff" strokeOpacity=".45" strokeWidth="2"/>
                  </> : <>
                    <path d="M13 18 L51 18 L48 64 Q32 68 16 64 Z" fill="var(--container-color)" stroke="#34443b" strokeWidth="1.8" strokeLinejoin="round"/>
                    <path d="M10 14 L54 14 L54 20 L10 20 Z" fill="var(--container-color)" stroke="#34443b" strokeWidth="1.8"/>
                    {option.id === "red-sharps" ? <path d="M25 14 L25 10 L39 10 L39 14 M27 37 L37 37" fill="none" stroke="#34443b" strokeWidth="2.4" strokeLinecap="round"/> : <path d="M23 34 L41 34 M23 43 L41 43" fill="none" stroke="#ffffff" strokeOpacity=".55" strokeWidth="2"/>}
                  </>}
                </svg>
              </span>
              <span className="rpbi-game-option-copy"><strong>{option.name}</strong></span>
              {selected !== null && isCorrect && <span className="rpbi-game-mark" aria-label="Respuesta correcta">✓</span>}
              {isSelected && !isCorrect && <span className="rpbi-game-mark" aria-label="Respuesta seleccionada incorrecta">×</span>}
            </button>;
          })}
        </div>
        {selected !== null && <div className={`rpbi-game-feedback${selected === current.correct ? " is-success" : " is-guidance"}`} role="status" aria-live="polite">
          <h4>{selected === current.correct ? "✅ ¡Correcto!" : "📘 Sigue aprendiendo"}</h4>
          <p><strong>Clasificación:</strong> {correctOption?.name}</p>
          <p>{current.explanation}</p>
          <button type="button" className="button button-dark" onClick={next}>{index + 1 === game.length ? "Ver resultado" : "Siguiente residuo"} <span aria-hidden="true">→</span></button>
        </div>}
      </> : <div className="rpbi-game-result" aria-live="polite">
        <span className="rpbi-game-result-emoji" aria-hidden="true">{score >= 8 ? "🏆" : score >= 6 ? "👏" : "📚"}</span>
        <span className="rpbi-game-kicker">MISIÓN COMPLETADA</span>
        <h4>Obtuviste {score} de {game.length} respuestas correctas</h4>
        <strong className="rpbi-game-percentage">{Math.round((score / game.length) * 100)}%</strong>
        <p>{score >= 8 ? "Excelente trabajo. Continúa aplicando los criterios de bioseguridad y segregación segura." : "Repasa las categorías y los criterios de clasificación de RPBI; después vuelve a intentarlo."}</p>
        <button type="button" className="button button-dark" onClick={restart}>↻ Jugar de nuevo</button>
      </div>}
      <footer className="rpbi-game-footer">Actividad educativa basada en la NOM-087-SEMARNAT-SSA1-2002. La clasificación debe verificarse con la norma y el protocolo institucional vigente. Los emojis son ilustrativos.</footer>
    </section>
  );
}
