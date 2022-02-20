import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  // creates a state for all recipes. uses the RecipeData array as a starting point
  const [recipes, setRecipes] = useState(RecipeData);

  // handler for adding new recipes
  const addRecipe = (newRecipe) => {
    setRecipes([
      ...recipes,
      newRecipe
    ])
  }

  // handler for deleting recipes
  const deleteRecipe = (indexToDelete) => {
    // finds the recipe to delete based on the given index
    setRecipes((currentRecipes) =>
      currentRecipes.filter((post, index) => index !== indexToDelete)
    ) 
  }
  
  // entire app format
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
