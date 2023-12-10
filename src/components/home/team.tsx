export default function Team() {
  return (
    <section id="team" className="md:px-[12vw] 2xl:px-[16vw] my-8">
      <div className="bg-white md:rounded-[32px] flex flex-col gap-4 items-center py-12 px-[8vw] md:px-16 text-center">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-medium">
          Meet the team 👏 behind the agency
        </h2>
        <p className="text-light font-medium">
          Founded by <span className="text-dark">Nikodem</span>,{" "}
          <span className="text-dark">Kacper</span> and{" "}
          <span className="text-dark">Kamil</span>
        </p>
        <div className="flex flex-col gap-x-4 gap-y-8 xl:grid grid-cols-3 w-full mt-4">
          <div className="flex flex-col items-center gap-2">
            <div className="min-h-[2in] bg-background w-full rounded-2xl mb-2"></div>
            <h3 className="font-medium text-xl">Nikodem Lech</h3>
            <p className="text-sm text-light">Chief Commercial Officer</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="min-h-[2in] bg-background w-full rounded-2xl mb-2"></div>
            <h3 className="font-medium text-xl">Nikodem Lech</h3>
            <p className="text-sm text-light">Chief Commercial Officer</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="min-h-[2in] bg-background w-full rounded-2xl mb-2"></div>
            <h3 className="font-medium text-xl">Nikodem Lech</h3>
            <p className="text-sm text-light">Chief Commercial Officer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
