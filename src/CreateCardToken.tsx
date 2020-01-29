import React, { useState } from 'react';
import { stripePost } from './Stripe';
import { ICreditCardInfo } from './Stripe';
import Stripeconfig from './StripeConfig.json';

interface ICreateToken {
  data: ICreditCardInfo,
  setCreditTokenId: Function,
}

const CreateCardToken = (props: ICreateToken) => {

  const [cardNumber, setCardNumber] = useState<number>(props.data.number);
  const [expMonth, setExpMonth] = useState<number>(props.data.expMonth);
  const [expYear, setExpYear] = useState<number>(props.data.expYear);
  const [cvc, setCvc] = useState<number>(props.data.cvc);

  const handleCardNumber = (event: any) => {
    let number = event.target.value;
    setCardNumber(Number.parseInt(number));
  }

  const handleExpMonth = (event: any) => {
    let month = event.target.value;
    setExpMonth(Number.parseInt(month));
  }

  const handleExpYear = (event: any) => {
    let year = event.target.value;
    setExpYear(Number.parseInt(year));
  }

  const handleCvc = (event: any) => {
    let cvc = event.target.value;
    setCvc(Number.parseInt(cvc));
  }

  const handleSubmit = () => {
    if (cardNumber && expMonth && expYear && cvc) {
      let body = {
        number: cardNumber,
        expMonth: expMonth,
        expYear: expYear,
        cvc: cvc
      }
      stripePost({ endpoint: "tokens", body: body, api_key: Stripeconfig.api_key })
        .then((resp: any) => {
          console.log(resp);
          let cardToken = resp.id;
          props.setCreditTokenId(cardToken);
        }).catch(e => {
          console.log(e);
        })
    }
  }

  return (
    <div>
      <p>Enter card number</p>
      <input placeholder="1000200030004000" defaultValue={cardNumber} onChange={handleCardNumber} />
      <p>Enter expiration date (mm/yyyy)</p>
      <input placeholder="01" defaultValue={expMonth} onChange={handleExpMonth} />
      <input placeholder="24" defaultValue={expYear} onChange={handleExpYear} />
      <p>Enter CVC</p>
      <input placeholder="618" value={cvc} onChange={handleCvc} />
      <br />
      <br />
      <button onClick={handleSubmit} >Create a token for card</button>
    </div>
  );
}

export default CreateCardToken;
