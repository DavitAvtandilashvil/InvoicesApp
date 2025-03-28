import styled from "styled-components";
import InputField from "./InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignUp } from "../../hooks/useSignUp";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

export default function SignUp() {
  const { signUp } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    signUp(data.name, data.email, data.password);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        title="Name"
        placeholder="Enter Your Name"
        inputType="text"
        register={register("name", { required: "Name is required" })}
        error={errors.name?.message}
      />

      <InputField
        title="Email"
        placeholder="Enter Your Email"
        inputType="email"
        register={register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email format",
          },
        })}
        error={errors.email?.message}
      />
      <InputField
        title="Password"
        placeholder="Enter Your Password"
        inputType="password"
        register={register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        error={errors.password?.message}
      />

      <Button type="submit">Sign Up</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
