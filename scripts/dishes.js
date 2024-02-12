const dishes = [
{
    image: 'Images/product-01.webp',
    productName: 'Green Pizza',
    price: 999,
    id: '01',
    category: 'Snacks'
}, {
    image: 'Images/product-02.webp',
    productName: 'Slice Pizza',
    price: 220,
    id: '02',
    category: 'Snacks'
}, {
    image: 'Images/product-04.webp',
    productName: 'Fried Chicken',
    price: 599,
    id: '03',
    category: 'Lunch'
}, {
    image: 'Images/product-07.webp',
    productName: 'Jolly Hotdog',
    price: 230,
    id: '04',
    category: 'Snacks'
}, {
    image: 'Images/product-03.webp',
    productName: 'Healthy Pasta',
    price: 439,
    id: '05',
    category: 'Dinner'
}, {
    image: 'Images/product-05.webp',
    productName: 'Fresh Vegetables',
    price: 385,
    id: '06',
    category: 'Breakfast Dinner'
}, {
    image: 'Images/product-08.webp',
    productName: 'Healthy Vegetables',
    price: 395,
    id: '07',
    category: 'Breakfast'
}, {
    image: 'Images/product-06.webp',
    productName: 'Pure Vegetarian',
    price: 499,
    id: '08',
    category: 'Breakfast'
}
];

export function dishChoices(){
    let html = '';
    const dish_food = document.querySelector('.food-menu');

    dishes.forEach(item => {

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
                        <button> Deliver Now </button>
                    </div>
            </div>
        `;

    });

    dish_food.innerHTML = html;

};