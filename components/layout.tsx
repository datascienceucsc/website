import Head from "next/head";
import Link from "next/link";

import { FunctionComponent } from "react";
import styles from "./layout.module.css";
import { siteTitle, navBar } from "../config";
import { FooterLink, footerLinks } from "../data";

type LayoutProps = {
  children: any[];
  pageId: string;
};

const Layout: FunctionComponent<LayoutProps> = ({ children, pageId }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        /* for constellations on the home page, keep this in layout so that it
        doesnt get diffed out */
        <script src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.0/zepto.min.js"></script>
        <script src={"/js/constellation.js"}></script>
      </Head>
      <div className={styles.PageContainer}>
        <nav>
          <div key="home">
            <Link href="/">
              <a>
                <img
                  src="/images/menu-bar.png"
                  alt="Home"
                  className="fullLogo"
                />
              </a>
            </Link>
          </div>
          {navBar.map(({ linkText, pageId }) => (
            <div key={pageId}>
              <Link href={`/posts/${pageId}`} as={`/posts/${pageId}`}>
                <a className="navItem">{linkText}</a>
              </Link>
            </div>
          ))}
        </nav>
        <div className="content">
          <main>{children}</main>
          {pageId !== "home" ? (
            <div className="backToHome">
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          ) : (
            <div className="backToHome"></div>
          )}
        </div>
        <footer>
          <div className="footerContent">
            {footerLinks.map((fInfo: FooterLink) => (
              <div key={fInfo.linkText}>
                <a href={fInfo.href}>{fInfo.linkText}</a>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
