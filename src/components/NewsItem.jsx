import { ExternalLink } from "lucide-react";

const NewsItem = ({ title, description, src, url }) => {
  const defaultImage =
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop";

  return (
    <div className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={src || defaultImage}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h5
          className="text-xl font-bold text-white mb-3 overflow-hidden group-hover:text-purple-400 transition-colors"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </h5>

        <p
          className="text-gray-400 text-sm mb-4 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description ||
            "A paragraph is a distinct section of writing that focuses on a single idea of several sentences."}
        </p>

        {/* Read More Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          <span>Read More</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Decorative Border on Hover */}
      <div className="absolute inset-0 rounded-xl border-2 border-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default NewsItem;
