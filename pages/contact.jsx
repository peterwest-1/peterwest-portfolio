import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";
import { TITLE } from "../lib/constants";

export default function Contact() {
  return (
    <>
      <Layout>
        <Head>
          <title>Contact Me | {TITLE}</title>
        </Head>
        <Container>
          <Header />
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            Contact Me
          </h1>
          <div>
            <div className="w-full max-w-xl ">
              <form
                action="https://formspree.io/f/moqrwrjl"
                method="POST"
                className="bg-white border rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4">
                  <label
                    className="block text-black  text-lg font-bold tracking-tighter leading-tight mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className=" appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-black text-lg  font-bold tracking-tighter leading-tight mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className=" appearance-none border  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    type="email"
                  />
                </div>
                <div className="mb-4  ">
                  <label
                    className="block text-black text-lg font-bold tracking-tighter leading-tight mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className=" appearance-none border w-full h-24 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    name="message"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className=" bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                  >
                    Send
                  </button>
                </div>
              </form>
              <p className="block text-right text-gray-500 text-sm  tracking-tighter leading-tight mb-2">
                Information will not be stored
              </p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
