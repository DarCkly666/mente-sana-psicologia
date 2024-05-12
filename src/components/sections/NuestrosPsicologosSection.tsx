import {
  fontPoppins300,
  fontPoppins500,
  fontPoppins700,
} from "@/utils/MyFonts";
import React from "react";

export default function NuestrosPsicologosSection() {
  return (
    <section
      className={`w-full px-6 sm:px-12 md:px-20 lg:px-32 2xl:px-72 py-32 bg-gray-100 ${fontPoppins300.className}`}
    >
      <div className="w-full flex flex-col md:flex-row gap-5 items-center">
        <div className="w-full md:w-1/2 p-5">
          <div className="aspect-square">
            <div className="bg-blue-800/20 w-full h-full rounded-full p-5">
              <div
                className="w-full h-full rounded-full bg-center bg-cover border border-gray-400"
                style={{
                  backgroundImage:
                    "url('https://img.freepik.com/fotos-premium/avatar-digital-psicologo-ia-generativa_934475-9252.jpg')",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          className={`w-full md:w-1/2 space-y-5 text-black/55 ${fontPoppins500.className}`}
        >
          <h2 className={`text-4xl text-dark-blue ${fontPoppins700.className}`}>
            Nuestros Psicólogos
          </h2>
          <p>
            Hemos realizado una{" "}
            <strong>selección de los mejores profesionales</strong> de las
            mejores universidades, colegiados{" "}
            <strong>con varios años de experiencia</strong>.
          </p>
          <p>
            <strong>Contamos con una amplía gama de especialistas</strong> para
            poder así aportar a todas las ramas de la psicología y continuar{" "}
            <strong>siendo líderes en el sector a nivel Europeo</strong>.
          </p>
          <p>
            Los psicólogos de <strong>MENTE SANA</strong> pasan por un exigente
            proceso de selección para{" "}
            <strong>
              verificar que cuentan con todas las facultades necesarias
            </strong>{" "}
            para conseguir que tu vida vuelva a ser plena y feliz.
          </p>
        </div>
      </div>
    </section>
  );
}
