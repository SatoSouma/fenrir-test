import Head from "next/head";
import { GetStaticProps, NextPage } from "next";

const Home: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
    </>
  );
};

//SSG
export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Home;
