import { MouseEvent, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  colorthemebg?: string;
  colorthemetxt?: string;
  hoverthemebg?: string;
  hoverthemetxt?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  size = "medium",
  colorthemebg = "paidButtonBg",
  colorthemetxt = "buttonTxt",
  hoverthemebg = "paidButtonHoverBg",
  hoverthemetxt = "",
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <StyledButton
      size={size}
      colorthemebg={colorthemebg}
      colorthemetxt={colorthemetxt}
      hoverthemebg={hoverthemebg}
      hoverthemetxt={hoverthemetxt}
      onClick={onClick}
      type={type}
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
  hoverthemetxt: string;
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
  font-family: inherit;
  padding-top: 4px;

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
    color: ${({ theme, hoverthemetxt }) => theme[hoverthemetxt]};
  }
`;
