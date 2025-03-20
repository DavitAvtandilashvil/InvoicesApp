import { createContext, ReactNode, useState } from "react";
import { Invoice } from "../types/types";

interface InvoiceContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  allInvoices: Invoice[];
  setAllInvoices: React.Dispatch<React.SetStateAction<Invoice[]>>;
  allInvoiceLoader: boolean;
  setAllInvoiceLoader: React.Dispatch<React.SetStateAction<boolean>>;
  allInvoiceError: string | null;
  setAllInvoiceError: React.Dispatch<React.SetStateAction<string | null>>;
  singleInvoice: Invoice | null;
  setSingleInvoice: React.Dispatch<React.SetStateAction<Invoice | null>>;
  singleInvoiceLoader: boolean;
  setSingleInvoiceLoader: React.Dispatch<React.SetStateAction<boolean>>;
  singleInvoiceError: string | null;
  setSingleInvoiceError: React.Dispatch<React.SetStateAction<string | null>>;
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
  singleInvoice: null,
  setSingleInvoice: () => {},
  singleInvoiceLoader: false,
  setSingleInvoiceLoader: () => {},
  singleInvoiceError: null,
  setSingleInvoiceError: () => {},
};

const InvoiceContext = createContext<InvoiceContextType>(defaultValues);

interface InvoiceContextProviderTypes {
  children: ReactNode;
}

function InvoiceContextProvider({ children }: InvoiceContextProviderTypes) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [allInvoices, setAllInvoices] = useState<Invoice[]>([]);
  const [allInvoiceLoader, setAllInvoiceLoader] = useState(false);
  const [allInvoiceError, setAllInvoiceError] = useState<string | null>(null);
  const [singleInvoice, setSingleInvoice] = useState<Invoice | null>(null);
  const [singleInvoiceLoader, setSingleInvoiceLoader] = useState(false);
  const [singleInvoiceError, setSingleInvoiceError] = useState<string | null>(
    null
  );

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
        singleInvoice,
        setSingleInvoice,
        singleInvoiceLoader,
        setSingleInvoiceLoader,
        singleInvoiceError,
        setSingleInvoiceError,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}

export { InvoiceContext, InvoiceContextProvider };
