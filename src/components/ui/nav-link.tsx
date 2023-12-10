"use client";

import { MouseEvent } from "react";

export default function NavLink({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  function handleScroll(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const element = document.getElementById(title.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return <button onClick={handleScroll}>{children}</button>;
}
