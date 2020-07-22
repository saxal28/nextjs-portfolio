import { useEffect } from "react"
import {GoogleAnalytics} from "../util/ga";
import "../styles/index.scss"

export default function App({ Component, pageProps }) {

  useEffect(() => {
    GoogleAnalytics.init()
    GoogleAnalytics.logPageView()
  }, [])

  return <Component {...pageProps} />
}