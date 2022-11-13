import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIngredients } from 'src/app/model/ingredients.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  url = 'http://localhost:3000/ingredients';
  constructor(private http: HttpClient) {}

  getIngredients(): Observable<HttpResponse<IIngredients[]>> {
    return this.http.get<IIngredients[]>(this.url, {
      observe: 'response',
    });
  }
}
