import { Ingredient } from '../shared/Ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppinglistService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredient:Ingredient[]=[
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
     getIngredients(){
        return this.ingredient.slice();
     } 
     addIngredient(ingredient:Ingredient){
        this.ingredient.push(ingredient);
        this.ingredientsChanged.emit(this.ingredient.slice());
     }
}