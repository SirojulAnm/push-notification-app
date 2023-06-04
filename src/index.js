import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then((registration) => {
        // ServiceWorker registration successful
        console.log("ServiceWorker registered with scope:", registration.scope);
      })
      .catch((error) => {
        // ServiceWorker registration failed
        console.log("ServiceWorker registration failed:", error);
      });
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
