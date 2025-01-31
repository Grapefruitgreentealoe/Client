import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import axios from "axios";
import { baseURL } from "@/static/data";
function MyApp(
  { Component, pageProps }: AppProps,
  navigator: Navigator,
  window: Window
) {
  axios.defaults.baseURL = baseURL;
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("service worker registration successful");
      })
      .catch((err) => {
        console.warn("service worker registration failed", err.message);
      });
  }
  return (
    <Component {...pageProps}>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
    </Component>
  );
}

export default MyApp;
//PWA: https://bkm412.github.io/PWA/
//서비스워커설정: https://jamongjjang.tistory.com/65
//https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register
//템플릿 https://github.com/mvllow/next-pwa-template
