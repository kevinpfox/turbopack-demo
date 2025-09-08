import Head from 'next/head';
import App, { AppContext, AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import theme from '../src/theme';

export default function NextAppWrapper(props: AppProps) {
  const { Component, pageProps } = props;


  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}

NextAppWrapper.getInitialProps = async (appContext: AppContext) => {
  // request headers host middleware rewrite check
  const { req } = appContext.ctx;
  console.log("\n\n||| req?.headers?.host...");
  console.log(req?.headers?.host);

  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};