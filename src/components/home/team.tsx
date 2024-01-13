import { kacper, kamil, nikodem } from "@/assets/images";
import Image from "next/image";
import Control, { Controller } from "react-control-js";

export default function Team() {
  return (
    <section
      id="team"
      className="md:px-[12vw] 2xl:px-[16vw] my-8 flex flex-col"
    >
      <div className="bg-white md:rounded-[32px] flex flex-col gap-4 items-center py-12 px-[8vw] md:px-16 text-center max-w-[12in] w-full self-center">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-medium">
          Meet the team behind the agency 👏
        </h2>
        <p className="text-light font-medium">
          Founded by <span className="text-dark">Nikodem</span>,{" "}
          <span className="text-dark">Kacper</span> and{" "}
          <span className="text-dark">Kamil</span>
        </p>
        <Controller
          opacity={1}
          onScroll
          stagger={50}
          className="flex flex-wrap sm:grid grid-cols-2 justify-center lg:justify-normal gap-8 lg:grid lg:grid-cols-3 w-full mt-4"
        >
          <Control
            className="w-full !max-w-none"
            element={
              <div className="flex flex-col items-center gap-1">
                <div className="relative min-h-[3in] bg-background w-full rounded-2xl mb-3 overflow-hidden">
                  <Image
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={nikodem}
                    alt="Nikodem - Chief Commercial Officer"
                  />
                </div>
                <h3 className="font-medium text-xl">Nikodem Lech</h3>
                <p className="text-sm text-light">Chief Commercial Officer</p>
              </div>
            }
          />
          <Control
            className="w-full !max-w-none"
            element={
              <div className="flex flex-col items-center gap-1">
                <div className="relative min-h-[3in] bg-background w-full rounded-2xl mb-3 overflow-hidden">
                  <Image
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={kamil}
                    alt="Kamil - Chief Commercial Officer"
                  />
                </div>
                <h3 className="font-medium text-xl">Kamil Świder</h3>
                <p className="text-sm text-light">Chief Executive Officer</p>
              </div>
            }
          />
          <Control
            className="w-full !max-w-none sm:!max-w-[calc(42vw-16px)] md:!max-w-[50%] lg:mx-0 lg:!max-w-none sm:mx-auto col-span-2 lg:col-span-1"
            element={
              <div className="flex flex-col items-center gap-1">
                <div className="relative min-h-[3in] bg-background w-full rounded-2xl mb-3 overflow-hidden">
                  <Image
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={kacper}
                    alt="Kacper - Chief Marketing Officer"
                  />
                </div>
                <h3 className="font-medium text-xl">Kacper Soja</h3>
                <p className="text-sm text-light">Chief Marketing Officer</p>
              </div>
            }
          />
        </Controller>
      </div>
    </section>
  );
}
