import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model'
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('a test recipe','This is to test the list','https://www.callmepmc.com/wp-content/uploads/2019/01/Slow-Cooker-Crack-Chicken-Recipe-AMAZING.jpg','crockpot'),
  new Recipe('a test recipe','This is to test the list','https://www.callmepmc.com/wp-content/uploads/2019/01/Slow-Cooker-Crack-Chicken-Recipe-AMAZING.jpg','crockpot'),
  new Recipe('a test recipe','This is to test the list','https://www.callmepmc.com/wp-content/uploads/2019/01/Slow-Cooker-Crack-Chicken-Recipe-AMAZING.jpg','crockpot')
];
  constructor() { }

  ngOnInit(): void {
  }

}
