import { Component } from '@angular/core';
import { ShoppingEdit } from "./shopping-edit/shopping-edit";

@Component({
  imports: [ShoppingEdit],
  selector: 'app-shopping-list',
  styleUrl: './shopping-list.scss',
  templateUrl: './shopping-list.html',
})
export class ShoppingList { }
