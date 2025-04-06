import React from 'react';
import './ProfitAnalysis.css';
import SectionHeader from '../UI/SectionHeader';

const ProfitAnalysis = () => {
  return (
    <div className="profit-analysis">
      <SectionHeader title="Profit Analysis" link="View All" />
      
      <div className="chart-container">
        <svg viewBox="0 0 300 150" width="100%" height="100%" className="profit-chart">
          {/* X-axis */}
          <line x1="10" y1="130" x2="290" y2="130" stroke="#3a3f4b" strokeWidth="1" />
          
          {/* Y-axis */}
          <line x1="10" y1="10" x2="10" y2="130" stroke="#3a3f4b" strokeWidth="1" />
          
          {/* X-axis labels */}
          <text x="30" y="145" className="chart-text">Jan</text>
          <text x="70" y="145" className="chart-text">Feb</text>
          <text x="110" y="145" className="chart-text">Mar</text>
          <text x="150" y="145" className="chart-text">Apr</text>
          <text x="190" y="145" className="chart-text">May</text>
          <text x="230" y="145" className="chart-text">Jun</text>
          <text x="270" y="145" className="chart-text">Jul</text>
          
          {/* Y-axis labels */}
          <text x="5" y="130" className="chart-text">0</text>
          <text x="5" y="110" className="chart-text">20</text>
          <text x="5" y="90" className="chart-text">40</text>
          <text x="5" y="70" className="chart-text">60</text>
          <text x="5" y="50" className="chart-text">80</text>
          <text x="0" y="30" className="chart-text">100</text>
          
          {/* Chart line */}
          <polyline
            points="30,60 70,45 110,65 150,55 190,40 230,70 270,50"
            fill="none"
            stroke="#ff6b35"
            strokeWidth="2"
          />
          
          {/* Data points */}
          <circle cx="30" cy="60" r="3" fill="#ff6b35" />
          <circle cx="70" cy="45" r="3" fill="#ff6b35" />
          <circle cx="110" cy="65" r="3" fill="#ff6b35" />
          <circle cx="150" cy="55" r="3" fill="#ff6b35" />
          <circle cx="190" cy="40" r="3" fill="#ff6b35" />
          <circle cx="230" cy="70" r="3" fill="#ff6b35" />
          <circle cx="270" cy="50" r="3" fill="#ff6b35" />
        </svg>
      </div>
    </div>
  );
};

export default ProfitAnalysis;