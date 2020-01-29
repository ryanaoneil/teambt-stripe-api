import React from 'react';
import { action } from '@storybook/addon-actions';
import StripePostExample from '../StripePostExample';
import CreateStripeCustomer from '../CreateStripeCustomer';
import CreateCardToken from '../CreateCardToken';
import CreateCreditCard from '../CreateCreditCard';

export default {
  title: 'Stripe API POST Example',
  component: StripePostExample,
};

export const CreateANewStripeCustomer = () => {

  const newCustomer1 = {
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

  const [customerId, setCustomerId] = React.useState("");

  return (
    <React.Fragment>
      <CreateStripeCustomer data={newCustomer1}
        setCustomerId={(id) => {
          console.log("new customer id is: ", id);
          action("new customer id is: ", id);
          setCustomerId(id);
        }} />
      <p>Customer Id is: </p>
      <p>{customerId}</p>
    </React.Fragment>
  );
}

export const CreateATokenForCard = () => {

  const newCreditCard1 = {
    number: 4929349297882731,
    expMonth: 1,
    expYear: 2030,
    cvc: 618,
  }

  const [tokenId, setTokenId] = React.useState("");

  return (
    <React.Fragment>
      <b>Stripe will validate card number, changing default number to see error message</b>
      <CreateCardToken data={newCreditCard1}
        setCreditTokenId={(tokenId) => {
          console.log("new token is: ", tokenId);
          action("new token is: ", tokenId);
          setTokenId(tokenId);
        }} />
      <p>Credit card token is: </p>
      <p>{tokenId}</p>
    </React.Fragment>
  );
}

export const AttachACardToCustomer = () => {

  const data = {
    customerId: "cus_GWVqZ2sDC0xCyn",
    cardTokenId: "tok_amex",
  }

  const [cardId, setCardId] = React.useState("");

  return (
    <React.Fragment>
      <CreateCreditCard data={data}
        setCreditId={(cardId) => {
          console.log("New card id is: ", cardId);
          action("New card id is: ", cardId);
          setCardId(cardId);
        }} />
      <p>Credit card Id is: </p>
      <p>{cardId}</p>
    </React.Fragment>
  );
}