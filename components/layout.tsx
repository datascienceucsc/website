import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { FunctionComponent } from "react";

const name = "DataScienceSlugs";
export const siteTitle = "DataScienceSlugs @ UCSC";

type LayoutProps = {
  children: any[];
  home?: boolean;
};

const Layout: FunctionComponent<LayoutProps> = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href={ `${process.env.BASE_URL}/favicon.ico` } />
        <meta name="description" content="DataScienceSlugs @ UCSC" />
      </Head>
      <header className={styles.header}>
        <h2 className={utilStyles.headingLg}>
          <Link href="/" as={process.env.BASE_URL + "/"}>
            <a className={utilStyles.colorInherit}>{name}</a>
          </Link>
        </h2>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/" as={process.env.BASE_URL + "/"}>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
