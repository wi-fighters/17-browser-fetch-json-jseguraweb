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
    let cakes = list.cakes;
    // console.log(cakes);
    cakes.map(cake => {
        let card = document.createElement('div');
        card.classList.add('card');
        cakesSection.appendChild(card);
        // picture
        let picture = document.createElement('img');
        picture.classList.add('card-img');
        picture.setAttribute('src', cake.image)
        // info
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('card-info');
        // title of the card
        const title = document.createElement('h3');
        title.appendChild(document.createTextNode(cake.title));
        // author
        const author = document.createElement('p');
        author.appendChild(document.createTextNode(cake.author));
        // ingredients
        const ingredients = document.createElement('p');
        ingredients.appendChild(document.createTextNode(`Ingredients: ${cake.ingredients}`));
        // append parts of the info in it
        infoContainer.appendChild(title);
        infoContainer.appendChild(author);
        infoContainer.appendChild(ingredients);
        // append picture and info containers in the card
        card.appendChild(picture);
        card.appendChild(infoContainer);
    })
    return list;
})
.then(list => {
    let biscuits = list.biscuits;
    // console.log(biscuits);
    biscuits.map(biscuit => {
        let card = document.createElement('div');
        card.classList.add('card');
        biscuitsSection.appendChild(card);
        // picture
        let picture = document.createElement('img');
        picture.classList.add('card-img');
        picture.setAttribute('src', biscuit.image)
        // info
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('card-info');
        // title of the card
        const title = document.createElement('h3');
        title.appendChild(document.createTextNode(biscuit.title));
        // author
        const author = document.createElement('p');
        author.appendChild(document.createTextNode(biscuit.author));
        // ingredients
        const ingredients = document.createElement('p');
        ingredients.appendChild(document.createTextNode(`Ingredients: ${biscuit.ingredients}`));
        // append parts of the info in it
        infoContainer.appendChild(title);
        infoContainer.appendChild(author);
        infoContainer.appendChild(ingredients);
        // append picture and info containers in the card
        card.appendChild(picture);
        card.appendChild(infoContainer);
    })
    return list;
})
.then(list => {
    let breads = list.bread;
    // console.log(breads);
    breads.map(bread => {
        let card = document.createElement('div');
        card.classList.add('card');
        breadSection.appendChild(card);
        // picture
        let picture = document.createElement('img');
        picture.classList.add('card-img');
        picture.setAttribute('src', bread.image)
        // info
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('card-info');
        // title of the card
        const title = document.createElement('h3');
        title.appendChild(document.createTextNode(bread.title));
        // author
        const author = document.createElement('p');
        author.appendChild(document.createTextNode(bread.author));
        // ingredients
        const ingredients = document.createElement('p');
        ingredients.appendChild(document.createTextNode(`Ingredients: ${bread.ingredients}`));
        // append parts of the info in it
        infoContainer.appendChild(title);
        infoContainer.appendChild(author);
        infoContainer.appendChild(ingredients);
        // append picture and info containers in the card
        card.appendChild(picture);
        card.appendChild(infoContainer);
    })
    return list;
})