import Link from "next/link";

export default function Skills() {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 gap-y-8 md:gap-y-16 mb-8">
        <div>
          <h3 className="text-3xl md:text-3xl text-center font-semibold tracking-tighter leading-tight md:pr-4 pt-4">
            <Link href="/skills/mobile">
              <a className="hover:underline">Mobile</a>
            </Link>
          </h3>

          <p className="text-lg leading-relaxed text-center my-4 px-8">
            I started tinkering with apps around the time when Apple released the Swift programming language in around
            2014. I develop iOS applications using <span className="font-bold">UIKit</span> and{" "}
            <span className="font-bold">SwiftUI</span> used with <span className="font-bold">MongoDB</span>,{" "}
            <span className="font-bold">Firebase</span> and more. I also occasionally use{" "}
            <span className="font-bold">Flutter</span>
          </p>

          <Link href="/skills/mobile" passHref={true}>
            <a className="flex justify-center mx-16 bg-white  hover:bg-black hover:text-white border border-black text-black font-bold py-3  px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
              Mobile Projects
            </a>
          </Link>
        </div>
        <div>
          <h3 className="text-3xl md:text-3xl text-center font-semibold tracking-tighter leading-tight md:pr-4 pt-4">
            <Link href="/skills/web">
              <a className="hover:underline">Web</a>
            </Link>
          </h3>
          <p className="text-lg leading-relaxed text-center my-4 px-8">
            Whilst learning web development I always used the MERN stack with
            <span className="font-bold"> React.js</span>, but have since included using{" "}
            <span className="font-bold">Next.js</span>. I started using <span className="font-bold">Node.js</span> with{" "}
            <span className="font-bold">Express</span> and <span className="font-bold">MongoDB</span> early in my app
            development days. I have recently started using <span className="font-bold">GraphQL</span> with{" "}
            <span className="font-bold">Apollo</span>
          </p>

          <Link href="/skills/web" passHref={true}>
            <a className="flex justify-center mx-16 bg-white  hover:bg-black hover:text-white border border-black text-black font-bold py-3  px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
              Front End Projects
            </a>
          </Link>
        </div>
        <div>
          <h3 className="text-3xl md:text-3xl text-center font-semibold tracking-tighter leading-tight md:pr-4 pt-4">
            <Link href="/skills/general">
              <a className="hover:underline">General</a>
            </Link>
          </h3>
          <p className="text-lg leading-relaxed text-center my-4 px-8">
            I did my first programming in <span className="font-bold">Lua</span>, then moved on to{" "}
            <span className="font-bold">C</span> in a engineering class. Learnt <span className="font-bold">C++</span>{" "}
            in my B.Sc and used <span className="font-bold">Python</span> with <span className="font-bold">Numpy</span>{" "}
            with my mathematics subjects
          </p>

          <Link href="/skills/general" passHref={true}>
            <a className="flex justify-center mx-16 bg-white  hover:bg-black hover:text-white border border-black text-black font-bold py-3  px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
              General Projects
            </a>
          </Link>
        </div>
      </div>
      <div></div>
    </section>
  );
}
