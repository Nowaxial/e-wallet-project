

import Top from '../components/Top';
import CardStack from '../components/CardStack';
import Card from '../components/Card';
import { useNavigate } from "react-router-dom";


function Home(props) {
    let cardsWithoutSelected = props.cards.filter(card => card.cardNumber!==props.selected.cardNumber)
    const navigate = useNavigate();
    return (
        <section>
            <Top title='E-Wallet' />
            <h5>ACTIVE CARD</h5>
            <Card card={props.selected}  /> 
            <CardStack cards={cardsWithoutSelected} inCardStack selectCard={props.selectCard} selected={props.selected}  />
            <button className="addNewButton" onClick={() => navigate(`/addcard`)}>Add a new Card</button>   
        </section>

    );
}

export default Home;











/* import Top from '../components/Top';
import CardStack from '../components/CardStack';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Home(props) {
    
    return (
        <section>
            <Top title ='E-Wallet' />
            <Card card={props.selected} removeCard={props.removeCard} selected={props.selected} /> 
            <CardStack cards={cardsWithoutSelected} selectCard={props.selectCard}  />
            <Link to="/addcard">Add a new card</Link>

        </section>

    );
}



export default Home; */