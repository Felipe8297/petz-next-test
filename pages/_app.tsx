import 'reset-css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={inter.className}><Component {...pageProps} /></main>
}