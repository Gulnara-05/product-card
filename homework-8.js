import { products } from './data.js';

// 1. Описания
const productDescriptions = products.reduce((acc, item) => {
    acc.push({ [item.title]: item.description });
    return acc;
}, []);

function getCardsCount() {
    const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
    const count = Number(userInput);
    if (count >= 1 && count <= 5) return count;
    alert("Ошибка! Введите число от 1 до 5.");
    return getCardsCount(); 
}

function renderCards(dataArray) {
    console.log("Данные:", dataArray);
    const listContainer = document.querySelector('.list');
    const template = document.querySelector('#product-template');
    
    listContainer.innerHTML = ''; 

    dataArray.forEach(product => {
        const clone = template.content.cloneNode(true);
        
        clone.querySelector('.product-image').src = `images/${product.image}`;
        clone.querySelector('.category').textContent = product.category;
        clone.querySelector('.product-title').textContent = product.title;
        clone.querySelector('.desc').textContent = product.description;
        clone.querySelector('.price-value').innerHTML = `${product.price} ${product.currency}`;
        
        const list = clone.querySelector('.composition-list');
        product.composition.forEach(ing => {
            const li = document.createElement('li');
            li.textContent = ing;
            list.appendChild(li);
        });

        listContainer.appendChild(clone);
    });
}

const count = getCardsCount(); 
const itemsToRender = products.slice(0,count);
renderCards(itemsToRender);