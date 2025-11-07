import Image from "next/image";

type Props = {
  name: string;
  price?: string;
  description: string;
  composition?: string;
  image?: string;
};

export default function ProductCard({ name, price, description, composition, image }: Props) {
  return (
    <div className="card overflow-hidden hover:shadow-lg transition-shadow">
      {image && (
        <div className="relative aspect-video w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          {price && <span className="text-blue-700 font-bold text-lg">{price}</span>}
        </div>
        {composition && <p className="text-sm text-blue-600 font-medium mb-3">{composition}</p>}
        <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
