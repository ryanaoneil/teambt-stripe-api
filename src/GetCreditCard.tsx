import React from 'react';
import { stripeGet } from './Stripe';
import Stripeconfig from './StripeConfig.json';

interface IGetCreditCard {
  customerId: string,
  creditCardId: string,
}

const GetCreditCard = (props: IGetCreditCard) => {

  const [creditCardInfo, setCreditCardInfo] = React.useState("");

  const handleClick = () => {
    stripeGet({
      endpoint: `customers/${props.customerId}/sources/${props.creditCardId}`,
      api_key: Stripeconfig.api_key,
    }).then((res: any) => {
      console.log(res);
      setCreditCardInfo(JSON.stringify(res));
    })
      .catch((e: any) => { console.log(e) });
  }

  return (
    <div>
      <button onClick={handleClick} > Get Token Info</button>
      <p><b>Customer id is:</b></p>
      <p>{props.customerId}</p>
      <p><b>Credit Card id is:</b></p>
      <p>{props.creditCardId}</p>
      <p><b>Credit Card Info is:</b></p>
      <p>{creditCardInfo}</p>
    </div>
  );
}

export default GetCreditCard;
