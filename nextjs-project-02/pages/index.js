import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "The First Meetup",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    address: "Addrress",
  },
  {
    id: "m2",
    title: "The Second Meetup",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    address: "Addrress",
  },
];

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React meetups</title>
        <meta name="description" content="The highly active react meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  // This function will execute for every incoming request
  return {
    props: {
      meetups: DUMMY_MEETUP,
    },
  };
}

// export async function getStaticProps() {
//   //fetch data from api
//   return {
//     props: {
//       meetups: DUMMY_MEETUP,
//     },
//     revalidate: 10, // load latest data in the interval of 10 sec
//   };
// }

export default HomePage;
