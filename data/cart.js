export let cart = JSON.parse(localStorage.getItem('Item'));

    if (!cart) {
        cart = [{
            id: '07',
            quantity: 1
        }];
    }

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

    saveToStorage();

}


export function removeCart(btnID){
    const newCart = [];  
    
    cart.forEach(item => {
        if (item.id !== btnID) {
            newCart.push(item);
        }
    });

    cart = newCart;
    saveToStorage();

}

export function saveToStorage() {

    localStorage.setItem('Item', JSON.stringify(cart));

}