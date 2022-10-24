import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './view/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
