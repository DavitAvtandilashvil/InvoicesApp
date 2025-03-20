import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "League Spartan", sans-serif;
        background-color: ${({ theme }) => theme.bodyBg};;
    }

    .Toastify__toast {
    @media (max-width: 768px) {
      font-size: 14px;
      width: 300px;
    }
  }
`;

export default GlobalStyle;
