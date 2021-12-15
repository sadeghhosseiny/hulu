import Movie from "../movie/movie";
import FlipMove from "react-flip-move";

type movieTypes<T> = {
  movies: T[];
};

function Movies<T extends { id: number }>({ movies }: movieTypes<T>) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {movies?.map((movie, i) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </FlipMove>
  );
}

export default Movies;
