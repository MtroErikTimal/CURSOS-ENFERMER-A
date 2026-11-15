export type TopicQuizQuestion = {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  success: string;
  suggestion: string;
};

export const topicQuizzes: Record<string, TopicQuizQuestion[]> = {
  "Clasificación y reconocimiento del material": [
    { prompt: "¿Qué característica permite reconocer principalmente una pinza hemostática?", options: ["Un mango eléctrico y una placa de retorno", "Mandíbulas y mecanismo de cierre que permiten ocluir temporalmente", "Una pala ancha para mantener tejidos separados", "Una hoja intercambiable para realizar incisiones"], answer: 1, explanation: "Las pinzas hemostáticas tienen mandíbulas y un mecanismo de cierre que permite mantener una presión controlada sobre la estructura indicada.", success: "¡Excelente! Identificaste la función de la familia hemostática.", suggestion: "Repasa las características de las mandíbulas y el mecanismo de cierre de las pinzas hemostáticas." },
    { prompt: "¿Cuál es la diferencia funcional general entre tijeras Metzenbaum y Mayo?", options: ["Las Metzenbaum suelen destinarse a disección y tejido delicado; las Mayo a tejido más resistente o material, según modelo y técnica", "Las Mayo son exclusivamente para sutura y las Metzenbaum para hueso", "Ambas son idénticas y siempre intercambiables", "Las Metzenbaum se utilizan para ocluir vasos"], answer: 0, explanation: "La distinción didáctica habitual considera Metzenbaum para disección y corte delicado, y Mayo para tejidos más resistentes o material. La indicación concreta depende de la técnica y del modelo.", success: "¡Muy bien! Diferenciaste dos tijeras frecuentes por su uso general.", suggestion: "Compara robustez de las ramas y finalidad de cada tijera; evita asumir que son intercambiables." },
    { prompt: "¿Qué instrumento está diseñado para sujetar la aguja durante la sutura?", options: ["Pinza Foerster", "Separador Farabeuf", "Portaagujas", "Pinza mosquito"], answer: 2, explanation: "El portaagujas sujeta la aguja de sutura para permitir su conducción controlada a través del tejido.", success: "¡Correcto! Reconociste el instrumental de síntesis.", suggestion: "Repasa la diferencia entre portaagujas, pinzas de prensión y pinzas hemostáticas." },
    { prompt: "Durante la revisión de una pinza se observa desalineación de las puntas y cierre irregular. ¿Qué debe hacerse?", options: ["Ajustarla manualmente y usarla", "Retirarla del uso y reportarla para evaluación conforme al proceso institucional", "Usarla solo para tejidos blandos", "Colocarla en la charola sin avisar"], answer: 1, explanation: "La desalineación y el cierre irregular comprometen la función. El instrumento debe retirarse y reportarse; no se improvisan reparaciones.", success: "¡Excelente decisión de seguridad! Detectaste una condición que impide el uso confiable.", suggestion: "La inspección funcional forma parte de la preparación; el instrumental defectuoso no debe utilizarse." },
    { prompt: "¿Cuál es una práctica segura al manipular instrumental cortante o punzante?", options: ["Dejarlo oculto bajo una compresa", "Orientar la punta hacia la palma para controlarlo", "Mantenerlo visible y manipularlo con orientación segura y comunicación clara", "Pasarlo rápidamente sin advertir al receptor"], answer: 2, explanation: "La visibilidad, la orientación segura y la comunicación reducen el riesgo de lesiones y errores durante la manipulación.", success: "¡Muy bien! Priorizaste la seguridad del equipo quirúrgico.", suggestion: "Repasa las precauciones para filos y puntas, la entrega controlada y la organización de la mesa." }
  ],
  "Concepto, objetivos y estructura del área quirúrgica": [
    {
      prompt: "¿Cuál enunciado describe mejor a la unidad quirúrgica?",
      options: ["Es únicamente la sala donde se realiza la incisión", "Es un conjunto organizado de áreas, servicios, personal y equipo para la atención pre, trans y posquirúrgica", "Es un almacén de instrumental estéril", "Es un área exclusiva para recuperación anestésica"],
      answer: 1,
      explanation: "La unidad quirúrgica integra espacios y recursos para la atención durante los periodos preoperatorio, transoperatorio y posoperatorio.",
      success: "¡Excelente! Comprendiste que la unidad quirúrgica es un sistema de atención y no solo una sala.",
      suggestion: "Repasa la definición de unidad quirúrgica de la NOM-016-SSA3-2012 y reconoce sus áreas y servicios relacionados."
    },
    {
      prompt: "¿Cuál es el propósito principal de controlar los accesos y la circulación en el área quirúrgica?",
      options: ["Reducir el tiempo de limpieza exclusivamente", "Evitar que el personal conozca otras áreas", "Disminuir tránsito innecesario y cruces entre circuitos, protegiendo al paciente y las condiciones de asepsia", "Mantener cerradas todas las puertas incluso durante una emergencia"],
      answer: 2,
      explanation: "El acceso controlado y la circulación organizada reducen oportunidades de contaminación y facilitan el funcionamiento seguro.",
      success: "¡Muy bien! Relacionaste la circulación con la prevención de riesgos.",
      suggestion: "Recuerda que el control de circulación protege al paciente, al personal y al material; no es una medida administrativa aislada."
    },
    {
      prompt: "Según la NOM-016-SSA3-2012, ¿qué se entiende por unidad quirúrgica?",
      options: ["Un espacio destinado solo al almacenamiento de ropa", "El conjunto de servicios, áreas y locales con infraestructura y equipo para la atención pre, trans y posquirúrgica", "La central de esterilización exclusivamente", "Un área de consulta externa"],
      answer: 1,
      explanation: "La norma define la unidad quirúrgica como un conjunto de servicios, áreas y locales con infraestructura y equipamiento para la atención en los periodos pre, trans y posquirúrgicos.",
      success: "¡Correcto! Identificaste la definición normativa de unidad quirúrgica.",
      suggestion: "Consulta el numeral 4.26 de la NOM-016-SSA3-2012 y vuelve a relacionar la definición con las áreas que la integran."
    },
    {
      prompt: "Durante la verificación previa se detecta que el sistema de aspiración no funciona. ¿Qué conducta es más segura?",
      options: ["Iniciar y solicitar apoyo si se necesita", "Sustituirlo con cualquier equipo disponible sin verificar", "Informar al responsable y resolver la falla antes de iniciar, de acuerdo con el protocolo", "Ignorar la falla si el paciente está estable"],
      answer: 2,
      explanation: "La disponibilidad de equipo funcional forma parte de la preparación segura. Las fallas deben comunicarse y resolverse antes del procedimiento, conforme al protocolo.",
      success: "¡Excelente criterio de seguridad! Reconociste que una falla crítica debe atenderse antes de iniciar.",
      suggestion: "Repasa la responsabilidad de enfermería en la verificación del entorno y el equipo, así como los límites de actuación."
    },
    {
      prompt: "¿Qué debe hacerse con el instrumental después de utilizarse?",
      options: ["Regresarlo directamente al almacén estéril", "Colocarlo en el circuito y contenedor definidos para material usado y reprocesamiento", "Mezclarlo con material limpio para ahorrar traslados", "Dejarlo en la sala hasta el siguiente procedimiento"],
      answer: 1,
      explanation: "El material usado debe manejarse de forma segura y trasladarse por la ruta institucional hacia descontaminación y reprocesamiento.",
      success: "¡Muy bien! Diferenciaste el circuito del material estéril del circuito del material utilizado.",
      suggestion: "Repasa el flujo del material y la separación entre material limpio, estéril y contaminado."
    }
  ],
  "Asepsia y antisepsia": [
    {
      prompt: "Durante una curación, un paquete de material estéril se humedece antes de abrirlo. ¿Cómo debe considerarse?",
      options: ["Continúa estéril si el empaque está cerrado", "Se considera contaminado y debe reemplazarse", "Puede secarse y utilizarse", "Solo se cambia si tiene suciedad visible"],
      answer: 1,
      explanation: "La humedad puede permitir el paso de microorganismos a través del empaque; el material debe considerarse contaminado.",
      success: "¡Muy bien! Identificaste una condición que compromete la esterilidad.",
      suggestion: "Recuerda que la humedad puede favorecer la contaminación del contenido, aunque el empaque parezca íntegro."
    },
    {
      prompt: "¿En qué se diferencia principalmente un antiséptico de un desinfectante?",
      options: ["El antiséptico se aplica en tejidos vivos y el desinfectante en objetos o superficies", "Ambos se aplican exclusivamente en instrumental", "El desinfectante se utiliza en piel y el antiséptico en pisos", "No existe diferencia entre ambos"],
      answer: 0,
      explanation: "La antisepsia se realiza en tejidos vivos; la desinfección se aplica a objetos y superficies inanimadas.",
      success: "¡Excelente! Diferenciaste correctamente dos conceptos fundamentales.",
      suggestion: "Asocia antisepsia con tejidos vivos y desinfección con objetos o superficies."
    }
  ],
  "RPBI y manejo de muestras biológicas": [
    {
      prompt: "¿Dónde debe desecharse una aguja usada que cumple los criterios de RPBI?",
      options: ["En una bolsa roja convencional", "En un recipiente rígido rojo resistente a punciones", "En una bolsa amarilla", "En el contenedor de residuos municipales"],
      answer: 1,
      explanation: "Los objetos punzocortantes se depositan en recipientes rígidos, resistentes a punciones y con cierre seguro.",
      success: "¡Correcto! Reconociste el manejo seguro de los punzocortantes.",
      suggestion: "Piensa en el riesgo de punción: estos residuos requieren un recipiente rígido, no una bolsa."
    },
    {
      prompt: "Según la clasificación de RPBI, ¿cómo se envasa la sangre en forma líquida?",
      options: ["En bolsa amarilla", "En bolsa roja para sólidos", "En recipiente hermético rojo", "En recipiente rígido para punzocortantes"],
      answer: 2,
      explanation: "La sangre y sus componentes en forma líquida se colocan en recipientes herméticos rojos.",
      success: "¡Muy bien! Aplicaste el criterio de estado físico y categoría del residuo.",
      suggestion: "Distingue entre residuos sólidos y líquidos: la sangre líquida requiere un recipiente hermético rojo."
    }
  ],
  "Higiene, limpieza y desinfección": [
    {
      prompt: "¿Cuál es el propósito principal de la limpieza antes de realizar una desinfección?",
      options: ["Eliminar suciedad y materia orgánica", "Garantizar por sí sola la esterilidad", "Sustituir siempre la desinfección", "Aplicar un antiséptico sobre la superficie"],
      answer: 0,
      explanation: "La limpieza retira suciedad y materia orgánica; permite que el proceso de desinfección posterior sea eficaz.",
      success: "¡Excelente! Reconociste por qué la limpieza es un paso esencial.",
      suggestion: "Recuerda que limpiar retira suciedad; desinfectar inactiva microorganismos según el nivel y producto."
    },
    {
      prompt: "¿Qué proceso se utiliza para reducir microorganismos en la piel antes de un procedimiento, cuando está indicado?",
      options: ["Limpieza ambiental", "Antisepsia", "Desinfección de alto nivel", "Esterilización de superficies"],
      answer: 1,
      explanation: "La antisepsia utiliza productos apropiados sobre tejidos vivos, como la piel.",
      success: "¡Correcto! Diferenciaste el cuidado de tejidos vivos del procesamiento de superficies.",
      suggestion: "Ubica primero dónde se aplica el procedimiento: la piel es tejido vivo y requiere antisepsia."
    }
  ],
  "Carro de curaciones y pinza portaobjetos": [
    {
      prompt: "Antes de iniciar una curación, ¿qué acción ayuda a garantizar que el carro esté preparado de forma segura?",
      options: ["Comprobar material, integridad, limpieza y disponibilidad", "Colocar material usado junto al limpio", "Abrir todos los paquetes estériles con anticipación", "Reutilizar material desechable si parece limpio"],
      answer: 0,
      explanation: "La preparación incluye verificar el material necesario, su integridad y la separación entre áreas limpias y contaminadas.",
      success: "¡Bien hecho! La preparación previa reduce interrupciones y riesgos durante el procedimiento.",
      suggestion: "Antes de comenzar, verifica qué necesitas y comprueba que el material esté íntegro y correctamente organizado."
    },
    {
      prompt: "¿Qué debe hacerse con una pinza estéril si su extremo entra en contacto con una superficie no estéril?",
      options: ["Continuar utilizándola si no hay suciedad visible", "Limpiarla con una gasa y seguir", "Considerarla contaminada y sustituirla o reprocesarla según corresponda", "Sumergirla en agua y secarla"],
      answer: 2,
      explanation: "El contacto con una superficie no estéril rompe la técnica estéril; el instrumento debe reemplazarse o reprocesarse conforme al protocolo.",
      success: "¡Correcto! Reconociste cuándo se pierde la esterilidad del instrumento.",
      suggestion: "La contaminación no siempre es visible. Si se rompe la técnica estéril, no continúes usando ese material."
    }
  ],
  "Mecánica corporal": [
    {
      prompt: "Al levantar una carga durante una movilización, ¿qué postura protege mejor la espalda?",
      options: ["Flexionar las rodillas y mantener la carga cerca del cuerpo", "Inclinar el tronco con las rodillas extendidas", "Alejar la carga para tener más espacio", "Girar el tronco mientras se levanta"],
      answer: 0,
      explanation: "Flexionar las rodillas, mantener la carga cerca y evitar torsiones disminuye la sobrecarga mecánica.",
      success: "¡Excelente! Aplicaste principios básicos de ergonomía.",
      suggestion: "Acerca la carga al centro de gravedad y utiliza las piernas; evita levantar con la espalda flexionada."
    },
    {
      prompt: "¿Qué debe evitarse al cambiar de dirección mientras se sostiene una carga?",
      options: ["Ampliar la base de sustentación", "Girar el tronco con los pies fijos", "Mantener la carga próxima al cuerpo", "Mover los pies para orientar todo el cuerpo"],
      answer: 1,
      explanation: "La torsión del tronco con los pies fijos aumenta la tensión; es preferible girar moviendo los pies.",
      success: "¡Muy bien! Identificaste un movimiento que aumenta el riesgo de lesión.",
      suggestion: "Para cambiar de dirección, desplaza los pies y gira el cuerpo en conjunto en lugar de torcer la columna."
    }
  ],
  "Movilización y traslado del paciente": [
    {
      prompt: "Antes de transferir a una persona de la cama a una silla de ruedas, ¿qué debe valorarse?",
      options: ["Únicamente la edad", "Su capacidad de colaboración, fuerza, equilibrio y riesgos", "Solo el peso de la persona", "La rapidez con la que puede realizarse el traslado"],
      answer: 1,
      explanation: "La valoración de movilidad, colaboración, equilibrio y riesgos permite elegir la técnica y las ayudas necesarias.",
      success: "¡Correcto! La movilización segura comienza con una valoración individual.",
      suggestion: "No todas las personas pueden realizar la misma transferencia. Valora movilidad, equilibrio, fuerza y nivel de ayuda requerido."
    },
    {
      prompt: "¿Qué medida de seguridad debe realizarse antes de una transferencia a silla de ruedas?",
      options: ["Dejar los frenos libres para facilitar el movimiento", "Retirar los apoyapiés y bloquear los frenos", "Colocar la silla lejos de la cama", "Pedir a la persona que se levante sin asistencia"],
      answer: 1,
      explanation: "Bloquear los frenos y retirar o apartar los apoyapiés evita desplazamientos y obstáculos durante la transferencia.",
      success: "¡Excelente! Reconociste una medida concreta para prevenir caídas.",
      suggestion: "Piensa qué podría moverse o estorbar durante la transferencia: asegura la silla y libera el espacio de los apoyapiés."
    }
  ],
  "Posiciones terapéuticas": [
    {
      prompt: "¿Qué describe mejor la posición de Fowler?",
      options: ["Persona acostada boca abajo", "Persona en decúbito lateral", "Persona semisentada con elevación del respaldo", "Persona acostada con la cabeza más baja que los pies"],
      answer: 2,
      explanation: "En Fowler se eleva el respaldo de la cama; el grado de elevación depende de la variante y de la necesidad clínica.",
      success: "¡Muy bien! Identificaste la característica principal de Fowler.",
      suggestion: "Recuerda que Fowler se reconoce por la elevación del tronco y la posición semisentada."
    },
    {
      prompt: "Al mantener una posición terapéutica durante un periodo prolongado, ¿qué cuidado es importante?",
      options: ["Evitar toda modificación de postura", "Valorar comodidad, alineación y puntos de presión", "Colocar siempre las articulaciones en extensión máxima", "Retirar todos los apoyos"],
      answer: 1,
      explanation: "La alineación, comodidad y vigilancia de puntos de presión ayudan a prevenir lesiones y complicaciones asociadas a la inmovilidad.",
      success: "¡Correcto! Relacionaste el posicionamiento con la prevención de lesiones.",
      suggestion: "Además de elegir la posición, vigila alineación corporal, tolerancia y zonas de presión."
    }
  ],
  "Signos vitales": [
    {
      prompt: "¿Qué información proporciona principalmente la oximetría de pulso (SpO₂)?",
      options: ["Una estimación de la saturación periférica de oxígeno", "La concentración de dióxido de carbono arterial", "La cantidad total de hemoglobina", "La presión arterial sistólica"],
      answer: 0,
      explanation: "La SpO₂ estima la saturación periférica de oxígeno; no mide directamente PaCO₂, PaO₂ ni concentración de hemoglobina.",
      success: "¡Excelente! Reconociste el alcance y los límites de la oximetría.",
      suggestion: "La oximetría estima saturación periférica; no confundas este dato con ventilación o medición de dióxido de carbono."
    },
    {
      prompt: "Cuando una persona puede comunicarse, ¿cuál es la fuente preferente para valorar la intensidad de su dolor?",
      options: ["La expresión facial exclusivamente", "El autorreporte de la persona mediante una escala apropiada", "La frecuencia cardiaca como único indicador", "La opinión del acompañante"],
      answer: 1,
      explanation: "El dolor es una experiencia subjetiva; cuando es posible, el autorreporte es la fuente principal y se complementa con la valoración clínica.",
      success: "¡Muy bien! Reconociste la importancia de escuchar a la persona.",
      suggestion: "El dolor no se determina solo por signos observables. Cuando puede comunicarse, pregunta directamente y usa una escala adecuada."
    }
  ],
  "Somatometría y exploración física": [
    {
      prompt: "¿Qué datos se obtienen directamente mediante la somatometría básica?",
      options: ["Peso y talla", "Frecuencia cardiaca y respiratoria", "Temperatura y presión arterial", "Nivel de conciencia y reflejos"],
      answer: 0,
      explanation: "La somatometría comprende mediciones corporales como peso, talla y otros perímetros según el objetivo de la valoración.",
      success: "¡Correcto! Identificaste mediciones propias de la somatometría.",
      suggestion: "Distingue las medidas corporales de los parámetros fisiológicos, como pulso, temperatura y presión arterial."
    },
    {
      prompt: "¿Qué técnica de exploración física consiste en escuchar los sonidos del cuerpo?",
      options: ["Inspección", "Palpación", "Percusión", "Auscultación"],
      answer: 3,
      explanation: "La auscultación utiliza el sentido de la audición, habitualmente con estetoscopio, para identificar sonidos corporales.",
      success: "¡Excelente! Reconociste una de las técnicas fundamentales de exploración física.",
      suggestion: "Relaciona cada técnica con el sentido utilizado: observar, tocar, producir sonidos por percusión o escuchar."
    }
  ],
  "Admisión, estancia y egreso hospitalario": [
    {
      prompt: "Durante la admisión hospitalaria, ¿qué acción favorece la seguridad y continuidad del cuidado?",
      options: ["Confirmar la identidad con los identificadores institucionales", "Utilizar el número de habitación como único identificador", "Omitir la orientación para ahorrar tiempo", "Registrar datos sin verificar con la persona"],
      answer: 0,
      explanation: "La identificación correcta debe realizarse con los identificadores establecidos por la institución, nunca solo con la habitación.",
      success: "¡Muy bien! Priorizaste la identificación segura desde el ingreso.",
      suggestion: "La habitación puede cambiar y no identifica de forma única a una persona. Sigue el protocolo institucional de identificación."
    },
    {
      prompt: "¿Qué debe incluir la preparación del egreso hospitalario?",
      options: ["Solo la entrega de pertenencias", "Orientación sobre indicaciones, cuidados, seguimiento y signos de alarma", "La suspensión de toda información escrita", "El alta sin verificar comprensión"],
      answer: 1,
      explanation: "La continuidad del cuidado requiere instrucciones comprensibles sobre cuidados, tratamiento indicado, seguimiento y signos de alarma.",
      success: "¡Correcto! Relacionaste el egreso con la continuidad del cuidado.",
      suggestion: "El egreso no termina al salir del hospital: la persona necesita comprender cuidados, seguimiento y cuándo solicitar ayuda."
    }
  ],
  "Expediente clínico y registros de enfermería": [
    {
      prompt: "¿Cuál es una característica esencial de un registro de enfermería?",
      options: ["Ser claro, oportuno, legible y atribuible a quien lo realiza", "Incluir opiniones personales sin fundamento", "Dejar espacios para completar después sin identificar", "Compartir información con cualquier persona que la solicite"],
      answer: 0,
      explanation: "Los registros deben ser claros, oportunos, legibles y permitir identificar a quien documenta, conforme a la normativa y política institucional.",
      success: "¡Excelente! Reconociste los principios de un registro profesional.",
      suggestion: "Piensa en la utilidad legal y clínica del registro: debe ser comprensible, oportuno y permitir identificar a su autor."
    },
    {
      prompt: "¿Cómo debe manejarse la información contenida en el expediente clínico?",
      options: ["Compartirse libremente para fines informales", "Mantenerse confidencial y consultarse conforme a las autorizaciones aplicables", "Fotografiarse con dispositivos personales sin autorización", "Comentarse en espacios públicos si no se menciona el diagnóstico"],
      answer: 1,
      explanation: "El expediente contiene información confidencial; su acceso, uso y divulgación deben ajustarse a la normativa y autorizaciones aplicables.",
      success: "¡Muy bien! Identificaste la confidencialidad como una responsabilidad profesional.",
      suggestion: "La información clínica sigue siendo confidencial incluso en conversaciones informales. Consulta y comparte solo conforme a las reglas aplicables."
    }
  ]
};
