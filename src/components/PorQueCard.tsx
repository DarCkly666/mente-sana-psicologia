import { fontPoppins } from "@/utils/MyFonts";
import Image from "next/image";
import Link from "next/link";

export type PorQueCardProps = {
  color: string;
  title: string;
  buttonTitle: string;
  description: string;
  pathTo: string;
  image: string;
};
export default function PorQueCard({
  PorQueCardProps,
}: {
  PorQueCardProps: PorQueCardProps;
}) {
  const { color, title, buttonTitle, description, pathTo, image } =
    PorQueCardProps;
  return (
    <div className={`col-span-1 p-12 rounded-xl ${color}/40`}>
      <div className="flex">
        <div className="w-4/5 flex flex-col justify-between items-start">
          <h3 className="text-2xl">{title}</h3>
          <p className={`text-gray-500 my-3 ${fontPoppins.className}`}>
            {description}
          </p>
          <Link
            href={pathTo}
            className={`py-3 px-6 border-2 border-light-blue text-light-blue inline-block rounded-md hover:bg-light-blue hover:text-white transition-all duration-500 text-sm ${fontPoppins.className}`}
          >
            {buttonTitle}
          </Link>
        </div>
        <div className="w-1/5 flex justify-center items-end relative">
          <div className="min-w-20 scale-150 absolute -right-5 -bottom-5">
            <Image src={image} width={150} height={100} alt="Image 1" />
          </div>
        </div>
      </div>
    </div>
  );
}
