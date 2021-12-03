import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Img from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchAlbums } from '../../redux/albums/albums';
import genrePicture from './genre.jpg';
import './albums-list.css';

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
    const regex = RegExp(`.*(${value}).*`, 'i');

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
          <Col xs={6} md={4} xl={2} key={album.mbid}>
            <Card as={Link} to={`/album/${album.mbid}`} className="text-decoration-none">
              <Card.Img variant="top" src={`${album.image[3]['#text']}`} alt={album.name} />
              <Card.Body>
                <Card.Title>{album.artist.name}</Card.Title>
                <Card.Text className="h6">{album.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      }
      return null;
    });
    return list;
  }

  return (
    <Container className="px-0">
      <Row className="py-2 gx-0">
        <Col xs={2} sm={4} className="align-items-center d-flex px-3 text-decoration-none" as={Link} to="/">
          <FontAwesomeIcon color="white" icon={faChevronLeft} />
          <span className="ps-3 d-none d-sm-block back-to-genres">GENRES</span>
        </Col>
        <Col xs={8} sm={4}>
          <Form.Control className="search-album rounded-pill" onChange={(e) => handleChange(e)} type="text" placeholder="Album..." />
        </Col>
        <Col xs={2} sm={4} />
      </Row>
      <Row className="px-0 gx-0">
        <Col xs={6} className="header-logo px-0">
          <Img className="w-100 logo-img" src={genrePicture} />
        </Col>
        <Col xs={6} className="px-3 justify-content-center d-flex flex-column genre-col">
          <h5 className="h5">Genre</h5>
          <h3 className="genre-header">{genre.toUpperCase()}</h3>
        </Col>
      </Row>
      <Row className="subtitle-songs gx-0 px-0">
        <Col as="p" className="text-white my-1">Albums by Genre</Col>
      </Row>
      <Row className="gx-0">
        {renderAlbums()}
      </Row>
    </Container>
  );
};

export default AlbumsList;
