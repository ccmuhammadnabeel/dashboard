'use client';

import { EuiPanel } from '@elastic/eui';
import { css } from '@emotion/css';

const panelStyle = css`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border: 1px solid #f0f0f0;
  height: 100%;
  padding: 16px 16px 8px 16px;
`;

const statsTableStyle = css`
  .header {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr;
    gap: 12px;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
    font-size: 11px;
    font-weight: 600;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .row {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid #f5f5f5;
    font-size: 12px;

    &:last-child {
      border-bottom: none;
    }

    .label { font-weight: 500; color: #333; }
    .value { color: #666; }
  }

  .footerLink {
    text-align: right;
    margin-top: 8px;
    font-size: 12px;
    color: #ff7a45;
    cursor: pointer;
    font-weight: 500;
  }
`;

export const CallStatsPanel = () => {
  const statsData = [
    { label: 'MTD', volume: '13,966', avgMins: '4.57', agents: '89', satisfaction: '63.43', perAgent: '156.92' },
    { label: 'Last 30 days', volume: '13,966', avgMins: '4.57', agents: '89', satisfaction: '63.43', perAgent: '156.92' },
    { label: 'Last week', volume: '8,189', avgMins: '4.62', agents: '88', satisfaction: '63.54', perAgent: '93.06' },
    { label: 'Today', volume: '473', avgMins: '4.63', agents: '18', satisfaction: '63.42', perAgent: '26.28' }
  ];

  return (
    <EuiPanel className={panelStyle} paddingSize="none">
      <div className={statsTableStyle}>
        <div className="header">
          <span>Call Volume</span>
          <span>Avg. Call Mins</span>
          <span>Active Agent</span>
          <span>Satisfaction Score</span>
          <span>Call per Agent</span>
        </div>

        {statsData.map((stat, index) => (
          <div key={index} className="row">
            <span className="label">{stat.label}</span>
            <span className="value">{stat.volume}</span>
            <span className="value">{stat.avgMins}</span>
            <span className="value">{stat.agents}</span>
            <span className="value">{stat.satisfaction}</span>
            <span className="value">{stat.perAgent}</span>
          </div>
        ))}

        <div className="footerLink">More Details</div>
      </div>
    </EuiPanel>
  );
};
