import Head from "next/head";
import Container from "../components/container";
import Header from "../components/header";
import HeroProject from "../components/hero-project";
import Layout from "../components/layout";
import MoreProjects from "../components/more-projects";
import { projectIndexQuery } from "../lib/queries/project";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import { TITLE } from "../lib/constants";

export default function Portfolio({ allProjects, preview }) {
  const heroPost = allProjects[0];
  const morePosts = allProjects.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>Portfolio | {TITLE}</title>
        </Head>
        <Container>
          <Header />
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            Portfolio
          </h1>
          {heroPost && (
            <HeroProject
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              category={heroPost.category}
            />
          )}
          {morePosts.length > 0 && <MoreProjects projects={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allProjects = overlayDrafts(
    await getClient(preview).fetch(projectIndexQuery)
  );
  return {
    props: { allProjects, preview },
  };
}
