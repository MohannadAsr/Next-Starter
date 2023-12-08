import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Html } from 'next/document';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <div dir={router.locale == 'ar' ? 'rtl' : 'ltr'}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
