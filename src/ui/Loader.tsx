import styled, { keyframes } from "styled-components";

// Keyframes for loader animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5); /* Semi-transparent background */
  z-index: 9999;
`;

const Spinner = styled.div`
  border: 8px solid #f3f3f3; /* Light grey background color */
  border-top: 8px solid #3498db; /* Blue color for the spinner */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1.5s linear infinite;

  /* Responsive size adjustment */
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

export default Loader;
