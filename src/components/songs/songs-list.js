import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchSongs } from "../../redux/songs/songs";

const SongsList = () => {
  const { album_id } = useParams();
  const album = useSelector(state => state.albumReducer.album);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs(album_id));
  }, [dispatch, album_id]);

  return (
    <div>
      {
        album.album ? (
          album.album.tracks.track.map((song) => {
            return (
              <p key={song['@attr'].rank}>
                {song.name}
              </p>
            )
          })
        ) : (
          <div>Hello</div>
        )
      }
    </div>
  );
}

export default SongsList;