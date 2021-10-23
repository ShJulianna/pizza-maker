import { counter } from "./count.js";


export function changeImage () {
    const img = document.getElementsByTagName(`img`)[0];
    img.src = `images/${counter()}.png`;
}
