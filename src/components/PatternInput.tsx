import styled from "styled-components";
import { disabled as disabledStyle, primaryDark, primaryLight } from "../styles/colors";

interface PatternInputProps {
  disabled: boolean;
}

export const PatternInput = styled.input`
  background-color: ${({ disabled }: PatternInputProps) => disabled ? disabledStyle : primaryLight};
  color: ${primaryDark};
  padding: 14px;
`
