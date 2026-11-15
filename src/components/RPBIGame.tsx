import { useState } from "react";

type Option = { id: string; name: string; color: string; description: string };
type Question = { id: number; image: string; item: string; context: string; correct: string; explanation: string };

const options: Option[] = [
  { id: "red-liquid", name: "Recipiente hermético rojo", color: "#c62828", description: "Sangre líquida y determinados residuos no anatómicos o cultivos líquidos" },
  { id: "red-bag", name: "Bolsa roja", color: "#ef4444", description: "Cultivos y cepas sólidos; residuos no anatómicos sólidos" },
  { id: "yellow-bag", name: "Bolsa amarilla", color: "#eab308", description: "Residuos patológicos sólidos" },
  { id: "yellow-liquid", name: "Recipiente hermético amarillo", color: "#ca8a04", description: "Residuos patológicos líquidos" },
  { id: "red-sharps", name: "Recipiente rígido rojo", color: "#b91c1c", description: "Punzocortantes que cumplen los criterios de RPBI" },
  { id: "ordinary", name: "Residuo común", color: "#64748b", description: "Material no contaminado y no clasificado como RPBI" },
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
  { id: 10, image: "🧻", item: "Papel de envoltura limpio", context: "Envoltura exterior limpia, sin contaminación biológica ni otra característica peligrosa.", correct: "ordinary", explanation: "No todo residuo generado en un hospital es RPBI. La envoltura limpia se separa como residuo común conforme al sistema institucional." },
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
              <span className="rpbi-game-swatch" style={{ backgroundColor: option.color }} aria-hidden="true" />
              <span className="rpbi-game-option-copy"><strong>{option.name}</strong><small>{option.description}</small></span>
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
