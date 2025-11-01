import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = `https://gnews.io/api/v4/search?q=${category}&lang=en&max=5&apikey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16 relative">
          {/* Decorative gradient blur */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>

          <div className="relative">
            <h2 className="text-6xl md:text-7xl  font-extrabold text-white mb-6 tracking-tight">
              Latest{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 blur-lg opacity-70"></span>
                <span className="relative bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-3  rounded-2xl transform hover:scale-105 transition-transform duration-300 inline-block shadow-2xl">
                  News
                </span>
              </span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl font-light ">
              Stay updated with the{" "}
              <span className="text-purple-400 font-semibold">
                latest headlines
              </span>{" "}
              from around the world
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-800 rounded-xl h-96"></div>
              </div>
            ))}
          </div>
        ) : (
          /* News Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles &&
              articles.map((news, index) => (
                <NewsItem
                  key={index}
                  title={news.title}
                  description={news.description}
                  src={news.image}
                  url={news.url}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
