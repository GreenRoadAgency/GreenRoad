import Control from "react-control-js";
import CountUp from "../ui/count-up";

export default function About() {
  return (
    <section id="about us" className="md:px-[12vw] 2xl:px-[16vw] my-8">
      <div className="bg-white md:rounded-[32px] flex flex-col gap-8 md:gap-12 py-12 md:py-16 px-[8vw] md:px-16 text-center">
        <Control
          className="self-center"
          opacity={1}
          y={-20}
          onScroll
          element={
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-medium text-center self-center">
              Some words about us 🫶
            </h2>
          }
        />
        <div className="flex flex-col gap-4 xl:grid grid-cols-[1fr_2fr] grid-rows-[1fr_max-content]">
          <div className="h-full bg-background w-full rounded-3xl flex flex-col gap-4 row-span-2 py-8 px-10 text-left">
            <div>
              <span className="font-medium text-light xl:text-lg">
                <CountUp
                  enableScrollSpy
                  end={5}
                  useEasing
                  scrollSpyOnce={false}
                />
                +
              </span>
              <h3 className="font-medium text-xl xl:text-2xl">
                Projects completed
              </h3>
            </div>
            <div>
              <span className="font-medium text-light xl:text-lg">1M+</span>
              <h3 className="font-medium text-xl xl:text-2xl">
                Online impressions
              </h3>
            </div>
            <div>
              <span className="font-medium text-light xl:text-lg">
                <CountUp
                  enableScrollSpy
                  end={10}
                  useEasing
                  scrollSpyOnce={false}
                />
              </span>
              <h3 className="font-medium text-xl xl:text-2xl">
                Successful campaings
              </h3>
            </div>
            <div>
              <span className="font-medium text-light xl:text-lg">
                <CountUp
                  enableScrollSpy
                  end={100}
                  useEasing
                  scrollSpyOnce={false}
                />
                %
              </span>
              <h3 className="font-medium text-xl xl:text-2xl">
                Clients satisfaction rate
              </h3>
            </div>
          </div>
          <div className="min-h-[2in] h-full bg-background w-full rounded-3xl flex flex-col justify-between gap-4 xl:gap-8 py-6 px-8">
            <p className="text-light font-medium text-left xl:text-lg">
              GreenRoad Agency,{" "}
              <span className="text-dark">led by Nikodem, Kamil,</span> and{" "}
              <span className="text-dark">Kacper,</span> specializes in{" "}
              <span className="text-dark">marketing</span> focused primarily on
              SaaS products, offering{" "}
              <span className="text-dark">expert strategies for growth</span>{" "}
              and supporting companies on their{" "}
              <span className="text-dark">marketing journey.</span>
            </p>
            <p className="text-light font-medium text-left xl:text-lg">
              Join us for{" "}
              <span className="text-dark">
                tailored solutions, industry expertise,
              </span>{" "}
              and a commitment to{" "}
              <span className="text-dark">your success.</span> We prioritize{" "}
              <span className="text-dark">your benefits</span>, streamlining
              operations to free up your time and elevate your business.
            </p>
          </div>
          <div className="bg-background w-full rounded-3xl flex flex-col items-center justify-center gap-4 px-[20%] py-4">
            <h3 className="text-center text-light text-xl font-medium leading-tight">
              Your business journey{" "}
              <span className="text-dark">starts with us</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
