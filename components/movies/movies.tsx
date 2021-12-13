type movieTypes<T> = {
  movies: T[];
};

function Movies<T extends { id: number; title: string }>({
  movies,
}: movieTypes<T>) {
  console.log(movies);
  return (
    <div>
      {movies?.map((movie, i) => (
        <p className="text-white" key={movie.id}>
          {movie?.title}
        </p>
      ))}
    </div>
  );
}

export default Movies;
