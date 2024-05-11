"use client";

import {
  fontPoppins,
  fontPoppins300,
  fontPoppins500,
  fontPoppins700,
} from "@/utils/MyFonts";
import { Testimonio } from "@/utils/types";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import TestimonioItem from "./TestimonioItem";

export default function TestimoniosSection() {
  const [selected, setSelected] = useState(0);
  const onItemClick = (event: ChangeEvent<HTMLInputElement>) => {
    setSelected(parseInt(event.target.value));
  };

  const testimonios: Array<Testimonio> = [
    {
      id: 1,
      testimonio: "Testimonio 1",
      estrellas: 5,
      nombre: "Nombre 1",
      social: "Social 1",
      foto: "https://img.freepik.com/fotos-premium/avatar-digital-psicologo-ia-generativa_934475-9252.jpg",
    },
    {
      id: 2,
      testimonio: "Testimonio 2",
      estrellas: 4,
      nombre: "Nombre 2",
      social: "Social 2",
      foto: "https://img.freepik.com/fotos-premium/avatar-digital-psicologo-ia-generativa_934475-9252.jpg",
    },
    {
      id: 3,
      testimonio: "Testimonio 3",
      estrellas: 3,
      nombre: "Nombre 3",
      social: "Social 3",
      foto: "https://img.freepik.com/fotos-premium/avatar-digital-psicologo-ia-generativa_934475-9252.jpg",
    },
    {
      id: 4,
      testimonio: "Testimonio 4",
      estrellas: 2,
      nombre: "Nombre 4",
      social: "Social 4",
      foto: "https://img.freepik.com/fotos-premium/avatar-digital-psicologo-ia-generativa_934475-9252.jpg",
    },
  ];

  return (
    <section
      className={`w-full px-6 sm:px-12 md:px-20 lg:px-32 2xl:px-72 py-28 bg-gradient-to-r from-gradient-start to-gradient-end ${fontPoppins300.className}`}
    >
      <div className="text-gray-400 space-y-5">
        <h2
          className={`text-center text-yellow-500 ${fontPoppins500.className}`}
        >
          Resultados de Mente Sana
        </h2>
        <p
          className={`text-3xl md:text-4xl text-white text-center ${fontPoppins700.className}`}
        >
          Testimonios de pacientes recientes
        </p>
        <div className="flex items-center flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div>
              <Image
                src="/images/quotes.svg"
                alt="Comillas"
                width={50}
                height={50}
              />
            </div>
            <p className={`text-white text-xl ${fontPoppins500.className}`}>
              Mi experiencia con MS
            </p>
            <div>
              {[...Array(testimonios[selected].estrellas)].map((_, idx) => (
                <span key={idx} className="text-yellow-500">
                  ★
                </span>
              ))}
            </div>
            <p className={`my-5 ${fontPoppins500.className}`}>
              {testimonios[selected].testimonio}
            </p>
            <p className={`text-white ${fontPoppins500.className}`}>
              {testimonios[selected].nombre}
            </p>
            <p className="mb-5">@{testimonios[selected].social}</p>
          </div>
          <div className="w-full md:w-1/2">
            <div
              className="w-full h-72 bg-no-repeat bg-left-top relative ps-8 pt-8"
              style={{ backgroundImage: "url('/images/dots.png')" }}
            >
              <div className="w-full h-full bg-gradient-to-t from-gradient-start to-gradient-end rounded-3xl overflow-hidden">
                <div className="h-full aspect-square">
                  <Image
                    src={testimonios[selected].foto}
                    alt="Foto de perfil"
                    width={300}
                    height={300}
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-between mt-5">
            {testimonios.map((testimonio, idx) => (
              <TestimonioItem
                key={testimonio.id}
                index={idx}
                nombre={testimonio.nombre}
                social={testimonio.social}
                foto={testimonio.foto}
                defaultChecked={idx === 0}
                onItemClick={onItemClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
