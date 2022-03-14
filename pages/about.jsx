import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";
import { TITLE } from "../lib/constants";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>About | {TITLE}</title>
        </Head>
        <Container>
          <Header />
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            About
          </h1>
          <p className=" text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight md:leading-none mb-12  md:text-left">Nothing here yet, I'm afraid.</p>
        </Container>
      </Layout>
    </>
  );
}
