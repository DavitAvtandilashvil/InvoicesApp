import styled from "styled-components";
import SingleInput from "./SingleInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { PostInvoice } from "../../types/types";

interface BillFromProps {
  register: UseFormRegister<PostInvoice>;
  errors: FieldErrors<PostInvoice>;
}

export default function BillFrom({ register, errors }: BillFromProps) {
  return (
    <StyledBillFrom>
      <Title>Bill From</Title>
      <Inputs>
        <SingleInput
          title="Street Address"
          gridcolumn="span 2"
          inputType="text"
          register={register("billFrom.streetAddress", {
            required: "street address is required",
          })}
          error={errors?.billFrom?.streetAddress?.message}
        />
        <SingleInput
          title="City"
          gridcolumn="1"
          inputType="text"
          register={register("billFrom.city", {
            required: "city is required",
          })}
          error={errors?.billFrom?.city?.message}
        />
        <SingleInput
          title="Post Code"
          gridcolumn="2"
          inputType="text"
          register={register("billFrom.postCode", {
            required: "post code is required",
          })}
          error={errors?.billFrom?.postCode?.message}
        />
        <SingleInput
          title="Country"
          gridcolumn="span 2"
          inputType="text"
          register={register("billFrom.country", {
            required: "country code is required",
          })}
          error={errors?.billFrom?.country?.message}
        />
      </Inputs>
    </StyledBillFrom>
  );
}

const StyledBillFrom = styled.div`
  margin-top: 22px;
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
