import { useMemo, useState, type FormEvent } from "react";

type Reading = {
  id: number;
  time: string;
  temperature: number;
  pulse: number;
  respiratory: number;
  systolic: number;
  diastolic: number;
  spo2: number;
  pain: number;
  temperatureSite: string;
  oxygenSupport: string;
  oxygenFlow: string;
  observations: string;
};

type Metric = "temperature" | "pulse" | "respiratory" | "pressure" | "spo2" | "pain";

const metricLabels: Record<Metric, string> = {
  temperature: "Temperatura (°C)",
  pulse: "Frecuencia cardiaca (lpm)",
  respiratory: "Frecuencia respiratoria (rpm)",
  pressure: "Presión arterial (mmHg)",
  spo2: "SpO₂ (%)",
  pain: "Dolor (0–10)",
};

const sampleReadings: Reading[] = [
  { id: 1, time: "07:00", temperature: 37.2, pulse: 88, respiratory: 18, systolic: 122, diastolic: 78, spo2: 97, pain: 2, temperatureSite: "Oral", oxygenSupport: "Aire ambiente", oxygenFlow: "", observations: "Persona consciente y cooperadora." },
  { id: 2, time: "11:00", temperature: 37.8, pulse: 96, respiratory: 20, systolic: 124, diastolic: 80, spo2: 96, pain: 3, temperatureSite: "Axilar", oxygenSupport: "Aire ambiente", oxygenFlow: "", observations: "Refiere malestar general." },
  { id: 3, time: "15:00", temperature: 37.5, pulse: 90, respiratory: 18, systolic: 120, diastolic: 76, spo2: 97, pain: 2, temperatureSite: "Oral", oxygenSupport: "Puntas nasales", oxygenFlow: "2", observations: "Se revalora después de intervención indicada." },
];

function valuesFor(reading: Reading, metric: Metric) {
  if (metric === "pressure") return [reading.systolic, reading.diastolic];
  return [reading[metric]];
}

export default function VitalSignsTrendChart() {
  const [readings, setReadings] = useState<Reading[]>([]);
  const [metric, setMetric] = useState<Metric>("temperature");
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({
    time: "07:00",
    temperature: "36.5",
    pulse: "80",
    respiratory: "16",
    systolic: "120",
    diastolic: "80",
    spo2: "97",
    pain: "0",
    temperatureSite: "Oral",
    oxygenSupport: "Aire ambiente",
    oxygenFlow: "",
    observations: "",
  });

  const chart = useMemo(() => {
    if (!readings.length) return null;
    const series = metric === "pressure"
      ? [{ name: "Sistólica", index: 0 }, { name: "Diastólica", index: 1 }]
      : [{ name: metricLabels[metric], index: 0 }];
    const allValues = readings.flatMap((reading) => valuesFor(reading, metric));
    let min = Math.min(...allValues);
    let max = Math.max(...allValues);
    const padding = Math.max((max - min) * 0.2, metric === "temperature" ? 0.3 : 2);
    min = Math.max(0, min - padding);
    max += padding;
    if (max === min) max = min + 1;
    const left = 48, right = 610, top = 22, bottom = 190;
    const x = (index: number) => readings.length === 1 ? (left + right) / 2 : left + (index / (readings.length - 1)) * (right - left);
    const y = (value: number) => bottom - ((value - min) / (max - min)) * (bottom - top);
    return { series, min, max, left, right, top, bottom, x, y };
  }, [readings, metric]);

  function addReading(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const numeric = Object.fromEntries(
      Object.entries(form).filter(([key]) => key !== "time").map(([key, value]) => [key, Number(value)])
    ) as Record<Exclude<keyof typeof form, "time">, number>;
    if (readings.some((reading) => reading.time === form.time && reading.id !== editingId)) {
      setMessage("Ya existe un registro con esa hora. Elige otra hora para conservar la secuencia.");
      return;
    }
    if (numeric.systolic <= numeric.diastolic) {
      setMessage("Verifica la presión: la cifra sistólica debe ser mayor que la diastólica.");
      return;
    }
    const entry: Reading = {
      id: Date.now(),
      time: form.time,
      temperature: numeric.temperature,
      pulse: numeric.pulse,
      respiratory: numeric.respiratory,
      systolic: numeric.systolic,
      diastolic: numeric.diastolic,
      spo2: numeric.spo2,
      pain: numeric.pain,
      temperatureSite: form.temperatureSite,
      oxygenSupport: form.oxygenSupport,
      oxygenFlow: form.oxygenSupport === "Aire ambiente" ? "" : form.oxygenFlow.trim(),
      observations: form.observations.trim(),
    };
    setReadings((current) => (editingId === null ? [...current, entry] : current.map((reading) => reading.id === editingId ? { ...entry, id: editingId } : reading)).sort((a, b) => a.time.localeCompare(b.time)));
    setEditingId(null);
    setMessage(editingId === null ? "Registro agregado a la hoja de evolución." : "Registro actualizado correctamente.");
  }

  function editReading(reading: Reading) {
    setEditingId(reading.id);
    setForm({ time: reading.time, temperature: String(reading.temperature), pulse: String(reading.pulse), respiratory: String(reading.respiratory), systolic: String(reading.systolic), diastolic: String(reading.diastolic), spo2: String(reading.spo2), pain: String(reading.pain), temperatureSite: reading.temperatureSite, oxygenSupport: reading.oxygenSupport, oxygenFlow: reading.oxygenFlow, observations: reading.observations });
    setMessage(`Editando la medición de las ${reading.time}. Guarda los cambios para actualizar la gráfica.`);
  }

  function cancelEdit() {
    setEditingId(null);
    setMessage("Se canceló la edición. Los registros anteriores permanecen sin cambios.");
  }

  function loadExample() {
    setEditingId(null);
    setReadings(sampleReadings);
    setMessage("Se cargó un escenario ficticio de tres mediciones. Puedes editarlo, eliminarlo o capturar tus propios datos.");
  }

  function clearReadings() {
    setReadings([]);
    setEditingId(null);
    setMessage("La hoja está vacía y lista para un nuevo ejercicio.");
  }

  return (
    <section className="vitals-trend" aria-labelledby="vitals-trend-title">
      <header className="vitals-trend-header">
        <span aria-hidden="true">📈</span>
        <div>
          <small>PRÁCTICA DE REGISTRO Y ANÁLISIS</small>
          <h3 id="vitals-trend-title">Evolución de signos vitales por turno</h3>
          <p>Registra mediciones seriadas y observa su comportamiento a lo largo del tiempo.</p>
        </div>
      </header>

      <div className="vitals-trend-notice">
        Actividad educativa con datos ficticios. Una gráfica no establece diagnósticos ni sustituye la valoración integral; interpreta cada medición según edad, antecedentes, condición clínica, síntomas, tendencia y protocolo institucional.
      </div>

      <form className="vitals-trend-form" onSubmit={addReading}>
        <div className="vitals-trend-section-title"><strong>Nuevo registro</strong><span>Completa los datos de una medición</span></div>
        <div className="vitals-trend-grid">
          <label>Hora<input type="time" required value={form.time} onChange={(event) => setForm({ ...form, time: event.target.value })} /></label>
          <label>Temperatura (°C)<input type="number" required min="30" max="45" step="0.1" value={form.temperature} onChange={(event) => setForm({ ...form, temperature: event.target.value })} /></label>
          <label>Frecuencia cardiaca (lpm)<input type="number" required min="20" max="250" value={form.pulse} onChange={(event) => setForm({ ...form, pulse: event.target.value })} /></label>
          <label>Frecuencia respiratoria (rpm)<input type="number" required min="4" max="80" value={form.respiratory} onChange={(event) => setForm({ ...form, respiratory: event.target.value })} /></label>
          <label>Presión sistólica (mmHg)<input type="number" required min="40" max="300" value={form.systolic} onChange={(event) => setForm({ ...form, systolic: event.target.value })} /></label>
          <label>Presión diastólica (mmHg)<input type="number" required min="20" max="200" value={form.diastolic} onChange={(event) => setForm({ ...form, diastolic: event.target.value })} /></label>
          <label>SpO₂ (%)<input type="number" required min="50" max="100" value={form.spo2} onChange={(event) => setForm({ ...form, spo2: event.target.value })} /></label>
          <label>Dolor (0–10)<input type="number" required min="0" max="10" value={form.pain} onChange={(event) => setForm({ ...form, pain: event.target.value })} /></label>
          <label>Sitio de temperatura<select required value={form.temperatureSite} onChange={(event) => setForm({ ...form, temperatureSite: event.target.value })}><option>Oral</option><option>Axilar</option><option>Timpánica</option><option>Temporal</option><option>Rectal</option><option>Otro / especificar</option></select></label>
          <label>Soporte de oxígeno<select value={form.oxygenSupport} onChange={(event) => setForm({ ...form, oxygenSupport: event.target.value })}><option>Aire ambiente</option><option>Puntas nasales</option><option>Mascarilla simple</option><option>Mascarilla con reservorio</option><option>Otro dispositivo</option></select></label>
          {form.oxygenSupport !== "Aire ambiente" && <label>Flujo indicado (L/min)<input type="text" inputMode="decimal" placeholder="Ej. 2" value={form.oxygenFlow} onChange={(event) => setForm({ ...form, oxygenFlow: event.target.value })} /></label>}
        </div>
        <label className="vitals-trend-observations">Observaciones de enfermería<textarea rows={3} maxLength={500} placeholder="Estado general, síntomas referidos, posición, intervenciones y respuesta..." value={form.observations} onChange={(event) => setForm({ ...form, observations: event.target.value })} /></label>
        <div className="vitals-trend-actions">
          <button className="vitals-trend-primary" type="submit">{editingId === null ? "＋ Agregar medición" : "Guardar cambios"}</button>
          {editingId !== null && <button className="vitals-trend-secondary" type="button" onClick={cancelEdit}>Cancelar edición</button>}
          <button className="vitals-trend-secondary" type="button" onClick={loadExample}>Cargar escenario de práctica</button>
          <button className="vitals-trend-secondary" type="button" onClick={clearReadings}>Limpiar hoja</button>
        </div>
        {message && <p className="vitals-trend-message" role="status">{message}</p>}
      </form>

      <section className="vitals-trend-chart-panel" aria-label="Gráfica de tendencia">
        <div className="vitals-trend-section-title"><strong>Visualizar tendencia</strong><label>Parámetro<select value={metric} onChange={(event) => setMetric(event.target.value as Metric)}>{Object.entries(metricLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label></div>
        {!chart ? <div className="vitals-trend-empty">Agrega mediciones o carga el escenario de práctica para generar la gráfica.</div> : (
          <>
            <div className="vitals-trend-chart-scroll">
              <svg viewBox="0 0 640 230" role="img" aria-label={`Gráfica de ${metricLabels[metric]} en ${readings.length} mediciones`}>
                {[0, 1, 2, 3].map((tick) => {
                  const value = chart.max - ((chart.max - chart.min) * tick) / 3;
                  const y = chart.top + ((chart.bottom - chart.top) * tick) / 3;
                  return <g key={tick}><line x1={chart.left} x2={chart.right} y1={y} y2={y} stroke="#dce5ec" strokeDasharray="4 4" /><text x="40" y={y + 4} textAnchor="end" fill="#718093" fontSize="10">{value.toFixed(metric === "temperature" ? 1 : 0)}</text></g>;
                })}
                {chart.series.map((series, seriesIndex) => {
                  const points = readings.map((reading, index) => ({ x: chart.x(index), y: chart.y(valuesFor(reading, metric)[series.index]), value: valuesFor(reading, metric)[series.index], time: reading.time }));
                  return <g key={series.name}>
                    <polyline points={points.map((point) => `${point.x},${point.y}`).join(" ")} fill="none" stroke={seriesIndex === 0 ? "#327d91" : "#b47a3c"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    {points.map((point) => <g key={point.time}><circle cx={point.x} cy={point.y} r="5" fill={seriesIndex === 0 ? "#327d91" : "#b47a3c"} /><text x={point.x} y={point.y - 10} textAnchor="middle" fill="#40566b" fontSize="10" fontWeight="700">{point.value}</text></g>)}
                  </g>;
                })}
                {readings.map((reading, index) => <text key={reading.id} x={chart.x(index)} y="213" textAnchor="middle" fill="#718093" fontSize="10">{reading.time}</text>)}
              </svg>
            </div>
            {metric === "pressure" && <p className="vitals-trend-legend"><span>● Sistólica</span><span>● Diastólica</span></p>}
          </>
        )}
      </section>

      <section className="vitals-trend-table-panel">
        <div className="vitals-trend-section-title"><strong>Hoja de mediciones</strong><span>{readings.length} {readings.length === 1 ? "registro" : "registros"}</span></div>
        {readings.length === 0 ? <p className="vitals-trend-empty">Todavía no hay mediciones registradas.</p> : (
          <div className="vitals-trend-table-wrap"><table><thead><tr><th>Hora</th><th>Temp.</th><th>FC</th><th>FR</th><th>PA</th><th>SpO₂</th><th>Dolor</th><th>Sitio T°</th><th>Oxígeno</th><th>Flujo</th><th>Observaciones</th><th>Acciones</th></tr></thead><tbody>
            {readings.map((reading) => <tr key={reading.id}><td>{reading.time}</td><td>{reading.temperature.toFixed(1)} °C</td><td>{reading.pulse}</td><td>{reading.respiratory}</td><td>{reading.systolic}/{reading.diastolic}</td><td>{reading.spo2}%</td><td>{reading.pain}/10</td><td>{reading.temperatureSite}</td><td>{reading.oxygenSupport}</td><td>{reading.oxygenFlow ? reading.oxygenFlow + " L/min" : "—"}</td><td>{reading.observations || "—"}</td><td><div className="vitals-trend-actions"><button type="button" className="vitals-trend-secondary" onClick={() => editReading(reading)} aria-label={`Editar registro de las ${reading.time}`}>Editar</button><button type="button" className="vitals-trend-delete" onClick={() => { setReadings((current) => current.filter((item) => item.id !== reading.id)); if (editingId === reading.id) setEditingId(null); }} aria-label={`Eliminar registro de las ${reading.time}`}>Eliminar</button></div></td></tr>)}
          </tbody></table></div>
        )}
      </section>
      <p className="vitals-trend-footnote">Los límites de captura solo evitan errores de entrada; no representan rangos normales ni metas terapéuticas. En la práctica clínica, documenta también contexto, dispositivo, sitio de medición, oxigenoterapia, intervenciones y respuesta de la persona.</p>
    </section>
  );
}
