import SintomaItem from "@/components/sections/SintomaItem";
import { fontPoppins, fontPoppins300, fontPoppins700 } from "@/utils/MyFonts";
import Image from "next/image";
import React from "react";

export default function Duelo() {
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
              Duelo
            </h2>
            <p className="text-gray-600">
              El duelo es el proceso psicológico que se produce tras una
              pérdida, una ausencia, una muerte o un abandono.
            </p>
            <p className="text-gray-600 mt-5">
              Por ejemplo ante la pérdida de una relación afectiva, sea del tipo
              que sea, pudiendo ir desde la pérdida de un trabajo, un cambio de
              residencia, la ruptura de una relación de pareja… Este proceso se
              afronta de distinta manera en cada persona.
            </p>
            <div className="flex flex-col-reverse md:flex-row items-center gap-5 mt-20">
              <div className="w-full md:w-1/2 text-start">
                <p
                  className={`text-3xl md:text-4xl py-5 ${fontPoppins700.className}`}
                >
                  Tipos de duelo
                </p>
                <p className={`my-5 ${fontPoppins700.className}`}>
                  Duelo anticipado
                </p>
                <p className="text-gray-600">
                  La persona sufre el duelo antes de que esta situación ocurra,
                  por ejemplo, cuando una persona tiene una enfermedad que
                  sabemos que no superará. En esta situación la persona sufre el
                  duelo por fallecimiento de una relación afectiva antes de que
                  esto pase.
                </p>
                <p className={`my-5 ${fontPoppins700.className}`}>
                  Duelo patológico
                </p>
                <p className="text-gray-600">
                  En este duelo la pérdida no se acepta y se utilizan
                  estrategias para esquivarlas. Podría negarse el duelo o
                  intensificarlo.
                </p>
                <p className={`my-5 ${fontPoppins700.className}`}>
                  Negación del duelo
                </p>
                <p className="text-gray-600">
                  En este duelo la persona niega la emoción cuando sufre x
                  pérdida, de forma que la reprime y la aguanta. La acción que
                  toma esta persona es racionaliza la situación para no expresar
                  sentimientos. Este tipo de duelo aparece más en hombres, en
                  parte debido a las costumbres culturales: el hombre es fuerte,
                  no llora…
                </p>
                <div className="flex flex-col md:flex-row gap-3 mt-5">
                  <div className="w-full md:w-1/2 space-y-3">
                    <SintomaItem title="Ansiedad" />
                    <SintomaItem title="Miedo" />
                    <SintomaItem title="Culpa" />
                    <SintomaItem title="Confusión" />
                  </div>
                  <div className="w-full md:w-1/2 space-y-3">
                    <SintomaItem title="Negación" />
                    <SintomaItem title="Depresión" />
                    <SintomaItem title="Tristeza" />
                    <SintomaItem title="Shock emocional" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 grid place-items-center">
                <Image
                  src="/images/duelo.png"
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
