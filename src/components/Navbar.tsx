"use client";
import { Poppins } from "next/font/google";
import { useState, useEffect, useRef } from "react";
const poppins = Poppins({
  display: "swap",
  weight: "400",
  variable: "--poppins-400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /*useEffect(() => {
    if (isMenuOpen) {
      // Bloquear scroll
      document.body.style.overflow = "hidden";
    } else {
      // Habilitar scroll
      document.body.style.overflow = "unset";
    }

    const handleResize = () => {
      // Si el ancho de la ventana es mayor a 768px y el menú está abierto, cerrarlo
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Agregar un listener para detectar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiar el efecto
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);*/

  useEffect(() => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    }
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`nav fixed top-0 w-full p-6 sm:px-12 sm:py-5 md:px-20 md:py-8 flex justify-between items-center ${
        isScrolled ? "bg-white shadow" : "bg-transparent"
      } transition-all duration-500 z-50`}
    >
      <a
        href=""
        className={`text-2xl font-bold ${
          isScrolled ? "text-slate-900" : "text-white"
        }`}
      >
        Mente Sana
      </a>
      <div
        className={`cursor-pointer md:hidden ${
          isScrolled ? "text-slate-900" : "text-white"
        }`}
        onClick={() => {
          setIsMenuOpen(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6h16" />
          <path d="M7 12h13" />
          <path d="M10 18h10" />
        </svg>
      </div>
      <ul
        className={`hidden md:flex space-x-4 ${
          isScrolled ? "text-dark-blue" : "text-white/70"
        } ${poppins.className}`}
      >
        <li>
          <a
            href=""
            className={`${
              isScrolled ? "hover:text-light-blue" : "hover:text-white"
            }`}
          >
            Inicio
          </a>
        </li>
        <li className="relative menu__item--submenu">
          <a
            href="#"
            className={`${
              isScrolled ? "hover:text-light-blue" : "hover:text-white"
            } flex gap-1 items-center justify-between`}
          >
            Tratamientos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={14}
              height={14}
              fill="currentColor"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </a>
          <ul className="bg-white shadow text-gray-500 space-y-3 rounded absolute -left-1/2 md:w-72 w-full submenu__container">
            <li>
              <a className="hover:text-light-blue w-full block" href="#">
                Ansiedad & Depresión
              </a>
            </li>
            <li>
              <a className="hover:text-light-blue w-full block" href="#">
                Psicología Infantil
              </a>
            </li>
            <li>
              <a className="hover:text-light-blue w-full block" href="#">
                Duelo
              </a>
            </li>
            <li>
              <a className="hover:text-light-blue w-full block" href="#">
                Autoestima
              </a>
            </li>
            <li>
              <a className="hover:text-light-blue w-full block" href="#">
                Ámbito Social/Laboral
              </a>
            </li>
            <li>
              <a className="hover:text-light-blue w-full block" href="#">
                Terapia De Pareja
              </a>
            </li>
            <li>
              <a className="hover:text-light-blue w-full block" href="#">
                Drogodependencia
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#nosotros"
            className={`${
              isScrolled ? "hover:text-light-blue" : "hover:text-white"
            }`}
          >
            Nosotros
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`${
              isScrolled ? "hover:text-light-blue" : "hover:text-white"
            }`}
          >
            Testimonios
          </a>
        </li>
      </ul>

      {isMenuOpen && (
        <div className="fixed md:hidden left-0 top-0 w-screen h-screen bg-black/70">
          <div className="flex flex-col w-full sm:w-96 h-screen bg-white">
            <div className="p-6 flex items-center justify-between border-b">
              <a href="" className="text-2xl">
                Mente Sana
              </a>
              <div
                className="cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </div>
            </div>
            <ul
              className={`flex flex-col h-full gap-1 p-4 text-sm ${poppins.className}`}
            >
              <li>
                <a
                  href=""
                  className="uppercase hover:bg-slate-600/10 rounded px-2 py-1 block"
                >
                  Inicio
                </a>
              </li>
              <li className="">
                <a
                  className="flex gap-1 items-center justify-between uppercase hover:bg-slate-600/10 rounded px-2 py-1 cursor-pointer"
                  onClick={() => {
                    setIsSubmenuOpen(!isSubmenuOpen);
                  }}
                >
                  Tratamientos
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width={14}
                    height={14}
                    fill="currentColor"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </a>
                <ul
                  className={`w-full flex flex-col gap-1 transition-all delay-1000 overflow-hidden pl-4 ${
                    isSubmenuOpen ? "max-h-max" : "max-h-0"
                  }`}
                >
                  <li className="mt-1">
                    <a
                      className="w-full block capitalize hover:bg-slate-600/10 rounded px-2 py-1"
                      href="#"
                    >
                      Ansiedad & Depresión
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-full block capitalize hover:bg-slate-600/10 rounded px-2 py-1"
                      href="#"
                    >
                      Psicología Infantil
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-full block capitalize hover:bg-slate-600/10 rounded px-2 py-1"
                      href="#"
                    >
                      Duelo
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-full block capitalize hover:bg-slate-600/10 rounded px-2 py-1"
                      href="#"
                    >
                      Autoestima
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-full block capitalize hover:bg-slate-600/10 rounded px-2 py-1"
                      href="#"
                    >
                      Ámbito Social/Laboral
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-full block capitalize hover:bg-slate-600/10 rounded px-2 py-1"
                      href="#"
                    >
                      Terapia De Pareja
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-full block capitalize hover:bg-slate-600/10 rounded px-2 py-1"
                      href="#"
                    >
                      Drogodependencia
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className="uppercase hover:bg-slate-600/10 rounded px-2 py-1 block"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="uppercase hover:bg-slate-600/10 rounded px-2 py-1 block"
                >
                  Testimonios
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
