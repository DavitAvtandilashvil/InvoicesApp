import API from "../api";

export const apiGetAllInvoices = async () => {
  const response = await API.get("/invoices");
  return response.data;
};
