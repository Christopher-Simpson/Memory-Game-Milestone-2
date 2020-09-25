document.addEventListener('DOMContentLoaded', () => {
    //Card Objects
    const cardObj = [
        {name: 'england', img: 'assets/images/england.png'},
        {name: 'france', img: 'assets/images/france.png'},
        {name: 'ireland', img: 'assets/images/ireland.png'},
        {name: 'japan', img: 'assets/images/japan.png'},
        {name: 'newzealand', img: 'assets/images/newzealand.png'},
        {name: 'southafrica', img: 'assets/images/southafrica.png'}
    ]

    //global variables
    const game = document.querySelector('#game')
    const cardArray = cardObj.concat(cardObj)

    //loop over cardArray and deploy to DOM
    function createGame() {
        for (i = 0; i < cardArray.length; i++) {
            //create a div element for each card
            var card = document.createElement('div')
            //give card css styling
            card.classList.add('card')
            //give data id attributes to cards
            card.setAttribute('data-id', name)
            //set background image of card div to image from array
            card.style.backgroundImage = `url(${item.image})`
            //send to DOM
            game.appendChild(card)

        }
    }

    createGame()
})