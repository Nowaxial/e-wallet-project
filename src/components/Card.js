import chipLight from '../img/chip-light.svg';
import Bitcoin from '../img/vendor-bitcoin.svg';
import Blockchain from '../img/vendor-blockchain.svg';
import Evil from '../img/vendor-evil.svg';
import Ninja from '../img/vendor-ninja.svg';




function Card(props) {

    const { card, selectCard , selected, index} = props;
    var className = "card";

    var cardMakeLogo = Bitcoin

    if (card.cardMake !== undefined) {
      
        className += " " + card.cardMake;

        if (card.cardMake === "Bitcoin") {
            cardMakeLogo = Bitcoin;
        }
         if (card.cardMake === "Blockchain") {
            cardMakeLogo = Blockchain;
        }
        else if (card.cardMake === "Evil") {
            cardMakeLogo = Evil;
        }
        else if (card.cardMake === "Ninja") {
            cardMakeLogo = Ninja;
        }
    }
    if (selected) {
        className+= " selected"  
    }

    function selectThisCard(){
        selectCard(card,index,true)
    }
    
     

    return (
        <section>
        <div className={className} onClick={selectThisCard}>
            <img src={chipLight} alt="chip" className='cardchip'></img>
            <img src={cardMakeLogo} alt="cardMake" className='cardMaker'></img> 
            <h2 className="cardHolderNumber"> {card.cardNumber ? card.cardNumber : "**** **** **** ****"} </h2>
            <h4 className="cardHolder"> {card.cardName ? card.cardName : "YOUR NAME"} </h4>
            <h5 className="cardValidThru"> {card.cardExpiry ? card.cardExpiry : "YY/MM"} </h5>
            <h4 className="cardValidDate"> {card.cardMake ? card.cardMake : "CHOOSE BANK"} </h4>
        </div>
        </section>


    )
}

export default Card;