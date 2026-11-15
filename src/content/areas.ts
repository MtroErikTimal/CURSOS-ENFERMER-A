export type LearningArea = {
  slug: string;
  title: string;
  description: string;
  color: "mint" | "blue" | "rose" | "violet" | "amber" | "teal" | "coral" | "navy" | "plum" | "olive" | "slate" | "cyan" | "brick";
  level: string;
  estimatedDuration: string;
  objectives: string[];
  competencies: string[];
  prerequisites: string[];
  units: {
    title: string;
    topics: { title: string; lessons: { title: string; summary: string; content?: { heading: string; paragraphs?: string[]; bullets?: string[]; image?: string; imageAlt?: string }[] }[]; resources?: string[] }[];
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
  createArea("fundamentos-de-enfermeria", "Fundamentos de Enfermería", "Bases del cuidado, pensamiento enfermero y principios para la práctica profesional.", "blue"),
  createArea("enfermeria-medico-quirurgica", "Enfermería Médico-Quirúrgica", "Área temática para organizar contenidos de cuidado médico-quirúrgico.", "mint"),
  createArea("cuidados-intensivos", "Enfermería de Cuidados Intensivos", "Área temática para organizar formación relacionada con cuidados críticos.", "rose"),
  createArea("materno-infantil", "Enfermería Materno-Infantil", "Área temática de atención materna, neonatal e infantil.", "violet"),
  createArea("enfermeria-comunitaria", "Enfermería Comunitaria", "Promoción de la salud y cuidado en contextos comunitarios.", "amber"),
  createArea("anatomia-fisiologia", "Anatomía y Fisiología", "Bases anatómicas y fisiológicas para el estudio del cuidado.", "teal"),
  createArea("farmacologia", "Farmacología", "Conceptos para el estudio responsable de medicamentos y la seguridad en su manejo.", "coral"),
  createArea("proceso-atencion-enfermeria", "Proceso de Atención de Enfermería", "Estructura para organizar el cuidado mediante valoración, planificación y evaluación.", "navy"),
  createArea("nanda-nic-noc", "NANDA-I, NIC y NOC", "Espacio para contenidos sobre lenguajes estandarizados, sujeto a permisos y versiones autorizadas.", "plum"),
  createArea("investigacion-enfermeria", "Investigación en Enfermería", "Lectura crítica y fundamentos de investigación aplicados a enfermería.", "olive"),
  createArea("calidad-seguridad-paciente", "Calidad y Seguridad del Paciente", "Cultura de seguridad, prevención de riesgos y mejora de la calidad del cuidado.", "slate"),
  createArea("educacion-evaluacion-enfermeria", "Educación y Evaluación en Enfermería", "Estrategias para enseñar, aprender y evaluar en contextos de enfermería.", "cyan"),
  createArea("examenes-egreso", "Preparación para Exámenes de Egreso", "Espacio para organizar materiales de preparación académica para el egreso.", "brick"),
];

// Enfermería Médico-Quirúrgica: programa progresivo de licenciatura.
const medicoQuirurgica = learningAreas.find((area) => area.slug === "enfermeria-medico-quirurgica")!;
medicoQuirurgica.description = "Formación teórico-práctica para el cuidado integral de la persona adulta con problemas médico-quirúrgicos, desde el entorno perioperatorio hasta los procedimientos y la vigilancia clínica.";
medicoQuirurgica.level = "Licenciatura en Enfermería";
medicoQuirurgica.estimatedDuration = "Curso teórico-práctico · organización modular en siete unidades";
medicoQuirurgica.objectives = [
  "Analizar la organización, infraestructura, funcionamiento y normas de circulación del área quirúrgica.",
  "Identificar el instrumental, equipo, mobiliario y material de consumo quirúrgico de acuerdo con su función y uso seguro.",
  "Aplicar principios de asepsia, antisepsia, esterilización y mantenimiento del campo estéril en escenarios simulados.",
  "Distinguir las funciones y responsabilidades del equipo quirúrgico y aplicar medidas de seguridad del paciente.",
  "Planificar cuidados de enfermería en las etapas preoperatoria, transoperatoria y posoperatoria.",
  "Describir los principios, secuencia, indicaciones generales y cuidados de enfermería asociados con procedimientos quirúrgicos frecuentes.",
  "Reconocer oportunamente complicaciones perioperatorias y comunicar hallazgos mediante registros clínicos objetivos."
];
medicoQuirurgica.competencies = [
  "Organiza el entorno y prepara el material quirúrgico con criterios de seguridad, funcionalidad y prevención de infecciones.",
  "Reconoce instrumental y equipo quirúrgico, explica su función y participa en su manejo dentro de su nivel de formación y supervisión.",
  "Mantiene la técnica aséptica e identifica rupturas del campo estéril para corregirlas oportunamente.",
  "Colabora con el equipo interdisciplinario y utiliza comunicación estructurada para prevenir eventos adversos.",
  "Desarrolla el proceso de enfermería perioperatorio a partir de la valoración, priorización, intervención y evaluación.",
  "Fundamenta los cuidados relacionados con procedimientos y técnicas quirúrgicas en evidencia, normas y protocolos institucionales."
];
medicoQuirurgica.prerequisites = [
  "Bases de anatomía y fisiología humana.",
  "Fundamentos de enfermería, higiene de manos, bioseguridad y técnica aséptica.",
  "Conocimientos introductorios de farmacología, valoración clínica y proceso de atención de enfermería."
];
medicoQuirurgica.units = [
  {
    title: "Unidad 1. Entorno quirúrgico y organización del quirófano",
    topics: [
      { title: "Concepto, objetivos y estructura del área quirúrgica", lessons: [
        { title: "El área quirúrgica: concepto y finalidad", summary: "Características del área quirúrgica, objetivos, ubicación, acceso controlado y relación con otros servicios.", content: [
          { heading: "Vista general del quirófano", paragraphs: ["Explora la distribución de una sala de operaciones y localiza los principales equipos antes de estudiar cada componente."], image: "images/quirófano-vista-general.svg", imageAlt: "Ilustración panorámica de una sala de operaciones con mesa quirúrgica, lámparas, monitor, estación de anestesia y mesa de instrumental." },
          { heading: "1. Concepto de área quirúrgica", paragraphs: ["El área quirúrgica es el conjunto organizado de espacios, instalaciones, equipos y recursos humanos destinados a realizar procedimientos quirúrgicos y otros procedimientos invasivos que requieren condiciones controladas de seguridad, asepsia, vigilancia y soporte. Su diseño busca facilitar el trabajo coordinado, limitar la contaminación, proteger al paciente y permitir una respuesta oportuna ante emergencias.", "No debe entenderse únicamente como la sala donde se realiza la operación. Incluye espacios de recepción y preparación, salas de operaciones, áreas de apoyo, recuperación postanestésica, almacenamiento y circulación diferenciada, de acuerdo con el diseño y la normativa aplicable al establecimiento."] },
          { heading: "2. Objetivos del área quirúrgica", bullets: ["Proporcionar un entorno seguro para la realización de procedimientos quirúrgicos.", "Reducir el riesgo de infección mediante limpieza, desinfección, esterilización y control de circulación.", "Facilitar el acceso oportuno a equipo, instrumental, medicamentos, gases medicinales y tecnología.", "Permitir vigilancia continua del paciente y respuesta organizada ante complicaciones.", "Favorecer la comunicación, coordinación y trazabilidad de las actividades del equipo quirúrgico."] },
          { heading: "3. Organización y acceso", paragraphs: ["El acceso se controla para limitar el tránsito a personal autorizado y con indumentaria apropiada. Los circuitos de personas, pacientes, instrumental, ropa y residuos deben organizarse para disminuir cruces innecesarios entre material limpio, estéril y contaminado. La distribución exacta varía según el tipo y tamaño del hospital, por lo que el estudiante debe reconocer el plano y los procedimientos locales antes de ingresar."] },
          { heading: "4. La unidad quirúrgica como sistema de atención", paragraphs: ["La unidad quirúrgica funciona como un sistema en el que interactúan infraestructura, personal, tecnología, procesos y comunicación. Una falla en cualquiera de estos componentes puede afectar la seguridad: por ejemplo, una ruta de traslado obstruida retrasa la atención; un equipo sin mantenimiento puede interrumpir el procedimiento; una identificación incompleta aumenta el riesgo de error. Por ello, la preparación del entorno es una intervención de seguridad y no una tarea meramente logística.", "La unidad se articula con hospitalización, urgencias, laboratorio, imagenología, banco de sangre, farmacia, CEyE y recuperación postanestésica. La coordinación permite disponer de resultados, hemoderivados, instrumental procesado, medicamentos y apoyo especializado cuando se necesitan."] },
          { heading: "5. Principios de diseño y funcionamiento seguro", bullets: ["Acceso controlado y delimitación clara de áreas.", "Circulación que reduzca cruces entre pacientes, personal, material limpio y material contaminado.", "Superficies resistentes, continuas y de fácil limpieza, conforme a especificaciones técnicas.", "Disponibilidad segura y continua de energía, iluminación, gases medicinales y aspiración.", "Espacio suficiente para movilizar al paciente, posicionarlo y permitir acceso al equipo de respuesta.", "Mantenimiento preventivo y correctivo documentado de infraestructura y equipo.", "Señalización, rutas de evacuación y condiciones para responder ante emergencias."] },
          { heading: "6. Responsabilidad de enfermería en la verificación del entorno", paragraphs: ["Enfermería participa en la comprobación funcional del área antes de recibir al paciente y durante la preparación de la sala. Esto incluye revisar que el espacio esté procesado, que el equipo requerido esté disponible y funcione, que los insumos correspondan al procedimiento y que no existan obstáculos o riesgos visibles. La verificación debe apoyarse en listas institucionales y no sustituye el mantenimiento técnico ni la responsabilidad de otros profesionales.", "Cuando se detecta una condición insegura —por ejemplo, falla de aspiración, ausencia de un insumo crítico, conexión dañada o limpieza no documentada— se comunica al responsable y se resuelve antes de iniciar, salvo que una emergencia exija activar el protocolo correspondiente."] },
          { heading: "7. Esquema integrador: cómo se organiza la unidad", bullets: ["Infraestructura y servicios → permiten la operación segura.", "Áreas y barreras → ordenan el acceso y la circulación.", "Personal y competencias → distribuyen responsabilidades.", "Equipo e insumos → hacen posible el procedimiento.", "Protocolos y comunicación → coordinan las acciones.", "Vigilancia y registros → mantienen continuidad y trazabilidad.", "Resultado esperado → atención quirúrgica segura, oportuna y centrada en la persona."] }
        ] },
        { title: "Áreas negra, gris y blanca: organización y circulación", summary: "Zonificación funcional, restricciones de acceso, indumentaria y rutas de circulación.", content: [
          { heading: "1. Zonificación funcional", paragraphs: ["En la enseñanza del área quirúrgica suele utilizarse una clasificación didáctica en zona negra, zona gris y zona blanca. Esta nomenclatura ayuda a comprender el incremento progresivo de las restricciones de circulación y control de asepsia desde el acceso hasta la sala de operaciones. La denominación, los límites físicos y los requisitos concretos pueden variar entre instituciones; siempre prevalece el plano y protocolo local.", "La zonificación no significa que una zona por sí sola sea estéril. La esterilidad corresponde al material, equipo o campo que ha sido procesado y mantenido bajo condiciones validadas. Las superficies del quirófano requieren limpieza y desinfección conforme a los procedimientos establecidos."] },
          { heading: "2. Zona negra", bullets: ["Área de acceso y transición entre el hospital y el área quirúrgica.", "Puede incluir recepción, vestidores, oficinas y espacios administrativos o de preparación inicial.", "Se controla el ingreso y se realiza el cambio a la indumentaria quirúrgica requerida.", "Se verifica la documentación, identidad, preparación y condiciones iniciales del paciente conforme al circuito institucional."] },
          { heading: "3. Zona gris", bullets: ["Área semirrestringida o de transición controlada, según la nomenclatura institucional.", "Puede comprender pasillos internos, áreas de lavado quirúrgico, preparación de material y apoyos limpios.", "El personal utiliza uniforme quirúrgico y cubrecabello; otros elementos se seleccionan conforme al riesgo y protocolo.", "Se limita el tránsito y se mantienen separaciones entre circuitos limpios y contaminados."] },
          { heading: "4. Zona blanca", bullets: ["Área restringida que comprende las salas de operaciones y espacios con requisitos estrictos de control.", "Se exige indumentaria quirúrgica y barreras adicionales según la actividad y las políticas del establecimiento.", "Las puertas deben permanecer cerradas tanto como sea posible y se evita el tránsito innecesario.", "La sala debe estar preparada, con equipo funcional, superficies procesadas y condiciones ambientales controladas."] },
          { heading: "5. Circulación segura", paragraphs: ["Antes de trasladar material o pacientes, identifica la ruta autorizada y el estado del material. No transportes material estéril junto con residuos o equipo contaminado. El instrumental usado se coloca en contenedores apropiados, cerrados y señalizados, y se envía al circuito de reprocesamiento. Ante dudas sobre una ruta o barrera, consulta al personal responsable en lugar de improvisar."] },
          { heading: "Infografía: zonas funcionales", paragraphs: ["Observa el incremento progresivo de las restricciones desde la zona negra hasta la zona blanca. La nomenclatura y los límites físicos varían entre instituciones."], image: "images/zonificacion-area-quirurgica.svg", imageAlt: "Infografía comparativa de las zonas negra, gris y blanca del área quirúrgica." }
        ] },
        { title: "Distribución física y espacios de apoyo", summary: "Sala de operaciones, lavado quirúrgico, recuperación, almacenes y áreas de soporte.", content: [
          { heading: "Espacios habituales", bullets: ["Sala de operaciones: espacio donde se realiza el procedimiento, con mesa quirúrgica, lámparas, equipo de anestesia, monitorización y conexiones necesarias.", "Área de lavado quirúrgico: destinada al lavado o preparación quirúrgica de manos y antebrazos conforme al método aprobado.", "Área de preparación y almacenamiento: resguarda insumos, equipos y material procesado, protegiendo su integridad y trazabilidad.", "Unidad de cuidados postanestésicos: permite vigilancia y recuperación inmediata después de la anestesia, con capacidad de respuesta ante deterioro.", "Áreas de transferencia, vestidores y circulación: facilitan el ingreso controlado de personal y pacientes.", "Áreas de descontaminación y manejo de material usado: mantienen separación del material contaminado y siguen el circuito de reprocesamiento."] },
          { heading: "Condiciones ambientales y equipo", paragraphs: ["La ventilación, presión diferencial cuando aplique, temperatura, humedad, filtración, iluminación y suministro de energía y gases medicinales se diseñan y mantienen conforme a normas técnicas y criterios de ingeniería hospitalaria. El personal de enfermería verifica condiciones operativas visibles y reporta fallas; no modifica parámetros de instalaciones por iniciativa propia.", "Antes de iniciar una cirugía se comprueba disponibilidad y funcionamiento del equipo requerido, aspiración, iluminación, mesa, electrocirugía y monitorización, de acuerdo con la lista de preparación institucional."] },
          { heading: "Infografía: elementos de la sala de operaciones", paragraphs: ["Reconoce la ubicación funcional de la mesa, lámparas, monitorización, estación de anestesia y mesa de instrumental. El esquema es ilustrativo y se adapta al procedimiento."], image: "images/elementos-sala-operaciones.svg", imageAlt: "Esquema de una sala de operaciones con sus principales equipos." }
        ] },
        { title: "Flujo del paciente, personal y materiales en la unidad quirúrgica", summary: "Recorrido funcional, transferencia de camillas, rutas limpias y contaminadas y coordinación interdepartamental.", content: [
          { heading: "1. Flujo del paciente", paragraphs: ["El paciente ingresa a la unidad por el punto de transferencia definido por el hospital. Se realiza identificación, entrega de información y verificación de preparación; posteriormente se traslada a la sala asignada y, al concluir el procedimiento, se conduce a recuperación postanestésica o al destino indicado según su condición. Cada transferencia requiere comunicación estructurada y medidas para evitar caídas, pérdida de dispositivos o interrupciones de la vigilancia."] },
          { heading: "2. Flujo del personal", paragraphs: ["El personal autorizado ingresa por los accesos y vestidores establecidos, utiliza la indumentaria correspondiente y respeta los límites de circulación. La salida y el tránsito entre zonas se realizan conforme al diseño institucional. No se debe asumir que todos los hospitales tienen exactamente la misma distribución ni que la denominación de las zonas sustituye la señalización local."] },
          { heading: "3. Flujo del material", bullets: ["Material limpio y estéril: se almacena y transporta protegiendo empaque, integridad y trazabilidad.", "Material utilizado: se deposita en contenedores apropiados y se traslada por la ruta definida hacia descontaminación y reprocesamiento.", "Ropa: se separa y transporta en bolsas o contenedores institucionales, evitando sacudirla o manipularla innecesariamente.", "Residuos: se segregan en el punto de generación y se manejan según la clasificación y normativa aplicable.", "Muestras: se identifican y envían con solicitud y condiciones de conservación apropiadas."] },
          { heading: "4. Puntos de control de enfermería", bullets: ["Confirmar identidad y destino antes de cada traslado.", "Comprobar que el paciente viaje con los dispositivos y soporte requeridos.", "Verificar que los paquetes estériles estén protegidos y sin daño.", "No mezclar circuitos limpios con material contaminado.", "Documentar entrega, recepción, muestras y eventos relevantes.", "Comunicar cualquier desviación del circuito establecido."] },
          { heading: "Infografía: flujo del paciente y los materiales", paragraphs: ["Los recorridos se organizan para mantener la continuidad del cuidado y separar, en lo posible, el material limpio o estéril del instrumental utilizado que requiere reprocesamiento."], image: "images/flujo-unidad-quirurgica.svg", imageAlt: "Diagrama del recorrido del paciente y de los circuitos de material limpio y usado." }
        ] },
      ],
      resources: [
        "NOM-016-SSA3-2012: Infraestructura y equipamiento hospitalario::https://sidof.segob.gob.mx/notas/5284306",
        "NOM-016-SSA3-2012: versión PDF publicada en el DOF::https://www.gob.mx/cms/uploads/attachment/file/512104/NOM-016-SSA3-2012.pdf",
        "OMS: Manual de aplicación de la Lista OMS de verificación de la seguridad de la cirugía::https://www.who.int/publications/i/item/9789241598590"
      ]},
      { title: "Personal, indumentaria y seguridad ambiental", lessons: [
        { title: "Indumentaria quirúrgica y conducta dentro del área", summary: "Uso de uniforme, gorro, mascarilla y barreras; higiene personal y disciplina de circulación.", content: [
          { heading: "Principios de indumentaria", paragraphs: ["La indumentaria quirúrgica funciona como barrera y forma parte de las medidas de control de contaminación. Debe utilizarse de acuerdo con la zona, actividad, evaluación del riesgo y política institucional. El uniforme quirúrgico no sustituye la higiene de manos ni la técnica aséptica.", "El cabello se mantiene completamente cubierto en las áreas que lo requieren. La mascarilla se utiliza según la actividad y las políticas de control de infecciones; la protección ocular, bata y guantes se seleccionan según el riesgo de salpicaduras, exposición o participación en el procedimiento."] },
          { heading: "Conducta segura", bullets: ["Ingresar únicamente con autorización y después de recibir orientación sobre las normas del servicio.", "Mantener puertas cerradas y limitar conversaciones, movimientos y tránsito innecesarios.", "No ingresar alimentos, bebidas ni objetos personales no autorizados.", "No tocar mesas, campos, instrumental o superficies estériles sin función y entrenamiento.", "Reportar daños, derrames, fallas de equipo, exposición ocupacional o incumplimientos de barreras.", "Respetar privacidad, dignidad y confidencialidad del paciente en todo momento."] }
        ] },
        { title: "Limpieza, desinfección y preparación de la sala", summary: "Limpieza entre procedimientos, limpieza terminal y verificación del entorno.", content: [
          { heading: "Limpieza y desinfección", paragraphs: ["La limpieza elimina suciedad y materia orgánica; la desinfección reduce o inactiva microorganismos en superficies y objetos inanimados según el producto y nivel utilizado. Son procesos distintos y complementarios. La selección del producto, concentración, compatibilidad, tiempo de contacto y método debe seguir las instrucciones del fabricante y el protocolo institucional.", "La sala se procesa antes y después de los procedimientos y al final de la jornada conforme a la clasificación de áreas, contaminación observada y política del hospital. El personal asignado utiliza equipo de protección y respeta el tiempo de contacto del desinfectante."] },
          { heading: "Verificación previa", bullets: ["Confirmar que la limpieza fue registrada y que las superficies están secas cuando corresponda.", "Verificar disponibilidad de contenedores y material de limpieza.", "Comprobar que el mobiliario y equipo se encuentran íntegros y funcionales.", "Asegurar que no existan residuos, material usado o elementos ajenos al procedimiento.", "Reportar cualquier condición que impida iniciar de manera segura."] }
        ] }
      ]}
    ]
  },
  {
    title: "Unidad 2. Material, instrumental y equipo quirúrgico",
    topics: [
      { title: "Clasificación y reconocimiento del material", lessons: [
        { title: "Instrumental quirúrgico: clasificación por función", summary: "Instrumental de corte, disección, hemostasia, prensión, separación, sutura y aspiración.", content: [
          { heading: "Criterios de clasificación", paragraphs: ["El instrumental quirúrgico se clasifica de manera funcional para facilitar su identificación, selección, preparación y entrega durante el procedimiento. Un mismo instrumento puede tener variantes de tamaño, forma, curvatura y mecanismo; por ello, el nombre debe acompañarse de la identificación visual y del uso previsto.", "El estudiante debe aprender a reconocer el instrumento, describir sus partes, explicar su función general y manipularlo con medidas de seguridad. La selección concreta corresponde al procedimiento, preferencia del equipo, técnica y protocolo institucional."] },
          { heading: "Grupos funcionales", bullets: ["Corte y disección: bisturíes, hojas, tijeras de Mayo y Metzenbaum.", "Hemostasia: pinzas Kelly, Crile, mosquito y otras pinzas hemostáticas.", "Prensión y sujeción: pinzas de disección con y sin dientes, Foerster y pinzas de campo.", "Separación y exposición: separadores manuales y autoestáticos.", "Sutura: portaagujas, pinzas auxiliares y tijeras para sutura.", "Aspiración: cánulas y sistemas de aspiración apropiados.", "Instrumental especializado: osteótomos, pinzas vasculares, laparoscópicos u otros según especialidad."] },
          { heading: "Identificación y cuidado", bullets: ["Verificar nombre, integridad, articulaciones, alineación, filo, aislamiento y funcionamiento.", "Separar instrumentos dañados y reportarlos; no utilizarlos hasta su evaluación.", "Evitar sobrecargar charolas y proteger puntas y filos.", "Realizar conteo y control conforme a política institucional.", "Enviar el material usado a reprocesamiento mediante contenedor seguro y trazable."] },
          { heading: "Partes y características que deben reconocerse", paragraphs: ["En los instrumentos articulados se identifican anillas, cremalleras o sistema de cierre, articulación, ramas y mandíbulas. En otros modelos pueden reconocerse mango, cuello, punta activa, superficie de agarre, estrías, dientes o mecanismo de bloqueo. No todos los instrumentos presentan todas estas partes; la descripción debe corresponder al diseño real.", "La inspección funcional incluye apertura y cierre suaves, alineación de puntas, ausencia de corrosión, fisuras o residuos, integridad de recubrimientos y aislamiento cuando el dispositivo lo requiere. Las pruebas específicas y lubricación se realizan de acuerdo con el fabricante y el servicio de reprocesamiento."] },
          { heading: "Lectura rápida de la función", bullets: ["¿Corta o diseca? Identifica filo, hoja o tijera y diferencia el uso para tejido delicado o resistente.", "¿Ocluye? Observa las mandíbulas, estrías y mecanismo de cierre de la pinza hemostática.", "¿Sujeta? Reconoce dientes, fenestraciones o superficies atraumáticas y valora qué estructura puede tomar.", "¿Expone? Identifica la forma de la pala y el sistema manual o autoestático del separador.", "¿Sutura? Distingue las mandíbulas cortas y firmes del portaagujas, diseñadas para sujetar la aguja.", "¿Aspira? Reconoce la cánula y sus conexiones; comprueba compatibilidad y permeabilidad del sistema."] },
          { heading: "Seguridad durante la preparación y entrega", bullets: ["Manipular filos y puntas con orientación segura, evitando dirigirlos hacia las manos propias o de otra persona.", "Entregar el instrumento de forma controlada, con comunicación clara y respetando la técnica del equipo.", "No pasar instrumentos por encima de zonas no protegidas ni dejarlos ocultos bajo gasas o campos.", "Mantener separados los instrumentos cortantes, punzantes y delicados según la organización de la mesa.", "Realizar conteos en los momentos establecidos y comunicar de inmediato cualquier discrepancia.", "No improvisar reparaciones ni utilizar instrumental con daño, aislamiento dudoso o funcionamiento irregular."] },
          { heading: "Aplicación en el aprendizaje clínico", paragraphs: ["En el laboratorio de simulación, el estudiante debe verbalizar nombre o familia, función, característica que permite reconocerlo y precaución principal. La práctica se realiza con instrumental de entrenamiento o fuera de uso clínico, bajo supervisión docente. El reconocimiento visual no autoriza por sí mismo a utilizar el instrumento en una persona.", "La selección definitiva del instrumental depende del procedimiento, técnica, preferencia del equipo quirúrgico, características del paciente y protocolo institucional. El personal en formación debe respetar sus competencias y solicitar supervisión."] },
          { heading: "Galería de reconocimiento", paragraphs: ["Utiliza las láminas para comparar la forma general de cada familia. Son esquemas didácticos, no fotografías de modelos comerciales; las variantes reales pueden cambiar entre fabricantes."], image: "images/galeria-instrumental-quirurgico.svg", imageAlt: "Lámina didáctica de familias de instrumental quirúrgico." }
        ] },
        { title: "Instrumental de corte, hemostasia y prensión", summary: "Identificación morfológica, diferencias funcionales y criterios de selección segura del instrumental de corte, pinzamiento y sujeción.", content: [
          { heading: "1. Instrumental de corte: bisturí y hojas", paragraphs: ["El bisturí permite realizar incisiones controladas. En los modelos reutilizables se reconoce un mango al que se acopla una hoja compatible; también existen bisturíes desechables de un solo uso. La hoja debe corresponder al mango, al procedimiento y a las indicaciones del equipo quirúrgico. No se deben improvisar acoplamientos ni manipular hojas con los dedos.", "Entre las hojas frecuentes, la número 10 presenta un borde curvo amplio y suele asociarse con incisiones cutáneas; la número 11 es alargada y puntiaguda, útil en incisiones pequeñas o de entrada cuando está indicada; la número 15 es pequeña y curva, empleada en incisiones cortas y precisas. Las hojas 12 y 20–24 tienen diseños específicos y su uso depende de la técnica. La numeración no sustituye la comprobación de compatibilidad con el mango ni la indicación clínica.", "La hoja se considera un objeto cortopunzante. Debe mantenerse visible, orientada de forma segura y dentro de una zona definida de la mesa. Para el montaje y retiro se emplea un dispositivo o técnica aprobada, instrumental auxiliar y equipo de protección; nunca se debe retirar con los dedos. Las hojas usadas se eliminan inmediatamente en un contenedor rígido para punzocortantes, sin reencapuchar ni dejarse sueltas sobre la mesa."] },
          { heading: "2. Tijeras quirúrgicas: Mayo y Metzenbaum", paragraphs: ["Las tijeras Mayo tienen ramas y hojas generalmente más robustas. Las rectas se utilizan con frecuencia para cortar material como suturas o ciertos insumos; las curvas pueden emplearse para tejidos más resistentes, según la técnica. Las tijeras Metzenbaum son más ligeras, con hojas relativamente delicadas y ramas largas; se asocian con disección y corte de tejidos delicados. Estas son diferencias generales: el uso real depende del modelo, del tejido y de la indicación del cirujano.", "Para diferenciarlas, observa la robustez de las hojas, la relación entre longitud de ramas y hojas, la curvatura y el acabado de las puntas. No utilices tijeras de tejido para cortar material si el servicio dispone de tijeras específicas, porque el uso inadecuado puede deteriorar el filo. Antes de su preparación comprueba alineación, suavidad del movimiento, filo, ausencia de mellas y limpieza de la articulación."] },
          { heading: "3. Instrumental de hemostasia: principio y características", paragraphs: ["Las pinzas hemostáticas permiten comprimir de forma controlada una estructura para favorecer el control temporal del sangrado. Suelen contar con anillas, cremalleras, articulación y mandíbulas estriadas. Pueden ser rectas o curvas y variar en longitud, tamaño y patrón de estriado. La elección depende del calibre y tipo de estructura, del campo operatorio y de la técnica; no todas las pinzas son equivalentes ni deben aplicarse indiscriminadamente.", "La pinza mosquito (Halsted) es pequeña y delicada, apropiada para estructuras de pequeño calibre en los escenarios en que está indicada. Las pinzas Kelly suelen presentar estrías transversales en la porción distal de las mandíbulas; las Crile habitualmente muestran estriado transversal a lo largo de toda la superficie de prensión. Estos patrones son referencias didácticas y pueden variar según fabricante y modelo, por lo que se debe reconocer el instrumento real y su rotulado.", "La pinza Rochester-Pean es más robusta y se utiliza para estructuras de mayor tamaño cuando así se indica. Otras pinzas especializadas, como las vasculares, tienen diseños destinados a reducir el trauma y requieren identificación específica. No se debe utilizar una pinza hemostática común sobre estructuras delicadas si la técnica requiere instrumental vascular atraumático."] },
          { heading: "4. Comparación rápida: mosquito, Kelly y Crile", bullets: ["Mosquito: tamaño pequeño, puntas finas y uso habitual en vasos o estructuras pequeñas; puede ser recta o curva.", "Kelly: tamaño intermedio en muchos sets; estriado que suele ocupar la mitad distal de las mandíbulas; variantes rectas y curvas.", "Crile: tamaño intermedio y estriado que suele extenderse a lo largo de toda la mandíbula; variantes rectas y curvas.", "Rochester-Pean: construcción más robusta y mandíbulas más amplias para estructuras de mayor tamaño cuando está indicada.", "La identificación final debe considerar dimensiones, patrón de estriado, forma de las puntas, rotulado y protocolo local; no se decide solo por el nombre."] },
          { heading: "5. Instrumental de prensión y sujeción", paragraphs: ["Las pinzas de prensión sujetan tejidos, gasas u otros elementos. Su diseño determina el tipo de contacto y la fuerza que distribuyen. Las pinzas de disección tipo anatómica, sin dientes, suelen permitir una sujeción menos penetrante; las tipo quirúrgica, con dientes, ofrecen mayor agarre en tejidos resistentes, pero pueden producir lesión si se aplican en estructuras frágiles o con fuerza excesiva.", "La pinza Adson puede encontrarse con o sin dientes y se reconoce por su tamaño corto y zona de agarre relativamente ancha. La pinza DeBakey presenta estrías longitudinales finas y un diseño atraumático para manipulación vascular y de tejidos delicados, según indicación. La pinza Allis posee extremos con dientes de agarre y se utiliza para sujetar tejidos firmes que toleran ese tipo de prensión; no es apropiada para manipular indiscriminadamente tejidos frágiles. La pinza Babcock tiene mandíbulas fenestradas y redondeadas, diseñadas para una sujeción más atraumática de estructuras tubulares o delicadas cuando está indicada.", "La pinza Foerster o de anillos permite sujetar gasas o torundas para preparación y otras tareas indicadas; no debe confundirse con una pinza diseñada para tomar directamente tejidos. Las pinzas de campo, como las Backhaus, fijan los campos quirúrgicos cuando el procedimiento lo requiere y sus puntas pueden ser penetrantes."] },
          { heading: "6. Criterios para seleccionar y reconocer el instrumento", bullets: ["Identifica la familia por su función principal: cortar, ocluir, sujetar o fijar.", "Observa longitud, curvatura, forma de las puntas, estriado, dientes, fenestraciones y mecanismo de cierre.", "Relaciona el diseño con la estructura que se manipulará y el grado de trauma que puede producir.", "Confirma nombre, tamaño, compatibilidad y disponibilidad con la tarjeta de instrumental o protocolo del servicio.", "No sustituyas un instrumento especializado por otro de apariencia similar sin validación del equipo quirúrgico."] },
          { heading: "7. Preparación, entrega y prevención de lesiones", paragraphs: ["Antes del procedimiento verifica limpieza, integridad, alineación, filo, articulación y funcionamiento. Separa instrumentos dañados o con cierre irregular y notifícalos para evaluación; no intentes repararlos. Protege puntas y filos durante el traslado y acomodo, y evita sobrecargar la charola.", "Durante la entrega, mantén el control visual del instrumento, comunica su nombre cuando corresponda y utiliza la zona de transferencia definida por el equipo. Los cortopunzantes deben entregarse con técnica segura o mediante zona neutra, de acuerdo con la política institucional. Evita movimientos bruscos, no ocultes instrumentos bajo gasas y mantén el conteo conforme al protocolo.", "Después del uso, el instrumental se coloca en el contenedor designado para material contaminado, con medidas para prevenir punciones y facilitar el reprocesamiento. La limpieza, desinfección o esterilización debe realizarse de acuerdo con las instrucciones del fabricante y el procedimiento validado de la institución."] },
          { heading: "8. Aplicación en laboratorio de simulación", paragraphs: ["En una estación práctica, el estudiante debe identificar cada instrumento, nombrar dos características morfológicas, explicar su función general, señalar una precaución de seguridad y distinguirlo de otro de apariencia semejante. La práctica debe realizarse con instrumental de entrenamiento o material fuera de uso clínico, bajo supervisión docente.", "El reconocimiento visual no autoriza a seleccionar ni utilizar instrumental en una persona. La indicación, manipulación clínica y entrega se realizan dentro de las competencias del estudiante y bajo supervisión del profesional responsable."] },
          { heading: "Atlas visual: corte, hemostasia y prensión", paragraphs: ["Compara las formas esquemáticas de bisturí, tijeras, pinzas hemostáticas y pinzas de prensión. Las ilustraciones son recursos didácticos, no fotografías ni modelos a escala; existen variaciones entre fabricantes."], image: "images/atlas-corte-hemostasia-prension.svg", imageAlt: "Atlas esquemático de hojas de bisturí, tijeras Mayo y Metzenbaum, pinzas hemostáticas y pinzas de prensión." }
        ] },
        { title: "Separadores, portaagujas y material de sutura", summary: "Identificación de instrumentos de exposición, control de agujas y criterios para reconocer suturas y materiales de cierre.", content: [
          { heading: "1. Separadores: finalidad y clasificación", paragraphs: ["Los separadores desplazan tejidos y mantienen la exposición del campo operatorio para facilitar la visualización y el acceso. La fuerza debe ser suficiente para exponer sin generar presión, tracción o compresión innecesarias. La selección considera profundidad, extensión, tipo de tejido, duración de la exposición y abordaje quirúrgico.", "Los separadores manuales son sostenidos por un integrante del equipo. Entre los frecuentes están Farabeuf, Richardson, Deaver y Senn-Miller. Los autoestáticos mantienen la separación mediante un mecanismo de fijación, como Weitlaner, Gelpi y Balfour. La configuración puede variar según fabricante y especialidad."] },
          { heading: "2. Separadores manuales frecuentes", bullets: ["Farabeuf: pequeño, con extremos acodados; se usa en planos superficiales y exposición de tejidos según el procedimiento.", "Richardson: hoja amplia y angulada, disponible en diferentes tamaños; permite retraer tejidos y paredes de la incisión.", "Deaver: hoja larga, ancha y curva, útil para separación profunda y protección de estructuras durante la exposición.", "Senn-Miller: instrumento pequeño con un extremo en pala y otro con dientes o puntas; se utiliza en procedimientos superficiales según modelo.", "La elección debe evitar presión focal excesiva, deslizamiento o tracción sostenida sobre estructuras vulnerables."] },
          { heading: "3. Separadores autoestáticos", paragraphs: ["Weitlaner presenta ramas con dientes o puntas que se abren para mantener separación superficial. Gelpi tiene extremos puntiagudos y diseño articulado para retracción localizada. Balfour es un sistema más amplio, con valvas laterales y, según configuración, una valva central, empleado para mantener abierta una incisión abdominal.", "Antes de colocarlos se comprueba integridad de articulaciones, mecanismo de bloqueo, limpieza y movilidad. Las valvas se ubican bajo visión directa y se ajustan gradualmente. La presión prolongada puede comprometer perfusión o producir lesión por compresión; el equipo debe reevaluar la exposición y la necesidad del separador."] },
          { heading: "4. Portaagujas: estructura y función", paragraphs: ["El portaagujas sostiene y dirige la aguja durante el cierre de tejidos. Suele presentar anillas, cremallera, articulación y mandíbulas cortas con superficies diseñadas para controlar la aguja. El modelo debe corresponder al tamaño y tipo de aguja y a la técnica.", "Mayo-Hegar es un portaagujas robusto de uso general. Olsen-Hegar integra tijeras para cortar sutura, por lo que es importante identificar la zona de corte y no confundirla con las mandíbulas. Mathieu tiene mecanismo de resorte y cierre característico, sin anillas convencionales. Castroviejo es fino, habitualmente con resorte, y se emplea en cirugía delicada y microcirugía.", "La aguja se sujeta en una zona apropiada de su cuerpo, evitando tomarla por la punta o por la unión con el hilo. La orientación y el ángulo dependen de la técnica y anatomía. No se debe deformar la aguja ni utilizar un portaagujas deteriorado o incompatible."] },
          { heading: "5. Agujas quirúrgicas: partes, forma y punta", paragraphs: ["La aguja se describe por tres componentes: punta, cuerpo y zona de unión con el hilo (estampado o ensamblado). El cuerpo puede ser recto o curvo; la curvatura suele expresarse como fracción de circunferencia, por ejemplo 1/4, 3/8, 1/2 o 5/8.", "Las agujas de punta redonda o cónica separan fibras y suelen indicarse en tejidos blandos cuando se requiere menor efecto cortante. Las de corte convencional tienen bordes cortantes y se utilizan en tejidos más resistentes, como piel, cuando están indicadas. Las de corte reverso ubican el tercer borde cortante hacia la cara externa de la curvatura, una configuración frecuente para sutura cutánea. También existen puntas romas y diseños especializados.", "La selección depende del tejido, grosor, acceso y técnica. No debe elegirse solo por longitud o curvatura; hay que reconocer el tipo de punta y comprobar compatibilidad con el portaagujas y la sutura."] },
          { heading: "6. Material de sutura: clasificación", paragraphs: ["Las suturas aproximan tejidos, ligan estructuras o mantienen un cierre durante la reparación. Se clasifican por origen (natural o sintético), estructura (monofilamento o multifilamento/trenzado), comportamiento (absorbible o no absorbible) y calibre. Son propiedades diferentes y no deben confundirse.", "Las absorbibles pierden progresivamente resistencia y se degradan por mecanismos biológicos o hidrólisis, según el material. Se emplean cuando no se requiere soporte permanente. Las no absorbibles mantienen mayor permanencia y pueden retirarse si son externas o permanecer cuando la indicación lo requiere. La duración de soporte y absorción varía entre materiales y fabricantes.", "Los monofilamentos tienen una sola hebra y suelen presentar menor capilaridad, pero pueden tener mayor memoria. Los multifilamentos están formados por varias hebras trenzadas o torcidas; suelen ser flexibles y manejables, aunque su estructura puede favorecer capilaridad. La elección considera infección, tensión, localización, reacción tisular y técnica."] },
          { heading: "7. Calibre, presentación y selección", bullets: ["El calibre se expresa mediante el sistema USP: a mayor número de ceros, menor diámetro; por ejemplo, 4-0 es más fino que 2-0.", "La presentación puede ser con aguja montada (sutura atraumática) o sin aguja para técnicas específicas. Verifica longitud del hilo, tipo de aguja, curvatura, punta, calibre y material.", "La selección considera sitio anatómico, tipo de tejido, contaminación, tensión, tiempo esperado de cicatrización y necesidad de soporte.", "No existe una sutura universal. Sigue la indicación del equipo quirúrgico, el protocolo y las instrucciones del fabricante."] },
          { heading: "8. Preparación, esterilidad y trazabilidad", paragraphs: ["Antes de abrir, revisa identificación, material, calibre, longitud, aguja, lote, fecha de caducidad cuando aplique, integridad del empaque e indicadores. Confirma que el producto corresponda al procedimiento y se encuentre en condiciones de almacenamiento adecuadas.", "Abre con técnica aséptica y entrega sin comprometer la esterilidad. Si el empaque está húmedo, roto o comprometido, el producto no debe utilizarse. El material que haya perdido esterilidad, caído o entrado en contacto con una superficie no estéril debe sustituirse según protocolo. No reutilices suturas ni agujas de un solo uso. Registra lote y datos requeridos por la institución cuando corresponda."] },
          { heading: "9. Seguridad durante la exposición y sutura", bullets: ["Mantén agujas y hojas dentro de una zona de trabajo definida; evita dejarlas ocultas bajo gasas o campos.", "Utiliza zona neutra o técnica de transferencia segura para reducir lesiones por punzocortantes, según política institucional.", "Realiza el conteo de agujas, gasas e instrumental conforme al protocolo y comunica cualquier discrepancia de inmediato.", "No fuerces, endereces ni reutilices una aguja que se deforme o deteriore.", "La selección y aplicación clínica se realiza por el equipo competente y bajo supervisión correspondiente."] },
          { heading: "10. Práctica de laboratorio: estación de reconocimiento", paragraphs: ["El estudiante identificará separadores manuales y autoestáticos, diferenciará modelos de portaagujas, describirá partes y curvatura de agujas y clasificará suturas por absorción, estructura y calibre. Para cada elemento explicará una indicación general y una precaución de seguridad.", "La práctica se realiza con instrumental de entrenamiento, tarjetas o material fuera de uso clínico. El reconocimiento académico no autoriza la selección ni ejecución de suturas en pacientes."] },
          { heading: "Atlas visual: separadores, portaagujas y suturas", paragraphs: ["Compara los diseños de separadores, portaagujas, agujas y materiales de sutura. Los dibujos son esquemáticos y no representan dimensiones reales."], image: "images/atlas-separadores-portaagujas-suturas.svg", imageAlt: "Atlas esquemático de separadores manuales y autoestáticos, portaagujas, agujas y suturas." }
        ] },
        { title: "Mobiliario, equipo y material de consumo", summary: "Mesa quirúrgica, lámpara, electrocirugía, aspiración, anestesia, monitorización y consumibles.", content: [
          { heading: "Mobiliario y equipo", bullets: ["Mesa quirúrgica y accesorios de posicionamiento.", "Lámpara quirúrgica y sistemas de iluminación auxiliar.", "Máquina de anestesia, ventilación y monitorización bajo responsabilidad del equipo correspondiente.", "Unidad de electrocirugía y placa de retorno cuando corresponda.", "Sistema de aspiración, recipientes y tubuladuras.", "Mesas de instrumental, mesas auxiliares y soportes para soluciones."] },
          { heading: "Material de consumo", bullets: ["Gasas, compresas, campos y batas quirúrgicas.", "Guantes estériles y dispositivos de barrera.", "Suturas, hojas de bisturí y dispositivos de cierre.", "Soluciones y antisépticos aprobados para el procedimiento.", "Drenajes, sondas, catéteres y apósitos según indicación.", "Contenedores para punzocortantes y residuos conforme a clasificación."] },
          { heading: "Comprobación y trazabilidad", paragraphs: ["Antes del procedimiento se confirma disponibilidad, integridad, compatibilidad y funcionamiento. Se verifica la esterilidad del empaque, indicadores, fecha o vigencia aplicable, lote y condiciones de almacenamiento. Las fallas se reportan y el material dudoso se retira del uso."] }
        ] }
      ]}
    ]
  },
  {
    title: "Unidad 3. Asepsia, esterilización y manejo del campo estéril",
    topics: [
      { title: "Principios de prevención de infección quirúrgica", lessons: [
        { title: "Asepsia quirúrgica y técnica estéril", summary: "Principios para conservar la esterilidad de materiales, superficies y campos.", content: [
          { heading: "Fundamento", paragraphs: ["La técnica estéril busca evitar la introducción de microorganismos en tejidos, cavidades o sitios que deben permanecer protegidos durante un procedimiento. Se basa en preparación adecuada, uso de material procesado, barreras estériles, manipulación correcta y vigilancia continua del campo.", "La esterilidad de un objeto depende de un proceso validado y de que el empaque y almacenamiento conserven su integridad. La apariencia limpia no demuestra esterilidad."] },
          { heading: "Principios esenciales", bullets: ["Solo material estéril entra en contacto con el campo estéril.", "Los bordes del campo y las superficies por debajo del nivel establecido se consideran contaminados según la técnica enseñada.", "Mantener el campo a la vista y evitar abandonarlo o darle la espalda.", "La humedad puede permitir transferencia microbiana; un campo mojado o con empaque comprometido se considera contaminado.", "Ante duda razonable sobre esterilidad, no utilizar el material.", "La ruptura de técnica se comunica y corrige inmediatamente, reemplazando los elementos afectados."] }
        ] },
        { title: "Lavado quirúrgico, vestido y enguantado", summary: "Preparación de manos y colocación de bata y guantes estériles mediante técnica aprobada.", content: [
          { heading: "Preparación", paragraphs: ["La preparación quirúrgica de manos reduce la flora transitoria y disminuye la flora residente antes de colocarse bata y guantes estériles. Puede realizarse mediante lavado con antiséptico o preparación quirúrgica con solución alcohólica aprobada, siguiendo exactamente las instrucciones del producto y el protocolo institucional.", "Se retiran joyas y accesorios de manos y muñecas, se mantienen uñas naturales cortas y se evita el uso de uñas artificiales conforme a las políticas de prevención de infecciones. Las lesiones cutáneas deben notificarse y manejarse de acuerdo con el protocolo."] },
          { heading: "Vestido y enguantado", bullets: ["Realizar preparación quirúrgica de manos y antebrazos con la técnica y tiempo establecidos.", "Mantener manos por encima de los codos durante el lavado y permitir secado completo cuando corresponda.", "Secar con toalla estéril sin regresar sobre áreas ya secadas.", "Colocar bata estéril evitando contacto con superficies no estériles.", "Colocar guantes mediante técnica cerrada o abierta según el momento y protocolo.", "Si se contamina una zona, detenerse y cambiar bata o guantes según corresponda."] }
        ] },
        { title: "Empaques, indicadores y conservación de esterilidad", summary: "Verificación del material estéril, integridad del empaque, indicadores y almacenamiento.", content: [
          { heading: "Verificación antes de abrir", bullets: ["Comprobar integridad del empaque, sellos y ausencia de humedad, perforaciones o aperturas.", "Revisar identificación del contenido, lote y datos de trazabilidad disponibles.", "Comprobar indicadores químicos y liberación del proceso según el sistema institucional.", "Respetar condiciones de almacenamiento y vigencia definidas por el fabricante y la institución.", "No utilizar paquetes cuya esterilidad sea dudosa o cuyo indicador no cumpla los criterios establecidos."] },
          { heading: "Apertura y transferencia", paragraphs: ["La apertura debe permitir presentar el contenido sin tocarlo ni contaminarlo. Se aplica la técnica de apertura y transferencia enseñada por el servicio, manteniendo distancia y orientación apropiadas. El material abierto se considera sujeto a control continuo; no debe dejarse sin vigilancia ni mezclarse con material no estéril."] }
        ] }
      ]},
      { title: "Procesamiento del instrumental", lessons: [
        { title: "Limpieza, desinfección y esterilización del instrumental", summary: "Etapas del reprocesamiento y responsabilidades del personal.", content: [
          { heading: "Secuencia general", bullets: ["Pretratamiento y traslado seguro del material usado.", "Recepción y clasificación en el área de descontaminación.", "Limpieza manual o automatizada según instrucciones del fabricante.", "Inspección de limpieza, integridad y funcionalidad.", "Preparación, empaque y selección del método compatible.", "Esterilización o desinfección de alto nivel cuando esté indicada.", "Liberación, almacenamiento y distribución con trazabilidad."] },
          { heading: "Puntos críticos", paragraphs: ["La materia orgánica residual puede impedir la eficacia del proceso. La limpieza es indispensable antes de la desinfección o esterilización. Los parámetros, ciclos y controles dependen del dispositivo, método, equipo y normas aplicables; el estudiante no debe improvisar concentraciones, tiempos o temperaturas.", "Los dispositivos complejos, articulados o con lúmenes requieren procedimientos específicos y cumplimiento estricto de las instrucciones del fabricante. El material de un solo uso no debe reprocesarse salvo que exista autorización regulatoria y un proceso institucional permitido."] }
        ] },
        { title: "Métodos de esterilización y control del proceso", summary: "Vapor, baja temperatura, controles físicos, químicos y biológicos.", content: [
          { heading: "Métodos", paragraphs: ["El vapor saturado bajo presión es un método ampliamente utilizado para materiales compatibles y correctamente preparados. Existen métodos de baja temperatura para dispositivos sensibles al calor o humedad, como determinados procesos con peróxido de hidrógeno u otras tecnologías autorizadas. La elección depende de compatibilidad, validación y especificaciones del fabricante."] },
          { heading: "Monitoreo", bullets: ["Controles físicos: parámetros registrados por el equipo durante el ciclo.", "Indicadores químicos: evidencian exposición a determinadas condiciones del proceso, pero no sustituyen otros controles.", "Indicadores biológicos: evalúan la capacidad del proceso para inactivar microorganismos de prueba y se utilizan según la política de control.", "Trazabilidad: relaciona carga, ciclo, equipo, fecha, operador, controles y destino del material."] }
        ] }
      ]}
    ]
  },
  {
    title: "Unidad 4. Equipo quirúrgico y cirugía segura",
    topics: [
      { title: "Integrantes y funciones del equipo", lessons: [
        { title: "Enfermera instrumentista y enfermera circulante", summary: "Responsabilidades, coordinación y límites de actuación en el entorno quirúrgico.", content: [
          { heading: "Enfermería instrumentista", bullets: ["Prepara y organiza la mesa de instrumental y el campo estéril.", "Comprueba integridad y disponibilidad del instrumental y material requerido.", "Participa en el conteo de gasas, compresas, agujas e instrumental conforme al protocolo.", "Entrega instrumental anticipándose a la secuencia del procedimiento sin perder el control del campo.", "Vigila la técnica estéril y comunica de inmediato cualquier contaminación o discrepancia."] },
          { heading: "Enfermería circulante", bullets: ["Coordina actividades no estériles y facilita recursos durante la intervención.", "Verifica identidad, documentación, sitio y procedimiento junto con el equipo.", "Colabora en posicionamiento, seguridad, preparación de piel y conexión de equipos dentro de sus competencias.", "Realiza registros, gestiona muestras y apoya conteos junto con instrumentista.", "Mantiene comunicación con áreas de apoyo y vigila condiciones de seguridad."] },
          { heading: "Trabajo en equipo", paragraphs: ["Las funciones se distribuyen según la formación, acreditación, competencias y políticas del establecimiento. La comunicación debe ser clara, confirmada y respetuosa. Cualquier integrante puede expresar una preocupación de seguridad y solicitar pausa cuando detecte una discrepancia."] }
        ] },
        { title: "Roles del equipo interdisciplinario", summary: "Cirujano, anestesiología, enfermería, personal técnico y apoyo.", content: [
          { heading: "Coordinación", paragraphs: ["El equipo quirúrgico puede incluir cirujano, ayudantes, anestesiólogo, enfermería instrumentista, circulante, personal técnico y otros profesionales según el procedimiento. Cada integrante tiene responsabilidades definidas; la seguridad depende de coordinación, comunicación, respeto mutuo y reconocimiento de límites profesionales."] },
          { heading: "Comunicación segura", bullets: ["Utilizar identificación inequívoca del paciente y del procedimiento.", "Confirmar verbalmente indicaciones críticas, alergias y riesgos.", "Comunicar cambios hemodinámicos, fallas de equipo y eventos inesperados.", "Evitar conversaciones ajenas al procedimiento durante momentos críticos.", "Realizar entrega estructurada al área de recuperación."] }
        ] }
      ]},
      { title: "Verificación y prevención de eventos adversos", lessons: [
        { title: "Lista de verificación de cirugía segura", summary: "Pausas de seguridad antes de anestesia, antes de incisión y antes de salir de quirófano.", content: [
          { heading: "Tres momentos", bullets: ["Entrada o antes de la inducción anestésica: confirmar identidad, procedimiento, sitio, consentimiento, marcaje cuando aplique, evaluación de vía aérea, alergias, riesgo de sangrado y equipo.", "Pausa quirúrgica antes de la incisión: presentación del equipo, confirmación conjunta del paciente, procedimiento y sitio, anticipación de eventos críticos, profilaxis y disponibilidad de imágenes.", "Salida antes de que el paciente abandone la sala: confirmar procedimiento realizado, conteos, identificación de muestras, problemas de equipo y plan de recuperación."] },
          { heading: "Uso efectivo", paragraphs: ["La lista debe realizarse de forma verbal y participativa, con atención del equipo y oportunidad para resolver discrepancias. No es un trámite de firmas ni debe completarse de memoria sin comunicación. Se utiliza la versión institucional vigente y se adapta al procedimiento sin eliminar verificaciones esenciales."] }
        ] },
        { title: "Conteo quirúrgico, muestras y prevención de errores", summary: "Conteos, trazabilidad, identificación de muestras y comunicación de discrepancias.", content: [
          { heading: "Conteo", paragraphs: ["Los conteos de gasas, compresas, agujas e instrumental se realizan en los momentos definidos por el protocolo, con participación de los responsables. Deben ser audibles, visibles y documentados. Si existe discrepancia, se informa inmediatamente y se activa el procedimiento institucional; no se continúa como si el conteo fuera correcto."] },
          { heading: "Muestras", bullets: ["Confirmar identificación del paciente y origen anatómico de la muestra.", "Verbalizar nombre, sitio, lateralidad y estudio solicitado.", "Seleccionar recipiente y medio de conservación conforme a la prueba.", "Etiquetar de acuerdo con la política institucional, idealmente en presencia de quien verifica.", "Documentar entrega y traslado con trazabilidad."] }
        ] }
      ]}
    ]
  },
  {
    title: "Unidad 5. Atención de enfermería perioperatoria",
    topics: [
      { title: "Etapa preoperatoria", lessons: [
        { title: "Valoración y preparación preoperatoria", summary: "Valoración integral, verificación de requisitos, educación y preparación física y emocional.", content: [
          { heading: "Valoración", bullets: ["Confirmar identidad, procedimiento, sitio y consentimiento conforme a política.", "Revisar antecedentes, alergias, medicamentos, ayuno indicado y estudios disponibles.", "Valorar estado respiratorio, cardiovascular, neurológico, nutricional, piel, movilidad y dolor.", "Identificar riesgos de sangrado, tromboembolia, infección, lesión por presión y dificultades de vía aérea.", "Valorar ansiedad, comprensión, apoyos, barreras de comunicación y necesidades culturales."] },
          { heading: "Preparación", paragraphs: ["La preparación incluye educación, apoyo emocional, higiene y preparación de piel según protocolo, retiro o resguardo de objetos cuando esté indicado, verificación de dispositivos y documentación. Las indicaciones sobre ayuno, medicamentos, profilaxis y preparación intestinal dependen de la cirugía, condición clínica y prescripción; no deben generalizarse ni modificarse por iniciativa del estudiante."] }
        ] },
        { title: "Consentimiento, expediente y traslado seguro", summary: "Verificación documental, derechos del paciente y continuidad de información.", content: [
          { heading: "Consentimiento informado", paragraphs: ["El consentimiento informado es un proceso de comunicación y decisión libre, no solo una firma. El profesional autorizado explica naturaleza, beneficios, riesgos, alternativas y consecuencias relevantes. Enfermería verifica que el documento y proceso estén disponibles conforme a la política y comunica dudas o ausencia de consentimiento antes de continuar."] },
          { heading: "Traslado", bullets: ["Utilizar identificadores institucionales y confirmar destino.", "Entregar información relevante: alergias, riesgos, dispositivos, preparación, medicamentos y pendientes.", "Asegurar barandales, frenos, oxígeno y monitorización cuando estén indicados.", "Mantener privacidad, abrigo y acompañamiento según condición.", "Documentar entrega-recepción."] }
        ] }
      ]},
      { title: "Etapa transoperatoria", lessons: [
        { title: "Recepción, posicionamiento y vigilancia", summary: "Identificación, prevención de lesiones, preparación de piel y colaboración durante la cirugía.", content: [
          { heading: "Recepción y verificación", paragraphs: ["Al recibir al paciente se realiza una transferencia estructurada, se confirma identidad y se revisan procedimiento, sitio, alergias, ayuno indicado, documentación y riesgos. Las discrepancias se resuelven antes de avanzar."] },
          { heading: "Posicionamiento", bullets: ["Seleccionar posición según procedimiento, anestesia y condición del paciente.", "Proteger prominencias óseas y puntos de presión con dispositivos adecuados.", "Evitar hiperextensión, compresión nerviosa, tracción y limitación circulatoria.", "Comprobar alineación, fijación segura y acceso a monitorización.", "Reevaluar y documentar según protocolo, especialmente ante cambios de posición."] }
        ] },
        { title: "Vigilancia intraoperatoria y documentación", summary: "Apoyo a la seguridad, control de material, muestras, registros y respuesta ante cambios.", content: [
          { heading: "Vigilancia y colaboración", paragraphs: ["Durante la cirugía enfermería mantiene control del entorno, disponibilidad de recursos, integridad del campo, conteos, trazabilidad de muestras y comunicación. La monitorización fisiológica y administración de anestésicos corresponden a los profesionales responsables, con colaboración del equipo según sus competencias."] },
          { heading: "Registro", bullets: ["Documentar tiempos y datos requeridos por el formato institucional.", "Registrar equipo, material, soluciones, dispositivos y muestras conforme al protocolo.", "Anotar incidentes, acciones correctivas y comunicación al equipo.", "Evitar registros retrospectivos no identificados o datos no verificados."] }
        ] }
      ]},
      { title: "Etapa posoperatoria inmediata", lessons: [
        { title: "Recuperación postanestésica y entrega", summary: "Recepción estructurada, valoración ABCDE, vigilancia y criterios de escalamiento.", content: [
          { heading: "Recepción y valoración", paragraphs: ["La transferencia a recuperación debe incluir procedimiento realizado, tipo de anestesia, antecedentes relevantes, alergias, pérdidas estimadas, líquidos y medicamentos administrados, dispositivos, drenajes, muestras, incidencias y plan inmediato. La valoración inicial prioriza vía aérea, respiración, circulación, estado neurológico, temperatura, dolor, náusea y herida."] },
          { heading: "Vigilancia", bullets: ["Mantener monitorización y frecuencia de valoración conforme a condición y protocolo.", "Identificar obstrucción de vía aérea, hipoventilación, hipoxemia o deterioro del estado de conciencia.", "Vigilar sangrado, perfusión, dolor, náusea, temperatura y eliminación.", "Comprobar permeabilidad y fijación de accesos, sondas y drenajes.", "Escalar de inmediato signos de deterioro o complicaciones."] }
        ] }
      ]}
    ]
  },
  {
    title: "Unidad 6. Procedimientos y técnicas quirúrgicas frecuentes",
    topics: [
      { title: "Procedimientos básicos y manejo de heridas", lessons: [
        { title: "Tiempos quirúrgicos e instrumental asociado", summary: "Diéresis, hemostasia, exposición, disección y síntesis como secuencia didáctica.", content: [
          { heading: "Tiempos quirúrgicos", bullets: ["Diéresis o incisión: apertura de tejidos con bisturí o tijeras según técnica.", "Hemostasia: control del sangrado mediante métodos mecánicos, térmicos, químicos u otros indicados.", "Exposición: separación y retracción de tejidos para visualizar el campo.", "Disección: separación cuidadosa de planos y estructuras anatómicas.", "Síntesis: aproximación y cierre de tejidos mediante suturas, grapas u otros dispositivos."] },
          { heading: "Relación con el instrumental", paragraphs: ["La secuencia orienta la preparación y anticipación del instrumental, pero los tiempos pueden variar, repetirse o combinarse según el procedimiento. El estudiante debe identificar el instrumental asociado y comprender los principios de seguridad, sin realizar maniobras invasivas fuera de su competencia o supervisión."] }
        ] },
        { title: "Suturas, grapas, drenajes y apósitos", summary: "Tipos, indicaciones generales, vigilancia y cuidados de enfermería.", content: [
          { heading: "Suturas y dispositivos de cierre", paragraphs: ["Las suturas pueden clasificarse por absorción, origen, estructura y calibre. También se utilizan grapas, adhesivos tisulares y tiras de aproximación. La elección depende de tejido, tensión, contaminación, técnica y criterio del equipo quirúrgico. Enfermería verifica material, integridad, identificación y cuidados posteriores."] },
          { heading: "Drenajes", paragraphs: ["Los drenajes permiten evacuar aire, sangre, exudado u otros líquidos según indicación. Pueden ser abiertos o cerrados, pasivos o activos. Los cuidados incluyen mantener fijación, permeabilidad según protocolo, sistema por debajo del sitio cuando corresponda, medición y registro de características y volumen, y vigilancia de dolor, fuga, obstrucción o desplazamiento. No se manipulan ni irrigan sin indicación y competencia."] },
          { heading: "Herida quirúrgica", bullets: ["Valorar apósito, integridad, sangrado, exudado, dolor, edema y cambios en piel circundante.", "Realizar curación con técnica indicada y material apropiado.", "Mantener higiene de manos y técnica aséptica según riesgo.", "Educar sobre cuidado, higiene, actividad y signos de infección o dehiscencia.", "Documentar hallazgos y comunicar cambios relevantes."] }
        ] }
      ]},
      { title: "Procedimientos por especialidad", lessons: [
        { title: "Cirugía abdominal y digestiva", summary: "Principios de apendicectomía, colecistectomía, hernioplastia y cuidados asociados.", content: [
          { heading: "Panorama general", paragraphs: ["Los procedimientos abdominales pueden ser abiertos o mínimamente invasivos. La apendicectomía, colecistectomía y reparación de hernias son ejemplos frecuentes. La indicación, técnica y evolución dependen del diagnóstico, condición clínica y valoración del equipo quirúrgico."] },
          { heading: "Cuidados de enfermería", bullets: ["Valorar dolor, náusea, distensión, tolerancia oral y recuperación de la función intestinal según procedimiento.", "Vigilar herida, drenajes, sangrado, temperatura y signos de infección.", "Favorecer movilización temprana y ejercicios respiratorios cuando estén indicados.", "Identificar dolor creciente, vómito persistente, fiebre, distensión progresiva o deterioro general y comunicarlo.", "Proporcionar educación para el alta y seguimiento."] }
        ] },
        { title: "Cirugía traumatológica, vascular y de tejidos blandos", summary: "Principios de osteosíntesis, amputación, desbridamiento y cirugía vascular.", content: [
          { heading: "Cuidados y vigilancia", bullets: ["Valorar dolor, edema, color, temperatura, sensibilidad, movilidad y perfusión distal.", "Vigilar apósitos, sangrado, inmovilización, yesos y dispositivos.", "Identificar cambios neurovasculares, síndrome compartimental sospechado o deterioro de perfusión y escalar de inmediato.", "Prevenir caídas, lesiones por presión y complicaciones de inmovilidad.", "Respetar restricciones de carga y movilidad prescritas."] }
        ] },
        { title: "Cirugía ginecológica, urológica y mínimamente invasiva", summary: "Principios de procedimientos frecuentes, dispositivos y cuidados posteriores.", content: [
          { heading: "Cuidados de enfermería", bullets: ["Proteger privacidad, intimidad y trato digno.", "Vigilar dolor, sangrado, eliminación urinaria y características de drenajes.", "Observar signos de infección, retención urinaria o complicaciones relacionadas con anestesia.", "Verificar indicaciones sobre movilización, dieta, dispositivos y seguimiento.", "Ofrecer educación clara y sensible, respetando preferencias y contexto de la persona."] }
        ] }
      ]}
    ]
  },
  {
    title: "Unidad 7. Complicaciones y continuidad del cuidado quirúrgico",
    topics: [
      { title: "Complicaciones perioperatorias", lessons: [
        { title: "Complicaciones respiratorias, cardiovasculares y hemorrágicas", summary: "Reconocimiento temprano de deterioro y respuesta inicial dentro de competencias.", content: [
          { heading: "Complicaciones respiratorias", bullets: ["Obstrucción de vía aérea, hipoventilación, hipoxemia, broncoaspiración y atelectasia.", "Valorar frecuencia y esfuerzo respiratorio, saturación, coloración, nivel de conciencia y permeabilidad de vía aérea.", "Ante deterioro, solicitar ayuda, activar respuesta institucional y seguir indicaciones del equipo responsable."] },
          { heading: "Complicaciones cardiovasculares y hemorrágicas", bullets: ["Hipotensión, hipertensión, arritmias, choque y hemorragia.", "Vigilar pulso, presión arterial, perfusión, estado mental, diuresis y sangrado.", "Reconocer cambios bruscos o tendencias desfavorables y comunicarlos sin demora.", "No retrasar la activación de respuesta por completar registros o trámites."] }
        ] },
        { title: "Infección, tromboembolia, dolor y alteraciones de la herida", summary: "Prevención, vigilancia, educación y detección de signos de alarma.", content: [
          { heading: "Complicaciones", bullets: ["Infección del sitio quirúrgico: eritema progresivo, calor, dolor creciente, secreción purulenta o fiebre, según contexto.", "Dehiscencia y evisceración: separación de bordes o exposición de tejidos; requieren respuesta inmediata según protocolo.", "Tromboembolia venosa: dolor o edema unilateral y, ante embolia pulmonar, disnea súbita, dolor torácico o hipoxemia.", "Dolor no controlado, náusea, vómito, retención urinaria, íleo y alteraciones hidroelectrolíticas."] },
          { heading: "Prevención y respuesta", paragraphs: ["La prevención integra movilización y profilaxis indicadas, medidas de higiene, técnica aséptica, vigilancia de heridas, hidratación y manejo del dolor según prescripción. Ante signos de alarma se realiza valoración inmediata, se solicita ayuda y se sigue el protocolo institucional. Las intervenciones farmacológicas y procedimientos se ejecutan únicamente dentro de competencias y órdenes autorizadas."] }
        ] }
      ]},
      { title: "Alta, educación y continuidad", lessons: [
        { title: "Educación para el alta posquirúrgica", summary: "Autocuidado, tratamiento, herida, actividad, alimentación, seguimiento y signos de alarma.", content: [
          { heading: "Educación centrada en la persona", bullets: ["Explicar cuidados de herida y apósitos según indicación.", "Revisar medicamentos, dosis, horarios, precauciones y conciliación con el plan prescrito.", "Orientar sobre actividad, movilización, alimentación y restricciones específicas.", "Indicar cuidado de drenajes o dispositivos si la persona egresa con ellos.", "Confirmar citas, resultados pendientes y vías de contacto.", "Enseñar signos de alarma y cuándo acudir a urgencias.", "Verificar comprensión con la técnica de repetición con palabras propias."] },
          { heading: "Continuidad del cuidado", paragraphs: ["La entrega de información debe ser comprensible, accesible y congruente con el procedimiento realizado. Se consideran alfabetización en salud, idioma, discapacidad, apoyos y recursos disponibles. La educación se registra y se adapta cuando la persona o cuidador requiere demostración o refuerzo."] }
        ] }
      ]}
    ]
  }
];
medicoQuirurgica.resources = [];
medicoQuirurgica.activities = [
  "Unidad 1 · Elaborar un plano funcional del área quirúrgica y clasificar zonas, accesos y circuitos de circulación.",
  "Unidad 2 · Estaciones de identificación de instrumental: nombrar, clasificar por función, describir partes y justificar cuidados.",
  "Unidad 3 · Demostrar apertura de paquetes, preparación de campo y reconocimiento de rupturas de técnica estéril en simulación.",
  "Unidad 4 · Simular la lista de verificación de cirugía segura, conteos y entrega-recepción mediante comunicación estructurada.",
  "Unidad 5 · Resolver un caso perioperatorio integrando valoración, preparación, traslado, vigilancia y recuperación.",
  "Unidad 6 · Resolver estaciones de tiempos quirúrgicos, suturas, drenajes y cuidados de heridas mediante material didáctico y simuladores.",
  "Unidad 7 · Analizar casos de complicaciones posoperatorias y priorizar acciones de enfermería y escalamiento."
];
medicoQuirurgica.evaluation = [
  "Evaluación diagnóstica sobre fundamentos de enfermería, anatomía, fisiología, bioseguridad y farmacología.",
  "Cuestionarios de aplicación y razonamiento clínico al cierre de cada unidad.",
  "Listas de cotejo para reconocimiento de instrumental, técnica estéril, seguridad quirúrgica y cuidados perioperatorios.",
  "Rúbricas para simulación de roles, comunicación, conteos, entrega-recepción y respuesta ante complicaciones.",
  "Caso integrador: planificación del cuidado de una persona desde la preparación preoperatoria hasta el alta.",
  "Criterios sugeridos: seguridad y bioseguridad (30%), razonamiento clínico (25%), ejecución técnica simulada (20%), comunicación y registro (15%) y profesionalismo (10%)."
];
medicoQuirurgica.bibliography = [
  "Association of periOperative Registered Nurses. (2025). Guidelines for Perioperative Practice. AORN.",
  "World Health Organization. (2009). WHO Guidelines for Safe Surgery 2009: Safe Surgery Saves Lives. https://iris.who.int/handle/10665/44185",
  "World Health Organization. (2016). Global Guidelines for the Prevention of Surgical Site Infection (2nd ed.). https://www.who.int/publications/i/item/9789241549882",
  "World Health Organization. (2018). Implementation Manual: WHO Surgical Safety Checklist 2009. https://www.who.int/publications/i/item/9789241598590",
  "Association for the Advancement of Medical Instrumentation. (2017). ANSI/AAMI ST79: Comprehensive Guide to Steam Sterilization and Sterility Assurance in Health Care Facilities.",
  "Phillips, N. (Ed.). (2021). Berry & Kohn's Operating Room Technique (14th ed.). Elsevier.",
  "Rothrock, J. C. (Ed.). (2023). Alexander's Care of the Patient in Surgery (17th ed.). Elsevier.",
  "Secretaría de Salud. Consultar la normativa mexicana vigente aplicable a infraestructura, equipamiento, expediente clínico, prevención de infecciones, esterilización, RPBI y seguridad del paciente.",
  "Los procedimientos clínicos deben ajustarse a guías vigentes, instrucciones del fabricante, competencias profesionales y protocolos de cada institución."
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
      {
        title: "Concepto, valoración y principios de posicionamiento",
        summary: "Propósito de las posiciones, valoración previa, alineación corporal, protección de piel y seguridad.",
        content: [
          { heading: "Concepto e importancia", paragraphs: ["Una posición terapéutica es la colocación planificada de la persona para favorecer una función, facilitar una valoración o procedimiento, mejorar el confort o disminuir riesgos. La selección depende de la condición clínica, tolerancia, indicación y protocolo institucional.", "El posicionamiento forma parte del cuidado integral: no consiste únicamente en colocar el cuerpo, sino en valorar antes, preparar el entorno, proteger dispositivos, vigilar la respuesta y documentar."] },
          { heading: "Valoración previa", bullets: ["Identificar conciencia, comprensión, colaboración, movilidad, fuerza, equilibrio y capacidad para mantener la postura.", "Valorar dolor, disnea, circulación, sensibilidad, integridad de la piel y riesgo de caída o lesión por presión.", "Revisar restricciones médicas, quirúrgicas, ortopédicas y dispositivos como oxígeno, sondas, catéteres y drenajes.", "Explicar el procedimiento, solicitar colaboración y consentimiento, proteger intimidad y preparar personal y ayudas necesarias."] },
          { heading: "Principios de seguridad", bullets: ["Mantener alineación de cabeza, columna, pelvis y extremidades; evitar torsiones e hiperextensiones.", "Distribuir la presión y proteger prominencias óseas con apoyos adecuados, sin comprimir nervios ni vasos.", "Verificar frenos, estabilidad de cama, barandales indicados y accesibilidad del timbre.", "Reevaluar respiración, circulación, dolor, piel y tolerancia después del cambio. Individualizar la frecuencia de cambios posturales."] }
        ]
      },
      {
        title: "Posiciones anatómicas y de exploración",
        summary: "Decúbito supino, prono, lateral, Sims, litotomía y genupectoral: definición, colocación y usos frecuentes.",
        content: [
          { heading: "Decúbito supino o dorsal", paragraphs: ["La persona permanece acostada boca arriba, con cabeza y tronco alineados y extremidades en posición cómoda. Se utiliza para reposo, valoración de la región anterior, exploración abdominal inicial y diversos cuidados en cama."] },
          { heading: "Decúbito prono o ventral", paragraphs: ["La persona permanece acostada boca abajo, con cabeza girada o apoyada de acuerdo con el equipo y la indicación. Puede utilizarse para valorar la región posterior y, en pacientes críticos seleccionados, como estrategia respiratoria bajo protocolo especializado. Requiere vigilancia de vía aérea, ojos, piel, dispositivos y tolerancia."] },
          { heading: "Decúbito lateral", paragraphs: ["La persona se recuesta sobre uno de sus lados, con cabeza, hombros, pelvis y piernas alineados. Se utiliza para descanso, higiene, cuidados de espalda y redistribución de presión; se selecciona el lado de acuerdo con la condición clínica."] },
          { heading: "Posición de Sims", paragraphs: ["Es una variante semiprona, habitualmente sobre el lado izquierdo, con el tronco ligeramente inclinado hacia delante y la pierna superior más flexionada que la inferior. Se emplea en determinados enemas, exploraciones rectales y cuidados perineales cuando está indicada."] },
          { heading: "Litotomía o ginecológica", paragraphs: ["Parte de decúbito dorsal, con caderas y rodillas flexionadas, muslos separados y piernas sostenidas en estribos o soportes acolchados. Se utiliza en exploraciones ginecológicas y procedimientos urológicos u obstétricos seleccionados. Debe evitarse la abducción o flexión forzada y vigilar presión, circulación y sensibilidad de las extremidades."] },
          { heading: "Genupectoral", paragraphs: ["La persona se apoya sobre rodillas y parte anterior del tórax, con caderas elevadas y cabeza girada o apoyada. Se utiliza en algunas exploraciones rectales o procedimientos específicos cuando el profesional lo indica y la persona lo tolera."] }
        ]
      },
      {
        title: "Posiciones con cabecera elevada e inclinación de cama",
        summary: "Fowler baja, semi-Fowler, Fowler alta, ortopneica, Trendelenburg y anti-Trendelenburg; indicaciones y precauciones.",
        content: [
          { heading: "Fowler y variantes", bullets: ["Fowler baja: cabecera elevada aproximadamente 15–30 grados.", "Semi-Fowler: cabecera elevada aproximadamente 30–45 grados.", "Fowler alta: cabecera elevada aproximadamente 60–90 grados, con apoyo adecuado del tronco y extremidades.", "Los ángulos son referencias didácticas; pueden variar según la cama, condición, tolerancia y protocolo."] },
          { heading: "Usos frecuentes", paragraphs: ["Las variantes Fowler pueden favorecer confort, descanso, expansión torácica y actividades como alimentación o comunicación. La elevación del tronco puede reducir riesgo de aspiración en situaciones clínicas concretas, por ejemplo durante y después de alimentación enteral, de acuerdo con indicación y protocolo.", "La posición ortopneica es una postura sentada con inclinación anterior y brazos apoyados sobre una mesa o almohadas. Puede aliviar la disnea en algunas personas al facilitar el uso de músculos accesorios; no sustituye la valoración ni el tratamiento de la causa."] },
          { heading: "Trendelenburg y anti-Trendelenburg", paragraphs: ["Trendelenburg coloca a la persona en decúbito supino con la cabeza más baja que los pies. Anti-Trendelenburg inclina el plano en sentido contrario, con la cabeza más alta que los pies. Ambas requieren una indicación concreta y vigilancia de tolerancia respiratoria, hemodinámica, neurológica y riesgo de deslizamiento.", "Trendelenburg no debe utilizarse de manera rutinaria para tratar hipotensión o choque. La decisión corresponde al equipo clínico y al protocolo institucional."] },
          { heading: "Reevaluación y registro", bullets: ["Detener y revalorar ante disnea nueva, dolor, mareo, palidez, sudoración, pérdida de equilibrio o intolerancia.", "Registrar posición, motivo, hora, apoyos, estado de piel y dispositivos, tolerancia, respuesta e incidencias.", "Individualizar los cambios posturales; no existe una frecuencia única apropiada para todas las personas."] }
        ]
      }
    ],
    resources: [
      "Posiciones terapéuticas · Guía completa de estudio::/materiales/fundamentos-de-enfermeria/apuntes/posiciones-terapeuticas-guia.html",
      "Posiciones terapéuticas · Atlas ilustrado integrado::/materiales/fundamentos-de-enfermeria/presentaciones/presentacion-atlas-posiciones-terapeuticas.html",
      "Posiciones terapéuticas · Presentación navegable::/materiales/fundamentos-de-enfermeria/presentaciones/presentacion-posiciones-terapeuticas.html",
      "Posiciones terapéuticas · Taller práctico y lista de cotejo::/materiales/fundamentos-de-enfermeria/actividades/practica-posiciones-terapeuticas.html",
      "Posiciones terapéuticas · Autoevaluación interactiva::/materiales/fundamentos-de-enfermeria/actividades/autoevaluacion-posiciones-terapeuticas.html",
    ],
  },
];

fundamentos.units[2].title = "Unidad 3. Valoración, documentación y continuidad del cuidado";
fundamentos.units[2].topics = [
  {
    title: "Signos vitales",
    lessons: [
      {
        title: "Fundamentos, homeostasis y valoración integral",
        summary: "Concepto, importancia clínica, sistemas de regulación, retroalimentación, momentos de valoración y documentación de seis parámetros.",
        content: [
          { heading: "Parámetros de valoración", bullets: ["Temperatura corporal: balance entre termogénesis y termólisis.", "Pulso y frecuencia cardiaca: actividad eléctrica y mecánica cardiaca y onda arterial.", "Frecuencia respiratoria: ventilación y patrón respiratorio.", "Presión arterial: interacción entre gasto cardiaco y resistencia vascular.", "SpO₂: estimación no invasiva de saturación periférica de hemoglobina.", "Dolor: experiencia sensorial y emocional que requiere valoración sistemática."] },
          { heading: "Homeostasis", paragraphs: ["La homeostasis mantiene relativamente estables las condiciones del medio interno. Un sistema de regulación incluye receptor, centro integrador y efector. La retroalimentación negativa contrarresta el cambio inicial; los sistemas nervioso autónomo, endocrino, cardiovascular, respiratorio y renal participan en la regulación.", "Los valores deben interpretarse según edad, estado basal, contexto, síntomas, medicamentos, técnica y tendencia. Una cifra aislada no sustituye la valoración integral."] },
          { heading: "Momentos de valoración", bullets: ["Al ingreso para establecer una línea basal.", "En intervalos indicados por condición clínica y protocolo.", "Ante síntomas nuevos o cambios del estado general.", "Antes y después de procedimientos, intervenciones o medicamentos que puedan modificar parámetros.", "Para valorar respuesta al tratamiento y antes de traslado o egreso cuando corresponda."] }
        ]
      },
      {
        title: "Temperatura corporal: producción, pérdida y regulación",
        summary: "Termogénesis, termólisis, hipotálamo, mecanismos de transferencia de calor, factores modificadores, fiebre, hipertermia, hipotermia y técnica.",
        content: [
          { heading: "Regulación", paragraphs: ["La temperatura depende del equilibrio entre producción y pérdida de calor. El hipotálamo integra información de termorreceptores centrales y periféricos. Ante el frío activa vasoconstricción y temblor; ante el calor favorece vasodilatación cutánea y sudoración."] },
          { heading: "Mecanismos", bullets: ["Producción: metabolismo basal, actividad muscular, temblor, hormonas tiroideas y catecolaminas.", "Pérdida: radiación, conducción, convección y evaporación.", "Factores modificadores: edad, ritmo circadiano, ejercicio, hormonas, estrés, ambiente, hidratación y enfermedad."] },
          { heading: "Alteraciones y medición", paragraphs: ["Fiebre implica elevación regulada del punto de ajuste hipotalámico; hipertermia es acumulación excesiva de calor sin elevar dicho punto de ajuste. Hipotermia se define como temperatura central menor de 35 °C. Los sitios oral, axilar, timpánico, temporal y rectal tienen limitaciones propias; siempre se registra el sitio y dispositivo utilizado."] }
        ]
      },
      {
        title: "Pulso y frecuencia cardiaca: automatismo y conducción",
        summary: "Nodo sinoauricular, sistema de conducción, sístole, diástole, gasto cardiaco, regulación autonómica, sitios anatómicos, técnica y alteraciones.",
        content: [
          { heading: "Fisiología", paragraphs: ["El nodo sinoauricular inicia normalmente el impulso eléctrico. La conducción por nodo auriculoventricular, haz de His y fibras de Purkinje coordina la contracción. La frecuencia cardiaca multiplicada por el volumen sistólico determina el gasto cardiaco."] },
          { heading: "Regulación y factores", bullets: ["Simpático: aumenta frecuencia, conducción y contractilidad.", "Parasimpático: reduce frecuencia y conducción AV.", "Factores: edad, ejercicio, fiebre, dolor, estrés, postura, hidratación, medicamentos, hipoxemia y cardiopatías."] },
          { heading: "Técnica y características", paragraphs: ["Valorar frecuencia, ritmo, amplitud, simetría y sitio. Palpar con índice y medio, nunca con el pulgar. El pulso irregular, débil o discrepante requiere valoración ampliada y, cuando proceda, auscultación apical y comparación apical-radial."] },
          { heading: "Referencias y alteraciones", bullets: ["Adulto en reposo: referencia orientativa 60–100 lpm.", "Taquicardia: frecuencia mayor de 100 lpm en adulto en reposo.", "Bradicardia: frecuencia menor de 60 lpm en adulto; valorar contexto.", "Arritmia, déficit de pulso y pulso filiforme requieren interpretación clínica."] }
        ]
      },
      {
        title: "Frecuencia respiratoria: mecánica y control neural",
        summary: "Ventilación, músculos respiratorios, centros bulbares y pontinos, quimiorreceptores, patrones respiratorios, alteraciones y técnica de enfermería.",
        content: [
          { heading: "Mecánica y regulación", paragraphs: ["La contracción del diafragma aumenta el volumen torácico y permite la inspiración. Redes del bulbo y puente modulan el patrón respiratorio. Los quimiorreceptores centrales responden principalmente a cambios relacionados con CO₂ y pH; los periféricos detectan cambios de PaO₂, PaCO₂ y pH."] },
          { heading: "Técnica y características", bullets: ["Observar discretamente y contar ciclos completos durante un minuto si el ritmo es irregular o existe preocupación.", "Valorar frecuencia, ritmo, profundidad, esfuerzo, simetría, músculos accesorios y capacidad para hablar.", "Adulto en reposo: referencia orientativa 12–20 rpm."] },
          { heading: "Alteraciones", paragraphs: ["Reconocer taquipnea, bradipnea, apnea, disnea, ortopnea, hiperpnea y patrones Kussmaul, Cheyne-Stokes y Biot/atáxica. El tiraje, agotamiento, cianosis, alteración de conciencia o dificultad intensa requieren respuesta inmediata."] }
        ]
      },
      {
        title: "Presión arterial: regulación hemodinámica y técnica",
        summary: "Gasto cardiaco, resistencia vascular, barorreflejo, sistema renina-angiotensina-aldosterona, medición automatizada validada y auscultatoria, y criterios PRONAM 2026.",
        content: [
          { heading: "Determinantes fisiológicos", paragraphs: ["La presión arterial depende principalmente del gasto cardiaco y la resistencia vascular sistémica. Barorreceptores ajustan rápidamente la respuesta autonómica; riñón, sistema renina-angiotensina-aldosterona, ADH y endotelio participan en la regulación sostenida."] },
          { heading: "Medición precisa", bullets: ["Reposo previo, ambiente tranquilo y sin conversar.", "Espalda y pies apoyados; piernas sin cruzar.", "Brazo descubierto y apoyado a nivel del corazón.", "Manguito seleccionado según circunferencia del brazo y dispositivo validado.", "Registrar brazo, posición, equipo, cifras, hora y condiciones."] },
          { heading: "Interpretación normativa", paragraphs: ["No diagnosticar hipertensión con una sola lectura aislada. Para clasificación diagnóstica y decisiones de atención en adultos, consultar el Protocolo Nacional de Atención Médica de Hipertensión Arterial Sistémica vigente. No citar NOM-030-SSA2-2009 como única referencia actual sin verificar su situación normativa."] }
        ]
      },
      {
        title: "SpO₂: transporte de oxígeno y oximetría de pulso",
        summary: "Hemoglobina, transporte de oxígeno, principio óptico, técnica, factores de error, limitaciones e interpretación contextual.",
        content: [
          { heading: "Fundamento", paragraphs: ["La SpO₂ estima el porcentaje de hemoglobina arterial pulsátil saturada con oxígeno. No equivale a PaO₂, PaCO₂, ventilación ni contenido total de oxígeno. La entrega tisular también depende de hemoglobina y gasto cardiaco."] },
          { heading: "Técnica y limitaciones", bullets: ["Seleccionar sensor compatible, verificar colocación y esperar señal estable.", "Valorar movimiento, perfusión, temperatura, esmalte, luz ambiental y concordancia del pulso.", "Carboxihemoglobina y metahemoglobina pueden producir lecturas engañosas.", "Registrar SpO₂, pulso, sitio y uso de oxígeno suplementario, dispositivo y flujo cuando corresponda."] },
          { heading: "Interpretación", paragraphs: ["En adultos sanos a nivel del mar suelen observarse valores de 95–100%, pero la interpretación depende de altitud, enfermedad, perfusión y objetivo terapéutico. Una cifra aparentemente normal no excluye hipercapnia, anemia o entrega tisular deficiente."] }
        ]
      },
      {
        title: "Dolor: fisiología, escalas y valoración de enfermería",
        summary: "Nocicepción, transmisión y modulación, clasificación del dolor, valoración OPQRST, escalas y reevaluación.",
        content: [
          { heading: "Fisiología y clasificación", paragraphs: ["El dolor es una experiencia sensorial y emocional personal. La nocicepción comprende transducción, transmisión, percepción y modulación. Se clasifica, entre otros criterios, en agudo o crónico y nociceptivo, neuropático o nociplástico."] },
          { heading: "Valoración OPQRST", bullets: ["Provocación/paliación: qué lo inicia, agrava o alivia.", "Calidad: punzante, quemante, opresivo, eléctrico, cólico, etc.", "Región e irradiación.", "Severidad: escala apropiada.", "Tiempo: inicio, duración, frecuencia y evolución.", "Impacto funcional, sueño, movilidad, apetito y respuesta a intervenciones."] },
          { heading: "Escalas y registro", paragraphs: ["Preferir autoinforme cuando la persona puede comunicar. Seleccionar escala numérica, visual, de rostros u observacional validada según edad y capacidad. Registrar localización y puntuación, intervención, respuesta y efectos adversos. La NOM-004-SSA3-2012 incluye la valoración del dolor (localización y escala) en la hoja de enfermería."] }
        ]
      },
      {
        title: "Valoración integrada, registro y comunicación",
        summary: "Integración de seis parámetros, tendencias, errores frecuentes, signos de alarma y documentación conforme al expediente clínico.",
        content: [
          { heading: "Registro", bullets: ["Fecha y hora.", "Temperatura, sitio y dispositivo.", "Frecuencia cardiaca, sitio y ritmo cuando proceda.", "Frecuencia respiratoria y características.", "Presión arterial, brazo y posición.", "SpO₂, sitio y soporte de oxígeno.", "Dolor: localización, escala y puntuación.", "Intervenciones, notificaciones, respuesta y observaciones."] },
          { heading: "Seguridad clínica", paragraphs: ["Integrar cifras con síntomas, apariencia, perfusión y estado neurológico. Ante dolor torácico nuevo, disnea importante, síncope, alteración de conciencia, signos de choque o deterioro rápido, priorizar respuesta y comunicación sobre completar mecánicamente el registro."] }
        ]
      }
    ],
    resources: [
      "Signos vitales · Guía completa de estudio::/materiales/fundamentos-de-enfermeria/apuntes/signos-vitales-guia.html",
      "Signos vitales · Presentación navegable::/materiales/fundamentos-de-enfermeria/presentaciones/presentacion-signos-vitales.html",
      "Signos vitales · Infografía de los seis parámetros::/materiales/fundamentos-de-enfermeria/imagenes/seis-parametros-signos-vitales.svg",
      "Signos vitales · Práctica de laboratorio y lista de cotejo::/materiales/fundamentos-de-enfermeria/actividades/practica-signos-vitales.html",
      "Signos vitales · Autoevaluación interactiva::/materiales/fundamentos-de-enfermeria/actividades/autoevaluacion-signos-vitales.html",
      "NOM-004-SSA3-2012 · Expediente clínico::https://www.dof.gob.mx/nota_detalle.php?codigo=5272787",
      "PRONAM 2026 · Hipertensión arterial sistémica (2.ª edición)::https://dof.gob.mx/2026/CSG/PRONAM_Hipertension_arterial_sistemica.pdf",
      "Manual de técnicas de enfermería 2026 · Hospital General de México::https://hgm.salud.gob.mx/interna/dirmed/MANUAL_DE_TECNICAS_2026.pdf",
      "GPC IMSS-796-16 · Valoración y manejo del dolor agudo en niñas y niños de 3 a 6 años::https://www.imss.gob.mx/sites/all/statics/guiasclinicas/796GER.pdf"
    ],
  },
  {
    title: "Somatometría y exploración física",
    lessons: [
      {
        title: "Fundamentos y técnicas de somatometría",
        summary: "Peso, talla, IMC y perímetros: equipo, técnica, interpretación y registro.",
        content: [
          { heading: "Propósito", paragraphs: ["La somatometría mide dimensiones y proporciones corporales para establecer una línea basal, vigilar cambios y apoyar la valoración integral. Sus resultados no deben interpretarse de forma aislada."] },
          { heading: "Peso y talla", bullets: ["Verificar báscula nivelada y equipo funcional; explicar el procedimiento y asegurar estabilidad.", "Medir talla con estadímetro, sin calzado y con alineación corporal cuando sea posible.", "Registrar kg, cm o m, fecha, hora, método y limitaciones.", "Si la persona no puede ponerse de pie, usar equipo o método alternativo validado; no improvisar ni estimar sin documentarlo."] },
          { heading: "Índice de masa corporal", paragraphs: ["IMC = peso en kg / talla en metros al cuadrado. Ejemplo: 70 kg / 1.70² = 24.2 kg/m². En adultos no gestantes se utilizan puntos de corte de referencia de la OMS; no son aplicables de forma automática a niñas, niños, adolescentes, embarazo ni todas las personas mayores. El IMC es una herramienta de tamizaje, no un diagnóstico ni una medición directa de grasa corporal."] },
          { heading: "Perímetros", bullets: ["Seleccionar perímetro abdominal/cintura, cefálico, braquial u otro según edad y propósito.", "Utilizar cinta no extensible en el punto anatómico estandarizado, horizontal y sin comprimir tejidos.", "Documentar el sitio, técnica, unidad y referencia utilizada; los puntos de corte dependen de población y guía clínica."] }
        ]
      },
      {
        title: "Técnicas de exploración física",
        summary: "Inspección, palpación, percusión y auscultación, con secuencia y aplicación por regiones.",
        content: [
          { heading: "Inspección", paragraphs: ["Observación sistemática con iluminación adecuada y comparación bilateral cuando proceda. Valora apariencia, coloración, forma, simetría, movimiento, lesiones y esfuerzo respiratorio."] },
          { heading: "Palpación", paragraphs: ["Exploración mediante manos y dedos para valorar temperatura, textura, humedad, dolor, pulsos, masas, edema y movilidad. La presión superficial o profunda depende del objetivo, competencia y condición de la persona."] },
          { heading: "Percusión", paragraphs: ["Golpes breves y controlados sobre la superficie corporal o un dedo apoyado para producir sonidos que orientan sobre aire, líquido o densidad de estructuras. Requiere entrenamiento y correlación clínica."] },
          { heading: "Auscultación", paragraphs: ["Escucha de sonidos corporales con estetoscopio en puntos y secuencia apropiados, por ejemplo ruidos cardiacos, respiratorios, intestinales o vasculares."] },
          { heading: "Secuencia especial del abdomen", paragraphs: ["En abdomen se utiliza inspección, auscultación, percusión y palpación, porque la manipulación puede modificar los ruidos intestinales. En otras regiones se adapta la secuencia al propósito de la valoración."] }
        ]
      },
      {
        title: "Preparación, valoración y registro",
        summary: "Privacidad, consentimiento, bioseguridad, razonamiento clínico y documentación objetiva.",
        content: [
          { heading: "Preparación", bullets: ["Verificar identidad, explicar propósito y procedimiento, solicitar consentimiento y respetar intimidad y preferencias.", "Realizar higiene de manos, aplicar precauciones estándar y preparar equipo limpio y funcional.", "Valorar dolor, movilidad, riesgo de caída, estado general y necesidad de asistencia; no forzar posturas."] },
          { heading: "Registro", paragraphs: ["Documentar fecha, hora, unidades, sitio, método, equipo o limitaciones relevantes. Distinguir datos referidos por la persona de hallazgos observados. Evitar expresiones vagas y no inventar datos ausentes."] },
          { heading: "Seguridad", bullets: ["Detener la valoración ante dolor intenso, disnea, mareo, pérdida de equilibrio o intolerancia.", "Integrar los hallazgos con antecedentes, síntomas, signos vitales y tendencias.", "Comunicar oportunamente hallazgos anormales o signos de alarma conforme al protocolo institucional."] }
        ]
      }
    ],
    resources: [
      "Somatometría y exploración física · Guía completa de estudio::/materiales/fundamentos-de-enfermeria/apuntes/somatometria-exploracion-fisica-guia.html",
      "Somatometría y exploración física · Presentación navegable::/materiales/fundamentos-de-enfermeria/presentaciones/presentacion-somatometria-exploracion-fisica.html",
      "Somatometría y exploración física · Infografía::/materiales/fundamentos-de-enfermeria/imagenes/somatometria-exploracion-infografia.svg",
      "Somatometría y exploración física · Taller práctico y lista de cotejo::/materiales/fundamentos-de-enfermeria/actividades/practica-somatometria-exploracion.html",
      "Somatometría y exploración física · Autoevaluación interactiva::/materiales/fundamentos-de-enfermeria/actividades/autoevaluacion-somatometria.html",
      "OMS · Obesidad y sobrepeso: conceptos y criterios de referencia::https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"
    ],
  },
  {
    title: "Admisión, estancia y egreso hospitalario",
    lessons: [
      {
        title: "Admisión y recepción segura",
        summary: "Identificación, trato digno, valoración inicial, detección de riesgos y orientación.",
        content: [
          { heading: "Recepción", bullets: ["Recibir con trato digno, lenguaje claro y respeto a privacidad, cultura y preferencias.", "Verificar identidad con los identificadores institucionales; nunca utilizar el número de cama como identificador.", "Confirmar documentación e indicación de ingreso según el proceso institucional.", "Orientar sobre habitación, timbre, medidas de seguridad, pertenencias y normas relevantes."] },
          { heading: "Valoración inicial", bullets: ["Valorar estado general, conciencia, dolor, movilidad, riesgo de caída, piel, dispositivos y necesidades inmediatas.", "Identificar alergias referidas, necesidades de comunicación, idioma, discapacidad y apoyos.", "Registrar valoración, pertenencias, dispositivos, información recibida y acciones realizadas."] },
          { heading: "Prioridad clínica", paragraphs: ["Ante urgencia o deterioro, priorizar respuesta clínica y activar el sistema correspondiente. Los trámites administrativos no deben retrasar la atención urgente."] }
        ]
      },
      {
        title: "Estancia hospitalaria y continuidad del cuidado",
        summary: "Plan individualizado, vigilancia, seguridad, comunicación y entrega-recepción.",
        content: [
          { heading: "Cuidados durante la estancia", bullets: ["Ejecutar y reevaluar el plan individualizado.", "Vigilar cambios clínicos, dolor, signos vitales, piel, movilidad y necesidades de la persona.", "Aplicar identificación correcta, higiene de manos, precauciones estándar y prevención de caídas.", "Conciliar y administrar medicamentos conforme a prescripción, competencias y procedimientos.", "Involucrar a la persona y familia autorizada respetando confidencialidad."] },
          { heading: "Entrega-recepción", paragraphs: ["Transmitir identificación, motivo de ingreso, situación actual, antecedentes relevantes, alergias, medicamentos, riesgos, dispositivos, pendientes y plan inmediato. Utilizar el formato institucional, por ejemplo SBAR/SAER cuando esté adoptado."] },
          { heading: "Documentación", paragraphs: ["Registrar cuidados, respuesta, incidencias, notificaciones y cambios del plan de manera oportuna, objetiva, legible y atribuible al profesional."] }
        ]
      },
      {
        title: "Egreso y continuidad después de la hospitalización",
        summary: "Preparación anticipada, educación, conciliación, signos de alarma, referencias y registro.",
        content: [
          { heading: "Planificación del egreso", bullets: ["Confirmar tipo de egreso, indicación y autorización clínica conforme al proceso institucional.", "Valorar condición, movilidad, apoyos, dispositivos y comprensión.", "Revisar indicaciones y conciliación de medicamentos con información autorizada.", "Explicar cuidados, citas, referencias, seguimiento y signos de alarma.", "Comprobar comprensión mediante repetición con palabras propias (teach-back).", "Verificar documentos, pertenencias, destino y transporte seguro."] },
          { heading: "Tipos de egreso", bullets: ["Alta a domicilio: educación, cuidados, medicamentos, citas y apoyos.", "Traslado o referencia: coordinación con unidad receptora, resumen clínico y transporte apropiado.", "Retiro voluntario: respetar derechos, informar riesgos y alternativas por el profesional responsable y documentar conforme a normativa y política.", "Defunción: actuar con respeto, privacidad y sensibilidad, siguiendo protocolo institucional."] },
          { heading: "Registro", paragraphs: ["Documentar fecha y hora, condición, educación, documentos entregados, destino, comunicación y salida efectiva. La integración documental se rige por la NOM-004-SSA3-2012 y demás disposiciones aplicables."] }
        ]
      }
    ],
    resources: [
      "Admisión, estancia y egreso · Guía completa de estudio::/materiales/fundamentos-de-enfermeria/apuntes/admision-estancia-egreso-guia.html",
      "Admisión, estancia y egreso · Presentación navegable::/materiales/fundamentos-de-enfermeria/presentaciones/presentacion-admision-estancia-egreso.html",
      "Admisión, estancia y egreso · Infografía de continuidad del cuidado::/materiales/fundamentos-de-enfermeria/imagenes/ruta-admision-estancia-egreso.svg",
      "Admisión, estancia y egreso · Taller práctico y lista de cotejo::/materiales/fundamentos-de-enfermeria/actividades/practica-admision-estancia-egreso.html",
      "Admisión, estancia y egreso · Autoevaluación interactiva::/materiales/fundamentos-de-enfermeria/actividades/autoevaluacion-admision-estancia-egreso.html",
      "NOM-004-SSA3-2012 · Del expediente clínico::https://www.dof.gob.mx/nota_detalle.php?codigo=5272787"
    ],
  },
  {
    title: "Expediente clínico y registros de enfermería",
    lessons: [
      {
        title: "Concepto, propósito y alcance",
        summary: "Definición del expediente clínico, importancia para la continuidad del cuidado y campo de aplicación de la NOM-004-SSA3-2012.",
        content: [
          { heading: "Concepto", paragraphs: ["El expediente clínico es el conjunto único de información y datos personales de una persona usuaria, integrado en un establecimiento de atención médica. Puede contener documentos escritos, gráficos, imagenológicos, electrónicos y otros soportes en los que se registra la atención otorgada.", "Es una herramienta clínica, legal, ética, administrativa y de comunicación. Favorece continuidad, seguridad, evaluación de la atención y coordinación interdisciplinaria. No es un simple archivo de formatos: debe reflejar de manera cronológica y coherente la atención realmente proporcionada."] },
          { heading: "Marco normativo", paragraphs: ["En México, la NOM-004-SSA3-2012 establece criterios obligatorios para la elaboración, integración, uso, manejo, archivo, conservación, propiedad, titularidad y confidencialidad del expediente clínico. Debe consultarse el texto oficial y la normativa complementaria aplicable al tipo de establecimiento y servicio."] },
          { heading: "Principios de uso", bullets: ["Identificar correctamente a la persona y vincular cada registro con su atención.", "Documentar hechos, valoraciones, intervenciones y respuestas que efectivamente ocurrieron.", "Mantener orden cronológico, legibilidad, oportunidad y trazabilidad.", "Proteger datos personales y limitar el acceso a personas autorizadas.", "No sustituir el juicio profesional ni los protocolos institucionales por formatos prellenados."] }
        ]
      },
      {
        title: "Integración y confidencialidad",
        summary: "Organización documental, conservación y protección de la información de la persona usuaria.",
        content: [
          { heading: "Integración", paragraphs: ["El contenido del expediente depende del tipo de atención y de los servicios prestados. Puede integrar datos de identificación, historia clínica, notas médicas, notas de enfermería, indicaciones, resultados de laboratorio y gabinete, interconsultas, consentimientos informados y documentos de referencia o egreso, según corresponda."] },
          { heading: "Acceso y confidencialidad", bullets: ["Consultar únicamente expedientes necesarios para las funciones asignadas.", "Evitar comentar información clínica en espacios públicos o canales no autorizados.", "No fotografiar, copiar ni compartir datos identificables sin autorización y fundamento institucional.", "Resguardar pantallas, impresiones, contraseñas y documentos físicos.", "Entregar información solo a la persona usuaria, representante o autoridad que corresponda conforme a la normativa."] },
          { heading: "Conservación y manejo", paragraphs: ["El establecimiento debe aplicar las reglas de archivo, conservación, custodia y seguridad que correspondan. En sistemas electrónicos deben protegerse los accesos, la integridad, la disponibilidad y la trazabilidad de las modificaciones. El estudiante debe trabajar con expedientes simulados o datos debidamente desidentificados en actividades académicas."] }
        ]
      },
      {
        title: "Registros de enfermería",
        summary: "Análisis del numeral 9.1: habitus exterior, signos vitales, ministración de medicamentos, procedimientos y observaciones.",
        content: [
          { heading: "Contenido mínimo aplicable", paragraphs: ["La NOM-004-SSA3-2012, en el apartado 9.1, establece elementos para la hoja de enfermería. Entre ellos se encuentran el habitus exterior, la gráfica de signos vitales, ministración de medicamentos con fecha, hora, cantidad y vía prescrita, procedimientos realizados y observaciones. Deben revisarse además los requisitos generales de las notas y los formatos institucionales vigentes."] },
          { heading: "Cómo redactar", bullets: ["Registrar en el momento de la atención o tan pronto como sea posible conforme al procedimiento institucional.", "Utilizar lenguaje claro, objetivo, preciso y términos aceptados.", "Distinguir lo referido por la persona de lo observado o medido.", "Anotar valores con unidades, fecha, hora y contexto cuando corresponda.", "Describir intervención, respuesta y comunicación realizada; evitar juicios, etiquetas o suposiciones.", "Identificar al autor del registro con los datos y firma que establezca la normativa y el sistema institucional."] },
          { heading: "Ejemplo educativo", paragraphs: ["Registro objetivo simulado: “08:15 h. Persona alerta, responde coherentemente. Refiere dolor 4/10 en región… Se mide PA…, FC…, FR…, temperatura… Se coloca en posición de confort y se informa al profesional responsable. Se revalora a las…”. Los datos deben corresponder a una situación ficticia de aprendizaje; nunca copiar información real de pacientes."] }
        ]
      },
      {
        title: "Calidad y responsabilidad documental",
        summary: "Legibilidad, oportunidad, objetividad, autoría, trazabilidad y actuación ante omisiones o errores de registro.",
        content: [
          { heading: "Criterios de calidad", bullets: ["Exactitud: el registro corresponde a lo ocurrido y medido.", "Integridad: incluye los datos requeridos sin omisiones deliberadas.", "Oportunidad: se realiza en el tiempo establecido.", "Legibilidad y claridad: permite comprender quién hizo qué, cuándo y cuál fue la respuesta.", "Trazabilidad: permite identificar al autor y las modificaciones autorizadas.", "Confidencialidad: mantiene protegida la información.", "Conforme a la NOM-004-SSA3-2012, las notas deben incluir fecha, hora, nombre completo y firma de quien las elabora; redactarse en lenguaje técnico-médico, sin abreviaturas, con letra legible y sin enmendaduras ni tachaduras."] },
          { heading: "Corrección de errores", paragraphs: ["No borrar, ocultar, alterar ni falsificar registros. Si existe un error, seguir el mecanismo de corrección establecido por la normativa y el sistema institucional, conservando la trazabilidad. Las anotaciones tardías o aclaraciones deben identificarse como tales y nunca simular que se hicieron en otro momento."] },
          { heading: "Responsabilidad profesional", paragraphs: ["La documentación forma parte del cuidado y de la responsabilidad profesional. Registrar una intervención no realizada o copiar notas sin verificar puede comprometer la seguridad de la persona y la integridad del expediente. Ante dudas, consultar al docente o responsable y el procedimiento vigente."] }
        ]
      },
    ],
    resources: [
      "Expediente clínico · Guía de estudio::/materiales/expediente-clinico-guia.html",
      "Expediente clínico · Presentación didáctica::/materiales/presentacion-expediente-clinico.html",
      "Expediente clínico · Evaluación interactiva::/materiales/evaluacion-expediente-clinico.html",
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
  "Unidad 2 · Practica la selección y colocación de posiciones terapéuticas en simulador; identifica definición, usos, apoyos, riesgos y criterios de reevaluación.",
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
  "Secretaría de Salud. (2009, 20 de noviembre). NOM-045-SSA2-2005, Para la vigilancia epidemiológica, prevención y control de las infecciones nosocomiales. Diario Oficial de la Federación. Norma vigente hasta que se publique la disposición que la sustituya. https://platiica.economia.gob.mx/normalizacion/nom-045-ssa2-2005/",
  "Secretaría de Salud. (2026). PROY-NOM-045-SSA-2026, Para la vigilancia epidemiológica, prevención y control de las infecciones asociadas a la atención de la salud. Proyecto sometido a consulta pública; no citar como norma vigente. https://dof.gob.mx/normasOficiales/9547/salud/salud.html",
  "Los procedimientos deberán contrastarse con las normas vigentes, las instrucciones de los fabricantes y los protocolos de cada institución antes de su aplicación clínica.",
  "Organización Mundial de la Salud. (2009). WHO Guidelines on Hand Hygiene in Health Care. https://iris.who.int/handle/10665/44102",
  "Secretaría de Salud de la Ciudad de México. (2015). Técnicas específicas de enfermería: apartado de curaciones. https://www.salud.cdmx.gob.mx/storage/app/media/uploaded-files/3te005tecnicasespecificasdeenfermeria.pdf",
  "Secretaría de Salud de la Ciudad de México. (2014). Manual de procedimientos: manejo de la pinza de traslado (pinza de Bard-Parker). https://data.salud.cdmx.gob.mx/ssdf/portalut/archivo/Actualizaciones/3erTrimestre19/Dir_Juridico_Norma/TEUQ.pdf",
  "Instituto Mexicano del Seguro Social. Procedimientos de enfermería: cuidados de las heridas, clave 2250-003-002. https://www.imss.gob.mx/sites/all/statics/pdf/procedimientos/2250-003-002.pdf",
  "Consejo de Salubridad General. (2026). Protocolo Nacional de Atención Médica: Hipertensión Arterial Sistémica. https://pronamsalud.csg.gob.mx/",
  "Hospital General de México Dr. Eduardo Liceaga. (2026). Manual de técnicas de enfermería. https://hgm.salud.gob.mx/interna/dirmed/MANUAL_DE_TECNICAS_2026.pdf",
  "Instituto Mexicano del Seguro Social. (2016). Intervenciones de enfermería para la valoración y manejo del dolor agudo en pacientes de 3 a 6 años (GPC IMSS-796-16). https://www.imss.gob.mx/sites/all/statics/guiasclinicas/796GER.pdf",
  "Centers for Disease Control and Prevention. (2024). Standard Precautions for All Patient Care. https://www.cdc.gov/infection-control/hcp/basics/standard-precautions.html",
  "European Pressure Ulcer Advisory Panel, National Pressure Injury Advisory Panel, & Pan Pacific Pressure Injury Alliance. (2019). Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline.",
  "Comisión Federal para la Protección contra Riesgos Sanitarios. (2025). Residuos peligrosos biológico-infecciosos: NOM-087-SEMARNAT-SSA1-2002 (estado vigente). https://www.gob.mx/cofepris/acciones-y-programas/residuos-peligrosos-biologico-infecciosos",
];
