import Head from "next/head";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import { SITE_NAME } from "../lib/constants";
import Link from "next/link";

function Speaking() {
  return (
    <Layout>
      <Head>
        <title>Speaking | {SITE_NAME}</title>
        <meta
          property="og:description"
          content={`Speaking at events around the world on exciting and inspiring topics.`}
          key="description"
        />
        <meta
          property="og:title"
          content={`Speaking | ${SITE_NAME}`}
          key="title"
        />
        <meta
          property="og:url"
          content="https://jengoerzten.com/speaking"
          key="url"
        />
      </Head>
      <PageHeader>
        <h1 className="text-2xl md:text-4xl">Speaking</h1>
        <p className="text-base md:text-2xl mt-0 subpixel-antialiased">
          I’ve had the honour to speak with teams, professionals, and students
          around the world on topics and ideas that have shaped me as a human, designer,
          and leader.
        </p>
      </PageHeader>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-8 md:mt-12 pt-4 md:pt-8">
        <div className="col-span-1">
          <h2 className="text-base text-black-lighter font-normal">
            Conferences & presentations
          </h2>
        </div>
        <div className="md:col-span-2">
          <p>
            Speaker at{" "}
            <a href="https://www.meetup.com/berlin-product-designers/" target="_blank">
              Berlin Product Designers Meetup
            </a>
            <br />
            <strong>“To design for no-code: We need to stop talking about ‘no code’.”</strong>
            <br />
            March 2022 
          </p>
          <p>
            Speaker at{" "}
            <a href="https://newmediamanitoba.com/" target="_blank">
              New Media Manitoba
            </a>
            <br />
            <strong>“Growing Into Any Role You Want”</strong>
            <br />
            April 2021 
            <a
              href="https://www.youtube.com/watch?v=KtqYrIig7rI"
              target="_blank"
            >
              Presentation recording on YouTube
            </a>
          </p>
          <p>
            Roundtable at{" "}
            <a href="https://uxcopenhagen.com/" target="_blank">
              UX Copenhagen 2021: Commoning
            </a>
            <br />
            <strong>
              “The tension between inclusion & accessibility and the demands of
              product-market fit”
            </strong>
            <br />
            March 2021
          </p>
          <p>
            Presenter at{" "}
            <a href="https://www.uxcampeurope.org/" target="_blank">
              UX Camp Europe
            </a>
            <br />
            <strong>
              “Joining and knowing your new team: How to onboard yourself”
            </strong>
            <br />
            June 2020 – 
            <a
              href="https://docs.google.com/document/d/1pTr_23SDf9BLDIoXhTTYp2U12uw58_DL27PBuM-qgpY/edit?usp=sharing"
              target="_blank"
            >
              Template Script EN
            </a>{" "}
            /{" "}
            <a
              href="https://docs.google.com/document/d/1CmE8wy4vR82AaZ_J8l7oQEPN71J_-WDfJOQXCG8ViI4/edit"
              target="_blank"
            >
              Template Script DE
            </a>
          </p>
          <p>
            Presenter at{" "}
            <a href="https://techcircus.io/" target="_blank">
              UX Crunch Berlin
            </a>
            <br />
            <strong>“How to stop having the ‘Accessibility Talk’”</strong>
            <br />
            December 2019
          </p>
          <p>
            Presenter at{" "}
            <a href="http://ixdaberlin.de/" target="_blank">
              IxDA Berlin
            </a>
            <br />
            <strong>
              “Joining and knowing your new team: How to onboard yourself”
            </strong>
            <br />
            June 2019 – 
            <a
              href="https://docs.google.com/document/d/1pTr_23SDf9BLDIoXhTTYp2U12uw58_DL27PBuM-qgpY/edit?usp=sharing"
              target="_blank"
            >
              Template Script EN
            </a>{" "}
            /{" "}
            <a
              href="https://docs.google.com/document/d/1CmE8wy4vR82AaZ_J8l7oQEPN71J_-WDfJOQXCG8ViI4/edit"
              target="_blank"
            >
              Template Script DE
            </a>
          </p>
          <p>
            Co-presenter at Wire for{" "}
            <a
              href="https://www.fh-joanneum.at/content-strategie-und-digitale-kommunikation/master/"
              target="_blank"
            >
              Content Graz
            </a>{" "}
            students
            <br />
            <strong>“How we design: Defining the problem space”</strong>
            <br />
            May 2019
          </p>
          <p>
            Presenter at{" "}
            <a href="https://marleyspoon.de" target="_blank">
              Marley Spoon’s
            </a>{" "}
            Design Exchange
            <br />
            <strong>“Context matters: How to get better user feedback”</strong>
            <br />
            February 2019
          </p>
          <p>
            Presenter at{" "}
            <a href="https://wire.com/en/" target="_blank">
              Wire
            </a>
            <br />
            <strong>“Context matters: How to get better user feedback”</strong>
            <br />
            February 2019
          </p>
          <p>
            Speaker at{" "}
            <a href="https://rrc.mb.ca" target="_blank">
              Red River College
            </a>
            <br />
            <strong>
              “Ethics & Sustainable Design (or how to be a good human)”
            </strong>
            <br />
            January 2018
          </p>
          <p>
            Speaker at{" "}
            <a href="https://rrc.mb.ca" target="_blank">
              Red River College
            </a>
            <br />
            <strong>“A Day in the Life of a UX Designer”</strong>
            <br />
            November 2017
          </p>
          <p>
            Panel Organizer & Moderator at Prairie Dev Con
            <br />
            <strong>“Navigating Cross-Functional Team Dynamics”</strong>
            <br />
            June 2017
          </p>
          <p>
            Co-Speaker with Quinn Keast at North Forge Technology Exchange
            <br />
            <strong>
              “Putting UX to the Test: User Interviews & Usability Testing”
            </strong>
            <br />
            May 2017
          </p>
          <p>
            Presenter at Prairie Dev Con
            <br />
            <strong> “Stop Reacting to Mocks and Own Your Product”</strong>
            <br />
            April 2016
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-8 md:mt-12 pt-4 md:pt-8">
        <div className="col-span-1">
          <h2 className="text-base text-black-lighter font-normal">Book Me</h2>
        </div>
        <div className="md:col-span-2">
          <h2>Interested in having me speak?</h2>
          <p>
            The best way to learn is to teach and to listen. I’m always
            interested in presenting or running workshops with teams, students,
            and anyone looking to grow. If you’re interested, please get in
            touch at{" "}
            <a href="mailto:jen@jengoertzen.com">jen@jengoertzen.com</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Speaking;
