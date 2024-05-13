import { fontPoppins300, fontPoppins700 } from "@/utils/MyFonts";
import React from "react";
import ProblemaItem from "./ProblemaItem";
import Link from "next/link";
import Image from "next/image";

export default function ProblemasSection() {
  return (
    <section
      className={`w-full px-6 sm:px-12 md:px-20 lg:px-32 2xl:px-72 py-32 ${fontPoppins300.className} bg-gray-100`}
      id="problemascomunes"
    >
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 space-y-6 flex flex-col items-start">
          <div className="flex">
            <div className="w-16 h-16 bg-light-blue rounded-lg p-4 text-white">
              <div>
                <svg
                  aria-hidden="true"
                  className="e-font-icon-svg e-fas-brain"
                  viewBox="0 0 576 512"
                  stroke="currentColor"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"></path>
                </svg>
              </div>
            </div>
          </div>
          <h3 className={`text-3xl text-dark-blue ${fontPoppins700.className}`}>
            Problemas más comunes
          </h3>
          <p className="text-gray-600">
            Somos especialistas en las siguientes siete áreas de psicología para
            tratar de manera profesional y efectiva a todos nuestros pacientes.
          </p>
          <div className="space-y-3 md:space-y-0 md:space-x-3 flex flex-col md:flex-row items-start">
            <ul className="space-y-3">
              <ProblemaItem
                title="Ansiedad/Depresión"
                pathTo="ansiedad-depresion"
              />
              <ProblemaItem
                title="Terapia de Pareja"
                pathTo="terapia-de-pareja"
              />
              <ProblemaItem title="Autoestima" pathTo="autoestima" />
              <ProblemaItem
                title="Psicología Infantil"
                pathTo="psicologia-infantil"
              />
            </ul>
            <ul className="space-y-3">
              <ProblemaItem title="Duelo" pathTo="duelo" />
              <ProblemaItem
                title="Ámbito Laboral/Social"
                pathTo="ambito-social-laboral"
              />
              <ProblemaItem
                title="Drogodependencia"
                pathTo="drogodependencia"
              />
            </ul>
          </div>
          <div>
            <Link
              href="nosotros"
              className="text-sm flex items-center text-light-blue gap-x-2"
            >
              Conoce más acerca de nosotros{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M15 16l4 -4" />
                  <path d="M15 8l4 4" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 grid place-items-center">
          <Image
            src="/images/pink_brain.png"
            alt="Problemas"
            width={400}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
