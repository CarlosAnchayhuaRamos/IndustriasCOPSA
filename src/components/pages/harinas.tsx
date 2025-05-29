import Article from "./product";

function harinas() {
  const articles = [
    {
      index: 0,
      title: "Mezcla de Harinas",
      description:
        " Producto elaborado a partir de granos seleccionados de Trigo, Quinua, Kiwicha, Soya, Ajonjolí, Maíz y Arveja, los cuales son sometidos al proceso de extrusión en donde se aplica alta temperatura y presión, produciéndose una serie de cambios en la forma, estructura y composición del alimento, pero preservando todas las características nutritivas",
      image: "/src/assets/MezclaHarinas.jpeg",
      url: "",
    },
    {
      index: 1,
      title: "Harina de Trigo",
      description:
        "Producto elaborado a partir de granos seleccionados de Trigo los cuales son sometidos al proceso de extrusión, en donde se aplica alta temperatura y presión produciéndose una serie de cambios en la forma, estructura y composición del alimento, pero preservando todas las características nutritivas. Aporta principalmente proteínas de origen vegetal, también una buena cantidad de hidratos de carbono",
      image: "/src/assets/HarinaTrigo.jpeg",
      url: "",
    },
    {
      index: 2,
      title: "Harina de Quinua",
      description:
        "Producto elaborado a partir de granos seleccionados de Quinua los cuales son sometidos al proceso de extrusión, en donde se aplica alta temperatura y presión produciéndose una serie de cambios en la forma, estructura y composición del alimento, pero preservando todas las características nutritivas.",
      image: "/src/assets/HarinaQuinua.jpeg",
      url: "",
    },
    {
      index: 3,
      title: "Harina de Kiwicha",
      description:
        " Producto elaborado a partir de granos seleccionados de Kiwicha los cuales son sometidos al proceso de extrusión, en donde se aplica alta temperatura y presión produciéndose una serie de cambios en la forma, estructura y composición del alimento, pero preservando todas las aracterísticas nutritivas.",
      image: "/src/assets/HarinaKiwicha.jpeg",
      url: "",
    },
    {
      index: 4,
      title: "Harina de Maíz",
      description:
        " Producto elaborado a partir de granos seleccionados de Maíz los cuales son sometidas al proceso de extrusión, en donde se aplica alta temperatura y presión produciéndose una serie de cambios en la forma, estructura y composición del alimento, pero preservando todas las características nutritivas",
      image: "/src/assets/HarinaMaiz.jpeg",
      url: "",
    },
    {
      index: 5,
      title: "Harina de Haba",
      description:
        "Producto elaborado a partir de granos seleccionados de Habas los cuales son sometidos al proceso de extrusión, en donde se aplica alta temperatura y presión produciéndose una serie de cambios en la forma, estructura y composición del alimento pero preservando todas las características nutritivas. Reservando todas las características nutritivas.",
      image: "/src/assets/HarinaHaba.jpeg",
      url: "",
    },
    {
      index: 6,
      title: "Harina de Cebada",
      description:
        "Producto elaborado a partir de granos seleccionados de Habas los cuales son sometidos al proceso de extrusión, en donde se aplica alta temperatura y presión produciéndose una serie de cambios en la forma, estructura y composición del alimento pero preservando todas las características nutritivas. Reservando todas las características nutritivas.",
      image: "/src/assets/HarinaCebada.jpeg",
      url: "",
    },
  ];
  return (
    <>
      <div className=" max-w-full p-5 lg:px-20 bg-[#F5F5F5] ">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl m-5 lg:m-5 font-bold text-[#4A2E1D]">
            Harinas Extruidas
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

export default harinas;
