import { css } from "styled-components";
import * as breakpoints from "@styles/breakpoints";

export const mmp = (name, def, mqValues) => {
  const mqs = Object.entries(mqValues)
  .reduce(
    (acc, [key, value]) =>
      css`
        ${acc}
        ${breakpoints.down(key)} {
          ${name + ":" + value};
        }
      `,
    `${name}: ${def};`
  );

  return mqs;
};
