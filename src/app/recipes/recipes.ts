import { Component } from '@angular/core';
import { RecipeList } from "./recipe-list/recipe-list";
import { RecipeDetails } from "./recipe-details/recipe-details";

@Component({
  imports: [RecipeList, RecipeDetails],
  selector: 'app-recipes',
  styleUrl: './recipes.scss',
  templateUrl: './recipes.html',
})
export class Recipes { }
