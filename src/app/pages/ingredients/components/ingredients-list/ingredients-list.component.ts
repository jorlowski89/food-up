import { Component, Input, OnInit } from '@angular/core';
import { IIngredients } from 'src/app/model/ingredients.model';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss'],
})
export class IngredientsListComponent implements OnInit {
  @Input() ingredients: IIngredients[] = [];
  constructor() {}

  ngOnInit(): void {}
}
