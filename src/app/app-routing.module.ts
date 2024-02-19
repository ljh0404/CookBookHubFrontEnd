import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { RecipesResultsComponent } from './pages/recipes-results/recipes-results.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { SearchAllComponent } from './pages/search-all/search-all.component';

const routes: Routes = [
  {
    path: 'recipe-page',
    component: RecipePageComponent
  },
  {
    path: 'result-recipe-page',
    component: RecipesResultsComponent
  },
  {
    path: 'recipe-details',
    component: RecipeDetailsComponent
  },
  {
    path: 'search-all',
    component: SearchAllComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
