const ConvertStripeCustomerBody = (data) => {

    const { firstName, lastName, address, city, state, country, zipcode, email, phone, companyName, webUrl } = data;

    return `name=${firstName} ${lastName}&phone=${phone}&email=${email}&\

    address[line1]=${address}&address[city]=${city}&address[state]=${state}&\

    address[postal_code]=${zipcode}&address[country]=${country}&\

    description=${companyName} ${webUrl}`;

};

const ConvertStripeCardToken = (data) => {

    return `card[number]=${data.number}&card[exp_month]=${data.expMonth}&\

  card[exp_year]=${data.expYear}&card[cvc]=${data.cvc}`;

};

const AttachCardToCustomer = (data) => {

    return `source=${data.cardTokenId}`;

};

const Stripe = {

    origin: "https://api.stripe.com/v1",

    customerBody: ConvertStripeCustomerBody,

    cardTokenBody: ConvertStripeCardToken,

    attachCardToCustomer: AttachCardToCustomer,

};

const stripeAPI = (params) => {

    let bodyParseFunc = null;

    if (params.endpoint === 'customers') {

        bodyParseFunc = Stripe.customerBody;

    }

    else if (params.endpoint === 'tokens') {

        bodyParseFunc = Stripe.cardTokenBody;

    }

    else if (params.endpoint.startsWith('customers/cus_') &&

        params.endpoint.endsWith('/sources')) {

        bodyParseFunc = Stripe.attachCardToCustomer;

    }

    else {

        bodyParseFunc = Stripe.customerBody;

    }

    return new Promise((accept, reject) => {

        fetch(`${Stripe.origin}/${params.endpoint}`, {

            method: params.method,

            headers: {

                'Authorization': `Bearer ${params.api_key}`,

                'Accept': 'application/json',

                'Content-Type': 'application/x-www-form-urlencoded'

            },

            body: bodyParseFunc(params.body),

        }).then((res) => {

            accept(res.json());

        })

            .catch((e) => {

            reject(e);

        });

    });

};

export const stripePost = (params) => {

    return new Promise((accept, reject) => {

        stripeAPI({

            endpoint: params.endpoint,

            method: 'POST',

            body: params.body,

            api_key: params.api_key

        })

            .then((resp) => {

            accept(resp);

        })

            .catch((e) => {

            reject(e);

        });

    });

};

export const stripeGet = (params) => {

    return new Promise((acc, rej) => {

        fetch(`${Stripe.origin}/${params.endpoint}`, {

            method: 'GET',

            headers: {

                'Authorization': `Bearer ${params.api_key}`,

                'Accept': 'application/json',

                'Content-Type': 'application/x-www-form-urlencoded'

            }

        }).then((res) => { acc(res.json()); })

            .catch((e) => { rej(e); });

    });

};

export const stripeDelete = (params) => {

    return new Promise((acc, rej) => {

        fetch(`${Stripe.origin}/${params.endpoint}`, {

            method: 'DELETE',

            headers: {

                'Authorization': `Bearer ${params.api_key}`,

                'Accept': 'application/json',

                'Content-Type': 'application/x-www-form-urlencoded'

            }

        }).then((res) => { acc(res.json()); })

            .catch((e) => { rej(e); });

    });

};

