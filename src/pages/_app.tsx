import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { grand } from '@/utils/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return <main className={grand.className}><Component {...pageProps} /></main>
}
