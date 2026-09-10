import { Service, inject } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Service()
export class RecipeService {

    recipes: Recipe[] = [
        new Recipe(
            "Schnitzel",
            "A super-tasty Schnitzel - just awesome!",
            "assets/schnitzel.png"
        ),
        new Recipe(
            "Big Fat Burger",
            "What else you need to say?",
            "assets/burger.png"
        ),
        new Recipe(
            "Margherita Pizza",
            "Classic Italian pizza with fresh basil.",
            "assets/pizza.png"
        ),
    ]

    getRecipes() {
        return this.recipes
    }
}
