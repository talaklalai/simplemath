 
const BASIC1 = {
    "אני": "I",
    "אתה": "you",
    "את": "you",
    "הוא": "he",
    "היא": "she",
    "זה": "it",
    "אנחנו": "we",
    "אתם": "you",
    "הן": "they",
    "הם": "they",
    "בית": "house",
    "כלב": "dog",
    "חתול": "cat",
    "שמש": "sun",
    "ירח": "moon",
    "עץ": "tree",
    "מים": "water",
    "שמים": "sky",
    "כדור": "ball",
    "ספר": "book",
    "דג": "fish",
    "עגלה": "carriage",
    "צהריים": "noon",
    "ציפור": "bird",
    "דבש": "honey",
    "פרח": "flower",
    "גשם": "rain",
    "שלג": "snow",
    "פרה": "cow",
    "זמן": "time",
    "פרח": "flower",
    "גבינה": "cheese",
    "עגבניה": "tomato",
    "תפוח": "apple",
    "בננה": "banana",
    "קפה": "coffee",
    "טלפון": "phone",
    "מחשב": "computer",
    "תחבורה": "transportation",
    "מכונית": "car",
    "אוטובוס": "bus",
    "מטוס": "airplane",
    "צ'ופר": "jeep",
    "אופניים": "bicycle",
    "טרמפולינה": "trampoline",
    "כדורסל": "basketball",
    "כדורגל": "soccer",
    "ספורט": "sport",
    "בית ספר": "school",
    "מחלקה": "classroom",
    "שולחן": "table",
    "כיסא": "chair",
    "ריצפה": "floor",
    "תקרה": "ceiling",
    "חלון": "window",
    "דלת": "door",
    "מדריך": "teacher",
    "תלמיד": "student",
    "חבר": "friend",
    "אבא": "dad",
    "אימא": "mom",
    "אח": "brother",
    "אחות": "sister",
    "ילד": "child",
    "אוכל": "food",
    "ארוחת בוקר": "breakfast",
    "ארוחת צהריים": "lunch",
    "ארוחת ערב": "dinner",
    "מכונת כביסה": "washing machine",
    "מדיח כלים": "dishwasher",
    "מקרר": "refrigerator",
    "טלוויזיה": "television",
    "מסך": "screen",
    "קולנוע": "cinema",
    "מוזיאון": "museum",
    "מספרה": "hair salon",
    "מלון": "hotel",
    "בית קפה": "cafe",
    "מסעדה": "restaurant",
    "מאפייה": "bakery",
    "סופרמרקט": "supermarket",
    "גני ילדים": "playground",
    "ספריה": "library",
    "קיץ": "summer",
    "חורף": "winter",
    "אביב": "spring",
    "סתיו": "autumn",
    "פרחים": "flowers",
    "עצים": "trees",
    "חיה": "animal",
    "צמח": "plant",
    "בעל חיים": "pet",
    "דבורה": "bee",
    "אריה": "lion",
    "זבוב": "fly",
    "פרפר": "butterfly",
    "חיפוש": "search",
    "תפריט": "menu",
    "שליח": "messenger",
    "איש קשר": "contact person",
    "עזרה": "help",
    "טיפול": "treatment",
    "צרכים": "needs",
    "רפואה": "medicine",
    "הוראה": "instruction",
    "מונח": "term",
    "כוח": "force",
    "מהירות": "speed",
    "תנועה": "movement",
    "התנגשות": "collision",
    "חום": "heat",
    "אור": "light",
    "קול": "sound",
    "אוויר": "air",
    "מים": "water",
    "קרח": "ice",
    "גז": "gas",
    "חשמל": "electricity",
    "אש": "fire",
    "אדמה": "earth",
    "רוח": "wind",
    "כח": "power",
    "מרחב": "space",
    "צורה": "shape",
    "גובה": "height",
    "רוחב": "width",
    "עומק": "depth",
    "משקל": "weight",
}

const BASIC2 = {
    "טמפרטורה": "temperature",
    "המשך": "continuation",
    "סיום": "end",
    "התחלה": "beginning",
    "כיוון": "direction",
    "מרכז": "center",
    "צפון": "north",
    "דרום": "south",
    "מזרח": "east",
    "מערב": "west",
    "גבוה": "high",
    "נמוך": "low",
    "יבשה": "land",
    "ים": "sea",
    "אוקיינוס": "ocean",
    "קרח": "ice",
    "שלג": "snow",
    "קר": "cold",
    "חם": "hot",
    "אקלים": "climate",
    "עננים": "clouds",
    "גשם": "rain",
    "ברק": "lightning",
    "רעם": "thunder",
    "סופה": "storm",
    "צון": "flood",
    "שמש": "sun",
    "ירח": "moon",
    "כוכב": "star",
    "כוח": "force",
    "תנועה": "movement",
    "מהירות": "speed",
    "אור": "light",
    "חושך": "darkness",
    "צל": "shadow",
    "צבע": "color",
    "אדום": "red",
    "כחול": "blue",
    "ירוק": "green",
    "צהוב": "yellow",
    "כתום": "orange",
    "סגול": "purple",
    "שחור": "black",
    "לבן": "white",
    "חום": "brown",
    "אפור": "gray",
    "כסף": "silver",
    "זהב": "gold",
    "אמצעי": "medium",
    "רך": "soft",
    "קשה": "hard",
    "חלק": "smooth",
    "גולמי": "rough",
    "קרוב": "near",
    "רחוק": "far",
    "בגובה": "high",
    "בעומק": "deep",
    "בשטח": "surface",
    "צפוף": "dense",
    "רחב": "wide",
    "צר": "narrow",
    "שלם": "whole",
    "חצי": "half",
    "זוג": "pair",
    "חצי שעה": "half an hour",
    "שעה": "hour",
    "דקה": "minute",
    "שנייה": "second",
    "יום": "day",
    "שבוע": "week",
    "חודש": "month",
    "שנה": "year",
    "מהלך": "walk",
    "ריצה": "run",
    "נסיעה": "ride",
    "טיול": "trip",
    "דרך": "way",
    "נתיב": "path",
    "יעד": "destination",
    "תחנה": "station",
    "מטרה": "goal",
    "תוכנית": "plan",
    "מטרה": "purpose",
    "סדר": "order",
    "מערכת": "system",
    "שיטה": "method",
    "כלי": "tool",
    "מכונה": "machine",
    "גלגל": "wheel",
    "ציוד": "equipment",
    "חומר": "material",
    "קישוט": "decoration",
    "תוספת": "addition",
    "מודעות": "awareness",
    "תודעה": "consciousness",
    "חשיבה": "thought",
    "רעיונות": "ideas",
    "מוח": "brain",
    "רגש": "emotion",
    "תחושה": "feeling",
    "פחד": "fear",
    "אהבה": "love",
    "קור": "cold",
    "חום": "heat",
    "כאב": "pain",
    "שמחה": "joy",
    "כעס": "anger",
    "שקט": "quiet",
    "רעש": "noise",
    "מוזיקה": "music",
    "כתיבה": "writing",
    "ציור": "painting",
    "צילום": "photography",
    "בנייה": "construction",
    "מדע": "science",
    "חקר": "research",
    "גלגול": "rolling",
    "נפילה": "falling",
    "מחצית": "half",
    "שליש": "third",
    "רבע": "quarter",
    "שנייה": "second",
    "מאה": "hundred",
    "אלף": "thousand",
    "מיליון": "million",
    "מיליארד": "billion",
    "כתיבה": "writing",
    "קריאה": "reading",
    "סיפור": "story",
    "מתחם": "compound",
    "מבנה": "structure",
    "מערכת": "system",
    "פעולה": "action",
    "ביצוע": "performance",
    "תוצאה": "result",
    "השפעה": "effect",
    "שינוי": "change",
    "שיפור": "improvement",
    "רעיון": "idea",
  }

const FAMILY = {
    
        "אבא": "father",
        "אימא": "mother",
        "הורים": "parents",
        "אח": "brother",
        "אחות": "sister",
        "אחיות": "sisters",
        "אחים": "brothers",
        "הורה": "parent",
        "ילד": "child",
        "ילדים": "children",
        "בן": "son",
        "בת": "daughter",
        "נכד": "grandchild",
        "נכדים": "grandchildren",
        "סבא": "grandfather",
        "סבתא": "grandmother",
        "סבים": "grandparents",
        "נכדה": "granddaughter",
        "נכדות": "granddaughters",
        "נכדים": "grandsons",
        "בת זוג": "partner",
        "בעל": "husband",
        "אשתו": "wife",
        "זוגיות": "relationship",
        "חתונה": "wedding",
        "גירושים": "divorce",
        "אחים ואחיות": "siblings",
        "אח שלי": "my brother",
        "אחת שלי": "my sister",
        "אחיותי": "my sisters",
        "אחי": "my brothers",
        "ילדים שלי": "my children",
        "בני": "my sons",
        "בנותי": "my daughters",
        "הורים שלי": "my parents",
        "אבי": "my father",
        "אמי": "my mother",
        "סבא שלי": "my grandfather",
        "סבתא שלי": "my grandmother",
        "בעלי": "my husband",
        "אישתי": "my wife",
        "סופרים": "telling",
        "מספרים": "numbers",
        "הספור": "the story",
        "הספורים": "the stories",
        "הסיפור": "the tale",
        "סיפורים": "tales",
    }

const VACATION = {
    "חופשה": "vacation",
    "נופש": "holiday",
    "טיול": "trip",
    "חופשת קיץ": "summer",
    "חופשת חורף": "winter",
    "נופש בחו\"ל": "abroad",
    "נופש בארץ": "domestic",
    "מלון": "hotel",
    "צימר": "guesthouse",
    "דירת נופש": "rental",
    "טיול קבוצתי": "group",
    "טיול בודד": "solo",
    "טיול עם המשפחה": "family",
    "טיול עם החברים": "friends",
    "מדריך תיירים": "guide",
    "תייר": "tourist",
    "תיירית": "tourist (female)",
    "פסטיבל": "festival",
    "אטרקציה": "attraction",
    "טיסה": "flight",
    "מזג אוויר": "weather",
    "חוף הים": "beach",
    "ים": "sea",
    "הר": "mountain",
    "נהר": "river",
    "טבע": "nature",
    "אוכל": "food",
    "תרבות": "culture",
    "מוזיאון": "museum",
    "פאב": "pub",
    "בר": "bar",
    "לילה": "nightlife",
    "מסיבה": "party",
    "ספורט": "sports",
    "טרקטורון": "jeep",
    "אופניים": "biking",
    "צלילה": "diving",
    "שייט": "sailing",
    "סנורקלינג": "snorkeling",
    "עכבר השדות": "field mouse",
    "ברווז": "duck",
    "כלב ים": "sea ​​lion",
    "נמלה": "ant",
    "צפרדע": "frog",
    "פרפר": "butterfly",
    "חיפושית": "mosquito",
    "ברבור": "cockroach",
    "עטלף": "bat",
    "קרקעון": "mole",
    "דבורה": "bee",
    "נחש": "snake",
    "קרחון": "lizard",
    "תולעים": "worms",
    "אצבע רגל": "toe",
    "מרפק": "sole",
    "עקב": "heel",
    "קרסול": "ankle",
    "שוקיים": "calves",
    "ברך": "knee",
    "ירך": "thigh",
    "חלק תחתון": "buttock",
    "בטן": "stomach",
    "חזה": "chest",
    "צוואר": "neck",
    "גב": "back",
    "כתף": "shoulder",
    "יד": "hand",
    "אצבע": "finger",
    "צווארון": "collar",
    "שרוול": "sleeve",
    "כפפה": "glove",
    "מגבעת": "hat",
    "משקפי שמש": "sunglasses",
    "חגורה": "belt",
    "כובע": "cap",
    "כובע ראש": "hat",
    "שרוולים": "sleeves",
    "מכנסיים": "trousers",
    "גרביים": "socks",
    "גרב": "sock",
    "נעליים": "shoes",
    "נעל": "shoe",
    "חולצה": "shirt",
    "גופייה": "vest",
    "שמלה": "dress",
    "חצאית": "skirt",
    "מעיל": "coat",
    "מטפחת": "headscarf",
    "צמיד": "bracelet",
    "שעון יד": "wristwatch",
    "עגיל": "earring",
    "צמיד": "bracelet",
    "עגיליים": "earrings",
    "צמידיים": "bracelets"
}

 
const UPPER1 = {
    
        "אֶי": "A",
        "בי": "B",
        "סי": "C",
        "די": "D",
        "אִי": "E",
        "אף": "F",
        "גִ'י": "G",
        "אייץ": "H",
        "גֶ'יי": "J",
        "קיי": "K",
        "אל": "L",
        "אם": "M",   
        "אן": "N",
        "או": "O",
        "פי": "P",
        "קיו": "Q",
        "אר": "R",
        "אס": "S",
        "טי": "T",
        "יו": "U",
        "וי": "V",
        "דבליו": "W",
        "אקס": "X",
        "וויי": "Y",
        "זד": "Z"
      }
  
const LOWER1 ={
    
        "איי קטנה": "a",
        "בי קטנה": "b",
        "סי קטנה": "c",
        "די קטנה": "d",
        "אי קטנה": "e",
        "אף קטנה": "f",
        "ג'י קטנה": "g",
        "אייץ קטנה": "h",
        "ג'יי קטנה": "j",
        "קיי קטנה": "k",
        "אל קטנה": "l",
        "אם קטנה": "m",
       
      }

const LOWER2 ={
  
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
    "זד קטנה": "z"
}

const DD =Object.assign({}, UPPER1)

    
export {
    DD
}