import API from "../api";

export const apiGetAllInvoices = async (params: string) => {
  const response = await API.get(`/invoices${params}`);
  return response.data;
};
