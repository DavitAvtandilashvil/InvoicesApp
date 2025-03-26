import styled from "styled-components";
import Button from "../../ui/Button";
import { UseFormSetValue } from "react-hook-form";
import { PostInvoice } from "../../types/types";

interface ButtonsProps {
  setValue: UseFormSetValue<PostInvoice>;
}

export default function Buttons({ setValue }: ButtonsProps) {
  const handleDraft = () => {
    setValue("paymentStatus", "Draft");
  };

  const handleSaveAndSend = () => {
    setValue("paymentStatus", "Pending");
  };

  return (
    <StyledButtons>
      <ButtonSpace></ButtonSpace>
      <ButtonsDiv>
        <Button
          size="medium"
          colorthemebg="editButtonBg"
          colorthemetxt="editButtonTxt"
          hoverthemebg="editButtonHoverBg"
          hoverthemetxt="editButtonHoverTxt"
        >
          Discard
        </Button>
        <ButtonForSave>
          <Button
            size="medium"
            colorthemebg="draftButtonBg"
            colorthemetxt="draftButtonTxt"
            hoverthemebg="editButtonHoverBg"
            hoverthemetxt="editButtonHoverTxt"
            type="submit"
            onClick={handleDraft}
          >
            Draft
          </Button>
          <Button size="large" type="submit" onClick={handleSaveAndSend}>
            Save & Send
          </Button>
        </ButtonForSave>
      </ButtonsDiv>
    </StyledButtons>
  );
}

const StyledButtons = styled.div``;

const ButtonSpace = styled.div`
  margin-top: 24px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
  width: 100%;
  height: 64px;
`;
const ButtonsDiv = styled.div`
  max-width: 504px;
  margin: auto;
  width: 100%;
  height: 91px;
  background-color: ${({ theme }) => theme.oneInvoiceBg};
  box-shadow: 0px 10px 10px -10px #48549f1a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
  padding: 22px 24px 22px 24px;
`;

const ButtonForSave = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;
