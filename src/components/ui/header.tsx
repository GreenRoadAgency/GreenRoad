import Image from "next/image";
import Button from "./button";
import { logo } from "@/assets/images";
import { LINKS } from "@/const/general";

export default function Header() {
  return (
    <div className="fixed top-0 pt-4 z-50 w-full">
      <header className="bg-white px-8 py-4 md:mx-[12vw] 2xl:mx-[16vw] rounded-full justify-between flex items-center">
        <Image width={128} height={64} src={logo} alt="GreenRoad Logo" />
        <nav className="flex items-center gap-12">
          {LINKS.map((link) => (
            <button className="font-medium text-light text-sm" key={link}>
              {link}
            </button>
          ))}
        </nav>
        <Button>Book a call</Button>
      </header>
    </div>
  );
}
