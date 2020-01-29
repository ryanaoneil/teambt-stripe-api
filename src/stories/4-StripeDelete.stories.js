import React from 'react';
import { action } from '@storybook/addon-actions';
import StripeDeleteExample from '../StripeDeleteExample';
import CreateStripeCustomer from '../CreateStripeCustomer';
import DeleteStripeCustomer from '../DeleteStripeCustomer';
import CreateCreditCard from '../CreateCreditCard';
import DeleteCreditCard from '../DeleteCreditCard';

export default {
  title: "Stripe API DELETE Examples",
  component: StripeDeleteExample,
}

var newCustomer1 = {
  firstName: "Alex",
  lastName: "Smith",
  address: "1000 State Street",
  city: "Smalltown",
  state: "CA",
  country: "USA",
  zipcode: "91000",
  email: "as@small.com",
  phone: "8881230000",
  companyName: "Bloom",
  webUrl: "www.bloom.net",
}

export const DeleteAStripeCustomer = () => {

  const [customerId, setCustomerId] = React.useState("");

  return (
    <React.Fragment>
      <p>Create a new customer first</p>
      <CreateStripeCustomer data={newCustomer1}
        setCustomerId={(id) => {
          console.log("new customer id is: ", id);
          action("new customer id is: ", id);
          setCustomerId(id);
        }}
      />
      <p>Delete customner created above</p>
      <DeleteStripeCustomer
        customerId={customerId}
      />
    </React.Fragment>
  );
}

export const DeleteACard = () => {
  const [customerId, setCustomerId] = React.useState("");
  const [cardId, setCardId] = React.useState("");

  return (
    <React.Fragment>
      <p>Create a new customer first</p>
      <CreateStripeCustomer data={newCustomer1}
        setCustomerId={(id) => {
          console.log("new customer id is: ", id);
          setCustomerId(id);
        }}
      />
      <p><b>Customer id is: </b></p>
      <p>{customerId}</p>

      <p>Attach a card</p>
      <CreateCreditCard data={{
        customerId: customerId,
        cardTokenId: "tok_amex"
      }}
        setCreditId={(cardId) => {
          console.log("New card id is: ", cardId);
          setCardId(cardId);
        }} />
      <br />
      <hr />
      <p>Delete customner created above</p>
      <DeleteCreditCard
        customerId={customerId}
        creditCardId={cardId}
      />
    </React.Fragment>
  );
}
