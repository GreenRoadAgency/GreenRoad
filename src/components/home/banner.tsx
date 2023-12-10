import Button from "../ui/button";

export default function Banner() {
  return (
    <section className="md:px-[12vw] 2xl:px-[16vw] my-8">
      <div className="flex flex-col gap-4 items-center p-12 bg-dark md:rounded-full">
        <h2 className="text-3xl xl:text-4xl text-white text-center">
          Did we convince you?
        </h2>
        <Button>Book a call</Button>
      </div>
    </section>
  );
}
