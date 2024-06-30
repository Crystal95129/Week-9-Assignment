console.log("testing");
//Create a class named Card 
class Card{
    constructor(suit, rank){
       suit = this.suit;
       rank = this.rank; 
    }
} 

//Create a class named Deck
class Deck{
    constructor(){
        this.cards = [];
        this.suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
        this.ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        this.createDeck();
    }

    //Method to create deck
    createDeck(){
        for(let suit of this.suits){
            for(let rank of this.ranks){
                let card = new Card(suit, rank);
                this.cards.push(card);
            }
        }
    } 

   //Method of shuffle the deck
   shuffleDeck(){
        for(let i = 0; i < this.cards.length; i++){
           let randomIndex = Math.floor(Math.random()*this.cards.length);
           let tempCard = this.cards[i];
           this.cards[i] = this.cards[randomIndex];
           tempCard = this.cards[randomIndex]; 
       }
       
    }
}


//Create a class for Player
class Player{
    construcktor(name){
        name = this.name;
        this.hand = [];
    }


   //Method to take a card from the deck
   takeCard(card){
       this.hand.push(card);
    }

   //Method to play a card from the hand
   playCard(){
       return this.hand.shift();
    }
}



//Create a class for WAR card game
class WAR{
    construcotr(player1Name, player2Name){
        this.player1 = new Player(player1Name);
        this.player2 = new Player(player2Name);
        this.deck = new Deck();
        this.desk.shuffleDeck();
        this.dealCards();
    }

    //Method to deal cards
    dealCards(){
        while(this.deck.cards.length > 0){
            this.player1.takeCard(this.deck.cards.shift());
            this.player2.takeCard(this.deck.cards.shift());
        }
    }

    //Method to compare the cards
    compareCards(player1Card, player2Card){
        if(player1Card.rank === this.player2Card.rank){
            return 0;
        }else if((player1Card.rank === "Ace" && this.player2Card.rank !== "Ace") || 
        player1Card.rank > player2Card.rank){
            return 1;
        }else{
            return 2;
        }
    }

    //Method to start the game
    startGame(){
        let player1Score = 0;
        let player2Score = 0;

        while(this.player1.hand.length > 0 && this.player2.hand.length > 0){
            let player1Card = this.player1.playCard();
            let player2Card = this.player2.playCard();
            console.log(`${this.player1.name} played ${player1Card.rank} of ${player1Card.suit}.`);
            console.log(`${this.player2.name} played ${player2Card.rank} of ${player2Card.suit}.`);

            let result = this.compareCards(player1Card, player2Card);
            if (result === 0){
                console.log("It's a tie!");
            }else if(result === 1){
                console.log(`${this.player1.name} wins the round!`);
                player1Score++;
            }else{
                console.log(`${this.player2.name} wins the round!`);
                player2Score++;
            }
        }
        console.log(`${this.player1.name} has ${player1Score} point(s).`);
        console.log(`${this.player2.name} has ${player2Score} point(s).`);
    }
}