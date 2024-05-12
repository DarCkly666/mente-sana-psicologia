import Link from "next/link";
import React from "react";

export default function ProblemaItem({ title = "", pathTo = "#" }) {
  return (
    <li>
      <Link
        href={pathTo}
        className="flex items-center gap-2 text-dark-blue hover:text-light-blue"
      >
        <span className="bg-light-blue/20 rounded-full text-light-blue p-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
      </Link>
    </li>
  );
}
