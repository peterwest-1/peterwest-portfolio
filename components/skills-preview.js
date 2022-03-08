import Link from "next/link";
import React from "react";
export default function SkillsPreview({ title, skills, tools, path }) {
  return (
    <div className="border border-black">
      {/* <div className="mb-5"></div> */}
      <h3 className="text-3xl md:text-3xl text-center font-semibold tracking-tighter leading-tight md:pr-4 pt-4">
        <Link href={path}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="text-lg leading-relaxed text-center my-4 px-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus
        arcu justo, at bibendum ipsum convallis quis. Vivamus vel mi nulla. Sed
        consequat vitae lorem eget tristique. Aliquam nec tempus nisi.
      </p>
      <hr className="mx-8" />
      <div className="flex flex-row justify-center text-lg my-4">
        {skills.map((skill) => skill)}
      </div>
      <p className="text-2xl md:text-2xl text-center font-semibold tracking-tighter leading-tight md:pr-4 pt-4">
        with
      </p>
      <div className="flex flex-row justify-center text-lg my-4">
        {tools.map((tool) => tool)}
      </div>
    </div>
  );
}
