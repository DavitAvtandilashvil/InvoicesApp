import { useState } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "../components/Auth/InputField";

type FormInputs = {
  name?: string;
  email: string;
  password: string;
};

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <StyledAuth>
      <AuthContainer>
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {isSignUp && (
            <InputField
              title="Name"
              placeholder="Enter Your Name"
              inputType="text"
              register={register("name", { required: "Name is required" })}
              error={errors.name?.message}
            />
          )}
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
          {isSignUp ? (
            <Button type="submit">Sign Up</Button>
          ) : (
            <Button type="submit">Sign In</Button>
          )}
        </Form>
        <Toggle>
          <span>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </span>
          <button onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </Toggle>
      </AuthContainer>
    </StyledAuth>
  );
}

// Styled Components remain the same...

const StyledAuth = styled.div`
  background-color: #f0f2f5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const AuthContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  h2 {
    text-align: center;
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    padding: 30px;
    max-width: 90%;
  }
`;

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

const Toggle = styled.div`
  margin-top: 20px;
  text-align: center;

  span {
    font-size: 14px;
    color: #555;
  }

  button {
    border: none;
    background: none;
    color: #007bff;
    cursor: pointer;
    font-size: 14px;
    text-decoration: underline;

    &:hover {
      color: #0056b3;
    }
  }
`;
