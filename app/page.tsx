'use client';

import {
  EuiPage,
  EuiPageBody,
  EuiPageSection,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';

// Import our custom components
import { DashboardHeader } from './components/header/DashboardHeader';
import { KPICards } from './components/kpi/KPICards';
import { TeamPerformance } from './components/performance/TeamPerformance';
import { AssetFeedback } from './components/performance/AssetFeedback';
import { AgentsTable } from './components/agents/AgentsTable';
import { CallVolumeChart } from './components/charts/CallVolumeChart';
import { CallStatsPanel } from './components/charts/CallStatsPanel';

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
        <DashboardHeader />

        <EuiPageSection paddingSize="none">
          <EuiFlexGroup gutterSize="m" alignItems="flexStart">
            {/* KPI Cards */}
            <EuiFlexItem style={{ maxWidth: '280px', minWidth: '280px' }}>
              <KPICards />
            </EuiFlexItem>

            {/* Team Performance */}
            <EuiFlexItem style={{ maxWidth: '320px', minWidth: '320px' }}>
              <TeamPerformance />
            </EuiFlexItem>

            {/* Asset Feedback */}
            <EuiFlexItem grow={true}>
              <AssetFeedback />
            </EuiFlexItem>

            {/* Call Stats Panel */}
            <EuiFlexItem style={{ maxWidth: '400px', minWidth: '400px' }}>
              <CallStatsPanel />
            </EuiFlexItem>
          </EuiFlexGroup>

          <EuiSpacer size="m" />

          {/* Bottom Row: Chart and Agent Table side by side */}
          <EuiFlexGroup gutterSize="m" alignItems="stretch" style={{ height: '400px' }}>
            <EuiFlexItem>
              <CallVolumeChart />
            </EuiFlexItem>
            <EuiFlexItem>
              <AgentsTable />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPageSection>
      </EuiPageBody>
    </EuiPage>
  );
}
