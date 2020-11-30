import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://storage.needpix.com/rsynced_images/food-1459693_1280.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://storage.needpix.com/rsynced_images/food-1459693_1280.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
