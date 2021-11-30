import { fetchAlbumsByGenre } from '../../api/api';

const GET_ALBUMS = 'albums/retrievedAlbums';

const initialState = {
  albums: [],
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return { ...state, albums: action.albums };
    default:
      return state;
  }
};

function getAlbums(payload) {
  return {
    type: GET_ALBUMS,
    albums: payload,
  };
}

export const fetchAlbums = (genre) => async (dispatch) => {
  const response = await fetchAlbumsByGenre(genre);
  const albums = response.albums.album;

  dispatch(getAlbums(albums));
};

export default albumsReducer;
