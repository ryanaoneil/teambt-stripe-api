import React from 'react';
import { stripeGet } from './Stripe';
import Stripeconfig from './StripeConfig.json';

const GetAllCustomers = (props: any) => {

  const [customers, setCustomers] = React.useState([]);

  const handleOnClick = () => {
    stripeGet({
      endpoint: 'customers?limit=3',
      api_key: Stripeconfig.api_key,
    }).then((res: any) => {
      console.log(res);
      setCustomers(res.data);
    })
      .catch((e: any) => { console.log(e) });
  }

  return (
    <div>
      <button onClick={handleOnClick}>Get All Customers</button>
      <p><b>Customers are :</b></p>
      <div>
        {customers.map((customer, index) => {
          return (
            <p key={index}>{JSON.stringify(customer)}</p>
          );
        })}
      </div>
    </div>
  );
}

export default GetAllCustomers;