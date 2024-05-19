//Consegna:

//L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 

//1) mi creo un elemento per il bottone che si trova nel file html.

const bottone = document.querySelector('button');


//2) creo una funzione che mi permetta di cliccare sul bottone per aggiungere una tabella grigliata che avrà classe active.

bottone.addEventListener('click', function(){

    //3) creo il mio elemento per la griglia:
    const gridEl = document.querySelector('section#grid');
    gridEl.classList.add('grid-active');

      //Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe.

      //4) Creo un ciclo for con indice uguale a 1 che sia minore uguale di 100 e che aumenti ogni volta di 1.

      for(let i= 1 ; i <= 100; i++){
      
          //5) Creo un elemento per le caselle:

          const cellEl = document.createElement('article');

          //6) aggiungo le caratteristiche che mi servono:

              //- collego l'elemento ad una classe creata con css.

              cellEl.classList.add('cell');

              
              //Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

                 //- creo una funzione che mi permette di colorare la casella quando ci clicco sopra.

                 cellEl.addEventListener('click', function(){
                    cellEl.classList.add('cell-active');
                 })

              //- lo aggiungo ad un nodo parents che è quello della griglia.
    
              gridEl.appendChild(cellEl);
        }
      


    
})

