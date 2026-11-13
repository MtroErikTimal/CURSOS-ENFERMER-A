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
    topics: { title: string; lessons: { title: string; summary: string; content?: { heading: string; paragraphs?: string[]; bullets?: string[] }[] }[]; resources?: string[] }[];
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
    resources: [
      "Asepsia y antisepsia · Presentación PPTX::/materiales/fundamentos-de-enfermeria/presentaciones/ASEPSIA Y ANTISEPSIA .pptx",
      "Cadena epidemiológica · Presentación PPTX::/materiales/fundamentos-de-enfermeria/presentaciones/CADENA EPIDEMIOLÓGICA .pptx",
      "Asepsia y antisepsia · Guía completa de estudio::/materiales/fundamentos-de-enfermeria/apuntes/asepsia-antisepsia-guia.html",
      "Asepsia y antisepsia · Infografía de los cinco momentos::/materiales/fundamentos-de-enfermeria/imagenes/cinco-momentos-higiene-manos.svg",
      "Asepsia y antisepsia · Autoevaluación interactiva::/materiales/fundamentos-de-enfermeria/actividades/auto evaluacion-asepsia.html",
    ],
  },
  {
    title: "RPBI y manejo de muestras biológicas",
    lessons: [
      {
        title: "Identificación y clasificación",
        summary: "Reconocimiento de residuos peligrosos biológico-infecciosos conforme a la normatividad aplicable y criterios de segregación.",
        content: [
          { heading: "Concepto y marco normativo", paragraphs: ["Los residuos peligrosos biológico-infecciosos (RPBI) son materiales generados durante la atención a la salud que contienen agentes biológico-infecciosos y pueden representar un riesgo para la salud o el ambiente. No todo residuo hospitalario es RPBI: debe cumplir los criterios de la NOM-087-SEMARNAT-SSA1-2002 y del procedimiento institucional.", "La segregación se realiza en el punto de generación. La clasificación incorrecta aumenta riesgos ocupacionales, costos y volumen de residuos que requieren tratamiento especializado."] },
          { heading: "Las cinco categorías", bullets: ["Sangre y componentes únicamente en forma líquida.", "Cultivos y cepas de agentes biológico-infecciosos contemplados en la norma.", "Patológicos: tejidos, órganos y partes que cumplen los supuestos normativos.", "Residuos no anatómicos: materiales de curación empapados, saturados o goteando determinados líquidos corporales, según los criterios de la norma.", "Punzocortantes: agujas, lancetas, hojas de bisturí y objetos con capacidad de cortar o puncionar que cumplen los criterios normativos."] },
          { heading: "Criterio de clasificación", paragraphs: ["La clasificación depende de la naturaleza del residuo, el estado físico, su origen y los criterios normativos; no basta con que se haya generado dentro de un hospital. Por ejemplo, una gasa con una mancha pequeña no debe clasificarse automáticamente como RPBI: se debe revisar si cumple los criterios de empapado, saturación o goteo establecidos en la norma y el protocolo local."] }
        ]
      },
      {
        title: "Envasado, almacenamiento y disposición",
        summary: "Selección de recipientes, identificación, cierre, almacenamiento temporal y entrega conforme al procedimiento institucional.",
        content: [
          { heading: "Envasado y colores", bullets: ["Rojo: sangre líquida en recipiente hermético; cultivos y cepas en bolsa roja para sólidos o recipiente hermético rojo para líquidos; residuos no anatómicos en bolsa roja para sólidos o recipiente hermético rojo para líquidos.", "Amarillo: residuos patológicos sólidos en bolsa amarilla y líquidos en recipiente hermético amarillo.", "Punzocortantes: recipiente rígido de polipropileno rojo, resistente a punciones y con cierre seguro."] },
          { heading: "Almacenamiento y manejo integral", paragraphs: ["Las etapas generales son identificación, envasado, almacenamiento temporal, recolección y transporte externo, tratamiento y disposición final. El establecimiento debe contar con un área destinada al almacenamiento temporal y cumplir las condiciones y tiempos máximos que correspondan a su nivel de generación.", "Los residuos no deben mezclarse con basura municipal u otros residuos peligrosos. No se deben compactar, abrir bolsas, recuperar materiales ni trasvasar residuos. El tratamiento y la disposición final se realizan mediante métodos y servicios que cumplan las autorizaciones aplicables."] },
          { heading: "Seguridad durante la segregación", bullets: ["Usar equipo de protección personal de acuerdo con el riesgo.", "No introducir las manos en bolsas ni recipientes.", "No reencapuchar, doblar ni romper agujas usadas.", "Respetar el límite de llenado y cerrar el recipiente conforme al fabricante y protocolo.", "Ante derrame, fuga o exposición, activar el procedimiento institucional y notificar al responsable."] }
        ]
      },
      {
        title: "Manejo seguro de muestras",
        summary: "Identificación, etiquetado, transporte y prevención de derrames o exposiciones durante la toma y el traslado.",
        content: [
          { heading: "Obtención e identificación", paragraphs: ["Antes de obtener una muestra, verificar la solicitud y la identidad de la persona con los identificadores institucionales. Explicar el procedimiento, preparar el material y aplicar higiene de manos y precauciones estándar.", "Utilizar un recipiente íntegro, compatible con la muestra y adecuado al análisis. Etiquetar en el momento y lugar establecidos por el protocolo, sin separar la muestra de su identificación."] },
          { heading: "Conservación y transporte", bullets: ["Cerrar herméticamente y comprobar que el exterior no esté contaminado.", "Colocar en el sistema de embalaje y transporte indicado por el laboratorio.", "Respetar tiempo, temperatura y protección de luz cuando corresponda.", "Acompañar con la solicitud correspondiente y proteger la confidencialidad.", "Ante derrame, fuga o recipiente roto, activar la contingencia; no continuar el traslado ordinario."] },
          { heading: "Exposición accidental", paragraphs: ["Ante punción, salpicadura o contacto accidental, realizar las acciones inmediatas indicadas por el protocolo institucional, notificar de inmediato y acudir a valoración para determinar seguimiento. No ocultar el incidente ni esperar al siguiente turno."] }
        ]
      },
    ],
    resources: [
      "RPBI y manejo de muestras · Presentación PPTX::/materiales/fundamentos-de-enfermeria/presentaciones/RPBI .pptx",
      "RPBI y manejo de muestras · Apuntes completos::/materiales/fundamentos-de-enfermeria/apuntes/rpbi-manejo-muestras-guia.html",
      "RPBI · Infografía de clasificación y envasado::/materiales/fundamentos-de-enfermeria/imagenes/clasificacion-rpbi.svg",
      "RPBI · Autoevaluación interactiva::/materiales/fundamentos-de-enfermeria/actividades/autoevaluacion-rpbi.html",
    ],
  },
  {
    title: "Higiene, limpieza y desinfección",
    lessons: [
      {
        title: "Conceptos y diferencias",
        summary: "Limpieza, descontaminación, desinfección y esterilización: objetivos y alcances.",
        content: [
          { heading: "Conceptos esenciales", paragraphs: ["La limpieza remueve físicamente suciedad, polvo y materia orgánica mediante agua, detergente y acción mecánica. Reduce la carga microbiana y prepara la superficie o dispositivo para el siguiente proceso.", "La desinfección inactiva muchos o todos los microorganismos patógenos en objetos inanimados, con excepción de cantidades variables de esporas bacterianas. La esterilización elimina todas las formas de vida microbiana, incluidas las esporas. La antisepsia se realiza sobre tejido vivo y no debe confundirse con la desinfección ambiental."] },
          { heading: "Niveles de desinfección", bullets: ["Alto nivel: elimina todos los microorganismos excepto, en condiciones habituales, un número elevado de esporas bacterianas.", "Nivel intermedio: actúa frente a micobacterias, bacterias vegetativas, la mayoría de virus y hongos.", "Bajo nivel: actúa frente a muchas bacterias vegetativas y algunos hongos y virus; no es eficaz frente a micobacterias ni esporas bacterianas."] },
          { heading: "Clasificación de Spaulding", bullets: ["Críticos: penetran tejido estéril o sistema vascular; requieren esterilización.", "Semicríticos: contactan mucosas o piel no intacta; requieren como mínimo desinfección de alto nivel o esterilización cuando esté indicada y sea compatible.", "No críticos: contactan piel intacta o el entorno; requieren limpieza y desinfección según el riesgo y el protocolo."] }
        ]
      },
      {
        title: "Limpieza del entorno y equipo",
        summary: "Principios generales para la limpieza de superficies y equipo no crítico, respetando instrucciones del fabricante.",
        content: [
          { heading: "Superficies de alto contacto", bullets: ["Barandales, controles de cama y timbres.", "Mesas puente, burós, manijas e interruptores.", "Teclados, pantallas y superficies externas de monitores y equipos, según instrucciones del fabricante.", "Grifos, dispensadores y superficies cercanas a la persona atendida."] },
          { heading: "Tipos de limpieza", bullets: ["Rutinaria o concurrente: durante la estancia y con la frecuencia establecida, además de cuando exista suciedad o contaminación.", "Terminal: después del egreso, traslado o alta, para preparar el espacio para el siguiente usuario.", "Programada o exhaustiva: incorpora elementos y áreas con frecuencia específica en el programa institucional.", "Ante derrames: activar el procedimiento institucional de contención, limpieza y desinfección."] },
          { heading: "Secuencia y técnica", paragraphs: ["La limpieza debe avanzar de las áreas más limpias a las más sucias y de arriba hacia abajo, con movimientos sistemáticos en una sola dirección. Deben cambiarse paños y soluciones cuando corresponda para no recontaminar lo ya atendido.", "La limpieza precede a la desinfección. Se aplica el producto autorizado, respetando concentración, compatibilidad y tiempo de contacto indicado en etiqueta, ficha técnica y protocolo."] }
        ]
      },
      {
        title: "Prevención de infecciones",
        summary: "Uso de equipo de protección personal, secuencia de trabajo y prevención de contaminación cruzada.",
        content: [
          { heading: "Seguridad química", bullets: ["Consultar etiqueta, ficha técnica y hoja de datos de seguridad.", "Usar productos aprobados por la institución para la superficie y el uso previsto.", "Respetar concentración, tiempo de contacto, caducidad y condiciones de almacenamiento.", "No mezclar hipoclorito con amoniaco, ácidos u otros limpiadores; pueden liberarse gases peligrosos.", "Utilizar EPP y ventilación según el riesgo y las indicaciones del producto."] },
          { heading: "Prevención de contaminación cruzada", bullets: ["Separar materiales de limpieza por áreas o zonas según el sistema institucional.", "Cambiar paños y mopas al ensuciarse o al pasar de una zona contaminada a otra limpia.", "No sacudir textiles ni barrer en seco de forma que disperse polvo.", "Evitar transportar materiales contaminados sobre superficies limpias.", "Realizar higiene de manos antes y después de la tarea y tras retirar guantes."] },
          { heading: "Responsabilidad profesional", paragraphs: ["El personal de enfermería debe conocer los procedimientos de su unidad, identificar superficies de alto contacto, respetar las instrucciones del fabricante y comunicar derrames, fallas o riesgos observados. No debe improvisar concentraciones ni mezclar sustancias químicas.", "La institución debe contar con un programa de limpieza y desinfección, responsables, capacitación, productos autorizados, documentación y supervisión."] }
        ]
      },
    ],
    resources: [
      "Higiene, limpieza y desinfección · Presentación navegable::/materiales/fundamentos-de-enfermeria/presentaciones/presentacion-higiene-limpieza-desinfeccion.html",
      "Higiene, limpieza y desinfección · Apuntes completos::/materiales/fundamentos-de-enfermeria/apuntes/higiene-limpieza-desinfeccion-guia.html",
      "Higiene, limpieza y desinfección · Infografía de la secuencia segura::/materiales/fundamentos-de-enfermeria/imagenes/secuencia-limpieza-desinfeccion.svg",
      "Higiene, limpieza y desinfección · Autoevaluación interactiva::/materiales/fundamentos-de-enfermeria/actividades/autoevaluacion-higiene-limpieza.html",
    ],
  },
];

fundamentos.units[1].title = "Unidad 2. Procedimientos básicos y seguridad durante el cuidado";
fundamentos.units[1].topics = [
  {
    title: "Carro de curaciones y pinza portaobjetos",
    lessons: [
      {
        title: "Organización y preparación del carro de curaciones",
        summary: "Finalidad, zonas de trabajo, inventario, revisión de insumos y preparación segura antes del procedimiento.",
        content: [
          { heading: "Finalidad y principios", paragraphs: ["El carro de curaciones facilita el transporte y la organización del material necesario para procedimientos de curación. Su distribución debe favorecer el acceso, la limpieza y la separación entre material limpio, estéril y usado.", "El carro no esteriliza el material. La esterilidad depende de un procesamiento validado, empaque íntegro, indicadores aplicables y manipulación correcta. El inventario debe adaptarse al servicio y al protocolo institucional."] },
          { heading: "Organización por zonas", bullets: ["Superficie superior: área limpia de trabajo, despejada y desinfectada.", "Cajones y compartimentos: insumos protegidos, identificados y separados por categoría.", "Residuos: recipientes apropiados disponibles cerca del punto de atención, sin comprometer la zona limpia.", "Material usado: nunca se almacena junto al material limpio o estéril ni se reintegra al inventario."] },
          { heading: "Inventario orientativo", paragraphs: ["Puede incluir EPP según riesgo, gasas, apósitos, compresas, vendas, campos, instrumental estéril, material de irrigación y elementos de fijación. Medicamentos, antisépticos y soluciones se incorporan solo cuando el servicio los autoriza y se cumplen las condiciones de almacenamiento, identificación y control."] },
          { heading: "Verificación previa", bullets: ["Realizar higiene de manos y revisar limpieza y estado físico del carro.", "Comprobar integridad de empaques, humedad, caducidad e indicadores de esterilización cuando correspondan.", "Retirar material vencido, abierto, dañado, húmedo o de condición dudosa.", "Separar insumos limpios y estériles; no sobrecargar ni colocar objetos personales.", "Confirmar disponibilidad de contenedor rígido para punzocortantes y recipientes para residuos según el procedimiento."] }
        ]
      },
      {
        title: "Manejo de pinza portaobjetos o de traslado",
        summary: "Función de la pinza de transferencia, diferencias con otros instrumentos y principios para conservar la técnica aséptica.",
        content: [
          { heading: "Aclaración del término", paragraphs: ["En algunos materiales docentes y protocolos locales se utiliza el nombre pinza portaobjeto o portaobjetos para una pinza larga de transferencia. Otros documentos la denominan pinza de traslado, transferencia o auxiliar; algunos manuales describen una pinza tipo Bard-Parker. La nomenclatura y el diseño deben confirmarse con el instrumental y el procedimiento autorizado en cada institución."] },
          { heading: "Función y diferencias", bullets: ["Pinza de traslado/transferencia: manipula o transfiere material siguiendo una técnica definida.", "Pinza de disección: sujeta tejidos, gasas u otros elementos de acuerdo con su diseño y procedimiento.", "Pinza Kelly o hemostática: sujeta u ocluye estructuras según indicación; no sustituye la pinza de transferencia."] },
          { heading: "Principios de manejo aséptico", bullets: ["Verificar que el instrumento esté procesado, íntegro y en condiciones definidas por el protocolo.", "Evitar tocar con la pinza superficies no estériles, bordes de recipientes o ropa.", "No realizar movimientos innecesarios ni cruzar entre zonas limpias y contaminadas.", "Si cae, toca una superficie no estéril o existe duda sobre su condición, retirarla y reemplazarla o enviarla a reprocesamiento.", "No devolver al paquete o recipiente material que ya fue retirado, salvo que un procedimiento validado indique expresamente lo contrario."] },
          { heading: "Precaución sobre soluciones", paragraphs: ["Una solución desinfectante no equivale a esterilización. No se debe asumir que una pinza sumergida en una solución permanece estéril. El uso de soluciones, concentración, compatibilidad, recambio y tiempo de contacto deben estar validados y autorizados por la institución. Cuando el método no esté aprobado, utilizar un dispositivo estéril de transferencia o una alternativa autorizada."] }
        ]
      },
      {
        title: "Limpieza, reposición y seguridad",
        summary: "Retiro de material usado, limpieza y desinfección del carro, reposición de insumos y registro de incidencias.",
        content: [
          { heading: "Cierre del procedimiento", bullets: ["Retirar el material usado y transportarlo por la ruta establecida al área de reprocesamiento o desecho.", "Depositar punzocortantes inmediatamente en el contenedor rígido autorizado, sin reencapuchar.", "Limpiar y desinfectar el carro con el producto autorizado, respetando compatibilidad, concentración y tiempo de contacto.", "Dejar secar cuando corresponda y realizar higiene de manos.", "Reponer insumos seguros, verificando empaques, identificación y fechas.", "Registrar revisión, reposición, incidencias y responsable cuando el formato institucional lo requiera."] },
          { heading: "Errores que deben evitarse", bullets: ["Mezclar material estéril con material usado.", "Utilizar paquetes abiertos, húmedos o con esterilidad dudosa.", "Conservar soluciones sin identificación o fecha cuando el protocolo exige rotulado.", "Reintegrar al inventario un insumo que estuvo en contacto con el paciente o el campo de trabajo.", "Suponer que una pinza sumergida en solución desinfectante está automáticamente estéril."] },
          { heading: "Criterio profesional", paragraphs: ["Ante una duda sobre el procesamiento del instrumental, el producto químico o la organización del carro, detener la preparación, solicitar orientación y seguir el procedimiento institucional vigente. La rapidez nunca debe anteponerse a la seguridad."] }
        ]
      },
    ],
    resources: [
      "Carro de curaciones · Presentación navegable::/materiales/fundamentos-de-enfermeria/presentaciones/presentacion-carro-curaciones-pinza-portaobjetos.html",
      "Carro de curaciones · Apuntes completos::/materiales/fundamentos-de-enfermeria/apuntes/carro-curaciones-pinza-portaobjetos-guia.html",
      "Carro de curaciones · Infografía de organización segura::/materiales/fundamentos-de-enfermeria/imagenes/organizacion-carro-curaciones.svg",
      "Carro de curaciones · Autoevaluación interactiva::/materiales/fundamentos-de-enfermeria/actividades/autoevaluacion-carro-curaciones.html",
    ],
  },
  {
    title: "Mecánica corporal",
    lessons: [
      {
        title: "Principios de alineación y equilibrio",
        summary: "Base de sustentación, centro de gravedad, alineación corporal y coordinación de movimientos.",
        content: [
          { heading: "Concepto e importancia", paragraphs: ["La mecánica corporal aplica principios de postura, alineación, equilibrio y movimiento para realizar actividades con menor esfuerzo innecesario y reducir riesgos musculoesqueléticos. En enfermería se utiliza al trabajar junto a la cama, movilizar, transferir y ayudar a cambiar de posición.", "Una técnica corporal adecuada no elimina todos los riesgos ni sustituye las ayudas mecánicas. La movilización manual de personas puede generar cargas elevadas e impredecibles; por ello se priorizan la valoración y los dispositivos apropiados."] },
          { heading: "Principios biomecánicos", bullets: ["Base de sustentación: área delimitada por los puntos de apoyo; ampliarla de forma cómoda favorece la estabilidad.", "Centro de gravedad: mantenerlo dentro de la base de sustentación ayuda a conservar el equilibrio.", "Alineación corporal: conservar una postura funcional y evitar torsiones o inclinaciones sostenidas.", "Proximidad: acercar la tarea al cuerpo, cuando sea seguro, reduce el brazo de palanca y el esfuerzo.", "Movimiento coordinado: cambiar de dirección moviendo los pies y girando el cuerpo como una unidad."] },
          { heading: "Postura funcional", paragraphs: ["Adopta una base estable, flexiona caderas y rodillas de manera controlada, mantén la columna en posición neutra y evita trabajar con los brazos extendidos. Mantén hombros relajados y muñecas alineadas. No contengas la respiración ni realices esfuerzos máximos sostenidos."] }
        ]
      },
      {
        title: "Ergonomía para el personal de enfermería",
        summary: "Valoración de riesgos, posturas funcionales, ayudas técnicas y prevención de lesiones durante el cuidado.",
        content: [
          { heading: "Valoración antes de la tarea", bullets: ["Valorar fuerza, equilibrio, capacidad de colaboración, dolor, mareo, estado cognitivo y riesgo de caída.", "Revisar sondas, catéteres, drenajes, oxígeno y accesos; planear cómo protegerlos.", "Preparar el entorno: frenos, altura de cama, espacio libre, calzado y ruta despejada.", "Seleccionar sábana deslizante, tabla, cinturón de marcha cuando esté indicado o grúa, de acuerdo con el riesgo y las instrucciones del equipo.", "Solicitar personal suficiente; no intentar levantar manualmente a una persona totalmente dependiente."] },
          { heading: "Prevención de trastornos musculoesqueléticos", paragraphs: ["Los riesgos dependen de la fuerza, repetición, posturas incómodas, duración, recuperación y condiciones del entorno. La prevención requiere capacitación práctica, equipos disponibles y mantenidos, evaluación de riesgos, políticas de movilización segura y reporte temprano de molestias.", "La indicación de flexionar las rodillas y mantener la espalda alineada no convierte en segura una elevación manual de alto riesgo. La fuerza corporal no sustituye una grúa o dispositivo indicado."] },
          { heading: "Comunicación y equipo", paragraphs: ["Antes de iniciar, una persona coordina la maniobra y todos conocen su función. Se acuerda una señal para comenzar y detenerse. Se explica el procedimiento, se solicita consentimiento y se favorece la participación de la persona hasta donde su condición lo permita."] }
        ]
      },
      {
        title: "Aplicación en el cuidado y movilización segura",
        summary: "Planeación de movimientos, selección de ayudas, protección de dispositivos y criterios para detener una maniobra.",
        content: [
          { heading: "Secuencia de actuación", bullets: ["Valorar a la persona y determinar si puede colaborar.", "Explicar la maniobra y acordar instrucciones claras.", "Preparar cama, silla, frenos, ruta y equipo.", "Elegir la ayuda técnica y el número de profesionales necesarios.", "Coordinar el movimiento sin tirones, torsiones ni movimientos bruscos.", "Vigilar tolerancia, dolor, mareo y estabilidad; detener ante cualquier signo de alarma.", "Comunicar y registrar el resultado y las incidencias conforme al protocolo."] },
          { heading: "Situaciones frecuentes", bullets: ["Reposicionamiento en cama: valorar peso y colaboración; usar sábana deslizante y equipo suficiente; evitar arrastrar sobre la piel.", "Transferencia cama-silla: valorar equilibrio y capacidad de carga; bloquear la silla y utilizar tabla o grúa cuando corresponda.", "Persona totalmente dependiente: seguir un plan de movilización con equipo de elevación y personal entrenado; no improvisar levantamientos manuales."] },
          { heading: "Caso para análisis", paragraphs: ["Una persona adulta mayor requiere pasar de cama a sillón, refiere mareo al incorporarse, presenta debilidad y tiene una venoclisis. Antes de movilizar se debe reevaluar el mareo, valorar capacidad y riesgos, definir ayuda y personal, proteger el acceso y suspender la maniobra si no existen condiciones seguras."] }
        ]
      },
    ],
    resources: [
      "Mecánica corporal · Presentación navegable::/materiales/fundamentos-de-enfermeria/presentaciones/presentacion-mecanica-corporal.html",
      "Mecánica corporal · Guía completa de estudio::/materiales/fundamentos-de-enfermeria/apuntes/mecanica-corporal-guia.html",
      "Mecánica corporal · Infografía de principios::/materiales/fundamentos-de-enfermeria/imagenes/principios-mecanica-corporal.svg",
      "Mecánica corporal · Taller práctico y lista de cotejo::/materiales/fundamentos-de-enfermeria/actividades/practica-mecanica-corporal.html",
      "Mecánica corporal · Autoevaluación interactiva::/materiales/fundamentos-de-enfermeria/actividades/autoevaluacion-mecanica-corporal.html",
    ],
  },
  {
    title: "Movilización y traslado del paciente",
    lessons: [
      {
        title: "Valoración previa y preparación",
        summary: "Identificación de riesgos, capacidad funcional, dispositivos, nivel de ayuda y equipo necesario.",
        content: [
          { heading: "Valoración integral", bullets: ["Valorar conciencia, comprensión, colaboración, fuerza, equilibrio y capacidad para soportar peso.", "Identificar dolor, fatiga, disnea, mareo, riesgo de caída y tolerancia al esfuerzo.", "Revisar restricciones médicas, quirúrgicas o traumatológicas.", "Identificar oxígeno, vías, sondas, drenajes y otros dispositivos que deban protegerse.", "Evaluar entorno, destino, espacio y necesidad de personal o equipo especializado."] },
          { heading: "Preparación", bullets: ["Explicar el procedimiento, solicitar consentimiento y acordar instrucciones.", "Definir objetivo y nivel de asistencia según la valoración.", "Verificar frenos, altura de superficies, reposapiés y ruta despejada.", "Seleccionar sábana deslizante, tabla, grúa u otra ayuda indicada; revisar capacidad de carga e instrucciones.", "Asignar roles, definir quién coordina y asegurar personal suficiente."] },
          { heading: "Seguridad", paragraphs: ["No improvisar levantamientos manuales de personas totalmente dependientes ni intentar sostener por fuerza a quien pierde el equilibrio. Si faltan equipo o personal, detener la actividad y gestionar condiciones seguras."] }
        ]
      },
      {
        title: "Movilización en cama y transferencia",
        summary: "Cambios de posición, desplazamiento en cama y transferencia segura entre superficies con ayudas apropiadas.",
        content: [
          { heading: "Movilización en cama", bullets: ["Explicar el movimiento y valorar tolerancia.", "Usar dispositivos de reducción de fricción cuando estén indicados; evitar arrastrar sobre la sábana.", "Proteger prominencias óseas y evitar cizallamiento, torsiones y tracciones.", "Ajustar la posición final a la indicación clínica, comodidad y respiración."] },
          { heading: "Transferencia cama-silla", bullets: ["Valorar capacidad para soportar peso, ponerse de pie y mantener equilibrio.", "Colocar silla cerca, bloquear frenos y retirar reposapiés si corresponde.", "Comprobar calzado, altura de superficies y espacio.", "Utilizar tabla o grúa según el plan; no tirar de brazos, axilas, cuello o ropa.", "Verificar alineación, apoyo de pies y acceso al timbre al finalizar."] },
          { heading: "Incorporación y sedestación", paragraphs: ["Realizar cambios progresivos según tolerancia. Vigilar palidez, sudoración, disnea, dolor, mareo o inestabilidad. Ante síntomas, detener la progresión y revalorar conforme al protocolo."] }
        ]
      },
      {
        title: "Traslado y prevención de caídas",
        summary: "Transporte en silla de ruedas o camilla, vigilancia, prevención de incidentes y documentación.",
        content: [
          { heading: "Silla de ruedas y camilla", bullets: ["Inspeccionar ruedas, frenos, reposapiés, barandales, asiento y capacidad del equipo.", "Asegurar postura y apoyo de pies; despejar la ruta y controlar velocidad.", "Coordinar transferencias y utilizar dispositivos adecuados.", "Asegurar continuidad de oxígeno, infusiones, drenajes y otros soportes.", "Vigilar a la persona durante el trayecto y aplicar el protocolo en rampas, umbrales y superficies irregulares."] },
          { heading: "Prevención de caídas", paragraphs: ["Aplicar medidas individualizadas: identificar factores de riesgo, orientar, mantener timbre y objetos al alcance, facilitar calzado adecuado, despejar rutas y ofrecer asistencia. Barandales, cinturones y restricciones no deben usarse de manera automática; requieren valoración de indicación, riesgos y alternativas menos restrictivas."] },
          { heading: "Criterios para detener y registro", bullets: ["Detener ante dolor intenso, mareo, síncope, disnea, dolor torácico, palidez, sudoración fría, pérdida de equilibrio, falla del equipo o personal insuficiente.", "Documentar valoración, nivel de asistencia, equipo utilizado, tolerancia, posición final, medidas de seguridad, incidentes y notificaciones según política institucional."] }
        ]
      },
    ],
    resources: [
      "Movilización y traslado · Presentación navegable::/materiales/fundamentos-de-enfermeria/presentaciones/presentacion-movilizacion-traslado-paciente.html",
      "Movilización y traslado · Guía completa de estudio::/materiales/fundamentos-de-enfermeria/apuntes/movilizacion-traslado-paciente-guia.html",
      "Movilización y traslado · Infografía de la ruta segura::/materiales/fundamentos-de-enfermeria/imagenes/flujo-movilizacion-traslado.svg",
      "Movilización y traslado · Taller práctico y lista de cotejo::/materiales/fundamentos-de-enfermeria/actividades/practica-movilizacion-traslado.html",
      "Movilización y traslado · Autoevaluación interactiva::/materiales/fundamentos-de-enfermeria/actividades/autoevaluacion-movilizacion-traslado.html",
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
    resources: [
      "Expediente clínico · Guía de estudio::/materiales/expediente-clinico-guia.html",
      "Expediente clínico · Presentación didáctica::/materiales/presentacion-expediente-clinico.html",
      "Expediente clínico · Esquema visual::/images/expediente-clinico-esquema.svg",
      "Expediente clínico · NOM-004-SSA3-2012, texto oficial PDF::https://salud.gob.mx/cdi/archivo/NOM004ssa32012.pdf",
    ],
  },
];

fundamentos.resources = [];
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
  "Organización Mundial de la Salud. (2009). WHO Guidelines on Hand Hygiene in Health Care. https://iris.who.int/handle/10665/44102",
  "Secretaría de Salud de la Ciudad de México. (2015). Técnicas específicas de enfermería: apartado de curaciones. https://www.salud.cdmx.gob.mx/storage/app/media/uploaded-files/3te005tecnicasespecificasdeenfermeria.pdf",
  "Secretaría de Salud de la Ciudad de México. (2014). Manual de procedimientos: manejo de la pinza de traslado (pinza de Bard-Parker). https://data.salud.cdmx.gob.mx/ssdf/portalut/archivo/Actualizaciones/3erTrimestre19/Dir_Juridico_Norma/TEUQ.pdf",
  "Instituto Mexicano del Seguro Social. Procedimientos de enfermería: cuidados de las heridas, clave 2250-003-002. https://www.imss.gob.mx/sites/all/statics/pdf/procedimientos/2250-003-002.pdf",
  "Centers for Disease Control and Prevention. (2024). Standard Precautions for All Patient Care. https://www.cdc.gov/infection-control/hcp/basics/standard-precautions.html",
  "Comisión Federal para la Protección contra Riesgos Sanitarios. (2025). Residuos peligrosos biológico-infecciosos: NOM-087-SEMARNAT-SSA1-2002 (estado vigente). https://www.gob.mx/cofepris/acciones-y-programas/residuos-peligrosos-biologico-infecciosos",
];
