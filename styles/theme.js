import * as breakpoints from "./breakpoints";
import * as grid from "./grid";
import { fonts } from "./fonts";
import Color from "color";

const colors = {
  primary: "#000000",
  secondary: "#2591D1", // colors.blue700
  tercary: "#59B52A",
  fourth: "#626262",
  gray: "#9E9E9E",
  gray000: "#F2F2F2",
  gray100: "#E8E8E8",
  gray300: "#A2A2A2",
  white: "#FFF",
  black: "#000",
  placeholder: "#9E9E9E", // colors.gray
  footer: "#282828",
  footerDark: "#111111",
  blueFon: "#65B3DB",
  blue100: "#86C9F1",
  blue300: "#5C9CC2",
  blue500: "#4AA9E2",
  blue700: "#2591D1",
  blue900: "#3079A5",
};

const shadow = {
  effect1: `0 2px 10px ${Color(colors.primary).fade(0.8)}`,
  effect1Hover: `0 2px 15px ${Color(colors.primary).fade(0.8)}`,
  effect3: `3px 5px 10px ${Color(colors.primary).fade(0.75)}`,
  // effect2: "0px 0px 20px rgba(0, 0, 0, 0.15)",
};

const dropShadow = {
  btn: `drop-shadow(0 2px 10px ${Color(colors.black).fade(0.9)})`,
  banner: `drop-shadow(-5px -5px 30px ${Color(colors.white).fade(
    0.4
  )}) drop-shadow(15px 10px 20px ${Color(colors.black).fade(0.65)})`,
  effect2: `drop-shadow(0.0625em 0.25em 0.3125em ${colors.tercary})`,
};

const gradients = {
  primary: `linear-gradient(90deg, ${colors.blueFon} 0%, #77C5EC 100%)`,
  secondary: `linear-gradient(90deg, ${colors.blueFon} 0%, #97D5F4 0.01%, #70CFB8 67.71%)`,
  tercary: `linear-gradient(90deg, ${colors.blueFon} 0%, #93A6DD 51.04%, #F2A6EB 100%)`,
  btn: `linear-gradient(90deg, ${colors.secondary} 0%, #337FAC 100.18%);`,
};

export default {
  fonts,
  breakpoints,
  grid,
  colors,
  shadow,
  dropShadow,
  gradients,
  zIndex: {
    // Keep all zIndexes here in one place so it’s easy to see what order things are in
    header: 99,
    searchBar: 100,
    modal: 101,
    notification: 200,
    // nav: 100,
    // cart: 101,
    // pageLoadingBar: 103,
  },
};
