import Image from "next/image";
import Button from "../ui/button";
import { heroMobile, heroShape } from "@/assets/images";
import NavLink from "../ui/nav-link";
import Badge from "../ui/badge";

export default function Hero() {
  return (
    <section className="min-h-[110vh] md:min-h-[90vh] flex flex-col pt-[1.4in] md:pt-0 md:items-center px-[8vw] md:px-[12vw] 2xl:px-[16vw] md:grid grid-cols-[3fr_2fr] gap-16">
      <div className="flex flex-col gap-4">
        <div className="rounded-full border-[#E2E2E2] border-[1px] bg-white px-3 py-1 w-max">
          <Badge /> 📈
        </div>
        <h1 className="2xl:text-6xl text-4xl md:text-5xl font-medium">
          Advanced Marketing Solutions for a Digital Era
        </h1>
        <p className="text-light max-w-[5in] w-full">
          Get more from your ad budget. Grow your business and boost sales with
          Meta ADS. Let’s start a journey together
        </p>
        <div className="flex items-center flex-wrap gap-4 mt-4">
          <NavLink title="contact">
            <Button asChild>Book a call</Button>
          </NavLink>
          <NavLink title="team">
            <div className="text-sm px-2 h-full min-h-full font-semibold">
              Meet our team
            </div>
          </NavLink>
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-end md:mt-32 max-w-[4.4in] justify-self-end">
        <Image width={422} className="absolute" src={heroShape} alt="Shape" />
        <Image
          width={422}
          className="relative z-10"
          src={heroMobile}
          alt="Mobile with dashboard"
        />
      </div>
    </section>
  );
}
