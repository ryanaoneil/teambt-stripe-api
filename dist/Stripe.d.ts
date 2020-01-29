export interface IStripeCustomer {

    firstName: string;

    lastName: string;

    address: string;

    city: string;

    state: string;

    country: string;

    zipcode: string;

    email: string;

    phone: string;

    companyName: string;

    webUrl: string;

}

export interface ICreditCardInfo {

    number: number;

    expMonth: number;

    expYear: number;

    cvc: number;

}

export interface IBankAccountInfo {

    accountNumber: number;

    routingNumber?: number;

    accountHolderName?: string;

    accountHolderType?: string;

    currency: string;

    country: string;

}

export interface IAttachCreditCardToCustomer {

    customerId: string;

    cardTokenId: string;

}

export declare const stripePost: (params: any) => Promise<unknown>;

export declare const stripeGet: (params: any) => Promise<unknown>;

export declare const stripeDelete: (params: any) => Promise<unknown>;

