"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { fontPoppins } from "@/utils/MyFonts";

type CursorPosition = {
  x: number;
  y: number;
};

export default function MainSection() {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      //console.log(cursorPosition.x, cursorPosition.y);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${
          e.clientX * -0.015
        }px, ${e.clientY * -0.015}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorPosition]);
  return (
    <section
      className={`flex flex-col-reverse md:flex-row items-center justify-center min-h-screen w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-72 ${fontPoppins.className} relative gap-10 md:gap-0 bg-gradient-to-r from-gradient-start to-gradient-end`}
    >
      <div className="w-full py-10 sm:py-5 md:py-0 md:w-1/2 md:min-h-screen flex gap-4 flex-col justify-center z-30">
        <h1 className="text-white text-5xl font-bold">
          Tu psicólogo <br />
          online dónde estés, cuándo quieras.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Dar el primer paso puede ser difícil. Recibe una 1 sesión de 1 hora,
          gratis, sin compromiso y anónima. ¡Queremos escucharte!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="px-6 py-3 bg-light-blue text-white text-bold rounded shadow border border-light-blue hover:bg-transparent hover:border hover:border-white transition-all duration-300">
            Quiero mi sesión gratuita
          </button>
          <a className="cursor-pointer flex items-center gap-2 btn_howitworks">
            {" "}
            <span className="text-white border border-gray-400 rounded-full p-2 transition-all duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-caret-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z" />
              </svg>
            </span>{" "}
            <span className="text-gray-400 text-sm transition-all duration-500">
              Como funciona
            </span>
          </a>
        </div>
      </div>

      <div className="w-11/12 md:w-1/2 min-h-96 my-16 md:my-0 md:min-h-screen relative">
        <div className="absolute bottom-0 w-full h-3/4 z-20">
          <Image
            src="/main_image.png"
            alt="Main section image"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          ref={cursorRef}
          className="absolute w-11/12 h-96 bottom-0 md:bottom-32 z-10"
        >
          <span className="absolute w-16 h-16 left-0 top-0 md:w-20 md:h-20 rounded-full bg-slate-400 inline-block"></span>
          <span className="absolute w-60 h-60 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:w-80 md:h-80 rounded-full bg-slate-400 inline-block"></span>
          <span className="absolute w-32 h-32 bottom-0 right-0 md:w-40 md:h-40 rounded-full bg-slate-400 inline-block"></span>
          <span className="absolute w-24 h-24 bottom-0 left-0 md:w-32 md:h-32 rounded-full bg-slate-400 inline-block"></span>
          <span className="absolute w-16 h-16 -bottom-32 right-16 md:w-24 md:h-24 rounded-full bg-slate-400 inline-block"></span>
        </div>
      </div>
    </section>
  );
}
