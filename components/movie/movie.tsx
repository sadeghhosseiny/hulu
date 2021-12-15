import { PlayIcon, ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import "react-modal-video/css/modal-video.css";
import "react-modal-video/css/modal-video.min.css";
import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import { forwardRef } from "react";

type movieType = {
  movie: {
    title: string;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    origina_title: string;
    release_date: string;
    original_name: string;
    first_air_date: string;
    vote_count: number;
  };
};

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Movie = forwardRef(
  ({ movie }: movieType | any, ref: React.LegacyRef<HTMLDivElement>) => {
    const [isOpen, setOpen] = useState(false);
    const [id, setId] = useState(null);

    const [text, setText] = useState("Sorry, We can't found any trailer :((");

    const handlePlay = async () => {
      const base = "https://api.themoviedb.org/3";
      const movies = await fetch(
        `${base}/movie/${movie?.id}?api_key=cd778997bbca0bb69eb4f1347a8b2e1d&append_to_response=videos`,
      ).then((res) => res.json());
      setId(movies?.videos?.results[0]?.key);
      setOpen(true);
      !movies?.videos?.results[0]?.key && handleTxt();
    };

    const handleTxt = () => {
      !!!id &&
        setTimeout(() => {
          setText("");
          setOpen(false);
        }, 2500);

      setTimeout(() => {
        setText("Sorry, We can't found any trailer :((");
      }, 3000);
    };

    return (
      <div
        ref={ref}
        className="px-2 text-white font-extralight group-scoped pt-3 3xl:w-full 3xl:max-w-md relative"
      >
        {isOpen ? (
          id ? (
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId={id}
              onClose={() => setOpen(false)}
            />
          ) : (
            <div className="absolute flex justify-center text-xl font-extralight -top-8 z-40 bg-gray-700 w-full h-10">
              <p>{text}</p>
            </div>
          )
        ) : (
          ""
        )}
        <div className="overflow-hidden cursor-pointer group-scoped relative">
          <Image
            layout="responsive"
            className="md:hover:scale-110 md:hover:opacity-50 transition duration-500"
            src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
            width={1980}
            height={1080}
          />
          <button
            onClick={handlePlay}
            className="md:absolute mx-auto my-5 flex items-center justify-center p-4 md:opacity-0 rounded-lg group-scoped-hover:opacity-100
           top-1/3 left-1/3 transition duration-500 bg-gray-700 desktop:left-1600 mini-mob:text-xs mini-mob:p-2"
          >
            <PlayIcon className="h-5 mr-2 mini-mob:h-3" />
            play trailer
          </button>
          <p
            className="line-clamp-2 md:translate-y-2 md:transition md:duration-500
        md:group-scoped-hover:-translate-y-12 md:bg-gradient-to-t from-black via-black md:absolute"
          >
            {movie?.overview}
          </p>
        </div>
        <div className="p-2">
          <h2 className="text-2xl">
            {movie?.title || movie?.original_title || movie?.original_name}
          </h2>
          <p className="flex items-center md:opacity-0 group-scoped-hover:opacity-100 transition duration-300">
            {movie?.release_date || movie?.first_air_date}.{" "}
            <ThumbUpIcon className="h-5 mx-2" />
            {movie?.vote_count}
          </p>
        </div>
      </div>
    );
  },
);

export default Movie;
