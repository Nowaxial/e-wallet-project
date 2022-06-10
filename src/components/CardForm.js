import { useNavigate } from "react-router-dom";

function CardForm(props) {

    const navigate = useNavigate();

    const { addCard, setTemplate } = props;

    
    function addingCard() {
        
        addCard({
            cardNumber: document.getElementById("cardnumber").value,
            cardName: document.getElementById("cardname").value,
            cardExpiry: document.getElementById("validthru").value,
            cardCvv: document.getElementById("ccv").value,
            cardMake: document.getElementById("vendor").value,
        })
        navigate("/")

    }

     
    function updateAddCard(){
        const card ={
            cardNumber: document.getElementById("cardnumber").value,
            cardName: document.getElementById("cardname").value,
            cardExpiry: document.getElementById("validthru").value,
            cardCvv: document.getElementById("ccv").value,
            cardMake: document.getElementById("vendor").value,
        }
    setTemplate(card); 
    }

    return (
        <div>
            <div className="cardnumber">
                <label> Card Number </label>
                <input onChange={updateAddCard} id="cardnumber" type="text" name="cardnumber" placeholder="Card Number" maxLength="19"  />
            </div>
            
            <div className="cardname">
                <label> Cardholder Name </label>
                <input onChange={updateAddCard} id="cardname" type="text" name="cardname" placeholder="Firstname & Lastname" maxLength="27" />
            </div>
            
            <div className="validCcvName">
                <label className="validText"> Valid thru</label>
                <label className="ccvText" maxLength='3'>CCV</label>
            </div>

            <div className="validCcvInput">
                <input onChange={updateAddCard} id="validthru" type="text" name="validthru" placeholder="Valid Thru" maxLength="5" />
                <input onChange={updateAddCard} id="ccv" type="text" name="CCV" placeholder="CCV" maxLength="3" />
            </div>
            
            <div className="vendors">
                <label> Vendor </label>
                <select onChange={updateAddCard} name="vendor" id="vendor">
                    <option value="">Choose Bank</option>
                    <option value="Bitcoin">Bitcoin Inc</option>
                    <option value="Ninja">Ninja Bank</option>
                    <option value="Blockchain">Block Chain Inc</option>
                    <option value="Evil">Evil Corp</option>
                </select>    
            </div>
            <button className="addButton" type = "button" onClick={addingCard} >ADD CARD</button>
        </div>

    )
}

export default CardForm;