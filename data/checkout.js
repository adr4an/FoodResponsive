import { cart, removeCart } from "./cart.js";
import { product } from "./product.js";
import { paymentSummary } from "./payment.js";

function checkOut () {

    let cartHTML = '';

    cart.forEach(item => {
        const cartId = item.id;

        let matchingItem = matchingId(cartId);

        cartHTML += `
            <div class="left-item js-cart-${matchingItem.id}">
                <div class="mid">
                    <img src="${matchingItem.image}" alt="">
                    <div class="content">
                        <h5> ${matchingItem.productName} </h5>
                        <p> ₱${(matchingItem.price /100).toFixed(2)} </p>
                        <p class="item-quantity"> Quantity: ${item.quantity} </p>
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

    // Delete Button
    const dlt = document.querySelectorAll('.js-delete-btn');

        dlt.forEach(item => {
            item.addEventListener('click', () => {
                const btnId = item.dataset.remove;

                removeCart(btnId);

                const root = document.querySelector(`.js-cart-${btnId}`);
                root.remove();
                paymentSummary();


            });

        });

    // Calculating Price
    paymentSummary();
    
}

checkOut();

export function matchingId(productID) {
    let matchingItem;

    product.forEach(productItem => {
        if (productItem.id === productID) {
            matchingItem = productItem;
        }
    });

    return matchingItem;
}