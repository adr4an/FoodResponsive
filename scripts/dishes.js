
export function dishes(){

document.addEventListener("DOMContentLoaded", function() {
        const dishes = document.getElementById("food");

        const dishesData = [
            { 
                name: "Fresh Green Orange Pizza",
                price: "$12.35",
                image: "Images/product-01.webp",
                category: "Snacks"
            },
            { 
                name: "Slice Pizza",
                price: "$10.55",
                image: "Images/product-02.webp",
                category: "Snacks"
            },
            { 
                name: "Spaghetti",
                price: "$5.99",
                image: "Images/product-03.webp",
                category: "Lunch"
            },
            { 
                name: "Fried Chicken With Potato",
                price: "$7.50",
                image: "Images/product-04.webp",
                category: "Lunch"
            },
            { 
                name: "Fresh Vegetables",
                price: "$8.25",
                image: "Images/product-05.webp",
                category: "Dinner Breakfast"
            },
            { 
                name: "Vegetables",
                price: "$8.25",
                image: "Images/product-06.webp",
                category: "Dinner Breakfast"
            },
            { 
                name: "Jumbo Hotdog",
                price: "$6.15",
                image: "Images/product-07.webp",
                category: "Snacks"
            },
            { 
                name: "Pancit Bihon",
                price: "$3.49",
                image: "Images/product-08.webp",
                category: "Dinner"
            }
        ];

        dishesData.forEach(dish => {
            const div = document.createElement("div");
            div.classList.add("food-content", "mix", dish.category);
            div.innerHTML = `
                <img src="${dish.image}" alt="">
                <div class="details">
                    <p>${dish.name}</p>
                    <div class="stars-line">
                        ${Array.from({length: 5}, () => `<i class="fa-solid fa-star"></i>`).join('')}
                    </div>
                    <p>Price : ${dish.price}</p>
                </div>
            `;
            dishes.appendChild(div);
        });

        mixitup('.food-menu');
    });


};