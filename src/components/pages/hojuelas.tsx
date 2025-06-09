import Article from "./product";

function hojuelas() {
  const articles = [
    {
      index: 0,
      title: "Hojuelas con Avena y Cañihua",
      description:
        "Producto obtenido a partir de granos de Cañihua, mediante un proceso de laminado y pre cocido. Originaria de las zonas del altiplano peruano, se cultiva en la región Puno (al norte del Lago Titicaca), en Cusco y Arequipa entre los 3800 a 4400 metros sobre el nivel del mar",
      image: "/assets/HojuelaAvenaCañihua.jpeg",
      url: "",
    },
    {
      index: 1,
      title: "Hojuelas con Avena y Maca",
      description:
        "Producto elaborado a partir de granos seleccionados como los cuales son sometidos al proceso de extrusión, preservando todas las características nutritivas. Aporta principalmente proteínas de origen vegetal, también una buena cantidad de hidratos de carbono",
      image: "/assets/HojuelaAvenaMaca.jpeg",
      url: "",
    },
    {
      index: 2,
      title: "Hojuelas con Avena y Quinua",
      description:
        "Producto obtenido a partir de granos seleccionados de Quinua, cereal de origen andino y de la Avena, mediante un proceso de laminado y pre cocido",
      image: "/assets/HojuelaAvenaQuinua.jpeg",
      url: "",
    },
    {
      index: 3,
      title: "Hojuelas con Avena y Kiwicha",
      description:
        "Producto obtenido a partir granos seleccionados de Avena a través del proceso de pre cocción y laminado; y de la Kiwicha a la cual se le atribuye un sinfín de cualidades nutritivas",
      image: "/assets/HojuelaAvenaKiwicha.jpeg",
      url: "",
    },
    {
      index: 4,
      title: "Hojuelas de Quinua",
      description:
        " Las hojuelas precocidas de Quinua sin preservantes ni saborizantes, se elaboran con granos que son clasificados, despedrados, desaponisados, secados, tratados térmicamente antes de ser laminados obteniendo hojuelas de sabor agradable, luego pasan por el proceso de mezcla con micronutrientes con el propósito de prevenir o corregir deficiencias nutricionales",
      image: "/assets/HojuelaQuinua.jpeg",
      url: "",
    },
    {
      index: 5,
      title: "Hojuelas de Kiwicha",
      description:
        " Las hojuelas precocidas de Quinua sin preservantes ni saborizantes, se elaboran con granos que son clasificados, despedrados, desaponisados, secados, tratados térmicamente antes de ser laminados obteniendo hojuelas de sabor agradable, luego pasan por el proceso de mezcla con micronutrientes con el propósito de prevenir o corregir deficiencias nutricionales",
      image: "/assets/HojuelaKiwicha.jpeg",
      url: "",
    },
    {
      index: 6,
      title: "Hojuelas de Avena",
      description:
        " Las hojuelas precocidas de Quinua sin preservantes ni saborizantes, se elaboran con granos que son clasificados, despedrados, desaponisados, secados, tratados térmicamente antes de ser laminados obteniendo hojuelas de sabor agradable, luego pasan por el proceso de mezcla con micronutrientes con el propósito de prevenir o corregir deficiencias nutricionales",
      image: "/assets/HojuelaAvena.jpeg",
      url: "",
    },
  ];
  return (
    <>
      <div className=" max-w-full p-5 lg:px-20 bg-[#F5F5F5] ">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl m-5 lg:m-5 font-bold text-[#4A2E1D]">
            Hojuelas
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

export default hojuelas;
