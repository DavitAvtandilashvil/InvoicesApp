import { useState } from "react";
import styled from "styled-components";
import SignUp from "../components/Auth/SignUp";
import SignIn from "../components/Auth/SignIn";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <StyledAuth>
      <AuthContainer>
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
        {isSignUp && <SignUp />}
        {!isSignUp && <SignIn />}
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
