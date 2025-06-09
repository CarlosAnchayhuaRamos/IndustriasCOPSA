import { BsMailbox, BsWhatsapp } from "react-icons/bs";
import logo from "/public/assets/logo-copsa-png.png";

function contacto() {
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
            Contactanos:
          </h1>
          <div>
            <div className="lg:mx-10 lg:flex lg:justify-center space-x-5">
              <a
                href="https://api.whatsapp.com/send?phone=51980732693"
                target="_blank"
                className="flex justify-center space-x-5"
              >
                <BsWhatsapp size={30} className="mt-7" />
              </a>
              <h1 className="text-3xl lg:text-4xl pb-5 lg:p-5">
                +51 980732693
              </h1>
            </div>
            <div className="lg:flex lg:justify-center space-x-5">
              <div className="lg:mx-10 flex justify-center space-x-5">
                <a
                  href="/"
                  target="_blank"
                  className="flex justify-center space-x-5"
                >
                  <BsMailbox size={30} className="mt-7" />
                </a>
              </div>
              <h1 className="text-3xl lg:text-4xl pb-5 lg:p-5">
                licasw@hotmail.com
              </h1>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-around lg:items-center text-center p-5">
          <h1 className="lg:flex text-3xl font-bold text-[#00A651] lg:text-5xl">
            Ubicación:
          </h1>
          <div className="lg:w-min flex justify-center bg-white rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d485.59904004315564!2d-74.19851023541074!3d-13.175490538492538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m0!4m3!3m2!1d-13.175482703680935!2d-74.19842306362051!5e0!3m2!1ses!2spe!4v1745944785388!5m2!1ses!2spe"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default contacto;
