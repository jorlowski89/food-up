import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IRecipes } from 'src/app/model/recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  url = 'http://localhost:3000/recipes';
  constructor(private http: HttpClient) {}

  getRecipes(): Observable<HttpResponse<IRecipes[]>> {
    return this.http.get<IRecipes[]>(this.url, {
      observe: 'response',
    });
  }
}
