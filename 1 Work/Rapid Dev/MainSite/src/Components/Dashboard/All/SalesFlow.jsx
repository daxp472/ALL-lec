import React from 'react';
import './SalesFlow.css';
import SectionHeader from '../UI/SectionHeader';

const SalesFlow = () => {
  const salesTypes = [
    {
      type: 'Cash Sales',
      total: '₹45,000',
      label: 'Today\'s total'
    },
    {
      type: 'Online Sales',
      total: '₹52,000',
      label: 'Today\'s total'
    },
    {
      type: 'Credit Sales',
      total: '₹18,500',
      label: 'Today\'s total'
    }
  ];

  return (
    <div className="sales-flow">
      <SectionHeader title="Sales Flow" link="View Report" />
      
      <div className="sales-list">
        {salesTypes.map((sale, index) => (
          <div key={index} className="sales-item">
            <div className="sales-info">
              <div className="sales-type">{sale.type}</div>
              <div className="sales-label">{sale.label}</div>
            </div>
            <div className="sales-total">{sale.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesFlow;