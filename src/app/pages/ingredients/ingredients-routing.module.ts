import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './view/ingredients/ingredients.component';

const routes: Routes = [
  { path: '', component: IngredientsComponent, pathMatch: 'full' },
  { path: 'details/:id', component: IngredientsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientsRoutingModule {}
