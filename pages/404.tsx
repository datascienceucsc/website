import Head from "next/head";
import status from "http-status";

import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";
import { name, siteTitle, navBar } from "../config";

function NotFound({ statusCode }) {
  return (
    <Layout pageId={statusCode}>
      <Head>
        <title>
          {siteTitle} - {statusCode}
        </title>
      </Head>
      <div className={utilStyles.error}>
        <p>404 | Page Not Found</p>
      </div>
    </Layout>
  );
}

export default NotFound;
