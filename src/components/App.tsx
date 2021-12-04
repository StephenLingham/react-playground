import { ProductsPage } from './ProductsPage';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
}
