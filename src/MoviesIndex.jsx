export function MoviesIndex(props) {
  return (
    <div>
      <h1>All movies</h1>
      {props.movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <img src={movie.image_url} />
          <p>description: {movie.description}</p>
          <p>director: {movie.director}</p>
          <p>release year: {movie.release_year}</p>
        </div>
      ))}
    </div>
  );
}