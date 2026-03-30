import { products } from './data.js'; 
const createCardTemplate = (product) => {
const compHtml = product.productComposition.map(item => `<li>${item}</li>`).join('');
    return `
        <div class="product-card">
            <img src="images/${product.image}" alt="${product.title}">
            <p class="category">${product.category}</p>
            <h3>${product.title}</h3>
            <p class="desc">${product.description}</p>
            <div class="composition">
                <h4>Состав</h4>
                <ul>${compHtml}</ul>
            </div>
            <div class="price-row">
                <span>Цена</span>
                <span>${product.price} Р</span>
            </div>
        </div>
     ` 
    };

    const productDescriptions = products.reduce((acc, product) => {
    acc[product.title] = product.description;
    return acc;
}, {}); 
    console.log(productDescriptions);
    
    const ListContainer = document.querySelector('.list');
    const productsHtml = products.map(product => createCardTemplate(product)).join('');
    ListContainer.innerHTML += productsHtml;

    function getCardsCount() {
    const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
    const count = Number(userInput);

    if (count >= 1 && count <= 5) {
        return count;
    } else {
        alert("Ошибка! Введите число от 1 до 5.");
        return 0;
    }
}

function renderCards(dataArray, count) {
    if (count === 0) return;

    const listContainer = document.querySelector('.list');
    const itemsToRender = dataArray.slice(0, count);
    
    const productsHtml = itemsToRender
        .map(product => createCardTemplate(product))
        .join('');

    listContainer.innerHTML = productsHtml;
}

const countFromUser = getCardsCount();
renderCards(products, countFromUser);
