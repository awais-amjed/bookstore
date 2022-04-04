import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book';
import AddBookForm from './addBookForm';
import './booksPage.scss';
import { fetchBooks, removeBook } from '../../redux/books/books';

const BooksPage = () => {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="content">
      <div id="books-page">
        <ul id="books-list">
          {booksList.map(({
            id,
            category,
            bookName,
            authorName,
            progress,
            currentChapter,
            chapterName,
          }) => (
            <Book
              key={id}
              category={category}
              bookName={bookName}
              authorName={authorName}
              progress={progress}
              chapterName={chapterName}
              currentChapter={currentChapter}
              onRemove={() => dispatch(removeBook({ id }))}
            />
          ))}
        </ul>
        <hr />
        <div id="add-book">
          <h2>ADD NEW BOOK</h2>
          <AddBookForm />
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
