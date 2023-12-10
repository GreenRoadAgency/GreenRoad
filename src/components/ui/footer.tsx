"use client";

import { logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

export default function Footer() {
  return (
    <footer className="bg-white px-8 py-4 md:mx-[12vw] 2xl:mx-[16vw] md:rounded-full justify-between flex flex-wrap gap-4 items-center md:mb-4">
      <Image width={128} height={64} src={logo} alt="GreenRoad Logo" />
      <p className="text-light text-sm font-medium">
        Designed and developed with 💚 by{" "}
        <Link className="text-dark" href="https://www.divideproject.com">
          DivideProject
        </Link>
      </p>
      <Button
        className="!bg-background"
        arrowClassName="-rotate-90"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Scroll up
      </Button>
    </footer>
  );
}
