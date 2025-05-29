import logo from "/src/assets/logo-copsa-png.png";

function sobre() {
  return (
    <>
      <div className=" max-w-full my-10 p-5 lg:px-20  ">
        <a className="transition pl-2 ">
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
            Somos una empresa dedicada a la producción y comercialización de
            productos alimenticios de alta calidad. Nos enfocamos en ofrecer
            soluciones innovadoras y saludables para nuestros clientes. <br />
            <br />
            Nuestro compromiso es brindar productos que cumplan con los más
            altos estándares de calidad y seguridad alimentaria, utilizando
            ingredientes frescos y naturales. <br />
            <br />
            Trabajamos con un equipo de profesionales altamente capacitados y
            apasionados por la industria alimentaria, lo que nos permite
            desarrollar productos innovadores y adaptados a las necesidades de
            nuestros clientes.
          </p>
        </div>
      </div>
    </>
  );
}

export default sobre;
