import styled from "styled-components";
import Button from "../../ui/Button";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { PostInvoice } from "../../types/types";

interface AddButtonsProps {
  setEditInvoiceOpen:
    | React.Dispatch<React.SetStateAction<string | null>>
    | undefined;
  setValue: UseFormSetValue<PostInvoice>;
  watch: UseFormWatch<PostInvoice>;
}

export default function EditButtons({
  watch,
  setEditInvoiceOpen,
}: AddButtonsProps) {
  console.log(watch());

  const handleCancel = () => {
    if (setEditInvoiceOpen) {
      setEditInvoiceOpen("false");
    }
  };

  return (
    <StyledButtons>
      <ButtonSpace></ButtonSpace>
      <Wrapper>
        <ButtonsDiv>
          <ButtonForSave>
            <Button
              size="medium"
              colorthemebg="editButtonBg"
              colorthemetxt="editButtonTxt"
              hoverthemebg="editButtonHoverBg"
              hoverthemetxt="editButtonHoverTxt"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button size="large" type="submit">
              Save Changes
            </Button>
          </ButtonForSave>
        </ButtonsDiv>
      </Wrapper>
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

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.oneInvoiceBg};
  box-shadow: 0px 10px 10px -10px #48549f1a;
`;

const ButtonsDiv = styled.div`
  max-width: 504px;
  margin: auto;
  width: 100%;
  height: 91px;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 7px;
  padding: 22px 24px 22px 24px;
`;

const ButtonForSave = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;
