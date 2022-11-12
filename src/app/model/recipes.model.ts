import { IIngredients } from './ingredients.model';

export interface IRecipes {
  id?: number;
  name?: string;
  description?: string;
  difficult?: number;
  time?: number;
  ingredientList?: IIngredients[];
  image?: string;
}
