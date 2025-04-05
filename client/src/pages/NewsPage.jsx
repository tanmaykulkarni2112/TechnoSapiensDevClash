import { useState } from "react";
import BottomNav from "../components/BottomNav";
import TopBar from "../components/TopBar";

const newsData = [
  {
    id: 1,
    title: "Smart Farming Revolution: AI in Agriculture",
    image: "https://source.unsplash.com/400x300/?farm",
    content: "Artificial intelligence is transforming agriculture by optimizing crop growth, predicting weather patterns, and enhancing productivity."
  },
  {
    id: 2,
    title: "Drought Management: Strategies for Water Conservation",
    image: "https://source.unsplash.com/400x300/?drought",
    content: "Farmers are adopting innovative water conservation techniques to combat drought and ensure sustainable agriculture."
  },
  // Add more news articles here
];

const NewsPage = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <TopBar title="News" />
    <div className="min-h-screen bg-white p-6">
      \
      
      {selectedNews ? (
        <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
          <button
            onClick={() => setSelectedNews(null)}
            className="text-red-700 underline mb-4"
          >
            ← Back to News
          </button>
          <img src={selectedNews.image} alt={selectedNews.title} className="w-full rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-4">{selectedNews.title}</h2>
          <p className="text-gray-700">{selectedNews.content}</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedNews(news)}
            >
              <img src={news.image} alt={news.title} className="w-full h-40 object-cover rounded-md mb-3" />
              <h3 className="text-lg font-bold text-gray-800">{news.title}</h3>
            </div>
          ))}
        </div>
      )}

    </div>
      <BottomNav />
    </div>
  );
};

export default NewsPage;