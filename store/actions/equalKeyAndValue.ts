import { ActionType } from "@redux/types";

export const equalKeyAndValue = (types: Array<string>): ActionType =>
  types.reduce((acc, type) => ({ ...acc, [type]: type }), {});
