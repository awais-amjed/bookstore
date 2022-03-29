import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const genreElement = event.target.elements.genre;
    const bookNameElement = event.target.elements.bookName;

    dispatch(addBook({
      genre: genreElement.value,
      bookName: bookNameElement.value,
    }));

    genreElement.value = '';
    bookNameElement.value = '';
  };

  return (
    <form id="new-book-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Book Title" name="bookName" required />
      <input type="text" placeholder="Category" name="genre" required />
      <input type="submit" value="ADD BOOK" />
    </form>
  );
};

export default AddBookForm;
