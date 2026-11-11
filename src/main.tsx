import React from "react";
import ReactDOM from "react-dom/client";
import App from "./PortalApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/CURSOS-ENFERMER-A/sw.js", {
        scope: "/CURSOS-ENFERMER-A/",
      })
      .catch((error) => {
        console.error("No se pudo registrar el service worker:", error);
      });
  });
}
