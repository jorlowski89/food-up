import { Component, Input, OnInit } from '@angular/core';
import { IRecipes } from 'src/app/model/recipes.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe?: IRecipes;
  difficult = 5;
  max = 5;
  constructor() {}

  ngOnInit(): void {}

  convertTime(time?: number): string {
    if (time) {
      return `${Math.floor(time / 60).toString()}:${
        time % 60 < 10 ? '0' + (time % 60) : time % 60
      }`;
    } else return '';
  }

  getPrice(): number {
    return Number(Math.random()) * 10;
  }
}