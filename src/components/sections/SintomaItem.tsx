import React from "react";

export default function SintomaItem({ title }: { title: string }) {
  return (
    <li className="flex items-start gap-2 text-dark-blue">
      <span className="bg-light-blue/10 rounded-full text-light-blue p-0.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-check"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
      </span>
      {title}
    </li>
  );
}
