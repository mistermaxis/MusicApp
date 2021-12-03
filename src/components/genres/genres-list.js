import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './genres-list.css';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const GenresList = () => {
  const genres = useSelector((state) => state.genresReducer.genres);

  return (
    <Container fluid>
      <h1 className="text-center py-5 genres-title">Genres</h1>
      <Row className="gx-0">
        {
          genres.map((genre) => (
            <Col className="text-decoration-none" as={Link} xs={6} variant="flush" key={genre.key} to={`/genre/${genre.id}`}>
              <Card className="py-2 rounded-0 border-0">
                <div className="icon align-self-end px-2">
                  <FontAwesomeIcon color="white" icon={faArrowCircleRight} />
                </div>
                <Card.Text className="text-center pb-4">{genre.name}</Card.Text>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

export default GenresList;
