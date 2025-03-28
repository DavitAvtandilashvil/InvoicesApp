import styled from "styled-components";
import Button from "../../ui/Button";
import { Invoice } from "../../types/types";
import { toast } from "react-toastify";
import { apiEditInvoice } from "../../services/apiEditInvoice";
import { useNavigate } from "react-router-dom";

interface MobileButtonDivProps {
  setEditInvoiceOpen: React.Dispatch<React.SetStateAction<string | null>>;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  singleInvoice: Invoice;
}

export default function MobileButtonDiv({
  setEditInvoiceOpen,
  setModalIsOpen,
  singleInvoice,
}: MobileButtonDivProps) {
  const navigate = useNavigate();

  const handleMarkAsPaid = async () => {
    if (singleInvoice?.paymentStatus === "Paid") {
      toast.error("The invoice is already Paid");
      return;
    }
    try {
      const updatedInvoice: Invoice = {
        ...singleInvoice,
        id: singleInvoice?.id, // Ensure id is explicitly set
        paymentStatus: "Paid",
      };

      await apiEditInvoice(singleInvoice?.id, updatedInvoice);
      navigate("/home");
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Something went wrond");
      }
    }
  };

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
        <Button size="large" onClick={handleMarkAsPaid}>
          Mark as paid
        </Button>
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
