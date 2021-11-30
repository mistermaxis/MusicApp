import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
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
        <p key={song['@attr'].rank}>{song.name}</p>
      ));
    }
    if (album.error) {
      return <p>{album.error}</p>;
    }
    return <p>Loading</p>;
  }

  return (
    <div>
      {
        album.album ? <h1>{album.album.name}</h1> : null
      }
      {renderSongs()}
    </div>
  );
};

export default SongsList;
