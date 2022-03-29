const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const addBook = ({ genre, bookName, authorName }) => ({
  type: ADD_BOOK,
  genre,
  bookName,
  authorName,
});

const removeBook = ({ id }) => ({
  type: REMOVE_BOOK,
  id,
});

const booksReducer = (state = [{
  id: 0,
  genre: 'meow',
  bookName: 'emow',
  authorName: 'meow',
}], actions) => {
  switch (actions.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: state.at(state.length - 1).id + 1,
          genre: actions.genre,
          bookName: actions.bookName,
          authorName: actions.authorName,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== actions.id);
    default:
      return state;
  }
};

export { booksReducer as default, addBook, removeBook };
