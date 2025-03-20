import styled from "styled-components";
import Button from "../../ui/Button";
import { toast } from "react-toastify";
import { deleteSingleInvoice } from "../../services/apiDeleteSingleInvoice";
import { useNavigate } from "react-router-dom";

interface MobileButtonDivProps {
  invoiceId: string;
}

export default function MobileButtonDiv({ invoiceId }: MobileButtonDivProps) {
  const navigate = useNavigate();

  const deleteInvoice = async (id: string) => {
    try {
      const data = await deleteSingleInvoice(id);
      toast.success(data.message);
      navigate("/home");
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Something went wrong");
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
        >
          Edit
        </Button>
        <Button
          colorthemebg="deleteButtonBg"
          hoverthemebg="deleteButtonHoverBg"
          onClick={() => deleteInvoice(invoiceId)}
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
