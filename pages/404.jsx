import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";
import Head from "next/head";
import { TITLE } from "../lib/constants";
import Nothing from "../components/nothing";

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 | {TITLE} </title>
      </Head>
      <Container>
        <Header />
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left mt-8">
          404
        </h1>
        <Nothing />
      </Container>
    </Layout>
  );
}
