import { Sentence, DialogueLine, QuizQuestion, VocabularyItem } from './types';

export const text1Sentences: Sentence[] = [
  { id: 1, es: "Carlos tiene doce años.", hy: "Կառլոսը տասներկու տարեկան է։" },
  { id: 2, es: "Cada día va a la escuela.", hy: "Նա ամեն օր գնում է դպրոց։" },
  { id: 3, es: "Cerca de su casa hay un puente.", hy: "Նրա տան մոտ կամուրջ կա։" },
  { id: 4, es: "Carlos conoce bien la dirección.", hy: "Կառլոսը լավ գիտի ուղղությունը։" },
  { id: 5, es: "La distancia hasta la escuela es corta.", hy: "Մինչև դպրոց հեռավորությունը կարճ է։" },
  { id: 6, es: "Carlos camina despacio.", hy: "Կառլոսը դանդաղ է քայլում։" },
  { id: 7, es: "No camina con mucha velocidad.", hy: "Նա մեծ արագությամբ չի քայլում։" },
  { id: 8, es: "La seguridad es importante.", hy: "Անվտանգությունը կարևոր է։" },
  { id: 9, es: "Un día, Carlos cuenta un secreto a su amiga Ana:", hy: "Մի օր Կառլոսը իր ընկերուհի Անային մի գաղտնիք է ասում․" },
  { id: 10, es: "—Me gusta mucho este puente.", hy: "—Ես շատ եմ սիրում այս կամուրջը։" },
  { id: 11, es: "Para Carlos, el puente es un bonito recuerdo.", hy: "Կառլոսի համար կամուրջը գեղեցիկ հիշողություն է։" },
  { id: 12, es: "Aquí tuvo una buena experiencia con su familia.", hy: "Այստեղ նա իր ընտանիքի հետ լավ փորձ է ունեցել։" },
  { id: 13, es: "Carlos toma una decisión:", hy: "Կառլոսը որոշում է կայացնում․" },
  { id: 14, es: "quiere dibujar el puente.", hy: "նա ցանկանում է նկարել կամուրջը։" },
  { id: 15, es: "Tiene la oportunidad de participar en un concurso.", hy: "Նա հնարավորություն ունի մասնակցելու մրցույթի։" },
  { id: 16, es: "Carlos tiene la costumbre de dibujar cada tarde.", hy: "Կառլոսը սովորություն ունի ամեն երեկո նկարել։" },
  { id: 17, es: "Tiene un carácter tranquilo.", hy: "Նա հանգիստ բնավորություն ունի։" },
  { id: 18, es: "Siempre dibuja con una sonrisa y con esperanza.", hy: "Նա միշտ նկարում է ժպիտով և հույսով։" },
  { id: 19, es: "En el concurso hay muchos niños.", hy: "Մրցույթում շատ երեխաներ կան։" },
  { id: 20, es: "Carlos dibuja un puente y una escultura.", hy: "Կառլոսը նկարում է կամուրջ և քանդակ։" },
  { id: 21, es: "También dibuja a un pintor en un museo de ciencia.", hy: "Նա նաև նկարում է նկարչի՝ գիտության թանգարանում։" },
  { id: 22, es: "Al final, Carlos es el ganador.", hy: "Վերջում Կառլոսը հաղթող է դառնում։" },
  { id: 23, es: "Está muy feliz.", hy: "Նա շատ ուրախ է։" },
  { id: 24, es: "Ana no es la ganadora, pero no se siente perdedora.", hy: "Անան հաղթող չէ, բայց իրեն պարտվող չի զգում։" },
  { id: 25, es: "Para ellos, aprender y participar también es un éxito.", hy: "Նրանց համար սովորելը և մասնակցելը նույնպես հաջողություն է։" }
];

export const text2Dialogue: DialogueLine[] = [
  {
    id: 1,
    speaker: "Lucía",
    speakerHy: "Լուսիա",
    es: "Carlos, ¿qué día es hoy?",
    hy: "Կառլո՛ս, այսօր շաբաթվա ո՞ր օրն է։",
    gaps: [{ word: "día", index: 1, hint: "օր" }]
  },
  {
    id: 2,
    speaker: "Carlos",
    speakerHy: "Կառլոս",
    es: "Hoy es miércoles.",
    hy: "Այսօր չորեքշաբթի է։",
    gaps: [{ word: "miércoles", index: 0, hint: "չորեքշաբթի" }]
  },
  {
    id: 3,
    speaker: "Lucía",
    speakerHy: "Լուսիա",
    es: "¿Y mañana?",
    hy: "Իսկ վա՞ղը։",
    gaps: [{ word: "mañana", index: 0, hint: "վաղը" }]
  },
  {
    id: 4,
    speaker: "Carlos",
    speakerHy: "Կառլոս",
    es: "Mañana es jueves.",
    hy: "Վաղը հինգշաբթի է։",
    gaps: [{ word: "jueves", index: 0, hint: "հինգշաբթի" }]
  },
  {
    id: 5,
    speaker: "Lucía",
    speakerHy: "Լուսիա",
    es: "¿Tienes clases de español los jueves?",
    hy: "Հինգշաբթի օրերին իսպաներենի դասեր ունե՞ս։",
    gaps: [{ word: "jueves", index: 0, hint: "հինգշաբթի (հոգնակի)" }]
  },
  {
    id: 6,
    speaker: "Carlos",
    speakerHy: "Կառլոս",
    es: "Sí. Tengo español los martes y los jueves.",
    hy: "Այո՛։ Ես իսպաներեն եմ սովորում երեքշաբթի և հինգշաբթի օրերին։",
    gaps: [
      { word: "martes", index: 0, hint: "երեքշաբթի" },
      { word: "jueves", index: 1, hint: "հինգշաբթի" }
    ]
  },
  {
    id: 7,
    speaker: "Lucía",
    speakerHy: "Լուսիա",
    es: "Yo estudio español los lunes, miércoles y viernes.",
    hy: "Ես իսպաներեն եմ սովորում երկուշաբթի, չորեքշաբթի և ուրբաթ օրերին։",
    gaps: [
      { word: "lunes", index: 0, hint: "երկուշաբթի" },
      { word: "miércoles", index: 1, hint: "չորեքշաբթի" },
      { word: "viernes", index: 2, hint: "ուրբաթ" }
    ]
  },
  {
    id: 8,
    speaker: "Carlos",
    speakerHy: "Կառլոս",
    es: "¿Qué haces los sábados?",
    hy: "Ի՞նչ ես անում շաբաթ օրերին։",
    gaps: [{ word: "sábados", index: 0, hint: "շաբաթ օրերին" }]
  },
  {
    id: 9,
    speaker: "Lucía",
    speakerHy: "Լուսիա",
    es: "Los sábados juego al tenis, y los domingos descanso con mi familia.",
    hy: "Շաբաթ օրերին թենիս եմ խաղում, իսկ կիրակի օրերին հանգստանում եմ ընտանիքիս հետ։",
    gaps: [
      { word: "sábados", index: 0, hint: "շաբաթ օրերին" },
      { word: "domingos", index: 1, hint: "կիրակի օրերին" }
    ]
  },
  {
    id: 10,
    speaker: "Carlos",
    speakerHy: "Կառլոս",
    es: "¡Qué bien! ¿Cuál es tu mes favorito?",
    hy: "Շատ լավ է։ Ո՞րն է քո սիրելի ամիսը։",
    gaps: [{ word: "mes", index: 0, hint: "ամիս" }]
  },
  {
    id: 11,
    speaker: "Lucía",
    speakerHy: "Լուսիա",
    es: "Mi mes favorito es julio porque no hay clases y hace buen tiempo.",
    hy: "Իմ սիրելի ամիսը հուլիսն է, որովհետև դասեր չկան, և եղանակը լավ է։",
    gaps: [{ word: "julio", index: 0, hint: "հուլիս" }]
  },
  {
    id: 12,
    speaker: "Carlos",
    speakerHy: "Կառլոս",
    es: "A mí me gusta diciembre porque celebramos la Navidad y llega el invierno.",
    hy: "Իսկ ես սիրում եմ դեկտեմբերը, որովհետև նշում ենք Սուրբ Ծնունդը, և սկսվում է ձմեռը։",
    gaps: [
      { word: "diciembre", index: 0, hint: "դեկտեմբեր" },
      { word: "Navidad", index: 1, hint: "Սուրբ Ծնունդ" },
      { word: "invierno", index: 2, hint: "ձմեռ" }
    ]
  },
  {
    id: 13,
    speaker: "Lucía",
    speakerHy: "Լուսիա",
    es: "¿Cuándo es tu cumpleaños?",
    hy: "Ե՞րբ է քո ծննդյան օրը։",
    gaps: [{ word: "cumpleaños", index: 0, hint: "ծննդյան օր" }]
  },
  {
    id: 14,
    speaker: "Carlos",
    speakerHy: "Կառլոս",
    es: "Mi cumpleaños es el quince de abril. ¿Y el tuyo?",
    hy: "Իմ ծննդյան օրը ապրիլի տասնհինգն է։ Իսկ քո՞նը։",
    gaps: [
      { word: "quince", index: 0, hint: "տասնհինգ" },
      { word: "abril", index: 1, hint: "ապրիլ" }
    ]
  },
  {
    id: 15,
    speaker: "Lucía",
    speakerHy: "Լուսիա",
    es: "El mío es el ocho de septiembre.",
    hy: "Իմը սեպտեմբերի ութին է։",
    gaps: [
      { word: "ocho", index: 0, hint: "ութ" },
      { word: "septiembre", index: 1, hint: "սեպտեմբեր" }
    ]
  },
  {
    id: 16,
    speaker: "Carlos",
    speakerHy: "Կառլոս",
    es: "Entonces, tu cumpleaños es en otoño.",
    hy: "Այսինքն՝ քո ծննդյան օրը աշնանն է։",
    gaps: [{ word: "otoño", index: 0, hint: "աշուն" }]
  },
  {
    id: 17,
    speaker: "Lucía",
    speakerHy: "Լուսիա",
    es: "Sí. Septiembre, octubre y noviembre son los meses de otoño.",
    hy: "Այո՛։ Սեպտեմբերը, հոկտեմբերը և նոյեմբերը աշնան ամիսներն են։",
    gaps: [
      { word: "Septiembre", index: 0, hint: "Սեպտեմբեր" },
      { word: "octubre", index: 1, hint: "հոկտեմբեր" },
      { word: "noviembre", index: 2, hint: "նոյեմբեր" }
    ]
  },
  {
    id: 18,
    speaker: "Carlos",
    speakerHy: "Կառլոս",
    es: "Diciembre, enero y febrero son los meses de invierno.",
    hy: "Դեկտեմբերը, հունվարը և փետրվարը ձմռան ամիսներն են։",
    gaps: [
      { word: "Diciembre", index: 0, hint: "Դեկտեմբեր" },
      { word: "enero", index: 1, hint: "հունվար" },
      { word: "febrero", index: 2, hint: "փետրվար" }
    ]
  },
  {
    id: 19,
    speaker: "Lucía",
    speakerHy: "Լուսիա",
    es: "Marzo, abril y mayo son los meses de primavera.",
    hy: "Մարտը, ապրիլը և մայիսը գարնան ամիսներն են։",
    gaps: [
      { word: "Marzo", index: 0, hint: "Մարտ" },
      { word: "abril", index: 1, hint: "ապրիլ" },
      { word: "mayo", index: 2, hint: "մայիս" }
    ]
  },
  {
    id: 20,
    speaker: "Carlos",
    speakerHy: "Կառլոս",
    es: "Y junio, julio y agosto son los meses de verano.",
    hy: "Իսկ հունիսը, հուլիսը և օգոստոսը ամռան ամիսներն են։",
    gaps: [
      { word: "junio", index: 0, hint: "հունիս" },
      { word: "julio", index: 1, hint: "հուլիս" },
      { word: "agosto", index: 2, hint: "օգոստոս" }
    ]
  },
  {
    id: 21,
    speaker: "Lucía",
    speakerHy: "Լուսիա",
    es: "¡Perfecto! Ahora sabemos todos los meses del año.",
    hy: "Հիանալի՛։ Հիմա մենք գիտենք տարվա բոլոր ամիսները։",
    gaps: [
      { word: "meses", index: 0, hint: "ամիսներ" },
      { word: "año", index: 1, hint: "տարի" }
    ]
  }
];

export const quiz1Questions: QuizQuestion[] = [
  {
    id: 1,
    questionEs: "¿Cuántos años tiene Carlos?",
    questionHy: "Քանի՞ տարեկան է Կառլոսը:",
    options: [
      { key: "A", es: "Diez años", hy: "Տասը տարեկան" },
      { key: "B", es: "Doce años", hy: "Տասներկու տարեկան" },
      { key: "C", es: "Quince años", hy: "Տասնհինգ տարեկան" },
      { key: "D", es: "Ocho años", hy: "Ութ տարեկան" }
    ],
    correctKey: "B",
    explanationEs: "Carlos tiene doce años, como se menciona al inicio del texto.",
    explanationHy: "Կառլոսը տասներկու տարեկան է, ինչպես նշված է տեքստի սկզբում:"
  },
  {
    id: 2,
    questionEs: "¿A dónde va Carlos cada día?",
    questionHy: "Ո՞ւր է գնում Կառլոսը ամեն օր:",
    options: [
      { key: "A", es: "Al museo de ciencia", hy: "Գիտության թանգարան" },
      { key: "B", es: "Al parque", hy: "Այգի" },
      { key: "C", es: "A la escuela", hy: "Դպրոց" },
      { key: "D", es: "A la playa", hy: "Լողափ" }
    ],
    correctKey: "C",
    explanationEs: "El texto dice: 'Cada día va a la escuela'.",
    explanationHy: "Տեքստում ասվում է. «Նա ամեն օր գնում է դպրոց»:"
  },
  {
    id: 3,
    questionEs: "¿Qué hay cerca de la casa de Carlos?",
    questionHy: "Ի՞նչ կա Կառլոսի տան մոտ:",
    options: [
      { key: "A", es: "Un museo de arte", hy: "Արվեստի թանգարան" },
      { key: "B", es: "Un puente", hy: "Կամուրջ" },
      { key: "C", es: "Una biblioteca grande", hy: "Մեծ գրադարան" },
      { key: "D", es: "Un hospital moderno", hy: "Ժամանակակից հիվանդանոց" }
    ],
    correctKey: "B",
    explanationEs: "Cerca de su casa hay un puente que le gusta mucho.",
    explanationHy: "Նրա տան մոտ կամուրջ կա, որը նրան շատ է դուր գալիս:"
  },
  {
    id: 4,
    questionEs: "¿Con quién tuvo Carlos una buena experiencia en el puente?",
    questionHy: "Ո՞ւմ հետ է Կառլոսը լավ փորձ (հիշողություն) ունեցել կամրջի վրա:",
    options: [
      { key: "A", es: "Con su amiga Ana", hy: "Իր ընկերուհի Անայի հետ" },
      { key: "B", es: "Con su profesor", hy: "Իր ուսուցչի հետ" },
      { key: "C", es: "Con su familia", hy: "Իր ընտանիքի հետ" },
      { key: "D", es: "Con sus compañeros de clase", hy: "Իր դասընկերների հետ" }
    ],
    correctKey: "C",
    explanationEs: "El texto dice: 'Aquí tuvo una buena experiencia con su familia'.",
    explanationHy: "Տեքստում ասվում է. «Այստեղ նա իր ընտանիքի հետ լավ փորձ է ունեցել»:"
  },
  {
    id: 5,
    questionEs: "¿Qué dibuja Carlos además de un puente en el concurso?",
    questionHy: "Ի՞նչ է նկարում Կառլոսը կամրջից բացի մրցույթում:",
    options: [
      { key: "A", es: "Una escultura", hy: "Քանդակ" },
      { key: "B", es: "Un barco azul", hy: "Կապույտ նավ" },
      { key: "C", es: "Un tren rápido", hy: "Արագընթաց գնացք" },
      { key: "D", es: "Un avión en el cielo", hy: "Ինքնաթիռ երկնքում" }
    ],
    correctKey: "A",
    explanationEs: "El texto menciona: 'Carlos dibuja un puente y una escultura'.",
    explanationHy: "Տեքստում նշվում է. «Կառլոսը նկարում է կամուրջ և քանդակ»:"
  }
];

export const quiz2Questions: QuizQuestion[] = [
  {
    id: 1,
    questionEs: "¿Qué día es hoy según la conversación?",
    questionHy: "Շաբաթվա ո՞ր օրն է այսօր ըստ զրույցի:",
    options: [
      { key: "A", es: "Lunes", hy: "Երկուշաբթի" },
      { key: "B", es: "Martes", hy: "Երեքշաբթի" },
      { key: "C", es: "Miércoles", hy: "Չորեքշաբթի" },
      { key: "D", es: "Jueves", hy: "Հինգշաբթի" }
    ],
    correctKey: "C",
    explanationEs: "Carlos responde a Lucía: 'Hoy es miércoles'.",
    explanationHy: "Կառլոսը պատասխանում է Լուսիային. «Այսօր չորեքշաբթի է»:"
  },
  {
    id: 2,
    questionEs: "¿Qué días estudia español Lucía?",
    questionHy: "Շաբաթվա ո՞ր օրերին է Լուսիան իսպաներեն սովորում:",
    options: [
      { key: "A", es: "Los martes y jueves", hy: "Երեքշաբթի և հինգշաբթի օրերին" },
      { key: "B", es: "Los lunes, miércoles y viernes", hy: "Երկուշաբթի, չորեքշաբթի և ուրբաթ օրերին" },
      { key: "C", es: "Los sábados y domingos", hy: "Շաբաթ և կիրակի օրերին" },
      { key: "D", es: "Todos los días de la semana", hy: "Շաբաթվա բոլոր օրերին" }
    ],
    correctKey: "B",
    explanationEs: "Lucía dice: 'Yo estudio español los lunes, miércoles y viernes'.",
    explanationHy: "Լուսիան ասում է. «Ես իսպաներեն եմ սովորում երկուշաբթի, չորեքշաբթի և ուրբաթ օրերին»:"
  },
  {
    id: 3,
    questionEs: "¿Cuál es el mes favorito de Lucía y por qué?",
    questionHy: "Ո՞րն է Լուսիայի սիրելի ամիսը և ինչո՞ւ:",
    options: [
      { key: "A", es: "Diciembre porque llega la Navidad", hy: "Դեկտեմբերը, որովհետև գալիս է Սուրբ Ծնունդը" },
      { key: "B", es: "Julio porque no hay clases y hace buen tiempo", hy: "Հուլիսը, որովհետև դասեր չկան և եղանակը լավ է" },
      { key: "C", es: "Abril porque es primavera y hay flores", hy: "Ապրիլը, որովհետև գարուն է և ծաղիկներ կան" },
      { key: "D", es: "Septiembre porque celebra su cumpleaños", hy: "Սեպտեմբերը, որովհետև նշում է իր ծննդյան օրը" }
    ],
    correctKey: "B",
    explanationEs: "Lucía dice: 'Mi mes favorito es julio porque no hay clases y hace buen tiempo'.",
    explanationHy: "Լուսիան ասում է. «Իմ սիրելի ամիսը հուլիսն է, որովհետև դասեր չկան, և եղանակը լավ է»:"
  },
  {
    id: 4,
    questionEs: "¿Cuándo es el cumpleaños de Carlos?",
    questionHy: "Ե՞րբ է Կառլոսի ծննդյան օրը:",
    options: [
      { key: "A", es: "El ocho de septiembre", hy: "Սեպտեմբերի ութին" },
      { key: "B", es: "El quince de abril", hy: "Ապրիլի տասնհինգին" },
      { key: "C", es: "El quince de diciembre", hy: "Դեկտեմբերի տասնհինգին" },
      { key: "D", es: "El treinta de agosto", hy: "Օգոստոսի երեսունին" }
    ],
    correctKey: "B",
    explanationEs: "Carlos menciona: 'Mi cumpleaños es el quince de abril'.",
    explanationHy: "Կառլոսը նշում է. «Իմ ծննդյան օրը ապրիլի տասնհինգն է»:"
  },
  {
    id: 5,
    questionEs: "¿Cuáles son los meses de otoño en la conversación?",
    questionHy: "Որո՞նք են աշնան ամիսները ըստ զրույցի:",
    options: [
      { key: "A", es: "Diciembre, enero y febrero", hy: "Դեկտեմբերը, հունվարը և փետրվարը" },
      { key: "B", es: "Marzo, abril y mayo", hy: "Մարտը, ապրիլը և մայիսը" },
      { key: "C", es: "Junio, julio y agosto", hy: "Հունիսը, հուլիսը և օգոստոսը" },
      { key: "D", es: "Septiembre, octubre y noviembre", hy: "Սեպտեմբերը, հոկտեմբերը և նոյեմբերը" }
    ],
    correctKey: "D",
    explanationEs: "Lucía confirma: 'Sí. Septiembre, octubre y noviembre son los meses de otoño'.",
    explanationHy: "Լուսիան հաստատում է. «Այո՛։ Սեպտեմբերը, հոկտեմբերը և նոյեմբերը աշնան ամիսներն են»:"
  }
];

export const vocabulary: VocabularyItem[] = [
  { es: "Puente", hy: "Կամուրջ", category: "Objetos / Օբյեկտներ" },
  { es: "Dirección", hy: "Ուղղություն", category: "Conceptos / Հասկացություններ" },
  { es: "Distancia", hy: "Հեռավորություն", category: "Conceptos / Հասկացություններ" },
  { es: "Seguridad", hy: "Անվտանգություն", category: "Conceptos / Հասկացություններ" },
  { es: "Secreto", hy: "Գաղտնիք", category: "Conceptos / Հասկացություններ" },
  { es: "Recuerdo", hy: "Հիշողություն", category: "Conceptos / Հասկացություններ" },
  { es: "Decisión", hy: "Որոշում", category: "Conceptos / Հասկացություններ" },
  { es: "Costumbre", hy: "Սովորություն", category: "Conceptos / Հասկացություններ" },
  { es: "Carácter", hy: "Բնավորություն", category: "Conceptos / Հասկացություններ" },
  { es: "Ganador", hy: "Հաղթող", category: "Personas / Մարդիկ" },
  { es: "Éxito", hy: "Հաջողություն", category: "Conceptos / Հասկացություններ" },
  { es: "Miércoles", hy: "Չորեքշաբթի", category: "Días / Օրեր" },
  { es: "Jueves", hy: "Հինգշաբթի", category: "Días / Օրեր" },
  { es: "Martes", hy: "Երեքշաբթի", category: "Días / Օրեր" },
  { es: "Lunes", hy: "Երկուշաբթի", category: "Días / Օրեր" },
  { es: "Viernes", hy: "Ուրբաթ", category: "Días / Օրեր" },
  { es: "Sábado", hy: "Շաբաթ", category: "Días / Օրեր" },
  { es: "Domingo", hy: "Կիրակի", category: "Días / Օրեր" },
  { es: "Julio", hy: "Հուլիս", category: "Meses / Ամիսներ" },
  { es: "Diciembre", hy: "Դեկտեմբեր", category: "Meses / Ամիսներ" },
  { es: "Navidad", hy: "Սուրբ Ծնունդ", category: "Festividades / Տոներ" },
  { es: "Invierno", hy: "Ձմեռ", category: "Estaciones / Տարվա եղանակներ" },
  { es: "Otoño", hy: "Աշուն", category: "Estaciones / Տարվա եղանակներ" },
  { es: "Primavera", hy: "Գարուն", category: "Estaciones / Տարվա եղանակներ" },
  { es: "Verano", hy: "Ամառ", category: "Estaciones / Տարվա եղանակներ" }
];
