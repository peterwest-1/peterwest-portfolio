import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";

import React from "react";
import dynamic from "next/dynamic";
import { setup, draw } from "../sketches/quick-sort";

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
        </Container>
      </Layout>
    </>
  );
}
