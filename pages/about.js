import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import { SITE_NAME } from "../lib/constants";

function About() {
  return (
    <Layout>
      <Head>
        <title>{`About | ${SITE_NAME}`}</title>
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
            Above all, I aim to do good. My work exists to support people in
            their endeavours, no matter how big or small. Read more about what
            drives me and how I work on my <Link href="/readme">ReadMe</Link>.
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
            . I’ve also been a regular contributor to{" "}
            <a href="https://uxdesign.cc/@jennifergoertzen" target="_blank">
              UX Collective on Medium
            </a>
            .
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-12 pt-8">
        <div className="col-span-1">
          <h2 className="font-normal text-base text-black-lighter">Timeline</h2>
        </div>
        <div className="md:col-span-2 mt-1">
          <p className="mb-5">
            <strong>BRYTER</strong> / No Code Automation
            <br />
            <span className="text-black-lighter text-xs inline-block mb-0.5">
              Berlin • Remote
            </span>
            <div className="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2021 – 2023
              </div>
              <div className="col-span-3 md:col-span-4">
                VP of User Experience
              </div>
            </div>
            <div className="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2020 – 2021
              </div>
              <div className="col-span-3 md:col-span-4">
                Staff Product Designer
              </div>
            </div>
          </p>
          <p className="mb-5">
            <strong>Caribou</strong> / Strategy & Design Consultancy
            <br />
            <span className="text-black-lighter text-xs inline-block mb-0.5">
              Remote
            </span>
            <div className="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2011 – Present
              </div>
              <div className="col-span-3 md:col-span-4">
                UX & Product Designer, Partner
              </div>
            </div>
          </p>
          <p className="mb-5">
            <strong>IDAGIO</strong> / Classical Music Streaming
            <br />
            <span className="text-black-lighter text-xs inline-block mb-0.5">
              Berlin • Hybrid
            </span>
            <div className="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2020
              </div>
              <div className="col-span-3 md:col-span-4">
                Staff Product Designer
              </div>
            </div>
            <div class="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2019 – 2020
              </div>
              <div className="col-span-3 md:col-span-4">
                Senior Product Designer
              </div>
            </div>
          </p>
          <p className="mb-5">
            <strong>Wire</strong> / Secure Messaging & Collaboration
            <br />
            <span className="text-black-lighter text-xs inline-block mb-0.5">
              Berlin • Hybrid
            </span>
            <div className="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2018 – 2019
              </div>
              <div class="col-span-3 md:col-span-4">UX Lead</div>
            </div>
          </p>
          <p className="mb-5">
            <strong>iQMetrix</strong> / Customer Experience Solutions
            <br />
            <span className="text-black-lighter text-xs inline-block mb-0.5">
              Canada
            </span>
            <div class="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2015 – 2018
              </div>
              <div class="col-span-3 md:col-span-4">UX Lead</div>
            </div>
          </p>
          <p className="mb-5">
            <strong>UX Lab</strong> / UX & Usability Testing Space
            <br />
            <span className="text-black-lighter text-xs inline-block mb-0.5">
              Canada
            </span>
            <div class="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2017 – 2018
              </div>
              <div class="col-span-3 md:col-span-4">Co-Founder</div>
            </div>
          </p>
          <p className="mb-5">
            <strong>UX Winnipeg</strong> / Events & Community Organization
            <br />
            <span className="text-black-lighter text-xs inline-block mb-0.5">
              Canada
            </span>
            <div class="grid grid-cols-5">
              <div class="text-black-lighter col-span-2 md:col-span-1">
                2017 – 2018
              </div>
              <div class="col-span-3 md:col-span-4">Co-Founder</div>
            </div>
          </p>
          <p className="mb-5">
            <strong>Investor’s Group</strong> / Financial Planning & Advisor
            Services
            <br />
            <span className="text-black-lighter text-xs inline-block mb-0.5">
              Canada
            </span>
            <div class="grid grid-cols-5">
              <div class="text-black-lighter col-span-2 md:col-span-1">
                2015
              </div>
              <div class="col-span-3 md:col-span-4">UX Designer</div>
            </div>
          </p>
          <p className="mb-5">
            <strong>Tipping Canoe</strong> / Consumer Mobile App Shop
            <br />
            <span className="text-black-lighter text-xs inline-block mb-0.5">
              Canada
            </span>
            <div class="grid grid-cols-5">
              <div class="text-black-lighter col-span-2 md:col-span-1">
                2011 – 2015
              </div>
              <div class="col-span-3 md:col-span-4">UX Designer</div>
            </div>
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
          <br />
          <strong>My other (perhaps more traditional) hobbies:</strong>

          <ul>
            <li>
              Creating art: Find my work on display at{" "}
              <a href="http://www.maque.ca/" target="_blank">
                Máquè
              </a>{" "}
              and{" "}
              <a href="http://www.enotecarestaurant.ca/" target="_blank">
                Enoteca
              </a>
              . Follow my latest paintings on{" "}
              <a href="https://www.instagram.com/jengoertzen/" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              Baking bread: My go-to book is{" "}
              <a hreef="http://a.co/6VaZZ2B" target="_blank">
                Flour Water Salt Yeast
              </a>
              .
            </li>
            <li>
              Reading: Latest reads posted in{" "}
              <Link href="/reading">Reading</Link> and those I most recommend in{" "}
              <Link href="/favourites">Favourites</Link>.
            </li>
          </ul>
          <p>
            I love to learn and I can’t keep it to only one topic. Ask me how
            pottery and learning German are going, if you’re keen.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
