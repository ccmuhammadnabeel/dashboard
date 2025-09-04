'use client';

import { useState } from 'react';
import { css } from '@emotion/css';
import { EuiIcon } from '@elastic/eui';
import { Sidebar } from '../components/sidebar/Sidebar';
import { useSidebar } from '../context/SidebarContext';
import { kpiSections } from '../data/kpiSections';

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

const pageBody = css`
  max-width: none;
  margin: 0;
  padding-left: 20px;
  padding-right: 20px;
`;

const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const headerTitle = css`
  font-size: 20px;
  font-weight: 600;
  color: #343741;
  margin: 0;
`;

const moreDetailsButton = css`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1px solid #FF6B35;
  color: #FF6B35;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #FF6B35;
    color: white;
  }
`;

const kpiSection = css`
  margin-bottom: 8px;
`;

const sectionHeader = (isExpanded: boolean) => css`
  background-color: white;
  padding: 16px;
  cursor: pointer;
  border: ${isExpanded ? '2px solid #0077CC' : '1px solid #D3DAE6'};
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border 0.2s ease;

  &:hover {
    border-color: ${isExpanded ? '#0077CC' : '#98A2B3'};
  }
`;

const sectionTitle = css`
  font-size: 16px;
  font-weight: 600;
  color: #343741;
  margin: 0;
`;

const expandedContent = css`
  background-color: white;
  padding: 16px;
  margin-top: 0;
  border-top: none;
  border-left: 2px solid #0077CC;
  border-right: 2px solid #0077CC;
  border-bottom: 2px solid #0077CC;
  border-radius: 0 0 6px 6px;
`;

const questionsSummary = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const summaryText = css`
  font-size: 14px;
  color: #666;
  font-weight: 500;
  margin: 0;
`;

const table = css`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

const tableHeader = css`
  background-color: #f8f9fa;
  border-bottom: 2px solid #D3DAE6;
`;

const tableHeaderCell = css`
  padding: 12px;
  text-align: left;
  font-weight: 600;
  font-size: 12px;
  color: #343741;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-right: 1px solid #D3DAE6;

  &:last-child {
    border-right: none;
  }

  &.center {
    text-align: center;
    width: 80px;
  }

  &.questions {
    width: 45%;
  }
`;

const tableRow = css`
  border-bottom: 1px solid #D3DAE6;

  &:hover {
    background-color: #f8f9fa;
  }

  &.total-row {
    background-color: #f8f9fa;
    font-weight: 600;

    &:hover {
      background-color: #f0f1f3;
    }
  }
`;

const tableCell = css`
  padding: 12px;
  border-right: 1px solid #D3DAE6;
  vertical-align: top;

  &:last-child {
    border-right: none;
  }

  &.center {
    text-align: center;
    font-weight: 500;
  }

  &.question-text {
    font-size: 13px;
    line-height: 1.4;
  }

  &.answer-text {
    font-size: 13px;
    line-height: 1.4;
  }
`;

export default function KPIPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('crm-talkehr');
  const { isExpanded } = useSidebar();
  const sidebarWidth = isExpanded ? 240 : 70;

  const handleSectionClick = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className={pageContainer}>
      {/* Main Sidebar */}
      <div style={{ position: 'fixed', zIndex: 1000 }}>
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className={mainContent(sidebarWidth)}>
        <div className={pageBody}>
          {/* Header */}
          <div className={header}>
            <h1 className={headerTitle}>Agent Performance KPIs</h1>
            <button className={moreDetailsButton}>
              <EuiIcon type="arrowLeft" size="s" />
              More Details
            </button>
          </div>

          {/* KPI Sections */}
          {Object.entries(kpiSections).map(([sectionId, section]) => (
            <div key={sectionId} className={kpiSection}>
              {/* Section Header */}
              <div 
                className={sectionHeader(expandedSection === sectionId)}
                onClick={() => handleSectionClick(sectionId)}
              >
                <h2 className={sectionTitle}>{section.name}</h2>
                <EuiIcon 
                  type={expandedSection === sectionId ? "arrowUp" : "arrowDown"} 
                  size="m" 
                />
              </div>

              {/* Expanded Content */}
              {expandedSection === sectionId && (
                <div className={expandedContent}>
                  <div className={questionsSummary}>
                    <p className={summaryText}>
                      Total Questions: {section.questions.length}
                    </p>
                  </div>

                  {/* Questions Table */}
                  <table className={table}>
                    <thead className={tableHeader}>
                      <tr>
                        <th className={`${tableHeaderCell} center`}>
                          SR. #
                        </th>
                        <th className={`${tableHeaderCell} questions`}>
                          QUESTIONS
                        </th>
                        <th className={tableHeaderCell}>
                          ANSWERS
                        </th>
                      </tr>
                    </thead>
                    
                    <tbody>
                      {section.questions.map((item) => (
                        <tr key={item.id} className={tableRow}>
                          <td className={`${tableCell} center`}>
                            {item.id}
                          </td>
                          <td className={`${tableCell} question-text`}>
                            {item.question}
                          </td>
                          <td className={`${tableCell} answer-text`}>
                            {item.answer}
                          </td>
                        </tr>
                      ))}
                      
                      {/* Total KPIs Row */}
                      <tr className={`${tableRow} total-row`}>
                        <td className={`${tableCell} center`}>
                          
                        </td>
                        <td className={tableCell}>
                          Total KPIs: {section.totalKpis}
                        </td>
                        <td className={tableCell}>
                          
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
