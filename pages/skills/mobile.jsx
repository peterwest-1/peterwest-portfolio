import Head from "next/head";
import { TITLE } from "../../lib/constants";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Container from "../../components/container";
import HeroProject from "../../components/hero-project";
import MoreProjects from "../../components/more-projects";
import { projectIndexMobileQuery } from "../../lib/queries/project";

import { getClient, overlayDrafts } from "../../lib/sanity.server";

export default function Mobile({ allProjects, preview }) {
  const heroPost = allProjects[0];
  const morePosts = allProjects.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>Mobile Development | {TITLE} </title>
        </Head>
        <Container>
          <Header />
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            Mobile Development
          </h1>
          {!heroPost ? <p className=" text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight md:leading-none mb-12  md:text-left">Nothing here yet, I'm afraid</p> : (
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
    await getClient(preview).fetch(projectIndexMobileQuery)
  );
  return {
    props: { allProjects, preview },
  };
}
