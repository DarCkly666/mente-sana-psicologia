import {
  fontPoppins300,
  fontPoppins500,
  fontPoppins700,
} from "@/utils/MyFonts";
import React from "react";

export default function LlamarSection() {
  return (
    <section
      className={`w-full px-6 sm:px-12 md:px-20 lg:px-32 2xl:px-72 text-dark-blue py-10 ${fontPoppins300.className}`}
    >
      <div>
        <div className="text-green-500 flex justify-center items-center gap-3 md:gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-phone"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" />
          </svg>
          <p
            className={`text-xl md:text-3xl text-gray-600 text-center ${fontPoppins500.className}`}
          >
            Para consulta escríbenos al:
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href="tel:12345678"
            className={`text-green-500 text-3xl md:text-4xl ${fontPoppins700.className}`}
          >
            +591 12345678
          </a>
        </div>
      </div>
    </section>
  );
}
