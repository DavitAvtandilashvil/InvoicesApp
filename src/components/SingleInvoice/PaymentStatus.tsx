import styled from "styled-components";
import Button from "../../ui/Button";
import useInvoice from "../../context/useInvoice";
import { useNavigate } from "react-router-dom";
import { deleteSingleInvoice } from "../../services/apiDeleteSingleInvoice";
import { toast } from "react-toastify";

interface PaymentStatusProps {
  setEditInvoiceOpen: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function PaymentStatus({
  setEditInvoiceOpen,
}: PaymentStatusProps) {
  const { singleInvoice } = useInvoice();

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
    <StyledPaymentStatus>
      <StatusDiv>
        <p>Status</p>
        <Status status={singleInvoice?.paymentStatus ?? "Draft"}>
          <div></div>
          <p>{singleInvoice?.paymentStatus}</p>
        </Status>
      </StatusDiv>
      <ButtonsDiv>
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
          onClick={() => deleteInvoice(singleInvoice?.id ?? "")}
        >
          delete
        </Button>
        <Button size="large">Mark as paid</Button>
      </ButtonsDiv>
    </StyledPaymentStatus>
  );
}

const statusColors = {
  Paid: { bg: "#33d69f0f", text: "#33d69f", dot: "#33d69f" },
  Pending: { bg: "#FF8F000F", text: "#FF8F00", dot: "#FF8F00" },
  Draft: { bg: "#373B530F", text: "#373B53", dot: "#373B53" },
};

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

const Status = styled.div<{ status: keyof typeof statusColors }>`
  width: 104px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background-color: ${({ status, theme }) =>
    status === "Draft" ? theme.draftBg : statusColors[status].bg};

  & > div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ status, theme }) =>
      status === "Draft" ? theme.draftTxt : statusColors[status].dot};
  }

  & > p {
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${({ status, theme }) =>
      status === "Draft" ? theme.draftTxt : statusColors[status].text};
    margin-top: 3px;
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
