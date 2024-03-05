import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { RecipesResultsComponent } from './pages/recipes-results/recipes-results.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { SearchAllComponent } from './pages/search-all/search-all.component';
import { notFoundGuardGuard } from './guards/not-found-guard.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
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
    component: RecipeDetailsComponent,
    canActivate: [notFoundGuardGuard]
  },
  {
    path: 'search-all',
    component: SearchAllComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
