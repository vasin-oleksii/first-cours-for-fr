const levels = {
  A0: [
    ["jouer", "a", "играть в", "Je joue au tennis.", "Я играю в теннис."],
    ["parler", "a", "говорить с", "Elle parle a sa mere.", "Она говорит с мамой."],
    ["penser", "a", "думать о", "Je pense a toi.", "Я думаю о тебе."],
    ["aller", "a", "идти/ехать в", "Nous allons a l'ecole.", "Мы идем в школу."],
    ["venir", "de", "приходить из", "Il vient de Paris.", "Он из Парижа."],
    ["avoir besoin", "de", "нуждаться в", "Tu as besoin de repos.", "Тебе нужен отдых."],
    ["avoir envie", "de", "хотеть", "J'ai envie de chocolat.", "Мне хочется шоколада."],
    ["chercher", "Ø", "искать", "Je cherche mon stylo.", "Я ищу свою ручку."],
    ["regarder", "Ø", "смотреть на", "Nous regardons le film.", "Мы смотрим фильм."],
    ["ecouter", "Ø", "слушать", "Elle ecoute la chanson.", "Она слушает песню."],
    ["attendre", "Ø", "ждать", "J'attends le bus.", "Я жду автобус."],
    ["demander", "a", "просить у / спрашивать у", "Il demande a son professeur.", "Он спрашивает у учителя."],
    ["repondre", "a", "отвечать на", "Je reponds a la question.", "Я отвечаю на вопрос."],
    ["appeler", "Ø", "звонить кому-то", "Aglaya appelle sa professeure.", "Аглая звонит преподавательнице."],
    ["aider", "Ø", "помогать кому-то", "Aglaya aide sa voisine.", "Аглая помогает соседке."],
    ["aimer", "Ø", "любить", "J'aime le francais.", "Я люблю французский."],
    ["habiter", "a", "жить в", "Nous habitons a Lyon.", "Мы живем в Лионе."],
    ["partir", "pour", "уезжать в / ради", "Je pars pour Marseille.", "Я уезжаю в Марсель."],
    ["rentrer", "a", "возвращаться в", "Il rentre a la maison.", "Он возвращается домой."],
    ["sortir", "de", "выходить из", "Elle sort de la classe.", "Она выходит из класса."]
  ],
  A1: [
    ["commencer", "a", "начинать", "Je commence a lire.", "Я начинаю читать."],
    ["continuer", "a", "продолжать", "Nous continuons a travailler.", "Мы продолжаем работать."],
    ["apprendre", "a", "учиться", "Elle apprend a conduire.", "Она учится водить."],
    ["arriver", "a", "удаваться", "J'arrive a comprendre.", "Мне удается понять."],
    ["essayer", "de", "пытаться", "Il essaie de parler francais.", "Он пытается говорить по-французски."],
    ["oublier", "de", "забывать сделать", "Tu oublies de fermer la porte.", "Ты забываешь закрыть дверь."],
    ["decider", "de", "решать", "Nous decidons de partir.", "Мы решаем уехать."],
    ["refuser", "de", "отказываться", "Elle refuse de mentir.", "Она отказывается лгать."],
    ["accepter", "de", "соглашаться", "J'accepte de t'aider.", "Я соглашаюсь тебе помочь."],
    ["proposer", "de", "предлагать", "Il propose de diner ensemble.", "Он предлагает поужинать вместе."],
    ["faire attention", "a", "обращать внимание на", "Fais attention a la route.", "Обращай внимание на дорогу."],
    ["s'interesser", "a", "интересоваться", "Je m'interesse a l'art.", "Я интересуюсь искусством."],
    ["s'occuper", "de", "заниматься", "Elle s'occupe des enfants.", "Она занимается детьми."],
    ["se souvenir", "de", "помнить", "Je me souviens de ce jour.", "Я помню этот день."],
    ["se moquer", "de", "насмехаться над", "Il se moque de moi.", "Он смеется надо мной."],
    ["inviter", "a", "приглашать на/к", "Elle invite Paul a diner.", "Она приглашает Поля на ужин."],
    ["participer", "a", "участвовать в", "Nous participons au cours.", "Мы участвуем в уроке."],
    ["manquer", "a", "скучать по", "Tu me manques.", "Я скучаю по тебе."],
    ["plaire", "a", "нравиться", "Ce livre plait a Marie.", "Эта книга нравится Мари."],
    ["parler", "de", "говорить о", "On parle de vacances.", "Мы говорим о каникулах."]
  ],
  A2: [
    ["reussir", "a", "суметь", "Elle reussit a finir le projet.", "Ей удается закончить проект."],
    ["apprendre", "de", "узнавать от", "J'apprends la nouvelle de Luc.", "Я узнаю новость от Люка."],
    ["servir", "a", "служить для", "Cette cle sert a ouvrir la porte.", "Этот ключ служит для открытия двери."],
    ["penser", "de", "иметь мнение о", "Que penses-tu de ce film ?", "Что ты думаешь об этом фильме?"],
    ["rever", "de", "мечтать о", "Je reve de voyager.", "Я мечтаю путешествовать."],
    ["profiter", "de", "пользоваться", "Nous profitons du soleil.", "Мы наслаждаемся солнцем."],
    ["se preparer", "a", "готовиться к", "Ils se preparent a l'examen.", "Они готовятся к экзамену."],
    ["s'habituer", "a", "привыкать к", "Je m'habitue a cette ville.", "Я привыкаю к этому городу."],
    ["renoncer", "a", "отказываться от", "Elle renonce a son idee.", "Она отказывается от своей идеи."],
    ["tenir", "a", "дорожить / настаивать", "Je tiens a cette tradition.", "Я дорожу этой традицией."],
    ["manquer", "de", "не хватать", "Nous manquons de temps.", "Нам не хватает времени."],
    ["changer", "de", "менять", "Il change de place.", "Он меняет место."],
    ["dependre", "de", "зависеть от", "Tout depend de toi.", "Все зависит от тебя."],
    ["avoir peur", "de", "бояться", "J'ai peur de l'orage.", "Я боюсь грозы."],
    ["etre content", "de", "быть довольным", "Elle est contente de son resultat.", "Она довольна своим результатом."],
    ["etre pret", "a", "быть готовым", "Je suis pret a commencer.", "Я готов начать."],
    ["obliger", "a", "заставлять", "Le prof oblige les eleves a ecouter.", "Учитель заставляет учеников слушать."],
    ["demander", "de", "просить сделать", "Je te demande de rester.", "Я прошу тебя остаться."],
    ["conseiller", "de", "советовать", "Il conseille de dormir plus.", "Он советует больше спать."],
    ["permettre", "de", "позволять", "Ce ticket permet d'entrer.", "Этот билет позволяет войти."]
  ],
  B1: [
    ["hesiter", "a", "колебаться", "J'hesite a accepter.", "Я колеблюсь, соглашаться ли."],
    ["songer", "a", "подумывать о", "Elle songe a demenager.", "Она подумывает о переезде."],
    ["consister", "a", "заключаться в", "Le jeu consiste a deviner.", "Игра заключается в угадывании."],
    ["encourager", "a", "поощрять", "Il m'encourage a essayer.", "Он поощряет меня попробовать."],
    ["forcer", "a", "заставлять", "La pluie nous force a rentrer.", "Дождь заставляет нас вернуться."],
    ["autoriser", "a", "разрешать", "On m'autorise a sortir.", "Мне разрешают выйти."],
    ["apprendre", "a quelqu'un a", "учить кого-то", "Elle apprend aux enfants a nager.", "Она учит детей плавать."],
    ["se mettre", "a", "начинать вдруг", "Il se met a rire.", "Он начинает смеяться."],
    ["tarder", "a", "медлить", "Ne tarde pas a repondre.", "Не медли с ответом."],
    ["obtenir", "de", "добиваться от", "J'obtiens de lui une promesse.", "Я добиваюсь от него обещания."],
    ["convaincre", "de", "убеждать сделать", "Elle me convainc de venir.", "Она убеждает меня прийти."],
    ["empecher", "de", "мешать", "Le bruit m'empeche de dormir.", "Шум мешает мне спать."],
    ["eviter", "de", "избегать", "J'evite de parler trop vite.", "Я избегаю говорить слишком быстро."],
    ["cesser", "de", "прекращать", "Il cesse de se plaindre.", "Он перестает жаловаться."],
    ["finir", "par", "в итоге", "Elle finit par comprendre.", "Она в итоге понимает."],
    ["s'excuser", "de", "извиняться за", "Il s'excuse d'etre en retard.", "Он извиняется за опоздание."],
    ["se plaindre", "de", "жаловаться на", "Elle se plaint du bruit.", "Она жалуется на шум."],
    ["insister", "pour", "настаивать, чтобы", "Il insiste pour payer.", "Он настаивает на том, чтобы заплатить."],
    ["compter", "sur", "рассчитывать на", "Je compte sur ton aide.", "Я рассчитываю на твою помощь."],
    ["se servir", "de", "пользоваться", "Je me sers de ce dictionnaire.", "Я пользуюсь этим словарем."]
  ],
  B2: [
    ["aspirer", "a", "стремиться к", "Elle aspire a devenir medecin.", "Она стремится стать врачом."],
    ["contribuer", "a", "способствовать", "Ce livre contribue a clarifier le sujet.", "Эта книга помогает прояснить тему."],
    ["proceder", "a", "приступать к", "Nous procedons a l'analyse.", "Мы приступаем к анализу."],
    ["veiller", "a", "следить за тем, чтобы", "Veille a fermer la fenetre.", "Проследи, чтобы окно было закрыто."],
    ["s'attendre", "a", "ожидать", "Je m'attends a une reponse claire.", "Я ожидаю ясного ответа."],
    ["s'opposer", "a", "противиться", "Ils s'opposent a cette decision.", "Они противятся этому решению."],
    ["echapper", "a", "ускользать от", "Ce detail echappe a tout le monde.", "Эта деталь ускользает от всех."],
    ["nuire", "a", "вредить", "Le stress nuit a la sante.", "Стресс вредит здоровью."],
    ["recourir", "a", "прибегать к", "On recourt a une methode simple.", "Мы прибегаем к простому методу."],
    ["renvoyer", "a", "отсылать к", "Ce mot renvoie a une idee ancienne.", "Это слово отсылает к старой идее."],
    ["s'abstenir", "de", "воздерживаться от", "Il s'abstient de commenter.", "Он воздерживается от комментариев."],
    ["se charger", "de", "брать на себя", "Je me charge de reserver.", "Я беру на себя бронирование."],
    ["se passer", "de", "обходиться без", "Elle se passe de sucre.", "Она обходится без сахара."],
    ["se rejouir", "de", "радоваться", "Nous nous rejouissons de votre succes.", "Мы радуемся вашему успеху."],
    ["douter", "de", "сомневаться в", "Je doute de son explication.", "Я сомневаюсь в его объяснении."],
    ["s'efforcer", "de", "стараться", "Il s'efforce de rester calme.", "Он старается оставаться спокойным."],
    ["accuser", "de", "обвинять в", "On l'accuse de mentir.", "Его обвиняют во лжи."],
    ["feliciter", "de", "поздравлять с", "Je te felicite de ta reussite.", "Я поздравляю тебя с успехом."],
    ["se battre", "pour", "бороться за", "Ils se battent pour leurs droits.", "Они борются за свои права."],
    ["agir", "sur", "действовать на", "Le medicament agit sur la douleur.", "Лекарство действует на боль."]
  ],
  C1: [
    ["aboutir", "a", "приводить к", "Cette discussion aboutit a un accord.", "Эта дискуссия приводит к соглашению."],
    ["s'apparenter", "a", "быть сродни", "Cette theorie s'apparente a une hypothese.", "Эта теория сродни гипотезе."],
    ["se borner", "a", "ограничиваться", "Il se borne a constater les faits.", "Он ограничивается констатацией фактов."],
    ["concourir", "a", "способствовать", "Ces mesures concourent a la stabilite.", "Эти меры способствуют стабильности."],
    ["s'exposer", "a", "подвергаться", "Elle s'expose a des critiques.", "Она подвергается критике."],
    ["incliner", "a", "склонять к", "Cela m'incline a la prudence.", "Это склоняет меня к осторожности."],
    ["parvenir", "a", "достигать", "Il parvient a resoudre le probleme.", "Ему удается решить проблему."],
    ["suppleer", "a", "восполнять", "Cette aide supplee a un manque.", "Эта помощь восполняет нехватку."],
    ["s'en tenir", "a", "придерживаться", "Je m'en tiens a ma decision.", "Я придерживаюсь своего решения."],
    ["viser", "a", "иметь целью", "La reforme vise a simplifier la procedure.", "Реформа направлена на упрощение процедуры."],
    ["se departir", "de", "отказываться от", "Il ne se departit pas de son calme.", "Он не теряет спокойствия."],
    ["decouler", "de", "вытекать из", "Cette conclusion decoule des faits.", "Этот вывод вытекает из фактов."],
    ["emaner", "de", "исходить от", "La demande emane du ministere.", "Запрос исходит от министерства."],
    ["se prevaloir", "de", "ссылаться на", "Il se prevaut de son experience.", "Он ссылается на свой опыт."],
    ["relever", "de", "относиться к", "Ce choix releve de ta responsabilite.", "Этот выбор относится к твоей ответственности."],
    ["ressortir", "de", "следовать из", "Il ressort du rapport que tout va bien.", "Из отчета следует, что все хорошо."],
    ["tenir", "de", "унаследовать от", "Elle tient sa patience de sa mere.", "Терпение она унаследовала от матери."],
    ["s'indigner", "de", "возмущаться", "Ils s'indignent de cette injustice.", "Они возмущаются этой несправедливостью."],
    ["plaider", "pour", "выступать за", "Elle plaide pour une solution humaine.", "Она выступает за человечное решение."],
    ["trancher", "avec", "контрастировать с", "Son calme tranche avec la tension.", "Его спокойствие контрастирует с напряжением."]
  ],
  C2: [
    ["attenuer", "par", "смягчать посредством", "On attenue l'effet par une nuance.", "Эффект смягчают нюансом."],
    ["arguer", "de", "ссылаться на", "Il argue de son innocence.", "Он ссылается на свою невиновность."],
    ["s'arroger", "le droit de", "самовольно присваивать право", "Il s'arroge le droit de decider seul.", "Он присваивает себе право решать одному."],
    ["contrevenir", "a", "нарушать", "Cette pratique contrevient a la loi.", "Эта практика нарушает закон."],
    ["deroger", "a", "отступать от", "On ne peut deroger a cette regle.", "Нельзя отступать от этого правила."],
    ["enjoindre", "a", "предписывать кому-то", "Le juge enjoint a l'entreprise de payer.", "Судья предписывает компании заплатить."],
    ["exhorter", "a", "призывать", "Elle exhorte chacun a agir.", "Она призывает каждого действовать."],
    ["imputer", "a", "приписывать", "On impute l'erreur a la fatigue.", "Ошибку приписывают усталости."],
    ["incomber", "a", "лежать на ответственности", "Cette mission incombe au directeur.", "Эта миссия лежит на директоре."],
    ["obvier", "a", "предотвращать", "Ces regles obvient aux abus.", "Эти правила предотвращают злоупотребления."],
    ["pallier", "Ø", "компенсировать", "Cette mesure pallie le manque de moyens.", "Эта мера компенсирует нехватку средств."],
    ["preluder", "a", "предшествовать", "Ce silence prelude a une crise.", "Это молчание предшествует кризису."],
    ["subordonner", "a", "подчинять", "Il subordonne tout a son ambition.", "Он подчиняет все своей амбиции."],
    ["se targuer", "de", "хвастаться", "Il se targue de connaitre la verite.", "Он хвастается, что знает правду."],
    ["se garder", "de", "остерегаться", "Je me garde de juger trop vite.", "Я остерегаюсь судить слишком быстро."],
    ["se jouer", "de", "играть с / пренебрегать", "Elle se joue des conventions.", "Она пренебрегает условностями."],
    ["statuer", "sur", "выносить решение по", "Le conseil statue sur la demande.", "Совет выносит решение по запросу."],
    ["s'inscrire", "dans", "вписываться в", "Ce projet s'inscrit dans une vision longue.", "Этот проект вписывается в долгосрочное видение."],
    ["rencherir", "sur", "перебивать / добавлять", "Il rencherit sur la critique.", "Он усиливает критику."],
    ["transiger", "avec", "идти на компромисс с", "On ne transige pas avec la dignite.", "С достоинством не торгуются."]
  ]
};

const exceptions = [
  {
    title: "chercher quelqu'un / quelque chose",
    trap: "не нужен a",
    formula: "chercher Ø",
    answer: "chercher Ø",
    options: ["chercher Ø", "chercher a", "chercher de", "chercher pour"],
    note: "По-русски хочется сказать «искать кого-то», но во французском прямое дополнение без предлога.",
    example: "Je cherche mon cahier.",
    ru: "Я ищу свою тетрадь."
  },
  {
    title: "regarder quelqu'un / quelque chose",
    trap: "не нужен a",
    formula: "regarder Ø",
    answer: "regarder Ø",
    options: ["regarder Ø", "regarder a", "regarder sur", "regarder de"],
    note: "«Смотреть на» переводится без a.",
    example: "Elle regarde le tableau.",
    ru: "Она смотрит на доску."
  },
  {
    title: "ecouter quelqu'un / quelque chose",
    trap: "не нужен a",
    formula: "ecouter Ø",
    answer: "ecouter Ø",
    options: ["ecouter Ø", "ecouter a", "ecouter de", "ecouter sur"],
    note: "«Слушать кого-то» во французском без предлога.",
    example: "Nous ecoutons la professeure.",
    ru: "Мы слушаем преподавательницу."
  },
  {
    title: "appeler quelqu'un",
    trap: "звонить кому-то, но без a",
    formula: "appeler Ø",
    answer: "appeler Ø",
    options: ["appeler Ø", "appeler a", "appeler de", "appeler pour"],
    note: "Appeler quelqu'un идет с прямым дополнением: не путай с telephoner a quelqu'un.",
    example: "Aglaya appelle sa professeure.",
    ru: "Аглая звонит преподавательнице."
  },
  {
    title: "aider quelqu'un",
    trap: "помогать кому-то, но без a",
    formula: "aider Ø",
    answer: "aider Ø",
    options: ["aider Ø", "aider a", "aider de", "aider pour"],
    note: "Aider quelqu'un: человек идет напрямую. Но aider a faire quelque chose: помочь сделать что-то.",
    example: "Aglaya aide son amie.",
    ru: "Аглая помогает подруге."
  },
  {
    title: "deranger quelqu'un",
    trap: "мешать кому-то, но без a",
    formula: "deranger Ø",
    answer: "deranger Ø",
    options: ["deranger Ø", "deranger a", "deranger de", "deranger pour"],
    note: "Deranger quelqu'un идет без предлога: шум беспокоит человека напрямую.",
    example: "Le bruit derange Aglaya.",
    ru: "Шум мешает Аглае."
  },
  {
    title: "attendre quelqu'un / quelque chose",
    trap: "не нужен pour",
    formula: "attendre Ø",
    answer: "attendre Ø",
    options: ["attendre Ø", "attendre pour", "attendre a", "attendre de"],
    note: "Не калькируй английское wait for: во французском просто attendre.",
    example: "J'attends ma soeur.",
    ru: "Я жду сестру."
  },
  {
    title: "demander a quelqu'un",
    trap: "кому задаем вопрос",
    formula: "demander a",
    answer: "demander a",
    options: ["demander a", "demander de", "demander Ø", "demander pour"],
    note: "Когда адресат человек, нужен a.",
    example: "Il demande a Marie.",
    ru: "Он спрашивает у Мари."
  },
  {
    title: "demander de faire",
    trap: "просить сделать",
    formula: "demander de",
    answer: "demander de",
    options: ["demander de", "demander a", "demander pour", "demander sur"],
    note: "Когда дальше инфинитив действия, обычно de.",
    example: "Je te demande de rester.",
    ru: "Я прошу тебя остаться."
  },
  {
    title: "aider quelqu'un a faire",
    trap: "помочь сделать",
    formula: "aider a",
    answer: "aider a",
    options: ["aider a", "aider de", "aider pour", "aider Ø"],
    note: "Помочь кому-то сделать что-то: aider quelqu'un a + infinitif.",
    example: "Elle m'aide a comprendre.",
    ru: "Она помогает мне понять."
  },
  {
    title: "suivre quelqu'un",
    trap: "следовать за кем-то, но без a",
    formula: "suivre Ø",
    answer: "suivre Ø",
    options: ["suivre Ø", "suivre a", "suivre de", "suivre pour"],
    note: "Suivre quelqu'un: «за» в русском не превращается во французский предлог.",
    example: "Aglaya suit la professeure dans le couloir.",
    ru: "Аглая идет за преподавательницей по коридору."
  },
  {
    title: "jouer a un sport",
    trap: "спорт = a",
    formula: "jouer a",
    answer: "jouer a",
    options: ["jouer a", "jouer de", "jouer dans", "jouer Ø"],
    note: "Игры и спорт: jouer a.",
    example: "Tu joues au football.",
    ru: "Ты играешь в футбол."
  },
  {
    title: "jouer d'un instrument",
    trap: "инструмент = de",
    formula: "jouer de",
    answer: "jouer de",
    options: ["jouer de", "jouer a", "jouer avec", "jouer Ø"],
    note: "Музыкальный инструмент: jouer de.",
    example: "Il joue du piano.",
    ru: "Он играет на пианино."
  },
  {
    title: "manquer a quelqu'un",
    trap: "перевернутая логика",
    formula: "manquer a",
    answer: "manquer a",
    options: ["manquer a", "manquer de", "manquer Ø", "manquer pour"],
    note: "Tu me manques буквально: «ты мне недостаешь», значит «я скучаю по тебе».",
    example: "Tu me manques.",
    ru: "Я скучаю по тебе."
  },
  {
    title: "manquer de quelque chose",
    trap: "не хватать вещи",
    formula: "manquer de",
    answer: "manquer de",
    options: ["manquer de", "manquer a", "manquer pour", "manquer sur"],
    note: "Когда не хватает ресурса или качества, нужен de.",
    example: "Nous manquons de temps.",
    ru: "Нам не хватает времени."
  },
  {
    title: "penser a quelqu'un",
    trap: "думать о человеке",
    formula: "penser a",
    answer: "penser a",
    options: ["penser a", "penser de", "penser sur", "penser pour"],
    note: "Мысль направлена на человека/вещь: penser a.",
    example: "Je pense a toi.",
    ru: "Я думаю о тебе."
  },
  {
    title: "penser de quelque chose",
    trap: "мнение о",
    formula: "penser de",
    answer: "penser de",
    options: ["penser de", "penser a", "penser pour", "penser avec"],
    note: "Когда спрашивают мнение, используется penser de.",
    example: "Que penses-tu de ce livre ?",
    ru: "Что ты думаешь об этой книге?"
  },
  {
    title: "se souvenir de",
    trap: "помнить о = de",
    formula: "se souvenir de",
    answer: "se souvenir de",
    options: ["se souvenir de", "se souvenir a", "se souvenir Ø", "se souvenir pour"],
    note: "Запомни целиком: se souvenir de.",
    example: "Je me souviens de cette phrase.",
    ru: "Я помню эту фразу."
  },
  {
    title: "s'interesser a",
    trap: "интересоваться чем = a",
    formula: "s'interesser a",
    answer: "s'interesser a",
    options: ["s'interesser a", "s'interesser de", "s'interesser pour", "s'interesser Ø"],
    note: "В русском творительный падеж, во французском a.",
    example: "Elle s'interesse a la grammaire.",
    ru: "Она интересуется грамматикой."
  },
  {
    title: "se moquer de",
    trap: "смеяться над = de",
    formula: "se moquer de",
    answer: "se moquer de",
    options: ["se moquer de", "se moquer a", "se moquer sur", "se moquer Ø"],
    note: "Над кем-то смеяться: se moquer de quelqu'un.",
    example: "Ne te moque pas de lui.",
    ru: "Не смейся над ним."
  },
  {
    title: "plaire a quelqu'un",
    trap: "нравиться кому-то",
    formula: "plaire a",
    answer: "plaire a",
    options: ["plaire a", "plaire de", "plaire pour", "plaire Ø"],
    note: "Французская конструкция ближе к «быть приятным кому-то».",
    example: "Ce film plait a Aglaya.",
    ru: "Этот фильм нравится Аглае."
  },
  {
    title: "reussir a faire",
    trap: "удаться сделать",
    formula: "reussir a",
    answer: "reussir a",
    options: ["reussir a", "reussir de", "reussir pour", "reussir Ø"],
    note: "Когда получилось выполнить действие: reussir a + infinitif.",
    example: "Je reussis a retenir la regle.",
    ru: "Мне удается запомнить правило."
  },
  {
    title: "profiter de",
    trap: "пользоваться / наслаждаться",
    formula: "profiter de",
    answer: "profiter de",
    options: ["profiter de", "profiter a", "profiter pour", "profiter sur"],
    note: "Пользоваться шансом или наслаждаться моментом: profiter de.",
    example: "On profite du week-end.",
    ru: "Мы наслаждаемся выходными."
  },
  {
    title: "pallier quelque chose",
    trap: "ложное de",
    formula: "pallier Ø",
    answer: "pallier Ø",
    options: ["pallier Ø", "pallier a", "pallier de", "pallier pour"],
    note: "В норме pallier идет без предлога: pallier un manque.",
    example: "Cette idee pallie le probleme.",
    ru: "Эта идея компенсирует проблему."
  }
];

const dictionary = {
  je: "я", tu: "ты", il: "он", elle: "она", nous: "мы", vous: "вы", ils: "они", elles: "они",
  me: "меня / мне", te: "тебя / тебе", lui: "ему / ей", leur: "им", toi: "тебе", moi: "мне",
  a: "к / в / на / предлог a", au: "к / в / на", aux: "к / в / на", de: "из / о / от / предлог de", du: "из / о / от", des: "из / о / от",
  pour: "для / чтобы / за", sur: "на / о", avec: "с", dans: "в", par: "через / посредством", sans: "без",
  le: "определенный артикль м.р.", la: "определенный артикль ж.р.", les: "определенный артикль мн.ч.", un: "неопределенный артикль м.р.", une: "неопределенный артикль ж.р.",
  cette: "эта", ce: "этот", ces: "эти", son: "его / ее", sa: "его / ее", ses: "его / ее", ton: "твой", ta: "твоя", votre: "ваш",
  livre: "книга", question: "вопрос", professeur: "учитель", ecole: "школа", maison: "дом", classe: "класс", ville: "город", film: "фильм",
  cours: "урок / курс", enfants: "дети", examen: "экзамен", projet: "проект", probleme: "проблема", decision: "решение", droit: "право",
  aide: "помощь", route: "дорога", porte: "дверь", bruit: "шум", temps: "время", calme: "спокойствие", loi: "закон", regle: "правило"
};

const levelLabels = {
  A0: "A0 - первые связки",
  A1: "A1 - базовые действия",
  A2: "A2 - уверенная база",
  B1: "B1 - речь и привычки",
  B2: "B2 - аргументы",
  C1: "C1 - абстрактный стиль",
  C2: "C2 - точная речь"
};

const aglayaContexts = [
  ["Hier, Aglaya a note dans son carnet: « ", "Вчера Аглая записала в тетрадь: « "],
  ["Pendant le cours, Aglaya disait tres serieusement: « ", "На уроке Аглая очень серьезно говорила: « "],
  ["Demain, Aglaya repetera avant le cafe: « ", "Завтра Аглая повторит перед кофе: « "],
  ["Aglaya vient de corriger cette phrase: « ", "Аглая только что исправила эту фразу: « "],
  ["Dans son dialogue un peu dramatique, Aglaya a invente: « ", "В своем немного драматичном диалоге Аглая придумала: « "],
  ["Avant la dictee, Aglaya murmurait comme une espionne: « ", "Перед диктантом Аглая шептала как шпионка: « "],
  ["Aglaya avait ecrit sur une fiche fluo: « ", "Аглая написала на яркой карточке: « "],
  ["Si le verbe etait un boss final, Aglaya dirait: « ", "Если бы глагол был финальным боссом, Аглая сказала бы: « "],
  ["Quand Aglaya corrige ses erreurs, elle garde cette phrase: « ", "Когда Аглая исправляет ошибки, она оставляет эту фразу: « "],
  ["Dans l'exemple prefere d'Aglaya, on lit: « ", "В любимом примере Аглаи написано: « "],
  ["Apres une question brillante d'Aglaya, la reponse etait: « ", "После блестящего вопроса Аглаи ответ был: « "],
  ["Pendant sa lecon particuliere, Aglaya a ose dire: « ", "Во время индивидуального урока Аглая решилась сказать: « "],
  ["Dans le mini-theatre grammatical d'Aglaya, quelqu'un annonce: « ", "В грамматическом мини-театре Аглаи кто-то объявляет: « "],
  ["Quand Aglaya voudra parler plus juste, elle choisira: « ", "Когда Аглая захочет говорить точнее, она выберет: « "],
  ["Dans le tableau de verbes d'Aglaya, la ligne importante dit: « ", "В таблице глаголов Аглаи важная строка говорит: « "],
  ["Pour son defi du jour, Aglaya a tire cette carte: « ", "Для задания дня Аглая вытянула эту карточку: « "],
  ["Quand Aglaya relisait la phrase, elle riait un peu: « ", "Когда Аглая перечитывала фразу, она немного смеялась: « "],
  ["Dans sa reponse orale, Aglaya a lance: « ", "В устном ответе Аглая выдала: « "],
  ["Au debut de son cahier, Aglaya avait encadre: « ", "В начале тетради Аглая обвела рамкой: « "],
  ["Pour que la phrase reste dans sa tete, Aglaya chantera: « ", "Чтобы фраза осталась в голове, Аглая пропоет: « "]
];

const contextPacks = {
  A0: [
    ["Apres le cours, ", "После урока "],
    ["Pendant une pause calme, ", "Во время спокойной паузы "],
    ["Ce week-end, ", "В эти выходные "],
    ["Avant le diner, ", "Перед ужином "],
    ["Dans le metro, ", "В метро "],
    ["Quand la journee devient trop longue, ", "Когда день становится слишком длинным, "],
    ["En rentrant a la maison, ", "Возвращаясь домой, "],
    ["Au milieu de la chambre, ", "Посреди комнаты "],
    ["Un dimanche pluvieux, ", "В дождливое воскресенье "],
    ["Avec ses ecouteurs, ", "В наушниках "],
    ["Devant l'arret, ", "На остановке "],
    ["A la fin de la lecon, ", "В конце урока "],
    ["Sans paniquer, ", "Без паники "],
    ["Depuis le couloir, ", "Из коридора "],
    ["Quand tout le monde cuisine, ", "Когда все готовят, "],
    ["Dans son carnet, ", "В своей тетради "],
    ["Depuis septembre, ", "С сентября "],
    ["Avec une petite valise, ", "С маленьким чемоданом "],
    ["Avant la nuit, ", "До наступления ночи "],
    ["Quand la cloche sonne, ", "Когда звенит звонок, "]
  ],
  A1: [
    ["Chaque soir, ", "Каждый вечер "],
    ["Malgre le bruit, ", "Несмотря на шум, "],
    ["Dans une auto-ecole, ", "В автошколе "],
    ["Avec un peu de patience, ", "С небольшим терпением "],
    ["Devant la classe, ", "Перед классом "],
    ["Avant de partir, ", "Перед уходом "],
    ["Pendant la reunion, ", "Во время встречи "],
    ["Quand la verite compte, ", "Когда важна правда, "],
    ["Sans hesiter, ", "Не колеблясь, "],
    ["Pour changer l'ambiance, ", "Чтобы изменить атмосферу, "],
    ["Au carrefour, ", "На перекрестке "],
    ["Dans un musee, ", "В музее "],
    ["Apres l'ecole, ", "После школы "],
    ["En voyant la vieille photo, ", "Увидев старую фотографию, "],
    ["Pendant la dispute, ", "Во время ссоры "],
    ["Pour son anniversaire, ", "На его день рождения "],
    ["Dans un atelier, ", "В мастерской "],
    ["Quand tu es loin, ", "Когда ты далеко, "],
    ["Sur la table du salon, ", "На столе в гостиной "],
    ["En preparant le voyage, ", "Готовя поездку, "]
  ],
  A2: [
    ["Avant minuit, ", "До полуночи "],
    ["Par un message bref, ", "Коротким сообщением "],
    ["Au fond du sac, ", "На дне сумки "],
    ["Apres la projection, ", "После просмотра "],
    ["En regardant les billets, ", "Глядя на билеты, "],
    ["Sur la terrasse, ", "На террасе "],
    ["Deux semaines avant l'examen, ", "За две недели до экзамена "],
    ["Dans un nouveau quartier, ", "В новом районе "],
    ["Apres une longue discussion, ", "После долгого обсуждения "],
    ["Dans sa famille, ", "В своей семье "],
    ["A la fin de la journee, ", "В конце дня "],
    ["Pour mieux voir la scene, ", "Чтобы лучше видеть сцену, "],
    ["Dans cette histoire, ", "В этой истории "],
    ["Pendant l'orage, ", "Во время грозы "],
    ["En lisant les notes, ", "Читая оценки, "],
    ["Quand le signal arrive, ", "Когда приходит сигнал, "],
    ["Pendant le travail en groupe, ", "Во время групповой работы "],
    ["Avec une voix douce, ", "Мягким голосом "],
    ["Avant l'examen, ", "Перед экзаменом "],
    ["Avec ce badge, ", "С этим пропуском "]
  ],
  B1: [
    ["Face a une offre serieuse, ", "Перед серьезным предложением "],
    ["Depuis quelques mois, ", "Уже несколько месяцев "],
    ["Dans cette regle du jeu, ", "В этом правиле игры "],
    ["Quand je doute, ", "Когда я сомневаюсь, "],
    ["A cause de la pluie, ", "Из-за дождя "],
    ["Ce soir, ", "Сегодня вечером "],
    ["A la piscine municipale, ", "В городском бассейне "],
    ["Sans prevenir, ", "Без предупреждения "],
    ["Avant la date limite, ", "До дедлайна "],
    ["Apres plusieurs appels, ", "После нескольких звонков "],
    ["Avec un argument simple, ", "Простым аргументом "],
    ["Dans l'appartement voisin, ", "В соседней квартире "],
    ["Pour rester clair, ", "Чтобы оставаться ясным, "],
    ["Apres des mois de fatigue, ", "После месяцев усталости "],
    ["En relisant la phrase, ", "Перечитывая фразу, "],
    ["Devant tout le groupe, ", "Перед всей группой "],
    ["Chaque matin, ", "Каждое утро "],
    ["Au moment de l'addition, ", "В момент счета "],
    ["Dans ce projet, ", "В этом проекте "],
    ["Pendant la traduction, ", "Во время перевода "]
  ],
  B2: [
    ["Depuis son stage a l'hopital, ", "После стажировки в больнице "],
    ["Dans ce chapitre, ", "В этой главе "],
    ["Avant toute conclusion, ", "Перед любым выводом "],
    ["Avant de sortir, ", "Перед выходом "],
    ["Apres cet entretien, ", "После этого собеседования "],
    ["Pendant le debat, ", "Во время дебатов "],
    ["Dans le schema, ", "На схеме "],
    ["A long terme, ", "В долгосрочной перспективе "],
    ["Pour gagner du temps, ", "Чтобы сэкономить время, "],
    ["Dans ce passage, ", "В этом отрывке "],
    ["Par prudence, ", "Из осторожности "],
    ["Pour l'organisation, ", "Для организации "],
    ["Au cafe, ", "В кафе "],
    ["En lisant le message, ", "Читая сообщение "],
    ["Apres les explications, ", "После объяснений "],
    ["Malgre la pression, ", "Несмотря на давление, "],
    ["Dans l'enquete, ", "В расследовании "],
    ["A la fin du concours, ", "В конце конкурса "],
    ["Dans la rue, ", "На улице "],
    ["Apres dix minutes, ", "Через десять минут "]
  ],
  C1: [
    ["Au terme des negociations, ", "По итогам переговоров "],
    ["Dans la litterature critique, ", "В критической литературе "],
    ["Dans son analyse, ", "В своем анализе "],
    ["A l'echelle du pays, ", "В масштабе страны "],
    ["En prenant la parole, ", "Выступая с речью, "],
    ["Ce detail, ", "Эта деталь "],
    ["Apres des heures d'effort, ", "После часов усилий "],
    ["Dans un budget fragile, ", "В хрупком бюджете "],
    ["Sur ce point, ", "В этом пункте "],
    ["Dans le texte officiel, ", "В официальном тексте "],
    ["Meme sous pression, ", "Даже под давлением "],
    ["A partir des donnees, ", "Исходя из данных, "],
    ["Dans la note interne, ", "В служебной записке "],
    ["Lors de l'audience, ", "Во время слушания "],
    ["Dans cette affaire, ", "В этом деле "],
    ["A la lecture du rapport, ", "При чтении отчета "],
    ["Par temperament, ", "По характеру "],
    ["Devant ce scandale, ", "Перед этим скандалом "],
    ["Dans son discours, ", "В своей речи "],
    ["Au milieu du chaos, ", "Посреди хаоса "]
  ],
  C2: [
    ["Dans la version finale, ", "В финальной версии "],
    ["Devant le tribunal, ", "Перед судом "],
    ["Sans mandat clair, ", "Без ясного мандата "],
    ["Selon les juristes, ", "По мнению юристов "],
    ["Dans ce contexte strict, ", "В этом строгом контексте "],
    ["Dans son ordonnance, ", "В своем постановлении "],
    ["Face a l'urgence, ", "Перед срочностью "],
    ["Dans le rapport d'audit, ", "В аудиторском отчете "],
    ["Dans cette equipe, ", "В этой команде "],
    ["Sur le papier, ", "На бумаге "],
    ["Dans l'immediat, ", "На данный момент "],
    ["Avant la rupture, ", "Перед разрывом "],
    ["Pour garder le controle, ", "Чтобы сохранить контроль, "],
    ["Dans chaque entretien, ", "В каждом интервью "],
    ["Par prudence, ", "Из осторожности "],
    ["Avec elegance, ", "Элегантно "],
    ["Apres deliberation, ", "После обсуждения "],
    ["Dans une strategie durable, ", "В долгосрочной стратегии "],
    ["Pour avoir le dernier mot, ", "Чтобы оставить последнее слово за собой, "],
    ["Sur les principes essentiels, ", "В вопросах главных принципов "]
  ]
};

const associationStyles = {
  a: { icon: "→", label: "направление", tone: "green" },
  de: { icon: "←", label: "источник", tone: "blue" },
  "Ø": { icon: "·", label: "без предлога", tone: "yellow" },
  pour: { icon: "★", label: "цель", tone: "violet" },
  sur: { icon: "⌁", label: "поверхность", tone: "blue" },
  avec: { icon: "+", label: "вместе", tone: "green" },
  dans: { icon: "□", label: "внутри", tone: "violet" },
  par: { icon: "↯", label: "способ", tone: "yellow" }
};

let currentLevel = "A0";
let quizChecked = false;

const $ = (selector) => document.querySelector(selector);
const cardsGrid = $("#cardsGrid");
const quizList = $("#quizList");
const inversionList = $("#inversionList");
const exceptionsGrid = $("#exceptionsGrid");

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9' ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function displayFrench(text) {
  const replacements = [
    [/ a l'/g, " à l'"],
    [/ a /g, " à "],
    [/a sa mere/g, "à sa mère"],
    [/a l'ecole/g, "à l'école"],
    [/ecole/g, "école"],
    [/a la /g, "à la "],
    [/a ce /g, "à ce "],
    [/a cette /g, "à cette "],
    [/a son /g, "à son "],
    [/a ta /g, "à ta "],
    [/a ton /g, "à ton "],
    [/a un /g, "à un "],
    [/a une /g, "à une "],
    [/ecout/g, "écout"],
    [/repond/g, "répond"],
    [/francais/g, "français"],
    [/diner/g, "dîner"],
    [/reuss/g, "réuss"],
    [/cle/g, "clé"],
    [/rever/g, "rêver"],
    [/reve/g, "rêve"],
    [/contrêvenir/g, "contrevenir"],
    [/deroger/g, "déroger"],
    [/Deroger/g, "Déroger"],
    [/Apres/g, "Après"],
    [/apres/g, "après"],
    [/prepar/g, "prépar"],
    [/idee/g, "idée"],
    [/depend/g, "dépend"],
    [/etre/g, "être"],
    [/pret/g, "prêt"],
    [/resultat/g, "résultat"],
    [/eleves/g, "élèves"],
    [/hesite/g, "hésite"],
    [/demenager/g, "déménager"],
    [/autorise/g, "autorise"],
    [/repondre/g, "répondre"],
    [/empeche/g, "empêche"],
    [/evite/g, "évite"],
    [/tres/g, "très"],
    [/succes/g, "succès"],
    [/reussite/g, "réussite"],
    [/medecin/g, "médecin"],
    [/procede/g, "procède"],
    [/procedons/g, "procédons"],
    [/reponse/g, "réponse"],
    [/decision/g, "décision"],
    [/sante/g, "santé"],
    [/methode/g, "méthode"],
    [/reserver/g, "réserver"],
    [/medicament/g, "médicament"],
    [/theorie/g, "théorie"],
    [/hypothese/g, "hypothèse"],
    [/stabilite/g, "stabilité"],
    [/resoudre/g, "résoudre"],
    [/probleme/g, "problème"],
    [/reforme/g, "réforme"],
    [/procedure/g, "procédure"],
    [/ministere/g, "ministère"],
    [/prevaloir/g, "prévaloir"],
    [/prevaut/g, "prévaut"],
    [/experience/g, "expérience"],
    [/responsabilite/g, "responsabilité"],
    [/mere/g, "mère"],
    [/attenue/g, "atténue"],
    [/decider/g, "décider"],
    [/regle/g, "règle"],
    [/regles/g, "règles"],
    [/prelude/g, "prélude"],
    [/connaitre/g, "connaître"],
    [/verite/g, "vérité"],
    [/dignite/g, "dignité"],
    [/strategie/g, "stratégie"],
    [/departir/g, "départir"],
    [/decoule/g, "découle"],
    [/eman/g, "éman"],
    [/releve/g, "relève"],
    [/rencherit/g, "renchérit"],
    [/deranger/g, "déranger"],
    [/Deranger/g, "Déranger"],
    [/derange/g, "dérange"],
    [/telephoner/g, "téléphoner"],
    [/soeur/g, "sœur"],
    [/s'interesser/g, "s'intéresser"],
    [/interesse/g, "intéresse"],
    [/plait/g, "plaît"],
    [/s'en tient/g, "s'en tient"],
    [/debut/g, "début"],
    [/note/g, "note"],
    [/repetera/g, "répétera"],
    [/cafe/g, "café"],
    [/dictee/g, "dictée"],
    [/ecrit/g, "écrit"],
    [/etait/g, "était"],
    [/prefere/g, "préféré"],
    [/lecon/g, "leçon"],
    [/particuliere/g, "particulière"],
    [/theatre/g, "théâtre"],
    [/defi/g, "défi"],
    [/tire/g, "tiré"],
    [/lance/g, "lancé"],
    [/encadre/g, "encadré"],
    [/tete/g, "tête"],
    [/serieusement/g, "sérieusement"]
  ];
  return replacements.reduce((value, [pattern, replacement]) => value.replace(pattern, replacement), text);
}

function displayContext(text) {
  return displayFrench(text)
    .replace(/Aglaya à note/g, "Aglaya a noté")
    .replace(/Aglaya à invent/g, "Aglaya a invent")
    .replace(/Aglaya à ose/g, "Aglaya a osé")
    .replace(/Aglaya à tir/g, "Aglaya a tir")
    .replace(/Aglaya à écrit/g, "Aglaya a écrit")
    .replace(/Aglaya à lancé/g, "Aglaya a lancé")
    .replace(/Aglaya à encadré/g, "Aglaya a encadré")
    .replace(/a noté/g, "a noté")
    .replace(/a invente/g, "a inventé")
    .replace(/a inventé/g, "a inventé")
    .replace(/a osé/g, "a osé")
    .replace(/a tiré/g, "a tiré")
    .replace(/a écrit/g, "a écrit")
    .replace(/a lancé/g, "a lancé")
    .replace(/a encadré/g, "a encadré")
    .replace(/: «/g, " : «");
}

function displayFormula(text) {
  return displayFrench(text)
    .replace(/\ba\b/g, "à")
    .replace(/quelqu'un/g, "qqn")
    .replace(/quelque chose/g, "qqch");
}

function verbObjects(level) {
  return levels[level].map(([verb, prep, ru, example, exampleRu], index) => ({
    id: `${level}-${index}`,
    verb,
    prep,
    ru,
    example,
    exampleRu
  }));
}

function lowerFirst(text) {
  if (text.startsWith("Aglaya") || text.startsWith("Аглая")) return text;
  return text.charAt(0).toLocaleLowerCase("fr-FR") + text.slice(1);
}

function withContext(sentence, prefix) {
  if (prefix.includes("« ")) return `${prefix}${sentence} »`;
  return `${prefix}${lowerFirst(sentence)}`;
}

function enrichedExample(item, index, level) {
  const pack = aglayaContexts[index % aglayaContexts.length] || contextPacks[level]?.[index] || ["Pour Aglaya, ", "Для Аглаи "];
  return {
    fr: withContext(displayFrench(item.example), displayContext(pack[0])),
    ru: withContext(item.exampleRu, pack[1])
  };
}

function enrichedExceptionExample(item, index) {
  const pack = aglayaContexts[index % aglayaContexts.length] || ["Pour Aglaya, ", "Для Аглаи "];
  return {
    fr: withContext(displayFrench(item.example), displayContext(pack[0])),
    ru: withContext(item.ru, pack[1])
  };
}

function simplePrep(prep) {
  if (associationStyles[prep]) return prep;
  const tokens = prep.split(/\s+/);
  if (tokens.includes("Ø")) return "Ø";
  if (tokens.includes("de")) return "de";
  if (tokens.includes("a")) return "a";
  if (tokens.includes("pour")) return "pour";
  if (tokens.includes("sur")) return "sur";
  if (tokens.includes("avec")) return "avec";
  if (tokens.includes("dans")) return "dans";
  if (tokens.includes("par")) return "par";
  return tokens.at(-1);
}

function associationFor(item, index) {
  const prepKey = simplePrep(item.prep);
  const style = associationStyles[prepKey] || associationStyles["Ø"];
  return `
    <div class="association-photo ${style.tone}" role="img" aria-label="Ассоциация: ${style.label}">
      <span class="photo-icon">${style.icon}</span>
      <span class="photo-caption">${style.label}</span>
      <span class="photo-prep">${displayFormula(item.prep)}</span>
      <span class="photo-number">${String(index + 1).padStart(2, "0")}</span>
    </div>
  `;
}

function exceptionPhoto(index) {
  return `
    <div class="association-photo violet trap-photo" role="img" aria-label="Ассоциация: ловушка">
      <span class="photo-icon">?</span>
      <span class="photo-caption">ловушка</span>
      <span class="photo-prep">choisis</span>
      <span class="photo-number">${String(index + 1).padStart(2, "0")}</span>
    </div>
  `;
}

function exceptionPrompt(title) {
  return title
    .replace(/\ba\b/g, "...")
    .replace(/\bde\b/g, "...")
    .replace(/\bØ\b/g, "...")
    .replace(/\bpour\b/g, "...")
    .replace(/\bsur\b/g, "...")
    .replace(/\bavec\b/g, "...")
    .replace(/\bdans\b/g, "...")
    .replace(/\bpar\b/g, "...");
}

function miniHint(item) {
  if (item.answer.endsWith("Ø")) return "Подумай, нужен ли предлог вообще: иногда французский глагол берет дополнение напрямую.";
  if (item.title.includes("jouer") && item.answer.includes("a")) return "Сравни спорт и инструмент: это разные конструкции.";
  if (item.title.includes("jouer") && item.answer.includes("de")) return "Сравни инструмент и спорт: у инструмента своя конструкция.";
  if (item.title.includes("manquer")) return "Проверь, кто кому «недостает»: логика во французском часто перевернута.";
  if (item.title.includes("penser")) return "Отличи мысль о человеке от мнения о предмете.";
  if (item.title.includes("demander")) return "Смотри, после глагола человек-адресат или инфинитив действия.";
  return `Ловушка: ${item.trap}. Не переводи русский предлог автоматически.`;
}

function eyeIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>`;
}

function wordify(sentence) {
  return sentence.split(/(\s+)/).map((part) => {
    if (/^\s+$/.test(part)) return part;
    const clean = normalize(part);
    return `<button class="word" data-word="${clean}">${part}</button>`;
  }).join("");
}

function renderCards() {
  const verbs = verbObjects(currentLevel);
  $("#levelName").textContent = levelLabels[currentLevel];
  $("#levelCount").textContent = `${verbs.length} глаголов`;
  cardsGrid.innerHTML = verbs.map((item, index) => {
    const example = enrichedExample(item, index, currentLevel);
    return `
    <article class="verb-card" data-card="${item.id}">
      ${associationFor(item, index)}
      <div class="verb-top">
        <div class="verb-title">
          <h3>${displayFormula(item.verb)}</h3>
          <span class="prep">${displayFormula(item.prep)}</span>
        </div>
        <button class="eye" data-eye="${item.id}" title="Показать перевод" aria-label="Показать перевод">${eyeIcon()}</button>
      </div>
      <div class="translation hidden" data-translation="${item.id}">
        <span>${item.ru}</span>
        <small>${example.ru}</small>
      </div>
      <div class="example">
        <strong>Exemple</strong><br>
        ${wordify(example.fr)}
      </div>
    </article>
  `;
  }).join("");
}

function renderExceptions() {
  $("#exceptionsResult").textContent = "Выбери правильную французскую формулу в каждой ловушке.";
  exceptionsGrid.innerHTML = exceptions.map((item, index) => {
    const example = enrichedExceptionExample(item, index);
    return `
    <article class="exception-card" data-exception="${index}" data-answer="${item.answer}">
      ${exceptionPhoto(index)}
      <div class="exception-title">
        <strong>${index + 1}. ${displayFormula(exceptionPrompt(item.title))}</strong>
        <span class="trap-badge">naebka na yebka</span>
      </div>
      <div class="trap-prompt">
        <span>Переведи смысл и выбери формулу:</span>
        <strong>${example.ru}</strong>
      </div>
      <div class="formula">
        <code>???</code>
        <button class="eye" data-exception-eye="${index}" title="Показать мини-подсказку" aria-label="Показать мини-подсказку">${eyeIcon()}</button>
      </div>
      <div class="translation hidden" data-exception-note="${index}">
        <span>${displayFormula(miniHint(item))}</span>
        <small>Сначала выбери вариант, потом проверяй.</small>
      </div>
      <div class="example">
        <strong>Exemple cache</strong><br>
        <span class="muted-example">Французский пример появится после проверки.</span>
      </div>
      <div class="exception-options">
        ${shuffled(item.options).map(option => `<button class="choice" data-exception-choice="${option}">${displayFormula(option)}</button>`).join("")}
      </div>
      <div class="feedback"></div>
    </article>
  `;
  }).join("");
}

function shuffled(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function choicesFor(correct) {
  const pool = ["a", "de", "Ø", "pour", "sur", "avec", "dans", "par"];
  const simple = correct.includes(" ") ? correct.split(" ").at(-1) : correct;
  const distractors = shuffled([...new Set([simple, ...pool])].filter(choice => choice !== correct)).slice(0, 3);
  return shuffled([correct, ...distractors]);
}

function renderQuiz() {
  quizChecked = false;
  $("#quizResult").textContent = "Ответь на вопросы, чтобы увидеть результат.";
  quizList.innerHTML = verbObjects(currentLevel).map((item, index) => `
    <div class="quiz-item" data-answer="${item.prep}">
      <strong>${index + 1}. ${displayFormula(item.verb)} ___</strong>
      <div class="choices">
        ${choicesFor(item.prep).map(choice => `<button class="choice" data-choice="${choice}">${displayFormula(choice)}</button>`).join("")}
      </div>
      <div class="hint">${item.ru}</div>
    </div>
  `).join("");
  updateScore(0);
}

function renderInversion() {
  $("#inversionResult").textContent = "Пиши полный французский пример с правильным предлогом.";
  inversionList.innerHTML = verbObjects(currentLevel).map((item, index) => {
    const example = enrichedExample(item, index, currentLevel);
    return `
    <div class="inversion-item" data-expected="${example.fr}">
      ${associationFor(item, index)}
      <strong>${index + 1}. ${example.ru}</strong>
      <input type="text" placeholder="Ta traduction..." autocomplete="off">
      <div class="feedback"></div>
    </div>
  `;
  }).join("");
}

function setLevel(level) {
  currentLevel = level;
  renderCards();
  renderQuiz();
  renderInversion();
}

function updateScore(percent) {
  $("#scoreMeter").style.width = `${percent}%`;
  $("#scoreLabel").textContent = `${percent}%`;
}

function checkQuiz() {
  let correct = 0;
  const items = [...quizList.querySelectorAll(".quiz-item")];
  items.forEach((item) => {
    const answer = item.dataset.answer;
    const selected = item.querySelector(".choice.selected");
    item.querySelectorAll(".choice").forEach((button) => {
      button.classList.remove("correct", "wrong");
      if (button.dataset.choice === answer) button.classList.add("correct");
    });
    if (selected?.dataset.choice === answer) {
      correct += 1;
    } else if (selected) {
      selected.classList.add("wrong");
    }
  });
  const percent = Math.round((correct / items.length) * 100);
  updateScore(percent);
  $("#quizResult").textContent = `${correct}/${items.length}: ${percent >= 80 ? "magnifique" : percent >= 55 ? "уже неплохо" : "нужно еще потренировать"}.`;
  quizChecked = true;
}

function checkExceptions() {
  let correct = 0;
  const items = [...exceptionsGrid.querySelectorAll(".exception-card")];
  items.forEach((card) => {
    const index = Number(card.dataset.exception);
    const source = exceptions[index];
    const answer = card.dataset.answer;
    const selected = card.querySelector(".choice.selected");
    const feedback = card.querySelector(".feedback");
    const formula = card.querySelector(".formula code");
    const example = card.querySelector(".example");
    const enriched = enrichedExceptionExample(source, index);
    feedback.className = "feedback";
    formula.textContent = displayFormula(source.formula);
    example.innerHTML = `<strong>Exemple</strong><br><span class="example-line">${wordify(enriched.fr)}</span>`;
    card.querySelectorAll(".choice").forEach((button) => {
      button.classList.remove("correct", "wrong");
      if (button.dataset.exceptionChoice === answer) button.classList.add("correct");
    });
    if (selected?.dataset.exceptionChoice === answer) {
      correct += 1;
      feedback.textContent = `Верно. ${displayFormula(source.note)}`;
      feedback.classList.add("good");
    } else {
      if (selected) selected.classList.add("wrong");
      feedback.textContent = `Формула: ${displayFormula(answer)}. ${displayFormula(source.note)}`;
      feedback.classList.add("bad");
    }
  });
  $("#exceptionsResult").textContent = `${correct}/${items.length}: ${correct >= 17 ? "ловушки почти обезврежены" : correct >= 12 ? "хорошо, но повтори пары" : "это как раз урок для запоминания"}.`;
}

function checkInversion() {
  let correct = 0;
  const items = [...inversionList.querySelectorAll(".inversion-item")];
  items.forEach((item) => {
    const expected = item.dataset.expected;
    const input = item.querySelector("input");
    const feedback = item.querySelector(".feedback");
    const user = normalize(input.value);
    const target = normalize(expected);
    feedback.className = "feedback";
    if (!user) {
      feedback.textContent = `Ответ: ${expected}`;
      return;
    }
    if (user === target) {
      correct += 1;
      feedback.textContent = "Correct.";
      feedback.classList.add("good");
    } else {
      const containsVerb = target.split(" ").some((word) => word.length > 3 && user.includes(word));
      feedback.textContent = containsVerb ? `Почти. Верно: ${expected}` : `Верно: ${expected}`;
      feedback.classList.add("bad");
    }
  });
  $("#inversionResult").textContent = `${correct}/${items.length} точных переводов. Акценты можно не ставить, но порядок слов важен.`;
}

function showPopover(text) {
  const popover = $("#wordPopover");
  popover.textContent = text;
  popover.classList.add("visible");
  clearTimeout(showPopover.timer);
  showPopover.timer = setTimeout(() => popover.classList.remove("visible"), 2400);
}

function init() {
  const select = $("#levelSelect");
  select.innerHTML = Object.keys(levels).map(level => `<option value="${level}">${levelLabels[level]}</option>`).join("");
  select.addEventListener("change", () => setLevel(select.value));

  $("#shuffleBtn").addEventListener("click", () => {
    levels[currentLevel] = shuffled(levels[currentLevel]);
    setLevel(currentLevel);
  });
  $("#showAllBtn").addEventListener("click", () => document.querySelectorAll(".translation").forEach(el => el.classList.remove("hidden")));
  $("#hideAllBtn").addEventListener("click", () => document.querySelectorAll(".translation").forEach(el => el.classList.add("hidden")));
  $("#resetQuizBtn").addEventListener("click", renderQuiz);
  $("#checkQuizBtn").addEventListener("click", checkQuiz);
  $("#resetExceptionsBtn").addEventListener("click", renderExceptions);
  $("#checkExceptionsBtn").addEventListener("click", checkExceptions);
  $("#resetInversionBtn").addEventListener("click", renderInversion);
  $("#checkInversionBtn").addEventListener("click", checkInversion);

  document.body.addEventListener("click", (event) => {
    const eye = event.target.closest("[data-eye]");
    if (eye) {
      const translation = document.querySelector(`[data-translation="${eye.dataset.eye}"]`);
      translation.classList.toggle("hidden");
    }

    const exceptionEye = event.target.closest("[data-exception-eye]");
    if (exceptionEye) {
      const note = document.querySelector(`[data-exception-note="${exceptionEye.dataset.exceptionEye}"]`);
      note.classList.toggle("hidden");
    }

    const choice = event.target.closest("[data-choice]");
    if (choice) {
      choice.closest(".choices").querySelectorAll(".choice").forEach(button => button.classList.remove("selected", "correct", "wrong"));
      choice.classList.add("selected");
      if (quizChecked) quizChecked = false;
    }

    const exceptionChoice = event.target.closest("[data-exception-choice]");
    if (exceptionChoice) {
      exceptionChoice.closest(".exception-options").querySelectorAll(".choice").forEach(button => button.classList.remove("selected", "correct", "wrong"));
      exceptionChoice.classList.add("selected");
      exceptionChoice.closest(".exception-card").querySelector(".feedback").textContent = "";
    }

    const word = event.target.closest("[data-word]");
    if (word) {
      const key = word.dataset.word;
      showPopover(dictionary[key] ? `${word.textContent}: ${dictionary[key]}` : `${word.textContent}: переведи по смыслу в примере`);
    }
  });

  setLevel(currentLevel);
  renderExceptions();
}

init();
