import NavLink from "./nav-link";
export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Peter West.
      </h1>
      <div className="flex">
        <NavLink path="/" label={"Home."} />
        <NavLink path="/about" label={"About."} />
        <NavLink path="/portfolio" label={"Portfolio."} />
        <NavLink path="/contact" label={"Contact."} />
      </div>
    </section>
  );
}
