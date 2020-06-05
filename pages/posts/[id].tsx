import { FunctionComponent } from "react";
import Head from "next/head";

import { siteTitle } from "../../config";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

interface PostProps {
  postData: PostData;
}

const Post: FunctionComponent<PostProps> = ({ postData }) => {
  return (
    <Layout pageId={postData.id}>
      <Head>
        <title>
          {siteTitle} - {postData.title}
        </title>
      </Head>
      <article>
        {postData.blog ? (
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
        ) : null}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default Post;
