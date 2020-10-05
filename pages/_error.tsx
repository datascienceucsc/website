import Head from "next/head";
import status from "http-status";

import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { siteTitle } from "../config";

function Error({ statusCode }) {
  return (
    <>
      <Layout pageId={statusCode ? statusCode.toString() : "Error"}>
        <Head>
          <title>
            {siteTitle} - {statusCode}
          </title>
        </Head>
        <div className={utilStyles.error}>
          <p>
            {statusCode
              ? `Error | ${statusCode} - ${status[statusCode]}`
              : "Error | ClientError; check the console or reload the page."}
          </p>
        </div>
      </Layout>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
