import { Component, inject, OnInit, output } from '@angular/core';
import { RecipeItem } from "./recipe-item/recipe-item";
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  imports: [RecipeItem],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.scss',
  templateUrl: './recipe-list.html',
})
export class RecipeList implements OnInit {
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes()
    console.log(this.recipes)
  }

  recipeService = inject(RecipeService)
  recipeWasSelected = output<Recipe>();
  recipes: Recipe[] = []

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
    console.log(recipe)
  }
}
