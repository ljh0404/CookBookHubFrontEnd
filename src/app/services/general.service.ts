import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecipeImg, RecipeRootObject, Result } from '../interfaces/recipesInterface';
import { Observable } from 'rxjs';
import { IngredientRootObject } from '../interfaces/ingredientInterface';
import { SearchAllRootObject } from '../interfaces/searchAllInterface';
import { RecipeInfRootObject } from '../interfaces/recipeInformationInterface';
import { RecipeStepsRootObject } from '../interfaces/recipeStepsInterface';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private api_key = 'e0151aec3f064970a70b23c31a44533a';

  constructor(private http: HttpClient) { }

  // metodo valido 
  getDataonComplexSearch(query:string){
    return this.http.get<RecipeRootObject>('https://api.spoonacular.com/recipes/complexSearch?apiKey=e0151aec3f064970a70b23c31a44533a&number=20'+query)
  }
  // text complexSearch
  getDataonComplexSearchTest(): Observable<RecipeRootObject> {
    return this.http.get<RecipeRootObject>('assets/dbSet.json');
  }


  getDataTest(){
    return this.http.get<RecipeRootObject>('https://api.spoonacular.com/recipes/complexSearch?query=pasta&offset=10&number=10&apiKey=e0151aec3f064970a70b23c31a44533a')
  }

  getRecipeInformation(id: number){
    return this.http.get<RecipeInfRootObject>(`https://api.spoonacular.com/recipes/${id}/information?apiKey=e0151aec3f064970a70b23c31a44533a&includeNutrition=true`)
  }
  getRecipeSteps(id: number){
    return this.http.get<RecipeStepsRootObject>(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=e0151aec3f064970a70b23c31a44533a`)
  }

  getRecipeImg(id: number){
    return this.http.get<RecipeImg>(`https://api.spoonacular.com/recipes/${id}/card?apiKey=e0151aec3f064970a70b23c31a44533a`)
  }



  getSearchAllJsonData(): Observable<SearchAllRootObject> {
    return this.http.get<SearchAllRootObject>('assets/dbSetSearchAll.json');
  }

  getSearchAll(stringQuery: string): Observable<SearchAllRootObject>{
    return this.http.get<SearchAllRootObject>('https://api.spoonacular.com/food/search?apiKey=e0151aec3f064970a70b23c31a44533a'+stringQuery);
  }

  private result_details = signal<Result>(undefined!)

  setResult_Details(result: Result){
    this.result_details.set(result);
  }

  getResult_Details(){
    return this.result_details();
  }

  private recipe_information = signal<RecipeInfRootObject>(undefined!);

  setRecipeInformationP(recipeInf: RecipeInfRootObject){
    this.recipe_information.set(recipeInf);
  }

  getRecipeInformationP(){
    return this.recipe_information();
  }

  private recipe_steps = signal<RecipeStepsRootObject>(undefined!);

  setRecipeStepsP(recipeSteps: RecipeStepsRootObject){
    this.recipe_steps.set(recipeSteps);
  }

  getRecipeStepsP(){
    return this.recipe_steps();
  }
}
