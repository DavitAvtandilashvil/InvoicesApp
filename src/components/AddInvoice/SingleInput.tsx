import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";

interface SingleInputProps {
  title: string;
  inputType: string;
  register: UseFormRegisterReturn;
  error?: string;
  gridcolumn?: string;
  gridcolumntablet?: string;
}

export default function SingleInput({
  title,
  error,
  gridcolumn,
  register,
  inputType,
  gridcolumntablet,
}: SingleInputProps) {
  return (
    <StyledSingleInput
      gridcolumn={gridcolumn ?? ""}
      gridcolumntablet={gridcolumntablet ?? ""}
    >
      <InputWrapper>
        <label>{title}</label>
        <input type={inputType} {...register} />
      </InputWrapper>
      {error && <Error>{error}</Error>}
    </StyledSingleInput>
  );
}

interface StyledSingleInputProps {
  gridcolumn: string;
  gridcolumntablet: string;
}

const StyledSingleInput = styled.div<StyledSingleInputProps>`
  grid-column: ${({ gridcolumn }) => gridcolumn};

  @media screen and (min-width: 616px) {
    grid-column: ${({ gridcolumntablet }) => gridcolumntablet};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  & > label {
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.labelTxt};
  }

  & > input {
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.oneInvoiceBg};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 4px;
    padding-left: 20px;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.25px;
    font-family: inherit;
    color: ${({ theme }) => theme.txtColor};
  }
`;

const Error = styled.p`
  color: #ec5757;
  font-size: 13px;
  margin-top: 5px;
`;
