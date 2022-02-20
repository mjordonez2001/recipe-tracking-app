import React from "react";

function Recipe({recipe, index, deleteRecipe}) {
    // recipe format
    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} /></td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><button name="delete" onClick={() => deleteRecipe(index)}>Delete</button></td>
        </tr>
    )
}

export default Recipe;