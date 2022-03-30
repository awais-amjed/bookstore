import BookstoreAPI from '../../components/api/bookstoreAPI';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const DATA_FETCHED = 'DATA_FETCHED';

const addBook = ({ category, bookName, authorName }) => ({
  type: ADD_BOOK,
  category,
  bookName,
  authorName,
});

const removeBook = ({ id }) => ({
  type: REMOVE_BOOK,
  id,
});

const booksReducer = (state = [], actions) => {
  switch (actions.type) {
    case DATA_FETCHED:
      return actions.books;
    case ADD_BOOK:
      return [
        ...state,
        {
          id: state.length === 0 ? 0 : state.at(state.length - 1).id + 1,
          category: actions.category,
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

const fetchBooks = () => (dispatch) => {
  BookstoreAPI.getAllBooks().then((books) => {
    if (books) {
      dispatch({ type: DATA_FETCHED, books });
    }
  });
};

export {
  booksReducer as default, addBook, removeBook, fetchBooks,
};
