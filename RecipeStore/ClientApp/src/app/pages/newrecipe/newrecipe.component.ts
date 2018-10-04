import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient/ingredient.service';
import { Ingredient } from '../../infrastructure/model/ingredient/ingredient';
import { Recipe } from '../../infrastructure/model/recipe/recipe';
import { RecipeItem } from '../../infrastructure/model/recipe/recipe-item';
import { RecipeService } from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-newrecipe',
  templateUrl: './newrecipe.component.html',
  styleUrls: ['./newrecipe.component.css']
})
export class NewrecipeComponent implements OnInit {
  measures: Array<number>;
  ingredients: Array<Ingredient>;
  recipe = new Recipe();
  recipies: Array<Recipe>;

  constructor(
    private ingredientService: IngredientService,
    private recipeService: RecipeService
  ) {
    this.measures = Array(6).fill(6).map((x, i) => i);
    this.getRecipies();

    ingredientService.getIngredients().then(data => {
      this.ingredients = data as Array<Ingredient>;
    });

    this.addOneMoreItem();
  }

  getRecipies() {
    this.recipeService.getRecipes().then(data => {
      this.recipies = data as Array<Recipe>;
    });
  }

  edit(item: Recipe) {
    this.recipe = item;
  }

  delete(item: Recipe) {

  }

  submit() {
    this.recipeService.saveRecipe(this.recipe).then(data => {
      console.log(data);
    });
  }

  addOneMoreItem() {
    this.recipe.ingredients.push(new RecipeItem());
  }

  ngOnInit() {
  }

}
