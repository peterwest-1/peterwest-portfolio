import Head from "next/head";
import { TITLE } from "../../lib/constants";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Container from "../../components/container";
import HeroProject from "../../components/hero-project";

import MoreProjects from "../../components/more-projects";
import { projectIndexBackendQuery } from "../../lib/queries/project";

import { getClient, overlayDrafts } from "../../lib/sanity.server";

export default function Backend({ allProjects, preview }) {
  const heroPost = allProjects[0];
  const morePosts = allProjects.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>Back End Development | {TITLE} </title>
        </Head>
        <Container>
          <Header />
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            Back End Development
          </h1>
          {heroPost && (
            <HeroProject
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
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
    await getClient(preview).fetch(projectIndexBackendQuery)
  );
  return {
    props: { allProjects, preview },
  };
}
