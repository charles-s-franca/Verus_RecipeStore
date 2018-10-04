import { RecipeItem } from './recipe-item';

export class Recipe {
  id: string;
  title: string;
  ingredients: Array<RecipeItem>;

  constructor() {
    this.ingredients = new Array<RecipeItem>();
  }
}
