import { Ref } from "react";

export type Variant = "primary" | "secondary" | "tercary";

export type ButtonProps = {
  title: string;
  type: "button" | "reset" | "submit";
  variant: Variant;
  className?: string;
  refName?: Ref<HTMLButtonElement>;
  loading?: boolean;
  loadingMode?: "dark" | "light";
  [x: string]: any;
};
