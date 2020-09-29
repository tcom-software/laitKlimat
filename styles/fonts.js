export const fontfaces = (publicPath = "/") => `
  @font-face {
    font-family: 'Century Gothic';
    src: url('${publicPath}fonts/CenturyGothic.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  } 
  @font-face {
    font-family: 'Century Gothic';
    src: url('${publicPath}fonts/CenturyGothic-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
}
`;

export const fonts = {
  primary: "Century Gothic",
};
