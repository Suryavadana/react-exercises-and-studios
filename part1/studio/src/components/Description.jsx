import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component{
    render(){
        return(
        <div> 
            <div>
            <h1>Annavaram Prasadam</h1>
            <p>Satyanarayana Swamy is the Lord of the bountiful and it is considered auspicious to 
                perform a special Puja for Him for prosperity, protection and peace.</p>
            </div>
            <RecipeAuthor />
        </div>
        );
    }
}
function RecipeAuthor(){
    let authorLink="https://vismaifood.com/en/annavaram-prasadam-recipe-real-annavaram-prasadam-recipe-sri-swamy-vari-prasadam-how-to-make-annavaram-prasadam";
    let authorPhoto="https://media.assettype.com/TNIE%2Fimport%2Fuploads%2Fuser%2Fckeditor_images%2Farticle%2F2020%2F6%2F16%2FPuttinga.jpg";
    let authorName="Teja Paruchuri";

    return(
        <div className = {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt = "Teja Paruchuri" className={styles.imageUpdates} />
        <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>ANNAVARAM PRASADAM</a> 
      </div>
   </div>

    );
}

export default RecipeDescription;