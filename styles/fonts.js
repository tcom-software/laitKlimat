export const fontFaces = (publicPath = "/") => `
  @font-face {
    font-family: 'Yandex Sans';
    src: url('${publicPath}fonts/YandexSansText-Regular.woff2') format('woff2'),
        url('${publicPath}fonts/YandexSansText-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Yandex Sans';
    src: url('${publicPath}fonts/YandexSansText-Bold.woff2') format('woff2'),
        url('${publicPath}fonts/YandexSansText-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
}
`;

export const fonts = {
  primary: 'Yandex Sans',
};
