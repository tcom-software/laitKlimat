import { HTMLAttributes } from "react";
import styled from "styled-components";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  background: string;
}

export const StyledPicture = styled.picture<SectionProps>``;
