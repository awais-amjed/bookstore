import React from 'react';
import './book.scss';
import PropTypes from 'prop-types';

const Book = ({
  category,
  name,
  author,
  progress,
  currentChapter,
  chapterName,
}) => (
  <li className="book">
    <div className="book-description">
      <p>{category}</p>
      <h3>{name}</h3>
      <p>{author}</p>
      <div className="book-buttons">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="progress-status">
      <div className="progress-circle">Progress Circle</div>
      <div className="progress-description">
        <p>
          {progress}
          %
          <br />
          Completed
        </p>
      </div>
    </div>
    <div className="chapter-status">
      <p>CURRENT CHAPTER</p>
      <p>
        {currentChapter ? `Chapter ${currentChapter}` : ''}
        {currentChapter && chapterName ? ': "' : ''}
        {chapterName ?? ''}
        {currentChapter && chapterName ? '"' : ''}
      </p>
      <button type="button">Update Progress</button>
    </div>
  </li>
);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  currentChapter: PropTypes.number,
  chapterName: PropTypes.string,
};

Book.defaultProps = {
  currentChapter: null,
  chapterName: null,
};

export default Book;
