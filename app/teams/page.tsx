'use client';

import { useState } from 'react';
import { css } from '@emotion/css';
import {
  EuiPage,
  EuiPageBody,
  EuiPageSection,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiButton,
  EuiBasicTable,
  EuiButtonIcon,
  EuiIcon,
  EuiPanel
} from '@elastic/eui';
import { Sidebar } from '../components/sidebar/Sidebar';
import { useSidebar } from '../context/SidebarContext';
import { teamsData, Team } from '../data/mockData';

// Emotion CSS styles
const pageContainer = css`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
`;

const mainContent = (sidebarWidth: number) => css`
  margin-left: ${sidebarWidth}px;
  width: calc(100% - ${sidebarWidth}px);
  transition: margin-left 0.3s ease, width 0.3s ease;
  background-color: #f5f7fa;
  min-height: 100vh;
  padding: 16px;
`;

// Header (flattened – no panel like screenshot)
const headerBar = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 8px 0;
`;

const headerTitle = css`
  font-size: 18px;
  font-weight: 600;
  color: #343741;
  margin: 0;
`;

const addButton = css`
  background-color: #0b5fa3;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #084b80;
  }
`;

const tableContainer = css`
  background-color: transparent;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;

  .euiTable {
    border: none;
    background: transparent;
  }

  .euiTableHeader {
    background-color: #d9e8f7; /* light blue like screenshot */
    border-bottom: none;
  }

  .euiTableHeaderCell {
    font-size: 11px;
    font-weight: 600;
    color: #343741;
    text-transform: none;
    letter-spacing: 0;
    padding: 4px 8px !important;
    border-right: none !important;
    background-color: #d9e8f7 !important;
    height: 28px !important;
    
    &:first-child {
      padding-left: 12px !important;
    }
    
    &:last-child {
      padding-right: 12px !important;
      text-align: right;
    }
  }

  .euiTableRowCell {
    padding: 4px 8px !important;
    border-right: none !important;
    border-bottom: none !important;
    vertical-align: middle;
    background-color: #ffffff !important;
    height: 32px !important;
    
    &:first-child {
      padding-left: 12px !important;
    }
    
    &:last-child {
      padding-right: 12px !important;
      text-align: right;
    }
  }

  /* Zebra striping */
  .euiTableRow:nth-child(even) .euiTableRowCell {
    background-color: #f3f3f3 !important;
  }

  .euiTableRow:hover .euiTableRowCell {
    background-color: #f0f6fc !important;
  }

  .euiBasicTable-loading { background: transparent; }
`;

const teamNameText = css`
  font-size: 12px;
  font-weight: 400;
  color: #343741;
  line-height: 1.2;
`;

const actionButtonGroup = css`
  display: flex;
  gap: 6px;
  justify-content: flex-end;
`;

const actionButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  border: 1px solid transparent;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;

  &:hover {
    background-color: #eef5fb;
    border-color: #b3cfe4;
  }

  &.delete-btn:hover {
    background-color: #fceeee;
    border-color: #f0b4b4;
  }
`;

const totalTeamsText = css`
  font-size: 11px;
  font-weight: 600;
  color: #343741;
  padding: 6px 12px;
  background-color: #d3d3d3;
  margin: 0;
`;

export default function TeamsPage() {
  const { isExpanded } = useSidebar();
  const sidebarWidth = isExpanded ? 240 : 70;
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(25); // Show all teams at once
  const [sortField, setSortField] = useState<keyof Team>('name');
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
      name: 'Team',
      sortable: true,
      width: 'auto',
      render: (name: string) => (
        <EuiText className={teamNameText}>{name}</EuiText>
      ),
    },
    {
      name: 'Actions',
      width: '120px',
      render: (team: Team) => (
        <EuiFlexGroup gutterSize="xs" alignItems="center" justifyContent="flexEnd" responsive={false}>
          <EuiFlexItem grow={false}>
            <button
              className={`${actionButton} edit-btn`}
              onClick={() => console.log('Edit team:', team.id)}
              aria-label="Edit team"
            >
              <EuiIcon type="pencil" size="s" color="#0077cc" />
            </button>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <button
              className={`${actionButton} delete-btn`}
              onClick={() => console.log('Delete team:', team.id)}
              aria-label="Delete team"
            >
              <EuiIcon type="trash" size="s" color="#e74c3c" />
            </button>
          </EuiFlexItem>
        </EuiFlexGroup>
      ),
    },
  ];

  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount: teamsData.length,
    pageSizeOptions: [25, 50],
    showPerPageOptions: false, // Hide pagination controls since we're showing all
  };

  const sorting = {
    sort: {
      field: sortField,
      direction: sortDirection,
    },
  };

  // Sort and paginate data
  const sortedData = [...teamsData].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    return 0;
  });

  const pageOfItems = sortedData.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  );

  return (
    <EuiFlexGroup direction="row" gutterSize="none" responsive={false} className={pageContainer}>
      {/* Sidebar */}
      <EuiFlexItem grow={false}>
        <Sidebar />
      </EuiFlexItem>
      
      {/* Main Content */}
      <EuiFlexItem className={mainContent(sidebarWidth)}>
        <EuiPage paddingSize="none">
          <EuiPageBody>
            <EuiPageSection paddingSize="none">
              
              {/* Header (flat) */}
              <div className={headerBar}>
                <EuiText className={headerTitle}>Teams Management</EuiText>
                <button className={addButton} onClick={() => console.log('Add new team')}>
                  Add New Team
                </button>
              </div>

              {/* Teams Table */}
              <EuiPanel className={tableContainer} paddingSize="none" hasShadow={false} hasBorder={false}>
                <EuiBasicTable
                  items={pageOfItems}
                  columns={columns}
                  pagination={pagination}
                  sorting={sorting}
                  onChange={onTableChange}
                  tableLayout="auto"
                  noItemsMessage="No teams found"
                  compressed={true}
                />
                
                {/* Total Teams Footer */}
                <EuiFlexItem grow={false}>
                  <EuiText className={totalTeamsText}>
                    Total Teams: {teamsData.length}
                  </EuiText>
                </EuiFlexItem>
              </EuiPanel>

            </EuiPageSection>
          </EuiPageBody>
        </EuiPage>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
