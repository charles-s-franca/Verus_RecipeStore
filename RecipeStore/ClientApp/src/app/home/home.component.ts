import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe/recipe.service';
import { Recipe } from '../infrastructure/model/recipe/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  recipes: Array<Recipe>;

  constructor(
    private recipeService: RecipeService
  ) {
    recipeService.getRecipes().then(data => {
      this.recipes = data as Array<Recipe>;
      console.log("recipe", this.recipes);
    })
  }
}
