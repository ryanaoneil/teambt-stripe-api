import React from 'react';
import { stripeGet } from './Stripe';
import Stripeconfig from './StripeConfig.json';

interface IGetBalance {
  customerId: string,
}

const GetBalance = (props: IGetBalance) => {

  const [balance, setBalance] = React.useState("");

  const handleClick = () => {
    stripeGet({
      endpoint: 'balance',
      api_key: Stripeconfig.api_key,
    }).then((res: any) => {
      console.log(res);
      setBalance(JSON.stringify(res));
    })
      .catch((e: any) => { console.log(e) });
  }

  return (
    <div>
      <button onClick={handleClick}>Get Balance of Stripe Customer</button>
      <p><b>customer Id is: </b></p>
      <p>{props.customerId}</p>
      <p><b>customer balance is: </b></p>
      <p>{balance}</p>
    </div>
  );
}

export default GetBalance;