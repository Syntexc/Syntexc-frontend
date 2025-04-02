"use client";
import { getCookie, setCookie } from "@/utlis/cookies";
import { useState, useEffect } from "react";


export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!getCookie("cookieConsent")) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    setCookie("cookieConsent", "true", 365);
    setShowBanner(false);
  };

  return showBanner ? (
    <div className="cookie-banner">
      <p>We use cookies to improve your experience. By using our site, you agree to our use of cookies.</p>
      <button onClick={acceptCookies}>Accept</button>
    </div>
  ) : null;
}
