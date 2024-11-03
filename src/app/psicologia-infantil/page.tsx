import SintomaItem from "@/components/sections/SintomaItem";
import { fontPoppins, fontPoppins300, fontPoppins700 } from "@/utils/MyFonts";
import Image from "next/image";
import React from "react";

export default function PsicologiaInfantil() {
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
              ¿Qué es la psicología infantil?
            </h2>
            <p className="text-gray-600">
              La psicología infantil es el estudio del comportamiento del niño
              desde el nacimiento hasta la adolescencia. En este análisis, el
              especialista tratará los fenómenos y las irregularidades del
              desarrollo psíquico del niño.
            </p>
            <p className="text-gray-600 mt-5">
              Esta rama de la psicología se centra en la evolución de los
              aspectos físicos, motores, cognitivos, perceptivos, afectivos y
              sociales. La psicología infantil atiende dos variables: la
              ambiental, por ejemplo la influencia de los padres o los amigos;
              yla biológica, determinada por la genética.
            </p>
            <div className="flex flex-col-reverse md:flex-row items-center gap-5 mt-20">
              <div className="w-full md:w-1/2 text-start">
                <p
                  className={`text-3xl md:text-4xl py-5 ${fontPoppins700.className}`}
                >
                  Problemas más comunes
                </p>
                <p className={`my-5 ${fontPoppins700.className}`}>
                  ¿Cuáles son los beneficios de la psicología infantil?
                </p>
                <p className="text-gray-600">
                  Son varios aspectos positivos, sobre todo, la superación de
                  los sentimientos y sensaciones que incomodan al niño. El
                  tratamiento resuelve los conflictos internos y externos que
                  provocan una perturbación emocional o física, promoviendo así
                  el alivio de los síntomas, además de ayudar en el desarrollo
                  de pequeños y también de jóvenes. La psicología infantil ayuda
                  al niño a redescubrirse, orientándolo a seguir por su propio
                  camino, siendo independiente, sin importar juicios o
                  etiquetas.
                </p>
                <p className="text-gray-600 mt-2 italic">
                  *Hoy en día más del 40% de los niños sufren alguno de estos
                  trastornos y el 80% de ellos no cuentan con ayuda de un
                  especialista.
                </p>
                <div className="flex flex-col md:flex-row gap-3 mt-5">
                  <div className="w-full md:w-1/2 space-y-3">
                    <SintomaItem title="Fobia escolar" />
                    <SintomaItem title="Autismo" />
                    <SintomaItem title="Bullying" />
                    <SintomaItem title="Depresión Infantil" />
                  </div>
                  <div className="w-full md:w-1/2 space-y-3">
                    <SintomaItem title="Amigos imaginarios" />
                    <SintomaItem title="Tics nerviosos" />
                    <SintomaItem title="TDAH - Trastorno de déficit de atención" />
                    <SintomaItem title="Divorcio de padres" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 grid place-items-center">
                <Image
                  src="/images/brain.png"
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
