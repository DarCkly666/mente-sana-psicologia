import SintomaItem from "@/components/sections/SintomaItem";
import { fontPoppins, fontPoppins300, fontPoppins700 } from "@/utils/MyFonts";
import Image from "next/image";
import React from "react";

export default function AnsiedadDepresion() {
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
              Ansiedad y depresión
            </h2>
            <p className="text-gray-600">
              Sentir ansiedad de modo ocasional es una parte normal de la vida.
              Sin embargo, las personas con trastornos de ansiedad con
              frecuencia tienen preocupaciones y miedos intensos, excesivos y
              persistentes sobre situaciones diarias. Con frecuencia, en los
              trastornos de ansiedad se dan episodios repetidos de sentimientos
              repentinos de ansiedad intensa y miedo o terror que alcanzan un
              máximo en una cuestión de minutos (ataques de pánico).
            </p>
            <div className="flex flex-col-reverse md:flex-row items-center gap-5 mt-20">
              <div className="w-full md:w-1/2 text-start">
                <p
                  className={`text-3xl md:text-4xl py-5 ${fontPoppins700.className}`}
                >
                  Síntomas más comunes de la ansiedad
                </p>
                <p className="text-gray-600">
                  El trastorno de La depresión es un trastorno mental frecuente,
                  que se caracteriza por la presencia de tristeza, pérdida de
                  interés o placer, sentimientos de culpa o falta de autoestima,
                  trastornos del sueño o del apetito, sensación de cansancio y
                  falta de concentración.generalizada se caracteriza por una
                  ansiedad y una preocupación persistentes y excesivas por
                  actividades o eventos, incluso asuntos comunes de rutina.
                </p>
                <p className="text-gray-600 mt-2">
                  La preocupación es desproporcionada con respecto a la
                  situación actual, es difícil de controlar y afecta la forma en
                  que te sientes físicamente.
                </p>
                <div className="flex flex-col md:flex-row gap-3 mt-5">
                  <div className="w-full md:w-1/2 space-y-3">
                    <SintomaItem title="Sensación de nerviosismo, agitación o tensión" />
                    <SintomaItem title="Sensación de peligro inminente, pánico o catástrofe" />
                    <SintomaItem title="Aumento del ritmo cardíaco" />
                    <SintomaItem title="Respiración acelerada (hiperventilación)" />
                  </div>
                  <div className="w-full md:w-1/2 space-y-3">
                    <SintomaItem title="Sensación de debilidad o cansancio" />
                    <SintomaItem title="Tener problemas para conciliar el sueño" />
                    <SintomaItem title="Padecer problemas gastrointestinales (GI)" />
                    <SintomaItem title="Tener dificultades para controlar las preocupaciones" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 grid place-items-center">
                <Image
                  src="/images/anxiety.webp"
                  alt="Ansiedad y depresión"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5 mt-20">
              <div className="w-full md:w-1/2 grid place-items-center">
                <Image
                  src="/images/depression.webp"
                  alt="Ansiedad y depresión"
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-full md:w-1/2 text-start">
                <p
                  className={`text-3xl md:text-4xl py-5 ${fontPoppins700.className}`}
                >
                  Síntomas más comunes de la depresión
                </p>
                <p className="text-gray-600">
                  La <strong>depresión</strong> es un trastorno mental
                  frecuente, que se caracteriza por la presencia de tristeza,
                  pérdida de interés o placer, sentimientos de culpa o falta de
                  autoestima, trastornos del sueño o del apetito, sensación de
                  cansancio y falta de concentración.
                </p>
                <div className="flex flex-col md:flex-row gap-3 mt-5">
                  <div className="w-full md:w-1/2 space-y-3">
                    <SintomaItem title="Estado de ánimo irritable o bajo la mayoría de las veces" />
                    <SintomaItem title="Dificultad para conciliar el sueño o exceso de sueño" />
                    <SintomaItem title="Cambio grande en el apetito, a menudo con aumento o pérdida de peso" />
                    <SintomaItem title="Cansancio y falta de energía" />
                  </div>
                  <div className="w-full md:w-1/2 space-y-3">
                    <SintomaItem title="Dificultad para concentrarse" />
                    <SintomaItem title="Movimientos lentos o rápidos" />
                    <SintomaItem title="Inactividad y retraimiento de las actividades usuales" />
                    <SintomaItem title="Sentimientos de desesperanza o abandono" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
