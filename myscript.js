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
let elementActive = 0;

for(let index=0; index < items.length; index++){
    bigItem += `<div class="image" id="item-${index}">
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
let imageActive = document.getElementById("item-"+elementActive);
imageActive.classList.add('active');


//Mostro solo una scritta
const txtActive = document.querySelector(".dm-txt");
txtActive.classList.add('active');

//Inserimento immagini piccole
let smallItemsContent = '';

for( let index=0; index < items.length; index++){
    if(index==0){
        smallItemsContent += `<div class="dm-sm-opacity-off" id="thumbnailsitem-${index}">                     
                        <img src="${items[index]}">
                    </div>
                    `;
    }else{
        smallItemsContent += `
        <div class="dm-sm-opacity-off" id="thumbnailsitem-${index}">
            <img src="${items[index]}">
        </div>
        `;
    }
    
}

//Inserisco le immagini piccole
const smallImages = document.getElementById("small-images");
smallImages.innerHTML = smallItemsContent;

//immagini opacità attiva
let smImageActive = document.getElementById("thumbnailsitem-"+elementActive);


//variabili per le frecce
const up = document.querySelector('.dm-arrow-up');
const down = document.querySelector('.dm-arrow-down');

/*click freccia GIU' rimuovo una classe dall'immagine precedente e la aggiungo alla successiva
sia per l'immagine grande che per quelle piccole*/
down.addEventListener('click', function(){
    elementActive++;
    if(elementActive > 4){
        elementActive = 0;
    }
    imageActive.classList.remove("active");
    imageActive = document.getElementById("item-"+elementActive);
    imageActive.classList.add("active");
    smImageActive.classList.remove("dm-sm-opacity-on");
    smImageActive = document.getElementById("thumbnailsitem-"+elementActive);
    smImageActive.classList.add("dm-sm-opacity-on");
});


/*click freccia SU rimuovo una classe dall'immagine precedente e la aggiungo alla successiva
sia per l'immagine grande che per quelle piccole*/
up.addEventListener('click', function(){
    elementActive--;
    if(elementActive < 0){
        elementActive = 4;
    }
    imageActive.classList.remove("active");
    imageActive = document.getElementById("item-"+elementActive);
    imageActive.classList.add("active");
    smImageActive.classList.remove("dm-sm-opacity-on");
    smImageActive = document.getElementById("thumbnailsitem-"+elementActive);
    smImageActive.classList.add("dm-sm-opacity-on");
});



