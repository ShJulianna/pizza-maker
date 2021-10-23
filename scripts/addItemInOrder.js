import pizza from "./createPizza.js";


export function addItemInOrder () {
    const orderList = document.getElementById(`orderList`);
    const list = [...document.getElementsByClassName(`addedOrderList`)];
    
    try {
        list.forEach(elem => elem.remove());
    }catch {
        console.log(`нет выбранных ингридиентов`);
    }    
    for (let key in pizza) {
        pizza[key] && orderList.append(createListItem(pizza[key],key));
    }
}

function createListItem (text, key) {
    const addedOrderList = document.createElement('li');
    addedOrderList.classList.add(`addedOrderList`);
    addedOrderList.classList.add(key);
    addedOrderList.textContent = text;
    return addedOrderList;
}