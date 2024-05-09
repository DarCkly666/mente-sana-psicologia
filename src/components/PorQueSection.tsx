import { fontPoppins700, fontPoppins, fontPoppins300 } from "@/utils/MyFonts";
import PorQueCard, { PorQueCardProps } from "./PorQueCard";
export default function PorQueSection() {
  const dataCards: Array<PorQueCardProps> = [
    {
      color: "bg-red-300",
      title: "Comodidad",
      buttonTitle: "Agendar Cita",
      description:
        "Habla con tu psicólogo por videollamada, estés donde estés y sin tener que desplazarte",
      pathTo: "#",
      image: "/images/img1.png",
    },
    {
      color: "bg-blue-300",
      title: "Mejor Precio",
      buttonTitle: "Planes y Precios",
      description:
        "En Mente Sana contamos con el precio más económico de Europa en atención psicológica.",
      pathTo: "#",
      image: "/images/img2.png",
    },
    {
      color: "bg-blue-300",
      title: "Personalización",
      buttonTitle: "Ver Tratamientos",
      description:
        "Encontramos al especialista más adecuado para ti y que mejor se adapte a tus horarios",
      pathTo: "#",
      image: "/images/img3.png",
    },
    {
      color: "bg-red-300",
      title: "Anonimato",
      buttonTitle: "Sobre Nosotros",
      description:
        "Disfruta de las sesiones con tu psicólogo de manera segura y privada a través de un ordenador o móvil",
      pathTo: "#",
      image: "/images/img4.png",
    },
  ];
  return (
    <section
      className={`w-full px-6 sm:px-12 md:px-20 lg:px-32 2xl:px-72 py-32 ${fontPoppins700.className} bg-gray-100`}
    >
      <div className="w-full flex flex-col items-center text-dark-blue">
        <h2 className="text-4xl">¿Por qué elegir Mente Sana?</h2>
        <p className={`text-gray-500 mt-5 ${fontPoppins.className}`}>
          Esto es lo que nos hace diferentes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-16">
          <PorQueCard PorQueCardProps={dataCards[0]} />
          <PorQueCard PorQueCardProps={dataCards[1]} />
          <PorQueCard PorQueCardProps={dataCards[2]} />
          <PorQueCard PorQueCardProps={dataCards[3]} />
        </div>
      </div>
    </section>
  );
}
