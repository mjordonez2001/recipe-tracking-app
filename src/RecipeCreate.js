import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // the initial form state, has everything as empty strings
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  // creates a new state for the form data
  const [formData, setFormData] = useState({...initialFormState});

  // change handler that updates the current form data
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  }

  // submit handler that prevents default, adds a new recipe to the recipes array, and resets the form
  const submitHandler = (event) => {
    event.preventDefault();
    addRecipe(formData)

    setFormData({
      ...initialFormState
    })
  }
  
  // create form format
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                id="name" 
                type="text" 
                name="name" 
                placeholder="Name" 
                required
                onChange={handleChange} 
                value={formData.name} />
            </td>
            <td>
              <input 
                id="cuisine" 
                type="text" 
                name="cuisine"
                required 
                placeholder="Cuisine" 
                onChange={handleChange} 
                value={formData.cuisine} />
            </td>
            <td>
              <input 
                id="photo" 
                type="text" 
                name="photo" 
                required
                placeholder="URL" 
                onChange={handleChange} 
                value={formData.photo} />
            </td>
            <td>
              <textarea 
                id="ingredients" 
                name="ingredients" 
                required
                placeholder="Ingredients" 
                onChange={handleChange} 
                value={formData.ingredients} />
            </td>
            <td>
              <textarea 
                id="preparation" 
                name="preparation" 
                required
                placeholder="Preparation" 
                onChange={handleChange} 
                value={formData.preparation} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
