const cardContainer = document.querySelector(".card-container");

const cards = [
    {
    img : "./img/educationWebsite.png",
    link: "./EduPlatform/index.html"
    },
    {
    img : "./img/restaurant.png",
    link: "./Restaurant/index.html"
    }
]

newCard();

function newCard(){
    cards.forEach((card)=>{
        const cardImage = card.img;
        const cardLink = card.link;
        // console.log(cardImage);

        const cardEls = document.createElement("div");
        cardEls.classList.add("card");

        cardEls.innerHTML = `
            <div class="img-card"></div>
            <a href="${cardLink}">Live Demo</a>
        `;
        

        cardContainer.appendChild(cardEls);
        const imgUrl = cardEls.querySelector(".img-card");
        imgUrl.style.backgroundImage = `url(${cardImage})`;
    });
}
