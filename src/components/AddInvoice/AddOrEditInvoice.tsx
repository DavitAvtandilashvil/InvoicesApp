import { FaChevronLeft } from "react-icons/fa";
import styled from "styled-components";
import BillFrom from "./BillFrom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Invoice, PostInvoice } from "../../types/types";
import BillTo from "./BillTo";
import AboutProject from "./AboutProject";
import ItemList from "./ItemList";

import { apiAddInvoice } from "../../services/apiAddInvoice";
import useInvoice from "../../context/useInvoice";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AddButtons from "./AddButtons";
import EditButtons from "./EditButtons";

interface AddOrEditInvoiceProps {
  setNewInvoiceOpen?: React.Dispatch<React.SetStateAction<string | null>>;
  setEditInvoiceOpen?: React.Dispatch<React.SetStateAction<string | null>>;
  editInvoiceOpen?: string | null;
  newInvoiceOpen?: string | null;
  singleInvoice?: Invoice | null;
}

export default function AddOrEditInvoice({
  setNewInvoiceOpen,
  setEditInvoiceOpen,
  editInvoiceOpen,
  newInvoiceOpen,
  singleInvoice,
}: AddOrEditInvoiceProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    reset,
    watch,
  } = useForm<PostInvoice>();

  const { setRender } = useInvoice();

  console.log("Error ", errors);

  const onSubmit: SubmitHandler<PostInvoice> = async (data) => {
    if (newInvoiceOpen === "true") {
      await apiAddInvoice(data);
      setRender((render) => !render);
      if (setNewInvoiceOpen) {
        setNewInvoiceOpen("false");
      }
    } else if (editInvoiceOpen === "true") {
      if (setEditInvoiceOpen) {
        setEditInvoiceOpen("false");
      }
    }
  };

  const handleCloseModal = () => {
    if (setNewInvoiceOpen) {
      setNewInvoiceOpen("false");
    } else if (setEditInvoiceOpen) {
      setEditInvoiceOpen("false");
    }
  };

  useEffect(() => {
    if (singleInvoice) {
      setValue("billFrom.streetAddress", singleInvoice.billFrom.streetAddress);
      setValue("billFrom.city", singleInvoice.billFrom.city);
      setValue("billFrom.postCode", singleInvoice.billFrom.postCode);
      setValue("billFrom.country", singleInvoice.billFrom.country);
      setValue("billTo.clientName", singleInvoice.billTo.clientName);
      setValue("billTo.clientEmail", singleInvoice.billTo.clientEmail);
      setValue("billTo.streetAddress", singleInvoice.billTo.streetAddress);
      setValue("billTo.city", singleInvoice.billTo.city);
      setValue("billTo.postCode", singleInvoice.billTo.postCode);
      setValue("billTo.country", singleInvoice.billTo.country);
      setValue("invoiceDate", singleInvoice.invoiceDate);
      setValue("paymentTerms", singleInvoice.paymentTerms);
      setValue("projectDescription", singleInvoice.projectDescription);
      singleInvoice.items.forEach((item, index) => {
        setValue(`items.${index}.itemName`, item.itemName);
        setValue(`items.${index}.quantity`, item.quantity);
        setValue(`items.${index}.price`, item.price);
        setValue(`items.${index}.total`, item.total);
      });
    }
  }, [singleInvoice, setValue]);

  return (
    <AddOrEditInvoiceContainer onClick={handleCloseModal}>
      <StyledAddOrEditInvoiceModal
        as={motion.form}
        initial={{ x: -900, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -900, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        onSubmit={handleSubmit(onSubmit)}
        onClick={(e) => e.stopPropagation()}
      >
        <StyledAddOrEditInvoice>
          <GoBack onClick={handleCloseModal}>
            <FaChevronLeft color="#7C5DFA" size={14} />
            <p>Go Back</p>
          </GoBack>
          {newInvoiceOpen === "true" && <Title>New Invoice</Title>}
          {editInvoiceOpen === "true" && (
            <Title>Edit #{singleInvoice?.invoiceId}</Title>
          )}
          <BillFrom register={register} errors={errors} />
          <BillTo register={register} errors={errors} />
          <AboutProject
            register={register}
            errors={errors}
            control={control}
            setValue={setValue}
          />
          <ItemList
            register={register}
            errors={errors}
            control={control}
            setValue={setValue}
          />
        </StyledAddOrEditInvoice>

        {newInvoiceOpen && <AddButtons setValue={setValue} reset={reset} />}
        {editInvoiceOpen && (
          <EditButtons
            setValue={setValue}
            singleInvoice={singleInvoice}
            watch={watch}
            setEditInvoiceOpen={setEditInvoiceOpen}
          />
        )}
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

  @media screen and (min-width: 1440px) {
    top: 0;
    left: 103px;
  }
`;

const StyledAddOrEditInvoiceModal = styled.form`
  background-color: ${({ theme }) => theme.secondaryBg};
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
