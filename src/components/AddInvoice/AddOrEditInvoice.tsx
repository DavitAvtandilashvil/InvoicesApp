import { FaChevronLeft } from "react-icons/fa";
import styled from "styled-components";
import BillFrom from "./BillFrom";
import { SubmitHandler, useForm } from "react-hook-form";
import { PostInvoice } from "../../types/types";
import BillTo from "./BillTo";
import AboutProject from "./AboutProject";

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
    setValue,
    control,
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
          <BillTo register={register} errors={errors} />
          <AboutProject
            register={register}
            errors={errors}
            control={control}
            setValue={setValue}
          />
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

  @media screen and (min-width: 616px) {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const StyledAddOrEditInvoice = styled.div`
  width: 327px;
  margin: auto;

  @media screen and (min-width: 616px) {
    width: 504px;
  }
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
    padding-top: 49px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 65px;
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
