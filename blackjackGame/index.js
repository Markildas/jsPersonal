let player={
    name: "Marek",
    creds: 420
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let startButtonEl = document.getElementById("start-button-el")

playerEl.textContent = player.name + ": $" + player.creds

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    startButtonEl.textContent = "ZAČÍT PARTIČKU"
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Karty: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Součet: " + sum

    if (sum <= 20) {
        message = "Chceš si líznout další kartu?"
    } else if (sum === 21) {
        message = "Máš Blackjack, vyhráls!"
        startButtonEl.textContent = "GG!"
        hasBlackJack = true
    } else {
        message = "Dojebals to, snad to vyjde příště."
        startButtonEl.textContent = "ZNOVAAA!"
        isAlive = false
    }

    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}
