// Type: ([A], A) => [A]
export function without(array, element) {
     return [...array.slice(0, array.indexOf(element)), ...array.slice(array.indexOf(element) + 1)]
}

export function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
    return array
}

export function getRandomCard(deck) {
    shuffle(deck)
    return deck.pop()
}

export function getCard(deck, card) {
    let index = deck.indexOf(card)
    return deck.splice(index, 1)[0]
}

export function player1Strategy(deck) {
    let card = getRandomCard(deck)
    console.log("Player 1 plays " + card)
    return card
}

export function player2Strategy(deck, card) {
    let newCard = getCard(deck, card)
    console.log("Player 2 plays " + card)
    return newCard
}

export function game() {
    let bountyDeck = [1, 2, 3, 4, 5]
    let player1Deck = [1, 2, 3, 4, 5]
    let player2Deck = [1, 2, 3, 4, 5]

    let player1Score = 0
    let player2Score = 0

    while(bountyDeck.length > 0) {
        console.log("*** New turn! ***")
        let bounty = getRandomCard(bountyDeck)
        console.log("Bounty is " + bounty) 
        let player1Card = player1Strategy(player1Deck)
        let player2Card = player2Strategy(player2Deck, bounty)
        if(player1Card > player2Card) { player1Score += bounty }
        if(player2Card > player1Card) { player2Score += bounty }
        console.log()
    }

    console.log("Score: " + player1Score + " - " + player2Score)
    if(player1Score > player2Score) { console.log("Player 1 wins!") }
    else if(player2Score > player1Score) { console.log("Player 2 wins!") }
    else { console.log("No winner.") }
}


export function endMessage(player1Score, player2Score) {
    return ""
}

export function turnMessage(state) {
    return ""
}

export function nextState(state) {
    return {
        bountyDeck: state.bountyDeck,
        player1Deck: state.player1Deck,
        player2Deck: state.player2Deck,
        bounty: state.bounty,
        player1Card: state.player1Card,
        player2Card: state.player2Card,
        player1Score: state.player1Score,
        player2Score: state.player2Score
    }
}
