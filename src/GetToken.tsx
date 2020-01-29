import React from 'react';
import { stripeGet } from './Stripe';

import Stripconfig from './StripeConfig.json';

interface IGetToken {
  tokenId: string,
}

const GetToken = (props: IGetToken) => {
  const [tokenInfo, setTokenInfo] = React.useState("");

  const handleClick = () => {
    stripeGet({
      endpoint: `tokens/${props.tokenId}`,
      api_key: Stripconfig.api_key,
    })
      .then((res: any) => {
        console.log(res);
        setTokenInfo(JSON.stringify(res));
      })
      .catch((e: any) => { console.log(e) });
  }


  return (
    <div>
      <button onClick={handleClick} > Get Token Info</button>
      <p><b>Token id is:</b></p>
      <p>{props.tokenId}</p>
      <p><b>Token Info is:</b></p>
      <p>{tokenInfo}</p>
    </div>
  );
}

export default GetToken;