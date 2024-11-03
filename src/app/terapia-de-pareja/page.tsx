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
              Terapia de Pareja
            </h2>
            <p className="text-gray-600">
              La terapia de pareja, también denominada psicoterapia de pareja,
              es el tratamiento clínico psicológico que se brinda a ambos
              miembros de una relación sentimental en su condición de
              enamorados, novios, esposos, convivientes, separados y/o
              divorciados, por parte de un psicoterapeuta o terapeuta
              profesional, debidamente capacitado y facultado por los
              respectivos organismos oficiales reguladores del país donde ejerce
              su profesión.
            </p>
            <p className="text-gray-600 mt-5">
              En una terapia de pareja, el psicoterapeuta se centrará
              fundamentalmente en mejorar la comunicación en la relación. De
              esta manera, se aprenderá a controlar los impulsos y emociones
              para afrontar y resolver los conflictos que puedan surgir de una
              manera más eficiente. Además, se enseñará a ver los problemas
              desde otra perspectiva, intentando relativizar los mismos sin que
              los personalismos, la soberbia u orgullo pueda distorsionar los
              juicios de valor.
            </p>
            <div className="flex flex-col-reverse md:flex-row items-center gap-5 mt-20">
              <div className="w-full md:w-1/2 text-start">
                <p
                  className={`text-3xl md:text-4xl py-5 ${fontPoppins700.className}`}
                >
                  Tipos de terapia para parejas
                </p>
                <p className={`pt-5 ${fontPoppins700.className}`}>
                  Terapia de pareja sistémica
                </p>
                <p className="text-gray-600">
                  Uno de los tipos de terapia de pareja más conocido, y que
                  también lleva a la aplicación de la terapia familiar, es la
                  que se basa en el paradigma sistémica.
                </p>
                <p className={`pt-5 ${fontPoppins700.className}`}>
                  Terapia de pareja Cognitivo - Conductual
                </p>
                <p className="text-gray-600">
                  La terapia cognitivo-conductual es la más prevalente y
                  reconocida a día de hoy en la mayor parte de facetas de la
                  psicología. Este tipo de terapia suele ir vinculada a las
                  cogniciones, creencias, expectativas y pensamientos de cada
                  sujeto, así como en los comportamientos derivados de ellos.
                </p>
                <p className={`pt-5 ${fontPoppins700.className}`}>
                  Terapia de pareja psicodinámica
                </p>
                <p className="text-gray-600">
                  La terapia de pareja llevada a cabo desde la perspectiva
                  psicodinámica suele centrarse en la presencia de conflictos
                  producidos en la infancia o en el desarrollo temprano como
                  causa de la generación de problemas de pareja en el presente.
                </p>
                <p className={`pt-5 ${fontPoppins700.className}`}>
                  Terapia de pareja humanista
                </p>
                <p className="text-gray-600">
                  Otro de los tipos de terapia de pareja, quizás menos conocida
                  que las anteriores, es la basada en el enfoque humanista.
                  Desde este enfoque se busca que los miembros de la pareja
                  desarrollen y optimicen sus potencialidades, se derriben
                  máscaras y roles y se autodescubran a sí mismos.
                </p>
              </div>
              <div className="w-full md:w-1/2 grid place-items-center">
                <Image
                  src="/images/terapia-pareja.png"
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
