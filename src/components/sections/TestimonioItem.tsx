import Image from "next/image";
import React from "react";

export default function TestimonioItem({
  index,
  foto,
  nombre,
  social,
  onItemClick,
  defaultChecked = false,
}: {
  index: number;
  foto: string;
  nombre: string;
  social: string;
  onItemClick: any;
  defaultChecked?: boolean;
}) {
  return (
    <div>
      <input
        className="hidden input__testimonio"
        type="radio"
        name="testimonio"
        id={index.toString()}
        value={index}
        defaultChecked={defaultChecked}
        onChange={onItemClick}
      />
      <label
        htmlFor={index.toString()}
        className="w-full flex p-4 bg-white/10 rounded-2xl cursor-pointer col-span-1 border border-transparent hover:border-white/50 transition-all"
      >
        <div
          className="aspect-square w-12 h-12 rounded-full bg-cover bg-center mr-4"
          style={{
            backgroundImage: `url(${foto})`,
          }}
        ></div>
        <div className="text-white text-sm flex flex-col justify-around">
          <p className="font-bold truncate">{nombre}</p>
          <p className="">@{social}</p>
        </div>
      </label>
    </div>
  );
}
