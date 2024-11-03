import { fontPoppins700, fontPoppins, fontPoppins500 } from "@/utils/MyFonts";
import Image from "next/image";
import React from "react";

export default function ConfianSection() {
  return (
    <section
      className={`w-full px-6 sm:px-12 md:px-20 lg:px-32 2xl:px-72 ${fontPoppins700.className} bg-middle-blue text-white`}
    >
      <div className="w-full h-full flex flex-col md:flex-row items-center py-10">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/images/brain.png"
            alt="Confianza"
            width={300}
            height={200}
          />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-between gap-5">
          <h3 className="text-4xl font-bold text-center text-balance">
            Cientos de personas confían en nosotros
          </h3>
          <div className="flex flex-col items-center justify-center">
            <p
              className={`text-6xl text-white/50 ${fontPoppins500.className} font-bold`}
            >
              +4320
            </p>
            <p className={`${fontPoppins.className}`}>Pacientes Activos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
