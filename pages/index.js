import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello there! I am a passionate full stack developer from India,
          actively involved in open source contributions. In this blog, I will
          share my journey, projects, and experiences as I continuously learn
          and develop using the MERN and MEAN stacks.
        </p>
        <p>
         
          <h3>Contributing to Open Source:</h3>
          One of my primary focuses is contributing to the open-source
          community. Open source projects provide an incredible platform for
          collaboration, learning, and driving innovation. By actively
          participating in open source initiatives, I enhance my skills while
          giving back to the developer community.
          <h3>Projects:</h3>
          You can explore my diverse range of projects on my GitHub profile{" "}
          <a href="github.com/Abhinavkar">HERE</a>. These projects showcase my
          versatility as a full stack developer, utilizing the MERN (MongoDB,
          Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular,
          Node.js) stacks. From web applications to APIs, my projects highlight
          my ability to create robust and user-friendly solutions.
          <h3>Connect with Me:</h3>I welcome opportunities for collaboration and
          networking. If you are interested in my work or wish to discuss
          potential collaborations, please feel free to reach out to me via
          email at karabhinav24@gmail.com. I am open to engaging in discussions
          and exploring exciting projects together.
        
        </p>
      </section>
    </Layout>
  );
}
