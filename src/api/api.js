const LAST_FM_API = 'https://ws.audioscrobbler.com/2.0/';
const ALBUMS_BY_GENRE = '?method=tag.gettopalbums&tag=';
const SONGS_BY_ALBUM = '?method=album.getinfo&mbid=';
const API_KEY = '&api_key=9c6c688feaf152911b6a769dd1c0fe24&format=json';

export const fetchAlbumsByGenre = async (id) => {
  const response = await fetch(
    `${LAST_FM_API}${ALBUMS_BY_GENRE}${id}${API_KEY}`
    );
  const json = await response.json();
  return json;
}

export const fetchAlbumById = async (id) => {
  const response = await fetch(
    `${LAST_FM_API}${SONGS_BY_ALBUM}${id}${API_KEY}`
  )
  const json = await response.json();
  return json;
}