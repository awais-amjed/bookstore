import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const authorNameElement = event.target.elements.authorName;
    const bookNameElement = event.target.elements.bookName;

    dispatch(addBook({
      authorName: authorNameElement.value,
      bookName: bookNameElement.value,
    }));

    authorNameElement.value = '';
    bookNameElement.value = '';
  };

  return (
    <form id="new-book-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Book Title" name="bookName" required />
      <input type="text" placeholder="Author" name="authorName" required />
      <input type="submit" value="ADD BOOK" />
    </form>
  );
};

export default AddBookForm;
