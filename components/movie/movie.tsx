import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import "react-modal-video/css/modal-video.css";
import "react-modal-video/css/modal-video.min.css";
import { useState } from "react";
import ModalVideo from "react-modal-video";

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

function Movie({ movie }: movieType | any) {
  console.log(movie);
  const [isOpen, setOpen] = useState(false);
  const [id, setId] = useState(null);

  const handlePlay = async () => {
    const base = "https://api.themoviedb.org/3";
    const movies = await fetch(
      `${base}/movie/${movie?.id}?api_key=cd778997bbca0bb69eb4f1347a8b2e1d&append_to_response=videos`,
    ).then((res) => res.json());
    console.log("MOVIES ", movies);
    setId(movies?.videos?.results[0]?.key);
    setOpen(true);
  };

  return (
    <div className="px-2 text-white font-extralight group-scoped pt-3">
      {id && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={id}
          onClose={() => setOpen(false)}
        />
      )}
      <div className="overflow-hidden cursor-pointer group-scoped relative">
        <Image
          layout="responsive"
          className="hover:scale-110 transition duration-500"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          width={1980}
          height={1080}
          onClick={handlePlay}
        />
        <p
          className="line-clamp-2 translate-y-2 transition duration-500 max-w-lg
        group-scoped-hover:-translate-y-12 bg-gradient-to-t from-black via-black absolute"
        >
          {movie?.overview}
        </p>
      </div>
      <div className="p-2">
        <h2 className="text-2xl">
          {movie?.title || movie?.original_title || movie?.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-scoped-hover:opacity-100 transition duration-300">
          {movie?.release_date || movie?.first_air_date}.{" "}
          <ThumbUpIcon className="h-5 mx-2" />
          {movie?.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Movie;
