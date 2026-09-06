import { Component, input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  imports: [],
  selector: 'app-recipe-item',
  styleUrl: './recipe-item.scss',
  templateUrl: './recipe-item.html',
})
export class RecipeItem {
  recipes = input.required<Recipe[]>();
}
