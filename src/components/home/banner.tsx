import Control from "react-control-js";
import Button from "../ui/button";
import NavLink from "../ui/nav-link";

export default function Banner() {
  return (
    <section className="md:px-[12vw] 2xl:px-[16vw] my-8">
      <div className="flex flex-col gap-4 items-center px-4 py-12 bg-dark md:rounded-full">
        <Control
          opacity={1}
          y={-10}
          onScroll
          element={
            <h2 className="text-3xl xl:text-4xl text-white text-center">
              Did we convince you?
            </h2>
          }
        />
        <Control
          opacity={1}
          x={-10}
          onScroll
          delay={100}
          element={
            <NavLink title="contact">
              <Button asChild>Book a call</Button>
            </NavLink>
          }
        />
      </div>
    </section>
  );
}
