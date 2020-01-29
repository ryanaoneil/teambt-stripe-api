import React, { useState } from 'react';
import StripePostExample from './StripePostExample';
import StripeGetExample from './StripeGetExample';
import StripeDeleteExample from './StripeDeleteExample';

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

var newCreditCard1 = {
  number: 4929349297882731,
  expMonth: 1,
  expYear: 2030,
  cvc: 618,
}

const App = (props: any) => {

  const [customerId, setCustomerId] = useState("");
  const [creditTokenId, setCreditTokenId] = useState("tok_amex");
  const [creditCardId, setCreditCardId] = useState("");
  return (
    <div>
      <h1> Stripe API</h1>
      <h2>1. POST</h2>
      <StripePostExample
        customer={newCustomer1}
        card={newCreditCard1}
        customerId={customerId}
        setCustomerId={setCustomerId}
        creditTokenId={creditTokenId}
        setCreditTokenId={setCreditTokenId}
        setCreditId={setCreditCardId}
      />
      <hr />
      <h2>2. GET</h2>
      <StripeGetExample
        customerId={'cus_GWVWNR6J0ddIRA'}
        creditCardId={'card_1FzSUzF2Ms6BsudzBSKxgEWD'}
      />
      <hr />
      <h2>3. DELETE</h2>
      <StripeDeleteExample
        customerId={customerId}
        creditCardId={creditCardId}
      />

    </div>
  );
}

export default App;