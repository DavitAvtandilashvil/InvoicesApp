import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  colorthemebg?: string;
  colorthemetxt?: string;
  hoverthemebg?: string;
}

export default function Button({
  children,
  size = "medium",
  colorthemebg = "paidButtonBg",
  colorthemetxt = "buttonTxt",
  hoverthemebg = "paidButtonHoverBg",
}: ButtonProps) {
  return (
    <StyledButton
      size={size}
      colorthemebg={colorthemebg}
      colorthemetxt={colorthemetxt}
      hoverthemebg={hoverthemebg}
    >
      {children}
    </StyledButton>
  );
}

interface StyledButtonProps {
  size: "small" | "medium" | "large";
  colorthemebg: string;
  colorthemetxt: string;
  hoverthemebg: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 24px;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.25px;
  background-color: ${({ theme, colorthemebg }) => theme[colorthemebg]};
  color: ${({ theme, colorthemetxt }) => theme[colorthemetxt]};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  ${({ size }) => {
    switch (size) {
      case "small":
        return "width: 73px; height: 48px;";
      case "large":
        return "width: 134px; height: 48px;";
      default:
        return "width: 89px; height: 48px;";
    }
  }}

  &:hover {
    background-color: ${({ theme, hoverthemebg }) => theme[hoverthemebg]};
  }
`;
