export function debounce(delay, fn) {
  let timerId;
  return [
    (...args) => {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(...args);
        timerId = null;
      }, delay);
    },
    () => clearTimeout(timerId),
  ];
}
