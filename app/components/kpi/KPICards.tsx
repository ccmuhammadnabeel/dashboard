'use client';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiIcon
} from '@elastic/eui';
import { css } from '@emotion/css';
import { kpiData } from '../../data/mockData';

const cardStyle = css`
  background: #ffffff;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 60px;
`;

const iconContainerStyle = (bgColor: string) => css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const titleStyle = css`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
`;

const labelStyle = css`
  font-size: 11px;
  color: #8c8c8c;
  margin: 0 0 4px 0;
  font-weight: 400;
`;

export const KPICards = () => {
  return (
    <EuiFlexGroup direction="column" gutterSize="s">
      {/* Number of Calls */}
      <EuiFlexItem>
        <div className={cardStyle}>
          <div className={iconContainerStyle('#dbe6ebff')}>
            <EuiIcon type="phone" size="m" style={{ color: '#1890FF' }} />
          </div>
          <div>
            <div className={labelStyle}>Number of calls</div>
            <div className={titleStyle} style={{ color: '#1890FF' }}>
              {kpiData.numberOfCalls.toLocaleString()}
            </div>
          </div>
        </div>
      </EuiFlexItem>

      {/* Avg Scores */}
      <EuiFlexItem>
        <div className={cardStyle}>
          <div className={iconContainerStyle('#F6FFED')}>
            <EuiIcon type="users" size="m" style={{ color: '#52C41A' }} />
          </div>
          <div>
            <div className={labelStyle}>Avg scores</div>
            <div className={titleStyle} style={{ color: '#52C41A' }}>
              {kpiData.avgCustomerSatisfaction}%
            </div>
          </div>
        </div>
      </EuiFlexItem>

      {/* Avg Call Time */}
      <EuiFlexItem>
        <div className={cardStyle}>
          <div className={iconContainerStyle('#FFF7E6')}>
            <EuiIcon type="clock" size="m" style={{ color: '#FA8C16' }} />
          </div>
          <div>
            <div className={labelStyle}>Avg call time</div>
            <div className={titleStyle} style={{ color: '#FA8C16' }}>
              {kpiData.avgCallTime}
            </div>
            <div style={{ fontSize: '11px', color: '#8c8c8c' }}>
              minutes
            </div>
          </div>
        </div>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
