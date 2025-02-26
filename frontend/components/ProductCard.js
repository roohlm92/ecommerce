import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg">
      <img src={product.images[0]?.src} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-600">R$ {product.price}</p>
      <Link href={`/produto/${product.id}`} className="bg-blue-500 text-white px-4 py-2 mt-2 inline-block rounded">
        Ver Detalhes
      </Link>
    </div>
  );
}
