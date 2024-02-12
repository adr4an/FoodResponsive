const blog = [
{
    img: "Images/feature01.webp",
    name: 'Live Wine Function',
    text: 'Unlimited Alcoholic Drink'
}, {
    img: "Images/feature02.webp",
    name: 'Book Dining Table',
    text: 'Money Back Guarantee'
},  {
    img: "Images/feature03.webp",
    name: 'Master Chef Timing ',
    text: 'Always Available Timing'
},  {
    img: "Images/feature04.webp",
    name: 'Balanced Diet Food',
    text: 'Food is The Most ALluring'
}];

export function feature(){

    let html = '';
    const root = document.querySelector('.root');
    
    blog.forEach(index => {
    
        html += `
        <div class="content">
            <img src="${index.img}" alt="">
            <h4> ${index.name} </h4>
            <p> ${index.text} </p>
        </div>
        `;
    
    
    });
    
    root.innerHTML = html;

}

feature();