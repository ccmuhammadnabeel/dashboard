'use client';

import {
  EuiBasicTable,
  EuiPanel,
  EuiText,
  EuiHealth,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiButtonIcon
} from '@elastic/eui';
import { css } from '@emotion/css';
import { useState } from 'react';
import { agentsData, Agent } from '../../data/mockData';

const panelStyle = css`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border: 1px solid #f0f0f0;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 16px 16px 0 16px;
`;

const titleStyle = css`
  font-size: 16px;
  font-weight: 600;
  color: #262626;
`;

export const AgentsTable = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(6); // Updated to match pagination
  const [sortField, setSortField] = useState<keyof Agent>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const onTableChange = ({ page, sort }: any) => {
    if (page) {
      const { index: pageIndex, size: pageSize } = page;
      setPageIndex(pageIndex);
      setPageSize(pageSize);
    }
    if (sort) {
      const { field: sortField, direction: sortDirection } = sort;
      setSortField(sortField);
      setSortDirection(sortDirection);
    }
  };

  const columns = [
    {
      field: 'name',
      name: 'Agent',
      sortable: true,
      width: '100px',
      render: (name: string) => (
        <EuiFlexGroup alignItems="center" gutterSize="xs">
          <EuiFlexItem grow={false}>
            <EuiHealth color="success" style={{ width: '6px', height: '6px' }} />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText size="s" style={{ fontWeight: 500, fontSize: '11px' }}>{name}</EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      ),
    },
    {
      field: 'calls',
      name: 'Calls',
      sortable: true,
      align: 'center' as const,
      width: '50px',
      render: (calls: number) => <EuiText size="s" style={{ fontSize: '11px' }}>{calls}</EuiText>,
    },
    {
      field: 'callScore',
      name: 'QA Score %',
      sortable: true,
      align: 'center' as const,
      width: '70px',
      render: (score: number) => <EuiText size="s" style={{ fontSize: '11px' }}>{score.toFixed(1)}</EuiText>,
    },
    {
      field: 'avgCallTime',
      name: 'Avg Call Time',
      sortable: true,
      align: 'center' as const,
      width: '70px',
      render: (time: string) => <EuiText size="s" style={{ fontSize: '11px' }}>{time}</EuiText>,
    },
    {
      field: 'satisfactionScore',
      name: 'Satisfaction Score',
      sortable: true,
      align: 'center' as const,
      width: '80px',
      render: (score: number) => <EuiText size="s" style={{ fontSize: '11px' }}>{score.toFixed(1)}</EuiText>,
    },
    {
      field: 'callbackScore',
      name: 'Callback Score',
      sortable: true,
      align: 'center' as const,
      width: '70px',
      render: (score: number) => <EuiText size="s" style={{ fontSize: '11px' }}>{score.toFixed(1)}</EuiText>,
    },
    {
      name: 'ACTIONS',
      width: '80px',
      render: () => (
        <EuiFlexGroup gutterSize="xs" alignItems="center" justifyContent="center">
          <EuiFlexItem grow={false}>
            <EuiButton size="s" style={{ fontSize: '10px', padding: '4px 8px', height: '24px' }}>
              View
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton size="s" fill style={{ fontSize: '10px', padding: '4px 8px', height: '24px' }}>
              Edit
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      ),
    },
  ];

  const pagination = {
    pageIndex,
    pageSize: 6, // Reduced to fit better in side layout
    totalItemCount: agentsData.length,
    pageSizeOptions: [6, 12],
    showPerPageOptions: false, // Hide to save space
  };

  const sorting = {
    sort: {
      field: sortField,
      direction: sortDirection,
    },
  };

  // Sort and paginate data
  const sortedData = [...agentsData].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return 0;
  });

  const pageOfItems = sortedData.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  );

  return (
    <EuiPanel className={panelStyle} paddingSize="none">
      <div className={headerStyle}>
        <div className={titleStyle}>Agent Performance</div>
        <EuiButton 
          iconType="exportAction" 
          size="s" 
          fill
          style={{ 
            fontSize: '11px',
            backgroundColor: '#1890ff',
            height: '28px',
            padding: '4px 8px'
          }}
        >
          Export
        </EuiButton>
      </div>

      <div className={css`
        font-size: 11px;
        padding: 0 12px 12px 12px;
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        
        .euiTable {
          font-size: 11px !important;
        }
        
        .euiTableHeaderCell {
          font-size: 10px !important;
          font-weight: 600 !important;
          color: #666 !important;
          background-color: #fafafa !important;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 6px 8px !important;
        }
        
        .euiTableRowCell {
          font-size: 11px !important;
          padding: 6px 8px !important;
          border-bottom: 1px solid #f0f0f0 !important;
        }

        .euiBasicTable {
          flex: 1;
          overflow: auto;
        }

        .euiPagination {
          margin-top: 8px;
          flex-shrink: 0;
          .euiButtonEmpty {
            font-size: 10px !important;
            min-height: 24px !important;
          }
        }

        .euiTableRow:hover {
          background-color: #f8f9fa !important;
        }
      `}>
        <EuiBasicTable
          items={pageOfItems}
          columns={columns}
          pagination={pagination}
          sorting={sorting}
          onChange={onTableChange}
          compressed={false}
          tableLayout="fixed"
          noItemsMessage="No agents found"
        />
      </div>
    </EuiPanel>
  );
};
