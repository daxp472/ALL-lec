import React from 'react';
import './CategoryBreakdown.css';

const CategoryBreakdown = ({ categories }) => {
  return (
    <div className="category-breakdown">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <span className="category-name">{category.name}</span>
          <span className="category-value">{category.value}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryBreakdown;