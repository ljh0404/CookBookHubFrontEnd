export interface RecipeRootObject {
    number:       number;
    offset:       number;
    results:      Result[];
    totalResults: number;
   }
   
   export interface Result {
    aggregateLikes:           number;
    analyzedInstructions:     AnalyzedInstruction[];
    author?:                  string;
    cheap:                    boolean;
    cookingMinutes:           number;
    creditsText:              string;
    cuisines:                 string[];
    dairyFree:                boolean;
    diets:                    string[];
    dishTypes:                string[];
    gaps:                     Gaps;
    glutenFree:               boolean;
    healthScore:              number;
    id:                       number;
    image:                    string;
    imageType:                ImageType;
    license?:                 string;
    lowFodmap:                boolean;
    occasions:                any[];
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
   }
   
   export interface AnalyzedInstruction {
    name:  Name;
    steps: Step[];
   }
   
   export enum Name {
    Empty = "",
    ForTheChickenWingDrummettes = "For the Chicken Wing Drummettes",
    ServeHotOrWarmToPrepareRanchDIP = "Serve hot or warm.To prepare \"Ranch\" Dip",
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
    unit:   Unit;
   }
   
   export enum Unit {
    Fahrenheit = "Fahrenheit",
    Minutes = "minutes",
   }
   
   export enum Gaps {
    No = "no",
   }
   
   export enum ImageType {
    Jpg = "jpg",
   }
   
   export interface RecipeImg {
    status: string;
    time:   string;
    url:    string;
   }
   