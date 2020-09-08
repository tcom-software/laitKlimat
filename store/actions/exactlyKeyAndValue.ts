import { ActionType } from "@redux/types";

export const exactlyKeyAndValue = (types: Array<string>): ActionType =>
  types.reduce((acc, type) => ({ ...acc, [type]: type }), {});
