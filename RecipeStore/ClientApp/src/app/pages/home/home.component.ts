import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe/recipe.service';
import { Recipe } from '../../infrastructure/model/recipe/recipe';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  recipe: Recipe;
  recipes: Array<Recipe>;

  constructor(
    private recipeService: RecipeService,
    private cartService: CartService
  ) {
    this.geSuggestion();

    recipeService.getRecipes().then(data => {
      this.recipes = data as Array<Recipe>;
      console.log('recipe', this.recipes);
    });
  }

  geSuggestion() {
    this.cartService.getCartSuggestion().then(data => {
      this.recipe = data as Recipe;
      this.recipe.title = 'Shopping List';
      this.recipe.ingredients = (data as any).shoppingCartItems;
    });
  }

  adItemToCart(item) {
    this.cartService.addRecipe(item);
  }

  removeItemToCart(item) {
    this.cartService.removeFromRecipes(item);
  }

  addRemoveItem(item) {
    if (!this.cartService.isInRecipeList(item)) {
      this.adItemToCart(item);
    } else {
      this.removeItemToCart(item);
    }

    this.geSuggestion();
  }

  isItemInCart(item) {
    return this.cartService.isInRecipeList(item);
  }
}
