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
          gridcolumntablet="span 3"
          inputType="text"
          register={register("billFrom.streetAddress", {
            required: "Street address is required",
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
          error={errors?.billFrom?.streetAddress?.message}
        />
        <SingleInput
          title="City"
          gridcolumn="1"
          gridcolumntablet="1"
          inputType="text"
          register={register("billFrom.city", {
            required: "City is required",
            pattern: {
              value: /^[a-zA-Z\s-]+$/,
              message:
                "City name can only contain letters, spaces, and hyphens",
            },
          })}
          error={errors?.billFrom?.city?.message}
        />
        <SingleInput
          title="Post Code"
          gridcolumn="2"
          gridcolumntablet="2"
          inputType="text"
          register={register("billFrom.postCode", {
            required: "Post code is required",
            pattern: {
              value: /^[0-9]{5}([-]?[0-9]{4})?$/, // Example: 12345 or 12345-6789 (for US)
              message:
                "Post code must be a valid format (e.g., 12345 or 12345-6789)",
            },
          })}
          error={errors?.billFrom?.postCode?.message}
        />
        <SingleInput
          title="Country"
          gridcolumn="span 2"
          gridcolumntablet="3"
          inputType="text"
          register={register("billFrom.country", {
            required: "Country is required",
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: "Country name can only contain letters and spaces",
            },
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

  @media screen and (min-width: 616px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
