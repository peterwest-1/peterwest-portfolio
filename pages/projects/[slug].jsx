import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import { TITLE } from "../../lib/constants";
import { projectQuery, projectSlugsQuery } from "../../lib/queries/project";
import { urlForImage, usePreviewSubscription } from "../../lib/sanity";
import {
  sanityClient,
  getClient,
  overlayDrafts,
} from "../../lib/sanity.server";
import MoreProjects from "../../components/more-projects";

export default function Project({ data = {}, preview }) {
  const router = useRouter();

  const slug = data?.project?.slug;
  console.log(slug);
  const {
    data: { project, moreProjects },
  } = usePreviewSubscription(projectQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {project.title} | {TITLE}
                </title>
                {project.coverImage && (
                  <meta
                    key="ogImage"
                    property="og:image"
                    content={urlForImage(project.coverImage)
                      .width(1200)
                      .height(627)
                      .fit("crop")
                      .url()}
                  />
                )}
              </Head>
              <PostHeader
                title={project.title}
                coverImage={project.coverImage}
                date={project.date}
                author={project.author}
              />
              <PostBody content={project.content} />
            </article>
            <SectionSeparator />
            {moreProjects.length > 0 && (
              <MoreProjects projects={moreProjects} />
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { project, moreProjects } = await getClient(preview).fetch(
    projectQuery,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      preview,
      data: {
        project,
        moreProjects: overlayDrafts(moreProjects),
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(projectSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
