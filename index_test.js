//Unit test with Chai

var expect = chai.expect;
describe('WAR', function(){
    let war;
    this.beforeEach(function(){
        war = new war('Crystal', 'Yun');
    });
    it('should have two players', function(){
        expect(war.player1.name).to.equal('Crystal');
        expect(war.player2.name).to.equal('Yun');
    });

    it('should have a deck of cards', function(){
        expect(war.deck.cards.length).to.equal(52);
    });

    it('should deal 26 cards to each player', function(){
        expect(war.player1.hand.length).to.equal(26);
        expect(war.player2.hand.length).to.equal(26);
    });

    it('should compare two cards', function(){
        let card1 = new Card('Hearts', 2);
        let card2 = new Card('Diamonds', 3);
        let result = war.compareCards(card1, card2);
        expect(result).to.equal(2);
    });
}
);

//Calling the WAR game

let war = new WAR("Crystal, Yun");
war.startGame(); 