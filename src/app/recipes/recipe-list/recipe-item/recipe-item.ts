import { Component, input, output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  imports: [],
  selector: 'app-recipe-item',
  styleUrl: './recipe-item.scss',
  templateUrl: './recipe-item.html',
})
export class RecipeItem {
  recipe = input.required<Recipe>();
  recipeSelected = output<Recipe>();
  onSelect(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
    console.log(recipe)
  }
}
