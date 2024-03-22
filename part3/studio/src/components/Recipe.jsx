import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://vismaifood.com/en/annavaram-prasadam-recipe-real-annavaram-prasadam-recipe-sri-swamy-vari-prasadam-how-to-make-annavaram-prasadam";
   let authorPhoto = "https://media.assettype.com/TNIE%2Fimport%2Fuploads%2Fuser%2Fckeditor_images%2Farticle%2F2020%2F6%2F16%2FPuttinga.jpg";
   let authorName = "Teja Paruchuri";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Red Wheat Semolinao","Sugar","Ghee","Grated Raw Grated Jaggery","Cardamoms"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Annavaram Prasadam</h1>
            <p>Satyanarayana Swamy is the Lord of the bountiful and it is considered auspicious to 
                perform a special Puja for Him for prosperity, protection and peace.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://vismaifood.com/storage/app/uploads/public/9f5/78d/500/thumb__700_0_0_0_auto.jpg" alt="vismai food" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
