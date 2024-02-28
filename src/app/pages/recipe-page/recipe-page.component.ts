import { Component } from '@angular/core';
import { RecipeRootObject } from 'src/app/interfaces/recipesInterface';
import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent {

  jsonData!: RecipeRootObject;
  cuisineOptions: string[] = ["african", "asian", "american", "british", "cajun", "caribbean", "chinese", "eastern european", "european", "french", "german", "greek", "indian", "irish", "italian", "japanese", "jewish", "korean", "latin american", "mediterranean", "mexican", "middle eastern", "nordic", "southern", "spanish", "thai", "vietnamese"];
  cuisineSelected!: string[];
  cuisineExcluded!: string[];
  dietOptions: string[] = ["gluten free", "ketogenic", "vegetarian", "lacto-vegetarian", "ovo-vegetarian", "vegan", "pescetarian", "paleo", "primal", "low fodmap", "whole30", "fruitarian"];
  dietSelected!: string[];
  intoleranceOptions: string[] = ["dairy", "egg", "gluten", "grain", "peanut", "seafood", "sesame", "shellfish", "soy", "sulfite", "tree nut", "wheat"];
  intoleranceSelected!: string[];
  typeOptions: string[] = ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "marinade", "fingerfood", "snack", "drink"];
  typeSelected!: string[];
  checked: boolean = false;
  rangeCaloriesValues: number[] = [36, 1243];
  rangeProteinValues: number[] = [0, 104];
  rangeFatValues: number[] = [0, 100];
  rangeCarbsValues: number[] = [0, 106];
  maxReadyTime!: number;
  includedIngredients: string[] | undefined;
  excludedIngredients: string[] | undefined;
  query!: string;

  constructor(private generalSevice: GeneralService, private router: Router){}

  ngOnInit(){
    // this.generalSevice.getDataTest().subscribe((data) => {
    //   console.log(data);
    // })
    // this.generalSevice.getJsonData().subscribe(data => {
    //   this.jsonData = data;
    //   console.log('Hola!')
    // });
  }

  clickSearch(){
    // cuisine selected
    let queryParams: any = {};
    queryParams['q'] = this.query; 
    queryParams['minCal'] = this.rangeCaloriesValues[0];
    queryParams['maxCal'] = this.rangeCaloriesValues[1];
    queryParams['minProtein'] = this.rangeProteinValues[0];
    queryParams['maxProtein'] = this.rangeProteinValues[1];
    queryParams['minFat'] = this.rangeFatValues[0];
    queryParams['maxFat'] = this.rangeFatValues[1];
    queryParams['minCarbs'] = this.rangeCarbsValues[0];
    queryParams['maxCarbs'] = this.rangeCarbsValues[1];

    if (this.cuisineSelected != undefined ){
      this.cuisineSelected = this.cuisineSelected.map(cadena => cadena.replace(/\s/g, "").toLowerCase());
      let cuisineSelected: string = this.cuisineSelected.join(",");
      queryParams['cuisineSelected'] = cuisineSelected;
    }

    // cuisine excluded
    if (this.cuisineExcluded != undefined ){
      this.cuisineExcluded = this.cuisineExcluded.map(cadena => cadena.replace(/\s/g, "").toLowerCase());
      let cuisineExcluded: string = this.cuisineExcluded.join(",");
      queryParams['cuisineExcluded'] = cuisineExcluded;
    }

    // diet Selected
    if (this.dietSelected != undefined ){
      this.dietSelected = this.dietSelected.map(cadena => cadena.replace(/\s/g, "").toLowerCase());
      let dietSelected: string = this.dietSelected.join(",");
      queryParams['dietSelected'] = dietSelected;
    }

    // intolerance selected
    if (this.intoleranceSelected != undefined ){
      this.intoleranceSelected = this.intoleranceSelected.map(cadena => cadena.replace(/\s/g, "").toLowerCase());
      let intoleranceSelected: string = this.intoleranceSelected.join(",");
      queryParams['intoleranceSelected'] = intoleranceSelected;
    }

    // type selected
    if (this.typeSelected != undefined ){
      this.typeSelected = this.typeSelected.map(cadena => cadena.replace(/\s/g, "").toLowerCase());
      let typeSelected: string = this.typeSelected.join(",");
      queryParams['typeSelected'] = typeSelected;
    }

    // max ready time   
    if (this.maxReadyTime != undefined){
      queryParams['maxReadyTime'] = this.maxReadyTime;
    }

    if (this.includedIngredients != undefined){
      this.includedIngredients = this.includedIngredients.map(cadena => cadena.replace(/\s/g, "").toLowerCase());
      let includedIngredients: string = this.includedIngredients.join(",");
      queryParams['includedIngredients'] = includedIngredients;
    }

    if (this.excludedIngredients != undefined){
      this.excludedIngredients = this.excludedIngredients.map(cadena => cadena.replace(/\s/g, "").toLowerCase());
      let excludedIngredients: string = this.excludedIngredients.join(",");
      queryParams['excludedIngredients'] = excludedIngredients;
    }

    this.router.navigate(['/result-recipe-page'], { queryParams });
  }
}
