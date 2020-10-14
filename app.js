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
    var selectedArray = []

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
            cardFaceDiv.classList.add('face')
            cardBackDiv.classList.add('back')
            //create images to be placed in card divs
            var cardFace = document.createElement('img')
            var cardBack = document.createElement('img')
            //set up frontside of card. Pull img and name objects from cardArray, apply data attributes and css classes
            cardFace.setAttribute('src', cardArray[i].img)
            cardFace.setAttribute('name', cardArray[i].name)
            cardFace.classList.add('cardimage', 'frontside')
            //set up backside of card
            cardBack.setAttribute('src', 'assets/images/ball.png')
            cardBack.classList.add('cardimage', 'backside')
            //apply images to card divs
            cardFaceDiv.appendChild(cardFace)
            cardBackDiv.appendChild(cardBack)
            //apply card divs to game div
            card.appendChild(cardFaceDiv)
            card.appendChild(cardBackDiv)
            game.appendChild(card)
            //add event listener to cards
            card.addEventListener('click', flipCard, false)
        }
    }
   
    //Apply animations and selection limit to clicked cards
     function flipCard(event) {
        //select card divs on click
        let selectedDiv = event.currentTarget;
        //select the div with the frontside image element
        let selectedCard = selectedDiv.firstChild;
        //select the image within that div
        let thisCard = selectedCard.firstChild;
        //send image to be stored into a new array
        selectedArray.push(thisCard);
        //animate flipping on selectedDiv
        selectedDiv.classList.add('flipover');
        console.log('the image asset is:', thisCard);
        console.log('the array is:', selectedArray);
        //condition on when to compare cards
        console.log(`SELECTEDARRAY: ${selectedArray.length}`);
        if (selectedArray.length == 2) {
            compare();
        }
    }

    function compare() {
        let firstGuess = selectedArray[0];
        let firstGuessDiv = firstGuess.parentElement;
        let firstCard = firstGuessDiv.parentElement;
        let secondGuess = selectedArray[1];
        let secondGuessDiv = secondGuess.parentElement;
        let secondCard = secondGuessDiv.parentElement;
        console.log('this is firstGuess', firstGuess);
        console.log('this is secondGuess', secondGuess);
        console.log('this is firstCard', firstCard);
        console.log('this is secondCard', secondCard);
        if (firstGuess === secondGuess) {
            firstCard.classList.add('matchedcard');
            secondCard.classList.add('matchedcard');
        }
    }

    

    drawCards()
})

