import { cart, removeCart } from "./cart.js";
import { product } from "./product.js";

function checkOut () {

    let cartHTML = '';

    cart.forEach(item => {
        const cartId = item.id;

        let matchingItem;
        product.forEach(productItem => {
            if (productItem.id === cartId) {
                matchingItem = productItem;
            }
        });

        cartHTML += `
            <div class="left-item js-cart-${matchingItem.id}">
                <div class="mid">
                    <img src="${matchingItem.image}" alt="">
                    <div class="content">
                        <h5> ${matchingItem.productName} </h5>
                        <p> ₱${(matchingItem.price /100).toFixed(2)} </p>
                        <div class="icon">
                            <i class="fa-regular fa-heart"></i>
                            <i class='bx bx-trash js-delete-btn' 
                            data-remove="${matchingItem.id}"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;

    });

    document.querySelector('.left').innerHTML = cartHTML;


    const dlt = document.querySelectorAll('.js-delete-btn');

        dlt.forEach(item => {
            item.addEventListener('click', () => {
                const btnId = item.dataset.remove;

                removeCart(btnId);
                console.log(cart);

                const root = document.querySelector(`.js-cart-${btnId}`);
                root.remove();

            });

        });
    
}

checkOut();

