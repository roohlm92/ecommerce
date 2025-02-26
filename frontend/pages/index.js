import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://seusite.com/wp-json/wc/v3/products', {
      headers: { Authorization: `Bearer SEU_TOKEN` }
    })
    .then(res => setProducts(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Loja de Vinhos</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}