import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipesComponent } from './view/recipes/recipes.component';

const routes: Routes = [
  { path: '', component: RecipesComponent, pathMatch: 'full' },
  { path: 'details/:id', component: RecipeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
