import Component from '../Component.js';

class RecipeDeets extends Component {

    renderTemplate() {
        const recipe = this.props.recipe;
        console.log(recipe);
        if(!recipe) {
            return `<div></div>`;
        }
        const image = recipe.imageURL || './assets/placeholder.png';
        const ingredients = recipe.ingredients.map(ingredient => {
            return `<li>${ingredient}</li>`;
        }).join(' ');

        const instructions = recipe.instructions.map(instruction => {
            return `<li>${instruction}</li>`;
        }).join(' ');

        // const ingredientsList = new IngredientsList();
        // dom.appendChild(ingredientsList.render());

        
        
        return /*html*/`
            <div id="recipe-deets-object">
                <h2>${recipe.recipeTitle}</h2>
                <img src="${image}">
                <p>Prep Time: ${recipe.prepTime}</p>
                <p>Cook Time: ${recipe.cookTime}</p>
                <p>Ready In: ${recipe.readyIn}</p>
                <p>Servings: ${recipe.servings}</p>
                <ul>Ingredents: ${ingredients}</ul>
                <ol>Instructions: ${instructions}</ol>
                <p>Notes: ${recipe.notes}</p>
                <p>Meal Type: ${recipe.mealType}</p>
                <p>Diet Type: ${recipe.dietType}</p>
                <p>Cookbook Name: ${recipe.cookbookTag}</p>
            </div>
        `;
    }
}

export default RecipeDeets;