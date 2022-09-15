const tShirts = [
    {
        name: "T-shirt Nike",
        img: "imgs/camiseta-02.jpg",
        description: "T-shirt Nike - Masculine",
        price: 69.90,
        promotion: 0,
        tag: ["t-shirt"]
    },
    {
        name: "T-shirt Nike",
        img: "imgs/camiseta-03.jpg",
        description: "T-shirt Nike - Masculine",
        price: 49.90,
        promotion: 0,
        tag: ["t-shirt", "new"]
    },
    {
        name: "T-shirt Nike",
        img: "imgs/camiseta-04.jpg",
        description: "T-shirt Nike - Masculine",
        price: 59.90,
        promotion: 0,
        tag: ["t-shirt"]
    },
    {
        name: "T-shirt Nike",
        img: "imgs/camiseta-05.jpg",
        description: "T-shirt Nike - Masculine",
        price: 69.90,
        promotion: 0,
        tag: ["t-shirt"]
    },
    {
        name: "Basic T-shirts",
        img: "imgs/camisetas-02.jpg",
        description: "Basic T-shirts - Masculine",
        price: 89.90,
        promotion: 0,
        tag: ["t-shirt", "new"]
    },
];

getItems();
function getItems(){
    const container = document.querySelector("section.container");
    const html = tShirts.map(camiseta => {
        let promotion;
        let tag;
        if(camiseta.promotion > 0){
           promotion = `<p class="promotion">${camiseta.promotion}</p>`
        } else if (camiseta.type){
            `<p class="new">${camiseta.tag}</p>`
        }
        return `
            <article class="item-row">
                <div class="flex-center"><img src="${camiseta.img}" alt="${camiseta.name}"></div>
                <p class="price">${camiseta.price.toLocaleString()}</p>
                <p class="description">${camiseta.description}<a href="#" class="fa fa-cart-plus"></a></p>
            </article>
        `;
    }).join('');
    console.log(html)
    container.innerHTML = html;
};
function setPromotionTag(){
    const html = document.querySelectorAll("article.item-row");
    tShirts.forEach(tshirt => {
        if(tshirt.promotion > 0){
        }
    });
};