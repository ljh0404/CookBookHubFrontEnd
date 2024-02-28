export interface RecipeStepsRootObject {
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
    unit:   string;
   }
   