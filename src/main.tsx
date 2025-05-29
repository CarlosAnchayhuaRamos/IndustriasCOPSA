import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav.tsx";
import Footer from "./components/footer.tsx";
import Harinas from "./components/pages/harinas.tsx";
import Hojuelas from "./components/pages/hojuelas.tsx";
import Nosotros from "./components/pages/nosotros.tsx";
import Contacto from "./components/pages/contacto.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <StrictMode>
            <App />
          </StrictMode>
        }
      />
      <Route
        path="/productos/harinas"
        element={
          <>
            <Nav />
            <Harinas />
            <Footer />
          </>
        }
      />
      <Route
        path="/productos/hojuelas"
        element={
          <>
            <Nav />
            <Hojuelas />
            <Footer />
          </>
        }
      />
      <Route
        path="/nosotros"
        element={
          <>
            <Nav />
            <Nosotros />
            <Footer />
          </>
        }
      />
      <Route
        path="/contacto"
        element={
          <>
            <Nav />
            <Contacto />
            <Footer />
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);
