export const compose = (...fns) => async input => {
  let args = input;
  for await (const fn of fns) {
    args = await fn(args);
  }

  return args;
};
