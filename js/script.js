console.log('js ok')

//Recupero gli elementi dal DOM
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const gallery = document.querySelector('.gallery');

const thumbnails = document.querySelector('.thumbnails');

//Preparo un array con le immagini
const sources = ['img/01.webp' , 'img/02.webp' , 'img/03.webp' , 'img/04.webp' , 'img/05.webp']

//preparo un collegamento per l'HTML
let imageElements = '';

let thumbnailsItems = ``;

//creo un tag img per ogni elemento di sources
for(let i = 0; i < sources.length; i++){
    imageElements += `<img src="${sources[i]}" alt="game${i + 1}" class="">`;

    thumbnailsItems += `<img src="${sources[i]}" alt="game${i + 1}" class="mx-1">`
}

//inserisco le immagini nel DOM
gallery.innerHTML = imageElements;

thumbnails.innerHTML = thumbnailsItems;

//recupero tutte le immagini
const images = document.querySelectorAll('.gallery img');
const imagesThumbnails = document.querySelectorAll('.thumbnails img');

//preparo la gestione dell'indice
let currentIndex = 0;

//imposto la prima immagine come attiva (block)
images[currentIndex].classList.add('d-block');

//imposto la prima immagine come attiva (border)
imagesThumbnails[currentIndex].classList.add('bordered');


//metto in ascolto il next
nextButton.addEventListener('click', function (){
    //rimuovo la classe block all'immagine con indice corrente
    images[currentIndex].classList.remove('d-block');

    //rimuovo la classe border all'immagine con indice corrente
    imagesThumbnails[currentIndex].classList.remove('bordered');
    
    //SE (quando clicco il bottone sono all'ultima immagine, la prossima dovrà essere la prima della lista)
    if(currentIndex === images.length - 1){
        currentIndex = 0;
    }
    //ALTRIMENTI incremento l'indice corrente
    else{
        currentIndex++;
    }
    
    //aggiungo la classe block alla nuova immagine corrente
    images[currentIndex].classList.add('d-block');

    //aggiungo la classe border alla nuova immagine corrente
    imagesThumbnails[currentIndex].classList.add('bordered');
})

prevButton.addEventListener('click', function (){

    //rimuovo la classe block all'immagine con indice corrente
    images[currentIndex].classList.remove('d-block');

    //rimuovo la classe border all'immagine con indice corrente
    imagesThumbnails[currentIndex].classList.remove('bordered');
   
    //SE (quando clicco il bottone sono alla prima immagine, la prossima dovrà essere l'ultima' della lista)
    if(currentIndex === 0){
        currentIndex = images.length - 1;
    }
    //ALTRIMENTI decremento l'indice corrente
    else{
        currentIndex--;
    }

    //aggiungo la classe block alla nuova immagine corrente
    images[currentIndex].classList.add('d-block');

    //aggiungo la classe border alla nuova immagine corrente
    imagesThumbnails[currentIndex].classList.add('bordered');
})