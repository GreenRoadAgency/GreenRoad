import ApproachIcon from "@/assets/icons/approach";
import GrowthIcon from "@/assets/icons/growth";
import QualityIcon from "@/assets/icons/quality";
import SupportIcon from "@/assets/icons/support";

export default function Services() {
  return (
    <section className="md:px-[12vw] 2xl:px-[16vw] my-8">
      <div className="bg-white md:rounded-[32px] flex flex-col gap-4 items-center py-16 px-[8vw] md:px-16 md:grid grid-cols-2 xl:grid-cols-4 text-center">
        <div className="h-full bg-background w-full rounded-3xl flex flex-col gap-4 col-span-2"></div>
        <div className="min-h-[2in] bg-background w-full rounded-3xl flex flex-col justify-between gap-4 xl:gap-8 col-span-2 py-6 px-8">
          <h3 className="text-light text-xl xl:text-3xl max-w-[80%] font-medium text-left">
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
        <div className="fill-light min-h-[2in] bg-background w-full rounded-3xl flex flex-col items-center justify-center gap-4 px-[20%]">
          <QualityIcon />
          <h3 className="text-center text-xl font-medium leading-tight">
            High-Quality Services
          </h3>
        </div>
        <div className="fill-light min-h-[2in] bg-background w-full rounded-3xl flex flex-col items-center justify-center gap-4 px-[20%]">
          <SupportIcon />
          <h3 className="text-center text-xl font-medium leading-tight">
            24/7 Customer Support
          </h3>
        </div>
        <div className="fill-light min-h-[2in] bg-background w-full rounded-3xl flex flex-col items-center justify-center gap-4 px-[20%]">
          <ApproachIcon />
          <h3 className="text-center text-xl font-medium leading-tight">
            Personalized Approach
          </h3>
        </div>
        <div className="fill-light min-h-[2in] bg-background w-full rounded-3xl flex flex-col items-center justify-center gap-4 px-[20%]">
          <GrowthIcon />
          <h3 className="text-center text-xl font-medium leading-tight">
            Unparalleled Growth
          </h3>
        </div>
      </div>
    </section>
  );
}
