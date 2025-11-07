export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-10 text-sm">
      <div className="container grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-semibold">Frahman & Brothers</div>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Your trusted partner in agricultural growth.
          </p>
        </div>
        <div>
          <div className="font-medium mb-2">Contact</div>
          <p>Kawkhali, South Bazar, Pirojpur</p>
          <p>+880 1750-188004</p>
          <p>info@frahmanandbrothers.com</p>
        </div>
        <div>
          <div className="font-medium mb-2">Quick Links</div>
          <ul className="space-y-1 text-gray-500 dark:text-gray-400">
            <li><a href="/products">Products</a></li>
            <li><a href="/supply-chain">Supply Chain</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="container mt-6 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Frahman & Brothers
      </div>
    </footer>
  );
}
