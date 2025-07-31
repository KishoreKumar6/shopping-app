function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 border border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <span className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-yellow-400">
              Shopping Online Store
            </span>
            . All Rights Reserved.
          </span>
          <span className="text-xs text-gray-400">
            🛍️ Crafted with care by Team Krish
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
