import { fontPoppins700, fontPoppins } from "@/utils/MyFonts";
import Image from "next/image";
import Link from "next/link";
export default function PorQueSection() {
  return (
    <section
      className={`w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-72 py-32 ${fontPoppins700.className} bg-gray-100`}
    >
      <div className="w-full flex flex-col items-center text-dark-blue">
        <h2 className="text-4xl">¿Por qué elegir Mente Sana?</h2>
        <p className={`text-gray-500 mt-5 ${fontPoppins.className}`}>
          Esto es lo que nos hace diferentes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-16">
          <div className="bg-red-300/40 col-span-1 p-10 rounded-xl">
            <div className="flex">
              <div className="w-5/6 flex flex-col justify-between items-start">
                <h3 className="text-2xl">Comodidad</h3>
                <p className={`text-gray-500 my-3 ${fontPoppins.className}`}>
                  Habla con tu psicólogo por videollamada, estés donde estés y
                  sin tener que desplazarte
                </p>
                <Link
                  href="#"
                  className={`py-3 px-6 border-2 border-light-blue text-light-blue inline-block rounded-md hover:bg-light-blue hover:text-white transition-all duration-500 text-sm ${fontPoppins.className}`}
                >
                  Agendar Cita
                </Link>
              </div>
              <div className="w-1/6 flex justify-center items-end">
                <Image
                  src="/images/img1.png"
                  width={150}
                  height={100}
                  alt="Image 1"
                />
              </div>
            </div>
          </div>
          <div className="bg-blue-300/40 col-span-1 p-10 rounded-xl">
            <h3 className="text-2xl">Mejor Precio</h3>
            <p className={`text-gray-500 my-3 ${fontPoppins.className}`}>
              En Mente Sana contamos con el precio más económico de Europa en
              atención psicológica.
            </p>
            <Link
              href="#"
              className={`py-3 px-6 border-2 border-light-blue text-light-blue inline-block rounded-md hover:bg-light-blue hover:text-white transition-all duration-500 text-sm ${fontPoppins.className}`}
            >
              Planes y Precios
            </Link>
          </div>
          <div className="bg-blue-300/40 col-span-1 p-10 rounded-xl">
            <h3 className="text-2xl">Personalización</h3>
            <p className={`text-gray-500 my-3 ${fontPoppins.className}`}>
              Encontramos al especialista más adecuado para ti y que mejor se
              adapte a tus horarios
            </p>
            <Link
              href="#"
              className={`py-3 px-6 border-2 border-light-blue text-light-blue inline-block rounded-md hover:bg-light-blue hover:text-white transition-all duration-500 text-sm ${fontPoppins.className}`}
            >
              Ver Tratamientos
            </Link>
          </div>
          <div className="bg-red-300/40 col-span-1 p-10 rounded-xl">
            <h3 className="text-2xl">Anonimato</h3>
            <p className={`text-gray-500 my-3 ${fontPoppins.className}`}>
              Disfruta de las sesiones con tu psicólogo de manera segura y
              privada a través de un ordenador o móvil
            </p>
            <Link
              href="#"
              className={`py-3 px-6 border-2 border-light-blue text-light-blue inline-block rounded-md hover:bg-light-blue hover:text-white transition-all duration-500 text-sm ${fontPoppins.className}`}
            >
              Sobre Nosotros
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
