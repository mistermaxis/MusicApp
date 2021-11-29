import { useSelector } from "react-redux";

const GenresList = () => {
  const genres = useSelector(state => state.genresReducer.genres);

  return (
    <div>
      {
        genres.map((genre) => {
          return (
            <p key={genre.key}>
              {genre.name}
            </p>
          )
        })
      }
    </div>
  );
}
 
export default GenresList;