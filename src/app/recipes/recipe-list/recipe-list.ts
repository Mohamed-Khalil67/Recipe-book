import { Component } from '@angular/core';
import { RecipeItem } from "./recipe-item/recipe-item";
import { Recipe } from '../recipe.model';

@Component({
  imports: [RecipeItem],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.scss',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe 1',
      'This is test 1 description for recipe',
      'assets/recipes-book.png'
    ),
    new Recipe(
      'Test recipe 1',
      'This is test 1 description for recipe',
      'assets/recipes-book.png'
    ),
    new Recipe(
      'Test recipe 1',
      'This is test 1 description for recipe',
      'assets/recipes-book.png'
    )
  ]
}
