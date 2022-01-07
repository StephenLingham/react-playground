import { ProductsPage } from './ProductsPage/ProductsPage';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { TodosPage } from './TodosPage/TodosPage';

export function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/todos" element={<TodosPage />} />
    </Routes>
  );
}
