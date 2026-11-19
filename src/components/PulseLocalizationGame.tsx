import { useState } from "react";

type PulseSite = { id: string; name: string; clue: string; feedback: string; x: number; y: number; view: "anterior" | "posterior" };

const sites: PulseSite[] = [
  { id:"temporal", name:"Temporal", clue:"Se palpa en la región lateral de la cabeza, por delante del pabellón auricular. Es útil para valorar la circulación superficial de la cabeza.", feedback:"Ubicación: región temporal, lateral a la frente y anterior a la oreja.", x:78, y:66, view:"anterior" },
  { id:"carotideo", name:"Carotídeo", clue:"Se localiza en el cuello, a un lado de la tráquea y medial al músculo esternocleidomastoideo. Palpa un solo lado a la vez; nunca comprimas ambos.", feedback:"Ubicación: surco entre la tráquea y el borde anterior del esternocleidomastoideo.", x:88, y:119, view:"anterior" },
  { id:"braquial", name:"Braquial", clue:"Se explora en la cara anterior del pliegue del codo, hacia el lado medial del tendón del bíceps. Es un sitio utilizado para la toma manual de presión arterial.", feedback:"Ubicación: fosa antecubital, medial al tendón del bíceps.", x:63, y:257, view:"anterior" },
  { id:"radial", name:"Radial", clue:"Se palpa en la muñeca, del lado del pulgar, sobre el trayecto de la arteria que llega a la mano.", feedback:"Ubicación: cara anterior-lateral de la muñeca, lado del pulgar.", x:45, y:328, view:"anterior" },
  { id:"femoral", name:"Femoral", clue:"Se localiza en la región inguinal, inferior al ligamento inguinal, aproximadamente a mitad de camino entre la espina ilíaca anterosuperior y la sínfisis del pubis.", feedback:"Ubicación: región inguinal, sobre el trayecto de la arteria femoral.", x:100, y:420, view:"anterior" },
  { id:"pedio", name:"Pedio (dorsal del pie)", clue:"Se busca en el dorso del pie, generalmente lateral al tendón del extensor largo del dedo gordo, hacia el primer espacio intermetatarsiano.", feedback:"Ubicación: dorso del pie, cerca del primer espacio intermetatarsiano. Puede variar anatómicamente.", x:100, y:585, view:"anterior" },
  { id:"popliteo", name:"Poplíteo", clue:"Se palpa profundamente en la región posterior de la rodilla, con la articulación ligeramente flexionada y la musculatura relajada.", feedback:"Ubicación: fosa poplítea, detrás de la rodilla.", x:300, y:421, view:"posterior" },
  { id:"tibial", name:"Tibial posterior", clue:"Se localiza detrás y ligeramente por debajo del maléolo medial, entre este y el tendón de Aquiles.", feedback:"Ubicación: región posteroinferior al maléolo medial, detrás del tobillo interno.", x:320, y:566, view:"posterior" }
];

export default function PulseLocalizationGame() {
  const [round,setRound]=useState(0);
  const [selected,setSelected]=useState<string|null>(null);
  const [score,setScore]=useState(0);
  const [finished,setFinished]=useState(false);
  const current=sites[round];
  const choose=(id:string)=>{ if(selected || finished) return; setSelected(id); if(id===current.id) setScore(v=>v+1); };
  const next=()=>{ if(round===sites.length-1){setFinished(true);return;} setRound(v=>v+1);setSelected(null); };
  const restart=()=>{setRound(0);setSelected(null);setScore(0);setFinished(false);};
  return <section className="pulse-map-game" aria-label="Actividad interactiva de localización de pulsos">
    <div className="pulse-map-hero"><span className="pulse-map-icon">♡</span><div><small>PRÁCTICA DE VALORACIÓN</small><h3>Misión: encuentra el pulso</h3><p>Lee la pista anatómica y toca sobre la persona el sitio donde palparías ese pulso. No hay etiquetas visibles: utiliza tus conocimientos anatómicos.</p></div></div>
    {!finished ? <>
      <div className="pulse-map-status"><span>Localización {round+1} de {sites.length}</span><strong>{score} aciertos</strong></div><div className="pulse-map-progress"><span style={{width:`${((round+(selected?1:0))/sites.length)*100}%`}}/></div>
      <div className="pulse-map-clue"><small>PISTA ANATÓMICA</small><p>{current.clue}</p></div>
      <div className="pulse-map-legend"><span>Vista anterior</span><span>Vista posterior</span></div>
      <div className="pulse-map-body" role="group" aria-label="Selecciona el punto anatómico en la figura">
        <svg viewBox="0 0 400 620" role="img" aria-label="Siluetas anterior y posterior de una persona para localizar los pulsos">
          <g fill="#dce8e4" stroke="#63877b" strokeWidth="2.5" strokeLinejoin="round">
            <circle cx="100" cy="54" r="27"/><path d="M88 82 L85 101 Q58 107 48 135 L30 220 Q27 235 41 239 Q53 242 58 226 L73 157 L75 255 L66 350 Q63 366 80 367 L87 274 L96 367 Q97 380 112 380 Q125 379 122 363 L116 257 L127 157 L143 226 Q148 242 160 237 Q172 232 166 217 L145 132 Q137 107 115 101 L112 82Z"/><path d="M84 378 Q68 393 70 427 L76 515 Q76 528 88 528 Q100 528 100 514 L103 438 L108 514 Q108 528 120 528 Q132 527 130 513 L134 428 Q137 394 118 378Z"/><path d="M78 525 L74 584 Q73 597 87 598 L103 598 L104 582 L100 526Z M109 526 L106 582 L108 598 L126 598 Q139 597 135 584 L129 525Z"/>
            <circle cx="300" cy="54" r="27"/><path d="M288 82 L285 101 Q258 107 248 135 L230 220 Q227 235 241 239 Q253 242 258 226 L273 157 L275 255 L266 350 Q263 366 280 367 L287 274 L296 367 Q297 380 312 380 Q325 379 322 363 L316 257 L327 157 L343 226 Q348 242 360 237 Q372 232 366 217 L345 132 Q337 107 315 101 L312 82Z"/><path d="M284 378 Q268 393 270 427 L276 515 Q276 528 288 528 Q300 528 300 514 L303 438 L308 514 Q308 528 320 528 Q332 527 330 513 L334 428 Q337 394 318 378Z"/><path d="M278 525 L274 584 Q273 597 287 598 L303 598 L304 582 L300 526Z M309 526 L306 582 L308 598 L326 598 Q339 597 335 584 L329 525Z"/>
          </g>
          <g fill="none" stroke="#a6beb4" strokeWidth="1.5"><path d="M80 103 Q100 113 120 103 M80 257 L120 257 M80 420 L120 420 M280 420 L320 420"/></g>
        </svg>
        {sites.map(site=><button key={site.id} type="button" className={`pulse-map-point ${selected===site.id?(site.id===current.id?"is-correct":"is-wrong"):""} ${selected===site.id?"is-selected":""} ${selected===current.id && site.id===current.id?"is-answer":""}`} style={{left:`${site.x/4}%`,top:`${site.y/6.2}%`}} onClick={()=>choose(site.id)} aria-label={`Seleccionar punto ${site.name}`} disabled={!!selected}><span>{selected && site.id===current.id ? "✓" : selected===site.id ? "×" : ""}</span></button>)}
      </div>
      <p className="pulse-map-hint">Toca un punto de la figura. Si necesitas corregir, podrás intentarlo en la siguiente ronda.</p>
      {selected && <div className={`pulse-map-feedback ${selected===current.id?"is-success":"is-error"}`}><strong>{selected===current.id?"¡Correcto!":"Todavía no es ese sitio"}</strong><p>{selected===current.id?current.feedback:`La ubicación correcta es ${current.name}. ${current.feedback}`}</p><button type="button" className="button button-green" onClick={next}>{round===sites.length-1?"Ver resultado":"Siguiente pulso"} →</button></div>}
    </> : <div className="pulse-map-result"><span>🏅</span><small>PRÁCTICA COMPLETADA</small><h4>{score===sites.length?"¡Excelente dominio anatómico!":"¡Buen trabajo!"}</h4><strong>{score} de {sites.length} localizaciones correctas</strong><p>Repasa los sitios donde tuviste dificultad y recuerda comparar ambos lados cuando corresponda. En la valoración real, documenta sitio, lado y características del pulso.</p><button type="button" className="button button-green" onClick={restart}>Volver a practicar ↻</button></div>}
    <p className="pulse-map-note">Actividad didáctica. La palpación requiere técnica y supervisión. En la valoración clínica, compara pulsos periféricos de forma bilateral cuando esté indicado; explora las carótidas de una en una. Si un pulso esperado no se palpa, confirma la técnica, valora el contexto y comunica oportunamente el hallazgo.</p>
  </section>;
}
