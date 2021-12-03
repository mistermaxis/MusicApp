const initialState = {
  genres: [
    { id: 'rock', name: 'rock', key: 1 },
    { id: 'pop', name: 'pop', key: 2 },
    { id: 'hip-hop', name: 'hip hop', key: 3 },
    { id: 'rap', name: 'rap', key: 4 },
    { id: 'metal', name: 'metal', key: 5 },
    { id: 'electronic', name: 'electronic', key: 6 },
    { id: 'folk', name: 'folk', key: 7 },
  ],
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default genresReducer;
