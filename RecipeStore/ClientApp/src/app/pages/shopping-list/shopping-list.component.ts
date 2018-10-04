import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Recipe } from '../../infrastructure/model/recipe/recipe';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  recipe: Recipe;
  constructor(
    private cartService: CartService
  ) {
    cartService.getCartSuggestion().then(data => {
      this.recipe = data as Recipe;
      this.recipe.title = 'Shopping List';
      this.recipe.ingredients = (data as any).shoppingCartItems;
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
