import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";

import React from "react";
import dynamic from "next/dynamic";
import { setup, draw } from "../sketches/astar";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function Sketches() {
  return (
    <>
      <Layout>
        <Head>
          <title>Sketches</title>
        </Head>
        <Container>
          <Header />
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            Sketches
          </h1>
          <Sketch setup={setup} draw={draw} />
          {/* <div className="my-3">
            <button className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
              Stop
            </button>
            <button className="mx-3 bg-white hover:bg-black hover:text-white border border-black text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
              Reset
            </button>
          </div> */}
        </Container>
      </Layout>
    </>
  );
}
