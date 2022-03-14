import Link from "next/link";
import React from "react";

export default function SkillsMobile() {
  const size = "3rem";
  const sizeSmall = "2rem";
  return (
    <div>
      {/* <div className="mb-5"></div> */}
      
      <h3 className="text-3xl md:text-3xl text-center font-semibold tracking-tighter leading-tight md:pr-4 pt-4">
        <Link href="/skills/mobile">
          <a className="hover:underline">Mobile</a>
        </Link>
      </h3>
     
      <p className="text-lg leading-relaxed text-center my-4 px-8">
        I started tinkering with apps around the time when Apple released the Swift programming language in around 2014. I develop iOS applications using <span className="font-bold">UIKit</span> and <span className="font-bold">SwiftUI</span> used with <span className="font-bold">MongoDB</span>, <span className="font-bold">Firebase</span> and more. I also occasionally use <span className="font-bold">Flutter</span>
      </p>
     

      <Link href="/skills/mobile" passHref={true}>
        <a className="flex justify-center mx-16 bg-white  hover:bg-black hover:text-white border border-black text-black font-bold py-3  px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
          Mobile Projects
        </a>
      </Link>
    </div>
  );
}
