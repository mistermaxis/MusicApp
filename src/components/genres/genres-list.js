import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const GenresList = () => {
  const genres = useSelector((state) => state.genresReducer.genres);

  return (
    <Container fluid>
      <h1>Genres</h1>
      <ListGroup>
        {
          genres.map((genre) => (
            <ListGroup.Item as={Link} variant="flush" key={genre.key} to={`/genre/${genre.id}`}>
              {genre.name}
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </Container>
  );
};

export default GenresList;
