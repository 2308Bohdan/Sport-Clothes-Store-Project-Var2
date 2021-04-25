const arrivalsJson =
`[
    {
        "id": "1",
        "link": "adidas-cloudfoam-trainers.html",
        "image": "../img/reebok-red-duster.png",
        "productName": "Reebok Red Duster",
        "price": "$60,00USD"
    },
    {
        "id": "2",
        "link": "adidas-cloudfoam-trainers.html",
        "image": "../img/asics-jordan.png",
        "productName": "Asics Jordan 2000",
        "price": "$200,00USD"
    },
    {
        "id": "3",
        "link": "adidas-cloudfoam-trainers.html",
        "image": "../img/puma-textile-running-shoes.png",
        "productName": "Puma Textile Running Shoes",
        "price": "$62,00USD"
    },
    {
        "id": "4",
        "link": "adidas-cloudfoam-trainers.html",
        "image": "../img/nike-winter-jacket.png",
        "productName": "Nike Winter Jacket in Blue",
        "price": "$85,00USD"
    }
]`;

function renderArrivals(arrivals) {
    const arrivalsContainer = document.querySelector('.products-women-list');
    let html = '';
    for (const arrival of arrivals) {
        html += `<div class="arrival">
                    <a href="${arrival.link}">
                        <img src="img/${arrival.image}" alt="${arrival.productName}"/>
                    </a>
                    <a href="${arrival.link}">${arrival.productName}</a>
                    <p>${arrival.price}</p>
                    <div class="buttons">
                        <button>Add to Cart</button>
                    </div>
                </div>
                `
    }
    arrivalsContainer.innerHTML = html;
}

renderArrivals(JSON.parse(arrivalsJson));
