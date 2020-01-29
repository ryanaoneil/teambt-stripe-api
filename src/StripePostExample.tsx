import React from 'react';
import CreateStripeCustomer from './CreateStripeCustomer';
import CreateCardToken from './CreateCardToken';
import CreateCreditCard from './CreateCreditCard';

const StripePostExample = (props: any) => {


  return (
    <React.Fragment>
      <h4>1.1. Create Stripe Customer</h4>
      <CreateStripeCustomer data={props.customer} setCustomerId={props.setCustomerId} />
      <h4>1.2. Create a token for Credit Card</h4>
      <CreateCardToken data={props.card} setCreditTokenId={props.setCreditTokenId} />
      <h4>1.3. Attach credit card to customer</h4>
      <CreateCreditCard
        data={{
          customerId: props.customerId,
          cardTokenId: props.creditTokenId
        }}
        setCreditId={props.setCreditId}
      />
    </React.Fragment>
  );
}

export default StripePostExample;