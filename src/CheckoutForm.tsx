import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

const CheckoutForm = (props: any) => {

    const submit = async (ev: any) => {

    }

    return (
        <div className='checkout'>
            <p>Would you like to complete the purchase?</p>
            <CardElement />
            <button onClick={submit}>Purchase</button>
        </div>
    );
}

export default injectStripe(CheckoutForm);
