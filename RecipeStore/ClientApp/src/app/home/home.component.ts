import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(
    private recipeService: RecipeService
  ) {
    recipeService.getRecipes().then(data => {
      console.log(data);
    })
  }
}
