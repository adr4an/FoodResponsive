const categories  = [{
    img: 'Images/food-cat1.avif',
    top: 'Snacks',
    mid: 'Hot',
    low: 'Burger'
}, {
    img: 'Images/food-cat2.avif',
    top: 'Snacks',
    mid: 'French', 
    low: 'Fries'
}, {
    img: 'Images/food-cat3.avif',
    top: 'Snacks',
    mid: 'Soft', 
    low: 'Drinks'
}, {
    img: 'Images/food-cat4.avif',
    top: 'Snacks',
    mid: 'Potato', 
    low: 'Chips'
}];

const root = document.querySelector('#root');

export function saving(){


    let html = '';

    categories.forEach(index => {

        html += `
        <div class="content-1">
                <img src="${index.img}" alt="">
                <div class="details">
                    <h4> ${index.top} </h4>
                    <div class="low">
                        <h2> ${index.mid} </h2>
                        <h2> <span id="burger"> ${index.low} </span> </h2>
                    </div>
                </div>
        </div>
        `;

    });

    root.innerHTML = html;

};


saving();