import React from 'react';
import './ExpenseDetails.css';
import SectionHeader from '../UI/SectionHeader';

const ExpenseDetails = () => {
  const expenses = [
    {
      category: 'Inventory',
      items: [
        { name: 'Stock Replenishment - Electronics', amount: '₹8,500', date: 'Today' },
        { name: 'New Product Line - Accessories', amount: '₹6,300', date: 'Yesterday' },
        { name: 'Supplier Payment - Wholesale', amount: '₹7,200', date: '2 days ago' }
      ]
    },
    {
      category: 'Utilities',
      items: [
        { name: 'Electricity Bill', amount: '₹2,800', date: 'Today' },
        { name: 'Internet & Phone', amount: '₹1,200', date: 'Yesterday' },
        { name: 'Water Bill', amount: '₹1,500', date: '3 days ago' }
      ]
    },
    {
      category: 'Operating Expenses',
      items: [
        { name: 'Staff Salaries', amount: '₹3,500', date: 'Today' },
        { name: 'Shop Rent', amount: '₹4,000', date: 'Yesterday' }
      ]
    }
  ];

  return (
    <div className="expense-details">
      <SectionHeader title="Expense Breakdown" link="View All" />
      
      <div className="expense-categories">
        {expenses.map((category, index) => (
          <div key={index} className="expense-category">
            <h4 className="category-title">{category.category}</h4>
            
            <div className="expense-items">
              {category.items.map((item, idx) => (
                <div key={idx} className="expense-item">
                  <div className="expense-item-info">
                    <div className="expense-item-name">{item.name}</div>
                    <div className="expense-item-date">{item.date}</div>
                  </div>
                  <div className="expense-item-amount">{item.amount}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseDetails;