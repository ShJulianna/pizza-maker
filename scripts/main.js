import {chooseDoughSause} from './chooseDoughSause.js';
import {chooseMeatVeges} from './chooseMeatVeges.js';
import {sendTheOrder} from './sendTheOrder.js';
import {removeIngredients} from './removeIngredients.js';
import {addItemInOrder} from './addItemInOrder.js';
import {changeImage} from './changeImage.js';
import {calculateThePrice} from './calculateTheCost.js';
import {counter}  from "./count.js"




chooseDoughSause(`dough`);
chooseMeatVeges(`meat`);
chooseMeatVeges(`veges`);
chooseDoughSause(`sause`);



const listOfChoosedIngredients = document.getElementById('orderList');
listOfChoosedIngredients.addEventListener(`click`, removeIngredients);
listOfChoosedIngredients.addEventListener(`click`, changeImage);
listOfChoosedIngredients.addEventListener(`click`, calculateThePrice);
   
const button = document.getElementById(`button`);
button.addEventListener(`click`, sendTheOrder);
button.addEventListener('click', counter)

const order = document.getElementById(`ingredients`);
order.addEventListener(`click`, addItemInOrder);
order.addEventListener(`click`, changeImage);
order.addEventListener('click', counter);
order.addEventListener('click', calculateThePrice);

