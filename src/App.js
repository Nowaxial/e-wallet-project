import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import AddCard from './views/AddCard';
import { useState } from 'react';


function App() {

  const [cards, setCards] = useState([])
  const [selected, setSelected] = useState({})

  
  
  function addCard(card) {
    let newCards = cards.concat(card);
    setCards(newCards);
    
  }

  
  function selectCard(card) {
    setSelected(card);
  }

  return (
    <div className="App">

      <Routes>
        <Route path="/" element ={ <Home cards={cards} selectCard={selectCard} selected={selected}/>} />
        <Route path="/addcard" element={<AddCard  addCard={addCard} />} />
      </Routes>

    </div>
  );
}

export default App; 