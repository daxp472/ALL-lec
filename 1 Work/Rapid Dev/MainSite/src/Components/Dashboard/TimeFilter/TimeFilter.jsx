import React from 'react';
import './TimeFilter.css';

const TimeFilter = ({ activeFilter, setActiveFilter }) => {
  const filters = ['Today', 'This Week', 'This Month'];

  return (
    <div className="time-filter">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default TimeFilter;