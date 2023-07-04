import Head from "next/head";
import { HOME_OG_IMAGE_URL, SITE_NAME } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <script
        src="https://cdn.usefathom.com/script.js" 
        data-site={process.env.FATHOM} 
        defer
      ></script>
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <title>{SITE_NAME}</title>
      <meta
        property="og:description"
        content="Jen Goertzen is a human experience designer & leader."
        key="description"
      />
      <meta property="og:title" content={SITE_NAME} key="title" />
      <meta property="og:url" content="https://jengoertzen.com/" key="url" />
      <meta property="og:type" content="website" key="type" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} key="image" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@jengoertzen" />
      <meta property="twitter:creator" content="@jengoertzen" />
      <meta property="twitter:title" content={SITE_NAME} key="twitter-title" />
      <meta
        property="twitter:description"
        content="Jen Goertzen is a human experience designer & leader."
        key="twitter-description"
      />
      <meta
        property="twitter:image"
        content={HOME_OG_IMAGE_URL}
        key="twitter-image"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
