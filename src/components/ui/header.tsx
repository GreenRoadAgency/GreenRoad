import Image from "next/image";
import Button from "./button";
import { logo } from "@/assets/images";
import { LINKS } from "@/const/general";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <div className="fixed top-0 md:pt-4 z-50 w-full">
      <header className="bg-white px-8 py-4 md:mx-[12vw] 2xl:mx-[16vw] md:rounded-full justify-between flex items-center">
        <Image width={128} height={64} src={logo} alt="GreenRoad Logo" />
        <nav className="items-center gap-12 hidden xl:flex">
          {LINKS.map((link) => (
            <NavLink title={link} key={link}>
              <span className="font-medium text-light text-sm hover:text-primary transition-colors">
                {link}
              </span>
            </NavLink>
          ))}
        </nav>
        <NavLink title="contact">
          <Button asChild>Book a call</Button>
        </NavLink>
      </header>
    </div>
  );
}
