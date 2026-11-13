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
    topics: { title: string; lessons: { title: string; summary: string; content?: { heading: string; paragraphs: string[]; bullets?: string[] }[] }[] }[];
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

// Fundamentos de Enfermería I: organización didáctica inicial para primer semestre.
const fundamentos = learningAreas.find((area) => area.slug === "fundamentos-de-enfermeria")!;
fundamentos.level = "Licenciatura en Enfermería · Primer semestre";
fundamentos.estimatedDuration = "Curso teórico-práctico · 4 semanas de organización inicial";
fundamentos.objectives = [
  "Explicar los principios de asepsia, antisepsia y prevención de infecciones durante el cuidado.",
  "Aplicar criterios básicos de bioseguridad, manejo de RPBI y manipulación segura de muestras.",
  "Describir los procedimientos fundamentales de higiene, preparación del material, mecánica corporal, movilización y posicionamiento.",
  "Valorar las necesidades básicas de la persona mediante signos vitales, somatometría y exploración física.",
  "Reconocer los procesos de admisión, estancia, egreso y documentación en el expediente clínico.",
];
fundamentos.competencies = [
  "Relaciona los principios de bioseguridad con la prevención de riesgos para pacientes, estudiantes y personal de salud.",
  "Identifica materiales y procedimientos básicos para proporcionar cuidados seguros.",
  "Aplica principios de ergonomía y mecánica corporal en ejercicios simulados.",
  "Reconoce parámetros básicos de valoración y registra información de manera objetiva.",
  "Actúa con responsabilidad, respeto, confidencialidad y apego a normas y protocolos institucionales.",
];
fundamentos.prerequisites = [
  "Conocimientos introductorios de anatomía y fisiología.",
  "Nociones básicas de salud, enfermedad y organización de los servicios sanitarios.",
  "Disposición para participar en prácticas simuladas y cumplir las medidas de bioseguridad.",
];

fundamentos.units[0].title = "Unidad 1. Bioseguridad y prevención de infecciones";
fundamentos.units[0].topics = [
  {
    title: "Asepsia y antisepsia",
    lessons: [
      {
        title: "Conceptos y principios de asepsia",
        summary: "Diferencias entre asepsia médica y quirúrgica, contaminación, infección y técnica aséptica.",
        content: [
          { heading: "1. ¿Qué es la asepsia?", paragraphs: ["La asepsia es el conjunto de medidas destinadas a evitar la contaminación por microorganismos. En enfermería se aplica antes, durante y después de los procedimientos para reducir el riesgo de transmisión y de infección asociada a la atención de la salud.", "La asepsia no significa que todo el entorno esté estéril. Significa que se seleccionan y mantienen las condiciones de limpieza, desinfección o esterilidad que requiere cada procedimiento, según el riesgo y el protocolo institucional."] },
          { heading: "2. Asepsia médica y asepsia quirúrgica", paragraphs: ["La asepsia médica, también llamada técnica limpia, busca reducir el número y la transferencia de microorganismos. Incluye higiene de manos, uso de guantes limpios cuando existe indicación, limpieza del entorno, manejo seguro de equipo y precauciones estándar.", "La asepsia quirúrgica o técnica estéril busca mantener un campo y materiales estériles durante procedimientos que requieren barrera estricta frente a microorganismos. Se utiliza, por ejemplo, en determinados procedimientos invasivos y curaciones que así lo indiquen."] , bullets: ["Técnica limpia: reduce la carga microbiana y evita la contaminación cruzada.", "Técnica estéril: conserva la esterilidad del material y del campo durante el procedimiento.", "La elección depende del procedimiento, el sitio anatómico, la condición de la persona y el protocolo vigente."] },
          { heading: "3. Conceptos que no deben confundirse", paragraphs: ["Contaminación: presencia o incorporación no deseada de microorganismos en una superficie, material, solución o tejido. Colonización: presencia y multiplicación de microorganismos sin necesariamente producir daño clínico. Infección: invasión y multiplicación de microorganismos en el huésped con respuesta del organismo y posible manifestación clínica.", "Limpieza elimina suciedad y materia orgánica; desinfección inactiva muchos o todos los microorganismos patógenos en objetos inanimados, según el nivel y producto; esterilización es un proceso validado que destruye todas las formas de vida microbiana, incluidas las esporas bacterianas. Antisepsia se aplica a tejidos vivos mediante productos adecuados."] },
          { heading: "4. Principios generales de la técnica aséptica", paragraphs: ["Antes de iniciar, verifica la identidad de la persona, explica el procedimiento, prepara el material, realiza higiene de manos y valora los riesgos de exposición. Organiza el espacio para evitar cruces entre material limpio, contaminado y estéril.", "Durante el procedimiento, evita tocar con material estéril superficies no estériles. Mantén el campo a la vista y por encima de la cintura; si un objeto estéril se humedece, se rompe, queda fuera de vigilancia o entra en contacto con una superficie no estéril, considéralo contaminado y reemplázalo. No regreses material usado al área limpia.", "Al finalizar, desecha los residuos en los recipientes correspondientes, procesa el equipo reutilizable de acuerdo con sus instrucciones, retira el equipo de protección de forma segura y realiza higiene de manos. Registra el procedimiento y cualquier incidente relevante."] },
          { heading: "5. Responsabilidad profesional", paragraphs: ["La técnica debe adaptarse al procedimiento y a las políticas del establecimiento. No se debe improvisar la esterilidad de un material, reutilizar dispositivos de un solo uso ni sustituir las instrucciones del fabricante por recomendaciones generales. Ante una ruptura de técnica, detén la acción, identifica el material afectado, corrige la contaminación y comunica el incidente cuando corresponda."] }
        ]
      },
      {
        title: "Antisepsia, higiene de manos y precauciones estándar",
        summary: "Uso seguro de antisépticos, cinco momentos de higiene de manos y selección de barreras según el riesgo.",
        content: [
          { heading: "1. ¿Qué es la antisepsia?", paragraphs: ["La antisepsia consiste en aplicar un antiséptico sobre tejidos vivos —por ejemplo, piel intacta o determinados sitios de preparación— para reducir microorganismos. No es sinónimo de desinfección: esta última se aplica a objetos y superficies inanimadas.", "Los antisépticos pueden incluir formulaciones a base de alcohol, clorhexidina o yodóforos, entre otros. La elección depende del sitio anatómico, edad, alergias, condición de la piel, procedimiento, indicación clínica y ficha técnica del producto. No todos los productos son apropiados para mucosas, ojos, oído, heridas o población neonatal."] },
          { heading: "2. Higiene de manos: medida esencial", paragraphs: ["La higiene de manos interrumpe la transmisión por contacto. Se realiza con agua y jabón cuando las manos están visiblemente sucias y con solución hidroalcohólica cuando está indicada y las manos no presentan suciedad visible, de acuerdo con la guía y el protocolo local.", "La fricción debe cubrir palmas, dorsos, espacios interdigitales, pulgares, puntas de los dedos y muñecas según la técnica enseñada. Respeta el tiempo indicado por el producto y deja secar por completo antes de colocarte guantes. Los guantes no sustituyen la higiene de manos."] , bullets: ["Antes de tocar a la persona.", "Antes de realizar una tarea limpia o aséptica.", "Después del riesgo de exposición a líquidos corporales.", "Después de tocar a la persona.", "Después del contacto con el entorno inmediato de la persona."] },
          { heading: "3. Precauciones estándar", paragraphs: ["Se aplican a todas las personas atendidas, independientemente de que exista o no diagnóstico conocido de infección. Incluyen higiene de manos, evaluación del riesgo, equipo de protección personal según la exposición prevista, higiene respiratoria, prácticas seguras de inyección, limpieza y desinfección del equipo y manejo seguro de textiles y residuos.", "Los guantes se seleccionan según la actividad y el riesgo de contacto con sangre, fluidos, mucosas, piel no íntegra o material contaminado. La bata, protección ocular, mascarilla o respirador se utilizan de acuerdo con la evaluación de riesgo y las precauciones adicionales indicadas."] },
          { heading: "4. Selección segura del antiséptico", paragraphs: ["Comprueba nombre, concentración, fecha de caducidad, integridad del envase, indicación, contraindicaciones y tiempo de contacto especificado por el fabricante. Evita mezclar productos, trasvasarlos a recipientes sin identificación o reutilizar aplicadores de un solo uso.", "Si existe antecedente de alergia, lesión cutánea, exposición accidental o reacción adversa, suspende el uso y sigue el protocolo institucional de valoración y notificación. La preparación de la piel para un procedimiento debe seguir el producto y técnica aprobados por el establecimiento."] }
        ]
      },
      {
        title: "Cadena epidemiológica y prevención de la transmisión",
        summary: "Seis eslabones del proceso infeccioso y acciones de enfermería para interrumpir las vías de transmisión.",
        content: [
          { heading: "1. ¿Qué es la cadena epidemiológica?", paragraphs: ["Es un modelo que explica cómo un agente infeccioso puede pasar desde una fuente o reservorio hasta una persona susceptible. Para que ocurra la transmisión se relacionan seis eslabones: agente, reservorio, puerta de salida, vía de transmisión, puerta de entrada y huésped susceptible.", "El modelo ayuda a reconocer en qué punto pueden aplicarse medidas de prevención. No todas las infecciones siguen una única vía y las medidas deben ajustarse al microorganismo, entorno y forma de transmisión."] },
          { heading: "2. Los seis eslabones", bullets: ["Agente: microorganismo capaz de causar infección, como bacteria, virus, hongo o parásito.", "Reservorio: lugar donde el agente vive y puede multiplicarse; puede ser una persona, animal, agua, suelo o superficie.", "Puerta de salida: vía por la que el agente abandona el reservorio, como secreciones respiratorias, sangre, heces o lesiones.", "Vía de transmisión: mecanismo por el que llega a otro huésped: contacto directo o indirecto, gotas, aerosoles, vehículo común o vector, según el agente.", "Puerta de entrada: sitio por el que ingresa al nuevo huésped, como mucosas, vía respiratoria, digestiva, piel lesionada o vía parenteral.", "Huésped susceptible: persona con condiciones que favorecen la infección; influyen inmunidad, edad, estado nutricional, enfermedades, dispositivos y tratamientos."] },
          { heading: "3. ¿Cómo interrumpe enfermería la cadena?", paragraphs: ["La higiene de manos reduce la transmisión por contacto; el equipo de protección personal crea barreras según el riesgo; la limpieza y desinfección reducen la contaminación ambiental; la técnica aséptica protege sitios susceptibles; la etiqueta respiratoria y ventilación ayudan a reducir la transmisión respiratoria; y la vacunación, detección oportuna y aislamiento indicado protegen a las personas vulnerables.", "La segregación y manejo seguro de residuos, ropa y material punzocortante evita exposiciones y contaminación. El equipo debe aplicar precauciones estándar y sumar precauciones basadas en la transmisión cuando estén indicadas."] },
          { heading: "4. Ejemplo de análisis", paragraphs: ["En una persona con infección respiratoria, el agente puede estar en secreciones respiratorias; la puerta de salida son las secreciones expulsadas al toser; la transmisión puede ocurrir por partículas respiratorias y contacto, según el agente; la puerta de entrada puede ser la mucosa respiratoria; y el huésped susceptible es quien se expone y puede desarrollar infección.", "Las acciones se seleccionan según la infección sospechada o confirmada y el protocolo vigente: higiene de manos, etiqueta respiratoria, equipo de protección indicado, ventilación, ubicación de la persona y limpieza del entorno."] }
        ]
      },
    ],
  },
  {
    title: "RPBI y manejo de muestras biológicas",
    lessons: [
      { title: "Identificación y clasificación", summary: "Reconocimiento de residuos peligrosos biológico-infecciosos conforme a la normatividad aplicable y criterios de segregación." },
      { title: "Envasado, almacenamiento y disposición", summary: "Selección de recipientes, identificación, cierre, almacenamiento temporal y entrega conforme al procedimiento institucional." },
      { title: "Manejo seguro de muestras", summary: "Identificación, etiquetado, transporte y prevención de derrames o exposiciones durante la toma y el traslado." },
    ],
  },
  {
    title: "Higiene, limpieza y desinfección",
    lessons: [
      { title: "Conceptos y diferencias", summary: "Limpieza, descontaminación, desinfección y esterilización: objetivos y alcances." },
      { title: "Limpieza del entorno y equipo", summary: "Principios generales para la limpieza de superficies y equipo no crítico, respetando instrucciones del fabricante." },
      { title: "Prevención de infecciones", summary: "Uso de equipo de protección personal, secuencia de trabajo y prevención de contaminación cruzada." },
    ],
  },
];

fundamentos.units[1].title = "Unidad 2. Procedimientos básicos y seguridad durante el cuidado";
fundamentos.units[1].topics = [
  {
    title: "Carro de curaciones y pinza portaobjetos",
    lessons: [
      { title: "Organización del carro de curaciones", summary: "Finalidad, distribución del material, preparación y verificación antes de realizar procedimientos." },
      { title: "Manejo de pinza portaobjetos", summary: "Uso correcto, conservación de la técnica aséptica y prevención de contaminación del material." },
      { title: "Reposición y seguridad", summary: "Limpieza, reposición, control de insumos y manejo seguro del material utilizado." },
    ],
  },
  {
    title: "Mecánica corporal",
    lessons: [
      { title: "Principios de alineación y equilibrio", summary: "Base de sustentación, centro de gravedad, alineación corporal y coordinación de movimientos." },
      { title: "Ergonomía para el personal de enfermería", summary: "Posturas seguras, flexión de rodillas, acercamiento a la carga y prevención de lesiones." },
      { title: "Aplicación en el cuidado", summary: "Planeación de movimientos y uso de ayudas para reducir riesgos durante la atención." },
    ],
  },
  {
    title: "Movilización y traslado del paciente",
    lessons: [
      { title: "Valoración previa y preparación", summary: "Identificación de riesgos, nivel de colaboración, dispositivos y número de personas requeridas." },
      { title: "Movilización en cama y transferencia", summary: "Principios para cambios de posición, desplazamiento en cama y transferencia segura con ayudas." },
      { title: "Traslado y prevención de caídas", summary: "Preparación del entorno, comunicación, vigilancia y medidas de seguridad durante el traslado." },
    ],
  },
  {
    title: "Posiciones terapéuticas",
    lessons: [
      { title: "Posiciones básicas", summary: "Decúbito supino, prono, lateral, Fowler y variantes; indicaciones generales." },
      { title: "Alineación y protección", summary: "Alineación corporal, protección de prominencias óseas y uso de dispositivos de apoyo." },
      { title: "Cambios posturales", summary: "Principios de frecuencia individualizada, confort, vigilancia de la piel y prevención de lesiones por presión." },
    ],
  },
];

fundamentos.units[2].title = "Unidad 3. Valoración, documentación y continuidad del cuidado";
fundamentos.units[2].topics = [
  {
    title: "Signos vitales",
    lessons: [
      { title: "Temperatura, pulso y respiración", summary: "Conceptos, sitios y técnicas de medición, factores que modifican los parámetros y registro." },
      { title: "Presión arterial y oximetría", summary: "Selección del equipo, técnica de medición, errores frecuentes e interpretación inicial." },
      { title: "Registro y comunicación de hallazgos", summary: "Identificación de valores fuera de parámetros esperados, verificación y notificación oportuna." },
    ],
  },
  {
    title: "Somatometría y exploración física",
    lessons: [
      { title: "Somatometría", summary: "Peso, talla, índice de masa corporal y otras mediciones de acuerdo con edad y condición de la persona." },
      { title: "Técnicas de exploración física", summary: "Inspección, palpación, percusión y auscultación: principios y secuencia general." },
      { title: "Valoración y registro", summary: "Preparación, privacidad, consentimiento, hallazgos objetivos y documentación ordenada." },
    ],
  },
  {
    title: "Admisión, estancia y egreso hospitalario",
    lessons: [
      { title: "Admisión y recepción", summary: "Identificación, recepción, orientación, valoración inicial y pertenencias de la persona usuaria." },
      { title: "Estancia hospitalaria", summary: "Continuidad del cuidado, comunicación del equipo, seguridad y orientación a paciente y familia." },
      { title: "Egreso y continuidad", summary: "Preparación del alta, indicaciones, educación, referencias y registro del egreso conforme al proceso institucional." },
    ],
  },
  {
    title: "Expediente clínico y registros de enfermería",
    lessons: [
      { title: "Concepto, propósito y alcance", summary: "Definición del expediente clínico, importancia para la continuidad del cuidado y campo de aplicación de la NOM-004-SSA3-2012." },
      { title: "Integración y confidencialidad", summary: "Organización documental, conservación y protección de la información de la persona usuaria." },
      { title: "Registros de enfermería", summary: "Análisis del numeral 9.1: habitus exterior, signos vitales, ministración de medicamentos, procedimientos y observaciones." },
      { title: "Calidad y responsabilidad documental", summary: "Legibilidad, oportunidad, objetividad, autoría, trazabilidad y actuación ante omisiones o errores de registro." },
    ],
  },
];

fundamentos.resources = [
  "Expediente clínico · Guía de estudio::/materiales/expediente-clinico-guia.html",
  "Expediente clínico · Presentación didáctica de 9 diapositivas::/materiales/presentacion-expediente-clinico.html",
  "Expediente clínico · Esquema visual::/images/expediente-clinico-esquema.svg",
  "Expediente clínico · NOM-004-SSA3-2012, texto oficial PDF::https://salud.gob.mx/cdi/archivo/NOM004ssa32012.pdf",
  "Asepsia y antisepsia · Presentación PPTX::/materiales/fundamentos-de-enfermeria/presentaciones/ASEPSIA Y ANTISEPSIS .pptx",
  "Asepsia y antisepsia · Guía completa de estudio::/materiales/fundamentos-de-enfermeria/apuntes/asepsia-antisepsia-guia.html",
  "Asepsia y antisepsia · Infografía de los cinco momentos de higiene de manos::/materiales/fundamentos-de-enfermeria/imagenes/cinco-momentos-higiene-manos.svg",
  "Asepsia y antisepsia · Autoevaluación interactiva::/materiales/fundamentos-de-enfermeria/actividades/auto evaluacion-asepsia.html",
  "Cadena epidemiológica · Presentación PPTX::/materiales/fundamentos-de-enfermeria/presentaciones/CADENA EPIDEMIOLÓGICA .pptx",
  "RPBI y manejo de muestras · Presentación PPTX::/materiales/fundamentos-de-enfermeria/presentaciones/RPBI .pptx",
];
fundamentos.activities = [
  "Unidad 1 · Elabora un esquema que compare asepsia, antisepsia, limpieza, desinfección y esterilización; identifica acciones para interrumpir la cadena epidemiológica.",
  "Unidad 1 · Clasifica residuos de casos simulados y justifica el recipiente o manejo correspondiente con base en la normatividad vigente.",
  "Unidad 2 · Realiza una demostración simulada de preparación del carro de curaciones y manejo de pinza portaobjetos, cuidando la técnica aséptica.",
  "Unidad 2 · En parejas, ejecuta una movilización o transferencia simulada y explica los principios de mecánica corporal y seguridad aplicados.",
  "Unidad 3 · Practica la medición y registro de signos vitales y somatometría; realiza una exploración física básica en un escenario simulado.",
  "Unidad 3 · Resuelve un caso de admisión y egreso y completa registros ficticios de enfermería sin utilizar datos reales de pacientes.",
];
fundamentos.evaluation = [
  "Evaluación formativa por unidad mediante preguntas de aplicación y análisis de situaciones simuladas.",
  "Lista de cotejo para higiene de manos, bioseguridad, clasificación de RPBI y preparación del material.",
  "Rúbrica de desempeño para mecánica corporal, movilización, posicionamiento y valoración básica.",
  "Caso integrador: admisión, valoración inicial, registro de enfermería y preparación del egreso.",
  "Criterios generales: seguridad (30%), ejecución y secuencia (25%), fundamentación (20%), registro y comunicación (15%) y profesionalismo (10%).",
];
fundamentos.bibliography = [
  "Secretaría de Salud. (2012, 15 de octubre). Norma Oficial Mexicana NOM-004-SSA3-2012, Del expediente clínico. Diario Oficial de la Federación.",
  "Secretaría de Medio Ambiente y Recursos Naturales. (2003). NOM-087-SEMARNAT-SSA1-2002, Protección ambiental—Salud ambiental—Residuos peligrosos biológico-infecciosos—Clasificación y especificaciones de manejo.",
  "Secretaría de Salud. (2012). NOM-045-SSA2-2005, Para la vigilancia epidemiológica, prevención y control de las infecciones nosocomiales (consultar disposiciones vigentes y aplicables).",
  "Los procedimientos deberán contrastarse con las normas vigentes, las instrucciones de los fabricantes y los protocolos de cada institución antes de su aplicación clínica.",
];
