import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BooksPage from './components/books/booksPage';
import CategoriesPage from './components/categories/categoriesPage';
import Navbar from './components/navbar/navbar';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Navbar />
        <Routes>
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="*" element={<BooksPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
