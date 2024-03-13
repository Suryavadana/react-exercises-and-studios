import React from 'react';
import recipedata from './recipe.json'; 
function IngredientList() {
  const ingredients = recipedata[0].ingredients;
  const ingredientsList = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  )); 
   return(
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredientsList}
      </ul>
    </div>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 