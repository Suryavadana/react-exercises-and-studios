import React from "react";
import recipedata from './recipe.json';
import './styling.css';
function AuthorInfo() {
  const authorName =recipedata.map((data)=>(
    <div key={data.name}>{data.author}</div>
  ))

  const authorImage = recipedata.map((data)=>(
    <div>
      <img src={data.authorImage} className="authorImage"></img>
    </div>
  ))
  

  const authorWebsite = recipedata.map((data)=>(
    <div>
      <a href={data.website}>{data.website}</a>
    </div>
  ))
  return (
    <div>
      {authorImage}
      {authorName}
      {authorWebsite}
    </div>
  );
  // const author = recipedata[0].author;
  // const authorImage = recipedata[0].authorImage;
  // const authorWebsite = recipedata[0].website;
  //  return(
  //   <div>
  //     <div>{author}</div>
  //     <img src={authorImage} alt={author} className="authorImage" />
  //     <a href={authorWebsite}>{author}'s Website</a>
  //   </div>
  //  );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 