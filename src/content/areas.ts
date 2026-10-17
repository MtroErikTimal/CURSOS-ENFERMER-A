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