import {
  fontPoppins,
  fontPoppins300,
  fontPoppins500,
  fontPoppins700,
} from "@/utils/MyFonts";
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
            <li>Política de Privacidad</li>
            <li>Política de Cookies</li>
            <li>Términos y Condiciones</li>
          </ul>
        </div>
        <div>
          <h3 className={`text-white mb-3 ${fontPoppins700.className}`}>
            Tratamientos
          </h3>
          <ul className="space-y-2">
            <li>Ansiedad y Depresión</li>
            <li>Autoestima</li>
            <li>Psicología Infantil</li>
            <li>Duelo</li>
          </ul>
        </div>
        <div>
          <h3 className={`text-white mb-3 ${fontPoppins700.className}`}>
            Tratamientos
          </h3>
          <ul className="space-y-2">
            <li>Ámbito Laboral</li>
            <li>Terapia de Parejas</li>
            <li>Drogodependencias</li>
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
          © 2022 Mente Sana - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
