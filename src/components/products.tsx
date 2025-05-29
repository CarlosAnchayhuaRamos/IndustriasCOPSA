import Article from "./card";

function products() {
  const articles = [
    {
      title: "Harinas extruidas",
      description:
        " Producto elaborado a partir de granos seleccionados los cuales son sometidos al proceso de extrusión, en donde se aplica alta temperatura y presión produciéndose una serie de cambios en la forma, estructura y composición del alimento, pero preservando todas las características nutritivas. Aporta principalmente proteínas de origen vegetal, también una buena cantidad de hidratos de carbono",
      image: "/src/assets/harinasExtruidas.png",
      url: "/productos/harinas",
    },
    {
      title: "Hojuelas",
      description:
        "Producto elaborado a partir de granos seleccionados como los cuales son sometidos al proceso de extrusión, en donde se aplica alta temperatura y presión produciéndose una serie de cambios en la forma, estructura y composición del alimento, pero preservando todas las características nutritivas. Aporta principalmente proteínas de origen vegetal, también una buena cantidad de hidratos de carbono",
      image: "/src/assets/hojuelas.png",
      url: "/productos/hojuelas",
    },
  ];
  return (
    <>
      <div className=" max-w-full my-10 p-5 lg:px-20 bg-[#F5F5F5] ">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl m-5 lg:m-5 font-bold text-[#4A2E1D]">
            Productos
          </h1>
        </div>

        <div className="lg:flex lg:flex-wrap lg:justify-around p-5">
          {articles.map((article) => (
            <Article {...article} />
          ))}
        </div>
      </div>
    </>
  );
}

export default products;
