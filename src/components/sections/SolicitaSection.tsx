import { fontPoppins300, fontPoppins700 } from "@/utils/MyFonts";
import Link from "next/link";
import React from "react";

export default function SolicitaSection() {
  return (
    <section
      className={`w-full px-6 sm:px-12 md:px-20 lg:px-32 2xl:px-72 bg-gray-100 ${fontPoppins300.className}`}
    >
      <div className="w-full flex flex-col items-center bg-dark-blue p-12 md:p-24 rounded-3xl gap-4 relative overflow-hidden">
        <span className="w-48 h-48 bg-blue-900/20 rounded-full absolute -left-28 -bottom-28"></span>
        <span className="w-60 h-60 bg-yellow-500 rounded-full absolute -right-32 -top-32"></span>
        <p className="text-yellow-600 font-bold text-lg">
          ¡El momento es ahora!
        </p>
        <h2 className={`text-white text-4xl ${fontPoppins700.className}`}>
          Solicita una cita gratuita ahora
        </h2>
        <Link
          href="#"
          className="px-6 py-3 bg-light-blue text-white text-bold rounded shadow border border-light-blue hover:bg-transparent hover:border hover:border-white transition-all duration-300 mt-5"
        >
          Cambia tu vida ahora
        </Link>
        <div className="w-full">
          <ul className="w-full flex flex-col gap-2 justify-center md:flex-row md:justify-between md:flex-wrap">
            <li className="flex items-start md:items-center justify-center gap-1 text-white text-sm">
              <span className="bg-gray-500/50 rounded-full p-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-check"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </span>
              Tu primera sesión es gratis
            </li>
            <li className="flex items-start md:items-center justify-center gap-1 text-white text-sm">
              <span className="bg-gray-500/50 rounded-full p-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-check"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </span>
              Reserva una fecha y hora a tu gusto
            </li>
            <li className="flex items-start md:items-center justify-center gap-1 text-white text-sm">
              <span className="bg-gray-500/50 rounded-full p-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-check"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </span>
              Asigneramos al profesional más indicado
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
