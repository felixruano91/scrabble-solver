import styled from "styled-components";
import {
  disabled as disabledStyle,
  primary,
  primaryDark,
  secondary,
} from "../../styles/colors";

interface UploadButtonProps {
  disabled: boolean;
}

export const UploadButton = styled.button`
  background-color: ${({ disabled }: UploadButtonProps) => disabled ? disabledStyle : primary};
  color: ${primaryDark};
  padding: 14px;
  border-radius: 6px;
  font-weight: bold;
  &:hover {
    border-right: ${({ disabled }: UploadButtonProps) => !disabled && `4px solid ${secondary}`};
    border-bottom: ${({ disabled }: UploadButtonProps) => !disabled && `4px solid ${secondary}`};
  }
`;
