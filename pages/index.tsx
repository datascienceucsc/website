import { FunctionComponent } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import { siteTitle } from "../config";
import Date from "../components/date";
import { getSortedPostsData, MatterInfo } from "../lib/posts";
import people from "../data";
import utilStyles from "../styles/utils.module.css";

interface IndexProps {
  allPostsData: MatterInfo[];
}

const Home: FunctionComponent<IndexProps> = ({ allPostsData }) => {
  return (
    <Layout pageId="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Data Science Stuff</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData
            // dont show non-blog pages on the blog
            .filter(({ blog }) => blog)
            .map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link
                  href={`${process.env.BASE_URL}/posts/[id]`}
                  as={`${process.env.BASE_URL}/posts/${id}`}
                >
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  let allPostsData: MatterInfo[] = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Home;
