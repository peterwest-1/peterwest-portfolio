import Link from "next/link";
import React from "react";

export default function SkillsGeneral() {
  const size = "3rem";
  const sizeSmall = "2rem";
  return (
    <div>
      {/* <div className="mb-5"></div> */}
      <h3 className="text-3xl md:text-3xl text-center font-semibold tracking-tighter leading-tight md:pr-4 pt-4">
        <Link href="/skills/general">
          <a className="hover:underline" >General</a>
        </Link>
      </h3>
      <p className="text-lg leading-relaxed text-center my-4 px-8">
      I did my first programming in <span className="font-bold">Lua</span>, then moved on to <span className="font-bold">C</span> in a engineering class. Learnt <span className="font-bold">C++</span> in my B.Sc and used <span className="font-bold">Python</span> with <span className="font-bold">Numpy</span> with my mathematics subjects
      </p>

      <Link href="/skills/general" passHref={true}>
        <a className="flex justify-center mx-16 bg-white  hover:bg-black hover:text-white border border-black text-black font-bold py-3  px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
        General Projects
        </a>
      </Link>
    </div>
  );
}
