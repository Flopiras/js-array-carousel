console.log('js ok')

//Recupero gli elementi dal DOM
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const gallery = document.querySelector('.gallery');

//Preparo un array con le immagini
const sources = ['img/01.webp' , 'img/02.webp' , 'img/03.webp' , 'img/04.webp' , 'img/05.webp']

//preparo un collegamento per l'HTML
let imageElements = '';

//creo un tag img per ogni elemento di sources
for(let i = 0; i < sources.length; i++){
    imageElements += `<img src="${sources[i]}" alt="game${i + 1}" class="">`;
}

//inserisco le immagini nel DOM
gallery.innerHTML = imageElements;

//recupero tutte le immagini
const images = document.querySelectorAll('.gallery img');

//preparo la gestione dell'indice
let currentIndex = 0;

//imposto la prima immagine come attiva (block)
images[currentIndex].classList.add('d-block');


//metto in ascolto il next
nextButton.addEventListener('click', function (){
    //rimuovo la classe block all'immagine con indice corrente
    images[currentIndex].classList.remove('d-block');
    
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
})

prevButton.addEventListener('click', function (){

    //rimuovo la classe block all'immagine con indice corrente
    images[currentIndex].classList.remove('d-block');
   
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
})