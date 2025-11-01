import { useState } from "react";
import { Menu, X, Newspaper } from "lucide-react";

const Navbar = ({ setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "Technology", value: "technology" },
    { name: "Business", value: "business" },
    { name: "Health", value: "health" },
    { name: "Science", value: "science" },
    { name: "Sports", value: "sports" },
    { name: "Entertainment", value: "entertainment" },
  ];

  const handleCategoryClick = (category) => {
    setCategory(category);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <Newspaper className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold text-purple-400">NewsMag</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-1">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryClick(cat.value)}
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300 font-medium"
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryClick(cat.value)}
                className="block w-full  text-left px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 font-medium"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
