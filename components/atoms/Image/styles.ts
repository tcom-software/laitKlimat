import { HTMLAttributes } from "react";
import styled from "styled-components";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  withShadow: any;
}

export const StyledPicture = styled.picture<SectionProps>``;
