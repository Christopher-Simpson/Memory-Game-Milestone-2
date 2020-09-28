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

    //randomize card display
    cardArray.sort(() => 0.5 - Math.random())

    //loop over cardArray and deploy to DOM
    function createGame() {
        cardArray.forEach((item) => {
            var card = document.createElement('div')
            card.classList.add('card')
            card.setAttribute('data-name', `${item.name}`)
            card.style.backgroundImage = `url(${item.img})`
            game.appendChild(card)
            })
        }
    

    createGame()
})