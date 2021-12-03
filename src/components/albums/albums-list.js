import { useEffect, useState } from 'react';
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
  const albums = useSelector((s) => s.albumsReducer.albums);
  const [filter, setFilter] = useState([...albums]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums(genre));
  }, [dispatch, genre]);

  useEffect(() => {
    setFilter([...albums]);
  }, [albums]);

  function handleChange(event) {
    const { value } = event.currentTarget;
    const regex = RegExp(`^.*(${value}).*`, 'i');

    if (value.length > 0) {
      setFilter(
        albums.filter((album) => regex.test(album.name)),
      );
    } else {
      setFilter([...albums]);
    }
  }

  function renderAlbums() {
    const list = filter.map((album) => {
      if (album.mbid.length > 0) {
        return (
          <ListGroup.Item as={Link} to={`/album/${album.mbid}`} key={album.name}>
            {album.name}
          </ListGroup.Item>
        );
      }
      return null;
    });
    return list;
  }

  return (
    <Container>
      <Stack direction="horizontal" gap={3}>
        <Link to="/" className="me-auto">
          <FontAwesomeIcon icon={faCoffee} />
        </Link>
        <Form.Control onChange={(e) => handleChange(e)} type="text" placeholder="Album" />
      </Stack>
      <h3>{genre.toUpperCase()}</h3>
      <ListGroup>
        {renderAlbums()}
      </ListGroup>
    </Container>
  );
};

export default AlbumsList;
