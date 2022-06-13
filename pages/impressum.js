import Head from "next/head";
import Layout from "../components/layout";

function Impressum() {
  return (
    <Layout>
      <Head>
        <title>Impessum | Jen Goertzen</title>
      </Head>
      <div className="grid md:grid-cols-5">
        <div className="col-span-3 col-start-2 content">
          <h3>Jen Goertzen</h3>
          <p>
            <a href="mailto:jen@jengoertzen.com">jen@jengoertzen.com</a>
            <br />
            Dieffenbachstrasse 58, 10967 Berlin
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Impressum;
