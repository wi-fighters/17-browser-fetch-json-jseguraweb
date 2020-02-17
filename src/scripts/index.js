// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import { recipes } from './data.js';

// \/ All of your javascript should go here \/

// GET SECTIONS
const cakesSection = document.querySelector('#cakes');
const biscuitsSection = document.querySelector('#biscuits');
const breadSection = document.querySelector('#bread');

// CREATE PROGRAM
let promiseOfRecipes = new Promise((resolve, reject) => {
    resolve(recipes)
})

promiseOfRecipes.then(recipes => {
    let listOfRecipes = JSON.parse(JSON.stringify(recipes));
    // console.log(listOfRecipes);
    return listOfRecipes;
})
.then(list => {
    for (let recipe in list) {
        let food = list[recipe];

        food.map(typeOfFood => {
            // console.log(typeOfFood.type);
            
            // create card element
            let card = document.createElement('div');
            card.classList.add('card');
            // picture
            let picture = document.createElement('img');
            picture.classList.add('card-img');
            picture.setAttribute('src', typeOfFood.image);
            // info
            const infoContainer = document.createElement('div');
            infoContainer.classList.add('card-info');
            // title of the card
            const title = document.createElement('h3');
            title.appendChild(document.createTextNode(typeOfFood.title));
            // author
            const author = document.createElement('p');
            author.appendChild(document.createTextNode(typeOfFood.author));
            // ingredients
            const ingredients = document.createElement('p');
            ingredients.appendChild(document.createTextNode(`Ingredients: ${typeOfFood.ingredients}`));
            // append parts of the info in the info container
            infoContainer.appendChild(title);
            infoContainer.appendChild(author);
            infoContainer.appendChild(ingredients);
            // append picture and info containers in the card element
            card.appendChild(picture);
            card.appendChild(infoContainer);

            if (typeOfFood.type === 'cakes') {
                cakesSection.appendChild(card);

            } else if (typeOfFood.type === 'biscuits') {
                biscuitsSection.appendChild(card);
            } else if (typeOfFood.type === 'bread') {
                breadSection.appendChild(card);
            }
        })
    }
    return list;
})