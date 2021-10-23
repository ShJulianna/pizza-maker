import pizza from "./createPizza.js";


export function removeIngredients (event) {
    if (event.target.tagName == 'LI') {
        removeClassChoosed(event.target);
        event.target.classList.remove(`addedOrderList`);
        pizza.deleteIngredient(event.target.classList);     
        event.target.remove();
    }
} 

function removeClassChoosed (item) {
    const list = Array.from(document.getElementsByClassName(`choosed`));
    list.forEach(elem => (elem.textContent === item.textContent) && elem.classList.remove('choosed'));
}