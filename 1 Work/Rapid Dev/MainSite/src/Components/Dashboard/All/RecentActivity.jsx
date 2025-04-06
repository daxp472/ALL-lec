import React from 'react';
import './RecentActivity.css';
import SectionHeader from '../UI/SectionHeader';

const RecentActivity = () => {
  const activities = [
    {
      type: 'Payment Received',
      info: 'customer/invoice/123',
      amount: '₹45,000',
      time: '2 hours ago'
    },
    {
      type: 'Invoice Due',
      info: 'invoice/ab456',
      amount: '₹45,000',
      time: '3 days ago'
    },
    {
      type: 'New Subscription',
      info: 'subscription/xz345',
      amount: '₹45,000',
      time: '5 days ago'
    }
  ];

  return (
    <div className="recent-activity">
      <SectionHeader title="Recent Activity" link="View All" />
      
      <div className="activity-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <div className="activity-details">
              <div className="activity-type">{activity.type}</div>
              <div className="activity-info">{activity.info}</div>
            </div>
            <div className="activity-right">
              <div className="activity-amount">{activity.amount}</div>
              <div className="activity-time">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;