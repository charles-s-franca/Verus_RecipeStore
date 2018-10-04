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
  submitted: boolean;

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
    this.recipeService.deleteRecipe(item).then(data => {
      this.getRecipies();
    });
  }

  submit(myForm) {
    this.submitted = true;
    if (myForm.valid && this.recipe) {
      if (this.recipe.ingredients && this.recipe.ingredients.length === 0) {
        alert('You must add at least one ingredient');
        return;
      }

      const notValidIngredients = this.recipe.ingredients.filter(i => !i.quantity || !i.measure || !i.ingredientId);
      if (notValidIngredients.length > 0) {
        alert('All recipe items must have a quantity, a measure and an ingredient selected');
        return;
      }

      this.recipeService.saveRecipe(this.recipe).then(data => {
        this.getRecipies();
        this.recipe = new Recipe();
        this.submitted = false;
      });
    }
  }

  removeItem(i) {
    this.recipe.ingredients.splice(i, 1);
  }

  addOneMoreItem() {
    this.recipe.ingredients.push(new RecipeItem());
  }

  ngOnInit() {
  }

}
