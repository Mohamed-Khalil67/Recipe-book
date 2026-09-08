import { Component, output } from '@angular/core';
import { RecipeItem } from "./recipe-item/recipe-item";
import { Recipe } from '../recipe.model';

@Component({
  imports: [RecipeItem],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.scss',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  recipeWasSelected = output<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe 1',
      'This is test 1 description for recipe',
      'assets/recipes-book.png'
    ),
    new Recipe(
      'Test recipe 2',
      'This is test 2 description for recipe',
      'assets/recipes-book.png'
    ),
    new Recipe(
      'Test recipe 3',
      'This is test 3 description for recipe',
      'assets/recipes-book.png'
    )
  ]

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
    console.log(recipe)
  }
}
