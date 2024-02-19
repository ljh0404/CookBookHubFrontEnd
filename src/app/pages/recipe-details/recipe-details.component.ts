import { Component } from '@angular/core';
import { Result } from 'src/app/interfaces/recipesInterface';
import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {

  result!: Result;

  constructor(private generalService: GeneralService, private router: Router){}

  ngOnInit(){
    this.result = this.generalService.getResult_Details();
    if (this.result){
      const jsonString = JSON.stringify(this.result);
      // Guardar la cadena JSON en el almacenamiento local
      localStorage.setItem('response', jsonString);
      console.log(this.result);
    }
    else{
      const storedJsonString = localStorage.getItem('response');
      // Convertir la cadena JSON de vuelta a un objeto JavaScript
      this.result = JSON.parse(storedJsonString!);
      // Ahora, this.storedResponse contiene el objeto JavaScript recuperado del almacenamiento local
      console.log(this.result);
    }
  }



  ngOnDestroy(){
    this.generalService.setResult_Details(undefined!);
  }
}
