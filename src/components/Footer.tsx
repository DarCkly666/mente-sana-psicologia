import {
  fontPoppins,
  fontPoppins300,
  fontPoppins500,
  fontPoppins700,
} from "@/utils/MyFonts";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer
      className={`w-full bg-dark-blue text-white ${fontPoppins300.className}`}
    >
      <div
        className={`flex flex-col md:flex-row justify-between px-6 sm:px-12 md:px-20 lg:px-32 2xl:px-72 py-10 gap-5 text-gray-400`}
      >
        <div>
          <h3 className={`text-white mb-3 ${fontPoppins700.className}`}>
            Políticas
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-white">
              <Link href="politica-de-privacidad">Política de Privacidad</Link>
            </li>
            <li className="hover:text-white">
              <Link href="politica-de-cookies">Política de Cookies</Link>
            </li>
            <li className="hover:text-white">
              <Link href="terminos-condiciones">Términos y Condiciones</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={`text-white mb-3 ${fontPoppins700.className}`}>
            Tratamientos
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-white">
              <Link href="ansiedad-depresion">Ansiedad y Depresión</Link>
            </li>
            <li className="hover:text-white">
              <Link href="autoestima">Autoestima</Link>
            </li>
            <li className="hover:text-white">
              <Link href="psicologia-infantil">Psicología Infantil</Link>
            </li>
            <li className="hover:text-white">
              <Link href="duelo">Duelo</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={`text-white mb-3 ${fontPoppins700.className}`}>
            Tratamientos
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-white">
              <Link href="ambito-social-laboral">Ámbito Laboral</Link>
            </li>
            <li className="hover:text-white">
              <Link href="terapia-de-pareja">Terapia de Parejas</Link>
            </li>
            <li className="hover:text-white">
              <Link href="drogodependencia">Drogodependencias</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center py-5 space-x-5">
        <a
          href="https://www.facebook.com"
          target="_blank"
          className="w-10 h-10 border rounded-md border-gray-500 text-gray-500 grid place-items-center hover:border-white hover:text-white transition-all duration-300 ease-in-out"
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          className="w-10 h-10 border rounded-md border-gray-500 text-gray-500 grid place-items-center hover:border-white hover:text-white transition-all duration-300 ease-in-out"
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
          </svg>
        </a>
      </div>
      <div className="flex justify-center px-6 py-6 border-t border-gray-700 text-gray-500">
        <p className="text-center">
          © 2022 PS - Todos los derechos reservados
        </p>
      </div>
      <span className="fixed bottom-5 right-5 z-40 flex items-center">
        <span className="mr-3 bg-gray-100 shadow px-2 rounded text-black font-bold">
          <small>Ir a WhatsApp</small>
        </span>
        <a
          href="https://web.whatsapp.com/send?phone=+59112345678&text=Hola%21%2C+quiero+hablar+con+algui%C3%A9n"
          className="p-2 bg-green-500 rounded-full hover:animate-none hover:scale-110 transition-all duration-300 ease-in-out shadow-lg animate-pulse"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>
        </a>
      </span>
    </footer>
  );
}
