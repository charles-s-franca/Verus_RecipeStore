import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../../infrastructure/model/ingredient/ingredient';

@Injectable()
export class IngredientService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {
  }

  getIngredients() {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + 'api/ingredient').subscribe(response => {
        resolve((response as any).data);
      }, error => {
        reject(error);
      });
    });
  }

  saveIngredient(ingredient: Ingredient) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + 'api/ingredient', ingredient)
        .subscribe(response => {
          resolve((response as any).data);
        }, error => {
          reject(error);
        });
    });
  }

}
