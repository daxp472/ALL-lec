import React from 'react';
import './SummaryCards.css';
import SummaryCard from './SummaryCard';
import CategoryBreakdown from './CategoryBreakdown';

const SummaryCards = ({ filterData }) => {
  const getTimeBasedData = () => {
    switch (filterData.timeFrame) {
      case 'Today':
        return {
          sales: { amount: '₹124,500', change: '+12.5%' },
          expenses: { amount: '₹35,000', change: '+6.2%' },
          earnings: { amount: '₹89,500', change: '+4.5%' },
          pending: { amount: '₹12,000', count: '4' }
        };
      case 'This Week':
        return {
          sales: { amount: '₹824,500', change: '+15.2%' },
          expenses: { amount: '₹235,000', change: '+8.4%' },
          earnings: { amount: '₹589,500', change: '+11.2%' },
          pending: { amount: '₹52,000', count: '12' }
        };
      case 'This Month':
        return {
          sales: { amount: '₹3,124,500', change: '+18.7%' },
          expenses: { amount: '₹935,000', change: '+9.8%' },
          earnings: { amount: '₹2,189,500', change: '+14.3%' },
          pending: { amount: '₹152,000', count: '25' }
        };
      default:
        return {
          sales: { amount: '₹124,500', change: '+12.5%' },
          expenses: { amount: '₹35,000', change: '+6.2%' },
          earnings: { amount: '₹89,500', change: '+4.5%' },
          pending: { amount: '₹12,000', count: '4' }
        };
    }
  };

  const timeData = getTimeBasedData();
  
  const summaryData = [
    {
      title: 'Total Sales',
      amount: timeData.sales.amount,
      change: timeData.sales.change,
      positive: true,
      comparedTo: `vs previous ${filterData?.timeFrame?.toLowerCase() || 'period'}`,
      categories: [
        { name: 'Cash', value: '₹45,000' },
        { name: 'Online', value: '₹52,000' },
        { name: 'Credit', value: '₹18,500' },
        { name: 'Advance', value: '₹9,000' }
      ]
    },
    {
      title: 'Total Expenses',
      amount: timeData.expenses.amount,
      change: timeData.expenses.change,
      positive: false,
      comparedTo: `vs previous ${filterData?.timeFrame?.toLowerCase() || 'period'}`,
      categories: [
        { name: 'Inventory', value: '₹22,000' },
        { name: 'Utilities', value: '₹5,500' },
        { name: 'Rent', value: '₹4,000' },
        { name: 'Salaries', value: '₹3,500' }
      ]
    },
    {
      title: 'Net Earnings',
      amount: timeData.earnings.amount,
      change: timeData.earnings.change,
      positive: true,
      comparedTo: `vs previous ${filterData?.timeFrame?.toLowerCase() || 'period'}`,
      categories: [
        { name: 'Retail', value: '₹48,500' },
        { name: 'Services', value: '₹26,000' },
        { name: 'Wholesale', value: '₹15,000' }
      ]
    },
    {
      title: 'Pending Advances',
      amount: timeData.pending.amount,
      change: timeData.pending.count,
      positive: false,
      comparedTo: 'pending payments',
      categories: [
        { name: 'Customer #105', value: '₹4,500' },
        { name: 'Customer #132', value: '₹3,000' },
        { name: 'Customer #087', value: '₹2,500' },
        { name: 'Customer #212', value: '₹2,000' }
      ]
    }
  ];

  return (
    <div className="summary-cards">
      {summaryData.map((card, index) => (
        <div key={index} className="summary-card-container">
          <SummaryCard 
            title={card.title}
            amount={card.amount}
            change={card.change}
            positive={card.positive}
            comparedTo={card.comparedTo}
          />
          {card.categories.length > 0 && (
            <CategoryBreakdown categories={card.categories} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;