import Image from "next/image";
import Button from "../ui/button";
import { heroShape } from "@/assets/images";
import NavLink from "../ui/nav-link";

export default function Hero() {
  return (
    <section className="min-h-[110vh] md:min-h-[90vh] flex flex-col justify-center xl:justify-normal xl:items-center px-[8vw] md:px-[12vw] 2xl:px-[16vw] xl:grid grid-cols-[3fr_2fr] gap-16">
      <div className="flex flex-col gap-4">
        <div className="rounded-full border-[#E2E2E2] border-[1px] bg-white px-3 py-1 w-max">
          <span className="text-light font-medium text-sm">
            More customers with better online marketing 📈
          </span>
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
      <div className="relative flex flex-col items-end">
        <Image src={heroShape} alt="Shape" />
      </div>
    </section>
  );
}
