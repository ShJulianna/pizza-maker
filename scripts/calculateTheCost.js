export function calculateThePrice () {
    const choosedList = [...document.getElementsByClassName(`choosed`)];

    let priceOfTheOrder = choosedList.reduce((sum, elem) => 
        sum += +elem.dataset.price, 0)
    
    addThePrice(priceOfTheOrder);
}


function addThePrice (priceOfTheOrder) {
    document.getElementsByClassName(`resultPrice`)[0] && document.getElementsByClassName(`resultPrice`)[0].remove();
    
    const priceName = document.getElementById(`price`);
    const price = document.createElement(`p`);
    price.classList.add(`resultPrice`);
    price.textContent = priceOfTheOrder + "$";
    priceName.append(price);
}