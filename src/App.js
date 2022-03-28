import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BooksPage from './components/pages/booksPage';
import CategoriesPage from './components/pages/categoriesPage';

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Routes>
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="*" element={<BooksPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
