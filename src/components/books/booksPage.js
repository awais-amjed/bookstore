import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../navbar/navbar';
import Book from './book';
import AddBookForm from './addBookForm';
import { removeBook } from '../../redux/books/books';

const BooksPage = () => {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <div id="books-page">
        <Navbar />
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
        <div id="add-book">
          <h2>ADD NEW BOOK</h2>
          <AddBookForm />
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
