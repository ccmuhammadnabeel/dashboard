'use client';

import {
  EuiPage,
  EuiPageBody,
  EuiPageSection,
  EuiSpacer,
} from '@elastic/eui';

// Import our custom components
import { DashboardHeader } from './components/header/DashboardHeader';
import { KPICards } from './components/kpi/KPICards';
import { TeamPerformance } from './components/performance/TeamPerformance';
import { AssetFeedback } from './components/performance/AssetFeedback';
import { AgentsTable } from './components/agents/AgentsTable';
import { CallVolumeChart } from './components/charts/CallVolumeChart';
import { CallStatsPanel } from './components/charts/CallStatsPanel';
import { css } from '@emotion/css';

export default function Home() {
  return (
    <EuiPage 
      paddingSize="l" 
      style={{ 
        backgroundColor: '#f5f7fa',
        minHeight: '100vh'
      }}
    >
      <EuiPageBody style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Dashboard Header with filters */}
        <DashboardHeader />

        <EuiPageSection paddingSize="none">
          {/* Layout matching the exact inspired design */}
          <div
            className={css`
              display: grid;
              grid-template-columns: 280px 320px 1fr 400px; /* KPIs, Team Performance, Asset Feedback, Stats */
              grid-template-rows: auto auto;
              gap: 16px;
              align-items: start;
            `}
          >
            {/* Top Row 1: KPI Cards - vertical */}
            <div className={css`grid-column: 1; grid-row: 1;`}>
              <KPICards />
            </div>

            {/* Top Row 1: Team Performance */}
            <div className={css`grid-column: 2; grid-row: 1;`}>
              <TeamPerformance />
            </div>

            {/* Top Row 1: Asset Feedback */}
            <div className={css`grid-column: 3; grid-row: 1;`}>
              <AssetFeedback />
            </div>

            {/* Top Row 1: Call Stats Panel */}
            <div className={css`grid-column: 4; grid-row: 1;`}>
              <CallStatsPanel />
            </div>

            {/* Bottom Row: Chart and Agent Table side by side */}
            <div className={css`grid-column: 1 / -1; grid-row: 2;`}>
              <div className={css`
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 16px;
                align-items: start;
                height: 400px;
              `}>
                <CallVolumeChart />
                <AgentsTable />
              </div>
            </div>
          </div>
        </EuiPageSection>
      </EuiPageBody>
    </EuiPage>
  );
}
