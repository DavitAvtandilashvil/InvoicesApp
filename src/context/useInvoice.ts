import { useContext } from "react";
import { InvoiceContext } from "./InvoiceContext";

function useInvoice() {
  const context = useContext(InvoiceContext);
  if (!context) throw new Error("Context was used outside the context box");
  return context;
}

export default useInvoice;
