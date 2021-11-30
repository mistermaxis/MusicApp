import { fetchAlbumById } from '../../api/api';

const GET_ALBUM = 'songs/albumRetrieved';

const initialState = {
  album: [],
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return { ...state, album: action.album };
    default:
      return state;
  }
};

function getAlbum(payload) {
  return {
    type: GET_ALBUM,
    album: payload,
  };
}

export const fetchSongs = (albumId) => async (dispatch) => {
  const response = await fetchAlbumById(albumId);
  const album = response;
  dispatch(getAlbum(album));
};

export default albumReducer;
