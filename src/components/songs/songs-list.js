import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchSongs } from '../../redux/songs/songs';
import './songs-list.css';
import secondsToMinutes from '../../utility/converter';

const SongsList = () => {
  const { album_id: albumId } = useParams();
  const album = useSelector((state) => state.albumReducer.album);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSongs(albumId));
  }, [dispatch, albumId]);

  function renderSongs() {
    if (album.album) {
      return album.album.tracks.track.map((song) => (
        <ListGroup.Item className="d-flex song" as={Row} key={song['@attr'].rank}>
          <Col xs={8} className="text-white px-0">{song.name}</Col>
          <Col xs={4} className="text-white text-right px-0">{`Dur: ${secondsToMinutes(song.duration)}`}</Col>
        </ListGroup.Item>
      ));
    }
    if (album.error) {
      return <h1>{album.error}</h1>;
    }
    return (
      <Container>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  function renderHeader() {
    if (album.album) {
      return (
        <Row>
          <Card className="image-card border-0 rounded-0 px-0" xs={6} as={Col}>
            <Card.Img className="album-img" variant="left" src={`${album.album.image[3]['#text']}`} />
            <Card.ImgOverlay className="d-flex align-items-end">
              <Card.Title className="text-white">
                {`Published on ${album.album.wiki.published.slice(0, album.album.wiki.published.indexOf(','))}`}
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
          <Card className="justify-content-center align-items-end border-0 px-3" xs={6} as={Col}>
            <Card.Text className="text-right">{album.album.name}</Card.Text>
            <Card.Subtitle className="text-white">{album.album.artist}</Card.Subtitle>
          </Card>
        </Row>
      );
    }
    return null;
  }

  function handleClick() {
    navigate(-1);
  }

  return (
    <Container fluid>
      <Row className="py-1 gx-0">
        <Col xs={6} sm={4} onClick={() => handleClick()} className="align-items-center d-flex text-decoration-none">
          <FontAwesomeIcon color="white" icon={faChevronLeft} />
          <span className="ps-3 back-to">ALBUMS</span>
        </Col>
      </Row>
      {renderHeader()}
      <Row className="subtitle-songs">
        <Col as="p" className="text-white my-1">Songs by Album</Col>
      </Row>
      <ListGroup className="song-list" variant="flush">
        {renderSongs()}
      </ListGroup>
    </Container>
  );
};

export default SongsList;
