import Top from '../components/Top';
import CardForm from '../components/CardForm';
import Card from '../components/Card';
import { useState } from 'react';



function AddCard(props) {

    const {addCard} = props;
    const [template, setTemplate] = useState({})

    return ( 
        <section>
        <Top title='ADD NEW BANK CARD'  />
        <Card card={template} /> 
        <CardForm addCard={addCard} setTemplate={setTemplate}/>
        </section>
    );
}



export default AddCard;