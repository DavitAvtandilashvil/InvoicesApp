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
          title="Client's Name"
          gridcolumn="span 2"
          gridcolumntablet="span 3"
          inputType="text"
          register={register("billTo.clientName", {
            required: "Client Name is required",
            pattern: {
              value: /^[a-zA-Z\s-]+$/,
              message:
                "Client Name can only contain letters, spaces, and hyphens",
            },
          })}
          error={errors?.billTo?.clientName?.message}
        />
        <SingleInput
          title="Client's Email"
          gridcolumn="span 2"
          gridcolumntablet="span 3"
          inputType="text"
          register={register("billTo.clientEmail", {
            required: "Client Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address",
            },
          })}
          error={errors?.billTo?.clientEmail?.message}
        />
        <SingleInput
          title="Street Address"
          gridcolumn="span 2"
          gridcolumntablet="span 3"
          inputType="text"
          register={register("billTo.streetAddress", {
            required: "Street Address is required",
            minLength: {
              value: 5,
              message: "Street address must be at least 5 characters long",
            },
            pattern: {
              value: /^[a-zA-Z0-9\s,.'-]+$/,
              message:
                "Street address can only contain letters, numbers, spaces, commas, periods, and hyphens",
            },
          })}
          error={errors?.billTo?.streetAddress?.message}
        />
        <SingleInput
          title="City"
          gridcolumn="1"
          gridcolumntablet="1"
          inputType="text"
          register={register("billTo.city", {
            required: "City is required",
            pattern: {
              value: /^[a-zA-Z\s-]+$/,
              message:
                "City name can only contain letters, spaces, and hyphens",
            },
          })}
          error={errors?.billTo?.city?.message}
        />
        <SingleInput
          title="Post Code"
          gridcolumn="2"
          gridcolumntablet="2"
          inputType="text"
          register={register("billTo.postCode", {
            required: "Post Code is required",
            pattern: {
              value: /^(?:\d{4}|\d{5}(-\d{4})?)$/, // Allows 4-digit, 5-digit, and 5+4 (e.g., 1234, 12345, 12345-6789)
              message:
                "Post Code must be 4 or 5 digits (e.g., 1234, 12345, 12345-6789)",
            },
          })}
          error={errors?.billTo?.postCode?.message}
        />
        <SingleInput
          title="Country"
          gridcolumn="span 2"
          gridcolumntablet="3"
          inputType="text"
          register={register("billTo.country", {
            required: "Country is required",
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: "Country name can only contain letters and spaces",
            },
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

  @media screen and (min-width: 616px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
