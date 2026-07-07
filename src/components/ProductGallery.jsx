import React, { useState, useTransition } from 'react';
import { Search, Grid, ListFilter } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductGallery = ({ language, t }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const categories = [
    { id: 'all', label: t.categoryAll },
    { id: 'necklaces', label: t.categoryNecklaces },
    { id: 'bangles', label: t.categoryBangles },
    { id: 'rings', label: t.categoryRings },
    { id: 'earrings', label: t.categoryEarrings },
    { id: 'chains', label: t.categoryChains },
    { id: 'coins', label: t.categoryCoins },
  ];

  const handleCategoryChange = (categoryId) => {
    startTransition(() => {
      setSelectedCategory(categoryId);
    });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    const itemName = (product.name[language] || product.name.en).toLowerCase();
    const itemDesign = product.designId.toLowerCase();
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = itemName.includes(searchLower) || itemDesign.includes(searchLower);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-header">
        <h2 className="section-title">{t.galleryTitle}</h2>
        <p className="section-subtitle">{t.gallerySubtitle}</p>
      </div>

      {/* Filter and Search Bar */}
      <div className="gallery-controls">
        <div className="search-bar-container">
          <Search className="search-icon" size={20} />
          <input 
            type="text" 
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={handleSearchChange}
            className="gallery-search-input"
          />
        </div>

        <div className="category-filters-container">
          <div className="filter-scroll-wrapper">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`category-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className={`gallery-grid-wrapper ${isPending ? 'filtering' : ''}`}>
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                language={language} 
                t={t} 
              />
            ))}
          </div>
        ) : (
          <div className="no-products-found">
            <p>{t.noProductsFound}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGallery;
