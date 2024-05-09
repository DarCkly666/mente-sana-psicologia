import { fontPoppins } from "@/utils/MyFonts";
export default function PorQueSection() {
  return (
    <section
      className={`flex flex-col items-center min-h-screen w-full p-6 sm:px-12 md:px-20 ${fontPoppins.className} bg-red-400`}
    >
      Por qué
    </section>
  );
}
