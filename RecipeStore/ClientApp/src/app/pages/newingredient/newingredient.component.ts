import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../infrastructure/model/ingredient/ingredient';
import { IngredientService } from '../../services/ingredient/ingredient.service';

@Component({
  selector: 'app-newingredient',
  templateUrl: './newingredient.component.html',
  styleUrls: ['./newingredient.component.css']
})
export class NewingredientComponent implements OnInit {
  ingredient = new Ingredient();
  ingredients: Array<Ingredient>;
  submitted: boolean;

  constructor(
    private ingredientService: IngredientService
  ) {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredientService.getIngredients().then(data => {
      this.ingredients = data as Array<Ingredient>;
    });
  }

  ngOnInit() {
  }

  edit(item: Ingredient) {
    this.ingredient = item;
  }

  delete(item: Ingredient) {
    this.ingredientService.deleteIngredient(item).then(data => {
      this.getIngredients();
    });
  }

  submit(myForm) {
    if (myForm.valid) {
      this.ingredientService.saveIngredient(this.ingredient).then(data => {
        this.ingredient = new Ingredient();
        this.getIngredients();
        this.submitted = false;
      });
    }
    this.submitted = true;
  }

}
