//Consegna:

//L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 

//1) mi creo un elemento per il bottone che si trova nel file html.

const bottone = document.querySelector('button');


//2) creo una funzione che mi permetta di cliccare sul bottone per aggiungere una tabella grigliata che avrà classe active.

bottone.addEventListener('click', function(){

    //3) creo il mio elemento per la griglia:
    const gridEl = document.querySelector('section#grid');
    gridEl.classList.add('grid-active');

    
    
})

