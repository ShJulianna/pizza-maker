import pizza from './createPizza.js';

export function chooseMeatVeges (classNameOfElement) {
    const lists = document.getElementById(classNameOfElement);
    lists.addEventListener(`click`, clickList);
    
    const choosedIngredients = [];
    
    function clickList (event) {
        if (event.target.classList.contains(`choosed`)){
            return;
        } else{
            if (event.target.tagName == 'LI') {
                if (choosedIngredients.length > 1) { 
                    if (choosedIngredients[1]?.classList.contains(`choosed`) ){
                        choosedIngredients[0].classList.remove(`choosed`);
                        choosedIngredients.shift();
                    } else {
                        choosedIngredients.pop();
                    }  
                }
                event.target.classList.add(`choosed`);
                choosedIngredients.push(event.target);
                pizza.addIngredient(classNameOfElement, event.target.textContent);
            }
        }
    }
}