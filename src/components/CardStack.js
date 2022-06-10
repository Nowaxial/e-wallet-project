import Card from './Card';

function CardStack(props) {
  const {cards, selectCard} = props;
  const cardStack = cards.map((card, index) => { // map through cards
    return (
      <Card key={index} card={card} id={index} index={index} inCardStack selectCard={selectCard} />
    )
  });

  return (
    <section className="cardStack-component">
      <section className="cardStack-section">
      { cardStack }
      </section>
      </section>
  )
}

export default CardStack;