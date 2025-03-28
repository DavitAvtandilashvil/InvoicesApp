import { toast } from "react-toastify";
import API from "../api";
import { PostInvoice } from "../types/types";

export const apiEditInvoice = async (id: string, data: PostInvoice) => {
  const response = await API.put(`/invoices/${id}`, data);
  toast.success(response.data.message);
};
