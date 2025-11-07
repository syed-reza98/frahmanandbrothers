type Props = {
  name: string;
  price?: string;
  description: string;
  composition?: string;
};

export default function ProductCard({ name, price, description, composition }: Props) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        {price && <span className="text-emerald-500 font-medium">{price}</span>}
      </div>
      {composition && <p className="text-xs text-gray-500 mt-1">{composition}</p>}
      <p className="mt-3 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
