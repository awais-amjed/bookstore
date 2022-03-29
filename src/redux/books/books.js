const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const addBook = ({ genre, bookName, authorName }) => ({
  type: ADD_BOOK,
  genre,
  bookName,
  authorName,
});

const removeBook = ({ index }) => ({
  type: REMOVE_BOOK,
  index,
});

const booksReducer = (state = [], actions) => {
  switch (actions.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          genre: actions.genre,
          bookName: actions.bookName,
          authorName: actions.authorName,
        },
      ];
    case REMOVE_BOOK:
      return [
        ...state.slice(0, actions.index),
        ...state.slice(actions.index + 1, state.length),
      ];
    default:
      return state;
  }
};

export { booksReducer as default, addBook, removeBook };
