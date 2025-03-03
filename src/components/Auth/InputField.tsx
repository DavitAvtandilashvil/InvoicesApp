import styled from "styled-components";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  title: string;
  placeholder: string;
  inputType: string;
  register: UseFormRegisterReturn;
  error?: string;
}

export default function InputField({
  title,
  placeholder,
  inputType,
  register,
  error,
}: InputFieldProps) {
  return (
    <InputWrapper>
      <label>{title}</label>
      <input type={inputType} placeholder={placeholder} {...register} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  margin-bottom: 16px;

  label {
    font-size: 14px;
    color: #555;
    margin-bottom: 8px;
    display: block;
  }

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    outline: none;

    &:focus {
      border-color: #007bff;
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;
