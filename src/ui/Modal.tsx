import { MouseEvent } from "react";
import styled from "styled-components";
import Button from "./Button";

interface ModalProps {
  title: string;
  description: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonTxt: string;
}

export default function Modal({
  title,
  description,
  onClick,
  setIsOpen,
  buttonTxt,
}: ModalProps) {
  return (
    <StyledModal onClick={() => setIsOpen(false)}>
      <ContentDiv onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{description}</p>
        <ButtonsContainer>
          <Button
            size="medium"
            colorthemebg="editButtonBg"
            colorthemetxt="editButtonTxt"
            hoverthemebg="editButtonHoverBg"
            hoverthemetxt="editButtonHoverTxt"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button
            size="medium"
            colorthemebg="deleteButtonBg"
            hoverthemebg="deleteButtonHoverBg"
            onClick={onClick}
          >
            {buttonTxt}
          </Button>
        </ButtonsContainer>
      </ContentDiv>
    </StyledModal>
  );
}

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px 10px 10px -10px #48549f1a;
  background-color: #0000007f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentDiv = styled.div`
  width: 327px;
  box-shadow: 0px 10px 10px -10px #48549f1a;
  padding: 34px 32px 32px 32px;
  background-color: ${({ theme }) => theme.oneInvoiceBg};
  border-radius: 8px;

  & > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.5px;
    color: ${({ theme }) => theme.txtColor};
  }

  & > p {
    margin-top: 8px;
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.1px;
    color: #888eb0;
  }

  @media screen and (min-width: 768px) {
    width: 480px;
    padding: 51px 48px 48px 48px;
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 22px;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 8px;
`;
