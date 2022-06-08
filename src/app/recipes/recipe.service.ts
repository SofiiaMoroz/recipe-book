import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test ', 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/5247ee12228109.56032d8b1b3b0.jpg'),
        new Recipe('A Test Recipe2', 'This is simply a test 2 ', 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/5247ee12228109.56032d8b1b3b0.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}