import {
  fontPoppins300,
  fontPoppins,
  fontPoppins500,
  fontPoppins700,
} from "@/utils/MyFonts";
import React from "react";

export default function PlanesPreciosSection() {
  return (
    <section
      className={`w-full px-6 sm:px-12 md:px-20 lg:px-32 2xl:px-72 pb-32 bg-gray-100 ${fontPoppins300.className}`}
    >
      <div className="w-full text-center space-y-4">
        <h2 className={`text-light-blue ${fontPoppins500.className}`}>
          Planes y Precios
        </h2>
        <p className={`text-4xl text-dark-blue ${fontPoppins700.className}`}>
          Los precios más económicos en España​
        </p>
        <p className="text-gray-700">
          Disponemos de 4 planes, según cada necesidad y tratamiento
        </p>
        <div>
          <div
            className={`flex flex-col justify-center gap-4 md:flex-row md:justify-around mb-10 ${fontPoppins.className}`}
          >
            <div className="flex items-center gap-3 justify-center text-start">
              <div className="aspect-square w-12 h-12 p-4 bg-blue-400/40 rounded-full text-blue-600">
                <svg
                  aria-hidden="true"
                  className="e-font-icon-svg e-far-credit-card"
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"></path>
                </svg>
              </div>
              <p className="hover:text-dark-blue transition-all">
                1 especialista asignado a tu terapia
              </p>
            </div>
            <div className="flex items-center gap-3 justify-center text-start">
              <div className="aspect-square w-12 h-12 p-4 bg-green-400/40 rounded-full text-green-600">
                <svg
                  aria-hidden="true"
                  className="e-font-icon-svg e-far-calendar-check"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"></path>
                </svg>
              </div>
              <p className="hover:text-dark-blue transition-all">
                Obtén una sesión gratis
              </p>
            </div>
            <div className="flex items-center gap-3 justify-center text-start">
              <div className="aspect-square w-12 h-12 p-4 bg-red-400/40 rounded-full text-red-600">
                <svg
                  aria-hidden="true"
                  className="e-font-icon-svg e-far-calendar-times"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M311.7 374.7l-17 17c-4.7 4.7-12.3 4.7-17 0L224 337.9l-53.7 53.7c-4.7 4.7-12.3 4.7-17 0l-17-17c-4.7-4.7-4.7-12.3 0-17l53.7-53.7-53.7-53.7c-4.7-4.7-4.7-12.3 0-17l17-17c4.7-4.7 12.3-4.7 17 0l53.7 53.7 53.7-53.7c4.7-4.7 12.3-4.7 17 0l17 17c4.7 4.7 4.7 12.3 0 17L257.9 304l53.7 53.7c4.8 4.7 4.8 12.3.1 17zM448 112v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
                </svg>
              </div>
              <p className="hover:text-dark-blue transition-all">
                Cancela cuándo quieras
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="shadow-xl rounded-lg flex flex-col justify-between p-12 space-y-5">
            <p
              className={`text-light-blue text-xl text-start ${fontPoppins.className}`}
            >
              Sesión Individual
            </p>
            <p className={`text-gray-700 ${fontPoppins.className}`}>
              <span
                className={`text-4xl text-dark-blue ${fontPoppins700.className}`}
              >
                34$
              </span>
              /sesión
            </p>
            <ul className="py-3">
              <li className="text-start flex items-start gap-3">
                <span className="min-w-2 min-h-2 rounded-full bg-light-blue inline-block mt-2"></span>
                Única sesión para casos puntuales
              </li>
            </ul>
            <button
              className={`px-6 py-3 border border-light-blue text-light-blue rounded hover:bg-light-blue hover:text-white transition-all duration-300 ${fontPoppins500.className}`}
            >
              Elegir plan
            </button>
          </div>
          <div className="shadow-xl rounded-lg flex flex-col justify-between p-12 space-y-5">
            <p
              className={`text-light-blue text-xl text-start ${fontPoppins.className}`}
            >
              Bono Compañía
            </p>
            <p className={`text-gray-700 ${fontPoppins.className}`}>
              <span
                className={`text-4xl text-dark-blue ${fontPoppins700.className}`}
              >
                25$
              </span>
              /sesión
            </p>
            <ul className="py-3">
              <li className="text-start flex items-start gap-3">
                <span className="min-w-2 min-h-2 rounded-full bg-light-blue inline-block mt-2"></span>
                4 sesiones por 99,99$
              </li>
            </ul>
            <button
              className={`px-6 py-3 border border-light-blue text-light-blue rounded hover:bg-light-blue hover:text-white transition-all duration-300 ${fontPoppins500.className}`}
            >
              Elegir plan
            </button>
          </div>
          <div className="shadow-xl rounded-lg flex flex-col justify-between p-12 space-y-5 bg-gradient-to-r from-dark-blue to-light-blue relative">
            <p
              className={`text-yellow-500 text-xl text-start ${fontPoppins.className}`}
            >
              Bono Felicidad
            </p>
            <p className={`text-gray-300 ${fontPoppins.className}`}>
              <span
                className={`text-4xl text-white ${fontPoppins700.className}`}
              >
                19,99$
              </span>
              /sesión
            </p>
            <ul className="py-3">
              <li className="text-start flex items-start gap-3 text-gray-300">
                <span className="min-w-2 min-h-2 rounded-full bg-yellow-500 inline-block mt-2"></span>
                8 sesiones por 159$
              </li>
            </ul>
            <button
              className={`px-6 py-3 text-white rounded bg-light-blue border border-light-blue hover:bg-yellow-600 hover:border-yellow-600 transition-all duration-300 ${fontPoppins500.className}`}
            >
              Elegir plan
            </button>
            <span className="absolute -top-7 right-6">
              <svg
                width="56"
                height="70"
                viewBox="0 0 56 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.2605 3.08451C52.3941 1.17426 50.8033 0 49.0835 0H27.7273H6.37205C4.65223 0 3.06147 1.17426 2.19505 3.08451L0 7.92208H27.7273H55.4545L53.2605 3.08451Z"
                  fill="#C4C4C4"
                ></path>
                <path
                  d="M10.1384 68.144C10.1394 68.7198 10.4114 69.2478 10.8454 69.5226C11.2795 69.7973 11.8089 69.7746 12.2235 69.4616L24.0948 60.5163C26.3051 58.851 29.1485 58.851 31.3587 60.5163L43.2311 69.4616C43.6466 69.7746 44.1751 69.7985 44.6102 69.5238C45.0452 69.249 45.3151 68.7198 45.3161 68.144C45.3438 56.4569 45.3592 13.1982 45.3592 13.1982C45.3592 8.27996 46.9887 3.55282 49.9091 0H27.7283H5.54546C8.46582 3.55282 10.0953 8.28116 10.0953 13.1994C10.0953 13.1994 10.1117 56.4569 10.1384 68.144Z"
                  fill="white"
                ></path>
                <path
                  d="M27.0489 24.9271C27.3483 24.0057 28.6517 24.0057 28.9511 24.9271L31.1432 31.6738C31.2771 32.0858 31.661 32.3647 32.0943 32.3647H39.1882C40.1569 32.3647 40.5597 33.6044 39.776 34.1738L34.0369 38.3435C33.6864 38.5981 33.5397 39.0495 33.6736 39.4615L35.8657 46.2082C36.1651 47.1295 35.1106 47.8956 34.3269 47.3262L28.5878 43.1565C28.2373 42.9019 27.7627 42.9019 27.4122 43.1565L21.6731 47.3262C20.8894 47.8956 19.8349 47.1295 20.1343 46.2082L22.3264 39.4615C22.4603 39.0495 22.3136 38.5981 21.9631 38.3435L16.2241 34.1738C15.4403 33.6044 15.8431 32.3647 16.8118 32.3647H23.9057C24.339 32.3647 24.7229 32.0858 24.8568 31.6738L27.0489 24.9271Z"
                  fill="#162D89"
                ></path>
              </svg>
            </span>
          </div>
          <div className="shadow-xl rounded-lg flex flex-col justify-between p-12 space-y-5">
            <p
              className={`text-light-blue text-xl text-start ${fontPoppins.className}`}
            >
              Bono Amor para Parejas
            </p>
            <p className={`text-gray-700 ${fontPoppins.className}`}>
              <span
                className={`text-4xl text-dark-blue ${fontPoppins700.className}`}
              >
                45$
              </span>
              /sesión
            </p>
            <ul className="py-3">
              <li className="text-start flex items-start gap-3">
                <span className="min-w-2 min-h-2 rounded-full bg-light-blue inline-block mt-2"></span>
                4 sesiones cada una para 2 PERSONAS
              </li>
            </ul>
            <button
              className={`px-6 py-3 border border-light-blue text-light-blue rounded hover:bg-light-blue hover:text-white transition-all duration-300 ${fontPoppins500.className}`}
            >
              Elegir plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
