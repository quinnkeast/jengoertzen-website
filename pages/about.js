import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import { SITE_NAME } from "../lib/constants";

function About() {
  return (
    <Layout>
      <Head>
        <title>About | {SITE_NAME}</title>
        <meta
          property="og:description"
          content={`I’m Jen Goertzen, a human experience designer & leader.`}
          key="description"
        />
        <meta
          property="og:title"
          content={`About | ${SITE_NAME}`}
          key="title"
        />
        <meta
          property="og:url"
          content="https://jengoertzen.com/about"
          key="url"
        />
      </Head>
      <PageHeader>
        <h1 className="text-2xl md:text-4xl">About</h1>
        <p className="text-base md:text-2xl mt-0 subpixel-antialiased">
          I’m Jen Goertzen, a human experience designer & leader.
        </p>
        <img
          src="/assets/jen-portrait.jpg"
          className="w-72 mt-4 md:mt-8"
          alt="Portrait of Jen Goertzen"
        />
      </PageHeader>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-8 md:mt-16 pt-4 md:pt-8">
        <div className="col-span-1">
          <h2 className="font-medium text-base text-black-lighter">
            The nitty gritty
          </h2>
        </div>
        <div className="md:col-span-2 max-w-md">
          <p>
            The only thing I love more than a good question is getting to the
            answer. The process of taking apart problems then reconstructing the
            pieces to find a solution is incredibly satisfying.
          </p>

          <p>
            User experience marries my two passions of problem solving and
            observing human behaviour. I’m able to do both everyday—then watch
            people interact with the solutions so I can further improve on my
            ideas. Above all, I aim to do good. My work exists to support people
            in their endeavours, however big or small.
          </p>

          <p>
            In 2011, I co-founded{" "}
            <a href="https://caribou.co" target="_blank">
              Caribou
            </a>
            , a user experience strategy and design consultancy that works with
            startups and organizations to make better products and services. I
            also kicked off UX Winnipeg, a UX-focused meetup for Winnipeg’s tech
            community. I write to bring clarity to my thinking and to share my
            ideas with the community. My writing has been republished on blogs
            and tech websites, including{" "}
            <a
              href="https://www.fastcompany.com/90489814/the-internet-is-full-of-advice-on-how-to-get-the-most-out-of-self-isolation-ignore-it%22"
              target="_blank"
            >
              Fast Company
            </a>
            ,{" "}
            <a
              href="https://thenextweb.com/news/5-easy-tips-on-how-to-brainstorm-with-your-newly-remote-team"
              target="_blank"
            >
              The Next Web
            </a>
            , and{" "}
            <a
              href="https://blog.marvelapp.com/dear-designer-its-time-to-rediscover-your-whiteboard/"
              target="_blank"
            >
              Marvel App Blog
            </a>
            . I’m also a regular contributor to{" "}
            <a href="https://uxdesign.cc/@jennifergoertzen" target="_blank">
              UX Collective on Medium
            </a>
            .
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-12 pt-8">
        <div className="col-span-1">
          <h2 className="font-medium text-base text-black-lighter">Timeline</h2>
        </div>
        <div className="md:col-span-2">
          <p>
            <strong>BRYTER</strong> / No Code Automation
            <br />
            VP of User Experience
            <br />
            2021 – Present
            <br />
            Product Designer
            <br />
            2020
          </p>
          <p>
            <strong>Caribou</strong> / Strategy &amp; Design Consultancy
            <br />
            UX &amp; Product Designer, Partner
            <br />
            2011 – Present
          </p>
          <p>
            <strong>IDAGIO</strong> / Classical Music Streaming
            <br />
            Staff Product Designer
            <br />
            2020
            <br />
            Senior Product Designer
            <br />
            2019 – 2020
          </p>
          <p>
            <strong>Wire</strong> / Secure Messaging & Collaboration
            <br />
            UX Lead
            <br />
            2018 – 2019
          </p>
          <p>
            <strong>iQMetrix</strong> / Customer Experience Solutions
            <br />
            UX Lead
            <br />
            2015 – 2018
          </p>
          <p>
            <strong>UX Lab</strong> / UX & Usability Testing Space
            <br />
            Co-Founder
            <br />
            2017 – 2018
          </p>
          <p>
            <strong>UX Winnipeg</strong> / Events &amp; Community Organization
            <br />
            Co-Founder
            <br />
            2017 – 2018
          </p>
          <p>
            <strong>Investor’s Group</strong> / Financial Planning & Advisor
            Serices
            <br />
            UX Designer
            <br />
            2015
          </p>
          <p>
            <strong>Tipping Canoe</strong> / Consumer Mobile App Shop
            <br />
            Mobile App UX Designer
            <br />
            2011 – 2015
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-8 md:mt-16 pt-4 md:pt-8">
        <div className="col-span-1">
          <h2 className="font-medium text-base text-black-lighter">
            On the side
          </h2>
        </div>
        <div className="md:col-span-2 max-w-md">
          <p>
            Outside of my work in user experience it’s important to me that I
            grow as an individual and challenge myself.
          </p>

          <p>
            I love the sport of triathlon, particularly the long-course
            distances. I’ve completed an Ironman (140.6) as well as three—and
            still counting—half Ironman (70.3) races.
          </p>

          <strong>More traditional hobbies:</strong>

          <ul>
            <li>
              Drawing: Find my work at{" "}
              <a href="http://www.maque.ca/" target="_blank">
                Máquè
              </a>{" "}
              and{" "}
              <a href="http://www.enotecarestaurant.ca/" target="_blank">
                Enoteca
              </a>
              .
            </li>
            <li>
              Baking bread: My go-to book is{" "}
              <a hreef="http://a.co/6VaZZ2B" target="_blank">
                Flour Water Salt Yeast
              </a>
              .
            </li>
            <li>
              Reading: Latest reads posted on{" "}
              <Link href="/favourites">
                <a>Favourites</a>
              </Link>
              .
            </li>
          </ul>
          <p>
            You can follow my "hobbies" on{" "}
            <a href="https://www.instagram.com/jengoertzen/" target="_blank">
              Instagram
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
