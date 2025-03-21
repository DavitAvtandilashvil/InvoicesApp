import { FieldErrors, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { PostInvoice } from "../../types/types";
import SingleInput from "./SingleInput";

interface BillToProps {
  register: UseFormRegister<PostInvoice>;
  errors: FieldErrors<PostInvoice>;
}

export default function BillTo({ register, errors }: BillToProps) {
  return (
    <StyledBillTo>
      <Title>Bill To</Title>
      <Inputs>
        <SingleInput
          title="Clients Name"
          gridcolumn="span 2"
          inputType="text"
          register={register("billTo.clientName", {
            required: "Client Name is required",
          })}
          error={errors?.billTo?.clientName?.message}
        />
        <SingleInput
          title="Clients Email"
          gridcolumn="span 2"
          inputType="text"
          register={register("billTo.clientEmail", {
            required: "Client Email is required",
          })}
          error={errors?.billTo?.clientEmail?.message}
        />
        <SingleInput
          title="Street Address"
          gridcolumn="span 2"
          inputType="text"
          register={register("billTo.streetAddress", {
            required: "Street Address is required",
          })}
          error={errors?.billTo?.streetAddress?.message}
        />
        <SingleInput
          title="City"
          gridcolumn="1"
          inputType="text"
          register={register("billTo.city", {
            required: "City is required",
          })}
          error={errors?.billTo?.city?.message}
        />
        <SingleInput
          title="Post Code"
          gridcolumn="2"
          inputType="text"
          register={register("billTo.postCode", {
            required: "City is required",
          })}
          error={errors?.billTo?.postCode?.message}
        />
        <SingleInput
          title="Country"
          gridcolumn="span 2"
          inputType="text"
          register={register("billTo.country", {
            required: "Country is required",
          })}
          error={errors?.billTo?.country?.message}
        />
      </Inputs>
    </StyledBillTo>
  );
}

const StyledBillTo = styled.div`
  margin-top: 41px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #7c5dfa;
`;

const Inputs = styled.div`
  margin-top: 24px;
  display: grid;
  column-gap: 25px;
  row-gap: 23px;
  grid-template-columns: 1fr 1fr;
`;
