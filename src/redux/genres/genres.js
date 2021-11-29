const initialState = {
  genres: [
    { name: 'rock', key: 1 },
    { name: 'pop', key: 2 },
    { name: 'hip hop', key: 3 },
    { name: 'rap', key: 4 },
    { name: 'metal', key: 5 },
    { name: 'electronic', key: 6 },
    { name: 'folk', key: 7 },
  ]
}

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default genresReducer;