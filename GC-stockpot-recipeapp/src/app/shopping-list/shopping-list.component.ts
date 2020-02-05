import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../sharedmodels/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] =[
    new Ingredient('Apples',5),
    new Ingredient('Potatoe',15),
    new Ingredient('Onion',1),
    new Ingredient('Cabbage',1)
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
