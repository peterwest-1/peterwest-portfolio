import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";
import { TITLE } from "../lib/constants";

const About = () => {
  const paragraph = "max-w-2xl mx-auto mr-auto text-2xl  md:text-3xl lg:text-2xl  md:leading-none mb-12  md:text-left";
  return (
    <>
      <Layout>
        <Head>
          <title>About | {TITLE}</title>
        </Head>
        <Container>
          <Header />
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            About Me
          </h1>
          <p className="max-w-2xl mx-auto  text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tighter leading-tight md:leading-none mb-12  md:text-left">
            I'm Peter West, a Developer from
            <br /> Cape Town, South Africa
          </p>
          <p className={paragraph}>
            I am currently 28 years old in my final year of studies at the University of South Africa completing my
            Bachelor of Science degree inn Applied Mathematics and Computer Science
            <br />
            <br />
            My love for developement started when I was doing a programming subject during my first year of my
            engineering studies. Since then I have actively been developemnent iOS applications using UIKit and more
            recently SwiftUI. I've also been doing fullstack developement using React and Node.
            <br />
            <br />
          </p>
        </Container>
      </Layout>
    </>
  );
};

export default About;
