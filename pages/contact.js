import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";

export default function Contact() {
  return (
    <>
      <Layout>
        <Head>
          <title>Contact</title>
        </Head>
        <Container>
          <Header />
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            Contact
          </h1>
        </Container>
      </Layout>
    </>
  );
}
