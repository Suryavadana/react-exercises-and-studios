import "./App.css";
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";
import ClickedButton from "./components/ClickedButton";
import SaveButton from "./components/SaveButton";
export default function App() {
  return (
    <>
      <RecipeImage />
      <RecipeName /> 
      <IngredientList /> 
      <RateARecipe rating={4} />
      <SaveButton/>
      <ClickedButton />
       <Button saveButton={true} /> 
      <AuthorInfo />
     
    </>
  );
}
