import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://storage.needpix.com/rsynced_images/food-1459693_1280.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://storage.needpix.com/rsynced_images/food-1459693_1280.jpg')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}