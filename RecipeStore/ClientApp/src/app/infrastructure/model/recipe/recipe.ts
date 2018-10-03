import { RecipeItem } from "./recipe-item";

export interface Recipe {
  id: string;
  title: string;
  ingredients: Array<RecipeItem>;
}
