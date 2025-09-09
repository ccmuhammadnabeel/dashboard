'use client';

import { 
  EuiPanel, 
  EuiFlexGroup, 
  EuiFlexItem, 
  EuiText,
  EuiSpacer,
  EuiLink
} from '@elastic/eui';
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
  .row {
    padding: 10px 0;
    border-bottom: 1px solid #f5f5f5;

    &:last-child {
      border-bottom: none;
    }
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
      <EuiFlexGroup direction="column" gutterSize="none" className={statsTableStyle}>
        {/* Header */}
        <EuiFlexItem grow={false}>
          <EuiFlexGroup gutterSize="m" alignItems="center" style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
            <EuiFlexItem style={{ flex: '1.2' }}>
              <EuiText 
                size="xs" 
                style={{ 
                  fontWeight: 600, 
                  color: '#666', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.5px' 
                }}
              >
                Call Volume
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText 
                size="xs" 
                style={{ 
                  fontWeight: 600, 
                  color: '#666', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.5px' 
                }}
              >
                Avg. Call Mins
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText 
                size="xs" 
                style={{ 
                  fontWeight: 600, 
                  color: '#666', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.5px' 
                }}
              >
                Active agents
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText 
                size="xs" 
                style={{ 
                  fontWeight: 600, 
                  color: '#666', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.5px' 
                }}
              >
                Satisfaction score 
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText 
                size="xs" 
                style={{ 
                  fontWeight: 600, 
                  color: '#666', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.5px' 
                }}
              >
                Call per Agent
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>

        {/* Data Rows */}
        {statsData.map((stat, index) => (
          <EuiFlexItem key={index} grow={false} className="row">
            <EuiFlexGroup gutterSize="m" alignItems="center">
              <EuiFlexItem style={{ flex: '1.2' }}>
                <EuiText size="s" style={{ fontWeight: 500, color: '#333' }}>
                  {stat.label}
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size="s" style={{ color: '#666' }}>
                  {stat.volume}
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size="s" style={{ color: '#666' }}>
                  {stat.avgMins}
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size="s" style={{ color: '#666' }}>
                  {stat.agents}
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size="s" style={{ color: '#666' }}>
                  {stat.satisfaction}
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size="s" style={{ color: '#666' }}>
                  {stat.perAgent}
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        ))}

        {/* Footer Link */}
        <EuiFlexItem grow={false}>
          <EuiFlexGroup justifyContent="flexEnd">
            <EuiFlexItem grow={false}>
              <EuiLink 
                style={{ 
                  marginTop: '8px', 
                  fontSize: '12px', 
                  color: '#ff7a45', 
                  fontWeight: 500 
                }}
              >
                More details
              </EuiLink>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  );
};
