import logo from "/public/assets/logo-copsa-png.png";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

function nav() {
  const [isOpen, setIsOpen] = useState(false);

  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <nav className=" p-2 my-2 flex items-center justify-between lg:flex-row text-[#00A651] shadow-sm">
      <div className="flex items-center space-x-4">
        <a className="transition pl-2 hover:scale-105 duration-500 " href="/">
          <img src={logo} className="logo react w-60" alt="React logo" />
        </a>
      </div>

      <button
        className="lg:hidden text-[#00A651]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <ul
        className={`absolute z-1 lg:static top-16 left-0 w-full lg:w-auto bg-[#F5F5F5] lg:bg-transparent lg:flex lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 p-5 lg:p-0 transition-all duration-500 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a
            className="cursor-pointer hover:text-[#66BB6A]  transition duration-500 ease-in-out"
            href="/"
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:text-[#66BB6A] transition duration-500 ease-in-out"
            href="/nosotros"
          >
            Nosotros
          </a>
        </li>
        <li className="relative group">
          <button
            className=" flex items-center space-x-2 hover:text-gray-500 transition duration-500 w-full lg:w-auto "
            onClick={() => setSubmenuOpen(!submenuOpen)}
          >
            Productos
            <ChevronDown
              className={`transform transition-transform ${
                submenuOpen ? "rotate-180" : ""
              } lg:hidden`}
              size={18}
            />
          </button>
          <ul
            className={`${
              submenuOpen ? "block" : "hidden"
            } absolute bg-[#F5F5F5] p-4 lg:group-hover:block z-1`}
          >
            <li>
              <a
                className="hover:text-[#66BB6A]  transition duration-500"
                href="/productos/harinas"
              >
                Harinas
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#66BB6A]  transition duration-500"
                href="/productos/hojuelas"
              >
                Hojuelas
              </a>
            </li>
          </ul>
        </li>
        {/* <li className="relative group">
          <button
            className=" flex items-center space-x-2 hover:text-gray-500 transition duration-500 w-full lg:w-auto "
            onClick={() => setSubmenuOpen(!submenuOpen)}
          >
            Projects
            <ChevronDown
              className={`transform transition-transform ${
                submenuOpen ? "rotate-180" : ""
              } lg:hidden`}
              size={18}
            />
          </button>
          <ul
            className={`${
              submenuOpen ? "block" : "hidden"
            } absolute bg-gray-900 p-4 lg:group-hover:block`}
          >
            <li>
              <a
                className="hover:text-gray-500 transition duration-500"
                href="/"
              >
                Frontend
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 transition duration-500"
                href="/"
              >
                Backend
              </a>
            </li>
          </ul>
        </li> */}
        <li>
          <a
            className="cursor-pointer hover:text-[#66BB6A] transition duration-500 ease-in-out"
            href="/contacto"
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default nav;
