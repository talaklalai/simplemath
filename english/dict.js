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
  "..וְ": "and",
  אהבה: "love",
  "..ה": "the",
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
  חדשות: "news",
  נייר: "paper",
  עיתון: "newspaper",
  עט: "pen",
  תפוח: "apple",
  לחם: "bread",
  חלב: "milk",
  עוף: "chicken",
  דג: "fish",
  פירות: "fruits",
  ירקות: "vegetables",
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
  הר: "mountain",
  שמיים: "sky",
  אריה: "lion",
  קוף: "monkey",
  עצוב: "sad",
  חג: "holiday",
  מוזיקה: "music",
  שיר: "song",
  משחק: "game",
  רופא: "doctor",
  שוטר: "policeman",
  מורה: "teacher",
  רחוק: "far",
  דרך: "way",
  רשת: "web",
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
  להטיל: "lay",
  לשכב: "lie down",
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
  לחזור: "come back",
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
  לתרגם: "translate",
  לפתח: "develop",
  לשפר: "improve",
  לשתף: "share",
  לצפות: "watch",
  לעבוד: "work",
  לנסוע: "travel",
  לגנוב: "steal",
  להרוג: "kill",
  להציל: "save",
  להתלבש: "get dressed",
  להתעורר: "wake up",
  להתכונן: "prepare",
  להתיידד: "make friends",
  להתאהב: "fall in love",
  להתפטר: "quit",
  להתגעגע: "miss",
  להתלבט: "hesitate",
  להתפלא: "be amazed",
  להתעצבן: "get angry",
  להתייאש: "give up",
  להתחרט: "regret",
  להתעצל: "be lazy",
  להתעניין: "be interested",
  להתגבר: "overcome",
  להתאים: "fit",
  להתייחס: "refer to",
  להתלבט: "struggle",
};

const DD = {
  LETTERS,
  SOUNDS1,
  SOUNDS2,
  WORDS1,
  ACTIONS,
};

export { DD };
