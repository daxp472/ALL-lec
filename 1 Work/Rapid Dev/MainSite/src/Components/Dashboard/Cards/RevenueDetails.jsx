import React from 'react';
import './RevenueDetails.css';
import SectionHeader from '../UI/SectionHeader';

const RevenueDetails = () => {
  const revenue = [
    {
      category: 'Retail Sales',
      items: [
        { name: 'Product A Sales', amount: '₹15,200', date: 'Today' },
        { name: 'Product B Sales', amount: '₹12,800', date: 'Today' },
        { name: 'Product C Sales', amount: '₹20,500', date: 'Yesterday' }
      ]
    },
    {
      category: 'Services',
      items: [
        { name: 'Installation Services', amount: '₹8,500', date: 'Today' },
        { name: 'Maintenance Contracts', amount: '₹12,000', date: 'Yesterday' },
        { name: 'Custom Solutions', amount: '₹5,500', date: '2 days ago' }
      ]
    },
    {
      category: 'Wholesale',
      items: [
        { name: 'Bulk Order - Client #42', amount: '₹9,000', date: 'Today' },
        { name: 'Distributor Purchase', amount: '₹6,000', date: 'Yesterday' }
      ]
    }
  ];

  return (
    <div className="revenue-details">
      <SectionHeader title="Revenue Sources" link="View All" />
      
      <div className="revenue-categories">
        {revenue.map((category, index) => (
          <div key={index} className="revenue-category">
            <h4 className="category-title">{category.category}</h4>
            
            <div className="revenue-items">
              {category.items.map((item, idx) => (
                <div key={idx} className="revenue-item">
                  <div className="revenue-item-info">
                    <div className="revenue-item-name">{item.name}</div>
                    <div className="revenue-item-date">{item.date}</div>
                  </div>
                  <div className="revenue-item-amount">{item.amount}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueDetails;