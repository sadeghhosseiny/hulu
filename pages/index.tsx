import axios, { Axios } from "axios";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import requests from "../services/requests/requests";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>hulu</title>
      </Head>
      <Header />
      <Navbar />
    </div>
  );
}

const baseURL = "https://api.themoviedb.org/3";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre: any = context.query.genre;

  const movies = await fetch(
    `${baseURL}${requests[genre]?.url || requests.fetchTrending.url} `,
  ).then((res) => res.json());

  return {
    props: {
      movies: movies.results,
    },
  };
};
