import { Component } from '@angular/core';
import { RecipeRootObject, Result } from 'src/app/interfaces/recipesInterface';
import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-results',
  templateUrl: './recipes-results.component.html',
  styleUrls: ['./recipes-results.component.css']
})
export class RecipesResultsComponent {
  jsonData!: RecipeRootObject;

  constructor(private generalService: GeneralService, private router: Router){}

  ngOnInit(){
    this.generalService.getJsonData().subscribe(data => {
      this.jsonData = data;
      console.log(this.jsonData);
    });
  }

  onClickDetails(result: Result){
    this.router.navigate(['/recipe-details']);
    this.generalService.setResult_Details(result);
  }
}
