import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import { SITE_NAME } from "../lib/constants";

function ReadMe() {
  return (
    <Layout>
      <Head>
        <title>ReadMe | {SITE_NAME}</title>
        <meta
          property="og:description"
          content={`A user guide on me and how I work. It captures my guiding values, how I work as a human.`}
          key="description"
        />
        <meta
          property="og:title"
          content={`Jen.ReadMe | ${SITE_NAME}`}
          key="title"
        />
        <meta
          property="og:url"
          content="https://jengoertzen.com/readme"
          key="url"
        />
      </Head>
      <PageHeader>
        <h1 className="text-2xl md:text-4xl">Jen.ReadMe</h1>
        <p className="text-base md:text-2xl mt-0 subpixel-antialiased">
          This page is an introduction to how I approach my work. It will help
          you understand what guides my processes; why I ask so many questions;
          and why I want you to ask me questions.
        </p>
      </PageHeader>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-8 md:mt-12 pt-8 md:pt-12">
        <div className="col-span-1">
          <menu className="sticky top-12 list-none m-0 p-0">
            <li>
              <span className="text-sm font-medium">Sections</span>
            </li>
            <li>
              <a href="#north-star-ideals">North Star Ideals</a>
            </li>
            <li>
              <a href="#ethical-principles">Ethical Principles</a>
            </li>
            <li>
              <a href="#nuance">Nuance</a>
            </li>
            <li>
              <a href="#errata">Errata</a>
            </li>
          </menu>
        </div>
        <div className="md:col-span-2 max-w-md">
          <h2 className="mt-4 md:mt-0" id="north-star-ideals">
            North Star Ideals
          </h2>
          <p>
            <strong>People matter.</strong> Product and service design is
            humble. It meets people where they are and supports them. Every
            person affected—directly or indirectly—matters in that process. With
            compassion and empathy, aim to understand and connect with people.
          </p>
          <p>
            <strong>Do good.</strong> There is always room to do good. Look for
            opportunities and act with intention. Do good for all people, for
            our environment, and for our future. Do it as well as you can,
            whatever that means for you at that time.
          </p>
          <p>
            <strong>Grow.</strong> We will always be learning. Be open to what
            you don’t know that you don’t know when presented by others. Reflect
            on where you’ve come from—yesterday or last year—and what that means
            for where you’re going next.
          </p>
          <hr />
          <h2 id="ethical-principles">Ethical Principles</h2>
          <p>
            <strong>Honesty</strong>. Be honest and transparent with those who
            are affected by the product and processes of your work.
          </p>
          <p>
            <strong>Affirmative action</strong>. Actively ask for deliberate,
            affirmative action from people when we seek consent and approval.
          </p>
          <p>
            <strong>Inclusion</strong>. Look for and act on opportunities to
            make all processes, teams, and products inclusive to people of all
            backgrounds and abilities.
          </p>
          <p>
            <strong>Positivity</strong>. Create positive impact wherever
            possible; for people affected by our product, today and in the
            future.
          </p>
          <p>
            <strong>Sustainability</strong>. Commit to developing sustainable
            processes, products, and relationships with people affected by our
            product, our team, and our environment.
          </p>
          <hr />
          <h2 id="nuance">Nuance</h2>
          <p>
            <strong>I listen first, respond after</strong>. I can come across as
            quiet in meetings. I listen first to hear all different points of
            view. If information is presented for the first time in a meeting, I
            will take time outside of the meeting before responding. If a
            response is needed immediately, I can prepare something.
          </p>
          <p>
            <strong>I have an opinion when I have enough information</strong>. I
            want to understand a problem or topic well enough to see all sides
            before picking one. If I have’t taken a stance on a topic, it may
            mean that I’m still learning about it. However, when a decision is
            needed before I’m sure, I can gather what I know at that time to
            provide one.
          </p>
          <p>
            <strong>I want to be challenged</strong>. My ideas are never final,
            and our work will never be finished. Poke holes, ask questions, make
            suggestions. This also applies to the way I work—my process is
            always iterating based on feedback. And, sometimes, I’m simply
            wrong. I want to hear that, too.
          </p>
          <p>
            <strong>
              I think in systems and want to see the bigger picture
            </strong>
            . In my work, I go wide to gather context before focusing in on the
            problem. It can look like a tangent or irrelevant. Don’t hesitate to
            ask me why I’m asking a question.
          </p>
          <p>
            <strong>
              I work towards the clearest way to communicate something
            </strong>
            . I believe that every solution has a core concept, a truth at its
            source that tells what you need to know. A lot of my process is
            reorganizing information into new forms to find the most clear
            description. If I’m not making sense, I want to know.
          </p>
          <p>
            <strong>
              I bias towards action—and this isn’t always on the computer
            </strong>
            . I believe the best way to test something is to make it and try to
            break it. We can theorize all day long, but we won’t know until it’s
            in front of us. This takes many forms, even in remote work, and can
            sometimes look messy—but it’s almost always fun.
          </p>
          <p>
            <strong>I assume positive intent</strong>. I assume people have
            positive intentions in everything they do. I also assume people have
            bad days but they’re still good.
          </p>
          <hr />
          <p>
            This is a living document. It’s incomplete and will certainly
            continue to grow and change as I grow and change.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default ReadMe;
