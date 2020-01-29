import React from 'react';
import GetStripeCustomer from './GetStripeCustomer';
import GetToken from './GetToken';
import GetCreditCard from './GetCreditCard';
import GetBalance from './GetBalance';
import GetAllCustomers from './GetAllCustomers';
import GetAllCreditCard from './GetAllCreditCard';

const StripeGetExample = (props: any) => {

	return (
		<React.Fragment>
			<h4>2.1. Retrieve a customer</h4>
			<GetStripeCustomer customerId={props.customerId} />
			<h4>2.2. Get all customers</h4>
			<GetAllCustomers />
			<h4>2.3. Retrieve a token</h4>
			<GetToken tokenId="tok_amex" />
			<h4>2.4. Retrieve a credit card</h4>
			<GetCreditCard customerId={props.customerId}
				creditCardId={props.creditCardId} />
			<h4>2.5. Get all card</h4>
			<GetAllCreditCard customerId={props.customerId} />
			<h4>2.6. Get balance</h4>
			<GetBalance customerId={props.customerId} />
		</React.Fragment>
	);
}

export default StripeGetExample;