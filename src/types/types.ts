export interface UserInfo {
  email: string;
  name: string;
  _id: string;
}

export interface Invoice {
  id: string;
  invoiceId: string;
  clientName: string;
  date: string;
  price: number;
  paymentStatus: "Paid" | "Pending" | "Draft";
  billFrom: {
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
  };
  billTo: {
    clientName: string;
    clientEmail: string;
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
  };
  invoiceDate: string;
  paymentTerms: string;
  projectDescription: string;
  items: Items[];
  userId: string;
}

export interface PostInvoice {
  clientName: string;
  date: string;
  price: number;
  paymentStatus: "Paid" | "Pending" | "Draft";
  billFrom: {
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
  };
  billTo: {
    clientName: string;
    clientEmail: string;
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
  };
  invoiceDate: string;
  paymentTerms: string;
  projectDescription: string;
  items: Items[];
}

export interface Items {
  itemName: string;
  quantity: number;
  price: number;
  total: number;
}
