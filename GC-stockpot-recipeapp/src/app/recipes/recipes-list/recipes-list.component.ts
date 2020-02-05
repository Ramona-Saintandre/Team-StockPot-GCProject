import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model'
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('a test recipe','This is to test the list','https://www.flickr.com/photos/67238971@N04/7375181062','crockpot')
];
  constructor() { }

  ngOnInit(): void {
  }

}
