'use client';

import {
  EuiPanel,
  EuiText,
  EuiProgress
} from '@elastic/eui';
import { css } from '@emotion/css';
import { useState } from 'react';

const panelStyle = css`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border: 1px solid #f0f0f0;
  height: 100%;
  padding: 0;
`;

const tabsContainerStyle = css`
  display: flex;
  margin-bottom: 0;
`;

const tabStyle = (isActive: boolean) => css`
  background-color: ${isActive ? '#ff7a45' : '#f5f5f5'};
  color: ${isActive ? 'white' : '#666'};
  font-size: 12px;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  border-radius: ${isActive ? '8px 8px 0 0' : '8px 8px 0 0'};
  margin-right: 2px;
  
  &:hover {
    background-color: ${isActive ? '#ff7a45' : '#e8e8e8'};
  }
`;

const contentStyle = css`
  padding: 20px;
`;

const progressItemStyle = css`
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const progressTextStyle = css`
  font-size: 12px;
  color: #666;
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.4;
`;

export const AssetFeedback = () => {
  const [selectedTabId, setSelectedTabId] = useState('improvement');

  const improvementData = [
    { text: "CSRs are unable to fully answer t...", percentage: 4.52 },
    { text: "CSRs are failing to provide a positi...", percentage: 92.97 },
    { text: "CSRs do not consistently attempts...", percentage: 96.14 },
    { text: "CSRs are not verifying the patient...", percentage: 98.64 }
  ];

  const excellenceData = [
    { text: "Excellent customer service delivery", percentage: 95.2 },
    { text: "Quick problem resolution skills", percentage: 88.7 },
    { text: "Professional communication", percentage: 92.1 },
    { text: "Product knowledge expertise", percentage: 89.5 }
  ];

  const tabs = [
    {
      id: 'improvement',
      name: 'Areas of Improvement',
      content: improvementData
    },
    {
      id: 'excellence', 
      name: 'Areas Of Excellence',
      content: excellenceData
    }
  ];

  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className={panelStyle}>
      {/* Tabs */}
      <div className={tabsContainerStyle}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={tabStyle(tab.id === selectedTabId)}
            onClick={() => setSelectedTabId(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      
      {/* Content */}
      <div className={contentStyle}>
        {selectedTab?.content.map((item, index) => (
          <div key={index} className={progressItemStyle}>
            <div className={progressTextStyle}>
              <span>{item.text}</span>
              <span style={{ fontWeight: 600 }}>{item.percentage}%</span>
            </div>
            <EuiProgress
              value={item.percentage}
              max={100}
              color="danger"
              size="s"
              style={{ 
                height: '6px',
                backgroundColor: '#f5f5f5',
                borderRadius: '3px'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
