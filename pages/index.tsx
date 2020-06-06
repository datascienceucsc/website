import { FunctionComponent } from "react";
import Head from "next/head";
import Link from "next/link";

import Constellation from "./../components/constellation";
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
      <Constellation />
      <section>
        <h2>Data Science @ SC</h2>
        <hr />
        <p>
          Data science is an interdisciplinary field based on computer science,
          mathematics, and statistics used to extract knowledge and create
          meaningful insights from data.
        </p>
        <p>
          Data Science @ SC brings together students from across computer
          science, mathematics and other fields in order to bridge the gap
          between academia and industry through workshops, machine learning
          competitions and consulting projects.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <hr />
        <ul className={utilStyles.list}>
          {allPostsData
            // dont show non-blog pages on the blog
            .filter(({ blog }) => blog)
            .map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a className={utilStyles.blogLink}>{title}</a>
                </Link>
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
