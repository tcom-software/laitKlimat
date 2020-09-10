import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "@styles/theme";
// import GTAG from "utils/gtag";

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
        ...initialProps,
        isProduction,
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

  // setGoogleTags() {
  //   return {
  //     __html: `
  //       window.dataLayer = window.dataLayer || [];
  //       function gtag(){dataLayer.push(arguments);}
  //       gtag('js', new Date());
  //       gtag('config', '${GTAG.GA_TRACKING_ID}');
  //     `,
  //   };
  // }

  // setYandexMetrika() {
  //   return {
  //     __html:
  //       '!function(e,t,a,n,c,m,r){e.ym=e.ym||function(){(e.ym.a=e.ym.a||[]).push(arguments)},e.ym.l=1*new Date,m=t.createElement(a),r=t.getElementsByTagName(a)[0],m.defer=1,m.src="https://mc.yandex.ru/metrika/tag.js",r.parentNode.insertBefore(m,r)}(window,document,"script"),ym(57218449,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0});',
  //   };
  // }

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

          {
            // isProduction && (
            //   <>
            //     {/* Global site tag (gtag.js) - Google Analytics */}
            //     <script
            //       async
            //       src="https://www.googletagmanager.com/gtag/js?id=UA-147552183-1"
            //     />
            //     <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            //     {/* Yandex.Metrika counter */}
            //     <script dangerouslySetInnerHTML={this.setYandexMetrika()} />
            //     <noscript>
            //       <div>
            //         <img
            //           src="https://mc.yandex.ru/watch/57218449"
            //           style={{ position: "absolute", left: "-9999px" }}
            //           alt="yandex"
            //         />
            //       </div>
            //     </noscript>
            //   </>
            // )
          }
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
