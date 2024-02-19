import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecipeRootObject, Result } from '../interfaces/recipesInterface';
import { Observable } from 'rxjs';
import { IngredientRootObject } from '../interfaces/ingredientInterface';
import { SearchAllRootObject } from '../interfaces/searchAllInterface';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private api_key = 'e0151aec3f064970a70b23c31a44533a';

  constructor(private http: HttpClient) { }

  getDataTest(){
    return this.http.get<RecipeRootObject>('https://api.spoonacular.com/recipes/complexSearch?query=pasta&offset=10&number=10&apiKey=e0151aec3f064970a70b23c31a44533a')
  }

  getJsonData(): Observable<RecipeRootObject> {
    return this.http.get<RecipeRootObject>('assets/dbSet.json');
  }

  getSearchAllJsonData(): Observable<SearchAllRootObject> {
    return this.http.get<SearchAllRootObject>('assets/dbSetSearchAll.json');
  }

  private result_details = signal<Result>(undefined!)

  setResult_Details(result: Result){
    this.result_details.set(result);
  }

  getResult_Details(){
    return this.result_details();
  }

}
