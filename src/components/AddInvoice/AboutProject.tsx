import {
  FieldErrors,
  UseFormRegister,
  Controller,
  Control,
  UseFormSetValue,
} from "react-hook-form";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PostInvoice } from "../../types/types";
import calendar from "/calendar.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";

interface AboutProjectProps {
  register: UseFormRegister<PostInvoice>;
  errors: FieldErrors<PostInvoice>;
  control: Control<PostInvoice>;
  setValue: UseFormSetValue<PostInvoice>;
}

export default function AboutProject({ control, setValue }: AboutProjectProps) {
  const [paymentTerm, setPaymentTerm] = useState("30 days");
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  useEffect(() => {
    setValue("paymentTerms", paymentTerm);
  }, [setValue, paymentTerm]);

  const choosePaymentTerm = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    e.stopPropagation();
    const newPaymentTerm = `${index + 1} days`;
    setPaymentTerm(newPaymentTerm);
    setValue("paymentTerms", newPaymentTerm);
    setIsPaymentOpen(false);
  };

  return (
    <StyledAboutProject>
      <Inputs>
        <StyledDate>
          <InputWrapper>
            <label>Invoice Date</label>
            <Controller
              name="invoiceDate"
              control={control}
              defaultValue={new Date().toISOString().split("T")[0]}
              render={({ field }) => (
                <DatePicker
                  selected={field.value ? new Date(field.value) : null}
                  onChange={(date) => {
                    if (date) {
                      const formattedDate = date.toISOString().split("T")[0];
                      field.onChange(formattedDate);
                    }
                  }}
                  dateFormat="yyyy-MM-dd"
                  className="date-picker"
                  showPopperArrow={false}
                />
              )}
            />

            <img src={calendar} alt="calendar" />
          </InputWrapper>
        </StyledDate>

        <StyledDropDown>
          <InputWrapper onClick={() => setIsPaymentOpen((isOpen) => !isOpen)}>
            <label>Payment Terms</label>
            <DropDownValue>
              <p>{paymentTerm}</p>
            </DropDownValue>
            {isPaymentOpen ? (
              <StyledChevronUp size={13} />
            ) : (
              <StyledChevronDown size={13} />
            )}

            {isPaymentOpen && (
              <ChooseTerm>
                {[...Array(30)].map((_, index) => (
                  <OneOption
                    key={index}
                    onClick={(e) => choosePaymentTerm(e, index)}
                  >
                    {index + 1} days
                  </OneOption>
                ))}
              </ChooseTerm>
            )}
          </InputWrapper>
        </StyledDropDown>
      </Inputs>
    </StyledAboutProject>
  );
}

const StyledAboutProject = styled.div`
  margin-top: 41px;
`;

const Inputs = styled.div`
  display: grid;
  column-gap: 25px;
  row-gap: 23px;
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: 616px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const StyledDate = styled.div`
  grid-column: span 2;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 9px;

  & > label {
    font-weight: 500;
    font-size: 13px;
    color: ${({ theme }) => theme.labelTxt};
  }

  & .date-picker {
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.oneInvoiceBg};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 4px;
    padding-left: 20px;
    font-weight: 700;
    font-size: 15px;
    color: ${({ theme }) => theme.txtColor};
    cursor: pointer;
    font-family: inherit;
  }

  & > img {
    position: absolute;
    width: 16px;
    height: 16px;
    right: 16px;
    top: 37px;
    cursor: pointer;
  }
`;

const StyledDropDown = styled.div`
  grid-column: span 2;
`;

const DropDownValue = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.oneInvoiceBg};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  padding-left: 20px;
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.txtColor};
  cursor: pointer;
  font-family: inherit;
`;

const StyledChevronDown = styled(FaChevronDown)`
  position: absolute;
  right: 16px;
  top: 37px;
  color: #7c5dfa;
  font-size: 16px;
  pointer-events: none;
`;

const StyledChevronUp = styled(FaChevronUp)`
  position: absolute;
  right: 16px;
  top: 37px;
  color: #7c5dfa;
  font-size: 16px;
  pointer-events: none;
`;

const ChooseTerm = styled.div`
  position: absolute;
  top: 96px;
  width: 100%;
  height: 191px;
  background-color: ${({ theme }) => theme.filterBg};
  box-shadow: 0px 10px 20px 0px #00000040;
  border-radius: 8px;
  overflow-y: auto;
`;

const OneOption = styled.p`
  padding: 16px 0px 16px 24px;
  color: ${({ theme }) => theme.txtColor};
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.25px;
  border-bottom: 1px solid ${({ theme }) => theme.checkboxBg};
`;
