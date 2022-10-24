import { Component, Input, OnInit } from '@angular/core';
import { IRecipes } from 'src/app/model/recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  @Input() recipes!: IRecipes[];

  constructor() {}

  ngOnInit(): void {}
}
