// defines configuration for the website

// name of site/title
export const name = "DataScienceSlugs";
export const siteTitle = "DSS @ UCSC";

export interface NavbarInfo {
  linkText: string;
  pageId: string;
}

// define pages linked in the header
// these ids correspond to the names of pages (without .md) in posts
// the Home link is added automatically at the beginning of this list
export const navBar = [
  {
    linkText: "About",
    pageId: "about",
  },
];
