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
              Quiénes Somos
            </p>
            <h2 className={`text-3xl md:text-4xl ${fontPoppins700.className}`}>
              Por qué nace este proyecto
            </h2>
            <p className="text-gray-600">
              La salud mental ha tomado con los años la importancia que se
              merece. Mente Sana nace con la intención de acercar la salud
              mental a todo el mundo desde la intimidad de su hogar. Llevamos
              años ayudando a miles de personas a conseguir la mejor versión de
              si mismo y a volver a tener una vida plena y feliz.
            </p>

            <div className="flex flex-col-reverse md:flex-row items-center gap-5 mt-20">
              <div className="w-full md:w-1/2 text-start">
                <p
                  className={`text-3xl md:text-4xl py-5 ${fontPoppins700.className}`}
                >
                  ¿Qué nos diferencia?
                </p>
                <p className={`my-5 ${fontPoppins700.className}`}>
                  Nuestra mayor propuesta de valor
                </p>
                <p className="text-gray-600">
                  Nuestros profesionales y asequibilidad permitirá ahorrar a
                  cualquier cliente a la hora de realizar una terapia
                  psicológica.
                </p>
                <p className={`my-5 ${fontPoppins700.className}`}>
                  Nuestra mayor preocupación
                </p>
                <p className="text-gray-600">
                  Tu bienestar, tu desarrollo y tu felicidad.
                </p>

                <div className="flex flex-col md:flex-row gap-3 mt-5">
                  <div className="w-full space-y-3">
                    <SintomaItem title="Privacidad: En Fortaleza garantizamos que el cliente contará con una privacidad plena en su relación psicólogo/paciente." />
                    <SintomaItem title="Respeto: En Mente Sana cuidamos a todos nuestros usuarios y a nuestros psicólogos respetando sus derechos y su dignidad." />
                    <SintomaItem title="Primera calidad: Todos nuestros psicólogos son profesionales en sus respectivas ramas lo cual garantizará un servicio responsable y de calidad." />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 grid place-items-center">
                <Image
                  src="/images/nosotros.jpg"
                  alt="Ansiedad y depresión"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="w-full py-10 grid place-items-center">
            <div className="w-full md:w-10/12 aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/QmFTLHbp1As?si=1ETpGZ_jZzoWRBS7"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
