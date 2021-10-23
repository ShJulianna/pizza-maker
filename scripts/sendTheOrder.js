import { counter } from "./count.js";
import { removeIngredients } from "./removeIngredients.js";
import { addItemInOrder } from './addItemInOrder.js';
import { changeImage } from './changeImage.js';
import { calculateThePrice } from './calculateTheCost.js';
import pizza from "./createPizza.js";



export function sendTheOrder (){
    
    if (counter() === 4) {
        
        document.getElementsByTagName(`main`)[0].insertAdjacentHTML(`afterbegin`, `
            <div class="message">
                <div class="modal">
                    <p> Ваш заказ успешно отправлен!</p>
                    <button id ='send'> OK </button>
                </div>
            </div>
        `);
        removeEventList();
        console.log(pizza);
    } 
}

function removeEventList () {
    
    const listOfChoosedIngredients = document.getElementById('orderList');
    listOfChoosedIngredients.removeEventListener(`click`, removeIngredients);
    listOfChoosedIngredients.removeEventListener(`click`, changeImage);
    listOfChoosedIngredients.removeEventListener(`click`, calculateThePrice);
    
    const button = document.getElementById(`button`);
    button.removeEventListener(`click`, sendTheOrder);
    button.removeEventListener('click', counter)

    const order = document.getElementById(`ingredients`);
    order.removeEventListener(`click`, addItemInOrder);
    order.removeEventListener(`click`, changeImage);
    order.removeEventListener('click', counter);
    order.removeEventListener('click', calculateThePrice);
}