import API from "../api";

export const getSingleInvoice = async (id: string) => {
  const response = await API.get(`/invoices/${id}`);
  return response.data;
};
