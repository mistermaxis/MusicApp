const initialState = {
  genres: [
    { id: 'rock', name: 'Rock', key: 1 },
    { id: 'pop', name: 'Pop', key: 2 },
    { id: 'hip-hop', name: 'Hip Hop', key: 3 },
    { id: 'rap', name: 'Rap', key: 4 },
    { id: 'metal', name: 'Metal', key: 5 },
    { id: 'electronic', name: 'Electronic', key: 6 },
  ],
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default genresReducer;
