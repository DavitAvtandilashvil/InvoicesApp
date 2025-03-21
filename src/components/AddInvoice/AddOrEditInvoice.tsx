import { FaChevronLeft } from "react-icons/fa";
import styled from "styled-components";
import BillFrom from "./BillFrom";
import { SubmitHandler, useForm } from "react-hook-form";
import { PostInvoice } from "../../types/types";

interface AddOrEditInvoiceProps {
  setNewInvoiceOpen: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function AddOrEditInvoice({
  setNewInvoiceOpen,
}: AddOrEditInvoiceProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostInvoice>();

  console.log("Error ", errors);

  const onSubmit: SubmitHandler<PostInvoice> = (data) => {
    console.log(data);
  };

  return (
    <AddOrEditInvoiceContainer>
      <StyledAddOrEditInvoiceModal onSubmit={handleSubmit(onSubmit)}>
        <StyledAddOrEditInvoice>
          <GoBack onClick={() => setNewInvoiceOpen("false")}>
            <FaChevronLeft color="#7C5DFA" size={14} />
            <p>Go Back</p>
          </GoBack>
          <Title>New Invoice</Title>
          <BillFrom register={register} errors={errors} />
        </StyledAddOrEditInvoice>
        <button>submit</button>
      </StyledAddOrEditInvoiceModal>
    </AddOrEditInvoiceContainer>
  );
}

const AddOrEditInvoiceContainer = styled.div`
  position: fixed;
  top: 72px;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0px 10px 10px -10px #48549f1a;
  background-color: #0000007f;
  overflow-y: auto;
`;

const StyledAddOrEditInvoiceModal = styled.form`
  background-color: ${({ theme }) => theme.secondaryBg};
  padding-bottom: 88px;
  max-width: 616px;
  z-index: 100;
`;

const StyledAddOrEditInvoice = styled.div`
  width: 327px;
  margin: auto;
`;

const GoBack = styled.div`
  padding-top: 33px;
  display: flex;
  align-items: center;
  gap: 24px;
  cursor: pointer;
  width: 90px;

  & > p {
    color: ${({ theme }) => theme.txtColor};
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.25px;
    margin-top: 1px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 49px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 65px;
  }
`;

const Title = styled.p`
  margin-top: 26px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.txtColor};
`;
