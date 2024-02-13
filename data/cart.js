export let cart = [{
    id: '01',
    quantity: 1
}, {
    id: '05',
    quantity: 1
}];

export function addToCart(dataBtn) {

    let matchingId;
    cart.forEach(cartItem => {
        if (cartItem.id === dataBtn) {
            matchingId = cartItem;
        }
    });

    if (matchingId) {
        matchingId.quantity += 1;
    } else {
        cart.push({
            id: dataBtn,
            quantity: 1
        })
    }

    console.log(cart);

}


export function removeCart(btnID){
    const newCart = [];  
    
    cart.forEach(item => {
        if (item.id !== btnID) {
            newCart.push(item);
        }
    });

    cart = newCart;

    console.log(cart);

}