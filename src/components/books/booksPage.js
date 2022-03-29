import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../navbar/navbar';
import Book from './book';
import AddBookForm from './addBookForm';

const BooksPage = () => {
  const booksList = useSelector((state) => state.books);

  return (
    <div className="content">
      <div id="books-page">
        <Navbar />
        <ul id="books-list">
          {booksList.map(({
            id,
            genre,
            bookName,
            authorName,
            progress,
            currentChapter,
            chapterName,
          }) => (
            <Book
              key={id}
              genre={genre}
              bookName={bookName}
              authorName={authorName}
              progress={progress}
              chapterName={chapterName}
              currentChapter={currentChapter}
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
