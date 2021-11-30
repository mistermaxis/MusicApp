import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import { fetchSongs } from '../../redux/songs/songs';

const SongsList = () => {
  const { album_id: albumId } = useParams();
  const album = useSelector((state) => state.albumReducer.album);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs(albumId));
  }, [dispatch, albumId]);

  function renderSongs() {
    if (album.album) {
      return album.album.tracks.track.map((song) => (
        <ListGroup.Item key={song['@attr'].rank}>
          {song.name}
        </ListGroup.Item>
      ));
    }
    if (album.error) {
      return <h1>{album.error}</h1>;
    }
    return (
      <Spinner className="align-center" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <Container>
      {
        album.album ? <h1>{album.album.name}</h1> : null
      }
      <ListGroup>
        {renderSongs()}
      </ListGroup>
    </Container>
  );
};

export default SongsList;
