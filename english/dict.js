const LETTERS = {
  אֶיי: "A",
  בִּי: "B",
  סי: "C",
  די: "D",
  אִי: "E",
  אף: "F",
  "גִ'י": "G",
  אייץ: "H",
  "גֶ'יי": "J",
  קיי: "K",
  אל: "L",
  אם: "M",
  אן: "N",
  או: "O",
  פי: "P",
  קיו: "Q",
  אר: "R",
  אס: "S",
  טי: "T",
  יו: "U",
  וי: "V",
  דבליו: "W",
  אקס: "X",
  וויי: "Y",
  זד: "Z",
  "אֶיי קטנה": "a",
  "בִּי קטנה": "b",
  "סי קטנה": "c",
  "די קטנה": "d",
  "אִי קטנה": "e",
  "אף קטנה": "f",
  "גִ'י קטנה": "g",
  "אייץ קטנה": "h",
  "ג'יי קטנה": "j",
  "קיי קטנה": "k",
  "אל קטנה": "l",
  "אם קטנה": "m",
  "אן קטנה": "n",
  "או קטנה": "o",
  "פי קטנה": "p",
  "קיו קטנה": "q",
  "אר קטנה": "r",
  "אס קטנה": "s",
  "טי קטנה": "t",
  "יו קטנה": "u",
  "וי קטנה": "v",
  "דבליו קטנה": "w",
  "אקס קטנה": "x",
  "וויי קטנה": "y",
  "זד קטנה": "z",
};

const SOUNDS1 = {
  בַּאבּ: "bab",
  בֶּבּ: "beb",
  בִּיבּ: "bib",
  בּוֹבּ: "bob",
  בּוּבּ: "bub",
  רַאר: "rar",
  רֶר: "rer",
  רִיר: "rir",
  רוֹר: "ror",
  רוּר: "rur",
  לַל: "lal",
  לֶל: "lel",
  לִיל: "lil",
  לוֹל: "lol",
  לוּל: "lul",
  מַאם: "mam",
  מֶמ: "mem",
  מִים: "mim",
  מוֹם: "mom",
  מוּם: "mum",
  קַאקּ: "kak",
  קֶקּ: "kek",
  קִיקּ: "kik",
  קּוֹקּ: "kok",
  קּוּקּ: "kuk",
  תַאת: "tat",
  תֶת: "tet",
  תִית: "tit",
  תוֹת: "tot",
  תוּת: "tut",
  פַאפ: "faf",
  פֶפ: "fef",
  פִיפ: "fif",
  פַּפ: "pap",
  פֶּפ: "pep",
  פִּיפ: "pip",
  פּוֹפּ: "pop",
  פּוּפּ: "pup",
  סַאס: "sas",
  סֶס: "ses",
  סִיס: "sis",
  סוֹס: "sos",
  סוּס: "sus",
  זַאז: "zaz",
  זֶז: "zez",
  זִיז: "ziz",
  זוֹז: "zoz",
  זוּז: "zuz",
  וַאו: "vav",
  וֶו: "vev",
  וִיו: "viv",
  ווֹו: "vov",
  ווּו: "vuv",
  גַאג: "gag",
  גֶג: "geg",
  גִיג: "gig",
  גוֹג: "gog",
  גוּג: "gug",
  "ג׳ַאג׳": "jaj",
  "ג׳ֶג׳": "jej",
  "ג׳ִיג׳": "jij",
  "ג׳וֹג׳": "joj",
  "ג׳וּג׳": "juj",
};

const SOUNDS2 = {
  "day (יום)": "דֵי",
  "dim (כהה)": "דִים",
  "dip (לטבול)": "דִיפ",
  "dog (כֶּלֶב)": "דוֹג",
  "dot (נְקוּדָה)": "דוֹט",
  "dry (יָבֵשׁ)": "דְרַי",
  "dad (אַב)": "דַּד",
  "did (עָשָׂה)": "דִיד",
  "dig (חָפַר)": "דִיג",
  "dug (חָפַר)": "דַג",
  "dab (לַעֲטוֹת)": "דַב",
  "den (מְנוּי)": "דֶן",
  "dew (טַל)": "דֵו",
  "dam (סְכָר)": "דַם",
  "dye (לְצַבֵּעַ)": "דַי",
  "dud (בחור)": "דֻד",
  "act (פְּעִולָה)": "אַקְט",
  "add (לְהוֹסִיף)": "אַד",
  "age (גִּיל)": "אֵיג",
  "aim (מֶטָה)": "אֵים",
  "air (אֲוִיר)": "אֵיר",
  "all (הַכֹּל)": "אוֹל",
  "and (וְ)": "אַנד",
  "any (כָּל)": "אֵנִי",
  "apt (כָּשֵׁר)": "אַפְט",
  "arm (זְרוֹעַ)": "אַרְמ",
  "art (אוּמָנוּת)": "אַרְט",
  "ask (לִשְׁאוֹל)": "אַסְק",
  "bad (רַע)": "בַּד",
  "bag (תִּיק)": "בַּג",
  "bar (בָּר)": "בַּר",
  "bat (מַלְקָט)": "בַּט",
  "bed (מִטָּה)": "בֵּד",
  "bet (לְהִתְעַרֵב)": "בֵּט",
  "big (גָּדוֹל)": "בִּיג",
  "bit (מַעֲט)": "בִּיט",
  "box (קופסא)": "בוקס",
  "boy (ילד)": "בוֹי",
  "bug (מַקֵּק)": "בַּג",
  "buy (לִקְנוֹת)": "בוּי",
  "can (יָכוֹל)": "קַן",
  "cap (כובע)": "קַפְפ",
  "car (מְכוֹנִית)": "קַר",
  "cat (חָתוּל)": "קַט",
  "cop (שוטר)": "קַפְפ",
  "cow (פָּרָה)": "קַו",
  "cry (לִבְכוֹת)": "קַרִי",
  "cup (סְפּוֹג)": "קַפְפ",
  "cut (לְגַזוֹר)": "קַט",
  "ear (אזן)": "אֵר",
  "eat (לֶאֱכוֹל)": "אִיט",
  "egg (בֵּיצָה)": "אֶג",
  "end (סוֹף)": "אֶנְד",
  "eye (עַיִן)": "אַי",
  "far (רָחוֹק)": "פַר",
  "fat (שָׁמֵן)": "פַט",
  "fax (פַקְס)": "פַקס",
  "fed (האכיל)": "פֵד",
  "few (מְעַט)": "פְיוּ",
  "fit (מְתֻאָם)": "פִיט",
  "fix (לְתַקֵן)": "פִיקס",
  "fly (לְעוֹף)": "פְלַי",
  "for (לְ)": "פוֹר",
  "fun (כֵּיף)": "פַן",
  "fur (פרווה)": "פֻר",
  "gap (רווח)": "גַפּ",
  "get (לְהַשִׁיג)": "גֵט",
  "got (קִבֵּל)": "גוֹט",
  "gum (מסטיק)": "גַם",
  "gun (רובה)": "גַן",
  "gym (חֲדָר כּוֹשֶׁר)": "גִים",
  "had (הָיָה)": "הַד",
  "hat (כוֹבַע)": "הַט",
  "hay (תֶּבֶן)": "הֵי",
  "hit (לְהַכּוֹת)": "הִיט",
  "hog (חֲזיר בר)": "הוֹג",
  "hot (חָם)": "הוֹט",
  "how (אֵיך)": "הָו",
  "ice (קֶרַח)": "אַיִס",
  "ill (חוֹלֵה)": "אִיל",
  "ink (דְּיוֹ)": "אִינְק",
  "its (שֶׁלוֹ)": "אִיטְס",
  "jam (ריבה)": "ג'ַם",
  "jar (צִנְצֶנֶת)": "ג'ַר",
  "jaw (לֶסֶת)": "ג'וֹ",
  "jet (סילון)": "ג'ֵט",
  "joy (שִׂמְחָה)": "ג'וֹי",
  "key (מַפְתֵּחַ)": "קִי",
  "kit (עֶרְכָּה)": "קִיט",
  "lab (מַעֲבֵדה)": "לָב",
  "lad (בַּחוּר)": "לַד",
  "lag (לְאַחֵר)": "לַג",
  "lap (חֵיק)": "לַפְפ",
  "law (חוֹק)": "לוֹ",
  "lay (לשכב)": "לֵי",
  "leg (רָגֶל)": "לֶג",
  "let (לְתַת)": "לֶט",
  "lid (מכסה)": "לִיד",
  "lie (שֶׁקֶר)": "לַי",
  "lip (שָׂפָה)": "לִיפּ",
  "lit (הָאִיר)": "לִיט",
  "lot (הַרְבֵּה)": "לוֹט",
  "low (נָמוּך)": "לוֹ",
  "mad (מְשׁוּגָע)": "מַד",
  "man (אִישׁ)": "מָן",
  "map (מַפָּה)": "מַפּ",
  "mat (מזרן)": "מַט",
  "mud (בוץ)": "מֻד",
  "mom (אמא)": "מום",
  "mug (סֵפֶל)": "מַג",
  "nap (תְּנוּמָה)": "נַפּ",
  "net (רֶשֶׁת)": "נֵט",
  "new (חָדָשׁ)": "נֵו",
  "nip (לְנַשֵּק)": "נִיפּ",
  "nod (הינהון)": "נוֹד",
  "not (לא)": "נוֹט",
  "now (עַכְשָׁו)": "נָו",
  "oak (אַלּוֹן)": "אוֹק",
  "odd (מוּזָר)": "אָד",
  "off (כבוי)": "אוֹף",
  "oil (שֶׁמֶן)": "אוֹיל",
  "old (זָקֵן)": "אוֹלְד",
  "one (אֶחָד)": "וּוָאן",
  "our (שֶׁלָּנוּ)": "אוּר",
  "out (החוּצָה)": "אוּט",
  "pan (מַחֲבַת)": "פַן",
  "pat (ללטף)": "פַט",
  "pay (לְשַׁלֵּם)": "פֵי",
  "pen (עֵט)": "פֶּן",
  "pet (חיית בית)": "פֶט",
  "pig (חֲזִיר)": "פִיג",
  "pit (בוֹר)": "פִיט",
  "pot (סִיר)": "פוֹט",
  "put (לָשֵׂם)": "פוּט",
  "ran (רָץ)": "רָן",
  "rat (חֹלֶד)": "רַט",
  "raw (נא)": "רָו",
  "ray (רַדִּיו)": "רֵי",
  "red (אָדֹם)": "רֶד",
  "rig (זוֹרֵם)": "רִיג",
  "rim (שֶׂפֶת)": "רִים",
  "rip (לִקְרוֹעַ)": "רִיפּ",
  "rod (מַקֶּלֶת)": "רוֹד",
  "row (שוּרָה)": "רוֹ",
  "rub (לשפשף)": "רֻב",
  "rug (שָׁטִיחַ)": "רַג",
  "run (לָרוּץ)": "רָן",
  "rut (תַּעַלוּת)": "רָט",
  "sad (עָצוּב)": "סַד",
  "sag (לִתֵּל)": "סַג",
  "sap (סאפ)": "סַפּ",
  "sat (יָשַׁב)": "סַט",
  "saw (רָאָה)": "סוֹ",
  "say (לוֹמַר)": "סֵי",
  "see (לִרְאוֹת)": "סִי",
  "set (סט)": "סֵט",
  "sir (אדון)": "סֵיר",
  "she (הִיא)": "שִי",
  "six (שֵׁשׁ)": "סִיקס",
  "ski (סְקִי)": "סְקִי",
  "sky (שָׁמַיִם)": "סְקַי",
  "sly (ערמומי)": "סְלַי",
  "soy (סוֹיה)": "סּוֹי",
  "spy (מרגל)": "סְפָי",
  "sum (סכום)": "סָם",
  "sun (שֶׁמֶשׁ)": "סַן",
  "tab (טאב)": "טַב",
  "tag (תְּוִית)": "טַג",
  "tap (ברז)": "טַפ",
  "tax (מִס)": "טַקְס",
  "tea (תֵּה)": "טֵה",
  "ten (עֲשָׂרָה)": "טֶן",
  "the (הַ)": "דַה",
  "tie (קָשֶׁר)": "טַי",
  "tin (בַּדִיל)": "טִין",
  "tip (קצה)": "טִיפּ",
  "toe (אֶצְבַּע רֶגֶל)": "טֹו",
  "top (עֶלְיוֹן)": "טַפּ",
  "toy (צַעֲצוּעַ)": "טוֹי",
  "try (לְנַסוֹת)": "טְרַי",
  "two (שְׁנַיִם)": "טּוּ",
  "urn (קִיבּוּל)": "אֵרַן",
  "use (לְהִשְׁתַּמֵּשׁ)": "יוּס",
  "van (וָאָן)": "וָאָן",
  "vat (כַּד)": "וַט",
  "vet (וטרינר)": "וֶט",
  "wax (שעווה)": "וַקס",
  "wed (נִשֵּׂא)": "וֶד",
  "wet (רטוב)": "וֶט",
  "win (לִנצח)": "וִין",
  "wit (תְּבוּנָה)": "וִיט",
  "yes (כֵּן)": "יֶס",
  "yet (עדין)": "יֶט",
  "zoo (גַן חיות)": "זוֹ",
};

const WORDS1 = {
  אני: "I",
  אתה: "you",
  את: "you",
  הוא: "he",
  היא: "she",
  אנחנו: "we",
  הם: "they",
  הן: "they",
  זה: "this",
  ההוא: "that",
  היי: "hi",
  או: "or",
  שמש: "sun",
  ירח: "moon",
  כוכב: "star",
  גשם: "rain",
  עכשיו: "now",
  שלג: "snow",
  רוח: "wind",
  עץ: "tree",
  פרח: "flower",
  כלב: "dog",
  חתול: "cat",
  תיק: "bag",
  מיטה: "bed",
  יכול: "can",
  ציפור: "bird",
  כיף: "fun",
  לקבל: "get",
  איש: "man",
  דג: "fish",
  "וְ..": "and",
  אהבה: "love",
  "ה..": "the",
  כן: "yes",
  לא: "no",
  טוב: "good",
  רע: "bad",
  אמא: "mother",
  אבא: "father",
  מיטה: "bed",
  ספר: "book",
  ילד: "boy",
  ילדה: "girl",
  איפה: "where",
  מה: "what",
  מתי: "when",
  איך: "how",
  מי: "who",
  למה: "why",
  שלום: "hello",
  בוקר: "morning",
  פנים: "face",
  בֵּיצָה: "egg",
  סוֹף: "end",
  מסטיק: "gum",
  כוֹבַע: "hat",
  קֶרַח: "ice",
  נָמוּך: "low",
};

const WORDS2 = {
  לילה: "night",
  אוכל: "food",
  מים: "water",
  בבקשה: "please",
  תודה: "thanks",
  סליחה: "sorry",
  אחד: "one",
  שתיים: "two",
  שלוש: "three",
  ארבע: "four",
  חמש: "five",
  שש: "six",
  שבע: "seven",
  שמונה: "eight",
  תשע: "nine",
  עשר: "ten",
  יום: "day",
  שבוע: "week",
  חודש: "month",
  שנה: "year",
  חבר: "friend",
  בית: "house",
  דלת: "door",
  חלון: "window",
  חדר: "room",
  שולחן: "table",
  כיסא: "chair",
  אֲוִיר: "air",
  הַכֹּל: "all",
  זְרוֹעַ: "arm",
  אוּמָנוּת: "art",
  חדשות: "news",
  נייר: "paper",
  עט: "pen",
  תפוח: "apple",
  לחם: "bread",
  חלב: "milk",
  עוף: "chicken",
  דג: "fish",
  פירות: "fruits",
  אוטובוס: "bus",
  מכונית: "car",
  מטוס: "airplane",
  עבודה: "work",
  "בית ספר": "school",
  חנות: "store",
  רחוב: "street",
  עיר: "city",
  ישן: "old",
  בחוץ: "out",
  כפר: "village",
  ים: "sea",
  נהר: "river",
  שמיים: "sky",
  אריה: "lion",
  קוף: "monkey",
  עצוב: "sad",
  חג: "holiday",
  מוזיקה: "music",
  שיר: "song",
  משחק: "game",
  רופא: "doctor",
  משטרה: "police",
  מורה: "teacher",
  רחוק: "far",
  דרך: "way",
  רשת: "web",
  גוף: "body",
};

const ACTIONS = {
  לאכול: "eat",
  לרוץ: "run",
  לראות: "see",
  לומר: "say",
  להוסיף: "add",
  לשאול: "ask",
  לקנות: "buy",
  לחתוך: "cut",
  לחפור: "dig",
  לעשות: "do",
  לגעת: "get",
  לתת: "give",
  ללכת: "go",
  להכות: "hit",
  להחזיק: "hold",
  לקפוץ: "jump",
  לשמור: "keep",
  לשכב: "lay",
  להסתכל: "look",
  לשלם: "pay",
  לשים: "put",
  לקרוא: "read",
  לירות: "shoot",
  לשיר: "sing",
  לשבת: "sit",
  לישון: "sleep",
  לדבר: "speak",
  לעמוד: "stand",
  לשחות: "swim",
  לקחת: "take",
  לספר: "tell",
  לחשוב: "think",
  לזרוק: "throw",
  לנסות: "try",
  לפנות: "turn",
  להשתמש: "use",
  לרחוץ: "wash",
  ללבוש: "wear",
  לנצח: "win",
  לכתוב: "write",
  לבנות: "build",
  לשחק: "play",
  למצוא: "find",
  לשלוח: "send",
  לשנות: "change",
  לצאת: "leave",
  לפתח: "open",
  לסגור: "close",
  לחכות: "wait",
  ללמוד: "learn",
  לעזור: "help",
  לזכור: "remember",
  לשתות: "drink",
  לרקוד: "dance",
  לצייר: "draw",
  לשכוח: "forget",
  לנקות: "clean",
  לצעוק: "shout",
  לצחוק: "laugh",
  לבכות: "cry",
  לנשום: "breathe",
  לגלות: "discover",
  להמציא: "invent",
  לשכנע: "convince",
  לפתח: "develop",
  לשפר: "improve",
  לשתף: "share",
  לצפות: "watch",
  לעבוד: "work",
  לנסוע: "travel",
  לגנוב: "steal",
  להרוג: "kill",
  להציל: "save",
  להתפטר: "quit",
  להתגעגע: "miss",
  להתייאש: "give up",
  להתחרט: "regret",
  להתעצל: "be lazy",
  להתגבר: "overcome",
  להתאים: "fit",
};

const SPORT = {
  כדור: "ball",
  פוטבול: "football",
  כדורגל: "soccer",
  כדורסל: "basketball",
  "כדור בסיס": "baseball",
  "כדור חוף": "beach ball",
  "כדור גולף": "golf ball",
  "פינג פונג": "ping pong",
  רוגבי: "rugby",
  ריצה: "running",
  "ריצת מרתון": "marathon",
  "ריצת ספרינט": "sprint",
  "ריצה קצרה": "short run",
  "ריצה ארוכה": "long run",
  שחייה: "swimming",
  "ספורט מים": "water sport",
  קרב: "fight",
  "קרב מגע": "hand-to-hand combat",
  איגרוף: "boxing",
  קראטה: "karate",
  "ג'ודו": "judo",
  טקוואנדו: "taekwondo",
  היאבקות: "wrestling",
  קיקבוקסינג: "kickboxing",
  "אומנויות לחימה": "martial arts",
  "מאמן קרב": "fight coach",
  "קרב חופשי": "freestyle wrestling",
  תחרות: "competition",
  אימון: "training",
  שחקן: "player",
  מאמן: "coach",
  ניצחון: "victory",
  כושר: "fitness",
  קבוצה: "team",
  משחק: "game",
  אתלטיקה: "athletics",
  מגרש: "field",
  אצטדיון: "stadium",
  מסלול: "track",
  מאמץ: "effort",
  אסטרטגיה: "strategy",
  כישרון: "talent",
  חבטה: "strike",
  גול: "goal",
  שער: "net",
  רשת: "net",
  שופט: "referee",
  "שופט קו": "line judge",
  מזכיר: "secretary",
  "שחקן ספסל": "bench player",
  גיבוי: "backup",
  חלוץ: "forward",
  שוער: "goalkeeper",
  שומר: "defender",
  בלם: "center back",
  קשר: "midfielder",
  צמד: "duo",
  שלישיה: "trio",
  רביעיה: "quartet",
  חמישיה: "quintet",
  מחליף: "substitute",
  חילוף: "substitution",
  עבירה: "foul",
  פנדל: "penalty",
  קנס: "fine",
  אזהרה: "warning",
  הרחקה: "disqualification",
  "כרטיס צהוב": "yellow card",
  "כרטיס אדום": "red card",
  "זמן נוסף": "extra time",
  "חוקי המשחק": "rules",
  מדליה: "medal",
  פרס: "prize",
  גביע: "trophy",
  תוצאה: "score",
  "שער עצמי": "own goal",
  פינה: "corner",
  אזור: "zone",
  זכייה: "win",
  הפסד: "loss",
  תיקו: "draw",
  נקודה: "point",
  "מקום ראשון": "first place",
  "מקום שני": "second place",
  "מקום שלישי": "third place",
  תפיסה: "catch",
  זריקה: "throw",
  בעיטה: "kick",
  קפיצה: "jump",
  "מאמץ מרבי": "maximum effort",
  מגן: "protector",
  קסדה: "helmet",
  ספורט: "sport",
  פוטבול: "football",
  הוקי: "hockey",
  התקפה: "attack",
  הגנה: "defense",
  "מכת פתיחה": "opening blow",
  "הכרעת ניצחון": "knockout",
  "קרב סיבוב": "round fight",
  "מגן שיניים": "mouthguard",
  "חבישת ידיים": "hand wraps",
  "חגורה שחורה": "black belt",
  "הפסד טכני": "technical loss",
  "ניצחון טכני": "technical win",
  טכניקה: "technique",
  "ספירה לאחור": "countdown",
  חגורה: "belt",
  "ספורט חורף": "winter sport",
  "ספורט אתגרי": "extreme sport",
};

const NATURE = {
  עץ: "tree",
  פרח: "flower",
  דשא: "grass",
  אבן: "stone",
  מים: "water",
  שמש: "sun",
  גשם: "rain",
  שלג: "snow",
  ענן: "cloud",
  רוח: "wind",
  ים: "sea",
  אגם: "lake",
  נהר: "river",
  יער: "forest",
  חורש: "woods",
  גבעה: "hill",
  הר: "mountain",
  מדבר: "desert",
  שיח: "bush",
  עציץ: "pot",
  ריחן: "basil",
  "תפוח אדמה": "potato",
  גזר: "carrot",
  קישוא: "zucchini",
  עגבנייה: "tomato",
  תפוח: "apple",
  בננה: "banana",
  תפוז: "orange",
  אגוז: "nut",
  שקד: "almond",
  פירות: "fruits",
  ירקות: "vegetables",
  "עץ פרי": "fruit tree",
  גבעול: "stem",
  עלים: "leaves",
  שורש: "root",
  פטריה: "mushroom",
  חול: "sand",
  "אבן שואבת": "magnet",
  "ים סוער": "stormy sea",
  סלע: "rock",
  כפר: "village",
  מטע: "orchard",
  צמח: "plant",
  חרק: "insect",
  פרפר: "butterfly",
  ציפור: "bird",
  דבורה: "bee",
  עכביש: "spider",
  חפרפרת: "mole",
  תולעת: "worm",
  דג: "fish",
  לטאה: "lizard",
  שועל: "fox",
  ארנב: "rabbit",
  חיה: "animal",
  חוף: "beach",
  "מזג האוויר": "weather",
  יומיים: "day",
  שבוע: "week",
  עונה: "season",
  אביב: "spring",
  קיץ: "summer",
  סתיו: "autumn",
  חורף: "winter",
  "שמש שוקעת": "sunset",
  זריחה: "sunrise",
  כוכב: "star",
  ירח: "moon",
  שמיים: "sky",
  "כוכב לכת": "planet",
  חלל: "space",
  אור: "light",
  צל: "shadow",
  צמחיה: "vegetation",
  מזרח: "east",
  מערב: "west",
  צפון: "north",
  דרום: "south",
  מטר: "meter",
  אדמה: "earth",
};

const SENTENCES1 = {
  "אני אוכל תפוח": "I eat an apple",
  "אני רואה כלב": "I see a dog",
  "אני שותה חלב": "I drink milk",
  "אני אוהב דג": "I love fish",
  "אני רץ בפארק": "I run in the park",
  "אני קורא ספר": "I read a book",
  "אני רוכב על אופניים": "I ride a bike",
  "אני מצייר בית": "I draw a house",
  "אני שומע שיר": "I hear a song",
  "אני כותב שם": "I write a name",
  "אני פותח דלת": "I open a door",
  "אני בונה בית": "I build a house",
  "אני מבשל אורז": "I cook rice",
  "אני משחק בכדור": "I play ball",
  "אני מצלם תמונה": "I take a photo",
  "אני מביט בחלון": "I look at the window",
  "אני נוגע בשולחן": "I touch a table",
  "אני לובש כובע": "I wear a hat",
  "אני יושב בכיסא": "I sit on a chair",
  "אני שואל שאלה": "I ask a question",
  "אני מחפש עיפרון": "I look for a pencil",
  "אני קונה עוגה": "I buy a cake",
  "אני אוכל בננה": "I eat a banana",
  "אני פותח ספר": "I open a book",
  "אני מכין תה": "I make tea",
  "אני בוחר צבע": "I choose a color",
  "אני צובע קיר": "I paint a wall",
  "אני מחפש משחק": "I look for a game",
  "אני שומר סוד": "I keep a secret",
  "אני עוזב מקום": "I leave a place",
  "אני כותב מכתב": "I write a letter",
  "אני גוזר נייר": "I cut paper",
  "אני נוסע באוטו": "I drive a car",
  "אני שוחה בים": "I swim in the sea",
  "אני מנגן פסנתר": "I play piano",
  "אני לומד עברית": "I learn Hebrew",
  "אני רוקד ריקוד": "I dance a dance",
  "אני יושב על כיסא": "I sit on a chair",
  "אני מצייר פרח": "I draw a flower",
  "אני מטייל בגן": "I walk in the garden",
  "אני קונה פרח": "I buy a flower",
  "אני מחפש מפתח": "I look for a key",
  "אני נוגע בקיר": "I touch the wall",
  "אני מצלם פרח": "I photo a flower",
  "אני אוהב שיר": "I love a song",
  "אני מבשל מרק": "I cook soup",
  "אני לובש מעיל": "I wear a coat",
  "אני רואה עץ": "I see a tree",
  "אני מחפש כסף": "I look for money",
  "אני בונה גשר": "I build a bridge",
  "אני שומע קול": "I hear a voice",
  "אני כותב ספר": "I write a book",
  "אני אוכל תפוח": "I eat an apple",
  "אני רואה כוכב": "I see a star",
  "אני שותה מיץ": "I drink juice",
  "אני מצייר חיה": "I draw an animal",
  "אני שומר חוק": "I keep a rule",
  "אני עוזר חבר": "I help a friend",
  "אני לובש נעל": "I wear a shoe",
  "אני צובע קיר": "I paint a wall",
  "אני אוהב עוגה": "I love cake",
  "אני מביט במפה": "I look at the map",
  "אני כותב פתק": "I write a note",
  "אני אופה לחם": "I bake bread",
  "אני מדבר בטלפון": "I talk on the phone",
  "אני עובר גשר": "I cross a bridge",
  "אני אוהב תות": "I love strawberry",
  "אני פותח קופסה": "I open a box",
  "אני מדליק אור": "I turn on the light",
  "אני מרים יד": "I raise my hand",
  "אני מרכיב פזל": "I assemble a puzzle",
  "אני נוגע בפרח": "I touch the flower",
  "אני קורא עיתון": "I read a newspaper",
  "אני עוזר ילד": "I help a child",
  "אני שותה תה": "I drink tea",
  "אני בונה אוהל": "I build a tent",
  "אני כותב שם": "I write a name",
  "אני רואה צבע": "I see a color",
  "אני מטפס עץ": "I climb a tree",
  "אני עובר כביש": "I cross a road",
  "אני נוגע בחול": "I touch the sand",
  "אני רץ מהר": "I run fast",
  "אני מחפש משהו": "I look for something",
  "אני מתקן חפץ": "I fix an object",
  "אני מצייר משהו": "I draw something",
  "אני מחפש כלב": "I look for a dog",
  "אני אוהב מיץ": "I love juice",
  "אני שותה מים": "I drink water",
  "אני כותב משהו": "I write something",
  "אני רוכב על סוס": "I ride a horse",
};

const SENTENCES2 = {
  "אני רואה ספר": "I see a book.",
  "יש לי כדור": "I have a ball.",
  "הכלב שלי קטן": "My dog is small.",
  "החתול ישן עכשיו": "The cat is sleeping.",
  "זה תפוח אדום": "This is a red apple.",
  "הילד משחק בחוץ": "The boy plays outside.",
  "אמא במטבח": "Mom is in the kitchen.",
  "הילדה קוראת ספר": "The girl reads a book.",
  "המכונית שלי מהירה": "My car is fast.",
  "אני אוהב עוגה": "I love cake.",
  "הכדור על הרצפה": "The ball is on the floor.",
  "אבא עובד עכשיו": "Dad is working now.",
  "החתול אכל דג": "The cat ate fish.",
  "אני מצייר תמונה": "I draw a picture.",
  "הילד רץ מהר": "The boy runs fast.",
  "הספר שלי חדש": "My book is new.",
  "החלב בטוח": "The milk is safe.",
  "הכיסא בצבע אדום": "The chair is red.",
  "אני שותה מיץ": "I drink juice.",
  "הכלב שלי אוהב לרוץ": "My dog loves to run.",
  "הילד אוכל תפוח": "The boy eats an apple.",
  "החבר שלי כאן": "My friend is here.",
  "אמא אופה עוגה": "Mom bakes a cake.",
  "הילדה משחקת בחוץ": "The girl plays outside.",
  "הכדור שלי כחול": "My ball is blue.",
  "החתול על השולחן": "The cat is on the table.",
  "אני נוגע בכדור": "I touch the ball.",
  "הספרים על המדף": "The books are on the shelf.",
  "אבא קורא עיתון": "Dad reads a newspaper.",
  "אני הולך לבית הספר": "I go to school.",
  "הילד שלי משחק": "My boy is playing.",
  "החתול שלי ישן": "My cat is sleeping.",
  "הכדור בקופסה": "The ball is in the box.",
  "אני אוהב לקרוא": "I love to read.",
  "אמא מכינה ארוחת ערב": "Mom prepares dinner.",
  "הילד שלי צוחק": "My boy is laughing.",
  "החתול אוכל דג": "The cat eats fish.",
  "אני רואה מכונית": "I see a car.",
  "הכיסאות בצבע כחול": "The chairs are blue.",
  "אמא קונה תפוחים": "Mom buys apples.",
  "הילד שלי משחק": "My boy is playing.",
  "הכלב שלי קטן": "My dog is small.",
  "החלב במקרר": "The milk is in the fridge.",
  "הספר שלי פה": "My book is here.",
  "הילדה רצה מהר": "The girl runs fast.",
  "אני אוכלת עוגה": "I eat cake.",
  "הכדור שלי עגול": "My ball is round.",
  "החתול משחק בכדור": "The cat plays with the ball.",
  "הילד קורא ספר": "The boy reads a book.",
  "אמא מכינה תה": "Mom makes tea.",
  "הילד שלי שותף": "My boy is quiet.",
  "הכדור לא כאן": "The ball is not here.",
  "החתול שלי עייף": "My cat is tired.",
  "אני רואה חבר": "I see a friend.",
  "אמא נוסעת באוטו": "Mom drives a car.",
  "הילד שלי מדבר": "My boy is talking.",
  "הכיסאות חדשים": "The chairs are new.",
  "הילדה שלי קופצת": "My girl is jumping.",
  "הספר שלי שם": "My book is there.",
  "הילד שלי מבלה": "My boy is enjoying.",
  "החתול שלי עוזב": "My cat is leaving.",
  "אני אוהב לשחק": "I love to play.",
  "הכלב שלי מחפש": "My dog is searching.",
  "הילד שלי בוכה": "My boy is crying.",
  "הכדור שלך קטן": "Your ball is small.",
  "הילד שלי משחק": "My boy is playing.",
  "החתול שלי צמא": "My cat is thirsty.",
  "אני לומד עברית": "I learn Hebrew.",
  "הספרים שלי על הרצפה": "My books are on the floor.",
  "אמא הולכת לחנות": "Mom goes to the store.",
  "הילד שלי נח": "My boy is resting.",
  "החתול שלי חמוד": "My cat is cute.",
  "אני קורא עיתון": "I read a newspaper.",
  "הילדה שלי רוקדת": "My girl is dancing.",
  "הכיסאות שלך יפים": "Your chairs are beautiful.",
  "הילד שלי משחק בכדור": "My boy plays with the ball.",
  "החתול שלי משחק": "My cat is playing.",
  "אני רואה שמש": "I see the sun.",
  "הילד שלי אוכל": "My boy is eating.",
  "הכדור שלך אדום": "Your ball is red.",
  "הילדה שלי צוחקת": "My girl is laughing.",
  "הספר שלי על השולחן": "My book is on the table.",
  "אמא רוכבת על אופניים": "Mom rides a bike.",
  "הילד שלי כותב": "My boy is writing.",
  "החתול שלי מחפש אוכל": "My cat is looking for food.",
  "אני מצייר פרח": "I draw a flower.",
  "הכיסאות חדשים": "The chairs are new.",
  "הילד שלי שותה מים": "My boy drinks water.",
  "החתול שלי ליד השולחן": "My cat is by the table.",
  "אני רואה כוכב": "I see a star.",
  "הילד שלי רץ": "My boy runs.",
  "הכדור שלי שם": "My ball is there.",
  "הילדה שלי אוכלת": "My girl eats.",
  "החתול שלי חם": "My cat is warm.",
  "אני רואה שמש": "I see the sun.",
  "הילד שלי מדבר": "My boy is talking.",
  "הכיסאות שלך חדשים": "Your chairs are new.",
  "הילד שלי בונה": "My boy is building.",
  "החתול שלי ישן": "My cat is sleeping.",
  "אני הולך לשחק": "I go to play.",
  "הכיסאות שלך גדולים": "Your chairs are big.",
  "הילדה שלי רוקדת": "My girl dances.",
  "החתול שלי אוהב לישון": "My cat loves to sleep.",
  "אני אוהב ספרים": "I love books.",
  "הילד שלי קורא": "My boy reads.",
  "הכדור שלי בחוץ": "My ball is outside.",
  "החתול שלי רוצה אוכל": "My cat wants food.",
  "אני רואה את אמא": "I see Mom.",
  "הילד שלי שותה חלב": "My boy drinks milk.",
  "הכיסאות שלי צבעוניים": "My chairs are colorful.",
  "הילדה שלי משחקת": "My girl plays.",
  "החתול שלי שמח": "My cat is happy.",
  "אני אופה עוגה": "I bake a cake.",
  "הילד שלי בונה בית": "My boy builds a house.",
  "הכיסאות שלך אדומים": "Your chairs are red.",
  "הילדה שלי קוראת ספר": "My girl reads a book.",
  "החתול שלי משחק בכדור": "My cat plays with a ball.",
  "אני רואה עץ": "I see a tree.",
  "הילד שלי עושה שיעורים": "My boy does homework.",
  "הכיסאות שלי חומים": "My chairs are brown.",
  "החתול שלי מעניין": "My cat is interesting.",
  "אני הולך לגן": "I go to the garden.",
};

const SENTENCES3 = {
  "אבא שלי עובד קשה כל יום במשרד": "My dad works hard every day in the office.",
  "אבא שלי קורא עיתון בכל בוקר במטבח":
    "My dad reads the newspaper every morning in the kitchen.",
  "אמא שלי מבשלת אוכל טעים כל בוקר": "My mom cooks tasty food every morning.",
  "אמא שלי מבשלת מרק ירקות כל יום בחורף":
    "My mom cooks vegetable soup every day in winter.",
  "אמא שלי מבשלת פסטה טעימה בכל יום שישי":
    "My mom cooks tasty pasta every Friday.",
  "אמא שלי מכינה אוכל טעים כל יום בבית":
    "My mom makes tasty food every day at home.",
  "אמא שלי מכינה מרק חם וטעים לכל המשפחה":
    "My mom makes hot and tasty soup for the whole family.",
  "אמא שלי מכינה סלט ירקות טרי בכל ערב":
    "My mom makes a fresh vegetable salad every evening.",
  "אמא שלי מכינה עוגה טעימה כל שבוע בבית":
    "My mom makes a tasty cake every week at home.",
  "אמא שלי מכינה עוגה טעימה לכל יום":
    "My mom makes a tasty cake for every day.",
  "אמא שלי מכינה עוגיות טעימות בכל יום שישי":
    "My mom makes tasty cookies every Friday.",
  "אמא שלי נותנת לי תפוח טרי כל יום":
    "My mom gives me a fresh apple every day.",
  "אמא שלי קונה אוכל טרי כל שבוע": "My mom buys fresh food every week.",
  "אמא שלי קונה פרחים יפים כל שבוע בחנות":
    "My mom buys beautiful flowers every week at the store.",
  "אני אוהב לאכול תפוח טרי כל יום": "I love to eat a fresh apple every day.",
  "אני אוכל סלט ירקות טרי בכל ערב בארוחה":
    "I eat a fresh vegetable salad every evening at dinner.",
  "אני אוכל סלט ירקות טרי כל ערב בארוחה":
    "I eat a fresh vegetable salad every evening at dinner.",
  "אני אוכל תפוח בכל בוקר לפני בית ספר":
    "I eat an apple every morning before school.",
  "אני אוכל תפוח טרי בכל יום אחרי הצהריים":
    "I eat a fresh apple every afternoon.",
  "אני הולך לבית הספר עם חבר שלי": "I go to school with my friend.",
  "אני הולך לחנות לקנות תפוחים כל שבוע":
    "I go to the store to buy apples every week.",
  "אני יושב על הכיסא ליד השולחן עם ספר":
    "I sit on the chair next to the table with a book.",
  "אני יושב על הכסא בבית שלי עכשיו": "I sit on the chair in my house now.",
  "אני יושב על הספה עם ספר ביד": "I sit on the sofa with a book in hand.",
  "אני לומד דברים חדשים בכל יום בבית הספר":
    "I learn new things every day at school.",
  "אני לומד דברים חדשים כל יום בבית הספר":
    "I learn new things every day at school.",
  "אני לומד שיעורים חדשים כל יום בכיתה":
    "I learn new lessons every day in class.",
  "אני קונה ספר חדש בחנות כל חודש":
    "I buy a new book at the store every month.",
  "אני קונה ספר חדש בכל חודש בחנות":
    "I buy a new book every month at the store.",
  "אני קונה עפרון חדש בכל פעם שאני בחנות":
    "I buy a new pencil every time I'm at the store.",
  "אני רואה את הכלב שלי רץ מהר": "I see my dog running fast.",
  "אני שותה מים קרים בכל בוקר אחרי ריצה":
    "I drink cold water every morning after running.",
  "אני שותה מים קרים כל בוקר אחרי ריצה":
    "I drink cold water every morning after running.",
  "אני שותה מיץ טרי כל בוקר במטבח שלנו":
    "I drink fresh juice every morning in our kitchen.",
  "אני שותה מיץ תפוזים טרי בכל בוקר במטבח":
    "I drink fresh orange juice every morning in the kitchen.",
  "החברים שלי אוהבים לשחק ביחד אחרי בית ספר":
    "My friends love playing together after school.",
  "החברים שלי משחקים ביחד כל יום אחרי בית ספר":
    "My friends play together every day after school.",
  "החברים שלי משחקים כדורגל בפארק אחרי בית ספר":
    "My friends play soccer in the park after school.",
  "החברים שלי משחקים כדורסל בכל סוף שבוע בפארק":
    "My friends play basketball every weekend in the park.",
  "החדר שלי נקי אחרי שאני מסדר אותו כל יום":
    "My room is clean after I tidy it up every day.",
  "החדר שלי נקי אחרי ששטפתי את הרצפה":
    "My room is clean after I washed the floor.",
  "החדר שלי נקי ומסודר אחרי יום ארוך":
    "My room is clean and tidy after a long day.",
  "החתול הקטן משחק עם כדור צבעוני קטן":
    "The small cat plays with a colorful ball.",
  "החתול ישן על הספה בבית שלנו": "The cat sleeps on the couch in our home.",
  "החתול שלי אוהב לישון על הספה בסלון":
    "My cat loves sleeping on the sofa in the living room.",
  "החתול שלי אוהב לרוץ ברחוב אחרי הציפורים":
    "My cat loves to run on the street after the birds.",
  "החתול שלי אוהב לשבת על השטיח החם בבית":
    "My cat loves to sit on the warm rug at home.",
  "החתול שלי אוהב לשחק עם צעצוע קטן": "My cat loves playing with a small toy.",
  "החתול שלי ישן במיטה בכל לילה בבית":
    "My cat sleeps in bed every night at home.",
  "החתול שלי ישן כל היום על המיטה החמה":
    "My cat sleeps all day on the warm bed.",
  "החתול שלי ישן על המיטה בכל לילה קר":
    "My cat sleeps on the bed every cold night.",
  "החתול שלי רץ ברחוב אחרי העכבר הקטן שלנו":
    "My cat runs on the street after our small mouse.",
  "הילדה יושבת על הספה וקוראת ספר יפה":
    "The girl sits on the couch and reads a nice book.",
  "הילדה לובשת שמלה ורודה בכל יום בבית":
    "The girl wears a pink dress every day at home.",
  "הילדה לובשת שמלה ורודה יפה בבית":
    "The girl wears a pretty pink dress at home.",
  "הילדה לובשת שמלה חדשה ביום שישי": "The girl wears a new dress on Friday.",
  "הילדה משחקת בחצר עם החברים שלה כל יום":
    "The girl plays in the yard with her friends every day.",
  "הילדה רצה מהר אחרי הכלב ברחוב הקטן":
    "The girl runs fast after the dog on the small street.",
  "הילדה שותה מים קרים כל בוקר": "The girl drinks cold water every morning.",
  "הילדה שלי לובשת שמלה יפה בכל חגיגה":
    "My daughter wears a pretty dress at every celebration.",
  "הילדים אוהבים לצייר תמונות יפות יחדיו":
    "The children love drawing nice pictures together.",
  "הילדים אוכלים פירות טריים בכל יום":
    "The children eat fresh fruits every day.",
  "הילדים הולכים לבית ספר בכל יום בבוקר":
    "The children go to school every morning.",
  "הילדים הולכים לפארק עם כדור כל יום":
    "The kids go to the park with a ball every day.",
  "הילדים משחקים בחול בפארק אחרי בית ספר":
    "The children play in the sand at the park after school.",
  "הילדים משחקים בכדור קטן על הדשא":
    "The kids play with a small ball on the grass.",
  "הילדים צוחקים ביחד אחרי המשחק בפארק הגדול":
    "The kids laugh together after playing in the big park.",
  "הילדים קוראים ספרים יחדיו על הדשא בפארק":
    "The children read books together on the grass in the park.",
  "הילדים רצים בפארק עם הכלב הקטן שלנו כל יום":
    "The kids run in the park with our small dog every day.",
  "הילדים שלי אוהבים לצייר תמונות יפות בבית":
    "My children love drawing beautiful pictures at home.",
  "הילדים שלי אוכלים ארוחת בוקר בכל בוקר מוקדם":
    "My kids eat breakfast every morning early.",
  "הילדים שלי אוכלים פירות טריים בכל יום בצהריים":
    "My kids eat fresh fruit every day at noon.",
  "הילדים שלי הולכים לבית הספר בכל בוקר מוקדם":
    "My kids go to school every morning early.",
  "הילדים שלי הולכים לחוג כדורגל כל שבוע":
    "My kids go to soccer practice every week.",
  "הילדים שלי קוראים ספרים יפים בכל ערב בבית":
    "My children read beautiful  books every evening at home.",
  "הילדים שלי קוראים ספרים יפים כל ערב בבית":
    "My kids read nice books every evening at home.",
  "הילדים שלי רצים בפארק בכל יום אחרי הצהריים":
    "My kids run in the park every afternoon.",
  "הילדים שלי שרים שירים יפים כל שבוע בבית ספר":
    "My kids sing beautiful songs every week at school.",
  "הילדים שרים שיר יפה ביחד בבית ספר":
    "The kids sing a beautiful song together at school.",
  "הכדור הירוק מתגלגל על הדשא אחרי המשחק":
    "The green ball rolls on the grass after the game.",
  "הכדור הקטן קופץ מהר על הדשא הירוק":
    "The small ball bounces fast on the green grass.",
  "הכדור שלי מתגלגל רחוק על הדשא אחרי המשחק":
    "My ball rolls far on the grass after the game.",
  "הכדור שלי נמצא בחוץ על הדשא ליד הבית":
    "My ball is outside on the grass near the house.",
  "הכדור שלי נמצא ליד הדלת במבואה בבית":
    "My ball is near the door in the hallway at home.",
  "הכדור שלי נמצא ליד השולחן בחדר אחרי המשחק":
    "My ball is near the table in the room after the game.",
  "הכדור שלי עף רחוק על הדשא אחרי המשחק":
    "My ball flies far on the grass after the game.",
  "הכיסא שלי ליד השולחן הגדול בחדר שלי":
    "My chair is next to the big table in my room.",
  "הכיסא שלי נמצא ליד השולחן בחדר":
    "My chair is next to the table in the room.",
  "הכיסא שלי נמצא ליד השולחן בחדר בבית":
    "My chair is next to the table in the room at home.",
  "הכלב שלי אוהב לשחק עם הכדור בחוץ":
    "My dog loves playing with the ball outside.",
  "הכלב שלי ישן במיטה אחרי משחק בפארק":
    "My dog sleeps in bed after playing in the park.",
  "הכלב שלי ישן על המיטה אחרי יום ארוך":
    "My dog sleeps on the bed after a long day.",
  "הכלב שלי משחק עם החתול שלנו כל בוקר":
    "My dog plays with our cat every morning.",
  "הכלב שלי משחק עם כדור קטן בחוץ": "My dog plays with a small ball outside.",
  "הכלב שלי רץ ברחוב אחרי החתול הקטן שלנו":
    "My dog runs on the street after our small cat.",
  "הכלב שלי רץ מהר אחרי החתול ברחוב כל יום":
    "My dog runs fast after the cat on the street every day.",
  "הכלב שלי רץ מהר על הדשא כל יום": "My dog runs fast on the grass every day.",
  "המשפחה יוצאת לטיול כל סוף שבוע בפארק":
    "The family goes on a trip every weekend in the park.",
  "המשפחה שלי אוכלת פיצה יחד כל שבוע בסלון":
    "My family eats pizza together every week in the living room.",
  "המשפחה שלי הולכת לטייל בפארק בכל סוף שבוע":
    "My family goes for a walk in the park every weekend.",
  "המשפחה שלי יוצאת לטיול בכל סוף שבוע":
    "My family goes on a trip every weekend.",
  "המשפחה שלנו אוכלת ארוחת ערב ביחד כל יום":
    "Our family eats dinner together every day.",
  "המשפחה שלנו הולכת לים בכל קיץ לשחות":
    "Our family goes to the sea every summer to swim.",
  "המשפחה שלנו הולכת לפארק כל שבוע": "Our family goes to the park every week.",
  "המשפחה שלנו יושבת ביחד לארוחת ערב כל יום":
    "Our family sits together for dinner every day.",
  "המשפחה שלנו יושבת יחד לאכול ארוחת ערב כל ערב":
    "Our family sits together to eat dinner every evening.",
  "המשפחה שלנו יושבת לאכול ארוחת ערב כל יום":
    "Our family sits to eat dinner every day.",
  "הספר הזה מלא בסיפורים יפים על חיות שונות":
    "This book is full of beautiful stories about different animals.",
  "הספר נמצא על המדף בחדר הספרים שלנו בבית":
    "The book is on the shelf in our library room at home.",
  "הספר נמצא על המדף בחדר שלנו בבית":
    "The book is on the shelf in our room at home.",
  "הספר נמצא על המדף הגבוה בסלון שלנו":
    "The book is on the high shelf in our living room.",
  "הספר נמצא על המדף הגבוה בספריה שלנו":
    "The book is on the high shelf in our library.",
  "הספר שלי מלא בתמונות יפות של חיות שונות":
    "My book is full of beautiful pictures of different animals.",
  "הספר שלי נמצא על השולחן ליד המיטה": "My book is on the table near the bed.",
  "הספרים שלי על השולחן בחדר שלי": "My books are on the table in my room.",
  "הציפורים עפות גבוה מעל העצים הירוקים":
    "The birds fly high above the green trees.",
  "יש לי עוגה גדולה על השולחן במטבח":
    "I have a big cake on the table in the kitchen.",
  "יש לי עפרון כחול בתוך התיק": "I have a blue pencil in the bag.",
  "יש לי עפרונות צבעוניים בתוך התיק שלי": "I have colorful pencils in my bag.",
  "יש לי שולחן קטן בחדר ליד החלון":
    "I have a small table in the room near the window.",
};

const DD = {
  LETTERS,
  SOUNDS1,
  SOUNDS2,
  WORDS1,
  WORDS2,
  ACTIONS,
  SPORT,
  NATURE,
  SENTENCES1,
  SENTENCES2,
  SENTENCES3,
};

export { DD };
