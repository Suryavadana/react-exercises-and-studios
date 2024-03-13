import React from "react";
import recipedata from './recipe.json';

function RecipeImage() {
  const recipeImageURL = recipedata[0].recipeImage; 
   return
   (
   <div>
    <img src={recipeImageURL} alt={recipedata[0].name} className="recipeImage" />
  </div>
  );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 