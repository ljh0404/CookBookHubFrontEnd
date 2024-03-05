import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() { }

  private recipeId = signal<number>(undefined!);

  setRecipeId(idRecipe: number){
    this.recipeId.set(idRecipe);
  }
  getRecipeId(){
    return this.recipeId();
  }
}
