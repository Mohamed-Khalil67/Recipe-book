import { Component } from '@angular/core';
import { RecipeItem } from "./recipe-item/recipe-item";

@Component({
  imports: [RecipeItem],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.scss',
  templateUrl: './recipe-list.html',
})
export class RecipeList { }
