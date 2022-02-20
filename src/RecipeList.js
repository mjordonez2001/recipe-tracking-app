import React from "react";
import Recipe from "./Recipe";

function RecipeList({recipes, deleteRecipe}) {

  // maps all the current recipes in to the Recipe component
  const allRecipes = recipes.map((recipe, index) => {
    return <Recipe recipe={recipe} index={index} key={index} deleteRecipe={deleteRecipe}/>;
  });

  // recipe list format
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allRecipes}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
