export const makePriceView = (price, { unit, split }) => {
  return `${String(price).replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    `$1${split}`
  )} ${unit}`;
};
