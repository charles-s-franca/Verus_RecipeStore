import { Injectable, Inject, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const recipe_storage_name = 'recipes';
@Injectable()
export class CartService {
  static onRecipeAdded = new EventEmitter();

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

  addRecipe(recipeId) {
    const recipes = localStorage.getItem(recipe_storage_name);
    let recipeList = [];
    if (recipes) {
      recipeList = JSON.parse(recipes);
      recipeList = recipeList.filter(r => r !== recipeId);
    }
    recipeList.push(recipeId);
    localStorage.setItem(recipe_storage_name, JSON.stringify(recipeList));
  }

  removeFromRecipes(recipeId) {
    const recipes = localStorage.getItem(recipe_storage_name);
    let recipeList = [];
    if (recipes) {
      recipeList = JSON.parse(recipes);
      recipeList = recipeList.filter(r => r !== recipeId);
      localStorage.setItem(recipe_storage_name, JSON.stringify(recipeList));
    }
  }

  isInRecipeList(recipeId) {
    const recipes = localStorage.getItem(recipe_storage_name);
    let recipeList = [];
    if (recipes) {
      recipeList = JSON.parse(recipes);
      recipeList = recipeList.filter(r => r === recipeId);
      return recipeList.length > 0;
    }
    return false;
  }

  getCartItems() {
    const recipes = localStorage.getItem(recipe_storage_name);
    let recipeList = [];
    if (recipes) {
      recipeList = JSON.parse(recipes);
    }
    return recipeList;
  }

  getCartSuggestion() {
    const cartItems = '?recipeIds=' + this.getCartItems().join('&recipeIds=');
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + 'api/cart/cart-suggestion' + cartItems).subscribe(response => {
        resolve((response as any).data);
      }, error => {
        reject(error);
      });
    });
  }

}
