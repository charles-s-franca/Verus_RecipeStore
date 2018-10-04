import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeService } from './services/recipe/recipe.service';
import { RecipeCardComponent } from './shared/components/recipe-card/recipe-card.component';
import { MeasureDescriptionPipe } from './pipes/measure-description.pipe';
import { HomeComponent } from './pages/home/home.component';
import { NavMenuComponent } from './shared/components/nav-menu/nav-menu.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { NewrecipeComponent } from './pages/newrecipe/newrecipe.component';
import { NewingredientComponent } from './pages/newingredient/newingredient.component';
import { IngredientService } from './services/ingredient/ingredient.service';
import { CartService } from './services/cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    RecipeCardComponent,
    MeasureDescriptionPipe,
    IngredientComponent,
    ShoppingListComponent,
    NewrecipeComponent,
    NewingredientComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'newrecipe', component: NewrecipeComponent },
      { path: 'newingredient', component: NewingredientComponent },
      { path: 'cart-list', component: ShoppingListComponent }
    ])
  ],
  providers: [
    RecipeService,
    IngredientService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
