import Head from "next/head";
import Layout from "../components/layout";
import { HOME_OG_IMAGE_URL, SITE_NAME } from "../lib/constants";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | {SITE_NAME}</title>
      </Head>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-3">
          <h1 className="mb-4 md:mb-8 text-4xl md:text-5xl leading-none md:leading-none">
            Jen Goertzen is a human experience designer & leader.
          </h1>
          <h2 className="text-base md:text-2xl font-light tracking-snug leading-tight md:leading-tight">
            VP of User Experience at{" "}
            <a href="https://bryter.io" target="_blank">
              BRYTER
            </a>
            . Also Partner at{" "}
            <a href="https://caribou.co" target="_blank">
              Caribou
            </a>
            .
          </h2>
          <div className="grid md:grid-cols-3 mt-2 md:mt-8">
            <div className="col-1">
              <p>
                <strong>Current location</strong>
                <br />
                Berlin, Germany
              </p>
            </div>
            <div className="col-1">
              <p>
                <strong>Say hello</strong>
                <br />
                <a href="mailto:jen@jengoertzen.com">jen@jengoertzen.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
