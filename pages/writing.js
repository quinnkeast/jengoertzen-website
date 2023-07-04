import Head from "next/head";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import PostItem from "../components/post-item";
import { getAllPosts } from "../lib/api";
import { SITE_NAME } from "../lib/constants";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <Layout>
      <Head>
        <title>{`Writing | ${SITE_NAME}`}</title>
        <meta
          property="og:description"
          content={`A collection of thinking on user experience, design, and business.`}
          key="description"
        />
        <meta
          property="og:title"
          content={`Writing | ${SITE_NAME}`}
          key="title"
        />
        <meta
          property="og:url"
          content="https://jengoertzen.com/writing"
          key="url"
        />
      </Head>
      <PageHeader>
        <h1 className="text-2xl md:text-4xl">Writing</h1>
        <p className="leading-snug text-base md:text-2xl subpixel-antialiased mt-0 md:mt-2">
          A collection of thinking on user experience, design, and business.
        </p>
      </PageHeader>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-6 md:mt-12 pt-0 post-list">
        <PostItem post={heroPost} hero={true} />
        {morePosts.map((post, i) => (
          <PostItem post={post} key={i} />
        ))}
        <>
          <div className="md:col-span-1 md:text-right">
            <span className="text-sm text-black-lighter inline-block leading-snug pr-8 mt-3">
            &#182;
            </span>
          </div>
          <div className="md:col-span-2 md:col-start-2 border-opacity-10 md:mt-3 pb-3 md:flex md:flex-row justify-between">
            <h2 className="m-0 text-sm leading-normal text-black-lighter font-serif md:pr-8 subpixel-antialiased">
              I’m currently transferring pieces here from <a href="https://medium.com/@jennifergoertzen" target="_blank">my archive</a>. If you’re looking for a piece that isn’t here, please <a href="mailto:jen@jengoertzen.com">contact me</a>.
            </h2>
          </div>
        </>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "subtitle",
    "date",
    "slug",
    "author",
    "coverImage",
    "tags",
    "external",
  ]);

  return {
    props: { allPosts },
  };
}
