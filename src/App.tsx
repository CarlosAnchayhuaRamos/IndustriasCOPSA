import Nav from "./components/nav";
import Carousel from "./components/carousel";
import Sobre from "./components/sobre";
import Products from "./components/products";
import Footer from "./components/footer";
import { useRef } from "react";

function App() {
  return (
    <>
      <Nav />
      <Carousel />
      <Sobre />
      <Products />
      <Footer />
    </>
  );
}

export default App;
