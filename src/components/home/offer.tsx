import ApproachIcon from "@/assets/icons/approach";
import GrowthIcon from "@/assets/icons/growth";
import QualityIcon from "@/assets/icons/quality";
import SupportIcon from "@/assets/icons/support";

export default function Offer() {
  return (
    <section className="md:px-[12vw] 2xl:px-[16vw] my-8">
      <div className="bg-dark md:rounded-[32px] flex flex-col gap-4 py-16 px-[8vw] md:px-16">
        <h2 className="text-white text-2xl md:text-3xl 2xl:text-4xl font-medium text-center">
          What do we offer? 🧑🏻‍💻
        </h2>
        <div className="flex flex-col gap-4 w-full mt-8">
          <div className=" bg-[#262626] rounded-2xl py-12 flex flex-col justify-center gap-4 pl-16">
            <h3 className="text-white font-medium text-xl">
              Focused META ADS Expertise
            </h3>
            <p className="text-[#A0A0A0] text-sm xl:text-base max-w-[40%]">
              At the heart of our services lies a singular focus: META ADS. We
              excel in this area with unparalleled precision and effectiveness.
            </p>
          </div>
          <div className=" bg-[#262626] rounded-2xl py-12 flex flex-col justify-center items-end gap-4 pr-16 text-right">
            <h3 className="text-white font-medium text-xl">
              Specialized Advertising Solutions
            </h3>
            <p className="text-[#A0A0A0] text-sm xl:text-base max-w-[40%]">
              We're not just any agency; we're specialists in YOUR market. Our
              advertising services are fine-tuned and proven, offering you the
              best possible performance
            </p>
          </div>
          <div className=" bg-[#262626] rounded-2xl py-12 flex flex-col justify-center gap-4 pl-16">
            <h3 className="text-white font-medium text-xl">
              Effortless Campaign Management
            </h3>
            <p className="text-[#A0A0A0] text-sm xl:text-base max-w-[40%]">
              Easily track your ad spend, measure revenue, and calculate net
              income with our user-friendly tools. We provide an experience that
              combines simplicity with high-impact results.
            </p>
          </div>
        </div>
        <h2 className="text-white text-2xl md:text-3xl 2xl:text-4xl font-medium text-center mt-16">
          What sets us apart?
        </h2>
        <div className="flex flex-col gap-4 md:grid grid-cols-2 xl:grid-cols-4 mt-8">
          <div className="fill-primary flex flex-col gap-4 py-8 px-10 bg-[#262626] rounded-2xl justify-center">
            <QualityIcon />
            <h3 className="text-white text-xl font-medium">
              Market-Specific Expertise
            </h3>
            <p className="text-[#A0A0A0] text-sm xl:text-base">
              We're dedicated to understanding and excelling in your specific
              market.
            </p>
          </div>
          <div className="fill-primary flex flex-col gap-4 py-8 px-10 bg-[#262626] rounded-2xl justify-center">
            <SupportIcon />
            <h3 className="text-white text-xl font-medium">
              Precision in Execution
            </h3>
            <p className="text-[#A0A0A0] text-sm xl:text-base">
              Our focus on META ADS means we do one thing and do it
              exceptionally well.
            </p>
          </div>
          <div className="fill-primary flex flex-col gap-4 py-8 px-10 bg-[#262626] rounded-2xl justify-center">
            <ApproachIcon />
            <h3 className="text-white text-xl font-medium">
              Simplified Analytics
            </h3>
            <p className="text-[#A0A0A0] text-sm xl:text-base">
              Quickly and easily understand your advertising performance.
            </p>
          </div>
          <div className="fill-primary flex flex-col gap-4 py-8 px-10 bg-[#262626] rounded-2xl justify-center">
            <GrowthIcon />
            <h3 className="text-white text-xl font-medium">
              Effective Results
            </h3>
            <p className="text-[#A0A0A0] text-sm xl:text-base">
              We blend effectiveness with ease, ensuring a satisfying
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
