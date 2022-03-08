import Container from "./container";
import { EXAMPLE_PATH, GITHUB_LINK, LINKEDIN_LINK } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col  lg:flex-row items-center ">
          <h3 className="w-auto text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Cape Town,&nbsp;South Africa.
          </h3>

          {/* {          <p className=" text-gray-500 text-lg lg:text-sm  tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            &copy;2022 Peter West. All rights reserved.
          </p> */}

          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={LINKEDIN_LINK}
              target="_blank"
              rel="noreferrer"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              LinkedIn
            </a>
            <a
              href={GITHUB_LINK}
              target="_blank"
              rel="noreferrer"
              className="mx-3 bg-white hover:bg-black hover:text-white border border-black text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
