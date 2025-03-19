import styled from "styled-components";
import Button from "../../ui/Button";

export default function PaymentStatus() {
  return (
    <StyledPaymentStatus>
      <StatusDiv>
        <p>Status</p>
        <Status>
          <div></div>
          <p>Pending</p>
        </Status>
      </StatusDiv>
      <ButtonsDiv>
        <Button
          size="small"
          colorthemebg="editButtonBg"
          colorthemetxt="editButtonTxt"
          hoverthemebg="editButtonHoverBg"
          hoverthemetxt="editButtonHoverTxt"
        >
          Edit
        </Button>
        <Button
          colorthemebg="deleteButtonBg"
          hoverthemebg="deleteButtonHoverBg"
        >
          delete
        </Button>
        <Button size="large">Mark as paid</Button>
      </ButtonsDiv>
    </StyledPaymentStatus>
  );
}

const StyledPaymentStatus = styled.div`
  margin-top: 31px;
  width: 100%;
  height: 91px;
  background-color: ${({ theme }) => theme.oneInvoiceBg};
  box-shadow: 0px 10px 10px -10px #48549f1a;
  border-radius: 8px;
  padding: 0px 24px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    padding: 0px 32px;
    margin-top: 49px;
    height: 88px;
  }
`;

const StatusDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  & > p {
    color: ${({ theme }) => theme.nameTxt};
    font-family: League Spartan;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.1px;
  }

  @media screen and (min-width: 768px) {
    width: auto;
    gap: 20px;
  }
`;

const Status = styled.div`
  width: 104px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background-color: #ff8f000f;

  & > div {
    width: 8px;
    height: 8px;
    background-color: #ff8f00;
    border-radius: 50%;
  }

  & > p {
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: #ff8f00;
  }
`;

const ButtonsDiv = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
