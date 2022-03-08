import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { DiGit, DiNodejs, DiPostgresql, DiTerminal } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { SiVisualstudiocode } from "react-icons/si";

export default function SkillsBackend() {
  const size = "3rem";
  const sizeSmall = "2rem";
  return (
    <div>
      {/* <div className="mb-5"></div> */}
      <h3 className="text-3xl md:text-3xl text-center font-semibold tracking-tighter leading-tight md:pr-4 pt-4">
        <Link href="/skills/backend">
          <a className="hover:underline">Backend</a>
        </Link>
      </h3>
      <p className="text-lg leading-relaxed text-center my-4 px-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus
        arcu justo, at bibendum ipsum convallis quis. Vivamus vel mi nulla. Sed
        consequat vitae lorem eget tristique. Aliquam nec tempus nisi.
      </p>
      <hr className="mx-8" />
      <div className="flex flex-row justify-center text-lg my-4">
        <DiNodejs size={size} />
        <DiPostgresql size={size} />
        <GrGraphQl size={size} />
      </div>
      <p className="text-2xl md:text-2xl text-center font-semibold tracking-tighter leading-tight md:pr-4 pt-4">
        with
      </p>
      <div className="flex flex-row justify-center text-lg my-4">
        <SiVisualstudiocode size={sizeSmall} />
        <DiGit size={sizeSmall} />
        <BsGithub size={sizeSmall} />
        <DiTerminal size={sizeSmall} />
      </div>

      <Link href="/" passHref={true}>
        <a className="flex justify-center mx-16 bg-white  hover:bg-black hover:text-white border border-black text-black font-bold py-3  px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
          See More
        </a>
      </Link>
    </div>
  );
}
