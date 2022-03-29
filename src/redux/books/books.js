const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const addBook = ({ bookName, authorName }) => ({
  type: ADD_BOOK,
  bookName,
  authorName,
});

const removeBook = ({ id }) => ({
  type: REMOVE_BOOK,
  id,
});

const booksReducer = (state = [], actions) => {
  switch (actions.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: state.length === 0 ? 0 : state.at(state.length - 1).id + 1,
          category: null,
          bookName: actions.bookName,
          authorName: actions.authorName,
          progress: 0,
          currentChapter: 0,
          chapterName: null,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== actions.id);
    default:
      return state;
  }
};

export { booksReducer as default, addBook, removeBook };
