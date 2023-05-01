import type { AppProps } from 'next/app';
import { ReactNode } from 'react';

import SiteLayout from '@/layout/SiteLayout';

import '@/styles/globals.scss';

const getDefaultLayout = (children: ReactNode) => {
  return <SiteLayout>{children}</SiteLayout>;
}

export default function App({ Component, pageProps }: AppProps) {
  const renderLayout = () => {
    const children = <Component {...pageProps} />;
    const { getLayout = getDefaultLayout } = Component.pageOptions || {};

    return getLayout(children);
  }

  return (
    <>
      {renderLayout()}
    </>
  )
}
