export interface UserInfo {
  email: string;
  name: string;
  _id: string;
}

export interface AllInvoice {
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
  items: {
    itemName: string;
    quantity: number;
    price: number;
    total: number;
  }[];
  userId: string;
}
