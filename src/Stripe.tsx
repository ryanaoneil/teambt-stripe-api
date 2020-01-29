export interface IStripeCustomer {
  firstName: string,
  lastName: string,
  address: string,
  city: string,
  state: string,
  country: string,
  zipcode: string,
  email: string,
  phone: string,
  companyName: string,
  webUrl: string,
}

export interface ICreditCardInfo {
  number: number,
  expMonth: number,
  expYear: number,
  cvc: number,
}

export interface IBankAccountInfo {
  accountNumber: number,
  routingNumber?: number;
  accountHolderName?: string,
  accountHolderType?: string,
  currency: string,
  country: string,
}

export interface IAttachCreditCardToCustomer {
  customerId: string,
  cardTokenId: string,
}

interface IStripeApiArgs {
  endpoint: string,
  method: string,
  body: string,
  api_key: string,
}

const ConvertStripeCustomerBody = (data: IStripeCustomer): string => {
  const { firstName, lastName, address, city, state, country, zipcode,
    email, phone, companyName, webUrl } = data;

  return `name=${firstName} ${lastName}&phone=${phone}&email=${email}&\
    address[line1]=${address}&address[city]=${city}&address[state]=${state}&\
    address[postal_code]=${zipcode}&address[country]=${country}&\
    description=${companyName} ${webUrl}`;
}

const ConvertStripeCardToken = (data: ICreditCardInfo): string => {
  return `card[number]=${data.number}&card[exp_month]=${data.expMonth}&\
  card[exp_year]=${data.expYear}&card[cvc]=${data.cvc}`;
}

const AttachCardToCustomer = (data: IAttachCreditCardToCustomer) => {
  return `source=${data.cardTokenId}`;
}

const Stripe = {
  origin: "https://api.stripe.com/v1",
  customerBody: ConvertStripeCustomerBody,
  cardTokenBody: ConvertStripeCardToken,
  attachCardToCustomer: AttachCardToCustomer,
}

const stripeAPI = (params: IStripeApiArgs) => {

  // * Reserve for different bodies ================
  let bodyParseFunc: any = null;

  if (params.endpoint === 'customers') {
    bodyParseFunc = Stripe.customerBody;
  } else if (params.endpoint === 'tokens') {
    bodyParseFunc = Stripe.cardTokenBody;
  } else if (params.endpoint.startsWith('customers/cus_') &&
    params.endpoint.endsWith('/sources')) {
    bodyParseFunc = Stripe.attachCardToCustomer;
  }
  else {
    bodyParseFunc = Stripe.customerBody;
  }
  // * =============================================


  return new Promise((accept: any, reject: any) => {
    fetch(`${Stripe.origin}/${params.endpoint}`, {
      method: params.method,
      headers: {
        'Authorization': `Bearer ${params.api_key}`,
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: bodyParseFunc(params.body),
    }).then((res: any) => {
      accept(res.json());
    })
      .catch((e: any) => {
        reject(e);
      })
  })
}

export const stripePost = (params: any) => {
  return new Promise((accept, reject) => {
    stripeAPI({
      endpoint: params.endpoint,
      method: 'POST',
      body: params.body,
      api_key: params.api_key
    })
      .then((resp: any) => {
        accept(resp);
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}

export const stripeGet = (params: any) => {
  return new Promise((acc, rej) => {
    fetch(`${Stripe.origin}/${params.endpoint}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${params.api_key}`,
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => { acc(res.json()); })
      .catch((e) => { rej(e) });
  })
}

export const stripeDelete = (params: any) => {
  return new Promise((acc, rej) => {
    fetch(`${Stripe.origin}/${params.endpoint}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${params.api_key}`,
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => { acc(res.json()); })
      .catch((e) => { rej(e) });
  })
}