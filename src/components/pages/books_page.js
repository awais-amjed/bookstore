import React from 'react';
import Navbar from '../model/navbar';
import Book from '../model/book';

const BooksPage = () => {
  const booksList = [
    {
      id: 0,
      category: 'Action',
      name: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: 64,
      currentChapter: 17,
      chapterName: null,
    },
    {
      id: 1,
      category: 'Science Fiction',
      name: 'Dune',
      author: 'Frank Herbert',
      progress: 8,
      currentChapter: 3,
      chapterName: 'A Lesson Learned',
    },
    {
      id: 2,
      category: 'Economy',
      name: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      progress: 0,
      currentChapter: null,
      chapterName: 'Introduction',
    },
  ];

  return (
    <div className="content">
      <div id="books-page">
        <Navbar />
        <ul id="books-list">
          {booksList.map(({
            id,
            category,
            name,
            author,
            progress,
            currentChapter,
            chapterName,
          }) => (
            <Book
              key={id}
              category={category}
              name={name}
              author={author}
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
