import pizza from "./createPizza.js";


export function chooseDoughSause (classNameOfElement) {
    const lists = document.getElementById(classNameOfElement);
    lists.addEventListener(`click`, clickList);
    
    let selectedItem;
    function clickList (event) {
        if (event.target.tagName == 'LI') {
            selectedItem && selectedItem.classList.remove('choosed'); 
            
            selectedItem = event.target;
            selectedItem.classList.add('choosed');
            
            pizza.addIngredient(classNameOfElement, selectedItem.textContent);
        }
    }
}

