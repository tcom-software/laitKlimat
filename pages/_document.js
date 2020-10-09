import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "@styles/theme";
// import GTAG from "utils/gtag";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    // const styleTags = sheet.getStyleElement();
    // styleTags[0].props.dangerouslySetInnerHTML.__html = styleTags[0].props.dangerouslySetInnerHTML.__html
    //   .replace(/\/\*.*\*\//g, " ")
    //   .replace(/\s+/g, " ");

    // console.log(styleTags[0].props.dangerouslySetInnerHTML.__html);

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const isProduction = process.env.NODE_ENV === "production";
      const initialProps = await Document.getInitialProps(ctx);

      return {
        isProduction,
        ...initialProps,
        styles: <>{initialProps.styles}</>,
      };
    } finally {
      sheet.seal();
    }
  }

  setYandexMap() {
    return {
      __html:
        'let myMap,myPlacemark;function init(){myMap=new ymaps.Map("map",{center:[55.812313,37.606477],zoom:12}),myPlacemark=new ymaps.Placemark([55.812313,37.606477],{hintContent:"Laitklimat.ru",balloonContent:"Климатическая Компания N1"},{iconLayout:"default#image",iconImageHref:"/images/footer/location.png",iconImageSize:[60,60],iconImageOffset:[-20,-38]}),myMap.geoObjects.add(myPlacemark)}window.ymaps.ready(init);',
    };
  }

  render() {
    // const { isProduction } = this.props;

    return (
      <Html lang="ru">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta property="og:url" content="https://www.laitklimat.ru/" />
          <meta name="theme-color" content={theme.colors.secondary} />
          <meta
            property="og:description"
            content="Стандартная установка кондиционеров"
          />
          <meta
            name="description"
            content="Стандартная установка кондиционеров"
          />
          <meta nema="keywords" content="" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest"></link>
          <script
            src="https://api-maps.yandex.ru/2.1/?apikey=b2769c37-b37e-4924-9162-e52f41c8d89f&lang=ru_RU"
            type="text/javascript"
          />
          <script dangerouslySetInnerHTML={this.setYandexMap()} />
          <GlobalStyles />
        </Head>
        <body>
          <Main />
          <div id="portal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
