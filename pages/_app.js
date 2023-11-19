/** @format */

import "../styles/globals.css";
import '../components/initial/index.css'
import '../styles/Home.module.css'
import '../components/main/main.css'
import { MainProvider } from '../components/context/ButtonContext'
import '../components/seconds/test.css'
import '/styles/news.css'
function MyApp({ Component, pageProps }) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>

  )
}


export default MyApp;
