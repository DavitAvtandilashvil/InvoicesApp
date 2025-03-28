import styled from "styled-components";
import Button from "../../ui/Button";

interface MobileButtonDivProps {
  setEditInvoiceOpen: React.Dispatch<React.SetStateAction<string | null>>;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileButtonDiv({
  setEditInvoiceOpen,
  setModalIsOpen,
}: MobileButtonDivProps) {
  return (
    <StyledMobileButtonDiv>
      <ButtonsContainer>
        <Button
          size="small"
          colorthemebg="editButtonBg"
          colorthemetxt="editButtonTxt"
          hoverthemebg="editButtonHoverBg"
          hoverthemetxt="editButtonHoverTxt"
          onClick={() => setEditInvoiceOpen("true")}
        >
          Edit
        </Button>
        <Button
          colorthemebg="deleteButtonBg"
          hoverthemebg="deleteButtonHoverBg"
          onClick={() => setModalIsOpen(true)}
        >
          delete
        </Button>
        <Button size="large">Mark as paid</Button>
      </ButtonsContainer>
    </StyledMobileButtonDiv>
  );
}

const StyledMobileButtonDiv = styled.div`
  width: 100%;
  height: 91px;
  background-color: ${({ theme }) => theme.oneInvoiceBg};
  margin-top: 56px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ButtonsContainer = styled.div`
  width: 327px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  height: 100%;
`;
