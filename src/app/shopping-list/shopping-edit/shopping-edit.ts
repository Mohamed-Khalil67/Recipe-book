import { Component, ElementRef, output, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';

@Component({
  imports: [],
  selector: 'app-shopping-edit',
  styleUrl: './shopping-edit.scss',
  templateUrl: './shopping-edit.html',
})
export class ShoppingEdit {

  @ViewChild('nameInput', { static: true }) nameRef?: ElementRef;
  @ViewChild('amountInput', { static: true }) amountRef?: ElementRef;

  ingredientAdded = output<Ingredients>()

  onAddItem() {
    const ingredient = new Ingredients(this.nameRef?.nativeElement.value, this.amountRef?.nativeElement.value)
    this.ingredientAdded.emit(ingredient)
  }
}
