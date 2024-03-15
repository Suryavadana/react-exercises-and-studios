import React from "react";
import recipedata from './recipe.json';

function RecipeImage() {
  const recipeImageURL = recipedata.map((data)=>( 
  <div key = {data.recipeImage}>
    <img key ={data.recipeImage} src={data.recipeImage}></img>
  </div>
  ))
  return recipeImageURL;
   }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 