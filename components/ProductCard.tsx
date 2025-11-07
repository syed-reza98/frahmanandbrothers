type Props = {
  name: string;
  price?: string;
  description: string;
  composition?: string;
};

export default function ProductCard({ name, price, description, composition }: Props) {
  return (
    <div className="card p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        {price && <span className="text-blue-700 font-bold text-lg">{price}</span>}
      </div>
      {composition && <p className="text-sm text-blue-600 font-medium mb-3">{composition}</p>}
      <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
