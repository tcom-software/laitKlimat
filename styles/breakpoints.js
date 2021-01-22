// import inDOM from 'dom-helpers/canUseDOM'
// import { getScrollBarWidth } from '../helpers/measure'

const unit = "px";
const step = 2;

export const values = {
  min: 0,
  fab: 480,
  xs: 768,
  sm: 960,
  md: 1024,
  lg: 1440,
  xl: 1760,
  xxl: 1920,
};

export const keys = Object.keys(values);

export function up(key) {
  const value = typeof values[key] === "number" ? values[key] : key;
  return `@media (min-width:${value}${unit})`;
}

export function down(key) {
  const endIndex = keys.indexOf(key);
  const upperbound = values[keys[endIndex]];

  if (endIndex === keys.length) {
    // md down applies to all sizes
    return up("xs");
  }

  const value =
    typeof upperbound === "number" && endIndex > 0 ? upperbound : key;
  return `@media (max-width:${value - step / 100}${unit})`;
}

export function between(start, end) {
  const endIndex = keys.indexOf(end);

  if (endIndex === keys.length) {
    return up(start);
  }

  return (
    `@media (min-width:${values[start] || start}${unit}) and ` +
    `(max-width:${(values[keys[endIndex]] || end) - step / 100}${unit})`
  );
}

export function only(key) {
  return between(key, key);
}

export function width(key) {
  return values[key];
}

// export function current () {
//   if (inDOM) {
//     const width = document.documentElement.clientWidth + getScrollBarWidth()
//     for (let i = keys.length - 1; i >= 0; --i) {
//       const bp = keys[i]
//       if (values[bp] <= width) {
//         return bp
//       }
//     }
//   } else {
//     return keys[0]
//   }
// }
