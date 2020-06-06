import Head from "next/head";
import status from "http-status";

import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";
import { name, siteTitle, navBar } from "../config";

function Error({ statusCode }) {
  return (
    <>
      <Layout pageId={statusCode?statusCode.toString():"Error"}>
        <Head>
          <title>
            {siteTitle} - {statusCode}
          </title>
        </Head>
        <div className={utilStyles.error}>
          <p>
            {statusCode
              ? `Error | ${statusCode} - ${status[statusCode]}`
              : "Error | ClientError; try using a different browser."}
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
