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
              Drogodependencia
            </h2>
            <p className="text-gray-600">
              La drogodependencia es un problema de salud causado por el consumo
              frecuente de sustancias adictivas, drogas. La adicción supone un
              cambio en el estilo de vida, tanto físico como psicológico. Este
              se caracteriza por el uso compulsivo y continuo.
            </p>
            <p className="text-gray-600 mt-5">
              El abuso de drogas incluye diferentes tipos de comportamiento: el
              experimental o lúdico; el consumo de drogas psicoactivas para
              aliviar síntomas o problemas; y el consumo en el que se desarrolla
              una dependencia a raíz del uso continuado para aliviar las
              molestias o la abstinencia.
            </p>
            <div className="flex flex-col-reverse md:flex-row items-center gap-5 mt-20">
              <div className="w-full md:w-1/2 text-start">
                <p
                  className={`text-3xl md:text-4xl py-5 ${fontPoppins700.className}`}
                >
                  ¿Por qué se produce?
                </p>
                <p className="text-gray-600">
                  La causa fundamental de la drogodependencia es la sustancia
                  adictiva que contenga la droga. El acceso al consumo de una
                  sustancia que provoca adicción conlleva a la intoxicación y un
                  ciclo-autodestructivo de dependencia del paciente a la
                  sustancia.
                </p>
                <p className="text-gray-600 mt-5">
                  El perfil de paciente que padece una drogadicción es muy
                  variado y depende de varios factores, como su contexto o el
                  nivel de accesibilidad de la sustancia en cuestión.
                </p>
                <p className={`my-5 ${fontPoppins700.className}`}>
                  ¿Qué síntomas presenta?
                </p>

                <div className="flex flex-col md:flex-row gap-3 mt-5">
                  <div className="w-full md:w-1/2 space-y-3">
                    <SintomaItem title="Dificultad para controlar el consumo de ciertas sustancias." />
                    <SintomaItem title="Fuerte deseo y obsesión por consumir la sustancia." />
                    <SintomaItem title="Abandono de los intereses más allá de consumir la sustancia, así como vida social y las actividades que antes le habían interesado." />
                  </div>
                  <div className="w-full md:w-1/2 space-y-3">
                    <SintomaItem title="Persistencia en el consumo de la sustancia, a pesar de ser consciente de los efectos perjudiciales que ésta le provoca." />
                    <SintomaItem title="Síndrome de abstinencia al dejar de consumir dicha sustancia." />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 grid place-items-center">
                <Image
                  src="/images/img4.png"
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
