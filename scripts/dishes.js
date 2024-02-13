import { product } from "../data/product.js";

export function productDesign(){
    let html = '';
    const container = document.querySelector('.food-menu');

    product.forEach((item) => {

        html += `
            <div class="food-content mix ${item.category}">
                <img src='${item.image}' alt="">
                    <div class="details">
                        <p id="food_name"> ${item.productName} </p>
                        <div class="stars-line">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p id="prices"> Price : $${(item.price /100).toFixed(2)} </p>
                        <button> Add to Bag </button>
                    </div>
            </div>
        `;

    });

    console.log(container);

    container.innerHTML = html;

}