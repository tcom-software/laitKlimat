const eases = {
  OutQuart: x => 1 - Math.pow(1 - x, 4),
  OutCirc: x => Math.sqrt(1 - Math.pow(x - 1, 2)),
  OutQuint: x => 1 - Math.pow(1 - x, 5),
};

export default eases;
