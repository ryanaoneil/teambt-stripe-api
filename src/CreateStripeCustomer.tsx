import React from 'react';
import { stripePost } from './Stripe';
import { IStripeCustomer } from './Stripe';
import Stripeconfig from './StripeConfig.json';

interface ICreateStripeCustomer {
  data: IStripeCustomer,
  setCustomerId: Function,
}

const CreateStripeCustomer: React.SFC<ICreateStripeCustomer> = (props) => {

  const handleOnClick = () => {
    stripePost({
      endpoint: 'customers',
      body: props.data,
      api_key: Stripeconfig.api_key,
    }).then((resp: any) => {
      console.log(resp);
      let customerId = resp.id;
      props.setCustomerId(customerId);
    }).catch(e => {
      console.log(e);
    })
  }

  return (
    <div>
      <button onClick={handleOnClick}>Create Customer</button>
    </div >
  );
}

export default CreateStripeCustomer;
