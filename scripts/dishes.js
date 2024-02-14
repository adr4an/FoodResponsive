import { product } from "../data/product.js";
import { cart, addToCart } from "../data/cart.js";

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
                        <button class="add-btn"
                        data-product="${item.id}"> Add to Bag </button>
                    </div>
            </div>
        `;

    });

    container.innerHTML = html;

    const addBtn = document.querySelectorAll('.add-btn');
    addBtn.forEach(item => {

        item.addEventListener('click', () => {
            const dataBtn = item.dataset.product;

                addToCart(dataBtn);
                cartQuantity();
                productDesign();


        });
        
    });

    function cartQuantity() {

        let quantity = 0;
    
        cart.forEach(item => {
            quantity += item.quantity;
        });
    
        document.querySelector('.cart-quantity').innerHTML = quantity;
    
    }

}
