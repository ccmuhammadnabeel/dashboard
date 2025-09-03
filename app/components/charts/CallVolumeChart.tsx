'use client';

import {
  EuiPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiButtonEmpty
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
  .filter-button {
    font-size: 12px;
    color: #666;
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
    <EuiPanel className={panelStyle} paddingSize="none">
      <EuiFlexGroup direction="column" gutterSize="m" style={{ height: '100%' }}>
        {/* Time Filters */}
        <EuiFlexItem grow={false}>
          <EuiFlexGroup gutterSize="m" alignItems="center" className={timeFilterStyle}>
            {timeFilters.map((filter) => (
              <EuiFlexItem key={filter} grow={false}>
                <EuiButtonEmpty
                  size="s"
                  className={`filter-button ${filter === activeFilter ? 'active' : ''}`}
                  style={{
                    fontSize: '12px',
                    color: filter === activeFilter ? '#1890ff' : '#666',
                    backgroundColor: filter === activeFilter ? '#e6f7ff' : 'transparent',
                    fontWeight: filter === activeFilter ? 600 : 500,
                    padding: '6px 12px',
                    borderRadius: '4px',
                    minHeight: 'auto',
                    height: 'auto'
                  }}
                >
                  {filter}
                </EuiButtonEmpty>
              </EuiFlexItem>
            ))}
          </EuiFlexGroup>
        </EuiFlexItem>

        {/* Chart Area with Total Calls */}
        <EuiFlexItem style={{ position: 'relative' }}>
          {/* Total Calls Display */}
          <EuiFlexGroup 
            className={totalCallsStyle}
            direction="column" 
            gutterSize="none" 
            alignItems="flexEnd"
          >
            <EuiFlexItem grow={false}>
              <EuiText 
                style={{ 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  color: '#1890ff', 
                  lineHeight: 1.2 
                }}
              >
                13,966
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiText 
                size="xs" 
                style={{ 
                  color: '#666', 
                  marginTop: '2px' 
                }}
              >
                Total Calls
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>

          {/* Chart Container */}
          <EuiPanel 
            className={chartContainerStyle} 
            paddingSize="none" 
            style={{ position: 'relative', height: '300px' }}
          >
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
            <EuiFlexGroup 
              justifyContent="spaceBetween"
              style={{ 
                position: 'absolute', 
                bottom: '8px', 
                left: '30px', 
                right: '30px'
              }}
            >
              <EuiFlexItem grow={false}>
                <EuiText size="xs" style={{ color: '#999' }}>2025-08-14</EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiText size="xs" style={{ color: '#999' }}>2025-08-18</EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiText size="xs" style={{ color: '#999' }}>2025-08-22</EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiText size="xs" style={{ color: '#999' }}>2025-08-26</EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  );
};
