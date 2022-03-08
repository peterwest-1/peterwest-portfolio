import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { TITLE } from "../lib/constants";
import { indexQuery } from "../lib/queries/post";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import Skills from "../components/skills";
import Link from "next/link";

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{TITLE}</title>
        </Head>
        <Container>
          <Intro />

          <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
            <div>
              <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                <Link href="/">
                  <a className="hover:underline">Title</a>
                </Link>
              </h3>
              <div className="mb-4 md:mb-0 text-lg">sdsddd</div>
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-4">Exceprt</p>
              {/* <Avatar name={author.name} picture={author.picture} /> */}
            </div>
          </div>
          <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            Latest
          </h2>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          <Skills />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allPosts, preview },
  };
}
