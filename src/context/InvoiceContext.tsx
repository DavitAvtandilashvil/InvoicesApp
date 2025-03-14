import { createContext, ReactNode, useState } from "react";
import { AllInvoice } from "../types/types";

interface InvoiceContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  allInvoices: AllInvoice[];
  setAllInvoices: React.Dispatch<React.SetStateAction<AllInvoice[]>>;
  allInvoiceLoader: boolean;
  setAllInvoiceLoader: React.Dispatch<React.SetStateAction<boolean>>;
  allInvoiceError: string | null;
  setAllInvoiceError: React.Dispatch<React.SetStateAction<string | null>>;
}

const defaultValues: InvoiceContextType = {
  isDarkMode: false,
  setIsDarkMode: () => {},
  allInvoices: [],
  setAllInvoices: () => {},
  allInvoiceLoader: false,
  setAllInvoiceLoader: () => {},
  allInvoiceError: null,
  setAllInvoiceError: () => {},
};

const InvoiceContext = createContext<InvoiceContextType>(defaultValues);

interface InvoiceContextProviderTypes {
  children: ReactNode;
}

function InvoiceContextProvider({ children }: InvoiceContextProviderTypes) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [allInvoices, setAllInvoices] = useState<AllInvoice[]>([]);
  const [allInvoiceLoader, setAllInvoiceLoader] = useState(false);
  const [allInvoiceError, setAllInvoiceError] = useState<string | null>(null);

  return (
    <InvoiceContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        allInvoices,
        setAllInvoices,
        allInvoiceLoader,
        setAllInvoiceLoader,
        allInvoiceError,
        setAllInvoiceError,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}

export { InvoiceContext, InvoiceContextProvider };
