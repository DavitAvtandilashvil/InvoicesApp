import API from "../api";

export const deleteSingleInvoice = async (id: string) => {
  const response = await API.delete(`/invoices/${id}`);
  return response.data;
};
