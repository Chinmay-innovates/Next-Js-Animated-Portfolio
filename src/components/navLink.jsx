"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function useNavLink({ link }) {
  const UsePathName = usePathname();
  return (
    <Link
      className={`rounded p-1 ${
        UsePathName === link.url && "bg-black text-white"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
}

export default useNavLink;
