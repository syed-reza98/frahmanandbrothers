import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-green-200 bg-green-50 py-10 text-sm">
      <div className="container grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-bold text-green-800 text-lg">Frahman & Brothers</div>
          <p className="text-gray-600 mt-2">
            Your trusted partner in agricultural growth.
          </p>
        </div>
        <div>
          <div className="font-semibold text-gray-800 mb-3">Contact</div>
          <p className="text-gray-600">Kawkhali, South Bazar, Pirojpur</p>
          <p className="text-gray-600">+880 1750-188004</p>
          <p className="text-gray-600">info@frahmanandbrothers.com</p>
        </div>
        <div>
          <div className="font-semibold text-gray-800 mb-3">Quick Links</div>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/products" className="hover:text-green-700 transition-colors">Products</Link></li>
            <li><Link href="/supply-chain" className="hover:text-green-700 transition-colors">Supply Chain</Link></li>
            <li><Link href="/contact" className="hover:text-green-700 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mt-6 text-gray-500 text-center border-t border-green-200 pt-6">
        © {new Date().getFullYear()} Frahman & Brothers. All rights reserved.
      </div>
    </footer>
  );
}
