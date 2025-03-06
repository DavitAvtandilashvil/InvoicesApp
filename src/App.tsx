import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./GlobalStyle.ts";
import Home from "./pages/Home.tsx";
import AppLayout from "./AppLayout.tsx";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme.ts";
import useInvoice from "./context/useInvoice.ts";
import Auth from "./pages/Auth.tsx";
import ProtectedRoute from "./ui/ProtectedRoute.tsx";

function App() {
  const { isDarkMode } = useInvoice();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/auth" element={<Auth />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
