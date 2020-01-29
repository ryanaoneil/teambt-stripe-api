import React from 'react';
import { IAttachCreditCardToCustomer } from './Stripe';
import { stripePost } from './Stripe';
import Stripeconfig from './StripeConfig.json';

interface ICreateCreditCard {
  data: IAttachCreditCardToCustomer,
  setCreditId: Function,
}

const CreateCreditCard = (props: ICreateCreditCard) => {

  const handleClick = () => {
    stripePost({
      endpoint: `customers/${props.data.customerId}/sources`,
      body: { cardTokenId: props.data.cardTokenId },
      api_key: Stripeconfig.api_key,
    }).then((resp: any) => {
      console.log(resp);
      props.setCreditId(resp.id);
    }).catch(e => {
      console.log(e);
    })
  }

  return (
    <div>
      <button onClick={handleClick}>Attach Credit Card</button>
    </div>
  );
}

export default CreateCreditCard;