import React from 'react';
import { stripeGet } from './Stripe';
import Stripeconfig from './StripeConfig.json';

interface IGetStripeCustomer {
  customerId: string
}

const GetStripeCustomer = (props: IGetStripeCustomer) => {
  const [customerInfo, setCustomerInfo] = React.useState("");

  const handleClick = () => {
    stripeGet({
      endpoint: `customers/${props.customerId}`,
      api_key: Stripeconfig.api_key,
    }).then((res: any) => {
      console.log(res);
      setCustomerInfo(JSON.stringify(res));
    })
      .catch((e: any) => { console.log(e) });
  }

  return (
    <div>
      <button onClick={handleClick} > Get Customer Info</button>
      <p><b>Customer id is:</b></p>
      <p>{props.customerId}</p>
      <p><b>Customer Info is:</b></p>
      <p>{customerInfo}</p>
    </div>
  );
}

export default GetStripeCustomer;