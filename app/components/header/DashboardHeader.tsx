'use client';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiSelect,
  EuiButton,
  EuiDatePicker,
  EuiFormRow,
  EuiSpacer,
  EuiText,
  EuiIcon
} from '@elastic/eui';
import { useState } from 'react';
import moment from 'moment';

export const DashboardHeader = () => {
  const [startDate, setStartDate] = useState(moment('2025-08-26'));
  const [serviceGroup, setServiceGroup] = useState('customer-support');
  const [agentFilter, setAgentFilter] = useState('top-performers');

  const serviceGroupOptions = [
    { value: 'customer-support', text: 'Customer Support' },
    { value: 'sales', text: 'Sales Team' },
    { value: 'technical', text: 'Technical Support' }
  ];

  const agentOptions = [
    { value: 'top-performers', text: 'Top Performers' },
    { value: 'all', text: 'All Agents' },
    { value: 'new', text: 'New Agents' }
  ];

  return (
    <EuiFlexGroup direction="column" gutterSize="none">
      <EuiFlexItem style={{ marginBottom: '24px' }}>
        {/* Dashboard Title */}
        <EuiFlexGroup alignItems="center" gutterSize="s" style={{ marginBottom: '16px' }}>
          <EuiFlexItem grow={false}>
            <EuiIcon type="dashboardApp" size="l" color="primary" />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiText style={{ fontSize: '24px', fontWeight: 600, color: '#262626' }}>
              Dashboard
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
        
        <EuiText size="s" color="subdued" style={{ marginBottom: '24px' }}>
          Call center analytics and performance metrics
        </EuiText>
        
        {/* Filters Row */}
        <EuiFlexGroup gutterSize="m" alignItems="flexEnd" responsive={false}>
          <EuiFlexItem grow={false} style={{ minWidth: '150px' }}>
            <EuiFormRow label="Date" style={{ marginBottom: 0 }}>
              <EuiDatePicker
                selected={startDate}
                onChange={setStartDate}
                dateFormat="DD/MM/YYYY"
                placeholder="26/08/2025"
                compressed
              />
            </EuiFormRow>
          </EuiFlexItem>
          
          <EuiFlexItem grow={false} style={{ minWidth: '180px' }}>
            <EuiFormRow label="Service Groups" style={{ marginBottom: 0 }}>
              <EuiSelect
                options={serviceGroupOptions}
                value={serviceGroup}
                onChange={(e) => setServiceGroup(e.target.value)}
                compressed
              />
            </EuiFormRow>
          </EuiFlexItem>
          
          <EuiFlexItem grow={false} style={{ minWidth: '150px' }}>
            <EuiFormRow label="Agents" style={{ marginBottom: 0 }}>
              <EuiSelect
                options={agentOptions}
                value={agentFilter}
                onChange={(e) => setAgentFilter(e.target.value)}
                compressed
              />
            </EuiFormRow>
          </EuiFlexItem>
          
          <EuiFlexItem grow={false}>
            <EuiButton 
              fill 
              color="primary" 
              size="s"
              style={{ 
                backgroundColor: '#FA8C16', 
                border: 'none',
                boxShadow: '0 2px 4px rgba(250, 140, 22, 0.3)'
              }}
            >
              Export
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};








