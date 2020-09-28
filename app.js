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
        //loop over cardArray
        for (i = 0; i < cardArray.length; i++) {
            //create card divs
            var card = document.createElement('div')
            var cardFaceDiv = document.createElement('div')
            var cardBackDiv = document.createElement('div')
            card.classList.add('card')
            //create images to be placed in card divs
            var cardFace = document.createElement('img')
            var cardBack = document.createElement('img')
            //pull img and name objects from cardArray and apply to cardFace. Apply extra data to use for matching and switcheable classes for selecting
            cardFace.setAttribute('src', cardArray[i].img)
            cardFace.setAttribute('name', cardArray[i].name)
            cardFace.setAttribute('card-id', i)
            cardFace.classList.add('cardFace', 'cardhide')
            //set cardBack image as default
            cardBack.setAttribute('src', 'assets/images/ball.png')
            cardBack.classList.add('cardBack', 'cardshow')
            //apply images to card divs
            cardFaceDiv.appendChild(cardFace)
            cardBackDiv.appendChild(cardBack)
            //apply card divs to game div
            card.appendChild(cardFaceDiv)
            card.appendChild(cardBackDiv)
            game.appendChild(card)
        }
    }

    

    drawCards()
})

