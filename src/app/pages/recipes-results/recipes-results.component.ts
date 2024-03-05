import { Component } from '@angular/core';
import { RecipeRootObject, Result } from 'src/app/interfaces/recipesInterface';
import { GeneralService } from 'src/app/services/general.service';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';
import { PersistenceService } from 'src/app/services/persistence.service';

@Component({
  selector: 'app-recipes-results',
  templateUrl: './recipes-results.component.html',
  styleUrls: ['./recipes-results.component.css']
})
export class RecipesResultsComponent {
  jsonData!: RecipeRootObject;
  stringQuery!: string; 
  lastPage!: number;
  pageSelected!: number;

  constructor(private generalService: GeneralService, private router: Router, private activateRoute: ActivatedRoute, private persistenceService: PersistenceService){}

  ngOnInit(){
    this.activateRoute.queryParams.subscribe(params => {
      const q = params['q'];
      const minCal = params['minCal'];
      const maxCal = params['maxCal'];
      const minProtein = params['minProtein'];
      const maxProtein = params['maxProtein'];
      const minFat = params['minFat'];
      const maxFat = params['maxFat'];
      const minCarbs = params['minCarbs'];
      const maxCarbs = params['maxCarbs'];
      const cuisineSelected = params['cuisineSelected'];
      const cuisineExcluded = params['cuisineExcluded'];
      const dietSelected = params['dietSelected'];
      const intoleranceSelected = params['intoleranceSelected'];
      const typeSelected = params['typeSelected'];
      const maxReadyTime = params['maxReadyTime'];
      const includedIngredients = params['includedIngredients'];
      const excludedIngredients = params['excludedIngredients'];

      this.stringQuery = '&number=20&addRecipeInformation=true&q='+q+'&minCal='+minCal+'&maxCal='+maxCal+'&minProtein='+minProtein+'&maxProtein='+maxProtein
                        +'&minFat='+minFat+'&maxFat='+maxFat+'&minCarbs='+minCarbs+'&maxCarbs='+maxCarbs

      if (cuisineSelected != undefined)
        this.stringQuery = this.stringQuery + '&cuisineSelected='+cuisineSelected;
      if (cuisineExcluded != undefined)
        this.stringQuery = this.stringQuery + '&cuisineExcluded='+cuisineExcluded;
      if (dietSelected != undefined)
        this.stringQuery = this.stringQuery + '&dietSelected='+dietSelected;
      if (intoleranceSelected != undefined)
        this.stringQuery = this.stringQuery + '&intoleranceSelected='+intoleranceSelected;
      if (typeSelected != undefined)
        this.stringQuery = this.stringQuery + '&typeSelected='+typeSelected;
      if (maxReadyTime != undefined)
        this.stringQuery = this.stringQuery + '&maxReadyTime='+maxReadyTime;
      if (includedIngredients != undefined)
        this.stringQuery = this.stringQuery + '&includedIngredients='+includedIngredients;
      if (excludedIngredients != undefined)
        this.stringQuery = this.stringQuery + '&excludedIngredients='+excludedIngredients;

      // query
      // this.generalService.getDataonComplexSearch(this.stringQuery).subscribe((data)=> {
      //   this.jsonData = data;
      //   this.pageSelected = 1;
      //   this.lastPage = Math.ceil(this.jsonData.totalResults / 10);
      // })

      // test
      this.generalService.getDataonComplexSearchTest().subscribe((data)=> {
        this.jsonData = data;
        this.pageSelected = 1;
        this.lastPage = Math.ceil(this.jsonData.totalResults / 10);
      })


      // this.recipeId = params['recipeId'];
      // this.generalService.getRecipeInformation(this.recipeId).subscribe(data => {
      //   this.recipeInformation = data;
      //   localStorage.setItem('recipeInformation', JSON.stringify(this.recipeInformation));
      // })
      // this.generalService.getRecipeSteps(this.recipeId).subscribe((data:any) => {
      //   this.recipeSteps = data[0];
      //   localStorage.setItem('recipeSteps', JSON.stringify(this.recipeSteps));
      // })
    })
  }

  onClickDetails(result: Result){
    this.persistenceService.setRecipeId(result.id)
    this.router.navigate(['/recipe-details'], { queryParams: { recipeId: result.id }});
    this.generalService.setResult_Details(result);
  }

  receiveMessageFromChild(page: number) {
    this.pageSelected = page;
    const skip: number = page * 20 - 20
    const newStringQuery = this.stringQuery + '&offset='+skip
    // this.persistenceService.setInitialNumberPage(this.pageSelected);
    // this.isLoading = true
    // this.generalService.obtenerDatos(page).subscribe((data) => {
    //   this.plantList = data;
    //   this.isLoading = false;
    //   this.persistenceService.setInitialPage(this.plantList);
    // });
    this.generalService.getDataonComplexSearch(newStringQuery).subscribe((data)=> {
      this.jsonData = data;
    })
  }
}
