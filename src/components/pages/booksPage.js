import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../model/navbar';
import Book from '../model/book';

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
          <form id="new-book-form">
            <input type="text" placeholder="Book Title" />
            <input type="text" placeholder="Category" />
            <input type="submit" value="ADD BOOK" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
