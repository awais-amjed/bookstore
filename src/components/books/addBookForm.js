import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../../redux/books/books';
import './addBookForm.scss';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const booksList = useSelector((state) => state.books);

  const handleSubmit = (event) => {
    event.preventDefault();
    const authorNameElement = event.target.elements.authorName;
    const bookNameElement = event.target.elements.bookName;
    const categoryElement = event.target.elements.category;

    let nextID;
    try {
      nextID = parseInt(booksList.at(booksList.length - 1).id, 10) + 1;
    } catch (e) {
      nextID = 0;
    }

    dispatch(addBook({
      id: nextID,
      authorName: authorNameElement.value,
      bookName: bookNameElement.value,
      category: categoryElement.value,
    }));

    authorNameElement.value = '';
    bookNameElement.value = '';
    categoryElement.value = '';
  };

  return (
    <form id="new-book-form" onSubmit={handleSubmit}>
      <input className="book-name" type="text" placeholder="Book Title" name="bookName" required />
      <input type="text" placeholder="Author" name="authorName" required />
      <input type="text" placeholder="Category" name="category" required />
      <input type="submit" value="ADD BOOK" />
    </form>
  );
};

export default AddBookForm;
