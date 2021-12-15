const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];



//Inserimento immagine grande e scritte
let bigItem = '';

for(let index=0; index < items.length; index++){
    bigItem += `<div class="image">
                    <img src=${items[index]}>
                    <div class="dm-txt">
                        <h3>${title[index]}</h3>
                        <span>${text[index]}</span>
                    </div>
                </div>`
}

const imageContainer = document.getElementById("big-image");
imageContainer.innerHTML = bigItem;

//Mostro una sola immagine
const imageActive = document.querySelector(".image");
imageActive.classList.add('active');


//Mostro solo una scritta
const txtActive = document.querySelector(".dm-txt");
txtActive.classList.add('active');

//Inserimento immagini piccole
let itemsContent = '';

for( let index=0; index < items.length; index++){
    itemsContent += `<div>                      
                        <img src="${items[index]}">
                    </div>
                    `;
}

const smallImages = document.getElementById("small-images");
smallImages.innerHTML = itemsContent;