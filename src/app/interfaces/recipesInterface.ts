export interface RecipeRootObject {
    number:       number;
    offset:       number;
    results:      Result[];
    totalResults: number;
   }
   
   export interface Result {
    aggregateLikes:           number;
    analyzedInstructions:     AnalyzedInstruction[];
    author?:                  Author;
    cheap:                    boolean;
    cookingMinutes:           number;
    creditsText:              Author;
    cuisines:                 string[];
    dairyFree:                boolean;
    diets:                    Diet[];
    dishTypes:                DishType[];
    extendedIngredients:      EdIngredient[];
    gaps:                     Gaps;
    glutenFree:               boolean;
    healthScore:              number;
    id:                       number;
    image:                    string;
    imageType:                ImageType;
    license?:                 License;
    likes:                    number;
    lowFodmap:                boolean;
    missedIngredientCount:    number;
    missedIngredients:        EdIngredient[];
    nutrition:                Nutrition;
    occasions:                string[];
    preparationMinutes:       number;
    pricePerServing:          number;
    readyInMinutes:           number;
    servings:                 number;
    sourceName:               SourceName;
    sourceUrl:                string;
    spoonacularScore:         number;
    spoonacularSourceUrl:     string;
    summary:                  string;
    sustainable:              boolean;
    title:                    string;
    unusedIngredients:        any[];
    usedIngredientCount:      number;
    usedIngredients:          any[];
    vegan:                    boolean;
    vegetarian:               boolean;
    veryHealthy:              boolean;
    veryPopular:              boolean;
    weightWatcherSmartPoints: number;
   }
   
   export interface AnalyzedInstruction {
    name:  string;
    steps: Step[];
   }
   
   export interface Step {
    equipment:   Ent[];
    ingredients: Ent[];
    length?:     Length;
    number:      number;
    step:        string;
   }
   
   export interface Ent {
    id:            number;
    image:         string;
    localizedName: string;
    name:          string;
    temperature?:  Length;
   }
   
   export interface Length {
    number: number;
    unit:   LengthUnit;
   }
   
   export enum LengthUnit {
    Celsius = "Celsius",
    Fahrenheit = "Fahrenheit",
    Minutes = "minutes",
   }
   
   export enum Author {
    Afrolems = "Afrolems",
    FoodistaCOMTheCookingEncyclopediaEveryoneCanEdit = "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    JenWest = "Jen West",
    Maplewoodroad = "maplewoodroad",
   }
   
   export enum Diet {
    DairyFree = "dairy free",
    FodmapFriendly = "fodmap friendly",
    GlutenFree = "gluten free",
    LactoOvoVegetarian = "lacto ovo vegetarian",
    Paleolithic = "paleolithic",
    Primal = "primal",
    Vegan = "vegan",
    Whole30 = "whole 30",
   }
   
   export enum DishType {
    Breakfast = "breakfast",
    Brunch = "brunch",
    Dessert = "dessert",
    MorningMeal = "morning meal",
   }
   
   export interface EdIngredient {
    aisle:         Aisle;
    amount:        number;
    consistency?:  Consistency;
    extendedName?: string;
    id:            number;
    image:         null | string;
    measures?:     Measures;
    meta:          string[];
    name:          string;
    nameClean?:    null | string;
    original:      string;
    originalName:  string;
    unit:          string;
    unitLong?:     UnitLong;
    unitShort?:    UnitShortEnum;
   }
   
   export enum Aisle {
    AlcoholicBeverages = "Alcoholic Beverages",
    BakeryBread = "Bakery/Bread",
    Baking = "Baking",
    Beverages = "Beverages",
    Bread = "Bread",
    CannedAndJarred = "Canned and Jarred",
    Cereal = "Cereal",
    Cheese = "Cheese",
    Condiments = "Condiments",
    DriedFruits = "Dried Fruits",
    Empty = "?",
    Ethnic = "Ethnic",
    EthnicFoods = "Ethnic Foods",
    Frozen = "Frozen",
    GlutenFree = "Gluten Free",
    Gourmet = "Gourmet",
    HealthFoods = "Health Foods",
    MilkEggsOtherDairy = "Milk, Eggs, Other Dairy",
    NutButtersJamsAndHoney = "Nut butters, Jams, and Honey",
    Nuts = "Nuts",
    OilVinegarSaladDressing = "Oil, Vinegar, Salad Dressing",
    PastaAndRice = "Pasta and Rice",
    Produce = "Produce",
    SavorySnacks = "Savory Snacks",
    SpicesAndSeasonings = "Spices and Seasonings",
    SweetSnacks = "Sweet Snacks",
    TeaAndCoffee = "Tea and Coffee",
   }
   
   export enum Consistency {
    Liquid = "LIQUID",
    Solid = "SOLID",
   }
   
   export interface Measures {
    metric: Metric;
    us:     Metric;
   }
   
   export interface Metric {
    amount:    number;
    unitLong:  UnitLong;
    unitShort: UnitShortEnum;
   }
   
   export enum UnitLong {
    Box = "box",
    Boxes = "boxes",
    C = "C",
    CS = "Cs",
    Can = "can",
    Container = "container",
    Cup = "cup",
    Cups = "cups",
    Dash = "Dash",
    Drops = "drops",
    Empty = "",
    ExtraLarges = "extra larges",
    FLOzs = "fl. ozs",
    Grams = "grams",
    Grs = "grs",
    Jumbos = "jumbos",
    Kgs = "kgs",
    Large = "large",
    LargeContainer = "large container",
    Larges = "larges",
    Mediums = "mediums",
    Milliliters = "milliliters",
    Ounces = "ounces",
    Package = "package",
    Pinch = "pinch",
    Pinches = "pinches",
    Pound = "pound",
    Pounds = "pounds",
    Servings = "servings",
    Slice = "slice",
    Slices = "slices",
    Small = "small",
    SmallCan = "small can",
    Smalls = "smalls",
    Square = "square",
    Stick = "stick",
    Sticks = "sticks",
    TB = "tb",
    Tablespoon = "tablespoon",
    Tablespoons = "tablespoons",
    Tbs = "Tbs",
    Tbsp = "Tbsp",
    Tbsps = "Tbsps",
    Teaspoon = "teaspoon",
    Teaspoons = "teaspoons",
    Tsps = "Tsps",
    UnitLongStick = "Stick",
    UnitLongTB = "Tb",
   }
   
   export enum UnitShortEnum {
    Box = "box",
    Can = "can",
    Container = "container",
    Cup = "cup",
    Cups = "cups",
    Dash = "Dash",
    Drops = "drops",
    Empty = "",
    ExtraLarge = "extra large",
    FLOz = "fl. oz",
    G = "g",
    Gr = "gr",
    Jumbo = "jumbo",
    Kgs = "kgs",
    LB = "lb",
    Large = "large",
    LargeContainer = "large container",
    Medium = "medium",
    Ml = "ml",
    Oz = "oz",
    Pinch = "pinch",
    Pinches = "pinches",
    Pkg = "pkg",
    Servings = "servings",
    Slice = "slice",
    Small = "small",
    SmallCan = "small can",
    Square = "square",
    Stick = "stick",
    Sticks = "sticks",
    TSP = "tsp",
    Tbs = "tbs",
    Tbsp = "Tbsp",
    Tbsps = "Tbsps",
    Tsps = "tsps",
    UnitStick = "Stick",
    UnitTbs = "Tbs",
   }
   
   export enum Gaps {
    No = "no",
   }
   
   export enum ImageType {
    JPEG = "jpeg",
    Jpg = "jpg",
   }
   
   export enum License {
    CcBy30 = "CC BY 3.0",
    CcBy40 = "CC BY 4.0",
    SpoonacularSTerms = "spoonacular's terms",
   }
   
   export interface Nutrition {
    caloricBreakdown: CaloricBreakdown;
    flavonoids:       Flavonoid[];
    ingredients:      Ingredient[];
    nutrients:        Flavonoid[];
    properties:       Flavonoid[];
    weightPerServing: WeightPerServing;
   }
   
   export interface CaloricBreakdown {
    percentCarbs:   number;
    percentFat:     number;
    percentProtein: number;
   }
   
   export interface Flavonoid {
    amount:               number;
    name:                 Name;
    percentOfDailyNeeds?: number;
    unit:                 FlavonoidUnit;
   }
   
   export enum Name {
    Alcohol = "Alcohol",
    Apigenin = "Apigenin",
    Caffeine = "Caffeine",
    Calcium = "Calcium",
    Calories = "Calories",
    Carbohydrates = "Carbohydrates",
    Catechin = "Catechin",
    Cholesterol = "Cholesterol",
    Choline = "Choline",
    Copper = "Copper",
    Cyanidin = "Cyanidin",
    Delphinidin = "Delphinidin",
    Epicatechin = "Epicatechin",
    Epicatechin3Gallate = "Epicatechin 3-gallate",
    Epigallocatechin = "Epigallocatechin",
    Epigallocatechin3Gallate = "Epigallocatechin 3-gallate",
    Eriodictyol = "Eriodictyol",
    Fat = "Fat",
    Fiber = "Fiber",
    Fluoride = "Fluoride",
    Folate = "Folate",
    FolicAcid = "Folic Acid",
    Gallocatechin = "Gallocatechin",
    GlycemicIndex = "Glycemic Index",
    GlycemicLoad = "Glycemic Load",
    Hesperetin = "Hesperetin",
    InflammationScore = "Inflammation Score",
    Iron = "Iron",
    Isorhamnetin = "Isorhamnetin",
    Kaempferol = "Kaempferol",
    Luteolin = "Luteolin",
    Lycopene = "Lycopene",
    Magnesium = "Magnesium",
    Malvidin = "Malvidin",
    Manganese = "Manganese",
    MonoUnsaturatedFat = "Mono Unsaturated Fat",
    Myricetin = "Myricetin",
    NameTheaflavin3Gallate = "Theaflavin-3-gallate",
    Naringenin = "Naringenin",
    NetCarbohydrates = "Net Carbohydrates",
    NutritionScore = "Nutrition Score",
    Pelargonidin = "Pelargonidin",
    Peonidin = "Peonidin",
    Petunidin = "Petunidin",
    Phosphorus = "Phosphorus",
    PolyUnsaturatedFat = "Poly Unsaturated Fat",
    Potassium = "Potassium",
    Protein = "Protein",
    Quercetin = "Quercetin",
    SaturatedFat = "Saturated Fat",
    Selenium = "Selenium",
    Sodium = "Sodium",
    Sugar = "Sugar",
    SugarAlcohol = "Sugar Alcohol",
    Theaflavin = "Theaflavin",
    Theaflavin33Digallate = "Theaflavin-3,3'-digallate",
    Theaflavin3Gallate = "Theaflavin-3'-gallate",
    Thearubigins = "Thearubigins",
    TransFat = "Trans Fat",
    VitaminA = "Vitamin A",
    VitaminB1 = "Vitamin B1",
    VitaminB12 = "Vitamin B12",
    VitaminB2 = "Vitamin B2",
    VitaminB3 = "Vitamin B3",
    VitaminB5 = "Vitamin B5",
    VitaminB6 = "Vitamin B6",
    VitaminC = "Vitamin C",
    VitaminD = "Vitamin D",
    VitaminE = "Vitamin E",
    VitaminK = "Vitamin K",
    Zinc = "Zinc",
   }
   
   export enum FlavonoidUnit {
    Empty = "",
    G = "g",
    Iu = "IU",
    Kcal = "kcal",
    Mg = "mg",
    Unit = "%",
    Μg = "µg",
   }
   
   export interface Ingredient {
    amount:    number;
    id:        number;
    name:      string;
    nutrients: Flavonoid[];
    unit:      string;
   }
   
   export interface WeightPerServing {
    amount: number;
    unit:   UnitShortEnum;
   }
   
   export enum SourceName {
    Afrolems = "Afrolems",
    Foodista = "Foodista",
    MaplewoodRoad = "Maplewood Road",
    PinkWhen = "Pink When",
   }
   