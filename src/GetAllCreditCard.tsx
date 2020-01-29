import React from 'react';
import { stripeGet } from './Stripe';
import Stripeconfig from './StripeConfig.json';

interface IGetAllCreditCard {
  customerId: string,
}

const GetAllCreditCard = (props: IGetAllCreditCard) => {

  const [cards, setCards] = React.useState([]);
  const handleOnClick = () => {
    stripeGet({
      endpoint: `customers/${props.customerId}/sources?limit=3&object=card`,
      api_key: Stripeconfig.api_key,
    }).then((res: any) => {
      console.log(res);
      setCards(res.data);
    })
      .catch((e: any) => { console.log(e) });
  }

  return (
    <div>
      <button onClick={handleOnClick} >Get All Credit Cards</button>
      <p><b>Customer id is:</b></p>
      <p>{props.customerId}</p>
      <p><b>Cards are: </b></p>
      <div>
        {cards.map((card, index) => {
          return (<p key={index}>{JSON.stringify(card)}</p>)
        })}
      </div>
    </div>
  );

}

export default GetAllCreditCard;

