import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Plus Jakarta Sans", sans-serif;
        background-color: ${({ theme }) => theme.bodyBg};;
    }
`;

export default GlobalStyle;
