import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";
import { TITLE } from "../lib/constants";
import Nothing from "../components/nothing";
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
          <Nothing />
        </Container>
      </Layout>
    </>
  );
}
