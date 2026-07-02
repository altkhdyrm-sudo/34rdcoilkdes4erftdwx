/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Reusable dynamic data structure for the chemistry lesson.
// Exact 43 source questions from الفصل الأول - القسم الثاني - V1.
const examData = {
  chapterName: "الفصل الأول",
  lessonName: "القسم الثاني",
  sourceInfo: "43 سؤالاً",
  totalQuestions: 43,
  lessonStorageId: "chemistry-chapter-1-section-2-v1",
  topicIntro: "الأسئلة الوزارية حول (دالة الحالة - الخواص الشاملة والمركزة - التفاعلات الحرارية - قياس انثالبي التفاعل القياسي - المعادلة الكيميائية الحرارية - التمثيل البياني للتفاعل الكيميائي - أنواع الانثالبيات - المسائل الحسابية)",
  questions: [
    {
      id: 1,
      type: "theory",
      metadata: {
        occurrence: "2013/2 | 2017/2 (خارج القطر، تطبيقي) | 2018/تمهيدي | 2018/1 (خارج القطر، تطبيقي) | 2023/تمهيدي (تطبيقي) | 2023/2 (تطبيقي) | 2023/3 (أحيائي)"
      },
      text: "عرّف دالة الحالة.",
      modelAnswer: {
        theoryText: "دالة الحالة: هي تلك الخاصية أو الكمية التي تعتمد على الحالة الابتدائية للنظام قبل التغير والحالة النهائية للنظام بعد التغير، بغض النظر عن الطريقة أو المسار الذي تم من خلاله التغير."
      }
    },
    {
      id: 2,
      type: "theory",
      metadata: {
        occurrence: "2024/1"
      },
      text: "ماذا نعني بدالة الحالة؟ وأعط مثالاً على كميتين تعدان دالة حالة، ومثالاً على دالة مسار (دالة غير حالة).",
      modelAnswer: {
        theoryText: "دالة الحالة: هي تلك الخاصية أو الكمية التي تعتمد على الحالة الابتدائية للنظام قبل التغير والحالة النهائية للنظام بعد التغير، بغض النظر عن الطريقة أو المسار الذي تم من خلاله التغير.<br><br>أمثلة لدوال الحالة:<br>الانثالبي، والانتروبي، وطاقة كيبس الحرة.<br><br>مثال لدالة المسار:<br>الحرارة والشغل."
      }
    },
    {
      id: 3,
      type: "theory",
      metadata: {
        occurrence: "2016/2 (أسئلة خارج القطر) | 2017/1 | 2017/1 (تطبيقي) | 2020/تمهيدي (تطبيقي) | 2022/1"
      },
      text: "عرّف الخواص الشاملة.",
      modelAnswer: {
        theoryText: "الخواص الشاملة: وهي تشمل جميع الخواص التي تعتمد على كمية المادة الموجودة في النظام مثل الكتلة والحجم والسعة الحرارية والانثالبي والانتروبي والطاقة الحرة ...إلخ."
      }
    },
    {
      id: 4,
      type: "theory",
      metadata: {
        occurrence: "2017/3 | 2018/1 | 2020/2 (تطبيقي)"
      },
      text: "عرّف الخواص المركزة.",
      modelAnswer: {
        theoryText: "الخواص المركزة: وتشمل جميع الخواص التي لا تعتمد على كمية المادة الموجودة في النظام مثل الضغط ودرجة الحرارة والكثافة والحرارة النوعية."
      }
    },
    {
      id: 5,
      type: "theory",
      metadata: {
        occurrence: "2013/3 | 2014/2"
      },
      text: "تقسم الخواص العامة للمواد إلى نوعين: ............ أو ............",
      modelAnswer: {
        theoryText: "الخواص الشاملة أو الخواص المركزة."
      }
    },
    {
      id: 6,
      type: "theory",
      metadata: {
        occurrence: "2015/3"
      },
      text: "الخواص المركزة تشمل جميع الخواص التي لا تعتمد على ............ في النظام.",
      modelAnswer: {
        theoryText: "كمية المادة الموجودة."
      }
    },
    {
      id: 7,
      type: "theory",
      metadata: {
        occurrence: "2020/3 (تطبيقي)"
      },
      text: "إحدى الخواص العامة للمواد هي إما الخواص الشاملة أو الخواص ............",
      modelAnswer: {
        theoryText: "المركزة."
      }
    },
    {
      id: 8,
      type: "theory",
      metadata: {
        occurrence: "2016/2 | 2017/2 (تطبيقي) | 2017/1 (أسئلة الموصل) | 2018/تمهيدي (تطبيقي) | 2020/تمهيدي | 2021/2 (أحيائي) | 2023/تمهيدي (تطبيقي) | 2023/2 (أحيائي) | 2023/تمهيدي (أحيائي) | 2024/1 (محاولات)"
      },
      text: "ما الفرق بين الخواص المركزة والخواص الشاملة، مع ذكر مثال لكل منهما؟",
      modelAnswer: {
        theoryText: "الخواص المركزة:<br>1) تشمل جميع الخواص التي لا تعتمد على كمية المادة الموجودة في النظام.<br>2) مثال: الضغط أو درجة الحرارة أو الكثافة أو الحرارة النوعية.<br><br>الخواص الشاملة:<br>1) تشمل جميع الخواص التي تعتمد على كمية المادة الموجودة في النظام.<br>2) مثال: الحجم أو السعة الحرارية أو الانثالبي أو الانتروبي أو الطاقة الحرة."
      }
    },
    {
      id: 9,
      type: "theory",
      metadata: {
        occurrence: "2021/تمهيدي (تطبيقي)"
      },
      text: "تقسم التفاعلات الحرارية إلى قسمين هما ............ و............",
      modelAnswer: {
        theoryText: "ماصة وباعثة."
      }
    },
    {
      id: 10,
      type: "calculation",
      metadata: {
        occurrence: "2013/1 | 2014/3 (أسئلة النازحين) | 2016/1 (أسئلة الموصل) | 2017/تمهيدي | 2018/3 (تطبيقي)"
      },
      text: "إذا تم حرق 3 g من مركب الهيدرازين N_2H_4، كتلته المولية 32 g/mol، في مسعر مفتوح يحتوي على 1000 g من الماء، والحرارة النوعية للماء تساوي 4.2 J/(g·°C)، فإن درجة الحرارة ترتفع من 24.6 °C إلى 28.2 °C. احسب الحرارة المتحررة نتيجة الاحتراق وانثالبي احتراق مول واحد من الهيدرازين بوحدة kJ/mol، على اعتبار أن السعة الحرارية للمسعر مهملة.",
      modelAnswer: {
        given: [
          "\\( n = m / M \\)",
          "\\( n = 3\\,\\mathrm{g} / 32\\,\\mathrm{g/mol} \\)",
          "\\( n = 0.09375\\,\\mathrm{mol} \\)"
        ],
        law: "\\( \\Delta T = T_f − T_i \\)",
        substitution: [
          "\\( \\Delta T = 28.2\\,°C − 24.6\\,°C \\)",
          "\\( \\Delta T = 3.6\\,°C \\)",
          "\\( q = S × m × \\Delta T \\)",
          "\\( q = 4.2\\,\\mathrm{J/(g·°C)} × 1000\\,\\mathrm{g} × 3.6\\,°C \\)",
          "\\( q = 15120\\,\\mathrm{J} \\)"
        ],
        steps: [
          "التفاعل باعث للحرارة، لذلك:",
          "\\( q = −15120\\,\\mathrm{J} \\)",
          "\\( q = −15.12\\,\\mathrm{kJ} \\)",
          "\\( \\Delta H^\\circ = q / n \\)",
          "\\( \\Delta H^\\circ = −15.12\\,\\mathrm{kJ} / 0.09375\\,\\mathrm{mol} \\)",
          "\\( \\Delta H^\\circ = −161.28\\,\\mathrm{kJ/mol} \\)"
        ],
        finalAnswer: "\\( \\Delta H^\\circ \\approx −161\\,\\mathrm{kJ/mol} \\)"
      }
    },
    {
      id: 11,
      type: "calculation",
      metadata: {
        occurrence: "2015/1"
      },
      text: "وضعت 3 g من مركب الكلوكوز C_6H_{12}O_6، كتلته المولية 180 g/mol، في وعاء العينة ثم ملئ وعاء التفاعل بغاز الأوكسجين. وضع هذا الوعاء داخل الوعاء المعدني الذي يحوي 1200 g من الماء، والحرارة النوعية للماء تساوي 4.2 J/(g·°C). وكانت درجة الحرارة الابتدائية 21 °C، وبعد احتراق المزيج ارتفعت إلى 25.5 °C. احسب كمية الحرارة المتحررة بوحدة kJ نتيجة احتراق 1 mol من الكلوكوز، على فرض أن السعة الحرارية للمسعر مهملة.",
      modelAnswer: {
        law: "\\( \\Delta T = T_f − T_i \\)",
        substitution: [
          "\\( \\Delta T = 25.5\\,°C − 21\\,°C \\)",
          "\\( \\Delta T = 4.5\\,°C \\)",
          "\\( q = S × m × \\Delta T \\)",
          "\\( q = 4.2\\,\\mathrm{J/(g·°C)} × 1200\\,\\mathrm{g} × 4.5\\,°C \\)",
          "\\( q = 22680\\,\\mathrm{J} \\)"
        ],
        steps: [
          "التفاعل باعث للحرارة، لذلك:",
          "\\( q = −22680\\,\\mathrm{J} \\)",
          "\\( n = m / M \\)",
          "\\( n = 3\\,\\mathrm{g} / 180\\,\\mathrm{g/mol} \\)",
          "\\( n = 0.017\\,\\mathrm{mol} \\)",
          "\\( q\\,\\mathrm{(J/mol)} = q / n \\)",
          "\\( q\\,\\mathrm{(J/mol)} = −22680\\,\\mathrm{J} / 0.017\\,\\mathrm{mol} \\)",
          "\\( q\\,\\mathrm{(J/mol)} = −1334118\\,\\mathrm{J/mol} \\)",
          "\\( q\\,\\mathrm{(kJ/mol)} = q\\,\\mathrm{(J/mol)} / 1000 \\)"
        ],
        finalAnswer: "\\( q\\,\\mathrm{(kJ/mol)} \\approx −1334\\,\\mathrm{kJ/mol} \\)"
      }
    },
    {
      id: 12,
      type: "calculation",
      metadata: {
        occurrence: "2013/2"
      },
      text: "إذا تم حرق عينة كتلتها 1.5 g من حامض الخليك CH_3COOH، كتلته المولية 60 g/mol، بوجود كمية وافية من الأوكسجين، وكان المسعر يحتوي على 750 g من الماء والحرارة النوعية للماء تساوي 4.2 J/(g·°C)، ومحكم بإحكام. تغيرت درجة حرارة المسعر ومحتوياته من 24 °C إلى 28 °C. احسب كمية الحرارة التي يمكن أن تنبعث نتيجة احتراق مول واحد من الحامض، على فرض أن السعة الحرارية للمسعر مهملة.",
      modelAnswer: {
        law: "\\( \\Delta T = T_f − T_i \\)",
        substitution: [
          "\\( \\Delta T = 28\\,°C − 24\\,°C \\)",
          "\\( \\Delta T = 4\\,°C \\)",
          "\\( q = S × m × \\Delta T \\)",
          "\\( q = 4.2\\,\\mathrm{J/(g·°C)} × 750\\,\\mathrm{g} × 4\\,°C \\)",
          "\\( q = 12600\\,\\mathrm{J} \\)"
        ],
        steps: [
          "التفاعل باعث للحرارة، لذلك:",
          "\\( q = −12600\\,\\mathrm{J} \\)",
          "\\( n = m / M \\)",
          "\\( n = 1.5\\,\\mathrm{g} / 60\\,\\mathrm{g/mol} \\)",
          "\\( n = 0.025\\,\\mathrm{mol} \\)",
          "\\( q\\,\\mathrm{(J/mol)} = q / n \\)",
          "\\( q\\,\\mathrm{(J/mol)} = −12600\\,\\mathrm{J} / 0.025\\,\\mathrm{mol} \\)",
          "\\( q\\,\\mathrm{(J/mol)} = −504000\\,\\mathrm{J/mol} \\)"
        ],
        finalAnswer: "\\( q\\,\\mathrm{(kJ/mol)} = −504\\,\\mathrm{kJ/mol} \\)"
      }
    },
    {
      id: 13,
      type: "calculation",
      metadata: {
        occurrence: "2015/3"
      },
      text: "إذا تم حرق عينة كتلتها 6 g من حامض الخليك CH_3COOH، كتلته المولية 60 g/mol، بوجود كمية وافية من الأوكسجين، وكان المسعر يحتوي على 800 g من الماء والحرارة النوعية للماء تساوي 4.2 J/(g·°C). ارتفعت درجة حرارة المسعر ومحتوياته من 25 °C إلى 30 °C. احسب كمية الحرارة التي يمكن أن تنبعث نتيجة احتراق 2 mol من الحامض بوحدة kJ، على فرض أن السعة الحرارية للمسعر مهملة.",
      modelAnswer: {
        law: "\\( \\Delta T = T_f − T_i \\)",
        substitution: [
          "\\( \\Delta T = 30\\,°C − 25\\,°C \\)",
          "\\( \\Delta T = 5\\,°C \\)",
          "\\( q = S × m × \\Delta T \\)",
          "\\( q = 4.2\\,\\mathrm{J/(g·°C)} × 800\\,\\mathrm{g} × 5\\,°C \\)",
          "\\( q = 16800\\,\\mathrm{J} \\)"
        ],
        steps: [
          "التفاعل باعث للحرارة، لذلك:",
          "\\( q = −16800\\,\\mathrm{J} \\)",
          "\\( n = m / M \\)",
          "\\( n = 6\\,\\mathrm{g} / 60\\,\\mathrm{g/mol} \\)",
          "\\( n = 0.1\\,\\mathrm{mol} \\)",
          "لحساب الحرارة المنبعثة نتيجة احتراق 2 مول:",
          "\\( q = (2\\,\\mathrm{mol} × −16800\\,\\mathrm{J}) / 0.1\\,\\mathrm{mol} \\)",
          "\\( q = −336000\\,\\mathrm{J} \\)"
        ],
        finalAnswer: "\\( q\\,\\mathrm{(kJ)} = −336\\,\\mathrm{kJ} \\)"
      }
    },
    {
      id: 14,
      type: "calculation",
      metadata: {
        occurrence: "2024/تمهيدي"
      },
      text: "إذا تم حرق 4 g من مركب الهيدرازين، كتلته المولية 32 g/mol، في مسعر مفتوح يحتوي على 1000 g من الماء، والحرارة النوعية للماء تساوي 4.21 J/(g·°C)، فإن درجة الحرارة ترتفع من 24.6 °C إلى 28.6 °C. احسب الحرارة المتحررة نتيجة الاحتراق وانثالبي احتراق 1 mol من الهيدرازين بوحدة kJ/mol، على افتراض أن السعة الحرارية للمسعر مهملة.",
      modelAnswer: {
        law: "\\( n = m / M \\)",
        substitution: [
          "\\( n = 4\\,\\mathrm{g} / 32\\,\\mathrm{g/mol} \\)",
          "\\( n = 0.125\\,\\mathrm{mol} \\)",
          "\\( \\Delta T = T_f − T_i \\)",
          "\\( \\Delta T = 28.6\\,°C − 24.6\\,°C \\)",
          "\\( \\Delta T = 4\\,°C \\)",
          "\\( q = S × m × \\Delta T \\)",
          "\\( q = 4.2 × 1000\\,\\mathrm{g} × 4\\,°C \\)",
          "\\( q = 16800\\,\\mathrm{J} \\)"
        ],
        steps: [
          "التفاعل باعث للحرارة، لذلك:",
          "\\( q = −16800\\,\\mathrm{J} \\)",
          "\\( \\Delta H^\\circ = q / n \\)",
          "\\( \\Delta H^\\circ = −16800\\,\\mathrm{J} / 0.125\\,\\mathrm{mol} \\)",
          "\\( \\Delta H^\\circ = −134400\\,\\mathrm{J/mol} \\)"
        ],
        finalAnswer: "\\( \\Delta H^\\circ = −134.4\\,\\mathrm{kJ/mol} \\)"
      }
    },
    {
      id: 15,
      type: "calculation",
      metadata: {
        occurrence: "2024/3"
      },
      text: "إذا تم حرق عينة كتلتها 3 g من حامض الخليك CH_3COOH، كتلته المولية 60 g/mol، في مسعر مفتوح يحتوي على 1000 g من الماء، والحرارة النوعية للماء تساوي 4.2 J/(g·°C)، فإن درجة الحرارة ترتفع من 25.6 °C إلى 29.6 °C. احسب الحرارة المتحررة نتيجة الاحتراق وانثالبي احتراق 1 mol من الحامض بوحدة kJ/mol، على افتراض أن السعة الحرارية للمسعر مهملة.",
      modelAnswer: {
        law: "\\( \\Delta T = T_f − T_i \\)",
        substitution: [
          "\\( \\Delta T = 29.6\\,°C − 25.6\\,°C \\)",
          "\\( \\Delta T = 4\\,°C \\)",
          "\\( q = S × m × \\Delta T \\)",
          "\\( q = 4.2 × 1000\\,\\mathrm{g} × 4\\,°C \\)",
          "\\( q = 16800\\,\\mathrm{J} \\)"
        ],
        steps: [
          "التفاعل باعث للحرارة، لذلك:",
          "\\( q = −16800\\,\\mathrm{J} \\)",
          "\\( n = m / M \\)",
          "\\( n = 3\\,\\mathrm{g} / 60\\,\\mathrm{g/mol} \\)",
          "\\( n = 0.05\\,\\mathrm{mol} \\)",
          "\\( \\Delta H = q / n \\)",
          "\\( \\Delta H = −16800\\,\\mathrm{J} / 0.05\\,\\mathrm{mol} \\)",
          "\\( \\Delta H = −336000\\,\\mathrm{J/mol} \\)"
        ],
        finalAnswer: "\\( \\Delta H = −336\\,\\mathrm{kJ/mol} \\)"
      }
    },
    {
      id: 16,
      type: "theory",
      metadata: {
        occurrence: "2018/1 (تطبيقي) | 2023/تمهيدي (تطبيقي) | أسئلة الفصل"
      },
      text: "علل: يجب بيان الحالة الفيزيائية عند كتابة التفاعلات الحرارية.",
      modelAnswer: {
        theoryText: "لأن كمية الحرارة الممتصة أو المتحررة تتغير بتغير الحالة الفيزيائية (الطور) لمواد التفاعل."
      }
    },
    {
      id: 17,
      type: "theory",
      metadata: {
        occurrence: "2020/3 | 2022/1 | 2023/3 (أحيائي)"
      },
      text: "من الضروري بيان الحالة الفيزيائية عند كتابة التفاعلات الحرارية، علل ذلك.",
      modelAnswer: {
        theoryText: "لأن كمية الحرارة الممتصة أو المتحررة تتغير بتغير الحالة الفيزيائية (الطور) لمواد التفاعل."
      }
    },
    {
      id: 18,
      type: "theory",
      metadata: {
        occurrence: "2020/تمهيدي (تطبيقي) | 2023/2 (تطبيقي)"
      },
      text: "ما أهمية بيان الحالة الفيزيائية عند كتابة التفاعلات الحرارية؟",
      modelAnswer: {
        theoryText: "لأن كمية الحرارة الممتصة أو المتحررة تتغير بتغير الحالة الفيزيائية (الطور) لمواد التفاعل."
      }
    },
    {
      id: 19,
      type: "theory",
      metadata: {
        occurrence: "2025/2"
      },
      text: "علل: يجب ذكر الحالة الفيزيائية للمواد المشتركة في التفاعل عند كتابة المعادلة الكيميائية الحرارية.",
      modelAnswer: {
        theoryText: "لأن كمية الحرارة الممتصة أو المتحررة تتغير بتغير الحالة الفيزيائية (الطور) لمواد التفاعل."
      }
    },
    {
      id: 20,
      type: "theory",
      metadata: {
        occurrence: "2023/1 (أحيائي)"
      },
      text: "الانثالبي هي ............ وهي خاصية ............ لأنها ............ على كمية المادة الموجودة في النظام.",
      modelAnswer: {
        theoryText: "دالة حالة (حرارية ديناميكية) - شاملة - تعتمد."
      }
    },
    {
      id: 21,
      type: "theory",
      metadata: {
        occurrence: "2024/1 (محاولات)"
      },
      text: "في التفاعلات الكيميائية الحرارية يجب ذكر الحالة الفيزيائية للمواد الداخلة في التفاعل والناتجة منه، وذلك بسبب أن كمية الحرارة الممتصة أو المتحررة ............ بتغير الحالة الفيزيائية (الطور) لمواد التفاعل.",
      modelAnswer: {
        theoryText: "تتغير."
      }
    },
    {
      id: 22,
      type: "theory",
      metadata: {
        occurrence: "2017/2 (أسئلة الموصل) | 2020/1 (تطبيقي)"
      },
      text: "عرّف انثالبي التكوين القياسية \\( \\Delta H^\\circ_f \\).",
      modelAnswer: {
        theoryText: "هي الحرارة اللازمة لتكوين مول واحد من أي مركب من عناصره الأساسية الموجودة بأثبت صورها في حالاتها القياسية."
      }
    },
    {
      id: 23,
      type: "theory",
      metadata: {
        occurrence: "2017/1 (أسئلة خارج القطر) | 2024/تمهيدي"
      },
      text: "متى يكون \\( \\Delta H^\\circ_f = \\Delta H^\\circ_r \\)؟ بيّن ذلك مع مثال.",
      modelAnswer: {
        theoryText: "عندما يتحقق شرطي:<br>1) يتكون مول واحد من المادة الناتجة.<br>2) تتكون المادة من عناصرها الأساسية وبأثبت صورها في الظروف القياسية.<br><br>مثال:<br>\\( \\mathrm{C(graphite) + O_2(g) \\rightarrow CO_2(g)} \\)<br><br>في هذا المثال:<br>\\( \\Delta H^\\circ_r = \\Delta H^\\circ_f \\) لـ \\( \\mathrm{CO_2} \\)."
      }
    },
    {
      id: 24,
      type: "theory",
      metadata: {
        occurrence: "2015/1 (أسئلة خارج القطر)"
      },
      text: "علل: \\( \\Delta H^\\circ_r \\) للتفاعل الغازي:<br>\\( \\mathrm{H_2(g) + F_2(g) \\rightarrow 2HF(g)} \\)<br>لا تساوي \\( \\Delta H^\\circ_f \\) لـ HF.",
      modelAnswer: {
        theoryText: "لأن عدد مولات المادة المتكونة (الناتج) ليس 1 mol."
      }
    },
    {
      id: 25,
      type: "theory",
      metadata: {
        occurrence: "2016/2"
      },
      text: "علل: \\( \\Delta H^\\circ_r \\) للتفاعل الغازي:<br>\\( \\mathrm{2H_2(g) + O_2(g) \\rightarrow 2H_2O(g)} \\)<br>لا تساوي \\( \\Delta H^\\circ_f \\) لـ \\( \\mathrm{H_2O} \\).",
      modelAnswer: {
        theoryText: "لأن عدد مولات المادة المتكونة \\( \\mathrm{H_2O} \\) لا تساوي 1 mol."
      }
    },
    {
      id: 26,
      type: "theory",
      metadata: {
        occurrence: "2017/1 (أسئلة الموصل)"
      },
      text: "علل: \\( \\Delta H^\\circ_r \\) للتفاعل:<br>\\( \\mathrm{4Fe(s) + 3O_2(g) \\rightarrow 2Fe_2O_3(s)} \\)<br>لا تساوي \\( \\Delta H^\\circ_f \\) لـ \\( \\mathrm{Fe_2O_3} \\).",
      modelAnswer: {
        theoryText: "لأن عدد مولات التكوين لـ \\( \\mathrm{Fe_2O_3} \\) يساوي 2 mol، وليس 1 mol."
      }
    },
    {
      id: 27,
      type: "theory",
      metadata: {
        occurrence: "2016/1 (أسئلة خارج القطر) | 2024/3 (محاولات)"
      },
      text: "عرّف انثالبي الاحتراق القياسية.",
      modelAnswer: {
        theoryText: "هي الحرارة المصاحبة من حرق مول واحد من أي مادة حرقاً تاماً مع وفرة من الأوكسجين عند الظروف القياسية، في درجة حرارة 25 °C وضغط 1 atm، ويرمز لها بالرمز \\( \\Delta H^\\circ_c \\)."
      }
    },
    {
      id: 28,
      type: "theory",
      metadata: {
        occurrence: "2018/1 (أسئلة خارج القطر) | 2020/تمهيدي"
      },
      text: "عرّف \\( \\Delta H^\\circ_c \\).",
      modelAnswer: {
        theoryText: "هي الحرارة المصاحبة من حرق مول واحد من أي مادة حرقاً تاماً مع وفرة من الأوكسجين عند الظروف القياسية، في درجة حرارة 25 °C وضغط 1 atm، ويرمز لها بالرمز \\( \\Delta H^\\circ_c \\)."
      }
    },
    {
      id: 29,
      type: "theory",
      metadata: {
        occurrence: "2022/تمهيدي"
      },
      text: "عرّف انثالبي الاحتراق القياسية، وما وحدتها، وماذا يرمز لها؟",
      modelAnswer: {
        theoryText: "هي الحرارة المصاحبة من حرق مول واحد من أي مادة حرقاً تاماً مع وفرة من الأوكسجين عند الظروف القياسية، في درجة حرارة 25 °C وضغط 1 atm.<br>وحدتها: kJ/mol.<br>ويرمز لها بالرمز: \\( \\Delta H^\\circ_c \\)."
      }
    },
    {
      id: 30,
      type: "theory",
      metadata: {
        occurrence: "2023/تمهيدي (أحيائي)"
      },
      text: "انثالبي الاحتراق القياسية هي كمية الحرارة المصاحبة للتفاعل من حرق مول واحد من أي مادة حرقاً تاماً مع وفرة من الأوكسجين عند الظروف القياسية، في درجة حرارة ............ وضغط ............، ويرمز لها بالرمز ............",
      modelAnswer: {
        theoryText: "25 °C - 1 atm - \\( \\Delta H^\\circ_c \\)"
      }
    },
    {
      id: 31,
      type: "theory",
      metadata: {
        occurrence: "2017/تمهيدي"
      },
      text: "للتفاعل:<br>\\( \\mathrm{4Al(s) + 3O_2(g) \\rightarrow 2Al_2O_3(s)} \\)<br><br>علل:<br>1) \\( \\Delta H^\\circ_r \\) لا تساوي \\( \\Delta H^\\circ_c \\) لـ Al.<br>2) \\( \\Delta H^\\circ_r \\) لا تساوي \\( \\Delta H^\\circ_f \\) لـ \\( \\mathrm{Al_2O_3} \\).",
      modelAnswer: {
        theoryText: "1) لأن عدد مولات المادة المحترقة Al ليس 1 mol.<br>2) لأن عدد مولات المادة المتكونة \\( \\mathrm{Al_2O_3} \\) ليس 1 mol."
      }
    },
    {
      id: 32,
      type: "theory",
      metadata: {
        occurrence: "2017/1 (أسئلة الموصل، تطبيقي)"
      },
      text: "علل: للتفاعل:<br>\\( \\mathrm{2C(graphite) + 2O_2(g) \\rightarrow 2CO_2(g)} \\)<br><br>\\( \\Delta H^\\circ_r \\) لا تساوي \\( \\Delta H^\\circ_c \\).",
      modelAnswer: {
        theoryText: "لأن عدد مولات المادة المحترقة (المتفاعلة) لا تساوي 1 mol."
      }
    },
    {
      id: 33,
      type: "theory",
      metadata: {
        occurrence: "2017/1 (أسئلة خارج القطر، تطبيقي) | 2020/تمهيدي (تطبيقي)"
      },
      text: "علل: للتفاعل:<br>\\( \\mathrm{2CH_4(g) + 4O_2(g) \\rightarrow 2CO_2(g) + 4H_2O(l)} \\)<br><br>\\( \\Delta H^\\circ_r \\) لا تساوي \\( \\Delta H^\\circ_c \\).",
      modelAnswer: {
        theoryText: "لأن عدد مولات المادة المحترقة \\( \\mathrm{CH_4} \\) تساوي 2 mol وليس 1 mol."
      }
    },
    {
      id: 34,
      type: "theory",
      metadata: {
        occurrence: "2017/3"
      },
      text: "علل: للتفاعل:<br>\\( \\mathrm{4Al(s) + 3O_2(g) \\rightarrow 2Al_2O_3(s)} \\)<br><br>\\( \\Delta H^\\circ_c \\) لا تساوي \\( \\Delta H^\\circ_r \\).",
      modelAnswer: {
        theoryText: "لأن عدد مولات المادة المحترقة (المتفاعلة) لا تساوي 1 mol."
      }
    },
    {
      id: 35,
      type: "theory",
      metadata: {
        occurrence: "2023/3 (تطبيقي)"
      },
      text: "متى يكون \\( \\Delta H^\\circ_c = \\Delta H^\\circ_r \\)؟ بيّن ذلك مع مثال.",
      modelAnswer: {
        theoryText: "عندما يتحقق شرطا:<br>1) يحترق مول واحد من المادة.<br>2) يحترق مع كمية وافرة من الأوكسجين في الظروف القياسية.<br><br>مثال:<br>\\( \\mathrm{H_2(g) + 1/2 O_2(g) \\rightarrow H_2O(l)} \\)<br><br>في هذا المثال:<br>\\( \\Delta H^\\circ_c = \\Delta H^\\circ_r \\)."
      }
    },
    {
      id: 36,
      type: "theory",
      metadata: {
        occurrence: "2015/تمهيدي | 2021/1 (تطبيقي)"
      },
      text: "إذا علمت أن انثالبي التبخر للأمونيا تساوي 23 kJ/mol، فإن انثالبي التكثف للأمونيا يساوي ............",
      modelAnswer: {
        theoryText: "\\( \\Delta H_{cond} = −23\\,\\mathrm{kJ/mol} \\)"
      }
    },
    {
      id: 37,
      type: "theory",
      metadata: {
        occurrence: "2013/1 (أسئلة خارج القطر)"
      },
      text: "إذا علمت أن انثالبي الانصهار لحامض الخليك CH_3COOH تبلغ 5.11 kJ/mol، فإن انثالبي الانجماد للحامض هو:",
      choices: ["−5.11 kJ/mol", "5.11 J/mol", "5.11 kJ/mol"],
      modelAnswer: {
        theoryText: "−5.11 kJ/mol"
      }
    },
    {
      id: 38,
      type: "calculation",
      metadata: {
        occurrence: "2024/2 | 2023/1 (تطبيقي) | 2022/2 (أحيائي)"
      },
      text: "احسب انثالبي التكوين القياسية للكحول المثيلي (الميثانول) CH_3OH، إذا علمت أن انثالبي الاحتراق القياسية بوحدات kJ/mol لكل من:<br>\\( \\mathrm{H_2 = −286} \\)<br>\\( \\mathrm{C(graphite) = −394} \\)<br>\\( \\mathrm{CH_3OH = −727} \\)",
      modelAnswer: {
        idea: "الطريقة الأولى (باستخدام قانون هس):<br>معادلة التكوين المطلوبة:<br>\\( \\mathrm{C(graphite) + 2H_2(g) + 1/2 O_2(g) \\rightarrow CH_3OH(l)} \\)",
        law: "\\( \\mathrm{1)\\ C(graphite) + O_2(g) \\rightarrow CO_2(g)} \\quad \\Delta H^\\circ_r = −394\\,\\mathrm{kJ/mol} \\)",
        substitution: [
          "\\( \\mathrm{2)\\ H_2(g) + 1/2 O_2(g) \\rightarrow H_2O(l)} \\quad \\Delta H^\\circ_r = −286\\,\\mathrm{kJ/mol} \\)",
          "تضرب المعادلة الثانية في 2:",
          "\\( \\mathrm{2H_2(g) + O_2(g) \\rightarrow 2H_2O(l)} \\quad \\Delta H^\\circ_r = 2 × (−286) = −572\\,\\mathrm{kJ/mol} \\)",
          "\\( \\mathrm{3)\\ CH_3OH(l) + 3/2 O_2(g) \\rightarrow CO_2(g) + 2H_2O(l)} \\quad \\Delta H^\\circ_r = −727\\,\\mathrm{kJ/mol} \\)",
          "تقلب المعادلة الثالثة:",
          "\\( \\mathrm{CO_2(g) + 2H_2O(l) \\rightarrow CH_3OH(l) + 3/2 O_2(g)} \\quad \\Delta H^\\circ_r = +727\\,\\mathrm{kJ/mol} \\)",
          "بجمع المعادلات الثلاث:",
          "\\( \\mathrm{C(graphite) + 2H_2(g) + 1/2 O_2(g) \\rightarrow CH_3OH(l)} \\)",
          "\\( \\Delta H^\\circ_r = −394 − 572 + 727 \\)",
          "\\( \\Delta H^\\circ_r = −239\\,\\mathrm{kJ/mol} \\)",
          "لأن الناتج مول واحد من \\( \\mathrm{CH_3OH} \\):",
          "\\( \\Delta H^\\circ_f\\mathrm{(CH_3OH)} = \\Delta H^\\circ_r = −239\\,\\mathrm{kJ/mol} \\)"
        ],
        steps: [
          "الطريقة الثانية (باستخدام قانون المجموع):",
          "\\( \\Delta H^\\circ_c = \\Sigma n \\Delta H^\\circ_f\\mathrm{(P)} − \\Sigma n \\Delta H^\\circ_f\\mathrm{(R)} \\)",
          "\\( −727 = [−394 + 2 × (−286)] − [\\Delta H^\\circ_f\\mathrm{(CH_3OH)} + 0] \\)",
          "\\( −727 = [−966] − \\Delta H^\\circ_f\\mathrm{(CH_3OH)} \\)",
          "\\( \\Delta H^\\circ_f\\mathrm{(CH_3OH)} = −966 + 727 \\)"
        ],
        finalAnswer: "\\( \\Delta H^\\circ_f\\mathrm{(CH_3OH)} = −239\\,\\mathrm{kJ/mol} \\)"
      }
    },
    {
      id: 39,
      type: "calculation",
      metadata: {
        occurrence: "2022/1 (تطبيقي)"
      },
      text: "احسب انثالبي التكوين القياسية لغاز البروبان C_3H_8، إذا علمت أن حرارة الاحتراق القياسية بوحدات kJ/mol لكل من:<br>\\( \\mathrm{C_3H_8 = −2219} \\)<br>\\( \\mathrm{C(graphite) = −394} \\)<br>\\( \\mathrm{H_2 = −286} \\)",
      modelAnswer: {
        idea: "الطريقة الأولى (باستخدام قانون المجموع):<br>\\( \\mathrm{C_3H_8(g) + 5O_2(g) \\rightarrow 3CO_2(g) + 4H_2O(l)} \\)",
        law: "\\( \\Delta H^\\circ_r = \\Sigma n \\Delta H^\\circ_f\\mathrm{(P)} − \\Sigma n \\Delta H^\\circ_f\\mathrm{(R)} \\)",
        substitution: [
          "\\( −2219 = [3 × (−394) + 4 × (−286)] − [\\Delta H^\\circ_f\\mathrm{(C_3H_8)} + 5(0)] \\)",
          "\\( −2219 = [−1182 − 1144] − \\Delta H^\\circ_f\\mathrm{(C_3H_8)} \\)",
          "\\( −2219 = −2326 − \\Delta H^\\circ_f\\mathrm{(C_3H_8)} \\)",
          "\\( \\Delta H^\\circ_f\\mathrm{(C_3H_8)} = −2326 + 2219 \\)",
          "\\( \\Delta H^\\circ_f\\mathrm{(C_3H_8)} = −107\\,\\mathrm{kJ/mol} \\)"
        ],
        steps: [
          "الطريقة الثانية (باستخدام قانون هس):",
          "معادلة التكوين المطلوبة:",
          "\\( \\mathrm{3C(graphite) + 4H_2(g) \\rightarrow C_3H_8(g)} \\)",
          "\\( \\mathrm{1)\\ C(graphite) + O_2(g) \\rightarrow CO_2(g)} \\quad \\Delta H^\\circ_r = −394\\,\\mathrm{kJ/mol} \\)",
          "تضرب المعادلة الأولى في 3:",
          "\\( \\mathrm{3C(graphite) + 3O_2(g) \\rightarrow 3CO_2(g)} \\quad \\Delta H^\\circ_r = −1182\\,\\mathrm{kJ/mol} \\)",
          "\\( \\mathrm{2)\\ H_2(g) + 1/2 O_2(g) \\rightarrow H_2O(l)} \\quad \\Delta H^\\circ_r = −286\\,\\mathrm{kJ/mol} \\)",
          "تضرب المعادلة الثانية في 4:",
          "\\( \\mathrm{4H_2(g) + 2O_2(g) \\rightarrow 4H_2O(l)} \\quad \\Delta H^\\circ_r = −1144\\,\\mathrm{kJ/mol} \\)",
          "\\( \\mathrm{3)\\ C_3H_8(g) + 5O_2(g) \\rightarrow 3CO_2(g) + 4H_2O(l)} \\quad \\Delta H^\\circ_r = −2219\\,\\mathrm{kJ/mol} \\)",
          "تقلب المعادلة الثالثة:",
          "\\( \\mathrm{3CO_2(g) + 4H_2O(l) \\rightarrow C_3H_8(g) + 5O_2(g)} \\quad \\Delta H^\\circ_r = +2219\\,\\mathrm{kJ/mol} \\)",
          "بجمع المعادلات الثلاث:",
          "\\( \\Delta H^\\circ_f\\mathrm{(C_3H_8)} = −1182 − 1144 + 2219 \\)"
        ],
        finalAnswer: "\\( \\Delta H^\\circ_f\\mathrm{(C_3H_8)} = −107\\,\\mathrm{kJ/mol} \\)"
      }
    },
    {
      id: 40,
      type: "calculation",
      metadata: {
        occurrence: "2014/1 | 2013/2 (تمهيدي)"
      },
      text: "احسب التغير في انثالبي التكوين القياسية لـ Al_2O_3، \\( \\Delta H^\\circ_f \\)، والتغير في انثالبي الاحتراق القياسية للألمنيوم، \\( \\Delta H^\\circ_c\\mathrm{(Al)} \\)، للتفاعل الآتي:<br>\\( \\mathrm{4Al(s) + 3O_2(g) \\rightarrow 2Al_2O_3(s)} \\)<br>\\( \\Delta H^\\circ_r = −3340\\,\\mathrm{kJ} \\)",
      modelAnswer: {
        idea: "أولاً: حساب انثالبي التكوين القياسية لـ Al_2O_3",
        law: "\\( \\Delta H^\\circ_f\\mathrm{(Al_2O_3)} = \\Delta H^\\circ_r / n \\)",
        substitution: [
          "\\( \\Delta H^\\circ_f\\mathrm{(Al_2O_3)} = −3340\\,\\mathrm{kJ} / 2\\,\\mathrm{mol} \\)",
          "\\( \\Delta H^\\circ_f\\mathrm{(Al_2O_3)} = −1670\\,\\mathrm{kJ/mol} \\)",
          "ثانياً: حساب انثالبي الاحتراق القياسية للألمنيوم Al",
          "\\( \\Delta H^\\circ_c\\mathrm{(Al)} = \\Delta H^\\circ_r / n \\)",
          "\\( \\Delta H^\\circ_c\\mathrm{(Al)} = −3340\\,\\mathrm{kJ} / 4\\,\\mathrm{mol} \\)"
        ],
        steps: [],
        finalAnswer: "\\( \\Delta H^\\circ_c\\mathrm{(Al)} = −835\\,\\mathrm{kJ/mol} \\)"
      }
    },
    {
      id: 41,
      type: "calculation",
      metadata: {
        occurrence: "2022/1 (تطبيقي)"
      },
      text: "احسب انثالبي التكوين القياسية لسائل الماء بالاستعانة بالتفاعل الآتي:<br>\\( \\mathrm{3H_2O(l) \\rightarrow 3H_2(g) + 3/2 O_2(g)} \\)<br>حيث: \\( \\Delta H^\\circ_r = +858\\,\\mathrm{kJ/mol} \\)",
      modelAnswer: {
        idea: "الطريقة الأولى:<br>تقلب المعادلة المعطاة لتصبح معادلة تكوين:<br>\\( \\mathrm{3H_2(g) + 3/2 O_2(g) \\rightarrow 3H_2O(l)} \\quad \\Delta H^\\circ_r = −858\\,\\mathrm{kJ} \\)",
        law: "\\( \\Delta H^\\circ_f\\mathrm{(H_2O)} = \\Delta H^\\circ_r / n \\)",
        substitution: [
          "\\( \\Delta H^\\circ_f\\mathrm{(H_2O)} = −858\\,\\mathrm{kJ} / 3\\,\\mathrm{mol} \\)",
          "\\( \\Delta H^\\circ_f\\mathrm{(H_2O)} = −286\\,\\mathrm{kJ/mol} \\)",
          "الطريقة الثانية (باستخدام قانون المجموع للتفاعل الأصلي):",
          "\\( \\Delta H^\\circ_r = \\Sigma n \\Delta H^\\circ_f\\mathrm{(P)} − \\Sigma n \\Delta H^\\circ_f\\mathrm{(R)} \\)",
          "\\( 858 = [0 + 0] − [3 × \\Delta H^\\circ_f\\mathrm{(H_2O)}] \\)",
          "\\( 858 = −3 × \\Delta H^\\circ_f\\mathrm{(H_2O)} \\)"
        ],
        steps: [],
        finalAnswer: "\\( \\Delta H^\\circ_f\\mathrm{(H_2O)} = −286\\,\\mathrm{kJ/mol} \\)"
      }
    },
    {
      id: 42,
      type: "calculation",
      metadata: {
        occurrence: "2022/1 (أحيائي)"
      },
      text: "إذا علمت أن انثالبي التفاعل القياسية للتفاعل:<br>\\( \\mathrm{4Al(s) + 3O_2(g) \\rightarrow 2Al_2O_3(s)} \\)<br>تساوي: \\( \\Delta H^\\circ_r = −3340\\,\\mathrm{kJ} \\)<br><br>احسب:<br>أولاً: \\( \\Delta H^\\circ_f \\) لـ Al_2O_3.<br>ثانياً: \\( \\Delta H^\\circ_c \\) لـ Al.",
      modelAnswer: {
        idea: "أولاً: حساب انثالبي التكوين القياسية لـ Al_2O_3",
        law: "\\( \\Delta H^\\circ_f\\mathrm{(Al_2O_3)} = \\Delta H^\\circ_r / n \\)",
        substitution: [
          "\\( \\Delta H^\\circ_f\\mathrm{(Al_2O_3)} = −3340\\,\\mathrm{kJ} / 2\\,\\mathrm{mol} \\)",
          "\\( \\Delta H^\\circ_f\\mathrm{(Al_2O_3)} = −1670\\,\\mathrm{kJ/mol} \\)",
          "ثانياً: حساب انثالبي الاحتراق القياسية لـ Al",
          "\\( \\Delta H^\\circ_c\\mathrm{(Al)} = \\Delta H^\\circ_r / n \\)",
          "\\( \\Delta H^\\circ_c\\mathrm{(Al)} = −3340\\,\\mathrm{kJ} / 4\\,\\mathrm{mol} \\)"
        ],
        steps: [],
        finalAnswer: "\\( \\Delta H^\\circ_c\\mathrm{(Al)} = −835\\,\\mathrm{kJ/mol} \\)"
      }
    },
    {
      id: 43,
      type: "calculation",
      metadata: {
        occurrence: "2023/3 (أحيائي)"
      },
      text: "علمت أن انثالبي التفاعل القياسية للتفاعل:<br>\\( \\mathrm{4Fe(s) + 3O_2(g) \\rightarrow 2Fe_2O_3(s)} \\)<br>تساوي: \\( \\Delta H^\\circ_r = −1644\\,\\mathrm{kJ} \\)<br><br>احسب:<br>أولاً: \\( \\Delta H^\\circ_f \\) لـ Fe_2O_3.<br>ثانياً: \\( \\Delta H^\\circ_c \\) لـ Fe.",
      modelAnswer: {
        idea: "أولاً: حساب انثالبي التكوين القياسية لـ Fe_2O_3",
        law: "\\( \\Delta H^\\circ_f\\mathrm{(Fe_2O_3)} = \\Delta H^\\circ_r / n \\)",
        substitution: [
          "\\( \\Delta H^\\circ_f\\mathrm{(Fe_2O_3)} = −1644\\,\\mathrm{kJ} / 2\\,\\mathrm{mol} \\)",
          "\\( \\Delta H^\\circ_f\\mathrm{(Fe_2O_3)} = −822\\,\\mathrm{kJ/mol} \\)",
          "ثانياً: حساب انثالبي الاحتراق القياسية لـ Fe",
          "\\( \\Delta H^\\circ_c\\mathrm{(Fe)} = \\Delta H^\\circ_r / n \\)",
          "\\( \\Delta H^\\circ_c\\mathrm{(Fe)} = −1644\\,\\mathrm{kJ} / 4\\,\\mathrm{mol} \\)"
        ],
        steps: [],
        finalAnswer: "\\( \\Delta H^\\circ_c\\mathrm{(Fe)} = −411\\,\\mathrm{kJ/mol} \\)"
      }
    }
  ]
};

// Export to window object for index.html context
if (typeof window !== "undefined") {
  window.examData = examData;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = examData;
}
