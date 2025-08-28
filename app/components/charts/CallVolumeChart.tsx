'use client';

import {
  EuiPanel
} from '@elastic/eui';
import { css } from '@emotion/css';

const panelStyle = css`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border: 1px solid #f0f0f0;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const timeFilterStyle = css`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  
  span {
    font-size: 12px;
    color: #666;
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 4px;
    font-weight: 500;
    
    &.active {
      color: #1890ff;
      background-color: #e6f7ff;
      font-weight: 600;
    }
  }
`;

const totalCallsStyle = css`
  position: absolute;
  top: 16px;
  right: 16px;
  text-align: right;
  
  .number {
    font-size: 20px;
    font-weight: 600;
    color: #1890ff;
    line-height: 1.2;
  }
  
  .label {
    font-size: 12px;
    color: #666;
    margin-top: 2px;
  }
`;

const chartContainerStyle = css`
  height: 300px;
  background: linear-gradient(180deg, #e6f7ff 0%, #f0f9ff 100%);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  margin: 16px 0 0 0;
  flex: 1;
`;

// Removed stats table from chart component; it's now in CallStatsPanel

export const CallVolumeChart = () => {
  const timeFilters = ['5D', '1W', 'MTD', '3M', '6M', '1Y'];
  const activeFilter = 'MTD';

  return (
    <div className={panelStyle}>
      {/* Time Filters */}
      <div className={timeFilterStyle}>
        {timeFilters.map((filter) => (
          <span 
            key={filter} 
            className={filter === activeFilter ? 'active' : ''}
          >
            {filter}
          </span>
        ))}
      </div>

      {/* Total Calls Display */}
      <div className={totalCallsStyle}>
        <div className="number">13,966</div>
        <div className="label">Total Calls</div>
      </div>

      {/* Chart Area */}
      <div className={chartContainerStyle}>
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1890FF', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#1890FF', stopOpacity: 0.05 }} />
            </linearGradient>
          </defs>
          
          {/* Area chart path matching the inspired design */}
          <path
            d="M 30 160 L 80 140 L 130 120 L 180 100 L 230 60 L 280 80 L 330 70 L 380 50 L 430 90 L 480 110 L 530 130 L 580 150 L 630 120"
            stroke="#1890FF"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Area under curve */}
          <path
            d="M 30 160 L 80 140 L 130 120 L 180 100 L 230 60 L 280 80 L 330 70 L 380 50 L 430 90 L 480 110 L 530 130 L 580 150 L 630 120 L 630 200 L 30 200 Z"
            fill="url(#areaGradient)"
          />
        </svg>

        {/* Date labels at bottom */}
        <div style={{ 
          position: 'absolute', 
          bottom: '8px', 
          left: '30px', 
          right: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '10px',
          color: '#999'
        }}>
          <span>2025-08-14</span>
          <span>2025-08-18</span>
          <span>2025-08-22</span>
          <span>2025-08-26</span>
        </div>
      </div>

  {/* Stats moved to CallStatsPanel */}
    </div>
  );
};
