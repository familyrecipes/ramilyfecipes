import Component from '../Component.js';
import { auth, recipesByUserRef } from '../services/firebase.js';

class SubmitRecipe extends Component {

    render() {
        const form = this.renderDOM();
        const submitForm = form.querySelector('form');

        const submitButton = form.querySelector('#submit-button');
        const recipeKey = recipesByUserRef.child(this.props.key);

        submitButton.addEventListener('click', event => {
            event.preventDefault();
            const formData = new FormData(submitForm);
            const recipeRef = recipeKey.push();

            const newRecipe = {
                key: recipeRef.key,
                owner: auth.currentUser.uid,
                recipeTitle: formData.get('recipe-title'),
                description: formData.get('description'),
                prepTime: formData.get('prep-time'),
                cookTime: formData.get('cook-time'),
                readyIn: formData.get('ready-in'),
                servings: formData.get('servings'),
                ingredients: formData.get('ingredients'),
                breakfast: formData.get('breakfast'),
                lunch: formData.get('lunch'),
                dinner: formData.get('dinner'),
                dessert: formData.get('dessert'),
                side: formData.get('side'),
                instructions: formData.get('instructions'),
                notes: formData.get('notes'),
                familyTag: formData.get('family-tag'),
                dietType: formData.get('diet-type')

            };

            recipeRef.set(newRecipe).then(() => {
                submitForm.reset();
                
            });
        });

        return form;
    }

    renderTemplate() {
        return /*html*/ `
            <div id="container">
                <form>
                    <div>
                        <label><input name="recipe-title" placeholder="Recipe Title...">Recipe Title</label>
                        <textarea name="description" placeholder="Describe your dish..."></textarea>
                        <label><input name="image-upload" placeholder="image uplaod">image upload</label>
                    </div>
                        <input id="breakfast" type="checkbox" name="breakfast" value="Breakfast">Breakfast
                        <input id="lunch" type="checkbox" name="lunch" value="Lunch">Lunch
                        <input id="dinner" type="checkbox" name="dinner" value="Dinner">Dinner
                        <input id="dessert" type="checkbox" name="dessert" value="Dessert">Dessert
                        <input id="side" type="checkbox" name="side" value="Side">Side
                    <div>
                        <select id="diet-type" name="diet-type" >Diet Type
                            <option disabled selected value> select an option below </option>
                            <option value="Vegetarian">Vegetarian</option>
                            <option value="Vegan">Vegan</option>
                            <option value="Gluten-free">Gluten-free</option>
                        </select>
                    </div>
                    <div>
                        <input name="prep-time" placeholder="Prep time...">
                        <input name="cook-time" placeholder="Cook time...">
                        <input name="ready-in" placeholder="Ready in...">
                        <input name="servings" placeholder="Servings...">
                    </div>
                    <div>
                        <label>Ingredients
                        <textarea name="ingredients" placeholder="1tbsp sugar, 3 cups flour..."></textarea>
                        </label>
                    </div>
                    <div>
                        <textarea name="instructions" placeholder="Instructions..."></textarea>
                        <textarea name="notes" placeholder="Notes..."></textarea>
                        <input name="family-tag" placeholder="Family Name">
                    </div>
                    <div>
                    </div>
                    <button id="submit-button">Add recipe</button>
                </form>
            </div>
    `;
    }
}

export default SubmitRecipe;