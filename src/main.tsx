import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { InvoiceContextProvider } from "./context/InvoiceContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InvoiceContextProvider>
      <App />
    </InvoiceContextProvider>
  </StrictMode>
);
