import logo from "/src/assets/logo-copsa-png.png";

function nosotros() {
  return (
    <>
      <div className=" max-w-full my-10 p-5 lg:px-20  ">
        <a className="transition pl-2 " target="_blank">
          <img
            src={logo}
            className="logo lg:max-w-1/2 items-center justify-center mx-auto hover:scale-105 duration-500"
            alt="COPSA logo"
          />
        </a>
        <div className="lg:flex lg:justify-around lg:items-center text-center p-5">
          <h1 className="lg:flex text-3xl font-bold text-[#00A651] lg:text-5xl">
            Sobre nosotros
          </h1>
          <p className="mt-4 lg:text-lg text-[#333333] lg:max-w-1/2">
            Industrias COPSA E.I.R.L. nació con el firme propósito y la búsqueda
            permanente de brindar productos de alta calidad que nos permite, en
            la actualidad, competir con las exigencias del mercado de alimentos.
          </p>
        </div>
        <div className="lg:flex lg:justify-around lg:items-center text-center p-5">
          <h1 className="lg:flex text-3xl font-bold text-[#00A651] lg:text-5xl">
            Misión
          </h1>
          <p className="mt-4 lg:text-lg text-[#333333] lg:max-w-1/2">
            Tenemos como misión el brindar soluciones en la provisión de
            alimentos, contando con herramientas que nos faculta a cumplir con
            las exigencias y necesidades de proveedores, colaboradores, socios y
            comunidad.
          </p>
        </div>
        <div className="lg:flex lg:justify-around lg:items-center text-center p-5">
          <h1 className="lg:flex text-3xl font-bold text-[#00A651] lg:text-5xl">
            Equipo
          </h1>
          <p className="mt-4 lg:text-lg text-[#333333] lg:max-w-1/2">
            Nuestro equipo, profesionales en administración y control en el
            proceso de selección, conservación y presentación de alimentos; está
            especializado en gestión de calidad e inocuidad alimentaria, con el
            fin de garantizar que nuestros productos sean seguros para el
            consumo.
          </p>
        </div>
        <div className="lg:flex lg:justify-around lg:items-center text-center p-5">
          <p className="mt-4 lg:text-lg text-[#333333] lg:max-w-1/2">
            Por ello, Industrias COPSA E.I.R.L. puede brindar con total
            seguridad; precios competitivos, puntualidad en las entregas,
            garantía, confiabilidad y rapidez. Nuestro personal está al tanto de
            todas estas fortalezas y es responsable de esforzarse al máximo para
            satisfacer las exigencias de nuestros clientes.
          </p>
        </div>
      </div>
    </>
  );
}

export default nosotros;
