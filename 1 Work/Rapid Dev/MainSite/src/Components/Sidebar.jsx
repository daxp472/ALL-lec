import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>BusinessPro</h2>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <span className="icon">📊</span> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/stock-management"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <span className="icon">📦</span> Stock Management
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sales-entry"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <span className="icon">💰</span> Sales Entry
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/advance-payments"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <span className="icon">💳</span> Advance Payments
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/expense-tracking"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <span className="icon">📝</span> Expense Tracking
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <span className="icon">📊</span> Reports
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;