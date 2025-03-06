import { ReactNode } from "react";
import styled from "styled-components";

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return <StyledWrapepr>{children}</StyledWrapepr>;
}

const StyledWrapepr = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;
