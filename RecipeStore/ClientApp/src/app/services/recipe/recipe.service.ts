import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../infrastructure/model/recipe/recipe';
import { Newrecipe, Item } from '../../infrastructure/view-model/recipe/newrecipe';

@Injectable()
export class RecipeService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {
  }

  getRecipes() {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + 'api/recipe').subscribe(response => {
        resolve((response as any).data);
      }, error => {
        reject(error);
      });
    });
  }

  saveRecipe(recipe: Recipe) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + 'api/recipe', recipe)
        .subscribe(response => {
          resolve((response as any).data);
        }, error => {
          reject(error);
        });
    });
  }

}
