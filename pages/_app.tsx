import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import middleware from "../middleware"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
