import "../styles/index.css";
import { useEffect } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";
import useScreenViewAnalytics from "../lib/hooks/useScreenViewAnalytics";

function MyApp({ Component, pageProps }) {
  useScreenViewAnalytics("Index");
  return <Component {...pageProps} />;
}

export default MyApp;
