import { Component } from '@angular/core';
import { Result } from 'src/app/interfaces/recipesInterface';
import { GeneralService } from 'src/app/services/general.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import { RecipeInfRootObject } from 'src/app/interfaces/recipeInformationInterface';
import { RecipeStepsRootObject, Step } from 'src/app/interfaces/recipeStepsInterface';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {

  recipeId!: number;
  recipeInformation!: RecipeInfRootObject;
  recipeSteps!: RecipeStepsRootObject;
  result!: Result;
  imageUrl = 'https://spoonacular.com/recipeCardImages/recipeCard-1708402569754.png';

  constructor(private generalService: GeneralService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit(){
    this.activateRoute.queryParams.subscribe(params => {
      this.recipeId = params['recipeId'];
      this.generalService.getRecipeInformation(this.recipeId).subscribe(data => {
        this.recipeInformation = data;
        localStorage.setItem('recipeInformation', JSON.stringify(this.recipeInformation));
      })
      this.generalService.getRecipeSteps(this.recipeId).subscribe((data:any) => {
        this.recipeSteps = data[0];
        localStorage.setItem('recipeSteps', JSON.stringify(this.recipeSteps));
      })
    })
  }

  downloadPdf() {
    this.generalService.getRecipeImg(this.recipeId).subscribe({
      next: (data) => {
        const doc = new jsPDF.default();
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = data.url;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx!.drawImage(img, 0, 0);
          const dataURL = canvas.toDataURL('image/png');
          doc.addImage(dataURL, 'PNG', 10, 10, 180, 150); 
          doc.save(this.recipeInformation.title + '.pdf');
        };
      },
      error: (err) => {
        console.error('Error al obtener la imagen de la receta:', err);
      }
    })
    // this.generalService.getRecipeImg(this.recipeId).subscribe((data) => {
    //   const doc = new jsPDF.default();
    //   const img = new Image();
    //   img.crossOrigin = 'Anonymous';
    //   img.src = data.url;
    //   img.onload = () => {
    //     const canvas = document.createElement('canvas');
    //     canvas.width = img.width;
    //     canvas.height = img.height;
    //     const ctx = canvas.getContext('2d');
    //     ctx!.drawImage(img, 0, 0);
    //     const dataURL = canvas.toDataURL('image/png');
    //     doc.addImage(dataURL, 'PNG', 10, 10, 180, 150); 
    //     doc.save(this.recipeInformation.title + '.pdf');
    //   };
    // },
    // (error) => {
    //   console.error('Error al obtener la imagen de la receta:', error);
    // })
  }

  ngOnDestroy(){
    this.generalService.setResult_Details(undefined!);
  }
}
