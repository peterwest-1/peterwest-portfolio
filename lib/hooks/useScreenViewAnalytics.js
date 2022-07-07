import { useEffect } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";

const useScreenViewAnalytics = (screenName) => {
  return useEffect(() => {
    const analytics = getAnalytics();
    logEvent(analytics, "screen_view", {
      firebase_screen: screenName,
      firebase_screen_class: screenName,
    });
  }, []);
};

export default useScreenViewAnalytics;
