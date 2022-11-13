import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IIngredients } from 'src/app/model/ingredients.model';
import { IRecipes } from 'src/app/model/recipes.model';
import { RecipesService } from '../../view/recipes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipeId?: string | null;
  recipe?: IRecipes;
  max = 5;
  constructor(
    private route: ActivatedRoute,
    private service: RecipesService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.service
      .getRecipeDetail(this.route.snapshot.paramMap.get('id'))
      .subscribe((res) => {
        if (!res.body) return;
        this.recipe = res.body;
      });
  }

  convertTime(time?: number): string {
    if (time) {
      return `${Math.floor(time / 60).toString()}:${
        time % 60 < 10 ? '0' + (time % 60) : time % 60
      }`;
    } else return '';
  }

  getPrice(entry?: IIngredients[]): number {
    let result = 0;
    entry?.map((val) => {
      result += val.price;
    });
    return result;
  }

  //TODO navigate to previous element
  back(): void {
    this._location.back();
  }
}
