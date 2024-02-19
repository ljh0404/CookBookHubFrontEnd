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
  dietOptions: string[] = ["gluten free", "ketogenic", "vegetarian", "lacto-vegetarian", "ovo-vegetarian", "vegan", "pescetarian", "paleo", "primal", "low fodmap", "whole30", "fruitarian"];
  intoleranceOptions: string[] = ["dairy", "egg", "gluten", "grain", "peanut", "seafood", "sesame", "shellfish", "soy", "sulfite", "tree nut", "wheat"];
  typeOptions: string[] = ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "marinade", "fingerfood", "snack", "drink"];

  constructor(private generalSevice: GeneralService, private router: Router){}

  ngOnInit(){
    // this.generalSevice.getDataTest().subscribe((data) => {
    //   console.log(data);
    // })
    this.generalSevice.getJsonData().subscribe(data => {
      this.jsonData = data;
      console.log(data);
    });
  }

  clickSearch(){
    this.router.navigate(['/result-recipe-page']);
  }
}
