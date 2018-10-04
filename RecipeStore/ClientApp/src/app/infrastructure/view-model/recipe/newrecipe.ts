export class Newrecipe {
  title: string;
  ingredients: Array<Item>;
}

export class Item {
  ingredientId: string;
  measure: number;
  quantity: number;
}
