import React from 'react';
import './ItemProfitability.css';
import SectionHeader from '../UI/SectionHeader';

const ItemProfitability = () => {
  const items = [
    {
      product: 'Product A',
      sales: '₹45000',
      profit: '₹15000',
      margin: '33%',
      positive: true
    },
    {
      product: 'Product B',
      sales: '₹53000',
      profit: '-₹2000',
      margin: '-4%',
      positive: false
    },
    {
      product: 'Product C',
      sales: '₹38000',
      profit: '₹11400',
      margin: '30%',
      positive: true
    }
  ];

  return (
    <div className="item-profitability">
      <SectionHeader title="Item Profitability" link="View Report" />
      
      <div className="item-list">
        {items.map((item, index) => (
          <div key={index} className="item">
            <div className="item-info">
              <div className="item-name">{item.product}</div>
              <div className="item-sales">Sales: {item.sales}</div>
            </div>
            <div className="item-profit-container">
              <div className={`item-profit ${item.positive ? 'positive' : 'negative'}`}>
                {item.profit}
              </div>
              <div className={`item-margin ${item.positive ? 'positive' : 'negative'}`}>
                {item.margin} margin
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemProfitability;