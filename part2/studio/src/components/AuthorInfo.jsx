import React from "react";
import recipedata from './recipe.json';
function AuthorInfo() {
  const author = recipedata[0].author;
  const authorImage = recipedata[0].authorImage;
  const authorWebsite = recipedata[0].website;
   return(
    <div>
      <div>{author}</div>
      <img src={authorImage} alt={author} className="authorImage" />
      <a href={authorWebsite}>{author}'s Website</a>
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 