import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../navbar/navbar';
import { checkStatus } from '../../redux/categories/categories';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  return (
    <div className="content">
      <div id="categories-page">
        <Navbar />
        <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default CategoriesPage;
