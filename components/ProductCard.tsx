import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  price?: string;
  description: string;
  composition?: string;
  image?: string;
  specSheet?: string;
  sds?: string;
};

export default function ProductCard({ name, price, description, composition, image, specSheet, sds }: Props) {
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
        {(specSheet || sds) && (
          <div className="mt-4 space-y-2">
            {specSheet && (
              <Link 
                href={specSheet}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 hover:underline w-full"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Technical Specification (PDF)
              </Link>
            )}
            {sds && (
              <Link 
                href={sds}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-800 hover:underline w-full"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Safety Data Sheet (SDS)
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
