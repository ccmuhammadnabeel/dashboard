'use client';

import {
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageSection,
  EuiTitle,
  EuiText,
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiPanel,
  EuiStat,
  EuiIcon,
} from '@elastic/eui';
import { useState } from 'react';

export default function Home() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <EuiPage paddingSize="l">
      <EuiPageBody>
        {/* Page Header - EUI Concept 1: Headers and Navigation */}
        <EuiPageHeader
          iconType="dashboardApp"
          pageTitle="My Dashboard"
          description="Learning Elastic UI concepts with a simple dashboard"
          rightSideItems={[
            <EuiButton fill iconType="plusInCircle">
              Add New Item
            </EuiButton>
          ]}
        />

        <EuiPageSection>
          {/* Stats Section - EUI Concept 2: Stats and Metrics */}
          <EuiTitle size="l">
            <h2>Overview Stats</h2>
          </EuiTitle>
          <EuiSpacer size="m" />
          
          <EuiFlexGroup gutterSize="l">
            <EuiFlexItem>
              <EuiStat
                title="1,247"
                description="Total Users"
                titleColor="primary"
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiStat
                title="89%"
                description="Success Rate"
                titleColor="success"
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiStat
                title={clickCount.toString()}
                description="Button Clicks"
                titleColor="accent"
              />
            </EuiFlexItem>
          </EuiFlexGroup>

          <EuiSpacer size="xl" />

          {/* Cards Section - EUI Concept 3: Cards and Layouts */}
          <EuiTitle size="l">
            <h2>Dashboard Cards</h2>
          </EuiTitle>
          <EuiSpacer size="m" />

          <EuiFlexGroup gutterSize="l">
            <EuiFlexItem>
              <EuiCard
                icon={<EuiIcon size="xxl" type="analyzeEvent" />}
                title="Analytics"
                description="View detailed analytics and reports for your data"
                onClick={() => alert('Analytics clicked!')}
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiCard
                icon={<EuiIcon size="xxl" type="gear" />}
                title="Settings"
                description="Configure your application settings and preferences"
                onClick={() => alert('Settings clicked!')}
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiCard
                icon={<EuiIcon size="xxl" type="help" />}
                title="Help Center"
                description="Get help and find documentation for common tasks"
                onClick={() => alert('Help clicked!')}
              />
            </EuiFlexItem>
          </EuiFlexGroup>

          <EuiSpacer size="xl" />

          {/* Interactive Section - EUI Concept 4: Interactivity */}
          <EuiPanel paddingSize="l">
            <EuiTitle size="m">
              <h3>Interactive Demo</h3>
            </EuiTitle>
            <EuiSpacer size="m" />
            <EuiText>
              <p>Click the button below to see state management in action:</p>
            </EuiText>
            <EuiSpacer size="m" />
            <EuiButton
              fill
              color="primary"
              iconType="play"
              onClick={() => setClickCount(clickCount + 1)}
            >
              Click me! ({clickCount})
            </EuiButton>
          </EuiPanel>
        </EuiPageSection>
      </EuiPageBody>
    </EuiPage>
  );
}
