import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './view/ingredients/ingredients.component';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';


@NgModule({
  declarations: [
    IngredientsComponent,
    IngredientsListComponent
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule
  ]
})
export class IngredientsModule { }
