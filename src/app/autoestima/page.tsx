import SintomaItem from "@/components/sections/SintomaItem";
import {
  fontPoppins,
  fontPoppins300,
  fontPoppins500,
  fontPoppins700,
} from "@/utils/MyFonts";
import Image from "next/image";
import React from "react";

export default function Autoestima() {
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
              Autoestima
            </h2>
            <p className="text-gray-600">
              La <strong>autoestima</strong> es un conjunto de percepciones,
              pensamientos, evaluaciones, sentimientos y tendencias de
              comportamientos dirigidos hacia uno mismo, hacia nuestra manera de
              ser, y hacia los rasgos de nuestro cuerpo y nuestro carácter.
            </p>
            <p className="text-gray-600 mt-5">
              La autoestima se encuentra de forma innata en cada individuo desde
              que nace y va sufriendo modificaciones a lo largo de nuestra vida
              a medida que nos desarrollamos. No siempre tenemos la misma
              autoestima, ya que cambia con la relación que vamos desarrollando
              con el mundo que nos rodea así como con la sociedad en la que
              vivimos.
            </p>
            <div className="flex flex-col-reverse md:flex-row items-center gap-5 mt-20">
              <div className="w-full md:w-1/2 text-start">
                <p
                  className={`text-3xl md:text-4xl py-5 ${fontPoppins700.className}`}
                >
                  Tipos de Autoestima
                </p>
                <p className={`${fontPoppins700.className}`}>
                  Autoestima alta y estable
                </p>
                <p className="text-gray-600">
                  Este tipo podría corresponderse con el de autoestima fuerte o
                  elevada, ya que las personas con ese tipo de autoestima no se
                  ven influidas por lo que ocurra a su alrededor de forma
                  negativa.
                </p>
                <p className="text-gray-600">
                  Además, es capaz de defender su punto de vista de forma
                  calmada y se desenvuelven de forma exitosa a lo largo del
                  tiempo sin derrumbarse.
                </p>
                <p className={`pt-5 ${fontPoppins700.className}`}>
                  Autoestima alta e inestable
                </p>
                <p className="text-gray-600">
                  Estas personas también se caracterizan por presentar una alta
                  autoestima pero no por mantenerla en el tiempo.
                </p>
                <p className="text-gray-600">
                  No suelen tener las herramientas suficientes para enfrentarse
                  a ambientes estresantes y que los suelen desestabilizar, por
                  lo que no aceptan el fracaso ni tampoco aceptan posturas
                  opuestas a las de ellos.
                </p>
              </div>
              <div className="w-full md:w-1/2 grid place-items-center">
                <Image
                  src="/images/self_esteem.webp"
                  alt="Ansiedad y depresión"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5 mt-20">
              <div className="w-full md:w-1/2 grid place-items-center">
                <Image
                  src="/images/low_self_esteem.png"
                  alt="Ansiedad y depresión"
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-full md:w-1/2 text-start">
                <p
                  className={`text-3xl md:text-4xl py-5 ${fontPoppins700.className}`}
                >
                  Tipos de Autoestima
                </p>
                <p className={`${fontPoppins700.className}`}>
                  Autoestima estable y baja
                </p>
                <p className="text-gray-600">
                  Estas personas se caracterizan por infravalorarse en todo
                  momento, es decir, por pensar que no pueden hacer aquello que
                  se propongan.
                </p>
                <p className="text-gray-600">
                  Por otro lado, se muestran muy indecisos y temen equivocarse,
                  por lo que siempre buscarán el apoyo de otra persona. Tampoco
                  luchan por sus puntos de vista ya que de forma general se
                  valoran de forma negativa.
                </p>
                <p className={`pt-5 ${fontPoppins700.className}`}>
                  Autoestima inestable y baja
                </p>
                <p className="text-gray-600">
                  Podríamos decir que las personas que tienen esta autoestima
                  son aquellas que prefieren pasar desapercibidas en todo
                  momento y que piensan que no pueden conseguir nada.
                </p>
                <p className="text-gray-600">
                  Por otro lado, suelen ser muy sensibles e influenciables y
                  prefieren no enfrentarse a nadie incluso aunque sepan que la
                  otra persona no lleva la razón.
                </p>
                <p className={`pt-5 ${fontPoppins700.className}`}>
                  Autoestima inflada
                </p>
                <p className="text-gray-600">
                  Las personas con este tipo de autoestima se caracterizan por
                  tener una personalidad fuerte y creerse mejor que las personas
                  que tienen a su alrededor. Por ello, nunca suelen escuchar ni
                  prestarles atención alguna.
                </p>
                <p className="text-gray-600">
                  También suelen culpabilizar a los demás en situaciones
                  estresantes y tienen un ego muy grande. No son capaces de
                  corregir sus propios errores ni tampoco criticarse a sí
                  mismos. Se caracterizan por ser muy materialistas y
                  superficiales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
