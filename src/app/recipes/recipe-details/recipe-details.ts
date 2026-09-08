import { Component, input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  imports: [],
  selector: 'app-recipe-details',
  styleUrl: './recipe-details.scss',
  templateUrl: './recipe-details.html',
})
export class RecipeDetails {
  recipe = input<Recipe>()
}
