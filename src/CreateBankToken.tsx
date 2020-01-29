import React, { useState } from 'react';
import { stripePost, IBankAccountInfo } from './Stripe';
import Stripeconfig from './StripeConfig.json';


const CreateBankToken = () => {


  const handleClick = () => {

  }

  return (
    <div>
      <button onClick={handleClick}>Create a token for bank account</button>
    </div>
  );

}

export default CreateBankToken;