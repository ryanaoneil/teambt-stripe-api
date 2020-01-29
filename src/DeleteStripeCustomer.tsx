import React from 'react';
import { stripeDelete } from './Stripe';
import Stripeconfig from './StripeConfig.json';

interface IDeleteStripeCustomer {
  customerId: string,
}

const DeleteStripeCustomer = (props: IDeleteStripeCustomer) => {

  const [customerInfo, setCustomerInfo] = React.useState("");

  const handleClick = () => {
    stripeDelete({
      endpoint: `customers/${props.customerId}`,
      api_key: Stripeconfig.api_key,
    })
      .then((res: any) => {
        console.log(res);
        setCustomerInfo(JSON.stringify(res));
      })
      .catch((e: any) => { console.log(e) });
  }

  return (
    <div>
      <button onClick={handleClick} > Delete Customer</button>
      <p><b>Customer id is:</b></p>
      <p>{props.customerId}</p>
      <p><b>Info of deleted customer is:</b></p>
      <p>{customerInfo}</p>
    </div>
  );
}

export default DeleteStripeCustomer;