import { createContext, ReactNode, useState } from "react";

interface InvoiceContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValues: InvoiceContextType = {
  isDarkMode: false,
  setIsDarkMode: () => {},
};

const InvoiceContext = createContext<InvoiceContextType>(defaultValues);

interface InvoiceContextProviderTypes {
  children: ReactNode;
}

function InvoiceContextProvider({ children }: InvoiceContextProviderTypes) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <InvoiceContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </InvoiceContext.Provider>
  );
}

export { InvoiceContext, InvoiceContextProvider };
