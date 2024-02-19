export interface IngredientRootObject {
    number:       number;
    offset:       number;
    results:      Result[];
    totalResults: number;
   }
   
   export interface Result {
    aisle:         string;
    children:      Child[];
    id:            number;
    image:         string;
    name:          string;
    possibleUnits: string[];
   }
   
   export interface Child {
    id:   number;
    name: string;
   }
   