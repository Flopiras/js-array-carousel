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

//impossto la prima immagine come attiva (block)
images[currentIndex].classList.add('d-block');

//metto in ascolto il next
nextButton.addEventListener('click', function (){

//rimuovo la classe block all'immagine con indice corrente
images[currentIndex].classList.remove('d-block');
   
//incremento l'indice corrente
currentIndex++;

//aggiungo la classe block alla nuova immagine corrente
images[currentIndex].classList.add('d-block');


})