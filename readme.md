0. recupero gli elementi dal DOM
   - recupero gli arrows
   - recupero la gallery
   - recupero il thumbnails
1. preparo un'array con le immagini per il carosello
   - preparo un collegamento per l'html
   - creo un tag immagine per ogni elemento dell'array
   - inserisco le immagini nel DOM
2. recupero le immagini
   - preparo la gestione dell'indice
   - imposto la prima immagine come attiva
3. metto in ascolto il next
   - rimuovo la classe block all'immagine con indice corrente
   - incremento l'indice corrente
   - aggiungo la classe block alla nuova immagine corrente
4. metto in ascolto il prev
   - rimuovo la classe block all'immagine con indice corrente
   - decremento l'indice corrente
   - aggiungo la classe block alla nuova immagine corrente

**BONUS**

3. metto in ascolto il next
   - **SE** (quando clicco il bottone sono all'ultima immagine, la prossima dovrà essere la prima della lista)
   - **ALTRIMENTI** incremento l'indice corrente
4. metto in ascolto il prev

- **SE** (quando clicco il bottone sono alla prima immagine, la prossima dovrà essere l'ultima della lista)
  - **ALTRIMENTI** decremento l'indice corrente

**BONUS 2**

5. recupero l'elemento dal DOM
6. creo un collegamento con l'HTML
7. inserisco le immagini nel thumbnails
   - quando è attiva l'immagine del carousel, la stessa immagine nel thumbnails deve avere il bordo
     - seleziono le immagini del thumbnails
     - metto in ascolto il next - rimuovo la classe border all'immagine con indice corrente - incremento l'indice corrente - aggiungo la classe block alla nuova immagine corrente
       -metto in ascolto il prev - rimuovo la classe block all'immagine con indice corrente - decremento l'indice corrente - aggiungo la classe block alla nuova immagine corrente
