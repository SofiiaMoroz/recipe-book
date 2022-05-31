import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test ', 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/5247ee12228109.56032d8b1b3b0.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test ', 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/5247ee12228109.56032d8b1b3b0.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
