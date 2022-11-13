import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ngx-bootstrap/rating';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './view/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { FormsModule } from '@angular/forms';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipeCardComponent,
    RecipeDetailsComponent,
  ],
  imports: [CommonModule, RecipesRoutingModule, RatingModule, FormsModule],
})
export class RecipesModule {}
