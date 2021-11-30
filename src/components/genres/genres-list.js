import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const GenresList = () => {
  const genres = useSelector((state) => state.genresReducer.genres);

  return (
    <div>
      {
        genres.map((genre) => (
          <p key={genre.key}>
            <Link to={`/genre/${genre.id}`}>
              {genre.name}
            </Link>
          </p>
        ))
      }
    </div>
  );
};

export default GenresList;
