import { useState } from "react";

function carousel() {
  const images = [
    "/assets/products.png",
    "/assets/products.png",
    "/assets/products.png",
    "/assets/products.png",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative lg:w-full lg:h-dvh overflow-hidden rounded-xl shadow-lg bg-[#F5F5F5] ">
      <img
        src={images[current]}
        alt={`slide-${current}`}
        className="lg:w-full  lg:h-dvh transition-transform duration-500"
      />
      <button
        onClick={prevSlide}
        className="absolute h-10 top-1/2 left-4 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute h-10 top-1/2 right-4 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white"
      >
        ›
      </button>
    </div>
  );
}

export default carousel;
