import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import theme from "@styles/theme";
import GTAG from "utils/gtag";
import YM from "utils/yandex";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

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
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  setGoogleTags() {
    return {
      __html: ` 
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GTAG.GA_TRACKING_ID}');
      `,
    };
  }

  setGoogleTagManager() {
    return {
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-N9LSKZZ');`,
    };
  }

  setYandexMetrika() {
    return {
      __html: `!function(e,t,a,n,c,m,r){e.ym=e.ym||function(){(e.ym.a=e.ym.a||[]).push(arguments)},e.ym.l=1*new Date,m=t.createElement(a),r=t.getElementsByTagName(a)[0],m.defer=1,m.src="https://mc.yandex.ru/metrika/tag.js",r.parentNode.insertBefore(m,r)}(window,document,"script"),ym(${YM.YM_ID},"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0});`,
    };
  }

  setYandexMap() {
    return {
      __html:
        'let myMap,myPlacemark;function init(){myMap=new ymaps.Map("map",{center:[55.812313,37.606477],zoom:12}),myPlacemark=new ymaps.Placemark([55.812313,37.606477],{hintContent:"Laitklimat.ru",balloonContent:"Климатическая Компания N1"},{iconLayout:"default#image",iconImageHref:"/images/footer/location.png",iconImageSize:[60,60],iconImageOffset:[-20,-38]}),myMap.geoObjects.add(myPlacemark)}window.ymaps.ready(init);',
    };
  }

  render() {
    const { isProduction } = this.props;

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
          <meta name="keywords" content="" />
          <meta
            httpEquiv="Content-Security-Policy"
            components="upgrade-insecure-requests"
          />
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
          {isProduction && (
            <>
              {/* Global site tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GTAG.GA_TRACKING_ID}`}
              />
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
              {/* End Global site tag (gtag.js) - Google Analytics */}

              {/* Google Tag Manager */}
              {/* <script dangerouslySetInnerHTML={this.setGoogleTagManager()} /> */}
              {/* End Google Tag Manager */}

              {/* Yandex.Metrika counter */}
              <script dangerouslySetInnerHTML={this.setYandexMetrika()} />
              <noscript>
                <div>
                  <img
                    src={`https://mc.yandex.ru/watch/${YM.YM_ID}`}
                    style={{ position: "absolute", left: "-9999px" }}
                    alt="yandex"
                  />
                </div>
              </noscript>
              {/* End Yandex.Metrika counter */}
            </>
          )}
        </Head>
        <body>
          {isProduction && (
            <>
              {/* Google Tag Manager (noscript) */}
              {/* <noscript>
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-N9LSKZZ"
                  width={0}
                  height={0}
                  style={{ display: "none", visibility: "hidden" }}
                />
              </noscript> */}
              {/* End Google Tag Manager (noscript) */}
            </>
          )}
          <Main />
          <div id="portal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
