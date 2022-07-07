import { analytics } from "../lib/firebase";
import "../styles/index.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const routers = useRouter();
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      analytics.logScreenView({
        screen_name: "SignUpScreen",
        screen_class: "SignUpScreen",
      });
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
