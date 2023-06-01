console.log('js ok')

//Recupero gli elementi dal DOM
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const gallery = document.querySelector('.gallery');

//Preparo un array con le immagini
const sources = ['img/01.webp' , 'img/02.webp' , 'img/03.webp' , 'img/04.webp' , 'img/05.webp']

//preparo un collegamento per l'HTML
let imageElements = ``;

//creo un tag img per ogni elemento di sources
for(let i = 0; i < sources.length; i++){
    imageElements += `<img scr="${sources[i]}" alt="game${i + 1}">`;
}