import { FunctionComponent } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import { siteTitle } from "../config";
import utilStyles from "../styles/utils.module.css";
import { CalendarDate, eventData } from "../events";

interface CalendarProps {
  allEvents: CalendarDate[];
}

const CalendarListItem: FunctionComponent<CalendarDate> = ({ name, date }) => {
  return (
    <li key={name}>
      {name} - {date}
    </li>
  );
};

const Calendar: FunctionComponent<CalendarProps> = ({ allEvents }) => {
  return (
    <Layout pageId="calendar">
      <Head>
        <title>{siteTitle} - Calendar</title>
      </Head>
      <section>
        <h2>Calendar</h2>
        <hr />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>{allEvents.map(CalendarListItem)}</ul>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      allEvents: eventData,
    },
  };
}

export default Calendar;
