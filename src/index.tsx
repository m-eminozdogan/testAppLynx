import { root } from '@lynx-js/react';
import { MemoryRouter, Routes, Route } from 'react-router';
import { App } from './App.tsx';
import Product from './screens/Product.tsx';
import Home from './screens/Home.tsx';

root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  </MemoryRouter>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
