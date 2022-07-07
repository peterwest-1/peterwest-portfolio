import { useEffect } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "../firebase";

const useScreenViewAnalytics = (screenName) => {
  useEffect(() => {
    const analytics = getAnalytics(app);
    logEvent(analytics, "screen_view", {
      firebase_screen: screenName,
      firebase_screen_class: screenName,
    });
  }, [screenName]);
};

export default useScreenViewAnalytics;
