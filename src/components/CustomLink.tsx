"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface CustomLinkProps {
  label: string;
  href: string;
}

const active = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
};

export default function CustomLink({ href, label }: CustomLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      style={{
        backgroundColor: active(pathname, href) ? "blue" : "gray",
      }}
    >
      {label}
    </Link>
  );
}
