import { Component, OnInit } from '@angular/core';
import { IRecipes } from 'src/app/model/recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesComponent implements OnInit {
  message = '';

  recipes?: IRecipes[];

  constructor(private service: RecipesService) {}

  ngOnInit(): void {
    this.service.getRecipes().subscribe({
      next: (res) => {
        if (res.body) this.recipes = res.body;
      },
      error: () => {
        this.message = 'Brak przepisów';
      },
    });
  }
}
