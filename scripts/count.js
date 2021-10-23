
export function counter () {
    const choosedIngredients = [...document.getElementsByClassName(`choosed`)];
    
    let counterOfIngredients = [];
    choosedIngredients.map(elem => counterOfIngredients.push(elem.className));
    
    let counter = counterOfIngredients.filter((item, index) => counterOfIngredients.indexOf(item) === index);
    return counter.length;
    
}