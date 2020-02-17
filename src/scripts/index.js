// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import { recipes } from './data.js';

// \/ All of your javascript should go here \/

// 1. GET SECTIONS
const cakesSection = document.querySelector('#cakes');
const biscuitsSection = document.querySelector('#biscuit');
const breadSection = document.querySelector('#bread');

// 2. CREATE CARD
const card = document.createElement('div');
card.classList.add('card');
// picture
const pictureContainer = document.createElement('div');
pictureContainer.classList.add('card-img');
// info
const infoContainer = document.createElement('div');
infoContainer.classList.add('card-info');
// title of the card
const title = document.createElement('h3');
title.appendChild(document.createTextNode('title'));
// author
const author = document.createElement('p');
author.appendChild(document.createTextNode('author'));
// ingredients
const ingredients = document.createElement('p');
ingredients.appendChild(document.createTextNode('ingredients'));
// append parts of the info in it
infoContainer.appendChild(title);
infoContainer.appendChild(author);
infoContainer.appendChild(ingredients);
// append picture and info containers in the card
card.appendChild(pictureContainer);
card.appendChild(infoContainer);
// cakesSection.appendChild(card)

// 3. CREATE PROGRAM
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
    console.log(cakes);
    cakes.map(cake => {
        let card = document.createElement('div');
        card.classList.add('card');
        cakesSection.appendChild(card);
    })
})
