import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <StyledAuth>
      <AuthContainer>
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <Form>
          {isSignUp && (
            <InputField>
              <label>Username</label>
              <input type="text" placeholder="Enter your username" />
            </InputField>
          )}
          <InputField>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </InputField>
          <InputField>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </InputField>
          <Button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</Button>
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

const InputField = styled.div`
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
