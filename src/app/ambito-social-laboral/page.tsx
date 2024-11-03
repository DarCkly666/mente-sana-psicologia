import SintomaItem from "@/components/sections/SintomaItem";
import { fontPoppins, fontPoppins300, fontPoppins700 } from "@/utils/MyFonts";
import Image from "next/image";
import React from "react";

export default function AmbitoSocialLaboral() {
  return (
    <main
      className={`bg-gray-100 text-dark-blue relative ${fontPoppins300.className}`}
    >
      <div className="">
        <div className="w-full h-24 text-dark-blue">
          <svg
            width="100%"
            height="170%"
            preserveAspectRatio="none"
            id="svg"
            fill="currentColor"
            viewBox="0 0 1440 390"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0,400 L 0,150 C 158.53333333333336,137.73333333333335 317.0666666666667,125.46666666666667 458,140 C 598.9333333333333,154.53333333333333 722.2666666666667,195.86666666666667 883,202 C 1043.7333333333333,208.13333333333333 1241.8666666666668,179.06666666666666 1440,150 L 1440,400 L 0,400 Z"
              stroke="none"
              stroke-width="0"
              fill-opacity="1"
              transform="rotate(-180 720 200)"
            ></path>
          </svg>
        </div>
        <div className="pt-20 md:pt-28 text-center w-full px-6 sm:px-12 md:px-20 lg:px-32 2xl:px-72 py-28 space-y-5">
          <div>
            <p className={`text-light-blue ${fontPoppins.className}`}>
              Tratamientos
            </p>
            <h2 className={`text-3xl md:text-4xl ${fontPoppins700.className}`}>
              Ámbito Laboral
            </h2>
            <p className="text-gray-600">
              El acoso laboral o mobbing es el proceso por el cual una persona o
              varias ejercen una violencia psicológica extrema sobre un
              compañero de trabajo, produciéndole una sensación de miedo, terror
              o desánimo que afecta tanto su trabajo como su vida personal.
            </p>
            <p className="text-gray-600">
              Esta violencia se ejerce de manera continuada y periódica,
              llegando a desarrollarse a lo largo de meses o incluso años.
            </p>
            <div className="flex flex-col-reverse md:flex-row items-center gap-5 mt-20">
              <div className="w-full md:w-1/2 text-start">
                <p
                  className={`text-3xl md:text-4xl py-5 ${fontPoppins700.className}`}
                >
                  ¿Cuándo acudir a terapia psicológica?
                </p>
                <p className="text-gray-600">
                  Cuando la persona afectada decide hacer un tratamiento
                  psicológico, el proceso de acoso está por lo general muy
                  avanzado, por lo que su entorno laboral se ha condicionado a
                  miedo y ansiedad, le cuesta mantener la concentración, acuden
                  con desordenes somáticos como trastornos del sueño y de la
                  alimentación, ansiedad generalizada con pensamientos
                  catastrofistas, una baja valoración personal y sentimientos de
                  indefensión y desesperanza sobre su futuro.
                </p>
                <p className="text-gray-600 mt-2 italic">
                  *El 61% de los acosadores son los jefes y el 50% de las
                  víctimas informan sufrir síntomas de depresión.
                </p>
              </div>
              <div className="w-full md:w-1/2 grid place-items-center">
                <Image
                  src="/images/ambito-laboral.png"
                  alt="Ansiedad y depresión"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
