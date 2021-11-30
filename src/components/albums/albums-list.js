import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchAlbums } from '../../redux/albums/albums';

const AlbumsList = () => {
  const genre = useParams().genre_id;
  const albums = useSelector((state) => state.albumsReducer.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums(genre));
  }, [dispatch, genre]);

  return (
    <div>
      <h3>{genre.toUpperCase()}</h3>
      {
        albums.map((album) => {
          if (album.mbid.length !== 0) {
            return (
              <p key={album.mbid}>
                <Link to={`/album/${album.mbid}`}>{album.name}</Link>
              </p>
            );
          }
          return null;
        })
      }
    </div>
  );
};

export default AlbumsList;
