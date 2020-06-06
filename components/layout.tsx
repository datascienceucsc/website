import Head from "next/head";
import Link from "next/link";

import Constellation from "./constellation";
import utilStyles from "../styles/utils.module.css";
import { FunctionComponent } from "react";
import styles from "./layout.module.css";
import { name, siteTitle, navBar } from "../config";

type LayoutProps = {
  children: any[];
  pageId: string;
};

const Layout: FunctionComponent<LayoutProps> = ({ children, pageId }) => {
  return (
    <>
      <Head>
        <link rel="icon" href={`${process.env.BASE_URL}/favicon.ico`} />
        <meta name="description" content={siteTitle} />
      </Head>
      <nav>
        <div key="home">
          <Link href="/" as={process.env.BASE_URL + "/"}>
            <a>
              <img
                src={`${process.env.BASE_URL}/images/full-logo.png`}
                alt="Home"
                className="fullLogo"
              />
            </a>
          </Link>
        </div>
        {navBar.map(({ linkText, pageId }) => (
          <div key={pageId}>
            <Link
              href={`${process.env.BASE_URL}/posts/${pageId}`}
              as={`${process.env.BASE_URL}/posts/${pageId}`}
            >
              <a className="navItem">{linkText}</a>
            </Link>
          </div>
        ))}
      </nav>
      <div className={styles.container}>
        <main>{children}</main>
        {pageId === "home" ? (
          <Constellation />
        ) : (
          <div className={styles.backToHome}>
            <Link href="/" as={process.env.BASE_URL + "/"}>
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.0/zepto.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/stats.js/r11/Stats.js"></script>
      <script src={`${process.env.BASE_URL}/constellation.js`}></script>
    </>
  );
};

export default Layout;
