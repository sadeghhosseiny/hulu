import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

type movieType = {
  movie: {
    title: string;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    origina_title: string;
    release_date: string;
    original_name: string;
    vote_count: number;
  };
};

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Movie({ movie }: movieType | any) {
  console.log(movie);
  return (
    <div className="px-2 text-white font-extralight group pt-3">
      <div className="overflow-hidden cursor-pointer group relative">
        <Image
          layout="responsive"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          width={1980}
          height={1080}
        />
        <p className="line-clamp-2 max-w-md translate-y-2 transition duration-500 group-hover:-translate-y-20 bg-gradient-to-t from-black via-black absolute">
          {movie?.overview}
        </p>
      </div>
      <div className="p-2">
        <h2 className="text-2xl">
          {movie?.title || movie?.original_title || movie?.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100 transition duration-300">
          {movie?.release_date ? `${movie?.release_date} .` : ""}
          <ThumbUpIcon className="h-5 mx-2" />
          {movie?.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Movie;
