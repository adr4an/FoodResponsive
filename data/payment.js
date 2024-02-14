import { matchingId } from "./checkout.js";
import { cart } from "./cart.js";

export function paymentSummary(){

    let paymentHTML = '';
    let priceQuantity = 0;
    const shipping = 4000;
    let finalPrice = 0;

    cart.forEach(item => {

        const cartId = item.id;

        let matchingItem = matchingId(cartId);

        priceQuantity += item.quantity * matchingItem.price;
        finalPrice = priceQuantity + shipping;

    });

    


        paymentHTML += `
            <div class="summary">
            
                    <div class="calculate">
                        <p> Subtotal <i class="fa-solid fa-circle-question"></i></p>
                        <p> ₱${priceFix(priceQuantity)}</p>
                    </div>
    
                    <div class="calculate">
                        <p> Estimated Tax <i class="fa-solid fa-coins"></i> </p>
                        <p> Free </p>
                    </div>
    
                    <div class="calculate">
                        <p> Estimated Delivery & Handling: </p>
                        <p> ₱${priceFix(shipping)} </p>
                    </div>
    
                    <div class="calculate" id="total-border">
                        <p> Total </p>
                        <p> ₱${priceFix(finalPrice)}</p>
                    </div>
    
                    <button> Checkout </button>
    
            </div>
        `;

        document.querySelector('#right').innerHTML = paymentHTML;

}   

function priceFix(price){

    return (Math.round(price / 100)).toFixed(2);

}