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
import { Sidebar } from './components/sidebar/Sidebar';
import { DashboardHeader } from './components/header/DashboardHeader';
import { KPICards } from './components/kpi/KPICards';
import { TeamPerformance } from './components/performance/TeamPerformance';
import { AssetFeedback } from './components/performance/AssetFeedback';
import { AgentsTable } from './components/agents/AgentsTable';
import { CallVolumeChart } from './components/charts/CallVolumeChart';
import { CallStatsPanel } from './components/charts/CallStatsPanel';
import { useSidebar } from './context/SidebarContext';

export default function Home() {
  const { isExpanded } = useSidebar();
  const sidebarWidth = isExpanded ? 240 : 70;
  
  return (
    <EuiFlexGroup direction="row" gutterSize="none" responsive={false}>
      {/* Sidebar */}
      <EuiFlexItem grow={false}>
        <Sidebar />
      </EuiFlexItem>
      
      {/* Main Content */}
      <EuiFlexItem style={{ 
        marginLeft: `${sidebarWidth}px`, 
        width: `calc(100% - ${sidebarWidth}px)`, 
        transition: 'margin-left 0.3s ease, width 0.3s ease' 
      }}>
        <EuiPage
          paddingSize="m" 
          style={{ 
            backgroundColor: '#f5f7fa',
            minHeight: '100vh'
          }}
        >1
          <EuiPageBody style={{ maxWidth: 'none', margin: '0', paddingLeft: '20px', paddingRight: '20px' }}>
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
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}