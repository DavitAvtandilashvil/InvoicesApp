import { FaHashtag } from "react-icons/fa";
import styled from "styled-components";

export default function SingleInvoiceInfo() {
  return (
    <StyledSingleInvoiceInfo>
      <IdContainer>
        <FaHashtag color="#7E88C3" size={12} />
        <p>XM9141</p>
      </IdContainer>
    </StyledSingleInvoiceInfo>
  );
}

const StyledSingleInvoiceInfo = styled.div`
  margin-top: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.oneInvoiceBg};
  box-shadow: 0px 10px 10px -10px #48549f1a;
  border-radius: 8px;
  padding: 25px 24px 24px 24px;
`;

const IdContainer = styled.div`
  display: flex;
  align-items: center;

  & > p {
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.25px;
    margin-top: 3px;
  }
`;
