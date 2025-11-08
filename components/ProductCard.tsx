import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  price?: string;
  description: string;
  composition?: string;
  image?: string;
  specSheet?: string;
};

export default function ProductCard({ name, price, description, composition, image, specSheet }: Props) {
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
        {specSheet && (
          <div className="mt-4">
            <Link 
              href={specSheet}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Technical Specification (PDF)
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
