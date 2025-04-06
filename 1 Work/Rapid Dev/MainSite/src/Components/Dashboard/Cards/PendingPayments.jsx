import React from 'react';
import './PendingPayments.css';
import SectionHeader from '../UI/SectionHeader';

const PendingPayments = () => {
  const pendingPayments = [
    {
      id: 'ADV-105',
      customer: 'Rajesh Enterprises',
      amount: '₹4,500',
      dueDate: '15 Apr 2025',
      status: 'Overdue'
    },
    {
      id: 'ADV-132',
      customer: 'M/S Tech Solutions',
      amount: '₹3,000',
      dueDate: '20 Apr 2025',
      status: 'Pending'
    },
    {
      id: 'ADV-087',
      customer: 'Gupta Traders',
      amount: '₹2,500',
      dueDate: '25 Apr 2025',
      status: 'Pending'
    },
    {
      id: 'ADV-212',
      customer: 'Sharma Retail',
      amount: '₹2,000',
      dueDate: '30 Apr 2025',
      status: 'Pending'
    }
  ];

  return (
    <div className="pending-payments">
      <SectionHeader title="Pending Advance Payments" link="View All" />
      
      <div className="pending-table">
        <div className="table-header">
          <div className="header-item">ID</div>
          <div className="header-item">Customer</div>
          <div className="header-item">Amount</div>
          <div className="header-item">Due Date</div>
          <div className="header-item">Status</div>
        </div>
        
        {pendingPayments.map((payment, index) => (
          <div key={index} className="table-row">
            <div className="row-item id">{payment.id}</div>
            <div className="row-item customer">{payment.customer}</div>
            <div className="row-item amount">{payment.amount}</div>
            <div className="row-item due-date">{payment.dueDate}</div>
            <div className={`row-item status ${payment.status === 'Overdue' ? 'overdue' : 'pending'}`}>
              {payment.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingPayments;