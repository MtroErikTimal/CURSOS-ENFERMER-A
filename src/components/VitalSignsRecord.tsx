import { useState, type FormEvent } from "react";

type RecordData = {
  time: string; temperature: string; site: string; pulse: string; respiratory: string;
  systolic: string; diastolic: string; spo2: string; oxygen: string; pain: string; observations: string;
};
const initial: RecordData = { time: "", temperature: "", site: "Oral", pulse: "", respiratory: "", systolic: "", diastolic: "", spo2: "", oxygen: "Aire ambiente", pain: "", observations: "" };

export default function VitalSignsRecord() {
  const [data, setData] = useState<RecordData>(initial);
  const [record, setRecord] = useState("");
  const [message, setMessage] = useState("");
  const update = (field: keyof RecordData, value: string) => {
    setData(current => ({ ...current, [field]: value }));
    setRecord("");
    setMessage("");
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = [data.time,data.temperature,data.pulse,data.respiratory,data.systolic,data.diastolic,data.spo2,data.pain];
    if (values.some(value => value.trim() === "")) { setMessage("Completa todos los campos obligatorios antes de generar el registro."); return; }
    const t=Number(data.temperature), p=Number(data.pulse), fr=Number(data.respiratory), sys=Number(data.systolic), dia=Number(data.diastolic), ox=Number(data.spo2), pain=Number(data.pain);
    if (![t,p,fr,sys,dia,ox,pain].every(Number.isFinite) || t < 25 || t > 45 || p < 20 || p > 250 || fr < 4 || fr > 80 || sys < 50 || sys > 280 || dia < 20 || dia > 180 || ox < 50 || ox > 100 || pain < 0 || pain > 10 || !Number.isInteger(pain)) {
      setMessage("Revisa los valores: hay cifras fuera de los límites de captura de esta práctica. No son rangos de normalidad."); return;
    }
    if (sys <= dia) { setMessage("La presión sistólica debe ser mayor que la diastólica. Verifica la captura."); return; }
    const note = `REGISTRO SIMULADO DE SIGNOS VITALES\nHora: ${data.time}\nTemperatura: ${t} °C, sitio ${data.site}.\nFrecuencia cardiaca/pulso: ${p} lpm.\nFrecuencia respiratoria: ${fr} rpm.\nPresión arterial: ${sys}/${dia} mmHg.\nSpO₂: ${ox}%, condición de oxígeno: ${data.oxygen}.\nDolor referido: ${pain}/10.\nObservaciones: ${data.observations.trim() || "No se agregaron observaciones."}\n\nNota educativa: datos ficticios para práctica. Correlacionar con valoración clínica, contexto y protocolo institucional.`;
    setRecord(note);
    setMessage("Registro generado. Verifica que los datos correspondan exactamente a la medición simulada.");
  };
  const copyRecord = async () => {
    if (!record) return;
    try { await navigator.clipboard.writeText(record); setMessage("Registro copiado."); }
    catch { setMessage("No se pudo copiar automáticamente. Selecciona y copia el texto del registro."); }
  };
  const reset = () => { setData(initial); setRecord(""); setMessage(""); };
  return <section className="vitals-record">
    <header className="vitals-record-header"><span aria-hidden="true">📝</span><div><small>PRÁCTICA DE DOCUMENTACIÓN</small><h3>Hoja de registro de signos vitales</h3><p>Captura los datos de un escenario simulado y genera una nota clara y ordenada.</p></div></header>
    <div className="vitals-record-warning"><strong>Actividad académica:</strong> utiliza únicamente datos ficticios. No ingreses nombres, identificadores ni información de pacientes reales. La herramienta no diagnostica ni determina si una cifra es normal.</div>
    <form className="vitals-record-form" onSubmit={submit}>
      <div className="vitals-record-section-title"><strong>1. Datos de la medición</strong><span>* Campos obligatorios</span></div>
      <div className="vitals-record-grid">
        <label>Hora de valoración *<input type="time" value={data.time} onChange={e=>update("time",e.target.value)} required /></label>
        <label>Temperatura (°C) *<input type="number" step="0.1" min="25" max="45" placeholder="Ej. 36.8" value={data.temperature} onChange={e=>update("temperature",e.target.value)} required /></label>
        <label>Sitio de medición *<select value={data.site} onChange={e=>update("site",e.target.value)}><option>Oral</option><option>Axilar</option><option>Timpánico</option><option>Temporal</option><option>Rectal</option><option>Otro / según protocolo</option></select></label>
        <label>Frecuencia cardiaca (lpm) *<input type="number" min="20" max="250" placeholder="Ej. 78" value={data.pulse} onChange={e=>update("pulse",e.target.value)} required /></label>
        <label>Frecuencia respiratoria (rpm) *<input type="number" min="4" max="80" placeholder="Ej. 18" value={data.respiratory} onChange={e=>update("respiratory",e.target.value)} required /></label>
        <label>Presión sistólica (mmHg) *<input type="number" min="50" max="280" placeholder="Ej. 120" value={data.systolic} onChange={e=>update("systolic",e.target.value)} required /></label>
        <label>Presión diastólica (mmHg) *<input type="number" min="20" max="180" placeholder="Ej. 80" value={data.diastolic} onChange={e=>update("diastolic",e.target.value)} required /></label>
        <label>Saturación SpO₂ (%) *<input type="number" min="50" max="100" placeholder="Ej. 98" value={data.spo2} onChange={e=>update("spo2",e.target.value)} required /></label>
        <label>Condición de oxígeno *<select value={data.oxygen} onChange={e=>update("oxygen",e.target.value)}><option>Aire ambiente</option><option>Cánula nasal (anotar flujo en observaciones)</option><option>Mascarilla (anotar tipo y flujo)</option><option>Otro dispositivo (especificar)</option></select></label>
        <label>Dolor referido (0–10) *<input type="number" min="0" max="10" step="1" placeholder="Ej. 2" value={data.pain} onChange={e=>update("pain",e.target.value)} required /></label>
      </div>
      <label className="vitals-record-observations">Observaciones clínicas relevantes<textarea rows={3} placeholder="Ej. refiere cefalea; se observa piel pálida; posición, síntomas, sitio del pulso, características de la respiración..." value={data.observations} onChange={e=>update("observations",e.target.value)} /></label>
      <div className="vitals-record-actions"><button type="submit" className="button button-green">Generar registro</button><button type="button" className="vitals-record-reset" onClick={reset}>Limpiar campos ↻</button></div>
      {message && <p className="vitals-record-message" role="status">{message}</p>}
    </form>
    {record && <div className="vitals-record-output"><div className="vitals-record-section-title"><strong>2. Nota generada</strong><span>Revisión antes de utilizar</span></div><pre>{record}</pre><button type="button" className="button button-green" onClick={copyRecord}>Copiar nota</button></div>}
    <footer className="vitals-record-footer"><strong>Recuerda:</strong> registra fecha y hora, unidades, sitio anatómico, dispositivo o condición de oxígeno, hallazgos objetivos, datos referidos, intervenciones, comunicación y respuesta. Sigue el formato y las reglas de documentación de tu institución.</footer>
  </section>;
}
