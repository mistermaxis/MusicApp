import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fetchAlbums } from '../../redux/albums/albums';

const AlbumsList = () => {
  const genre = useParams().genre_id;
  const albums = useSelector((state) => state.albumsReducer.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums(genre));
  }, [dispatch, genre]);

  return (
    <Container>
      <Stack direction="horizontal" gap={3}>
        <Link to="/" className="me-auto">
          <FontAwesomeIcon icon={faCoffee} />
        </Link>
        <Form.Control className="rounded" type="text" placeholder="Album" />
      </Stack>
      <h3>{genre.toUpperCase()}</h3>
      <ListGroup>
        {
          albums.map((album) => {
            if (album.mbid.length !== 0) {
              return (
                <ListGroup.Item as={Link} to={`/album/${album.mbid}`} key={album.mbid}>
                  {album.name}
                </ListGroup.Item>
              );
            }
            return null;
          })
        }
      </ListGroup>
    </Container>
  );
};

export default AlbumsList;
