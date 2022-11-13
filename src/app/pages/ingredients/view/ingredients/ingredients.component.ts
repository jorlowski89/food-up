import { Component, OnInit } from '@angular/core';
import { IIngredients } from 'src/app/model/ingredients.model';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit {
  message = '';

  ingredients?: IIngredients[];

  constructor(private service: IngredientsService) {}

  ngOnInit(): void {
    this.service.getIngredients().subscribe({
      next: (res) => {
        if (res.body) this.ingredients = res.body;
      },
      error: () => {
        this.message = 'Brak przepisów';
      },
    });
  }
}
