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

    //randomize card display(Not my code)
    cardArray.sort(() => 0.5 - Math.random())

    //loop over cardArray and deploy to DOM
    function drawCards() {
        for (i = 0; i < cardArray.length; i++) {
            var card = document.createElement('div')
            var cardFace = document.createElement('img')
            var cardBack = document.createElement('img')
            cardFace.setAttribute('src', cardArray[i].img)
            cardFace.setAttribute('name', cardArray[i].name)
            cardFace.setAttribute('card-id', i)
            cardFace.classList.add('cardshow')
            cardBack.setAttribute('src', 'assets/images/ball.png')
            cardBack.classList.add('cardhide')
            card.appendChild(cardFace)
            card.appendChild(cardBack)
            game.appendChild(card)
        }
    }

    drawCards()
})

