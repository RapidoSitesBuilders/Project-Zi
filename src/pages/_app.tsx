import type { AppProps } from 'next/app';
// import { Fira_Code } from 'next/font/google';
import { startMoralis } from '@/components/web3/helper';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from 'react-query';
import ModalsContainer from '@/components/modal-views/container';
import DrawersContainer from '@/components/drawer-views/container';
// import SettingsButton from '@/components/settings/settings-button';
// import SettingsDrawer from '@/components/settings/settings-drawer';
import { WalletProvider } from '@/lib/hooks/use-connect';
import 'overlayscrollbars/overlayscrollbars.css';
// base css file
import 'swiper/css';
import 'swiper/css/pagination';
import '@/assets/css/scrollbar.css';
import '@/assets/css/globals.css';
import '@/assets/css/additional.css';
import '@/assets/css/range-slider.css';
import { useState, useEffect } from 'react';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// const firaCode = Fira_Code({
//   weight: ['400', '500', '700'],
//   style: ['normal'],
//   subsets: ['latin'],
//   variable: '--font-body',
// });

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    setBackground();
    startMoralis();
  });

  const setBackground = () => {
    const body = document.querySelector('body');
    if (body) {
      body.style.backgroundImage = `url(${location.origin}/images/banner_bg.jpg)`;
    }
  };
  //could remove this if you don't need to page level layout
  const getLayout = Component.getLayout ?? ((page) => page);
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <Head>
        {/* maximum-scale 1 meta tag need to prevent ios input focus auto zooming */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
        <title>Zi Network App</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          <WalletProvider>
            {/* <div className={`${firaCode.variable} font-body`}> */}
            {getLayout(<Component {...pageProps} />)}
            {/* <SettingsButton /> */}
            {/* <SettingsDrawer /> */}
            <ModalsContainer />
            <DrawersContainer />
            {/* </div> */}
          </WalletProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default CustomApp;
