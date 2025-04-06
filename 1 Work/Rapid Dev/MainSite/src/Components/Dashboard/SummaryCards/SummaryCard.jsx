import React from 'react';
import './SummaryCard.css';

const SummaryCard = ({ title, amount, change, positive, comparedTo }) => {
  return (
    <div className="summary-card">
      <div className="summary-card-header">
        <h3>{title}</h3>
        {title === 'Net Earnings' && (
          <div className="trend-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          </div>
        )}
      </div>
      <div className="summary-card-amount">{amount}</div>
      <div className={`summary-card-change ${positive ? 'positive' : 'negative'}`}>
        {positive ? '↑' : '↓'} {change} {comparedTo}
      </div>
    </div>
  );
};

export default SummaryCard;