import { Component, ElementRef, output, ViewChild } from '@angular/core';
import { ShoppingEdit } from "./shopping-edit/shopping-edit";
import { Ingredients } from '../shared/ingredients.model';

@Component({
  imports: [ShoppingEdit],
  selector: 'app-shopping-list',
  styleUrl: './shopping-list.scss',
  templateUrl: './shopping-list.html',
})
export class ShoppingList {

  ingredients: Ingredients[] = [
    new Ingredients('Apple', 100),
    new Ingredients('Pizza', 150),
    new Ingredients('Mango', 60)
  ]

  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient)
  }

}
