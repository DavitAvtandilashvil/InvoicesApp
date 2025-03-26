import { toast } from "react-toastify";
import API from "../api";
import { PostInvoice } from "../types/types";

export const apiAddInvoice = async (data: PostInvoice) => {
  const response = await API.post("/invoices", data);
  toast.success(response.data.message);
};
