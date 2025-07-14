import React, { useState } from 'react';
import { newsArticles, getNewsByCategory, getLatestNews } from '../data/news';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedArticle, setExpandedArticle] = useState(null);

  const categories = ['all', 'Match Report', 'Transfer News', 'Training', 'Community'];

  const filteredNews = selectedCategory === 'all' 
    ? newsArticles 
    : getNewsByCategory(selectedCategory);

  const toggleArticle = (articleId) => {
    setExpandedArticle(expandedArticle === articleId ? null : articleId);
  };

  return (
    <div className="news-page">
      <div className="container">
        <h1>Arsenal News</h1>
        
        <div className="news-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'All News' : category}
            </button>
          ))}
        </div>

        <div className="news-grid">
          {filteredNews.map(article => (
            <article key={article.id} className="news-card">
              <div className="news-header">
                <div className="news-meta">
                  <span className="news-date">{article.date}</span>
                  <span className="news-category">{article.category}</span>
                </div>
                <div className="news-author">By {article.author}</div>
              </div>
              
              <h2 className="news-title">{article.title}</h2>
              <p className="news-summary">{article.summary}</p>
              
              {expandedArticle === article.id && (
                <div className="news-content">
                  <p>{article.content}</p>
                  <div className="news-tags">
                    {article.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )}
              
              <button 
                className="read-more-btn"
                onClick={() => toggleArticle(article.id)}
              >
                {expandedArticle === article.id ? 'Read Less' : 'Read More'}
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;