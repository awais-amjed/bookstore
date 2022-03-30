import React from 'react';
import './book.scss';
import PropTypes from 'prop-types';

const Book = ({
  category,
  bookName,
  authorName,
  progress,
  currentChapter,
  chapterName,
  onRemove,
}) => (
  <li className="book">
    <div className="book-description">
      <p>{category}</p>
      <h3>{bookName}</h3>
      <p>{authorName}</p>
      <div className="book-buttons">
        <button type="button">Comments</button>
        <button type="button" onClick={onRemove}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="progress-status">
      <div className="progress-circle">Progress Circle</div>
      <div className="progress-description">
        <p>
          {progress ?? 0}
          %
          <br />
          Completed
        </p>
      </div>
    </div>
    <div className="chapter-status">
      <p>CURRENT CHAPTER</p>
      <p>
        {currentChapter > 0 ? `Chapter ${currentChapter}` : 'Not Started Yet!'}
        {currentChapter > 0 && chapterName ? ': "' : ''}
        {chapterName ?? ''}
        {currentChapter > 0 && chapterName ? '"' : ''}
      </p>
      <button type="button">Update Progress</button>
    </div>
  </li>
);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  bookName: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  progress: PropTypes.number,
  currentChapter: PropTypes.number,
  chapterName: PropTypes.string,
  onRemove: PropTypes.func,
};

Book.defaultProps = {
  currentChapter: null,
  chapterName: null,
  progress: null,
  onRemove: null,
};

export default Book;
