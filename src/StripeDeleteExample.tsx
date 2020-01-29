import React from 'react';
import DeleteStripeCustomer from './DeleteStripeCustomer';
import DeleteCreditCard from './DeleteCreditCard';

const StripeDeleteExample = (props: any) => {

  return (
    <React.Fragment>
      <h4>3.1. Delete a customer</h4>
      <DeleteStripeCustomer customerId={props.customerId} />
      <h4>3.2. Delete a token</h4>
      <b>CAN NOT DELETE A TOKEN</b>
      <h4>3.3. Delete a card</h4>
      <DeleteCreditCard customerId={props.customerId} creditCardId={props.creditCardId} />
    </React.Fragment>
  );
}

export default StripeDeleteExample;