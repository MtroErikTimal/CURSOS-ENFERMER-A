export type LearningArea = {
  slug: string;
  title: string;
  description: string;
  color: "mint" | "blue" | "rose";
  level: string;
  estimatedDuration: string;
  objectives: string[];
  competencies: string[];
  prerequisites: string[];
  units: {
    title: string;
    topics: { title: string; lessons: { title: string; summary: string }[] }[];
  }[];
  resources: string[];
  activities: string[];
  evaluation: string[];
  bibliography: string[];
};

const unitTemplate = () =>
  [1, 2, 3].map((number) => ({ title: `Unidad ${number}`, topics: [] }));

const createArea = (
  slug: string,
  title: string,
  description: string,
  color: LearningArea["color"],
): LearningArea => ({
  slug,
  title,
  description,
  color,
  level: "",
  estimatedDuration: "",
  objectives: [],
  competencies: [],
  prerequisites: [],
  units: unitTemplate(),
  resources: [],
  activities: [],
  evaluation: [],
  bibliography: [],
});

export const learningAreas: LearningArea[] = [
  createArea("fundamentos-de-enfermeria", "Fundamentos de Enfermería", "Bases del cuidado, pensamiento enfermero y principios para la práctica profesional.", "mint"),
  createArea("enfermeria-medico-quirurgica", "Enfermería Médico-Quirúrgica", "Área temática para organizar contenidos de cuidado médico-quirúrgico.", "blue"),
  createArea("cuidados-intensivos", "Enfermería de Cuidados Intensivos", "Área temática para organizar formación relacionada con cuidados críticos.", "rose"),
  createArea("materno-infantil", "Enfermería Materno-Infantil", "Área temática de atención materna, neonatal e infantil.", "mint"),
  createArea("enfermeria-comunitaria", "Enfermería Comunitaria", "Promoción de la salud y cuidado en contextos comunitarios.", "blue"),
  createArea("anatomia-fisiologia", "Anatomía y Fisiología", "Bases anatómicas y fisiológicas para el estudio del cuidado.", "rose"),
  createArea("farmacologia", "Farmacología", "Conceptos para el estudio responsable de medicamentos y la seguridad en su manejo.", "mint"),
  createArea("proceso-atencion-enfermeria", "Proceso de Atención de Enfermería", "Estructura para organizar el cuidado mediante valoración, planificación y evaluación.", "blue"),
  createArea("nanda-nic-noc", "NANDA-I, NIC y NOC", "Espacio para contenidos sobre lenguajes estandarizados, sujeto a permisos y versiones autorizadas.", "rose"),
  createArea("investigacion-enfermeria", "Investigación en Enfermería", "Lectura crítica y fundamentos de investigación aplicados a enfermería.", "mint"),
  createArea("calidad-seguridad-paciente", "Calidad y Seguridad del Paciente", "Cultura de seguridad, prevención de riesgos y mejora de la calidad del cuidado.", "blue"),
  createArea("educacion-evaluacion-enfermeria", "Educación y Evaluación en Enfermería", "Estrategias para enseñar, aprender y evaluar en contextos de enfermería.", "rose"),
  createArea("examenes-egreso", "Preparación para Exámenes de Egreso", "Espacio para organizar materiales de preparación académica para el egreso.", "mint"),
];

// Primer módulo publicado: Fundamentos de Enfermería I.
const fundamentos = learningAreas.find((area) => area.slug === "fundamentos-de-enfermeria")!;
fundamentos.level = "Licenciatura en Enfermería · Primer semestre";
fundamentos.estimatedDuration = "4 horas de estudio autónomo + actividad guiada";
fundamentos.objectives = [
  "Explicar el concepto, propósito y alcance del expediente clínico.",
  "Identificar los criterios generales de integración, manejo y confidencialidad establecidos en la NOM-004-SSA3-2012.",
  "Reconocer el contenido mínimo de la hoja de enfermería descrito en el numeral 9.1.",
  "Analizar la responsabilidad profesional y la trazabilidad de los registros de enfermería.",
];
fundamentos.competencies = [
  "Identifica información relevante para la continuidad del cuidado.",
  "Distingue los registros de enfermería de otros documentos clínicos.",
  "Aplica principios de confidencialidad, objetividad y responsabilidad documental en ejercicios académicos.",
];
fundamentos.prerequisites = [
  "Conocimientos introductorios sobre el proceso de atención de enfermería.",
  "Comprensión básica de la organización de los servicios de salud.",
];
fundamentos.units[0].title = "Unidad 1. Expediente clínico y marco normativo";
fundamentos.units[0].topics = [
  {
    title: "Expediente clínico y NOM-004-SSA3-2012",
    lessons: [
      { title: "Concepto, propósito y alcance", summary: "Definición del expediente clínico, importancia para la continuidad del cuidado y campo de aplicación de la norma." },
      { title: "Integración y confidencialidad", summary: "Datos generales, organización documental, conservación y protección de la información de la persona usuaria." },
      { title: "Registros de enfermería", summary: "Análisis del numeral 9.1: habitus exterior, signos vitales, ministración de medicamentos, procedimientos y observaciones." },
      { title: "Calidad y responsabilidad documental", summary: "Legibilidad, oportunidad, objetividad, autoría, trazabilidad y actuación ante omisiones o errores de registro." },
    ],
  },
];
fundamentos.resources = [
  "Guía de estudio: expediente clínico::/materiales/expediente-clinico-guia.html",
  "Presentación didáctica (9 diapositivas)::/materiales/presentacion-expediente-clinico.html",
  "Esquema visual del expediente clínico::/images/expediente-clinico-esquema.svg",
  "Texto oficial PDF de la NOM-004-SSA3-2012::https://salud.gob.mx/cdi/archivo/NOM004ssa32012.pdf",
];
fundamentos.activities = [
  "Lectura guiada: revisa los numerales 1, 2, 4.4, 5.2, 5.4, 5.5, 5.14 y 9.1 de la NOM-004-SSA3-2012.",
  "Análisis de caso ficticio: identifica qué debe documentarse cuando se detecta dolor y existe una ministración sin hora registrada. Explica quién debe aclarar el registro y por qué debe conservarse la trazabilidad.",
  "Producto: elabora un mapa conceptual que relacione expediente clínico, continuidad del cuidado, hoja de enfermería y confidencialidad.",
];
fundamentos.evaluation = [
  "Evaluación formativa de 8 reactivos con retroalimentación inmediata::/materiales/evaluacion-expediente-clinico.html",
  "Evidencia de aprendizaje: mapa conceptual y resolución argumentada del caso ficticio.",
  "Criterios sugeridos: precisión normativa (30%), identificación de los registros de enfermería (30%), análisis ético y confidencialidad (20%) y claridad de la argumentación (20%).",
];
fundamentos.bibliography = [
  "Secretaría de Salud. (2012, 15 de octubre). Norma Oficial Mexicana NOM-004-SSA3-2012, Del expediente clínico. Diario Oficial de la Federación. Texto oficial.",
  "La consulta de la norma íntegra y de las disposiciones institucionales vigentes es indispensable antes de trasladar los contenidos a la práctica asistencial.",
];
