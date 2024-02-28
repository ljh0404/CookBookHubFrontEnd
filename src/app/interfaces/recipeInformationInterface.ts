export interface RecipeInfRootObject {
    aggregateLikes:           number;
    analyzedInstructions:     any[];
    cheap:                    boolean;
    cookingMinutes:           number;
    creditsText:              string;
    cuisines:                 any[];
    dairyFree:                boolean;
    diets:                    any[];
    dishTypes:                string[];
    extendedIngredients:      ExtendedIngredient[];
    gaps:                     string;
    glutenFree:               boolean;
    healthScore:              number;
    id:                       number;
    image:                    string;
    imageType:                string;
    instructions:             string;
    license:                  string;
    lowFodmap:                boolean;
    nutrition:                Nutrition;
    occasions:                any[];
    originalId:               null;
    preparationMinutes:       number;
    pricePerServing:          number;
    readyInMinutes:           number;
    servings:                 number;
    sourceName:               string;
    sourceUrl:                string;
    spoonacularScore:         number;
    spoonacularSourceUrl:     string;
    summary:                  string;
    sustainable:              boolean;
    title:                    string;
    vegan:                    boolean;
    vegetarian:               boolean;
    veryHealthy:              boolean;
    veryPopular:              boolean;
    weightWatcherSmartPoints: number;
    winePairing:              WinePairing;
   }
   
   export interface ExtendedIngredient {
    aisle:        string;
    amount:       number;
    consistency:  Consistency;
    id:           number;
    image:        string;
    measures:     Measures;
    meta:         string[];
    name:         string;
    nameClean:    string;
    original:     string;
    originalName: string;
    unit:         string;
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
    unitLong:  string;
    unitShort: string;
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
    name:                 string;
    percentOfDailyNeeds?: number;
    unit:                 Unit;
   }
   
   export enum Unit {
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
    unit:   Unit;
   }
   
   export interface WinePairing {
    pairedWines:    any[];
    pairingText:    string;
    productMatches: any[];
   }
   