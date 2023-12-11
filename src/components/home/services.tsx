import ApproachIcon from "@/assets/icons/approach";
import GrowthIcon from "@/assets/icons/growth";
import QualityIcon from "@/assets/icons/quality";
import SupportIcon from "@/assets/icons/support";
import { servicesDashboard } from "@/assets/images";
import Image from "next/image";
import Control from "react-control-js";

export default function Services() {
  return (
    <section id="services" className="md:px-[12vw] 2xl:px-[16vw] my-8">
      <div className="bg-white md:rounded-[32px] flex flex-col gap-4 items-center py-8 xl:py-12 px-[8vw] md:px-16 md:grid grid-cols-2 xl:grid-cols-4 text-center">
        <div className="h-full bg-background w-full rounded-3xl flex justify-center items-end overflow-hidden gap-4 col-span-2 pt-8 px-4">
          <Image
            className="max-w-[95%] -mb-4"
            src={servicesDashboard}
            alt="SaaS Services Dashboard"
          />
        </div>
        <div className="min-h-[2in] bg-background w-full rounded-3xl flex flex-col justify-between gap-4 xl:gap-8 col-span-2 py-6 px-8">
          <h3 className="text-light text-3xl 2xl:text-4xl font-medium text-left">
            Build a sustainable marketing engine{" "}
            <span className="text-dark">
              that effortlessly scales with your growth.
            </span>
          </h3>
          <p className="text-sm text-light font-medium text-left xl:text-base">
            Are you aiming to scale your Software?{" "}
            <span className="text-dark">You've landed in the right spot.</span>{" "}
            Schedule a meeting with us, and we'll unveil a top-tier plan for
            your SaaS on social media.
          </p>
        </div>
        <Control
          onScroll
          opacity={1}
          delay={50}
          className="fill-light !max-w-none min-h-[2in] bg-background w-full rounded-3xl flex flex-col items-center justify-center gap-4 px-[20%]"
          element={
            <>
              <QualityIcon />
              <h3 className="text-center text-xl font-medium leading-tight">
                High-Quality Services
              </h3>
            </>
          }
        />
        <Control
          onScroll
          opacity={1}
          delay={100}
          className="fill-light !max-w-none min-h-[2in] bg-background w-full rounded-3xl flex flex-col items-center justify-center gap-4 px-[20%]"
          element={
            <>
              <SupportIcon />
              <h3 className="text-center text-xl font-medium leading-tight">
                24/7 Customer Support
              </h3>
            </>
          }
        />
        <Control
          onScroll
          opacity={1}
          delay={150}
          className="fill-light !max-w-none min-h-[2in] bg-background w-full rounded-3xl flex flex-col items-center justify-center gap-4 px-[20%]"
          element={
            <>
              <ApproachIcon />
              <h3 className="text-center text-xl font-medium leading-tight">
                Personalized Approach
              </h3>
            </>
          }
        />
        <Control
          onScroll
          opacity={1}
          delay={200}
          className="fill-light !max-w-none min-h-[2in] bg-background w-full rounded-3xl flex flex-col items-center justify-center gap-4 px-[20%]"
          element={
            <>
              <GrowthIcon />
              <h3 className="text-center text-xl font-medium leading-tight">
                Unparalleled Growth
              </h3>
            </>
          }
        />
      </div>
    </section>
  );
}
