import React from 'react';
import { stripeDelete } from './Stripe';
import Stripeconfig from './StripeConfig.json';

interface IDeleteACard {
  customerId: string,
  creditCardId: string,
}

const DeleteCreditCard = (props: IDeleteACard) => {

  const [cardInfo, setCardInfo] = React.useState("");

  const handleClick = () => {
    stripeDelete({
      endpoint: `customers/${props.customerId}/sources/${props.creditCardId}`,
      api_key: Stripeconfig.api_key,
    })
      .then((res: any) => {
        console.log(res);
        setCardInfo(JSON.stringify(res));
      })
      .catch((e: any) => { console.log(e) });
  }

  return (
    <div>
      <button onClick={handleClick} > Delete a Credit Card</button>
      <p><b>Credit card id is:</b></p>
      <p>{props.creditCardId}</p>
      <p><b>Info of deleted card is:</b></p>
      <p>{cardInfo}</p>
    </div>
  );
}

export default DeleteCreditCard;