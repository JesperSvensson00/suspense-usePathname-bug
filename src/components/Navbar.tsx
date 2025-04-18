"use client";

// import { Suspense } from "react";
import CustomLink from "./CustomLink";

export const experimental_ppr = true;

export default function Navbar() {
  const linkList = [
    { label: "Home", href: "/" },
    { label: "MyTest 1", href: "/mytest/1" },
  ];

  return (
    <div style={{ backgroundColor: "white" }}>
      <nav
        style={{
          display: "grid",
        }}
      >
        {linkList.map(({ href, label }) => (
          <CustomLink key={href} href={href} label={label} />
          // <Suspense key={href} fallback={<></>}>
          // </Suspense>
        ))}
      </nav>
    </div>
  );
}
