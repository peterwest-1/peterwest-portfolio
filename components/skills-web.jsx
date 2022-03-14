import Link from "next/link";
import React from "react";

export default function SkillsWeb() {
  const size = "3rem";
  const sizeSmall = "2rem";
  return (
    <div className="  ">
      {/* <div className="mb-5"></div> */}
      <h3 className="text-3xl md:text-3xl text-center font-semibold tracking-tighter leading-tight md:pr-4 pt-4">
        <Link href="/skills/web">
          <a className="hover:underline">Web</a>
        </Link>
      </h3>
      <p className="text-lg leading-relaxed text-center my-4 px-8">
      Whilst learning web development I always used the MERN stack with    
       <span className="font-bold"> React.js</span>, but have since included using <span className="font-bold">Next.js</span>.       I started using <span className="font-bold">Node.js</span> with <span className="font-bold">Express</span> and <span className="font-bold">MongoDB</span> early in my app development days. I have recently started using <span className="font-bold">GraphQL</span> with <span className="font-bold">Apollo</span>
      </p>
  
      

      <Link href="/skills/web" passHref={true}>
        <a className="flex justify-center mx-16 bg-white  hover:bg-black hover:text-white border border-black text-black font-bold py-3  px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
        Front End Projects
        </a>
      </Link>
    </div>
  );
}
