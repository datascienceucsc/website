import { FunctionComponent } from "react";
import Head from "next/head";

import { siteTitle } from "../../config";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import PersonCardContainer from "../../components/cards";
import { people, Person } from "../../data";
import utilStyles from "../../styles/utils.module.css";

// peopleinfo is the special case
// for about page to render cards
interface PostProps {
  postData: PostData;
  peopleInfo?: Person[];
}

// peopleinfo is the special case
// for about page to render cards
const Post: FunctionComponent<PostProps> = ({ postData, peopleInfo }) => {
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
      {peopleInfo && <PersonCardContainer peopleInfo={peopleInfo} />}
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
  const peopleInfo = params.id === "about" ? people : null;
  // special case for about page
  return {
    props: {
      postData,
      peopleInfo,
    },
  };
}

export default Post;
