import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Produto() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://seusite.com/wp-json/wc/v3/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
    }
  }, [id]);

  if (!product) return <p>Carregando...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img src={product.images[0]?.src} alt={product.name} className="w-full h-64 object-cover rounded-md" />
      <p className="text-gray-600 mt-4">R$ {product.price}</p>
      <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded">Adicionar ao Carrinho</button>
    </div>
  );
}
