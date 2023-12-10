export default function Contact() {
  return (
    <section className="md:px-[12vw] 2xl:px-[16vw] my-8">
      <div className="bg-white md:rounded-[32px] flex flex-col gap-4 items-center py-16 px-[8vw] md:px-16 md:grid grid-cols-[5fr_4fr]">
        <div className="min-h-[2in] bg-background w-full rounded-3xl flex flex-col gap-4 py-8 px-10">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-medium mb-4">
            Got a question 🤔 in mind?
          </h2>
          <p className="text-light font-medium text-left xl:text-lg">
            After this Audit call, you'll{" "}
            <span className="text-dark">know exactly</span> how to{" "}
            <span className="text-dark">boost your business</span> with Funnels
            & Paid Advertising.
          </p>
          <p className="text-light font-medium text-left xl:text-lg">
            Book a time with Nikodem now to{" "}
            <span className="text-dark">discuss your needs</span> soon!
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <h3 className="text-xl font-medium">This audit is perfect for:</h3>
            <ol className="flex flex-col gap-2">
              <li className="text-light font-medium">
                ✅ SaaS Companies seeking effective marketing strategies
              </li>
              <li className="text-light font-medium">
                ✅ Businesses aiming to increase sales with Meta ADS
              </li>
              <li className="text-light font-medium">
                ✅ Those wanting higher conversion rates and order values
              </li>
              <li className="text-light font-medium">
                ✅ Businesses in need of a committed agency partner
              </li>
            </ol>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
