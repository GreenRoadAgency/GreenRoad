import ApproachIcon from "@/assets/icons/approach";
import GrowthIcon from "@/assets/icons/growth";
import QualityIcon from "@/assets/icons/quality";
import SupportIcon from "@/assets/icons/support";
import { offer1, offer2, offer3 } from "@/assets/images";
import Image from "next/image";
import Control, { Controller } from "react-control-js";

export default function Offer() {
  return (
    <section id="marketing offer" className="md:px-[12vw] 2xl:px-[16vw] my-8">
      <div className="bg-dark md:rounded-[32px] flex flex-col gap-4 py-12 md:py-16 px-[8vw] md:px-16">
        <h2 className="text-white text-2xl md:text-3xl 2xl:text-4xl font-medium text-center">
          What do we offer? 🧑🏻‍💻
        </h2>
        <div className="flex flex-col gap-4 xl:gap-8 w-full mt-4 md:mt-8">
          <div className="bg-[#262626] rounded-3xl min-h-[4in] lg:pl-16 overflow-hidden relative flex flex-col lg:flex-row justify-between gap-x-16 items-center">
            <Control
              className="flex flex-col justify-center gap-4 px-[8vw] lg:px-0 py-8 lg:py-0"
              opacity={1}
              x={-15}
              onScroll
              element={
                <>
                  <h3 className="text-white font-medium text-xl xl:text-3xl">
                    Focused META ADS Expertise
                  </h3>
                  <p className="text-[#A0A0A0] text-sm xl:text-lg">
                    At the heart of our services lies a singular focus: META
                    ADS. We excel in this area with unparalleled precision and
                    effectiveness.
                  </p>
                </>
              }
            />
            <Image
              className="self-end lg:max-w-[60%] max-w-[90%]"
              src={offer1}
              alt="First Dashboard"
            />
          </div>
          <div className="bg-[#262626] rounded-3xl min-h-[4in] lg:pr-16 lg:text-right overflow-hidden relative flex flex-col-reverse lg:flex-row justify-between gap-x-16 items-center">
            <Image
              className="self-start lg:self-end lg:max-w-[60%] max-w-[90%]"
              src={offer2}
              alt="Second Dashboard"
            />
            <Control
              className="flex flex-col justify-center gap-4 px-[8vw] lg:px-0 py-8 lg:py-0 md:items-end"
              opacity={1}
              x={15}
              onScroll
              element={
                <>
                  <h3 className="text-white font-medium text-xl xl:text-3xl">
                    Specialized Advertising Solutions
                  </h3>
                  <p className="text-[#A0A0A0] text-sm xl:text-lg">
                    We're not just any agency; we're specialists in YOUR market.
                    Our advertising services are fine-tuned and proven, offering
                    you the best possible performance
                  </p>
                </>
              }
            />
          </div>
          <div className="bg-[#262626] rounded-3xl min-h-[4in] lg:pl-16 overflow-hidden relative flex flex-col lg:flex-row justify-between gap-x-16 items-center">
            <Control
              className="flex flex-col justify-center gap-4 px-[8vw] lg:px-0 py-8 lg:py-0"
              opacity={1}
              x={-15}
              onScroll
              element={
                <>
                  <h3 className="text-white font-medium text-xl xl:text-3xl">
                    Effortless Campaign Management
                  </h3>
                  <p className="text-[#A0A0A0] text-sm xl:text-lg">
                    Easily track your ad spend, measure revenue, and calculate
                    net income with our user-friendly tools. We provide an
                    experience that combines simplicity with high-impact
                    results.
                  </p>
                </>
              }
            />
            <Image
              className="self-end lg:max-w-[60%] max-w-[90%]"
              src={offer3}
              alt="Third Dashboard"
            />
          </div>
        </div>
        <Control
          className="mt-12 md:mt-16 self-center"
          opacity={1}
          y={-20}
          onScroll
          element={
            <h2 className="text-white text-2xl md:text-3xl 2xl:text-4xl font-medium text-center">
              What sets us apart?
            </h2>
          }
        />
        <Controller
          className="flex flex-col gap-4 md:grid grid-cols-2 xl:grid-cols-4 mt-4 md:mt-8"
          stagger={50}
          onScroll
          opacity={1}
        >
          <Control
            className="flex items-stretch"
            element={
              <div className="fill-primary flex flex-col gap-4 py-8 px-10 bg-[#262626] rounded-2xl justify-center">
                <QualityIcon />
                <h3 className="text-white text-xl font-medium">
                  Market-Specific Expertise
                </h3>
                <p className="text-[#A0A0A0] text-sm xl:text-base">
                  We're dedicated to understanding and excelling in your
                  specific market.
                </p>
              </div>
            }
          />
          <Control
            className="flex items-stretch"
            element={
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
            }
          />
          <Control
            className="flex items-stretch"
            element={
              <div className="fill-primary flex flex-col gap-4 py-8 px-10 bg-[#262626] rounded-2xl justify-center">
                <ApproachIcon />
                <h3 className="text-white text-xl font-medium">
                  Simplified Analytics
                </h3>
                <p className="text-[#A0A0A0] text-sm xl:text-base">
                  Quickly and easily understand your advertising performance.
                </p>
              </div>
            }
          />
          <Control
            className="flex items-stretch"
            element={
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
            }
          />
        </Controller>
      </div>
    </section>
  );
}
