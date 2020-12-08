import '../styles/globals.css'
import type { AppProps /*, AppContext */ } from 'next/app'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
